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

export default function ArticleListPage({data}: Props): JSX.Element {
  return (
    <Layout>
      <Breadcrumb breadcrumb_list={breadcrumb_list} />
      <main>
        <h1>記事一覧</h1>
        <AdsInArticle />
        <div className={css.container}>
          <ArticleList list={data.allArticles.nodes} />
        </div>
      </main>
    </Layout>
  );
}

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

export function Head(): JSX.Element {
  return (
    <Seo
      title={'記事一覧'}
      desc={'投稿した記事の一覧ページです'}
      url={'/blog/article'}
      breadcrumb_list={breadcrumb_list}
    />
  );
}
