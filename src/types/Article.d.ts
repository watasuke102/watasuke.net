/*!
 * Article.d.ts
 *
 * CopyRight (c) 2021-2022 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

export default interface Article {
  slug: string;
  title: string;
  body: string;
  tags: {
    slug: string;
    name: string;
  }[];
  thumbnail: string;
  published_at: string;
  updated_at: string;
}
