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
import {gen_metadata, JsonLd} from '@utils/Metadata';
import {ql} from '@utils/QL';
import {Breadcrumb} from '@common';
import FeedIcon from '@assets/icons/general/feed.svg';

type Props = {
  params: Promise<{year: string}>;
};

export async function generateStaticParams() {
  return (await ql().allMonthlies()).allPublicMonthlies.map(e => {
    return {year: e.year.toString()};
  });
}
export async function generateMetadata(props: Props) {
  const year = (await props.params).year;
  const {allPublicMonthlies} = await ql().allMonthlies({year: Number(year)});
  if (!allPublicMonthlies) {
    return {};
  }
  return gen_metadata(
    `月報 (${year}年)`,
    `${year}年に投稿した月報の一覧ページです`,
    `/blog/monthly/${year}`,
  );
}

export default async function MonthlyPerYear(props: Props) {
  const year = (await props.params).year;
  const {allPublicMonthlies} = await ql().allMonthlies({year: Number(year)});
  const breadcrumb_list = GenBreadcrumb([
    {name: 'Blog', item: '/blog'},
    {name: 'Monthly', item: '/blog/monthly'},
    {name: `${year}`},
  ]);
  return (
    <>
      <JsonLd breadcrumb_list={breadcrumb_list} />
      <Breadcrumb breadcrumb_list={breadcrumb_list} />
      <div>
        <h1 className={css.page_title}>月報 ({year}年)</h1>
        <Link href='/feed' className={css.feed_icon}>
          <FeedIcon />
        </Link>
      </div>
      <MonthlyTable monthlies={allPublicMonthlies} year={Number(year)} />
      <AdsInArticle />
      <Menu />
    </>
  );
}
