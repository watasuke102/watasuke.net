// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './Back.css';
import React from 'react';

interface Props {
  hidden: boolean;
}

export function Back(props: Props): React.ReactElement {
  return (
    <div className={css.container} style={props.hidden ? {display: 'none'} : {}}>
      <div className={css.separator} />
      <div className={css.qr_container}>
        {['watasuke.net', 'Twitter', 'GitHub'].map(name => (
          <div className={css.item} key={name}>
            <div className={css.qrcode_wrapper}>
              <img loading='eager' placeholder='none' src={`/qr/${name}.png`} alt={`qrcode (${name})`} />
            </div>
            <span className={css.url}>{name}</span>
          </div>
        ))}
      </div>
      <div className={css.separator} />
    </div>
  );
}
