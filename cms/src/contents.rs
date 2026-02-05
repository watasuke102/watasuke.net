use std::collections::HashMap;

use serde::Deserialize;

pub mod article;
mod frontmatter;
pub mod monthly;
pub mod sitedata;
pub mod tags;

#[derive(Clone, Debug, Deserialize)]
pub(crate) struct ArticleFrontmatter {
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
  frontmatter:  ArticleFrontmatter,
}
pub type ArticleMap = HashMap<String, Article>;

#[derive(Clone, Debug)]
pub struct Neighbor {
  pub older: Option<Article>,
  pub newer: Option<Article>,
}

#[derive(Clone, Debug, Deserialize)]
pub(crate) struct MonthlyFrontmatter {
  pub(crate) tldr:         String,
  pub(crate) published_at: String,
  pub(crate) updated_at:   String,
}
#[derive(Clone, Debug)]
pub struct Monthly {
  pub(crate) body:        String,
  pub(crate) year:        i32,
  pub(crate) month:       i32,
  pub(crate) frontmatter: MonthlyFrontmatter,
}
#[derive(Clone, Debug, Hash, PartialEq, Eq)]
pub struct MonthlyKey {
  pub year:  i32,
  pub month: i32,
}
pub type MonthlyMap = HashMap<MonthlyKey, Monthly>;
