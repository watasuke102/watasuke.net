/*!
 * blog.tsx
 *
 * CopyRight (c) 2021-2022 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */
import '@/pages/blog.scss';
import React from 'react';
import Layout from '@/common/Layout';
import Seo from '@/common/Seo';
import '@/common/main.scss';
import {AllTagList} from '@/feature/Tag';
import {GenBreadcrumb} from '@utils/Breadcrumb';

export default () => {
  return (
    <Layout>
      <h1>タグ一覧</h1>
      <AllTagList />
    </Layout>
  );
};

export const Head = () => (
  <Seo
    title={'タグ'}
    desc={'タグの一覧ページです'}
    url={'/tag'}
    breadcrumb_list={[GenBreadcrumb(0, 'Blog', '/blog'), GenBreadcrumb(1, 'Tag')]}
  />
);
