// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from '@pages/blog.css';
import '@watasuke.net/common/src/css/base.css';
import React from 'react';
import Link from 'next/link';
import {AdsInArticle} from '@watasuke.net/common';
import {ArticleList} from '@feature/ArticleList';
import {AllTagList} from '@feature/Tag';
import {Menu} from '@feature/Layout';
import {MonthlyTable} from '@feature/Monthly/MonthlyTable/MonthlyTable';
import {GenBreadcrumb} from '@utils/Breadcrumb';
import {gen_template, JsonLd} from '@utils/Metadata';
import {ql} from '@utils/QL';
import {Breadcrumb} from '@common';
import FeedIcon from '@assets/icons/general/feed.svg';

const breadcrumb_list = GenBreadcrumb([{name: 'Blog'}]);
export const {viewport, metadata} = gen_template(
  'ブログ',
  'これまでに投稿した月報・記事・タグの一覧ページです',
  '/blog',
);

export default async function Blog() {
  const {allPublicArticles, allPublicMonthlies} = await ql().blogPage();
  // FIXME: WHY should I sort `allPublicArticles` which is expected to be sorted in CMS?
  allPublicArticles.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
  return (
    <>
      <JsonLd breadcrumb_list={breadcrumb_list} />
      <Breadcrumb breadcrumb_list={breadcrumb_list} />
      <div>
        <h1 className={css.page_title}>ブログ</h1>
        <Link href='/feed' className={css.feed_icon}>
          <FeedIcon />
        </Link>
      </div>

      <h2 className={css.heading}>月報</h2>
      <MonthlyTable monthlies={allPublicMonthlies} />

      <h2 className={css.heading}>タグ一覧</h2>
      <AllTagList />

      <h2 className={css.heading}>記事一覧</h2>
      <div className={css.container}>
        <ArticleList list={allPublicArticles} />
      </div>
      <AdsInArticle />

      <Menu />
    </>
  );
}
