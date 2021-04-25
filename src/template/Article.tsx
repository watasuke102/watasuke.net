/*!
 * Article.tsx
 *
 * CopyRight (c) 2021 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import { Remark } from 'react-remark';
import { StaticImage } from 'gatsby-plugin-image';
import { CSSTransition } from 'react-transition-group';
import Thumbnail from '../components/Thumbnail';
import ProfileCard from '../components/ProfileCard';
import TagContainer from '../components/TagContainer';
import Article from '../types/Article';
import '../styles/main.scss';
import '../styles/Article.scss';

// Remark関連
import Slug from 'remark-slug';
import Toc from 'remark-toc';

// コードのシンタックスハイライト
import Prism from 'prismjs';

interface Props {
  pageContext: Article
}

export default (prop: Props) => {
  React.useEffect(() => { setTimeout(Prism.highlightAll, 0) });
  const data = prop.pageContext;
  // 見出し要素を見つけるための正規表現
  const heading_regexp = /^\#\#* (.*)/;
  // 内容をstripで行ごとに検証、filterで見出しの行だけ取り出し、
  // # (見出しを示す記号）を削除して配列に格納
  const toc = data.body
    .split('\n')
    .filter(str => str.match(heading_regexp))
  //.map(str => str.replace(heading_regexp, '$1'));
  // クリックするとそこまで飛べる目次を生成する
  const table_of_contents =
    <div className='Article-table_of_contents'>
      {
        toc.map(str => {
          const count = str.match(/\#/g)?.length;
          str = str.replace(heading_regexp, '$1');
          return (
            <li id={`toc-${count}`}>
              <a href={`#${str.toLowerCase()}`}>
                {str}
              </a>
            </li>
          )
        })
      }
    </div>

  const [tocOpening, SetTocOpening] = React.useState(true);
  // 目次を表示するかどうか (見出しが2つ以下なら表示しない)
  const is_show_toc = table_of_contents.props.children.length > 2;

  return (
    <div className='Article-container' >
      {/* 記事メイン部分 */}
      <div className='Article-body'>
        <h1 className='Article-title'>
          {data.title}
        </h1>
        {/* サムネ */}
        <Thumbnail url={data.thumbnail} />
        {/* 公開日と更新日 */}
        <div className='Article-date'>
          <span className='material-icons'>schedule</span>
          <p>{data.published_at.slice(0, 10)}</p>
          <span className='material-icons'>update</span>
          <p>{data.updated_at.slice(0, 10)}</p>
        </div>
        {/* タグ */}
        <TagContainer tags={data.tags} />
        {
          is_show_toc &&
          <>
            <div className='Article-table_of_contents_container'>
              <div className='Article-close_button' onClick={() => SetTocOpening(!tocOpening)}>
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
          </>
        }


        {/* 画像のURLを置き換える */}
        <Remark remarkPlugins={[Toc, Slug]}>
          {data.body.replace('/uploads/', 'http://localhost:1337/uploads/')}
        </Remark>
      </div>

      {/* サイドバー */}
      <div className='Article-side'>
        <ProfileCard />
        {
          is_show_toc &&
          <div className='Article-side_toc'>
            {table_of_contents}
          </div>
        }
      </div>
    </div>
  )
}