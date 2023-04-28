// 404.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as style from '@/pages/404.css';
import {Background, Layout} from '@/common';
import React from 'react';

export default function Error404(): React.ReactElement {
  return (
    <Layout>
      <Background />
      <div className={style.container}>
        <h1 className={style.text}>404</h1>
      </div>
    </Layout>
  );
}
