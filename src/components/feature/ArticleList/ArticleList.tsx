// ArticleList.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import React from 'react';
import Article from '@mytypes/Article';
import {ArticleCard} from '../ArticleCard';
import * as style from './ArticleList.css';

interface Props {
  list: Article[];
}
const article_count = 10;

export const ArticleList = (props: Props): React.ReactElement => {
  const max_page = Math.ceil(props.list.length / article_count);
  // ページ切り替え用
  const [current_page, SetCurrentPage] = React.useState(1);
  const NextPage = () => {
    if (current_page === max_page) return;
    SetCurrentPage(current_page + 1);
  };
  const BeforePage = () => {
    if (current_page === 1) return;
    SetCurrentPage(current_page - 1);
  };

  // 記事一覧の作成
  const begin = (current_page - 1) * article_count;
  const last = (current_page - 1) * article_count + article_count;
  const article_cards = props.list
    .slice(begin, last) // 記事からarticle_count個取り出す
    .map(article => <ArticleCard key={article.slug} article={article} />);

  // ページ上下に表示する、ページ切り替え用のボタンと現在のページ
  // 最初のページでは戻るボタンを非表示に、最後のページでは進むボタンを非表示に
  // （ページ数を中央に表示するため、非表示にする代わりにdivを返す）
  const page_status = (
    <section className={style.button_container}>
      {current_page === 1 ? (
        <div className={style.empty}></div>
      ) : (
        <div className={style.button} onClick={BeforePage}>
          <i className='fa-solid fa-chevron-left' />
        </div>
      )}
      {/* 現在ページと合計ページの表示 */}
      <span>
        {current_page} / {max_page}
      </span>
      {current_page === max_page ? (
        <div className={style.empty}></div>
      ) : (
        <div className={style.button} onClick={NextPage}>
          <i className={`${style.button_icon} fa-solid fa-chevron-right`} />
        </div>
      )}
    </section>
  );

  return (
    <div className={style.container}>
      {page_status}
      <div className={style.list}>{article_cards}</div>
      {page_status}
    </div>
  );
};
