// End.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as style from './End.css';
import * as portfolio_common from '@/pages/portfolio/common.css';
import {Link} from 'gatsby';
import React from 'react';

export const End = (): React.ReactElement => (
  <div className={`${portfolio_common.container} ${style.container}`}>
    <div className={style.container}>
      <h2 className={style.greet}>Thank you for visiting my site!</h2>
      <div className={style.link_container}>
        <Link to='/' className={style.link}>
          トップ
        </Link>
        <span>・</span>
        <Link to='/blog' className={style.link}>
          ブログ
        </Link>
        <span>・</span>
        <Link to='/profile' className={style.link}>
          プロフィール
        </Link>
      </div>
    </div>
    <p>
      Copyright (C) 2021-2023 Watasuke
      <br />
      Powered by Gatsby
    </p>
  </div>
);
