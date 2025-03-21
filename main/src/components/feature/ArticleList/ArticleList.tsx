// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
'use client';

import * as css from './ArticleList.css';
import React from 'react';
import {AllArticlesQuery} from '@utils/graphql';
import {ArticleCard} from './ArticleCard/ArticleCard';
import IconLeft from '@assets/icons/general/left.svg';
import IconRight from '@assets/icons/general/right.svg';

interface Props {
  list: AllArticlesQuery['allPublicArticles'];
}
const article_count = 10;

export function ArticleList(props: Props) {
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

  // ページ上下に表示する、ページ切り替え用のボタンと現在のページ
  // 最初のページでは戻るボタンを非表示に、最後のページでは進むボタンを非表示に
  // （ページ数を中央に表示するため、非表示にする代わりにdivを返す）
  const page_status = (
    <section className={css.button_container} aria-label='記事一覧ページ移動'>
      {current_page === 1 ? (
        <div className={css.empty}></div>
      ) : (
        <button className={css.button} onClick={BeforePage}>
          <IconLeft />
        </button>
      )}
      {/* 現在ページと合計ページの表示 */}
      <span>
        {current_page} / {max_page}
      </span>
      {current_page === max_page ? (
        <div className={css.empty}></div>
      ) : (
        <button className={css.button} onClick={NextPage}>
          <IconRight />
        </button>
      )}
    </section>
  );

  const begin = (current_page - 1) * article_count;
  const last = (current_page - 1) * article_count + article_count;
  return (
    <div className={css.container}>
      {page_status}
      <section className={css.list} aria-label='記事一覧'>
        {props.list
          .slice(begin, last) // 記事からarticle_count個取り出す
          .map(article => (
            <ArticleCard key={article.slug} article={article} />
          ))}
      </section>
      {page_status}
    </div>
  );
}
