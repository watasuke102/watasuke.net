// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './ArticleCard.css';
import {Link} from 'gatsby';
import React from 'react';
import {TagContainer} from '@feature/Tag';
import Article from '@mytypes/Article';

interface Props {
  article: Article;
}

export const ArticleCard = ({article}: Props): React.ReactElement => {
  return (
    <Link to={'/blog/article/' + article.slug} className={css.container} key={article.slug} aria-label={article.title}>
      <div className={css.info}>
        <span className={css.date}>{article.published_at.slice(0, 10)}</span>
        <div>
          <TagContainer tags={article.tags} />
        </div>
      </div>
      <div className={css.text}>
        <h2 className={css.title}>{article.title}</h2>
        <p className={css.description}>{article.tldr}</p>
      </div>
    </Link>
  );
};
