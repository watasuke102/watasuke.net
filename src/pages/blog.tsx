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

export default function Blog({data }: Props) {
  return (
    <>
      <h1>記事一覧</h1>
      <div className='blog-container'>
        <ArticleList page={0} list={data.allArticles.edges}/>
      </div>
    </>
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
