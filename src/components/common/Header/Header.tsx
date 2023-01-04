/*!
 * Header.tsx
 *
 * CopyRight (c) 2021-2023 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */
import {Link} from 'gatsby';
import React from 'react';
import './Header.scss';

export const Header = (): React.ReactElement => {
  return (
    <header className='Header-container'>
      <div className='Header-title'>
        <Link to='/'>わたすけのへや</Link>
      </div>
      <div className='Header-links'>
        <Link to='/blog'>Blog</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/about'>About this site</Link>
      </div>
    </header>
  );
};
