/*!
 * profile/index.tsx
 *
 * CopyRight (c) 2021 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import { Remark } from 'react-remark';
import { CSSTransition } from 'react-transition-group';
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
  // 内容をstripで行ごとに検証、filterで見出しの行だけ取り出し、
  // # (見出しを示す記号）を削除して配列に格納
  const toc = data.body
    .split('\n')
    .filter(str => str.match(head))
  //.map(str => str.replace(head, '$1'));
  // クリックするとそこまで飛べる目次を生成する
  const table_of_contents =
    <div className='Posts-table_of_contents'>
      {
        toc.map(str => {
          const count = str.match(/\#/g)?.length;
          str = str.replace(head, '$1');
          return (
            <li id={`toc-${count}`}>
              <a href={`#${str}`}>
                {str}
              </a>
            </li>
          )
        })
      }
    </div>

  const [tocOpening, SetTocOpening] = React.useState(true);

  return (
    <div className='Posts-container' >
      {/* 記事メイン部分 */}
      <div className='Posts-body'>
        <h1>{data.title}</h1>
        {/* 目次 */}
        <div className='Posts-table_of_contents_container'>
          <div className='Posts-close_button' onClick={() => SetTocOpening(!tocOpening)}>
            <span className='material-icons'>
              {tocOpening ? 'expand_less' : 'expand_more'}
            </span>
          </div>
          <h2>目次</h2>
          <CSSTransition in={tocOpening} timeout={1000} classNames='toc-animation'>
            <ol className='toc-animation'>
              {table_of_contents}
            </ol>
          </CSSTransition>
        </div>

        <hr />

        {/* 画像のURLを置き換える */}
        <Remark remarkPlugins={[Toc, Slug]}>
          {data.body.replace('/uploads/', 'http://localhost:1337/uploads/')}
        </Remark>
      </div>

      {/* サイドバー */}
      <div className='Posts-side'>
        <div className='Posts-side_toc'>
          {table_of_contents}
        </div>
      </div>
    </div>
  )
}