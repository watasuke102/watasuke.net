// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from '@pages/blog.css';
import '@watasuke.net/common/src/css/base.css';
import {Breadcrumb} from '@common';
import React from 'react';
import {AdsInArticle} from '@watasuke.net/common';
import {ArticleList} from '@feature/ArticleList';
import {GenBreadcrumb} from '@utils/Breadcrumb';
import {ql} from '@utils/QL';
import {gen_template, JsonLd} from '@utils/Metadata';

const breadcrumb_list = GenBreadcrumb([
  {name: 'Blog', item: '/blog'},
  {name: 'Article'},
]);
export const {viewport, metadata} = gen_template(
  'ブログ',
  'これまでに投稿した記事の一覧ページです',
  '/blog/article',
);

export default async function ArticleListPage() {
  const {allPublicArticles} = await ql().allArticles();
  return (
    <>
      <JsonLd breadcrumb_list={breadcrumb_list} />
      <Breadcrumb breadcrumb_list={breadcrumb_list} />
      <h1>記事一覧</h1>
      <div className={css.container}>
        <ArticleList list={allPublicArticles} />
      </div>
      <AdsInArticle />
    </>
  );
}
