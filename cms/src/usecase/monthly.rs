use anyhow::{Context, bail, ensure};
use regex::Regex;
use yaml_front_matter::{Document, YamlFrontMatter};

use crate::{
  contents::{Monthly, MonthlyFrontmatter, MonthlyKey, MonthlyMap},
  git, util,
};

pub fn get(contents_path: &String, year: i32, month: i32) -> anyhow::Result<Option<Monthly>> {
  Ok(
    get_map_all(contents_path)?
      .get(&MonthlyKey { year, month })
      .cloned(),
  )
}
pub fn get_all(year: Option<i32>, contents_path: &String) -> anyhow::Result<Vec<Monthly>> {
  let mut monthlies: Vec<Monthly> = if let Some(year) = year {
    get_map_all(contents_path)?
      .into_values()
      .filter(|e| e.year() == year)
      .collect()
  } else {
    get_map_all(contents_path)?.into_values().collect()
  };
  monthlies.sort();
  Ok(monthlies)
}
pub fn get_published(year: Option<i32>, contents_path: &String) -> anyhow::Result<Vec<Monthly>> {
  let mut monthlies: Vec<Monthly> = get_map_all(contents_path)?
    .into_values()
    .filter(|e| !e.published_at().is_empty() && year.map_or(true, |y| e.year() == y))
    .collect();
  monthlies.sort();
  Ok(monthlies)
}

fn get_map_all(contents_path: &String) -> anyhow::Result<MonthlyMap> {
  let mut monthlies: MonthlyMap = MonthlyMap::new();
  let year_dirs = std::fs::read_dir(std::path::Path::new(contents_path).join("monthly"))?;
  for year_dir in year_dirs {
    let year_dir = year_dir?;
    ensure!(
      year_dir.metadata()?.is_dir(),
      "{:?} is not a directory; items under monthly/ directory must be directories",
      year_dir.path()
    );
    let year = {
      let year_str = String::from(year_dir.file_name().to_str().unwrap_or(""));
      year_str.parse().with_context(|| {
        format!(
          "Failed to parse a folder name ({:?}) into number",
          year_dir.path()
        )
      })?
    };

    let re = Regex::new("^(?<month>0[1-9]|1[0-2]).md$")?;
    let monthly_entries = std::fs::read_dir(year_dir.path())?;
    for entry in monthly_entries {
      let entry = entry?;
      let file_name = entry.file_name();
      let file_name = file_name.to_str().unwrap_or("");
      let Some(Some(month_str)) = re.captures(file_name).map(|e| e.name("month")) else {
        // not <month>md file; maybe img/ directory?
        continue;
      };
      let Ok(month) = month_str.as_str().parse() else {
        tracing::warn!("Failed to parse month: {:?}", entry.path());
        continue;
      };

      let Ok(monthly_md) = std::fs::read_to_string(entry.path()) else {
        tracing::warn!("Failed to read the monthly md file: {:?}", entry.path());
        continue;
      };
      let mut md: Document<MonthlyFrontmatter> = match YamlFrontMatter::parse(monthly_md.as_str()) {
        Ok(f) => f,
        Err(e) => {
          tracing::warn!(
            "Failed to parse the frontmatter of {:?}; ignored\n>> {:?}",
            entry.path(),
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

      monthlies.insert(
        MonthlyKey { year, month },
        Monthly::new(md.content, year, month, md.metadata),
      );
    }
  }
  Ok(monthlies)
}

pub fn create(contents_path: &String, year: i32, month: i32) -> anyhow::Result<()> {
  ensure!(
    get(contents_path, year, month)?.is_none(),
    "Monthly {}/{} already exists",
    year,
    month
  );

  let dir = std::path::Path::new(contents_path)
    .join("monthly")
    .join(format!("{}", year));
  std::fs::create_dir_all(&dir)?;
  let md_file = dir.join(format!("{:02}.md", month));

  let frontmatter = MonthlyFrontmatter {
    tldr:         "".to_string(),
    published_at: "".to_string(),
    updated_at:   util::now().format("%Y-%m-%dT%H:%M:%S").to_string(),
  };

  std::fs::write(md_file, format!("{}\n\n", frontmatter))?;
  Ok(())
}

pub fn publish(
  contents_path: &String,
  year: i32,
  month: i32,
  should_commit_and_push: bool,
) -> anyhow::Result<()> {
  let Some(monthly) = get(contents_path, year, month)? else {
    bail!("Monthly {}/{} is not found", year, month);
  };
  ensure!(
    monthly.frontmatter.published_at.is_empty(),
    "Monthly {}/{} is already published",
    year,
    month
  );

  monthly.set_published_at(contents_path)?;

  if !should_commit_and_push {
    return Ok(());
  }

  let dir = std::path::Path::new(contents_path)
    .join("monthly")
    .join(format!("{}", year));

  // stage monthly/<year> dir, it may contains img/ directory
  git::Repo::open(contents_path)?
    .stage(dir.as_path())?
    .commit(&format!("add: monthly {}/{}", year, month))?
    .push()?;

  Ok(())
}

pub fn renew(
  contents_path: &String,
  year: i32,
  month: i32,
  commit_message: &String,
) -> anyhow::Result<()> {
  let Some(monthly) = get(contents_path, year, month)? else {
    bail!("Monthly {}/{} is not found", year, month);
  };
  ensure!(
    !monthly.frontmatter.published_at.is_empty(),
    "Monthly {}/{} is not published yet",
    year,
    month
  );

  let dir = std::path::Path::new(contents_path)
    .join("monthly")
    .join(format!("{}", year));

  let repo = crate::git::Repo::open(contents_path)?;
  repo.stage(dir.as_path())?.commit(commit_message)?.push()?;

  Ok(())
}
