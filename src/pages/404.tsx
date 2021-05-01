/*!
 * 404.tsx
 *
 * CopyRight (c) 2021 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import Layout from '../components/Layout';
import Background from '../components/Background';
import '../styles/404.scss'

export default () => {
  return (
    <Layout>
      <Background />
      <div className='box-404'>
        <h1>404</h1>
      </div>
    </Layout>
  )
}