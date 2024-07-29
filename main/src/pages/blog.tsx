// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from '@pages/blog.css';
import '@watasuke.net/common/src/css/base.css';
import {Seo, Breadcrumb} from '@common';
import {graphql} from 'gatsby';
import React from 'react';
import {AdsInArticle} from '@watasuke.net/common';
import {Layout} from '@feature/Layout';
import {ArticleList} from '@feature/ArticleList';
import {AllTagList} from '@feature/Tag';
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
      <main>
        <h1>ブログ</h1>
        <AdsInArticle />
        <h2>タグ一覧</h2>
        <AllTagList />

        <hr />

        <h2>記事一覧</h2>
        <div className={css.container}>
          <ArticleList list={data.allArticles.nodes} />
        </div>
      </main>
    </Layout>
  );
}

// FIXME: コンポーネントに分ける
export const query = graphql`
  query sortedAllArticles {
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
`;

export function Head(): React.ReactElement {
  return (
    <Seo title={'ブログ'} desc={'投稿した記事・タグの一覧ページです'} url={'/blog'} breadcrumb_list={breadcrumb_list} />
  );
}
