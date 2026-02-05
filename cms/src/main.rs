#![feature(fn_traits, unboxed_closures)]

mod config;
mod contents;
mod git;
mod graphql;
mod image;
mod usecase;
mod util;

use axum::{
  extract::{Path, State},
  http::{HeaderMap, HeaderValue, StatusCode, header},
  response::IntoResponse,
  routing::{MethodFilter, get, on},
};
use futures_util::TryStreamExt;
use juniper::{EmptySubscription, RootNode};
use juniper_axum::{graphiql, graphql};
use std::{io::Write, sync::Arc};

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
  let (file, content_type) = image::read_image_file(&slug, &img_name, &context.config)
    .await
    .map_err(|(err, msg)| match err {
      image::ImageError::NotFound => (StatusCode::NOT_FOUND, msg),
      image::ImageError::UnsupportedMediaType => (StatusCode::UNSUPPORTED_MEDIA_TYPE, msg),
      image::ImageError::InternalServerError => (StatusCode::INTERNAL_SERVER_ERROR, msg),
    })?;

  let content_type = match content_type.parse::<HeaderValue>() {
    Ok(v) => v,
    Err(_) => {
      return Err((
        StatusCode::INTERNAL_SERVER_ERROR,
        format!("failed to parse content type: {}/{}", slug, img_name),
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
  let stream = request.into_body().into_data_stream();
  let mut reader = tokio_util::io::StreamReader::new(stream.map_err(std::io::Error::other));
  image::create_image_from_stream(&slug, &img_name, &context.config, &mut reader)
    .await
    .map_err(|(err, msg)| match err {
      image::ImageError::NotFound => (StatusCode::NOT_FOUND, msg),
      image::ImageError::UnsupportedMediaType => (StatusCode::UNSUPPORTED_MEDIA_TYPE, msg),
      image::ImageError::InternalServerError => (StatusCode::INTERNAL_SERVER_ERROR, msg),
    })
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
