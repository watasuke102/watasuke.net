use std::path::Path;

pub fn update_profile(contents_path: &String, profile: &String) -> anyhow::Result<()> {
  std::fs::write(
    Path::new(&contents_path)
      .join("sitedata")
      .join("profile.md"),
    profile,
  )?;
  Ok(())
}

pub fn renew_profile(contents_path: &String, commit_message: &String) -> anyhow::Result<()> {
  crate::git::Repo::open(contents_path)?
    .stage(
      &Path::new(&contents_path)
        .join("sitedata")
        .join("profile.md"),
    )?
    .commit(commit_message)?
    .push()?;
  Ok(())
}
