// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './Toggle.css';
import React from 'react';

interface Props {
  first: string;
  second: string;
  current: string;
  set_state: (state: string) => void;
}

// TODO: re-create this component
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
export function Toggle(props: Props): JSX.Element {
  return (
    <div className={css.container}>
      <span
        className={
          css.item + (props.current === props.first ? ` ${css.selected}` : '')
        }
        onClick={() => props.set_state(props.first)}
      >
        {props.first}
      </span>
      <span
        className={
          css.item + (props.current === props.second ? ` ${css.selected}` : '')
        }
        onClick={() => props.set_state(props.second)}
      >
        {props.second}
      </span>
    </div>
  );
}
