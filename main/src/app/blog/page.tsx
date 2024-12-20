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
import {ArticleList} from '@feature/ArticleList';
import {AllTagList} from '@feature/Tag';
import {GenBreadcrumb} from '@utils/Breadcrumb';
import {gen_template, JsonLd} from '@utils/Metadata';
import {ql} from '@utils/QL';

const breadcrumb_list = GenBreadcrumb([{name: 'Blog'}]);
export const {viewport, metadata} = gen_template(
  'ブログ',
  'これまでに投稿した記事やタグの一覧ページです',
  '/blog',
);

export default async function Blog() {
  const {allPublicArticles} = await ql().allArticles();
  return (
    <>
      <JsonLd breadcrumb_list={breadcrumb_list} />
      <Breadcrumb breadcrumb_list={breadcrumb_list} />
      <h1>ブログ</h1>
      <h2>タグ一覧</h2>
      <AllTagList />

      <hr />

      <h2>記事一覧</h2>
      <div className={css.container}>
        <ArticleList list={allPublicArticles} />
      </div>
    </>
  );
}
