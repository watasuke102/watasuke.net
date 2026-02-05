use std::path::Path;

use anyhow::{Context, ensure};
use git2::{
  Commit, Cred, IndexAddOption, PushOptions, RemoteCallbacks, Repository, RepositoryState,
  Signature,
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
  fn latest_commit<'a>(&'a self) -> anyhow::Result<Commit<'a>> {
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
  /// return if the repository state is clean (it doesn't have an ongoing operation)
  // RepositoryState::Clean is equivalent to GIT_REPOSITORY_STATE_NONE in libgit2
  // see https://docs.rs/git2/0.19.0/src/git2/repo.rs.html#472
  fn is_clean(&self) -> bool {
    self.repo.state() == RepositoryState::Clean
  }

  pub fn stage(&self, path: &Path) -> anyhow::Result<&Self> {
    ensure!(self.repo.head()?.is_branch(), "Reference is not a branch");
    ensure!(self.is_clean(), "Repository is dirty");

    let mut index = self.repo.index()?;
    let repo_path = self.repo.path().parent().unwrap();
    index.add_all(
      [path.canonicalize()?.strip_prefix(repo_path)?].into_iter(),
      IndexAddOption::CHECK_PATHSPEC,
      None,
    )?;
    index.write()?;
    Ok(self)
  }

  pub fn commit(&self, message: &String) -> anyhow::Result<&Self> {
    ensure!(self.repo.head()?.is_branch(), "Reference is not a branch");
    ensure!(self.is_clean(), "Repository is dirty");

    let mut index = self.repo.index()?;
    let tree = self.repo.find_tree(index.write_tree()?)?;
    let latest_commit = self.latest_commit()?;
    let prev_author = latest_commit.author().to_owned();
    let author = Signature::now(
      prev_author
        .name()
        .context("Cannot get previous author's name")?,
      prev_author
        .email()
        .context("Cannot get previous author's email")?,
    )?;
    self.repo.commit(
      Some("HEAD"),
      &author,
      &author,
      &message,
      &tree,
      &[&latest_commit],
    )?;
    Ok(self)
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
}
