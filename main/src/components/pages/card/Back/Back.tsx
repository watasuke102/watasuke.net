// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './Back.css';
import React from 'react';
import {color} from '@watasuke.net/common';

interface Props {
  hidden: boolean;
}

export function Back(props: Props) {
  return (
    <div
      className={css.container}
      style={props.hidden ? {display: 'none'} : {}}
    >
      <div className={css.qrcode_wrapper}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 100 100'
          className={css.qrcode_bg}
        >
          <polygon
            points='50,0 93,25 93,75 50,100 7,75 7,25'
            style={{
              fill: color.bg,
            }}
          />
        </svg>
        <img
          className={css.qrcode_img}
          loading='eager'
          src='/qr/watasuke_net_links.png'
          alt='QR code to `https://watasuke.net/links/`'
        />
      </div>
      <span className={css.text}>https://watasuke.net/links</span>
    </div>
  );
}
