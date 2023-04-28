// tag.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {Seo, Breadcrumb, Layout} from '@/common';
import React from 'react';
import '@/common/main.scss';
import {AdsInArticle} from '@/feature/Ads';
import {AllTagList} from '@/feature/Tag';
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
