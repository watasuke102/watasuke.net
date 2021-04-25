/*!
 * portfolio.tsx
 *
 * CopyRight (c) 2021 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import { Link } from 'gatsby';
import Background from '../components/Background';
import React from 'react';

export default function Portfolio() {
  return (
    <div>
      <Background />
      <h1>このサイトについて</h1>
      <p>わたすけのへやです</p>
      <p>
        <Link to='/blog'>ブログ</Link>や
        <Link to='/profile'>プロフィール</Link>
        が置いてあります
      </p>
    </div>
  )
}