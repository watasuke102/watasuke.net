// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from '@pages/404.css';
import {Background, SimpleInnerLinks} from '@common';
import React from 'react';
import {Layout} from '@feature/Layout';

export default function Error404() {
  return (
    <Layout>
      <Background />
      <div className={css.container}>
        <h1 className={css.text}>404</h1>
        <div className={css.links}>
          <h2>Links</h2>
          <SimpleInnerLinks />
        </div>
      </div>
    </Layout>
  );
}
