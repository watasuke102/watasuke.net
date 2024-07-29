use juniper::{graphql_object, graphql_value};

use crate::{
  cms::{
    articles::{self, article},
    sitedata, tags,
  },
  git, Context,
};

#[derive(Clone, Copy, Debug)]
pub struct Query;
#[graphql_object(context = crate::Context)]
impl Query {
  fn all_public_articles(context: &Context) -> juniper::FieldResult<Vec<article::Article>> {
    let tags = tags::read_tags(&context.config.contents_path);
    match articles::read_articles(&context.config.contents_path, &tags) {
      Ok(articles) => Ok(
        articles
          .into_iter()
          .filter_map(|e| e.1.get_public_or_none())
          .collect(),
      ),
      Err(err) => Err(juniper::FieldError::new(
        "read_articles() failed",
        graphql_value!(err.to_string()),
      )),
    }
  }
  fn all_articles(context: &Context) -> juniper::FieldResult<Vec<article::Article>> {
    if !context.config.allow_private_access {
      return Err(juniper::FieldError::new(
        "You cannot access private articles",
        graphql_value!(""),
      ));
    }
    let tags = tags::read_tags(&context.config.contents_path);
    match articles::read_articles(&context.config.contents_path, &tags) {
      Ok(articles) => Ok(articles.into_iter().map(|e| e.1).collect()),
      Err(err) => Err(juniper::FieldError::new(
        "read_articles() failed",
        graphql_value!(err.to_string()),
      )),
    }
  }
  fn article(slug: String, context: &Context) -> juniper::FieldResult<Option<article::Article>> {
    let tags = tags::read_tags(&context.config.contents_path);
    let articles = match articles::read_articles(&context.config.contents_path, &tags) {
      Ok(articles) => articles,
      Err(err) => {
        return Err(juniper::FieldError::new(
          "read_articles() failed",
          graphql_value!(err.to_string()),
        ));
      }
    };
    let Some(article) = articles.get(&slug) else {
      return Ok(None);
    };
    let article = article.clone();
    // if private access is allowed, I can return a found article immediately
    if context.config.allow_private_access {
      return Ok(Some(article));
    }
    // if forbidden, check publicity
    Ok(article.clone().get_public_or_none())
  }
  fn all_tags(context: &Context) -> Vec<tags::Tag> {
    tags::read_tags(&context.config.contents_path)
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
