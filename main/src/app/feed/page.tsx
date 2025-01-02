// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {Background, Breadcrumb} from '@common';
import Link from 'next/link';
import React from 'react';
import {AdsInArticle} from '@watasuke.net/common';
import {GenBreadcrumb} from '@utils/Breadcrumb';
import {gen_template, JsonLd} from '@utils/Metadata';

const breadcrumb_list = GenBreadcrumb([{name: 'Feed'}]);
export const {viewport, metadata} = gen_template(
  'フィード',
  'Atomフィードへのリンクを記載しています',
  '/feed',
);

export default function About() {
  return (
    <>
      <Background />
      <JsonLd breadcrumb_list={breadcrumb_list} />
      <Breadcrumb breadcrumb_list={breadcrumb_list} />
      <main>
        <h1>フィード</h1>
        <p>当サイトの更新をAtomで購読することが出来ます！</p>
        <h2>
          <Link href='/feed/page.xml'>固定ページ</Link>
        </h2>
        <span>プロフィール等のページ更新を購読できます</span>
        <h2>
          <Link href='/feed/blog.xml'>ブログ記事</Link>
        </h2>
        <span>投稿されたブログ記事を購読できます</span>
        <AdsInArticle />
      </main>
    </>
  );
}
