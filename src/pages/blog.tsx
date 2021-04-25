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
import ArticleList from '../components/ArticleList';
import '../styles/main.scss';
import '../styles/blog.scss';
import Article from '../types/Article';

type Props = {
  location: {
    hash: string
  },
  data: {
    allArticles: {
      nodes: Article[]
    }
  }
}

export default function Blog({ data }: Props) {
  return (
    <>
      <h1>記事一覧</h1>
      <div className='blog-container'>
        <ArticleList list={data.allArticles.nodes} />
      </div>
    </>
  );
}

export const query = graphql`
query {
  allArticles {
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
}`;
