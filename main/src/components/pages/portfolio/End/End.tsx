// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './End.css';
import {SimpleInnerLinks} from '@common';

export function End(): JSX.Element {
  return (
    <section className={css.container}>
      <h2>Thank you for visiting!</h2>
      <SimpleInnerLinks />
    </section>
  );
}
