use juniper::graphql_object;
use serde::Deserialize;
use std::collections::HashMap;

#[derive(Clone, Deserialize, Debug)]
pub struct Tag {
  slug: String,
  name: String,
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
