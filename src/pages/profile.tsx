/*!
 * Profile.tsx
 *
 * CopyRight (c) 2021 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import { graphql } from 'gatsby';
import React from 'react';
import { Remark } from 'react-remark';
import Background from '../components/Background';
import '../styles/main.scss';

interface Props { data: { siteData: { body: string } } }

export default function Profile({ data }: Props) {
  return (
    <>
      <Background />
      <h1>プロフィール</h1>
      <Remark>
        {data.siteData.body}
      </Remark>
    </>
  );
}

export const query = graphql`
query  {
  siteData(slug: {eq: "profile"}) {
    body
  }
}
`
