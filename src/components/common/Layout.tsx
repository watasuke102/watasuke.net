/*!
 * Layout.tsx
 *
 * CopyRight (c) 2021-2022 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import Header from '@/common/Header';

interface Props {
  children: React.ReactNode;
}

export default ({children}: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
