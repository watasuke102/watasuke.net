// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import '@watasuke.net/common/src/css/base.css';
import {Seo, Breadcrumb} from '@common';
import React from 'react';
import {AdsInArticle} from '@watasuke.net/common';
import {Layout} from '@feature/Layout';
import {AllTagList} from '@feature/Tag';
import {GenBreadcrumb} from '@utils/Breadcrumb';

export default function TagListPage(): JSX.Element {
  return (
    <Layout>
      <Breadcrumb breadcrumb_list={breadcrumb_list} />
      <main>
        <h1>タグ一覧</h1>
        <AdsInArticle />
        <AllTagList />
      </main>
    </Layout>
  );
}

const breadcrumb_list = GenBreadcrumb([{name: 'Blog', item: '/blog'}, {name: 'Tag'}]);

export function Head(): JSX.Element {
  return <Seo title={'タグ'} desc={'タグの一覧ページです'} url={'/tag'} breadcrumb_list={breadcrumb_list} />;
}
