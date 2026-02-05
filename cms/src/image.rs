use crate::{config::Config, usecase};
use tokio::io::AsyncReadExt;
pub(super) enum ImageError {
  NotFound,
  UnsupportedMediaType,
  InternalServerError,
}

pub(super) async fn read_image_file(
  slug: &String,
  img_name: &String,
  config: &Config,
) -> Result<(tokio::fs::File, &'static str), (ImageError, String)> {
  let article = match usecase::articles::get(&config.contents_path, &slug.to_string()) {
    Ok(Some(article)) => article,
    Ok(None) => {
      return Err((ImageError::NotFound, format!("not found: {}", slug)));
    }
    Err(e) => {
      return Err((ImageError::InternalServerError, e.to_string()));
    }
  };
  let path = std::path::Path::new(article.article_path()).join(&img_name);

  let Ok(mut file) = tokio::fs::File::open(&path).await else {
    return Err((
      ImageError::NotFound,
      format!("not found: {}/{}", slug, img_name),
    ));
  };
  let mut buf = [0u8; 12];
  let Ok(_) = file.read_exact(&mut buf).await else {
    return Err((
      ImageError::InternalServerError,
      format!("failed to read file: {}/{}", slug, img_name),
    ));
  };

  let content_type = match buf {
    [0x89, 0x50, 0x4e, 0x47, ..] => "image/png",
    [0xff, 0xd8, 0xff, ..] => "image/jpeg",
    // https://datatracker.ietf.org/doc/rfc9649/
    [0x52, 0x49, 0x46, 0x46, _, _, _, _, 0x57, 0x45, 0x42, 0x50] => "image/webp",
    // b"ftyp", b"avif"
    [_, _, _, _, 0x66, 0x74, 0x79, 0x70, 0x61, 0x76, 0x69, 0x66] => "image/avif",
    _ => {
      return Err((
        ImageError::UnsupportedMediaType,
        format!("unsupported image format: {}/{}", slug, img_name),
      ));
    }
  };

  let Ok(file) = tokio::fs::File::open(path).await else {
    return Err((
      ImageError::NotFound,
      format!("not found: {}/{}", slug, img_name),
    ));
  };
  Ok((file, content_type))
}

pub(super) async fn create_image_from_stream<R>(
  slug: &String,
  img_name: &String,
  config: &Config,
  reader: &mut R,
) -> Result<(), (ImageError, String)>
where
  R: tokio::io::AsyncRead + Unpin + ?Sized,
{
  let article = match usecase::articles::get(&config.contents_path, &slug.to_string()) {
    Ok(Some(article)) => article,
    Ok(None) => {
      return Err((ImageError::NotFound, format!("not found: {}", slug)));
    }
    Err(e) => {
      return Err((ImageError::InternalServerError, e.to_string()));
    }
  };
  let path = std::path::Path::new(article.article_path()).join(&img_name);
  let dst = tokio::fs::File::create(path.clone()).await.map_err(|e| {
    (
      ImageError::InternalServerError,
      format!("failed to create file: {}", e),
    )
  })?;
  let mut writer = tokio::io::BufWriter::new(dst);

  tokio::io::copy(reader, &mut writer).await.map_err(|e| {
    (
      ImageError::InternalServerError,
      format!("failed to write file: {}", e),
    )
  })?;

  Ok(())
}
