/*!
 * profile/index.tsx
 *
 * CopyRight (c) 2021 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import { Remark as MarkdownRenderer } from 'react-remark';
import Article from '../types/Article';
import '../styles/main.scss';
import '../styles/Posts.scss';

// Remark関連
import Slug from 'remark-slug';
import Toc from 'remark-toc';

interface Props {
  pageContext: Article
}

export default (prop: Props) => {
  const data = prop.pageContext;
  // 見出し要素を見つけるための正規表現
  const head = /^\#\#* (.*)/;
  // 内容を行ごとに検証、見出しの項目名だけ抜き取って配列に格納
  const toc = data.body
    .split('\n')
    .filter(str => str.match(head))
    .map(str => str.replace(head, '$1'));
  console.log(toc);

  // クリックするとそこまで飛べる目次を生成する
  const table_of_contents = toc.map(str => {
    return (
      <li>
        <a href={`#${str}`}>{str}</a>
      </li>
    )
  })

  const [tocOpening, SetTocOpening] = React.useState(true);

  return (
    <>
      <h1>{data.title}</h1>
      <div className='Posts-body'>
        {/* 目次 */}
        <div className='Posts-table_of_contents_container'>
          <div className='Posts-close_button' onClick={() => { console.log(!tocOpening); SetTocOpening(!tocOpening); }}>
            <span className='material-icons'>
              {tocOpening ? 'expand_less' : 'expand_more'}
            </span>
          </div>
          <h2>目次</h2>
          <ul style={{ height: tocOpening ? 'auto' : 0 }}>
            {table_of_contents}
          </ul>
        </div>

        {/* 画像のURLを置き換える */}
        <MarkdownRenderer remarkPlugins={[Toc, Slug]}>
          {data.body.replace('/uploads/', 'http://localhost:1337/uploads/')}
        </MarkdownRenderer>
      </div>
    </>
  )
}