/*!
 * article.tsx
 *
 * CopyRight (c) 2021-2023 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */
import * as style from '@/pages/blog.css';
import {Seo, Breadcrumb, Layout} from '@/common';
import {graphql} from 'gatsby';
import React from 'react';
import '@/common/main.scss';
import {AdsInArticle} from '@/feature/Ads';
import {ArticleList} from '@/feature/ArticleList';
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

const breadcrumb_list = GenBreadcrumb([{name: 'Blog'}]);

export default function Blog({data}: Props): React.ReactElement {
  return (
    <Layout>
      <Breadcrumb breadcrumb_list={breadcrumb_list} />
      <h1>ブログ</h1>
      <AdsInArticle />
      <h2>タグ一覧</h2>
      <AllTagList />

      <hr />

      <h2>記事一覧</h2>
      <div className={style.container}>
        <ArticleList list={data.allArticles.nodes} />
      </div>
    </Layout>
  );
}

// FIXME: コンポーネントに分ける
export const query = graphql`
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
`;

export const Head = (): React.ReactElement => (
  <Seo title={'ブログ'} desc={'投稿した記事・タグの一覧ページです'} url={'/blog'} breadcrumb_list={breadcrumb_list} />
);
