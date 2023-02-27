// Toggle.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT SUSHI-WARE License.
import React from 'react';
import './Toggle.scss';

interface Props {
  first: string;
  second: string;
  current: string;
  set_state: (state: string) => void;
}

export function Toggle(props: Props): React.ReactElement {
  return (
    <div className='Toggle-container'>
      <span
        className={'first' + (props.current === props.first ? ' selected' : '')}
        onClick={() => props.set_state(props.first)}
      >
        {props.first}
      </span>
      <span
        className={'second' + (props.current === props.second ? ' selected' : '')}
        onClick={() => props.set_state(props.second)}
      >
        {props.second}
      </span>
    </div>
  );
}