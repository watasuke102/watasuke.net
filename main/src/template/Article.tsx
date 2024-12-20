// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from '@feature/Article/Article.css';
import '@watasuke.net/common/src/css/base.css';
import {Seo, Breadcrumb} from '@common';
import React from 'react';
import {Link} from 'gatsby';
import {TocMapper} from '@watasuke.net/common';
import Heading from '@watasuke.net/common/src/Heading';
import {Layout} from '@feature/Layout';
import {BlogContent, ProfileCard} from '@feature/Article';
import {AllTagList} from '@feature/Tag';
import {HeadingContext} from '@feature/TableOfContents/HeadingContext';
import {GenBreadcrumb} from '@utils/Breadcrumb';
import IconLeft from '@assets/icons/general/left.svg';
import Article from '@mytypes/Article';

interface Props {
  pageContext: {
    article: Article;
    newer: Article | undefined;
    older: Article | undefined;
    headings: Heading[];
  };
}

const breadcrumb_list = (title: string) =>
  GenBreadcrumb([{name: 'Blog', item: '/blog'}, {name: 'Article', item: '/blog/article'}, {name: title}]);

export default function ArticleTemplate(props: Props): JSX.Element {
  const article = props.pageContext.article;

  return (
    <HeadingContext.Provider value={props.pageContext.headings}>
      <Layout>
        <Breadcrumb breadcrumb_list={breadcrumb_list(article.title)} />
        <Link to='/blog' className={css.back_link}>
          <IconLeft />
          記事一覧ページへ移動
        </Link>
        <main className={css.container}>
          {/* 記事メイン部分 */}
          <article className={css.blogcontent_wrapper}>
            <BlogContent data={article} newer={props.pageContext.newer} older={props.pageContext.older} />
          </article>

          {/* サイドバー */}
          <aside className={css.side}>
            <ProfileCard />
            <section className={css.side_tag}>
              <span className={css.head}>タグ</span>
              <AllTagList />
            </section>
            {props.pageContext.headings && (
              <nav className={css.side_toc}>
                <TocMapper headings={props.pageContext.headings} />
              </nav>
            )}
          </aside>
        </main>
      </Layout>
    </HeadingContext.Provider>
  );
}

export function Head({pageContext}: Props): JSX.Element {
  return (
    <Seo
      title={pageContext.article.title}
      desc={pageContext.article.tldr}
      url={'/blog/article/' + pageContext.article.slug}
      breadcrumb_list={breadcrumb_list(pageContext.article.title)}
    />
  );
}
