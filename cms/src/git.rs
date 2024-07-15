use std::path::Path;

use anyhow::Context;
use git2::Repository;

pub struct Repo {
  repo: Repository,
}
impl Repo {
  pub fn open(git_path: &String) -> anyhow::Result<Self> {
    let repo = Repository::open(git_path)
      .with_context(|| format!("Failed to open `{}` as a git repository", git_path))?;
    Ok(Repo { repo })
  }
  pub fn head_hash(&self) -> anyhow::Result<String> {
    let head = self.repo.head()?;
    Ok(
      head
        .peel_to_commit()?
        .id()
        .to_string()
        .chars()
        .take(7)
        .collect(),
    )
  }
}
