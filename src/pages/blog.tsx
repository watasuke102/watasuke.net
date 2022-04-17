/*!
 * blog.tsx
 *
 * CopyRight (c) 2021-2022 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import {graphql} from 'gatsby';
import Head from '../components/Head';
import Layout from '../components/Layout';
import ArticleList from '../components/ArticleList';
import '../styles/main.scss';
import '../styles/blog.scss';
import Article from '../types/Article';

type Props = {
  location: {
    hash: string;
  };
  data: {
    allArticles: {
      nodes: Article[];
    };
  };
};

export default ({data}: Props) => {
  return (
    <Layout>
      <Head title={'ブログ'} desc={'投稿した記事の一覧ページです'} url={'/blog'} />
      <h1>記事一覧</h1>
      <div className='blog-container'>
        <ArticleList list={data.allArticles.nodes} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allArticles(sort: {fields: published_at, order: DESC}) {
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
`;
