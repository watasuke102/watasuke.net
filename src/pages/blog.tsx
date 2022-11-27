/*!
 * article.tsx
 *
 * CopyRight (c) 2021-2022 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */
import '@/pages/blog.scss';
import {graphql} from 'gatsby';
import React from 'react';
import Head from '@/common/Head';
import Layout from '@/common/Layout';
import '@/common/main.scss';
import ArticleList from '@/feature/ArticleList/ArticleList';
import {AllTagList} from '@/feature/Tag';
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

export default ({data}: Props) => {
  return (
    <Layout>
      <Head
        title={'ブログ'}
        desc={'投稿した記事・タグの一覧ページです'}
        url={'/blog'}
        breadcrumb_list={[GenBreadcrumb(0, 'Blog')]}
      />
      <h1>ブログ</h1>
      <h2>タグ一覧</h2>
      <AllTagList />

      <hr />

      <h2>記事一覧</h2>
      <div className='blog-container'>
        <ArticleList list={data.allArticles.nodes} />
      </div>
    </Layout>
  );
};

// FIXME: コンポーネントに分ける
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
