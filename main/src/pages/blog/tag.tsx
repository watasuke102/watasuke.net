// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import '@common/main.css';
import {Seo, Breadcrumb, Layout} from '@common';
import {AllTagList} from '@feature/Tag';
import {AdsInArticle} from '@watasuke.net/common';
import React from 'react';
import {GenBreadcrumb} from '@utils/Breadcrumb';

export default function TagListPage(): React.ReactElement {
  return (
    <Layout>
      <Breadcrumb breadcrumb_list={breadcrumb_list} />
      <h1>タグ一覧</h1>
      <AdsInArticle />
      <AllTagList />
    </Layout>
  );
}

const breadcrumb_list = GenBreadcrumb([{name: 'Blog', item: '/blog'}, {name: 'Tag'}]);

export const Head = (): React.ReactElement => (
  <Seo title={'タグ'} desc={'タグの一覧ページです'} url={'/tag'} breadcrumb_list={breadcrumb_list} />
);
