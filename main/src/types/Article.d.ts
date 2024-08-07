// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
export default interface Article {
  slug: string;
  title: string;
  tldr: string;
  body: string;
  tags: {
    slug: string;
    name: string;
  }[];
  published_at: string;
  updated_at: string;
}
