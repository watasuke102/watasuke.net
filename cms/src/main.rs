#![feature(fn_traits, unboxed_closures)]

mod config;
mod contents;
mod git;
mod graphql;
mod usecase;
mod util;

use std::{
  io::Write,
  path::{Path, PathBuf},
};

use juniper::{EmptySubscription, RootNode};
use rocket::{
  http::ContentType,
  response::{self, content, Responder},
  tokio::fs::File,
  Request, State,
};
type Schema = RootNode<'static, graphql::Query, graphql::Mutation, EmptySubscription<Context>>;

#[derive(Clone, Debug)]
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

#[rocket::get("/")]
fn graphiql() -> content::RawHtml<String> {
  juniper_rocket::graphiql_source("/graphql", None)
}

#[rocket::get("/graphql?<request>")]
fn get_graphql_handler(
  context: &State<Context>,
  request: juniper_rocket::GraphQLRequest,
  schema: &State<Schema>,
) -> juniper_rocket::GraphQLResponse {
  request.execute_sync(schema, context)
}

#[rocket::post("/graphql", data = "<request>")]
fn post_graphql_handler(
  context: &State<Context>,
  request: juniper_rocket::GraphQLRequest,
  schema: &State<Schema>,
) -> juniper_rocket::GraphQLResponse {
  request.execute_sync(schema, context)
}

struct FileResponder {
  ext:          String,
  file:         File,
  enable_cache: bool,
}
impl FileResponder {
  async fn new(path: PathBuf, enable_cache: bool) -> Result<Self, std::io::Error> {
    Ok(Self {
      ext: path
        .extension()
        .map_or("".to_string(), |ext| ext.to_string_lossy().to_string()),
      file: File::open(path).await?,
      enable_cache,
    })
  }
}
impl<'r> Responder<'r, 'static> for FileResponder {
  fn respond_to(self, req: &'r Request<'_>) -> response::Result<'static> {
    let mut response = self.file.respond_to(req)?;
    if let Some(ct) = ContentType::from_extension(&self.ext) {
      response.set_header(ct);
    }
    if self.enable_cache {
      response.set_raw_header("Cache-Control", "max-age=1800");
    }
    Ok(response)
  }
}
#[rocket::get("/img/<slug>/<img_name>")]
async fn handle_get_img(
  slug: &str,
  img_name: &str,
  context: &State<Context>,
) -> Option<FileResponder> {
  // Result<Option<Article>> -.ok()-> Option>Option<Article> -?-> Option<Article> -?-> Article
  let article = usecase::articles::get(&context.config.contents_path, &slug.to_string()).ok()??;
  let path = Path::new(article.article_path()).join(img_name);
  FileResponder::new(path, context.config.enable_img_cache)
    .await
    .ok()
}

async fn save_img(
  slug: &str,
  img_name: &str,
  context: &State<Context>,
  mut file: rocket::fs::TempFile<'_>,
) -> rocket::http::Status {
  if !context.config.allow_private_access {
    return rocket::http::Status::Forbidden;
  }
  let article = match usecase::articles::get(&context.config.contents_path, &slug.to_string()) {
    Err(_) => return rocket::http::Status::InternalServerError,
    Ok(None) => return rocket::http::Status::NotFound,
    Ok(Some(res)) => res,
  };
  match file
    .persist_to(Path::new(article.article_path()).join(img_name))
    .await
  {
    Ok(_) => rocket::http::Status::Ok,
    Err(_) => rocket::http::Status::InternalServerError,
  }
}
#[rocket::post("/img/<slug>/<img_name>", format = "image/png", data = "<file>")]
async fn handle_post_png(
  slug: &str,
  img_name: &str,
  context: &State<Context>,
  file: rocket::fs::TempFile<'_>,
) -> rocket::http::Status {
  save_img(slug, img_name, context, file).await
}
#[rocket::post("/img/<slug>/<img_name>", format = "image/jpeg", data = "<file>")]
async fn handle_post_jpeg(
  slug: &str,
  img_name: &str,
  context: &State<Context>,
  file: rocket::fs::TempFile<'_>,
) -> rocket::http::Status {
  save_img(slug, img_name, context, file).await
}

#[rocket::main]
async fn main() -> anyhow::Result<()> {
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

  rocket::build()
    .manage(Context::new()?)
    .manage(schema)
    .attach(rocket_cors::CorsOptions::default().to_cors().unwrap())
    .mount(
      "/",
      rocket::routes![
        graphiql,
        get_graphql_handler,
        post_graphql_handler,
        handle_get_img,
        handle_post_png,
        handle_post_jpeg,
      ],
    )
    .launch()
    .await?;
  Ok(())
}
