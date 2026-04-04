// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from '@pages/404.css';
import {Layout} from '@feature/Layout';
import {Background, SimpleInnerLinks} from '@common';

export default function Error404() {
  return (
    <Layout>
      <Background />
      <div className={css.container}>
        <h1 className={css.code}>404</h1>
        <p className={css.text}>Not Found</p>
        <div className={css.links}>
          <h2>Links</h2>
          <SimpleInnerLinks />
        </div>
      </div>
    </Layout>
  );
}
