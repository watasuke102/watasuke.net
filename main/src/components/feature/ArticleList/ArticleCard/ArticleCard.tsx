// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as style from './ArticleCard.css';
import {TagContainer} from '@feature/Tag';
import {Link} from 'gatsby';
import React from 'react';
import Article from '@mytypes/Article';

interface Props {
  article: Article;
}

export const ArticleCard = ({article}: Props): React.ReactElement => {
  return (
    <Link
      to={'/blog/article/' + article.slug}
      className={style.container}
      key={article.slug}
      aria-label={article.title}
    >
      <div className={style.info}>
        <span className={style.date}>{article.published_at.slice(0, 10)}</span>
        <div>
          <TagContainer tags={article.tags} />
        </div>
      </div>
      <div className={style.text}>
        <h2 className={style.title}>{article.title}</h2>
        <p className={style.description}>{article.tldr}</p>
      </div>
    </Link>
  );
};
