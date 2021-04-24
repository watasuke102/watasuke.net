/*!
 * Top.tsx
 *
 * CopyRight (c) 2021 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import ArticleList from '../components/ArticleList';
import '../styles/main.scss';
import '../styles/blog.scss';

export default function Blog() {
  return (
    <>
      <h1>記事一覧</h1>
      <div className='blog-container'>
        <ArticleList page={0} />
      </div>
    </>
  );
}
