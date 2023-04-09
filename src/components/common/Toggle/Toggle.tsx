// Toggle.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT SUSHI-WARE License.
import React from 'react';
import * as style from './Toggle.css';

interface Props {
  first: string;
  second: string;
  current: string;
  set_state: (state: string) => void;
}

export function Toggle(props: Props): React.ReactElement {
  console.log(style);
  return (
    <div className={style.container}>
      <span
        className={style.item + (props.current === props.first ? ` ${style.selected}` : '')}
        onClick={() => props.set_state(props.first)}
      >
        {props.first}
      </span>
      <span
        className={style.item + (props.current === props.second ? ` ${style.selected}` : '')}
        onClick={() => props.set_state(props.second)}
      >
        {props.second}
      </span>
    </div>
  );
}
