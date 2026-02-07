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
import {Menu} from '@feature/Layout';
import {MonthlyTable} from '@feature/Monthly/MonthlyTable/MonthlyTable';
import {GenBreadcrumb} from '@utils/Breadcrumb';
import {gen_template, JsonLd} from '@utils/Metadata';
import {ql} from '@utils/QL';
import {Breadcrumb} from '@common';
import FeedIcon from '@assets/icons/general/feed.svg';

const breadcrumb_list = GenBreadcrumb([
  {name: 'Blog', item: '/blog'},
  {name: 'Monthly'},
]);
export const {viewport, metadata} = gen_template(
  '月報',
  'これまでに投稿した月報の一覧ページです',
  '/blog/monthly',
);

export default async function Monthly() {
  const {allPublicMonthlies} = await ql().allMonthlies();
  return (
    <>
      <JsonLd breadcrumb_list={breadcrumb_list} />
      <Breadcrumb breadcrumb_list={breadcrumb_list} />
      <div>
        <h1 className={css.page_title}>月報</h1>
        <Link href='/feed' className={css.feed_icon}>
          <FeedIcon />
        </Link>
      </div>
      <MonthlyTable monthlies={allPublicMonthlies} />
      <AdsInArticle />
      <Menu />
    </>
  );
}
