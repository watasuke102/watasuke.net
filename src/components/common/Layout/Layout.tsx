// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {Header} from '@/common';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const Layout = ({children}: Props): React.ReactElement => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
