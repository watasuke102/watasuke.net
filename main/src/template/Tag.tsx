// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import '@/common/main.css';
import * as style from '@/pages/blog.css';
import {Seo, Layout, Breadcrumb} from '@/common';
import {graphql} from 'gatsby';
import React from 'react';
import {ArticleList} from '@/feature/ArticleList/ArticleList';
import {GenBreadcrumb} from '@utils/Breadcrumb';
import Article from '@mytypes/Article';

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

const breadcrumb_list = (name: string) =>
  GenBreadcrumb([{name: 'Blog', item: '/blog'}, {name: 'Tag', item: '/blog/tag'}, {name: name}]);

export default function Tag({pageContext, data}: Props): React.ReactElement {
  return (
    <Layout>
      <Breadcrumb breadcrumb_list={breadcrumb_list(pageContext.name)} />
      <h1>{pageContext.name}</h1>
      <div className={style.container}>
        <ArticleList list={data.allArticles.nodes} />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String) {
    allArticles(sort: {published_at: DESC}, filter: {tags: {elemMatch: {slug: {eq: $slug}}}}) {
      nodes {
        slug
        title
        tldr
        body
        tags {
          name
          slug
        }
        published_at
        updated_at
      }
    }
  }
`;

export const Head = ({pageContext}: Props): React.ReactElement => (
  <Seo
    title={pageContext.name}
    desc={'タグ' + pageContext.name + 'が付けられた記事'}
    url={'/blog/tag/' + pageContext.slug}
    breadcrumb_list={breadcrumb_list(pageContext.name)}
  />
);
