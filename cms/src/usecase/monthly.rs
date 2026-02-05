use anyhow::{Context, ensure};
use regex::Regex;
use yaml_front_matter::{Document, YamlFrontMatter};

use crate::contents::{Monthly, MonthlyFrontmatter, MonthlyKey, MonthlyMap};

pub fn get(contents_path: &String, key: MonthlyKey) -> anyhow::Result<Option<Monthly>> {
  Ok(get_map_all(contents_path)?.get(&key).cloned())
}
pub fn get_all(contents_path: &String) -> anyhow::Result<Vec<Monthly>> {
  let mut monthlies: Vec<Monthly> = get_map_all(contents_path)?.into_values().collect();
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
