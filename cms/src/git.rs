use std::path::Path;

use anyhow::{ensure, Context};
use git2::{
  Commit, Cred, IndexAddOption, PushOptions, RemoteCallbacks, Repository, RepositoryState,
};

pub struct Repo {
  repo: Repository,
}
impl Repo {
  pub fn open(git_path: &String) -> anyhow::Result<Self> {
    let repo = Repository::open(git_path)
      .with_context(|| format!("Failed to open `{}` as a git repository", git_path))?;
    Ok(Repo { repo })
  }
  fn latest_commit(&self) -> anyhow::Result<Commit> {
    let head = self.repo.head()?;
    Ok(head.peel_to_commit()?)
  }
  pub fn head_hash(&self) -> anyhow::Result<String> {
    Ok(
      self
        .latest_commit()?
        .id()
        .to_string()
        .chars()
        .take(7)
        .collect(),
    )
  }

  pub fn push(&self) -> anyhow::Result<()> {
    ensure!(self.repo.head()?.is_branch(), "Reference is not a branch");

    let mut callbacks = RemoteCallbacks::new();
    // set up SSH
    callbacks.credentials(|_url, username_from_url, _allowed_types| {
      Cred::ssh_key(
        username_from_url.unwrap(),
        None,
        std::path::Path::new(&format!("{}/.ssh/id_rsa", std::env::var("HOME").unwrap())),
        None,
      )
    });
    let mut push_options = PushOptions::new();
    push_options.remote_callbacks(callbacks);

    let refspec = {
      let head = self.repo.head()?;
      let branch = head.shorthand().context("shorthand is not valid UTF-8")?;
      format!("refs/heads/{}", branch)
    };
    self
      .repo
      .find_remote("origin")
      .context("Failed to find remote named `origin`")?
      .push(&[&refspec], Some(&mut push_options))?;
    Ok(())
  }

  pub fn commit_published_article(
    &self,
    slug: &String,
    paths: [&Path; 2],
  ) -> anyhow::Result<&Self> {
    ensure!(
      self.repo.state() == RepositoryState::Clean,
      "Repository is dirty"
    );
    ensure!(self.repo.head()?.is_branch(), "Reference is not a branch");

    let mut index = self.repo.index()?;
    // staging
    {
      let repo_path = self.repo.path().parent().unwrap();
      let pathspecs = paths.into_iter().filter_map(|path| {
        let Ok(abs_path) = std::path::absolute(path) else {
          return None;
        };
        let Ok(path) = abs_path.strip_prefix(repo_path) else {
          return None;
        };
        Some(path.to_owned())
      });
      {
        let v = pathspecs.clone().collect::<Vec<_>>();
        ensure!(v.len() == 2, "Failed to convert Path to String")
      }
      index.add_all(pathspecs, IndexAddOption::CHECK_PATHSPEC, None)?;
      index.write()?;
    }

    // commit+push
    let tree = self.repo.find_tree(index.write_tree()?)?;
    let latest_commit = self.latest_commit()?;
    let author = latest_commit.author().to_owned();
    self.repo.commit(
      Some("HEAD"),
      &author,
      &author,
      &format!("add: {}", slug),
      &tree,
      &[&latest_commit],
    )?;

    Ok(self)
  }
}
