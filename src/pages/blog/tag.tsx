/*!
 * blog.tsx
 *
 * CopyRight (c) 2021-2022 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import Head from '@/common/Head';
import Layout from '@/common/Layout';

import '@/common/main.scss';
import '@/pages/blog.scss';
import {GenBreadcrumb} from '@utils/Breadcrumb';
import {AllTagList} from '@/common/AllTagList';

export default () => {
  return (
    <Layout>
      <Head
        title={'タグ'}
        desc={'タグの一覧ページです'}
        url={'/tag'}
        breadcrumb_list={[GenBreadcrumb(0, 'Blog', '/blog'), GenBreadcrumb(1, 'Tag')]}
      />
      <h1>タグ一覧</h1>
      <AllTagList />
    </Layout>
  );
};
