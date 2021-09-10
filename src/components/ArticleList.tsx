/*!
 * ArticleList.tsx
 *
 * CopyRight (c) 2021 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import { navigate } from 'gatsby';
import RemoveMD from 'remove-markdown';
import Thumbnail from './Thumbnail'
import TagContainer from './TagContainer'
import Article from '../types/Article';
import '../styles/ArticleList.scss';

interface Props {
  list: Article[],
}
const article_count = 10;

export default (props: Props) => {
  const max_page = Math.ceil(props.list.length / article_count);
  // ページ切り替え用
  const [current_page, SetCurrentPage] = React.useState(1);
  const NextPage = () => {
    if (current_page === max_page) return;
    SetCurrentPage(current_page + 1);
  }
  const BeforePage = () => {
    if (current_page === 1) return;
    SetCurrentPage(current_page - 1);
  }

  // 記事一覧の作成
  let article_cards: object[] = [];
  const begin = (current_page - 1) * article_count;
  const last = (current_page - 1) * article_count + article_count;
  props.list
    .slice(begin, last) // 記事からarticle_count個取り出す
    .forEach(article => {
      article_cards.push(
        <div className='ArticleList-card' onClick={() => navigate('/blog/article/' + article.slug)}>
          <div className='ArticleList-thumbnail'>
            <Thumbnail url={article.thumbnail} />
          </div>
          <div className='ArticleList-date'>
            <span>
              {article.published_at.slice(0, 10)}
            </span>
          </div>
          <div className='ArticleList-text'>
            <h2>{article.title}</h2>
            <TagContainer tags={article.tags} />
            <p className='ArticleList-description'>
              {
                // 140字に制限して内容を表示、超過分は...で
                RemoveMD(article.body.slice(0, 140) + ((article.body.length > 140) ? ' ...' : ''))
              }
            </p>
          </div>
        </div>
      )
    });

  // ページ上下に表示する、ページ切り替え用のボタンと現在のページ
  // 最初のページでは戻るボタンを非表示に、最後のページでは進むボタンを非表示に
  // （ページ数を中央に表示するため、非表示にする代わりにdivを返す）
  const page_status = (
    <div className='ArticleList-button_container'>
      {
        (current_page === 1) ? <div className='ArticleList-empty'></div> :
          <div className='ArticleList-button' onClick={BeforePage}>
            <i className="fas fa-chevron-left" />
          </div>
      }
      {/* 現在ページと合計ページの表示 */}
      <span>
        {current_page} / {max_page}
      </span>
      {
        (current_page === max_page) ? <div className='ArticleList-empty'></div> :
          <div className='ArticleList-button' onClick={NextPage}>
            <i className="fas fa-chevron-right" />
          </div>
      }
    </div>
  );

  return (
    <div className='ArticleList-container'>
      {page_status}
      <div className='ArticleList-list'>
        {article_cards}
      </div>
      {page_status}
    </div>
  );
}
