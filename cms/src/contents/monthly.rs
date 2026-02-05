use super::{Monthly, MonthlyFrontmatter};
use crate::util;
use juniper::graphql_object;

impl Monthly {
  pub fn new(body: String, year: i32, month: i32, frontmatter: MonthlyFrontmatter) -> Self {
    Monthly {
      body,
      year,
      month,
      frontmatter,
    }
  }
  fn md_path(&self, contents_path: &String) -> std::path::PathBuf {
    std::path::Path::new(contents_path)
      .join(format!("monthly/{:04}/{:02}.md", self.year, self.month))
  }
  pub fn update(&self, contents_path: &String, tldr: String, body: String) -> anyhow::Result<()> {
    let frontmatter = MonthlyFrontmatter {
      tldr,
      published_at: self.frontmatter.published_at.clone(),
      updated_at: util::now().format("%Y-%m-%dT%H:%M:%S").to_string(),
    };

    std::fs::write(
      self.md_path(contents_path),
      format!("{}\n\n{}", frontmatter, body),
    )?;

    Ok(())
  }
  pub fn set_published_at(&self, contents_path: &String) -> anyhow::Result<()> {
    let datetime = util::now().format("%Y-%m-%dT%H:%M:%S").to_string();
    let frontmatter = MonthlyFrontmatter {
      published_at: datetime.clone(),
      updated_at: datetime,
      ..self.frontmatter.clone()
    };

    std::fs::write(
      self.md_path(contents_path),
      format!("{}\n\n{}", frontmatter, self.body),
    )?;

    Ok(())
  }
}

impl PartialEq for Monthly {
  fn eq(&self, other: &Self) -> bool {
    self.year == other.year && self.month == other.month
  }
}
impl Eq for Monthly {
}
impl PartialOrd for Monthly {
  fn partial_cmp(&self, other: &Self) -> Option<std::cmp::Ordering> {
    other
      .frontmatter
      .published_at
      .partial_cmp(&self.frontmatter.published_at)
  }
}
impl Ord for Monthly {
  fn cmp(&self, other: &Self) -> std::cmp::Ordering {
    other
      .frontmatter
      .published_at
      .cmp(&self.frontmatter.published_at)
  }
}

#[graphql_object(context = crate::Context)]
impl Monthly {
  pub fn body(&self) -> &str {
    &self.body
  }
  pub fn year(&self) -> i32 {
    self.year
  }
  pub fn month(&self) -> i32 {
    self.month
  }
  pub fn tldr(&self) -> &str {
    &self.frontmatter.tldr
  }
  pub fn published_at(&self) -> &str {
    &self.frontmatter.published_at
  }
  pub fn updated_at(&self) -> &str {
    &self.frontmatter.updated_at
  }
}
