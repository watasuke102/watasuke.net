// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './Header.css';
import Link from 'next/link';
import React from 'react';

export function Header(): JSX.Element {
  return (
    <header className={css.container}>
      <div className={css.title}>
        <Link className={css.site_name} href='/'>
          わたすけのへや
        </Link>
      </div>
      <div className={css.link_container}>
        <Link className={css.links} href='/blog'>
          Blog
        </Link>
        <Link className={css.links} href='/profile'>
          Profile
        </Link>
        <Link className={css.links} href='/about'>
          About this site
        </Link>
      </div>
    </header>
  );
}
