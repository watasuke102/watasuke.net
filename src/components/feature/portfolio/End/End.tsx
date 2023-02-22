// End.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT SUSHI-WARE License.
import {Link} from 'gatsby';
import React from 'react';
import './End.scss';

export const End = (): React.ReactElement => (
  <div id='portfolio-end'>
    <div>
      <h2>Thank you for visiting my site!</h2>
      <div className='links'>
        <Link to='/'>トップ</Link>
        <span>・</span>
        <Link to='/blog'>ブログ</Link>
        <span>・</span>
        <Link to='/profile'>プロフィール</Link>
      </div>
    </div>
    <p>
      Copyright (C) 2021-2023 Watasuke
      <br />
      Powered by Gatsby
    </p>
  </div>
);
