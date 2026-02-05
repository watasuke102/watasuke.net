#![feature(fn_traits, unboxed_closures)]

mod config;
mod contents;
mod git;
mod graphql;
mod usecase;
mod util;

use std::{
  io::{Read, Write},
  sync::Arc,
};

use axum::{
  extract::{Path, State},
  http::{HeaderMap, HeaderValue, StatusCode, header},
  response::IntoResponse,
  routing::{MethodFilter, get, on},
};
use futures_util::TryStreamExt;
use juniper::{EmptySubscription, RootNode};
use juniper_axum::{graphiql, graphql};

type Schema = RootNode<graphql::Query, graphql::Mutation, EmptySubscription<Context>>;

#[derive(Clone, Debug, Default)]
pub struct Context {
  config: config::Config,
}
impl juniper::Context for Context {
}
impl Context {
  fn new() -> anyhow::Result<Self> {
    Ok(Context {
      config: config::Config::get(),
    })
  }
}

async fn handle_get_img(
  Path((slug, img_name)): Path<(String, String)>,
  State(context): State<Arc<Context>>,
) -> impl IntoResponse {
  let article = match usecase::articles::get(&context.config.contents_path, &slug.to_string()) {
    Ok(Some(article)) => article,
    Ok(None) => {
      return Err((StatusCode::NOT_FOUND, format!("not found: {}", slug)));
    }
    Err(e) => {
      return Err((StatusCode::INTERNAL_SERVER_ERROR, e.to_string()));
    }
  };
  let path = std::path::Path::new(article.article_path()).join(&img_name);

  let content_type = {
    let Ok(mut file) = std::fs::File::open(&path) else {
      return Err((
        StatusCode::NOT_FOUND,
        format!("not found: {}/{}", slug, img_name),
      ));
    };
    let mut buf = [0u8; 12];
    let Ok(_) = file.read_exact(&mut buf) else {
      return Err((
        StatusCode::INTERNAL_SERVER_ERROR,
        format!("failed to read file: {}/{}", slug, img_name),
      ));
    };

    let format = match buf {
      [0x89, 0x50, 0x4e, 0x47, ..] => "image/png",
      [0xff, 0xd8, 0xff, ..] => "image/jpeg",
      // https://datatracker.ietf.org/doc/rfc9649/
      [0x52, 0x49, 0x46, 0x46, _, _, _, _, 0x57, 0x45, 0x42, 0x50] => "image/webp",
      // b"ftyp", b"avif"
      [_, _, _, _, 0x66, 0x74, 0x79, 0x70, 0x61, 0x76, 0x69, 0x66] => "image/avif",
      _ => {
        return Err((
          StatusCode::UNSUPPORTED_MEDIA_TYPE,
          format!("unsupported image format: {}/{}", slug, img_name),
        ));
      }
    };
    match format.parse::<HeaderValue>() {
      Ok(v) => v,
      Err(_) => {
        return Err((
          StatusCode::INTERNAL_SERVER_ERROR,
          format!("failed to parse content type: {}/{}", slug, img_name),
        ));
      }
    }
  };

  let file = match tokio::fs::File::open(path).await {
    Ok(f) => f,
    Err(_) => {
      return Err((
        StatusCode::NOT_FOUND,
        format!("not found: {}/{}", slug, img_name),
      ));
    }
  };
  let stream = tokio_util::io::ReaderStream::new(file);
  let body = axum::body::Body::from_stream(stream);

  let mut headers = HeaderMap::new();
  headers.insert(header::CONTENT_TYPE, content_type);
  if context.config.enable_img_cache {
    headers.insert(
      header::CACHE_CONTROL,
      "max-age=1800"
        .parse()
        .expect("Failed to parse Cache-Control header"),
    );
  }

  Ok((headers, body))
}

async fn handle_post_img(
  Path((slug, img_name)): Path<(String, String)>,
  State(context): State<Arc<Context>>,
  request: axum::extract::Request,
) -> impl IntoResponse {
  let article = match usecase::articles::get(&context.config.contents_path, &slug.to_string()) {
    Ok(Some(article)) => article,
    Ok(None) => {
      return Err((StatusCode::NOT_FOUND, format!("not found: {}", slug)));
    }
    Err(e) => {
      return Err((StatusCode::INTERNAL_SERVER_ERROR, e.to_string()));
    }
  };
  let path = std::path::Path::new(article.article_path()).join(&img_name);
  let dst = tokio::fs::File::create(path.clone()).await.map_err(|e| {
    (
      StatusCode::INTERNAL_SERVER_ERROR,
      format!("failed to create file: {}", e),
    )
  })?;
  tracing::debug!("Uploading image to {:?} (path: {:?})", dst, path);
  let mut writer = tokio::io::BufWriter::new(dst);

  let stream = request.into_body().into_data_stream();
  let mut reader = tokio_util::io::StreamReader::new(stream.map_err(std::io::Error::other));
  tokio::io::copy(&mut reader, &mut writer)
    .await
    .map_err(|e| {
      (
        StatusCode::INTERNAL_SERVER_ERROR,
        format!("failed to write file: {}", e),
      )
    })?;

  Ok(StatusCode::OK)
}

#[tokio::main]
async fn main() -> anyhow::Result<()> {
  tracing_subscriber::fmt()
    .with_max_level(tracing::Level::DEBUG)
    .init();

  let schema = Schema::new(
    graphql::Query,
    graphql::Mutation::default(),
    EmptySubscription::<Context>::new(),
  );
  {
    let graphql_dir = std::env::current_dir()?.join("../graphql");
    std::fs::create_dir_all(&graphql_dir)?;
    let mut schema_file = std::fs::File::create(graphql_dir.join("schema.graphql"))?;
    schema_file.write_all(schema.as_sdl().as_bytes())?;
  }

  let app = axum::Router::new()
    .route(
      "/graphql",
      on(
        MethodFilter::GET.or(MethodFilter::POST),
        graphql::<Arc<Schema>>,
      ),
    )
    .route("/", get(graphiql("/graphql", "")))
    .route(
      "/img/{slug}/{img_name}",
      get(handle_get_img).post(handle_post_img),
    )
    .layer(axum::Extension(Arc::new(schema)))
    .layer(
      tower_http::trace::TraceLayer::new_for_http() //
        .on_request(()), // disable `started processing request` logs
    )
    .layer(tower_http::cors::CorsLayer::permissive())
    .layer(axum::extract::DefaultBodyLimit::max(1 * 1024 * 1024)) // 1 MiB
    .with_state(Arc::new(Context::new()?));

  let addr = std::net::SocketAddr::from(([0, 0, 0, 0], 10212));
  let listener = tokio::net::TcpListener::bind(addr)
    .await
    .unwrap_or_else(|e| panic!("Failed to bind to address {}: {}", addr, e));
  tracing::info!("Server running at {}", addr);
  axum::serve(listener, app)
    .await
    .unwrap_or_else(|e| panic!("Server error: {}", e));

  Ok(())
}
