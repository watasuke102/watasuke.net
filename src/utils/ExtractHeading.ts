/*!
 * ExtractHeading.scss
 *
 * CopyRight (c) 2021-2022 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import Heading from '@mytypes/Heading';

/*
マークダウンから見出しだけを抽出する
見出しとその大きさ？を格納する
例: 
`
# Title
this is normal text.
## Head 2
### Head 3
`
=>[
  {size: 1, body: "Title"},
  {size: 2, body: "Head 2"},
  {size: 3, body: "Head 3"},
]
*/

export default function ExtractHeading(str: string): Heading[] {
  console.log(str);
  // 見出し要素を見つけるための正規表現
  // 文頭が1個以上の# + 空白 + 何らかの文字列
  const heading_regexp = /^\#+ (.*)/;
  // 内容を改行でstrip（行ごとに検証）filterで見出しの行だけ取り出し、
  // # (見出しを示す記号）の個数を計算して削除（見出しの文字列だけ抽出）
  let result: Heading[] = str
    .split('\n')
    .filter(str => str.match(heading_regexp))
    .map(str => {
      return {
        size: str.match(/\#/g)?.length ?? -1,
        body: str.replace(heading_regexp, '$1'),
      };
    });
  return result;
}
