// watasuke.net > common
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.

export type UrlEmbedType = {
  embed_type: 'internal' | 'twitter' | 'youtube' | 'none';
  data: string;
};

export function classify_url_embed_type(url: string): UrlEmbedType {
  if (url.slice(0, 19) === 'https://twitter.com' || url.slice(0, 13) === 'https://x.com') {
    return {embed_type: 'twitter', data: ''};
  }
  if (url.slice(0, 32) === 'https://www.youtube.com/watch?v=') {
    return {embed_type: 'youtube', data: url.slice(32)};
  }

  const inner_url = url.match(/https:\/\/watasuke.net\/blog\/article\/(.+)/) ?? '';
  if (inner_url) {
    return {embed_type: 'internal', data: inner_url[1].replace('/', '')};
  }

  return {embed_type: 'none', data: ''};
}
