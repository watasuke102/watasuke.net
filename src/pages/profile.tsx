/*!
 * profile.tsx
 *
 * CopyRight (c) 2021 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import {graphql, Link} from 'gatsby';
import React from 'react';
import {Remark} from 'react-remark';
import Gfm from 'remark-gfm';
import Head from '../components/Head';
import Layout from '../components/Layout';
import Background from '../components/Background';
import '../styles/main.scss';

interface Props {
  data: {siteData: {body: string}};
}

export default ({data}: Props) => {
  return (
    <Layout>
      <Head title={'プロフィール'} desc={'わたすけのプロフィール'} url={'/profile'} />
      <Background />
      <h1>プロフィール</h1>
      <p>
        技術的な項目については
        <Link to='/portfolio'>ポートフォリオ</Link>
        を御覧ください
      </p>
      <Remark remarkPlugins={[Gfm]}>{data.siteData.body}</Remark>
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
