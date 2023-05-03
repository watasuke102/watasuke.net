// Front.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import React from 'react';
import * as style from './Back.css';

interface Props {
  hidden: boolean;
}

export function Back(props: Props): React.ReactElement {
  return (
    <div className={style.container} style={props.hidden ? {display: 'none'} : {}}>
      <div className={style.separator} />
      {['watasuke.net', 'Twitter', 'GitHub'].map(name => (
        <div className={style.qr_container} key={name}>
          <img loading='eager' placeholder='none' src={`/qr/${name}.png`} alt={`qrcode (${name})`} />
          <span className={style.url}>{name}</span>
        </div>
      ))}
      <div className={style.separator} />
    </div>
  );
}
