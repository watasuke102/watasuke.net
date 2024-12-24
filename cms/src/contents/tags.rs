use juniper::graphql_object;
use serde::Deserialize;
use std::collections::HashMap;

#[derive(Clone, Deserialize, Debug)]
pub struct Tag {
  slug: String,
  name: String,
}

impl PartialEq for Tag {
  fn eq(&self, other: &Self) -> bool {
    self.slug == other.slug
  }
}
impl Eq for Tag {
}
impl PartialOrd for Tag {
  fn partial_cmp(&self, other: &Self) -> Option<std::cmp::Ordering> {
    self.slug.partial_cmp(&other.slug)
  }
}
impl Ord for Tag {
  fn cmp(&self, other: &Self) -> std::cmp::Ordering {
    self.slug.cmp(&other.slug)
  }
}

#[graphql_object(context = crate::Context)]
impl Tag {
  pub fn slug(&self) -> &str {
    &self.slug
  }
  fn name(&self) -> &str {
    &self.name
  }
}
pub type TagMap = HashMap<String, Tag>;
