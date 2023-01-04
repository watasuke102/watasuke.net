/*!
 * 404.tsx
 *
 * CopyRight (c) 2021-2023 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */
import '@/pages/404.scss';
import {Background, Layout} from '@/common';
import React from 'react';

export default function Error404(): React.ReactElement {
  return (
    <Layout>
      <Background />
      <div className='box-404'>
        <h1>404</h1>
      </div>
    </Layout>
  );
}
