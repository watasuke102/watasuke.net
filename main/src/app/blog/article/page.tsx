// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from '@pages/blog.css';
import Link from 'next/link';
import '@watasuke.net/common/src/css/base.css';
import {Breadcrumb} from '@common';
import React from 'react';
import {AdsInArticle} from '@watasuke.net/common';
import {ArticleList} from '@feature/ArticleList';
import {GenBreadcrumb} from '@utils/Breadcrumb';
import {ql} from '@utils/QL';
import {gen_template, JsonLd} from '@utils/Metadata';
import FeedIcon from '@assets/icons/general/feed.svg';

const breadcrumb_list = GenBreadcrumb([
  {name: 'Blog', item: '/blog'},
  {name: 'Article'},
]);
export const {viewport, metadata} = gen_template(
  '記事一覧',
  'これまでに投稿した記事の一覧ページです',
  '/blog/article',
);

export default async function ArticleListPage() {
  const {allPublicArticles} = await ql().allArticles();
  // FIXME: WHY should I sort `allPublicArticles` which is expected to be sorted in CMS?
  allPublicArticles.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
  return (
    <>
      <JsonLd breadcrumb_list={breadcrumb_list} />
      <Breadcrumb breadcrumb_list={breadcrumb_list} />
      <div>
        <h1 className={css.page_title}>記事一覧</h1>
        <Link href='/feed' className={css.feed_icon}>
          <FeedIcon />
        </Link>
      </div>
      <div className={css.container}>
        <ArticleList list={allPublicArticles} />
      </div>
      <AdsInArticle />
    </>
  );
}
