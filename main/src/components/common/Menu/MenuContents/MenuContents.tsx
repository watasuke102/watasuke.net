// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './MenuContents.css';
import * as common from '../common.css';
// @ts-expect-error ??? (FIXME)
import React from 'react';
import {SimpleLinks} from '@common';
import {ShareList} from '../ShareList';
import IconUp from '@assets/icons/general/up.svg';

export function MenuContents(): JSX.Element {
  return (
    <div className={css.menu_inner}>
      <h2 className={css.heading}>Share this page</h2>
      <ShareList />

      <h2 className={css.heading}>Links</h2>
      <SimpleLinks />
      <hr style={{opacity: 1}} />

      <button onClick={() => window.scroll({top: 0, behavior: 'smooth'})} className={common.menu_button}>
        <IconUp />
        <span>Go to page top</span>
      </button>
    </div>
  );
}
