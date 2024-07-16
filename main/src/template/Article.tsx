// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from '@feature/Article/Article.css';
import '@watasuke.net/common/src/css/base.css';
import {Seo, Layout, Breadcrumb} from '@common';
import React from 'react';
import {BlogContent, ProfileCard, TocRight} from '@feature/Article';
import {AllTagList} from '@feature/Tag';
import {GenBreadcrumb} from '@utils/Breadcrumb';
import ExtractHeading from '@utils/ExtractHeading';
import Article from '@mytypes/Article';

interface Props {
  pageContext: Article;
}

const breadcrumb_list = (title: string) =>
  GenBreadcrumb([{name: 'Blog', item: '/blog'}, {name: 'Article', item: '/blog/article'}, {name: title}]);

export default function Articale(prop: Props): React.ReactElement {
  const data = prop.pageContext;
  const headings = (() => {
    const headings = ExtractHeading(data.body);
    // 見出しが2個未満だったら目次を出しても違和感がある気がする
    return headings.length < 2 ? undefined : headings;
  })();

  return (
    <Layout>
      <Breadcrumb breadcrumb_list={breadcrumb_list(data.title)} />
      <main className={css.container}>
        {/* 記事メイン部分 */}
        <article className={css.blogcontent_wrapper}>
          <BlogContent data={data} headings={headings} />
        </article>

        {/* サイドバー */}
        <aside className={css.side}>
          <ProfileCard />
          <section className={css.side_tag}>
            <span className={css.head}>タグ</span>
            <AllTagList />
          </section>
          {headings && <TocRight table_of_contents={headings} />}
        </aside>
      </main>
    </Layout>
  );
}

export function Head({pageContext}: Props): React.ReactElement {
  return (
    <Seo
      title={pageContext.title}
      desc={pageContext.tldr}
      url={'/blog/article/' + pageContext.slug}
      breadcrumb_list={breadcrumb_list(pageContext.title)}
    />
  );
}
