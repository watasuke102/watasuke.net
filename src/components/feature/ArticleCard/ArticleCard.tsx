/*!
 * ArticleCard.tsx
 *
 * CopyRight (c) 2021-2023 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */
import {Link} from 'gatsby';
import React from 'react';
import RemoveMD from 'remove-markdown';
import {TagContainer} from '@/feature/Tag';
import Article from '@mytypes/Article';
import './ArticleCard.scss';

interface Props {
  article: Article;
}

export const ArticleCard = ({article}: Props): React.ReactElement => {
  return (
    <Link
      to={'/blog/article/' + article.slug}
      className='ArticleCard-container'
      key={article.slug}
      aria-label={article.title}
    >
      {/* <div className='ArticleCard-thumbnail'>
          <Thumbnail url={article.thumbnail} />
        </div> */}
      <div className='ArticleCard-info'>
        <div className='ArticleCard-date'>
          <span>{article.published_at.slice(0, 10)}</span>
        </div>
        <div>
          <TagContainer tags={article.tags} />
        </div>
      </div>
      <div className='ArticleCard-text'>
        <h2 className='ArticleCard-title'>{article.title}</h2>
        <p className='ArticleCard-description'>
          {
            // 140字に制限して内容を表示、超過分は...で
            RemoveMD(article.body.slice(0, 140) + (article.body.length > 140 ? ' ...' : ''))
          }
        </p>
      </div>
    </Link>
  );
};