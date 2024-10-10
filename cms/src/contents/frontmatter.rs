use super::Frontmatter;

impl std::fmt::Display for Frontmatter {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    let tags = self
      .tags
      .iter()
      .map(|tag| format!("'{}'", tag))
      .collect::<Vec<String>>()
      .join(", ");
    write!(
      f,
      r"---
title:        '{}'{}
tags:         [{}]
is_favorite:  {}
published_at: '{}'
updated_at:   '{}'
---",
      self.title,
      if let Some(tldr) = &self.tldr {
        format!("\ntldr:         '{}'", tldr)
      } else {
        String::from("")
      },
      tags,
      self.is_favorite,
      self.published_at,
      self.updated_at
    )
  }
}
