/*!
 * Top.tsx
 *
 * CopyRight (c) 2021 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import RemoveMD from 'remove-markdown';
import Article from '../types/Article';
import '../styles/main.scss';
import '../styles/blog.scss';

type Props = {
  location: {
    hash: string
  },
  data: {
    allArticles: {
      edges: [{
        node: Article;
      }]
    }
  }
}

export default function Blog({ location, data }: Props) {
  console.log(data);
  const articles = data.allArticles.edges;
  const page_number = Number(location.hash) ?? 0;

  const article_count = 3;
  let article_cards: object[] = [];
  const begin = page_number * article_count;
  const last = page_number * article_count + article_count;
  // 記事からarticle_count個取り出す
  articles
    .slice(begin, last)
    .forEach(({ node }) => {
      console.log(node.title);
      article_cards.push(
        <div>
          <h2>{node.title}</h2>
          <p>
            {RemoveMD(node.body.slice(0, 140) + ' ...')}
          </p>
        </div>
      )
    });

  return (
    <div className='blog-container'>
      {article_cards}
    </div>
  );
}

export const query = graphql`
query {
  allArticles {
    edges {
      node {
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
}`;
