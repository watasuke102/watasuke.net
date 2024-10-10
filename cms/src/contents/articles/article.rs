use std::path::Path;

use juniper::graphql_object;

use crate::{contents::tags, util};

use super::frontmatter::Frontmatter;

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
impl Article {
  pub fn new(
    article_path: String,
    slug: String,
    body: String,
    year: i32,
    index: Option<i32>,
    tags: Vec<tags::Tag>,
    frontmatter: Frontmatter,
  ) -> Self {
    Article {
      article_path,
      slug,
      body,
      year,
      index,
      tags,
      frontmatter,
    }
  }
  pub fn article_path(&self) -> &str {
    &self.article_path
  }

  pub fn update(
    &self,
    title: String,
    tldr: Option<String>,
    tags: Vec<String>,
    is_favorite: bool,
    body: String,
  ) -> anyhow::Result<()> {
    let frontmatter = Frontmatter {
      title,
      tldr,
      tags,
      is_favorite,
      published_at: self.frontmatter.published_at.clone(),
      updated_at: util::now().format("%Y-%m-%dT%H:%M:%S").to_string(),
    };

    std::fs::write(
      Path::new(&self.article_path).join("article.md"),
      format!("{}\n\n{}", frontmatter, body),
    )?;

    Ok(())
  }
  pub fn set_published_at(&self) -> anyhow::Result<()> {
    let datetime = util::now().format("%Y-%m-%dT%H:%M:%S").to_string();
    let frontmatter = Frontmatter {
      published_at: datetime.clone(),
      updated_at: datetime,
      ..self.frontmatter.clone()
    };

    std::fs::write(
      Path::new(&self.article_path).join("article.md"),
      format!("{}\n\n{}", frontmatter, self.body),
    )?;

    Ok(())
  }
  pub fn get_public_or_none(self) -> Option<Self> {
    if self.is_published() {
      Some(self)
    } else {
      None
    }
  }
  pub(super) fn index(&self) -> &Option<i32> {
    &self.index
  }
  pub(super) fn year(&self) -> i32 {
    self.year
  }
}

#[graphql_object(context = crate::Context)]
impl Article {
  pub fn slug(&self) -> &str {
    &self.slug
  }
  fn body(&self) -> &str {
    &self.body
  }
  fn title(&self) -> &str {
    &self.frontmatter.title
  }
  fn tldr(&self) -> String {
    if let Some(tldr) = &self.frontmatter.tldr {
      tldr.clone()
    } else {
      let mut head = self
        .body
        .chars()
        .filter(|x| *x != '\n')
        .take(80)
        .collect::<String>();
      head.push_str("……");
      head
    }
  }
  fn tldr_real(&self) -> Option<String> {
    self.frontmatter.tldr.clone()
  }
  fn tags(&self) -> &[tags::Tag] {
    &self.tags
  }
  fn is_favorite(&self) -> bool {
    self.frontmatter.is_favorite
  }
  fn published_at(&self) -> &str {
    &self.frontmatter.published_at
  }
  fn updated_at(&self) -> &str {
    &self.frontmatter.updated_at
  }
  pub(crate) fn is_published(&self) -> bool {
    self.index.is_some()
  }
}
