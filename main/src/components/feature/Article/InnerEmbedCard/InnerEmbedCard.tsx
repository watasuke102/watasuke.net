// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './InnerEmbedCard.css';
import {initialized_a} from '@utils/initialized_a.css';
import {Link, graphql, useStaticQuery} from 'gatsby';
import React from 'react';
import Article from '@mytypes/Article';

interface Props {
  slug: string;
}

interface Response {
  allArticles: {
    nodes: Article[];
  };
}

export function InnerEmbedCard(props: Props): React.ReactElement {
  const articles: Response = useStaticQuery(graphql`
    query {
      allArticles(sort: {published_at: DESC}) {
        nodes {
          slug
          title
          tldr
          body
          tags {
            slug
            name
          }
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
    <Link to={`/blog/article/${props.slug}`} className={initialized_a}>
      <div className={css.container}>
        <span className={css.title}>{data.title}</span>
        <span className={css.url}>{`watasuke.net - ${props.slug}`}</span>
        <span className={css.description}>{data.tldr}</span>
      </div>
    </Link>
  );
}
