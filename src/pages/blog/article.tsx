/*!
 * article.tsx
 *
 * CopyRight (c) 2021-2023 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */
import '@/pages/blog.scss';
import {graphql} from 'gatsby';
import React from 'react';
import Layout from '@/common/Layout';
import Seo from '@/common/Seo';
import '@/common/main.scss';
import ArticleList from '@/feature/ArticleList/ArticleList';
import {GenBreadcrumb} from '@utils/Breadcrumb';
import Article from '@mytypes/Article';

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

const breadcrumb_list = GenBreadcrumb([{name: 'Blog', item: '/blog'}, {name: 'Article'}]);

export default ({data}: Props) => {
  return (
    <Layout>
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

export const Head = () => (
  <Seo
    title={'記事一覧'}
    desc={'投稿した記事の一覧ページです'}
    url={'/blog/article'}
    breadcrumb_list={breadcrumb_list}
  />
);
