// InnerEmbedCard.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as style from './InnerEmbedCard.css';
import {Link, graphql, useStaticQuery} from 'gatsby';
import React from 'react';
import RemoveMD from 'remove-markdown';
import Article from '@mytypes/Article';

interface Props {
  slug: string;
}

interface Response {
  allArticles: {
    nodes: Article[];
  };
}

export const InnerEmbedCard = (props: Props): React.ReactElement => {
  const articles: Response = useStaticQuery(graphql`
    query {
      allArticles(sort: {published_at: DESC}) {
        nodes {
          slug
          title
          body
          tags {
            name
            slug
          }
          thumbnail
          published_at
          updated_at
        }
      }
    }
  `);

  const data = articles.allArticles.nodes.filter(e => e.slug === props.slug)[0];

  if (!data) {
    return <Link to={`/blog/article/${props.slug}`}>{props.slug}</Link>;
  }

  return (
    <Link className={style.container} to={`/blog/article/${props.slug}`}>
      <span className={style.title}>{data.title}</span>
      <span className={style.url}>{`watasuke.net - ${props.slug}`}</span>
      <span className={style.description}>
        {RemoveMD(data.body.slice(0, 120) + (data.body.length > 140 ? ' ...' : ''))}
      </span>
    </Link>
  );
};
