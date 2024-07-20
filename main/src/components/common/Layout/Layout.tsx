// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './Layout.css';
import {Header, Footer} from '@common';
import React from 'react';
import {Menu} from '../Menu';

interface Props {
  children: React.ReactNode;
}

export function Layout({children}: Props): React.ReactElement {
  return (
    <div className={css.layout}>
      <Header />
      <div className={css.main_area}>{children}</div>
      <Menu />
      <Footer />
    </div>
  );
}
