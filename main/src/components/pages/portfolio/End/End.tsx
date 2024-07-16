// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './End.css';
import * as portfolio_common from '@pages/portfolio/common.css';
import {Link} from 'gatsby';
import React from 'react';

export const End = (): React.ReactElement => (
  <div className={`${portfolio_common.container} ${css.container}`}>
    <div className={css.container}>
      <h2 className={css.greet}>Thank you for visiting my site!</h2>
      <div className={css.link_container}>
        <Link to='/' className={css.link}>
          トップ
        </Link>
        <span>・</span>
        <Link to='/blog' className={css.link}>
          ブログ
        </Link>
        <span>・</span>
        <Link to='/profile' className={css.link}>
          プロフィール
        </Link>
      </div>
    </div>
    <p>
      Copyright (C) 2021-2024 Watasuke
      <br />
      Powered by Gatsby
    </p>
  </div>
);
