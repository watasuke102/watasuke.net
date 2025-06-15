// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {Background, Breadcrumb} from '@common';
import Link from 'next/link';
import React from 'react';
import {AdsInArticle} from '@watasuke.net/common';
import {GenBreadcrumb} from '@utils/Breadcrumb';
import {gen_template, JsonLd} from '@utils/Metadata';

const breadcrumb_list = GenBreadcrumb([{name: 'About'}]);
export const {viewport, metadata} = gen_template(
  'このサイトについて',
  'このサイトの説明やプライバシーポリシー、免責事項を掲載しています',
  '/about',
);

export default function About() {
  return (
    <>
      <Background />
      <JsonLd breadcrumb_list={breadcrumb_list} />
      <Breadcrumb breadcrumb_list={breadcrumb_list} />
      <main>
        <h1>このサイトについて</h1>
        <p>わたすけのへやです</p>
        <p>
          <Link href='/blog'>ブログ</Link>や
          <Link href='/profile'>プロフィール</Link>
          が置いてあります
        </p>

        <h2 id='about_privacy'>プライバシーポリシー</h2>
        <ul>
          <li>
            当サイトではアクセス解析に Google Analytics を、広告掲載に Google
            Adsenseを使用しています
          </li>
          <ul>
            <li>
              Google Analytics はデータ収集のために Cookie を使用しています
            </li>
            <li>
              Google Adsense
              はパーソナライズド広告（ユーザーの興味に適した広告）を表示するために
              Cookie を使用しています
            </li>
            <li>
              Cookie は個人を特定できない形で収集されており、また Cookie
              を無効化することにより、 データ収集を拒否することが可能です
            </li>
            <li>
              パーソナライズド広告は、
              <a href='https://adssettings.google.com/notarget'>
                「Google 広告設定」（外部リンク）
              </a>
              で無効化することが可能です
            </li>
            <li>
              Google Analytics でデータが収集・処理される仕組みについて、 詳細は
              <a href='https://www.google.com/intl/ja/policies/privacy/partners/'>
                「ユーザーが Google パートナーのサイトやアプリを使用する際の
                Google によるデータ使用」（外部リンク）
              </a>
              をご覧ください
            </li>
          </ul>
          <li>
            各記事に対するコメント機能は{' '}
            <a href='https://github.com/giscus/giscus'>giscus/giscus</a>{' '}
            によって実現しています
          </li>
          <ul>
            <li>
              このライブラリは GitHub のセッション情報を Local storage
              に保存しており、Cookie は使用していません
            </li>
            <li>
              詳しくは{' '}
              <a href='https://github.com/giscus/giscus/blob/main/PRIVACY-POLICY.md'>
                Giscus の PRIVACY-POLICY.md
              </a>{' '}
              をご覧ください
            </li>
          </ul>
        </ul>

        <h2 id='about_data'>当サイトで扱う情報に関して</h2>
        <ul>
          <li>
            ここでの「情報」とは、文章・画像・ソースコードを指しますが、これに限定されません
          </li>
          <li>
            当サイトオリジナルの情報に関して、無断転載を禁止します（引用の際は出典を明記してください）
          </li>
          <li>
            当サイトで用いたあらゆる情報に関して、信憑性・正確性を保証しません。自己責任で閲覧してください
          </li>
          <li>
            当サイトで発生したあらゆる権利侵害・違法行為等は意図したものではありません。
            それらを発見した場合、お手数ですが Twitter (@watasuke1024) への DM
            等でお知らせください
          </li>
        </ul>
        <AdsInArticle />
      </main>
    </>
  );
}
