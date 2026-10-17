use super::{GoogleSlide, Slide, SlideContent, TypstSlide};
use anyhow::{Context, ensure};
use juniper::graphql_object;
use serde::{Deserialize, Serialize};
use std::{
  collections::BTreeMap,
  path::{Path, PathBuf},
  process::Command,
  time::UNIX_EPOCH,
};
use xxhash_rust::xxh3::xxh3_64;

#[graphql_object(context = crate::Context)]
impl Slide {
  pub fn title(&self) -> &str {
    return &self.title;
  }
  pub fn event(&self) -> Option<String> {
    return self.event.clone();
  }
  pub fn date(&self) -> &str {
    return &self.date;
  }
  pub fn content(&self) -> &SlideContent {
    return &self.content;
  }
}

#[derive(Debug, Clone, serde::Deserialize)]
#[serde(untagged)]
pub enum SlideSource {
  GoogleSlide {
    embed_id: String,
  },
  TypstSlide {
    /// path to `.typ`; relative to `contents_path` unless absolute
    path: String,
  },
}
#[derive(Debug, Clone, serde::Deserialize)]
struct SlideManifest {
  title: String,
  event: Option<String>,
  date:  String,
  #[serde(flatten)]
  src:   SlideSource,
}

pub fn setup_slide(contents_path: &String) -> Vec<Slide> {
  let path = std::path::Path::new(&contents_path).join("slides.toml");
  #[derive(Deserialize)]
  struct SlidesToml {
    slides: Vec<SlideManifest>,
  }
  let slides = match &std::fs::read_to_string(path) {
    Ok(s) => toml::from_str::<SlidesToml>(s).unwrap().slides,
    Err(e) => {
      tracing::error!("Failed to load `slides.toml` in contents directory: {}", e);
      return Vec::new();
    }
  };
  slides
    .into_iter()
    .filter_map(|slide| {
      let title = slide.title.clone();
      ensure_latest_slide(slide, contents_path)
        .inspect_err(|e| tracing::error!("Failed to prepare slide `{}`: {:#}", title, e))
        .ok()
    })
    .collect()
}

fn ensure_latest_slide(slide: SlideManifest, contents_path: &String) -> anyhow::Result<Slide> {
  let SlideManifest {
    title,
    event,
    date,
    src,
  } = slide;
  let content = match src {
    SlideSource::GoogleSlide { embed_id } => SlideContent::GoogleSlide(GoogleSlide { embed_id }),
    SlideSource::TypstSlide { path } => {
      let cache_dir = Path::new(".cache").join(&title);
      let pages = match read_latest_manifest(&cache_dir) {
        Some(manifest) => manifest.pages,
        None => {
          tracing::debug!("Building slide `{}`", title);
          build_slide(&Path::new(contents_path).join(path), &cache_dir)?
        }
      };
      SlideContent::TypstSlide(TypstSlide { pages })
    }
  };
  Ok(Slide {
    title,
    event,
    date,
    content,
  })
}

/// `.typ` files are compared by their contents, others by (mtime, size)
#[derive(Debug, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
enum Fingerprint {
  Xxh3(String),
  Stat {
    mtime_sec:  u64,
    mtime_nsec: u32,
    size:       u64,
  },
}
#[derive(Debug, Serialize, Deserialize)]
struct BuildManifest {
  deps:  BTreeMap<PathBuf, Fingerprint>,
  pages: Vec<String>,
}
/// returns `None` if the slide needs to be (re)built
fn read_latest_manifest(cache_dir: &Path) -> Option<BuildManifest> {
  let manifest: BuildManifest =
    serde_json::from_str(&std::fs::read_to_string(cache_dir.join("manifest.json")).ok()?).ok()?;
  let deps_unchanged = manifest
    .deps
    .iter()
    .all(|(path, fp)| fingerprint(path).is_ok_and(|e| e == *fp));
  let pages_exist = manifest
    .pages
    .iter()
    .all(|hash| cache_dir.join(format!("{}.svg", hash)).is_file());
  (deps_unchanged && pages_exist).then_some(manifest)
}

fn build_slide(typ_path: &Path, cache_dir: &Path) -> anyhow::Result<Vec<String>> {
  #[derive(Deserialize)]
  struct TypstDeps {
    inputs:  Vec<PathBuf>,
    outputs: Option<Vec<PathBuf>>,
  }

  let tmp_dir = cache_dir.join("tmp");
  if tmp_dir.exists() {
    std::fs::remove_dir_all(&tmp_dir)?;
  }
  std::fs::create_dir_all(&tmp_dir)?;

  let output = Command::new("typst")
    .arg("compile")
    .arg(typ_path)
    .arg(tmp_dir.join("{p}.svg"))
    .args(["--deps", "-", "--deps-format", "json"])
    .output()?;
  ensure!(
    output.status.success(),
    "`typst compile` failed:\n{}",
    String::from_utf8_lossy(&output.stderr)
  );
  let deps: TypstDeps = serde_json::from_slice(&output.stdout)?;

  // `outputs` are in page order
  let mut pages = Vec::new();
  for svg in deps.outputs.context("Typst did not report output files")? {
    let hash = format!("{:016x}", xxh3_64(&std::fs::read(&svg)?));
    std::fs::rename(&svg, cache_dir.join(format!("{}.svg", hash)))?;
    pages.push(hash);
  }
  std::fs::remove_dir_all(&tmp_dir)?;

  // paths in `inputs` are relative to the current directory
  let deps = deps
    .inputs
    .iter()
    .map(|path| {
      let path = std::fs::canonicalize(path)?;
      let fp = fingerprint(&path)?;
      Ok((path, fp))
    })
    .collect::<anyhow::Result<_>>()?;
  let manifest = BuildManifest { deps, pages };
  std::fs::write(
    cache_dir.join("manifest.json"),
    serde_json::to_string_pretty(&manifest)?,
  )?;
  Ok(manifest.pages)
}

fn fingerprint(path: &Path) -> anyhow::Result<Fingerprint> {
  if path.extension().is_some_and(|ext| ext == "typ") {
    let hash = xxh3_64(&std::fs::read(path)?);
    return Ok(Fingerprint::Xxh3(format!("{:016x}", hash)));
  }
  let meta = std::fs::metadata(path)?;
  let mtime = meta.modified()?.duration_since(UNIX_EPOCH)?;
  Ok(Fingerprint::Stat {
    mtime_sec:  mtime.as_secs(),
    mtime_nsec: mtime.subsec_nanos(),
    size:       meta.len(),
  })
}
