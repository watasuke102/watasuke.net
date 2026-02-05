// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './ArticleCard.css';
import {initialized_a} from '@utils/initialized_a.css';
import Link from 'next/link';
import React from 'react';
import {cs} from '@watasuke.net/common';
import {TagContainer} from '@feature/Tag';
import {AllArticlesQuery} from '@utils/graphql';

interface Props {
  article: AllArticlesQuery['allPublicArticles'][0];
}

export function ArticleCard({article}: Props) {
  return (
    <div className={css.container}>
      <Link
        href={'/blog/article/' + article.slug}
        className={cs(initialized_a, css.link)}
        key={article.slug}
        aria-label={article.title}
      >
        <span className={css.date}>{article.publishedAt.slice(0, 10)}</span>
        <h2 className={css.title}>{article.title}</h2>
        <p className={css.description}>{article.tldr}</p>
      </Link>
      <div className={css.tagcontainer_wrapper}>
        <TagContainer tags={article.tags} />
      </div>
    </div>
  );
}
