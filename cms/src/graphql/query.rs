use juniper::{graphql_object, graphql_value};

use super::Query;
use crate::{
  contents::{self, sitedata},
  git, usecase, Context,
};

#[graphql_object(context = crate::Context)]
impl Query {
  fn all_public_articles(context: &Context) -> juniper::FieldResult<Vec<contents::Article>> {
    usecase::articles::get_published(&context.config.contents_path).map_err(|err| {
      juniper::FieldError::new(
        "Failed to get published Articles",
        graphql_value!(err.to_string()),
      )
    })
  }
  fn all_articles(context: &Context) -> juniper::FieldResult<Vec<contents::Article>> {
    if !context.config.allow_private_access {
      return Err(juniper::FieldError::new(
        "You cannot access private articles",
        graphql_value!(""),
      ));
    }
    usecase::articles::get_all(&context.config.contents_path).map_err(|err| {
      juniper::FieldError::new(
        "Failed to get all Articles",
        graphql_value!(err.to_string()),
      )
    })
  }
  fn article(slug: String, context: &Context) -> juniper::FieldResult<Option<contents::Article>> {
    let article = usecase::articles::get(&context.config.contents_path, &slug).map_err(|err| {
      juniper::FieldError::new("read_articles() failed", graphql_value!(err.to_string()))
    })?;
    // if private access is allowed, I can return a found article immediately
    if context.config.allow_private_access {
      return Ok(article);
    }
    // if forbidden, check publicity
    Ok(article.and_then(|article| article.get_public_or_none()))
  }
  fn all_tags(context: &Context) -> Vec<contents::tags::Tag> {
    usecase::tags::get(&context.config.contents_path)
      .into_iter()
      .map(|e| e.1)
      .collect()
  }
  fn sitedata(context: &Context) -> juniper::FieldResult<sitedata::Sitedata> {
    match sitedata::read_sitedata(&context.config.contents_path) {
      Ok(sitedata) => Ok(sitedata),
      Err(err) => Err(juniper::FieldError::new(
        "read_sitedata() failed",
        graphql_value!(err.to_string()),
      )),
    }
  }
  fn contents_git_head_hash(context: &Context) -> juniper::FieldResult<String> {
    let repo = match git::Repo::open(&context.config.contents_path) {
      Ok(repo) => repo,
      Err(err) => {
        return Err(juniper::FieldError::new(
          "Cannot open a git repo",
          graphql_value!(err.to_string()),
        ))
      }
    };

    match repo.head_hash() {
      Ok(hash) => Ok(hash),
      Err(err) => {
        return Err(juniper::FieldError::new(
          "repo.head_hash() failed",
          graphql_value!(err.to_string()),
        ))
      }
    }
  }
}