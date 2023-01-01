/*!
 * 404.tsx
 *
 * CopyRight (c) 2021-2023 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */
import '@/pages/404.scss';
import React from 'react';
import Background from '@/common/Background';
import Layout from '@/common/Layout';

export default () => {
  return (
    <Layout>
      <Background />
      <div className='box-404'>
        <h1>404</h1>
      </div>
    </Layout>
  );
};
