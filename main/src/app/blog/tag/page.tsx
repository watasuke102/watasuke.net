// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import '@watasuke.net/common/src/css/base.css';
import {Breadcrumb} from '@common';
import React from 'react';
import {AdsInArticle} from '@watasuke.net/common';
import {AllTagList} from '@feature/Tag';
import {GenBreadcrumb} from '@utils/Breadcrumb';
import {gen_template, JsonLd} from '@utils/Metadata';

const breadcrumb_list = GenBreadcrumb([
  {name: 'Blog', item: '/blog'},
  {name: 'Tag'},
]);
export const {viewport, metadata} = gen_template(
  'タグ一覧',
  'これまでに投稿したタグの一覧ページです',
  '/blog/tag',
);

export default function TagListPage() {
  return (
    <>
      <JsonLd breadcrumb_list={breadcrumb_list} />
      <Breadcrumb breadcrumb_list={breadcrumb_list} />
      <main>
        <h1>タグ一覧</h1>
        <AllTagList />
        <AdsInArticle />
      </main>
    </>
  );
}
