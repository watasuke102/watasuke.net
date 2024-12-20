// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import '@watasuke.net/common/src/css/base.css';
import {Background, Breadcrumb} from '@common';
import React from 'react';
import Link from 'next/link';
import {AdsInArticle, Markdown, ExtractHeading} from '@watasuke.net/common';
// import {EmbedCard, InnerEmbedCard} from '@feature/Article';
import {TocInArticle} from '@feature/TableOfContents';
import {GenBreadcrumb} from '@utils/Breadcrumb';
import {ql} from '@utils/QL';
import {gen_template, JsonLd} from '@utils/Metadata';

const breadcrumb_list = GenBreadcrumb([{name: 'Profile'}]);
export const {viewport, metadata} = gen_template(
  'プロフィール',
  '`わたすけ`のプロフィールを掲載しています',
  '/profile',
);

export default async function Profile() {
  const {sitedata} = await ql().profile();
  const headings = ExtractHeading(sitedata.profile);

  return (
    <>
      <Background />
      <JsonLd breadcrumb_list={breadcrumb_list} />
      <Breadcrumb breadcrumb_list={breadcrumb_list} />
      <main>
        <h1>プロフィール</h1>
        <p>
          技術的な項目については
          <Link href='/portfolio'>ポートフォリオ</Link>
          を御覧ください
        </p>
        <AdsInArticle />
        <TocInArticle headings={headings} />
        {/* FIXME */}
        <Markdown
          md={sitedata.profile}
          embed_card={() => <></>}
          inner_embed_card={() => <></>}
        />
      </main>
    </>
  );
}
