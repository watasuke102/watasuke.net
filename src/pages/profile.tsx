/*!
 * profile.tsx
 *
 * CopyRight (c) 2021 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import { graphql } from 'gatsby';
import React from 'react';
import { Remark } from 'react-remark';
import Layout from '../components/Layout';
import Background from '../components/Background';
import '../styles/main.scss';

interface Props { data: { siteData: { body: string } } }

export default ({ data }: Props) => {
  return (
    <Layout>
      <Background />
      <h1>プロフィール</h1>
      <Remark>
        {data.siteData.body}
      </Remark>
    </Layout>
  );
}

export const query = graphql`
query  {
  siteData(slug: {eq: "profile"}) {
    body
  }
}
`
