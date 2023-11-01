// about.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {Seo, Background, Breadcrumb, Layout} from '@/common';
import {Link} from 'gatsby';
import React from 'react';
import {AdsInArticle} from '@/feature/Ads';
import {GenBreadcrumb} from '@utils/Breadcrumb';

const breadcrumb_list = GenBreadcrumb([{name: 'About'}]);

export default function About(): React.ReactElement {
  return (
    <Layout>
      <Background />
      <Breadcrumb breadcrumb_list={breadcrumb_list} />
      <h1>このサイトについて</h1>
      <p>わたすけのへやです</p>
      <p>
        <Link to='/blog'>ブログ</Link>や<Link to='/profile'>プロフィール</Link>
        が置いてあります
      </p>
      <AdsInArticle />

      <h2 id='about_privacy'>プライバシーポリシー</h2>
      <ul>
        <li>当サイトではアクセス解析に Google Analytics を、広告掲載に Google Adsenseを使用しています</li>
        <li>Google Analytics はデータ収集のために Cookie を使用しています</li>
        <li>
          Google Adsense はパーソナライズド広告（ユーザーの興味に適した広告）を表示するために Cookie を使用しています
        </li>
        <li>
          Cookie は個人を特定できない形で収集されており、また Cookie を無効化することにより、
          データ収集を拒否することが可能です
        </li>
        <li>
          パーソナライズド広告は、<a href='https://adssettings.google.com/notarget'>「Google 広告設定」（外部リンク）</a>
          で無効化することが可能です
        </li>
        <li>
          Google Analytics でデータが収集・処理される仕組みについて、 詳細は
          <a href='https://www.google.com/intl/ja/policies/privacy/partners/'>
            「ユーザーが Google パートナーのサイトやアプリを使用する際の Google によるデータ使用」（外部リンク）
          </a>
          をご覧ください
        </li>
      </ul>

      <h2 id='about_data'>当サイトで扱う情報に関して</h2>
      <ul>
        <li>ここでの「情報」とは、文章・画像・ソースコードを指しますが、これに限定されません</li>
        <li>当サイトオリジナルの情報に関して、無断転載を禁止します（引用の際は出典を明記してください）</li>
        <li>当サイトで用いたあらゆる情報に関して、信憑性・正確性を保証しません。自己責任で閲覧してください</li>
        <li>
          当サイトで発生したあらゆる権利侵害・違法行為等は意図したものではありません。
          それらが発見した場合、お手数ですが Twitter (@Watasuke102) への DM 等でお知らせください
        </li>
      </ul>
    </Layout>
  );
}

export const Head = (): React.ReactElement => (
  <Seo
    title={'このサイトについて'}
    desc={'このサイトについての説明'}
    url={'/about'}
    breadcrumb_list={breadcrumb_list}
  />
);
