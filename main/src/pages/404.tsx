// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from '@pages/404.css';
import {Background, Layout, SimpleLinks} from '@common';
import React from 'react';

export default function Error404(): React.ReactElement {
  return (
    <Layout>
      <Background />
      <div className={css.container}>
        <h1 className={css.text}>404</h1>
        <div className={css.links}>
          <h2>Links</h2>
          <SimpleLinks />
        </div>
      </div>
      <div className={css.spacer_for_footer} />
    </Layout>
  );
}
