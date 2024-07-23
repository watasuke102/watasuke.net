// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './Heading.css';
// @ts-expect-error ??? (FIXME)
import React from 'react';

interface Props {
  text: string;
  color: string;
}

export function Heading(props: Props): JSX.Element {
  return (
    <h2 className={css.heading}>
      <span style={{borderLeftColor: props.color}} className={css.heading_text}>
        {props.text}
      </span>
    </h2>
  );
}
