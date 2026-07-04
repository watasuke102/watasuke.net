// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
'use client';

import * as css from './ArticleList.css';
import React from 'react';
import {AllArticlesQuery} from '@utils/graphql';
import IconLeft from '@assets/icons/general/left.svg';
import IconRight from '@assets/icons/general/right.svg';
import Link from 'next/link';
import {classnames as cs} from '@watasuke.net/common/src/classnames';
import {initialized_a} from '@utils/initialized_a.css';

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
            <>
              <Link
                href={'/blog/article/' + article.slug}
                className={cs(initialized_a, css.card_link)}
                key={article.slug}
                aria-label={article.title}
              >
                <h2 className={css.card_title}>{article.title}</h2>
                <span className={css.card_date}>
                  {article.publishedAt.slice(0, 10)}
                </span>
                <span className={css.card_tag_container}>
                  {
                    // <TagContainer> uses <section>, <Link>, etc. which cannot be used in <Link> (Card's tag)
                    article.tags.map(tag => {
                      return (
                        <span key={tag.slug} className={css.card_tag}>
                          {tag.name}
                        </span>
                      );
                    })
                  }
                </span>
                <p className={css.card_description}>{article.tldr}</p>
              </Link>
            </>
          ))}
      </section>
      {page_status}
    </div>
  );
}
