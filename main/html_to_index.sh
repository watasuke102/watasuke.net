#!/usr/bin/env bash

if [[ ! -d out ]]; then
  echo '[FATAL] `out` directory is not found'
  exit 1
fi

echo '>>> Replacing *.html to */index.html'
for f in $(find out -name '*.html' -type f); do
  dir=$(dirname $f)
  name=$(basename $f)
  name=${name/.*}
  if [[ "$name" = "index" ]]; then
    continue
  fi
  dst="$dir/$name"
  mkdir -p $dst
  mv $dir/$name.html $dst/index.html
done
