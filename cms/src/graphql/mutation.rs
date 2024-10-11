use juniper::{graphql_object, graphql_value};

use super::Mutation;
use crate::{usecase, Context};

#[graphql_object(context = crate::Context)]
impl Mutation {
  fn new_tag(slug: String, title: String, context: &Context) -> juniper::FieldResult<String> {
    if !context.config.allow_private_access {
      return Err(juniper::FieldError::new(
        "Private access is forbidden",
        graphql_value!(""),
      ));
    }
    match usecase::tags::create(&context.config.contents_path, &slug, &title) {
      Ok(_) => Ok(slug),
      Err(err) => Err(juniper::FieldError::new(
        "Failed to create a new Tag",
        graphql_value!(err.to_string()),
      )),
    }
  }
  fn new_article(slug: String, title: String, context: &Context) -> juniper::FieldResult<String> {
    if !context.config.allow_private_access {
      return Err(juniper::FieldError::new(
        "Private access is forbidden",
        graphql_value!(""),
      ));
    }
    match usecase::articles::create(&context.config.contents_path, &slug, &title) {
      Ok(_) => Ok(slug),
      Err(err) => Err(juniper::FieldError::new(
        "Failed to create an Article",
        graphql_value!(err.to_string()),
      )),
    }
  }
  fn update_article(
    slug: String,
    title: String,
    tldr: String,
    tags: Vec<String>,
    is_favorite: bool,
    body: String,
    context: &Context,
  ) -> juniper::FieldResult<String> {
    if !context.config.allow_private_access {
      return Err(juniper::FieldError::new(
        "Private access is forbidden",
        graphql_value!(""),
      ));
    }
    let article = {
      match usecase::articles::get(&context.config.contents_path, &slug) {
        Ok(article) => article.ok_or(juniper::FieldError::new(
          "Article with such a slug not found",
          graphql_value!("Not Found"),
        ))?,
        Err(err) => {
          return Err(juniper::FieldError::new(
            "Failed to get Articles",
            graphql_value!(err.to_string()),
          ));
        }
      }
    };

    let tldr = if tldr.is_empty() { None } else { Some(tldr) };
    match article.update(title, tldr, tags, is_favorite, body) {
      Ok(_) => Ok(slug),
      Err(err) => Err(juniper::FieldError::new(
        "article.update() failed",
        graphql_value!(err.to_string()),
      )),
    }
  }
  fn publish_article(
    slug: String,
    context: &Context,
    should_commit_and_push: bool,
  ) -> juniper::FieldResult<String> {
    if !context.config.allow_private_access {
      return Err(juniper::FieldError::new(
        "Private access is forbidden",
        graphql_value!(""),
      ));
    }
    match usecase::articles::publish(&context.config.contents_path, &slug, should_commit_and_push) {
      Ok(_) => Ok(slug),
      Err(err) => Err(juniper::FieldError::new(
        "Failed to publish an Article",
        graphql_value!(err.to_string()),
      )),
    }
  }
  fn renew_article(
    slug: String,
    commit_message: String,
    context: &Context,
  ) -> juniper::FieldResult<String> {
    if !context.config.allow_private_access {
      return Err(juniper::FieldError::new(
        "Private access is forbidden",
        graphql_value!(""),
      ));
    }
    match usecase::articles::renew(&context.config.contents_path, &slug, &commit_message) {
      Ok(_) => Ok(slug),
      Err(err) => Err(juniper::FieldError::new(
        "Failed to renew an Article",
        graphql_value!(err.to_string()),
      )),
    }
  }
}
