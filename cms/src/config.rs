use std::io::ErrorKind;

use serde::Deserialize;

#[derive(Clone, Deserialize, Debug)]
pub struct Config {
  pub contents_path:        String,
  pub allow_private_access: bool,
  pub enable_img_cache:     bool,
}

impl Config {
  pub fn get() -> Self {
    match &std::fs::read_to_string("config.toml") {
      Ok(s) => toml::from_str(s).unwrap(),
      Err(e) => {
        if e.kind() == ErrorKind::NotFound {
          panic!(
            "`config.toml` is not found. Try `cp config-sample.toml config.toml`\n({})",
            e
          );
        }
        panic!("{}", e);
      }
    }
  }
}
