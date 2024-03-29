// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import '@/common/main.css';
import {Seo, Background, Breadcrumb, Layout} from '@/common';
import {graphql, Link} from 'gatsby';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Raw from 'rehype-raw';
import Gfm from 'remark-gfm';
import {AdsInArticle} from '@/feature/Ads';
import {GenBreadcrumb} from '@utils/Breadcrumb';

interface Props {
  data: {
    siteData: {
      body: string;
    };
  };
}

const breadcrumb_list = GenBreadcrumb([{name: 'Profile'}]);

export default function Profile(props: Props): React.ReactElement {
  return (
    <Layout>
      <Background />
      <Breadcrumb breadcrumb_list={breadcrumb_list} />
      <h1>プロフィール</h1>
      <p>
        技術的な項目については
        <Link to='/portfolio'>ポートフォリオ</Link>
        を御覧ください
      </p>
      <AdsInArticle />
      {/* eslint-disable-next-line react/no-children-prop */}
      <ReactMarkdown remarkPlugins={[Gfm]} rehypePlugins={[Raw]} children={props.data.siteData.body ?? ''} />
    </Layout>
  );
}

export const query = graphql`
  query {
    siteData(slug: {eq: "profile"}) {
      body
    }
  }
`;

export const Head = (): React.ReactElement => (
  <Seo title={'プロフィール'} desc={'わたすけのプロフィール'} url={'/profile'} breadcrumb_list={breadcrumb_list} />
);
