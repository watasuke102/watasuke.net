// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import React from 'react';
import {SlidesPage} from '@pages/slides/SlidesPage';
import {Breadcrumb} from '@common/Breadcrumb/Breadcrumb';
import {GenBreadcrumb} from '@utils/Breadcrumb';
import {gen_template, JsonLd} from '@utils/Metadata';
import {ql} from '@utils/QL';

const breadcrumb_list = GenBreadcrumb([{name: 'slides'}]);
export const {viewport, metadata} = gen_template(
  'スライド',
  'これまでに行った発表において使用したスライド資料をまとめています',
  '/slides',
);

export default async function Slides() {
  const {allSlides} = await ql().allSlides();
  return (
    <>
      <JsonLd breadcrumb_list={breadcrumb_list} />
      <Breadcrumb breadcrumb_list={breadcrumb_list} />
      <main>
        <h1>Slides</h1>
        <p>これまでに行った発表において使用したスライド資料をまとめています</p>
        <SlidesPage slides={allSlides} />
      </main>
    </>
  );
}
