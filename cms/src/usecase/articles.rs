use anyhow::{bail, ensure, Context};
use juniper::GraphQLInputObject;
use regex::Regex;
use std::{collections::HashMap, io::ErrorKind, path::Path};
use yaml_front_matter::{Document, YamlFrontMatter};

use crate::{
  contents::{Article, ArticleMap, Frontmatter},
  usecase, util,
};

#[derive(GraphQLInputObject)]
pub struct ArticleFilter {
  is_favorite: Option<bool>,
  /// This fiels is slug[] which is used for OR search
  tags:        Option<Vec<String>>,
}
impl ArticleFilter {
  fn check(&self, article: &Article) -> bool {
    let is_favorite = article.is_favorite();
    if is_favorite != self.is_favorite.unwrap_or(is_favorite) {
      return false;
    }
    if let Some(tags) = self.tags.as_ref() {
      'search_tag: {
        for tag in tags {
          if article.has_tag(tag) {
            break 'search_tag;
          }
        }
        return false;
      }
    }
    return true;
  }
}

pub fn get(contents_path: &String, slug: &String) -> anyhow::Result<Option<Article>> {
  Ok(get_map_all(contents_path)?.get(slug).cloned())
}
pub fn get_published(
  filter: Option<ArticleFilter>,
  contents_path: &String,
) -> anyhow::Result<Vec<Article>> {
  Ok(
    get_all(filter, contents_path)?
      .into_iter()
      .filter(|e| e.is_published())
      .collect(),
  )
}
pub fn get_all(
  filter: Option<ArticleFilter>,
  contents_path: &String,
) -> anyhow::Result<Vec<Article>> {
  let mut vec: Vec<Article> = get_map_all(contents_path)?
    .into_iter()
    .map(|e| e.1)
    .filter(|e| filter.as_ref().map_or(true, |filter| filter.check(e)))
    .collect();
  vec.sort();
  Ok(vec)
}

fn get_map_all(contents_path: &String) -> anyhow::Result<ArticleMap> {
  let re = Regex::new(r"^(?<index>[0-9]{2})?_(?<slug>[0-9a-z\-]+)")?;
  let mut articles: ArticleMap = HashMap::new();

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

    let tags = usecase::tags::get_map(contents_path);
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
      let mut md: Document<Frontmatter> = match YamlFrontMatter::parse(article_md.as_str()) {
        Ok(f) => f,
        Err(e) => {
          println!(
            "Failed to parse the frontmatter of {}/article.md; ignored\n>> {:?}",
            article_dir.path().to_str().unwrap_or("<unknown path>"),
            e
          );
          continue;
        }
      };
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
          usecase::tags::convert_slug_vec(&tags, &md.metadata.tags),
          md.metadata,
        ),
      );
    }
  }
  Ok(articles)
}

pub fn create(contents_path: &String, slug: &String, title: &String) -> anyhow::Result<()> {
  ensure!(get(contents_path, slug)?.is_none(), "already exists");

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

pub fn publish(
  contents_path: &String,
  slug: &String,
  should_commit_and_push: bool,
) -> anyhow::Result<()> {
  let articles = get_map_all(contents_path)?;
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
  let new_path = old_path.with_file_name(format!("{:02}_{}", max_index + 1, slug));
  let new_path = new_path.as_path();
  std::fs::rename(&old_path, &new_path)?;

  if !should_commit_and_push {
    return Ok(());
  }
  let repo = crate::git::Repo::open(contents_path)?;
  repo
    .stage(&old_path)?
    .stage(&new_path)?
    .commit(&format!("add: {}", slug))?
    .push()?;

  Ok(())
}

pub fn renew(contents_path: &String, slug: &String, commit_message: &String) -> anyhow::Result<()> {
  let articles = get_map_all(contents_path)?;
  let Some(article) = articles.get(slug) else {
    bail!("Not found");
  };
  ensure!(article.is_published(), "Article is not published");

  let repo = crate::git::Repo::open(contents_path)?;
  repo
    .stage(&Path::new(article.article_path()))?
    .commit(commit_message)?
    .push()?;

  Ok(())
}
