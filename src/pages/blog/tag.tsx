/*!
 * blog.tsx
 *
 * CopyRight (c) 2021-2023 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */
import '@/pages/blog.scss';
import React from 'react';
import Breadcrumb from '@/common/Breadcrumb';
import Layout from '@/common/Layout';
import Seo from '@/common/Seo';
import '@/common/main.scss';
import {AllTagList} from '@/feature/Tag';
import {GenBreadcrumb} from '@utils/Breadcrumb';

export default () => {
  return (
    <Layout>
      <Breadcrumb breadcrumb_list={breadcrumb_list} />
      <h1>タグ一覧</h1>
      <AllTagList />
    </Layout>
  );
};

const breadcrumb_list = GenBreadcrumb([{name: 'Blog', item: '/blog'}, {name: 'Tag'}]);

export const Head = () => (
  <Seo title={'タグ'} desc={'タグの一覧ページです'} url={'/tag'} breadcrumb_list={breadcrumb_list} />
);
