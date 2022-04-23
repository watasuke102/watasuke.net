/*!
 * Header.tsx
 *
 * CopyRight (c) 2021-2022 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import {Link} from 'gatsby';
import './Header.scss';

export default () => {
  return (
    <div className='Header-container'>
      <div className='Header-title'>
        <Link to='/'>わたすけのへや</Link>
      </div>
      <div className='Header-links'>
        <Link to='/blog'>Blog</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/about'>About this site</Link>
      </div>
    </div>
  );
};
