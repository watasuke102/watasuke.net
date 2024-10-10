use std::collections::HashMap;

use serde::Deserialize;

pub mod article;
mod frontmatter;
pub mod sitedata;
pub mod tags;

#[derive(Clone, Debug, Deserialize)]
pub(crate) struct Frontmatter {
  pub(crate) title:        String,
  pub(crate) tldr:         Option<String>,
  pub(crate) tags:         Vec<String>,
  pub(crate) is_favorite:  bool,
  pub(crate) published_at: String,
  pub(crate) updated_at:   String,
}

#[derive(Clone, Debug)]
pub struct Article {
  article_path: String,
  slug:         String,
  body:         String,
  year:         i32,
  index:        Option<i32>,
  tags:         Vec<tags::Tag>,
  frontmatter:  Frontmatter,
}
pub type ArticleMap = HashMap<String, Article>;
