// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './Header.css';
import {Link} from 'gatsby';
import React from 'react';

export function Header(): React.ReactElement {
  return (
    <header className={css.container}>
      <div className={css.title}>
        <Link className={css.site_name} to='/'>
          わたすけのへや
        </Link>
      </div>
      <div className={css.link_container}>
        <Link className={css.links} to='/blog'>
          Blog
        </Link>
        <Link className={css.links} to='/profile'>
          Profile
        </Link>
        <Link className={css.links} to='/about'>
          About this site
        </Link>
      </div>
    </header>
  );
}
