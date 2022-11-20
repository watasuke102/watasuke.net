/*!
 * profile.tsx
 *
 * CopyRight (c) 2021-2022 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import {graphql, Link} from 'gatsby';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Gfm from 'remark-gfm';
import Head from '@/common/Head';
import Layout from '@/common/Layout';
import Background from '@/common/Background';
import '@/common/main.scss';
import {GenBreadcrumb} from '@utils/Breadcrumb';

interface Props {
  data: {siteData: {body: string}};
}

export default ({data}: Props) => {
  return (
    <Layout>
      <Head
        title={'プロフィール'}
        desc={'わたすけのプロフィール'}
        url={'/profile'}
        breadcrumb_list={[GenBreadcrumb(0, 'Profile')]}
      />
      <Background />
      <h1>プロフィール</h1>
      <p>
        技術的な項目については
        <Link to='/portfolio'>ポートフォリオ</Link>
        を御覧ください
      </p>
      <ReactMarkdown remarkPlugins={[Gfm]} children={data.siteData.body} />
    </Layout>
  );
};

export const query = graphql`
  query {
    siteData(slug: {eq: "profile"}) {
      body
    }
  }
`;
