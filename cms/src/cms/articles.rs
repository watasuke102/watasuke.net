use anyhow::{bail, ensure, Context};
use regex::Regex;
use std::path::Path;
use std::{collections::HashMap, io::ErrorKind};
use yaml_front_matter::{Document, YamlFrontMatter};

use crate::{cms::tags, util};
use article::Article;
use frontmatter::Frontmatter;

pub mod article;
pub mod frontmatter;
pub type Articles = HashMap<String, Article>;

pub fn read_articles(contents_path: &String, tags: &tags::Tags) -> anyhow::Result<Articles> {
  let re = Regex::new(r"^(?<index>[0-9]{2})?_(?<slug>[0-9a-z\-]+)")?;
  let mut articles: Articles = HashMap::new();

  let year_dirs = std::fs::read_dir(Path::new(&contents_path).join("articles"))?;
  for year_dir in year_dirs {
    let year_dir = year_dir?;
    ensure!(
      year_dir.metadata()?.is_dir(),
      "{} is not directory; items under article folder must be a directory (named a year)",
      year_dir.path().to_str().unwrap_or("")
    );
    let year_num = {
      let year_str = String::from(year_dir.file_name().to_str().unwrap_or(""));
      year_str.parse().with_context(|| {
        format!("Failed to parse a folder name into number (name: '{year_str}')")
      })?
    };

    let article_dirs = std::fs::read_dir(year_dir.path())?;
    for article_dir in article_dirs {
      let article_dir = article_dir?;
      ensure!(
        article_dir.metadata()?.is_dir(),
        "{} is not directory; items under article/<year> folder must be a directory",
        article_dir.path().to_str().unwrap_or("")
      );

      let (index, slug) = {
        let dirname = article_dir.file_name();
        let Some(slug) = re.captures(dirname.to_str().unwrap_or("")) else {
          // The article has not published yet (or invalid name)
          continue;
        };
        let index = match slug.name("index") {
          Some(index) => index.as_str().parse::<i32>().ok(),
          None => None,
        };
        (index, String::from(slug.name("slug").unwrap().as_str()))
      };
      ensure!(
        articles.get(&slug).is_none(),
        "duplicated slug: {}",
        article_dir.path().to_str().unwrap_or("")
      );

      let Ok(article_md) = std::fs::read_to_string(article_dir.path().join("article.md")) else {
        println!(
          "{:?} doesn't have `article.md`; ignored",
          article_dir.path()
        );
        continue;
      };
      let mut md: Document<Frontmatter> =
        YamlFrontMatter::parse(article_md.as_str()).expect("Failed to parse article.md");
      loop {
        if !md.content.starts_with('\n') {
          break;
        }
        md.content.remove(0);
      }
      articles.insert(
        slug.clone(),
        Article::new(
          String::from(article_dir.path().to_str().unwrap()),
          slug,
          md.content,
          year_num,
          index,
          tags::convert_slug_vec(tags, &md.metadata.tags),
          md.metadata,
        ),
      );
    }
  }
  Ok(articles)
}

pub fn create_article(contents_path: &String, slug: &String, title: &String) -> anyhow::Result<()> {
  {
    let tags = tags::read_tags(contents_path);
    let articles = read_articles(contents_path, &tags)?;
    ensure!(articles.get(slug).is_none(), "already exists");
  }

  let now = util::now();
  let path = Path::new(contents_path)
    .join("articles")
    .join(now.format("%Y").to_string())
    .join(format!("_{slug}"));
  std::fs::create_dir_all(&path)?;

  let frontmatter = Frontmatter {
    title:        title.clone(),
    tldr:         None,
    tags:         Vec::new(),
    is_favorite:  false,
    published_at: "".to_string(),
    updated_at:   now.format("%Y-%m-%dT%H:%M:%S").to_string(),
  };

  let path = path.join("article.md");
  match std::fs::read(&path) {
    Ok(_) => bail!("Already exists"),
    Err(err) => {
      if err.kind() != ErrorKind::NotFound {
        bail!(
          "An errror occurred while checking for existance of such a slug: {}",
          err.to_string()
        )
      }
    }
  }
  std::fs::write(path, format!("{}\n\n", frontmatter))?;

  Ok(())
}

pub fn publish_article(contents_path: &String, slug: &String) -> anyhow::Result<()> {
  let tags = tags::read_tags(&contents_path);
  let articles = read_articles(contents_path, &tags)?;
  let Some(article) = articles.get(slug) else {
    bail!("Not found");
  };
  ensure!(
    !article.is_published(),
    "Article has already been published"
  );

  article.set_published_at()?;

  let max_index = articles
    .iter()
    .filter_map(|e| {
      if e.1.year() == article.year() {
        *e.1.index()
      } else {
        None
      }
    })
    .max()
    .unwrap_or(-1);

  let old_path = Path::new(article.article_path());
  let new_path = old_path
    .parent()
    .context("parent does not exist")?
    .join(format!("{:02}_{}", max_index + 1, slug));
  let new_path = new_path.as_path();
  std::fs::rename(&old_path, &new_path)?;

  crate::git::Repo::open(contents_path)?
    .commit_published_article(slug, [&old_path, &new_path])?
    .push()?;

  Ok(())
}
