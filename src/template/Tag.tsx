/*!
 * Tag.tsx
 *
 * CopyRight (c) 2021-2022 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import {graphql} from 'gatsby';
import Head from '@/common/Head';
import Layout from '@/common/Layout';
import ArticleList from '@/feature/ArticleList/ArticleList';
import Article from '@mytypes/Article';
import '@/common/main.scss';
import '@/pages/blog.scss';

interface Props {
  pageContext: {
    slug: string;
    name: string;
  };
  data: {
    allArticles: {
      nodes: Article[];
    };
  };
}

export default ({pageContext, data}: Props) => {
  return (
    <Layout>
      <Head
        title={pageContext.name}
        desc={'タグ' + pageContext.name + 'が付けられた記事'}
        url={'/blog/tag/' + pageContext.slug}
      />
      <h1>{pageContext.name}</h1>
      <div className='blog-container'>
        <ArticleList list={data.allArticles.nodes} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String) {
    allArticles(sort: {fields: published_at, order: DESC}, filter: {tags: {elemMatch: {slug: {eq: $slug}}}}) {
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
