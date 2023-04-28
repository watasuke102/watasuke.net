// Header.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {Link} from 'gatsby';
import React from 'react';
import * as style from './Header.css';

export const Header = (): React.ReactElement => {
  return (
    <header className={style.container}>
      <div className={style.title}>
        <Link className={style.site_name} to='/'>
          わたすけのへや
        </Link>
      </div>
      <div className={style.link_container}>
        <Link className={style.links} to='/blog'>
          Blog
        </Link>
        <Link className={style.links} to='/profile'>
          Profile
        </Link>
        <Link className={style.links} to='/about'>
          About this site
        </Link>
      </div>
    </header>
  );
};
