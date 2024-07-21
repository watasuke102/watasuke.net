// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import '@watasuke.net/common/src/css/base.css';
import {Seo, Background, Breadcrumb} from '@common';
import {graphql, Link} from 'gatsby';
import React from 'react';
import {AdsInArticle, Markdown} from '@watasuke.net/common';
import {Layout} from '@feature/Layout';
import {EmbedCard, InnerEmbedCard} from '@feature/Article';
import {HeadingContext, TocInArticle} from '@feature/TableOfContents';
import {GenBreadcrumb} from '@utils/Breadcrumb';
import ExtractHeading from '@utils/ExtractHeading';

interface Props {
  data: {
    siteData: {
      body: string;
    };
  };
}

const breadcrumb_list = GenBreadcrumb([{name: 'Profile'}]);

export default function Profile(props: Props): React.ReactElement {
  const headings = ExtractHeading(props.data.siteData.body);

  return (
    <HeadingContext.Provider value={headings}>
      <Layout>
        <Background />
        <Breadcrumb breadcrumb_list={breadcrumb_list} />
        <main>
          <h1>プロフィール</h1>
          <p>
            技術的な項目については
            <Link to='/portfolio'>ポートフォリオ</Link>
            を御覧ください
          </p>
          <AdsInArticle />
          <TocInArticle />
          <Markdown md={props.data.siteData.body ?? ''} embed_card={EmbedCard} inner_embed_card={InnerEmbedCard} />
        </main>
      </Layout>
    </HeadingContext.Provider>
  );
}

export const query = graphql`
  query profile {
    siteData(slug: {eq: "profile"}) {
      body
    }
  }
`;

export function Head(): React.ReactElement {
  return (
    <Seo title={'プロフィール'} desc={'わたすけのプロフィール'} url={'/profile'} breadcrumb_list={breadcrumb_list} />
  );
}
