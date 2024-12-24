use anyhow::ensure;
use regex::Regex;
use serde::Deserialize;
use std::{io::Write, path::Path};

use crate::contents::tags::{Tag, TagMap};

pub fn convert_slug_vec(tags: &TagMap, slugs: &Vec<String>) -> Vec<Tag> {
  slugs
    .iter()
    .filter(|slug| !slug.is_empty())
    .map(|slug| tags.get(slug).unwrap().clone())
    .collect()
}

pub fn get_all(contents_path: &String) -> Vec<Tag> {
  let mut vec: Vec<Tag> = get_map(contents_path).into_iter().map(|e| e.1).collect();
  vec.sort();
  vec
}
pub fn get(contents_path: &String, slug: &String) -> Option<Tag> {
  get_map(contents_path)
    .get(slug)
    .and_then(|tag| Some(tag.to_owned()))
}
pub fn get_map(contents_path: &String) -> TagMap {
  #[derive(Clone, Deserialize, Debug)]
  struct TagsToml {
    tags: Vec<Tag>,
  }
  let tags_vec: TagsToml =
    toml::from_str(&std::fs::read_to_string(Path::new(&contents_path).join("tags.toml")).unwrap())
      .unwrap();
  tags_vec
    .tags
    .into_iter()
    .map(|e| (e.slug().to_string(), e))
    .collect()
}

pub fn create(contents_path: &String, slug: &String, title: &String) -> anyhow::Result<()> {
  {
    let tags = get_map(contents_path);
    ensure!(tags.get(slug).is_none(), "Already exists")
  }
  ensure!(Regex::new(r"^[0-9a-z\-]+$")?.is_match(slug), "Invalid slug");

  let mut file = std::fs::OpenOptions::new()
    .create(true)
    .write(true)
    .append(true)
    .open(Path::new(contents_path).join("tags.toml"))?;
  write!(
    file,
    r#"
[[tags]]
slug = "{}"
name = "{}"
"#,
    slug, title
  )?;
  Ok(())
}
