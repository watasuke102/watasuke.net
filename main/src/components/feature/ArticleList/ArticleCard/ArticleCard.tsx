// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './ArticleCard.css';
import {initialized_a} from '@utils/initialized_a.css';
import {Link} from 'gatsby';
import React from 'react';
import {TagContainer} from '@feature/Tag';
import Article from '@mytypes/Article';

interface Props {
  article: Article;
}

export function ArticleCard({article}: Props): JSX.Element {
  // wrap by <div> twice in order to prevent layout collapse
  // on the first visit or hard reloading
  return (
    <div className={css.container}>
      <Link
        to={'/blog/article/' + article.slug}
        className={initialized_a}
        key={article.slug}
        aria-label={article.title}
      >
        <div className={css.inside_link}>
          <div>
            <span className={css.date}>{article.published_at.slice(0, 10)}</span>
          </div>

          <div className={css.tagcontainer_wrapper}>
            <TagContainer tags={article.tags} />
          </div>
          <h2 className={css.title}>{article.title}</h2>
          <p className={css.description}>{article.tldr}</p>
        </div>
      </Link>
    </div>
  );
}
