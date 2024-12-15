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

interface Props {
  slug: string;
}

export function InnerEmbedCard(props: Props): JSX.Element {
  const articles: Queries.sortedAllArticlesQuery = useStaticQuery(graphql`
    query innerEmbedCardInfo {
      allArticles(sort: {published_at: DESC}) {
        nodes {
          slug
          title
        }
      }
    }
  `);

  const slug_without_hash = props.slug.replace(/#.+$/, '');
  const data = articles.allArticles.nodes.filter(e => e.slug === slug_without_hash)[0];
  const decoded_slug = decodeURI(props.slug);

  if (!data) {
    return (
      <>
        {'[Failed to create InnerEmbedCard] '}
        <Link to={`/blog/article/${props.slug}`}>{decoded_slug}</Link>
      </>
    );
  }

  return (
    <Link to={`/blog/article/${props.slug}`} className={initialized_a}>
      <div className={css.container}>
        <span className={css.title}>{data.title}</span>
        <span className={css.url}>{`watasuke.net - ${decoded_slug}`}</span>
        <span className={css.description}>{data.tldr}</span>
      </div>
    </Link>
  );
}
