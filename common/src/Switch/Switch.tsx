// watasuke.net > common
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {css} from './Switch.css';
// @ts-expect-error ??? (FIXME)
import React from 'react';
import * as RSwitch from '@radix-ui/react-switch';

interface Props {
  id?: string;
  checked: boolean;
  on_click: () => void;
}

export function Switch(props: Props): JSX.Element {
  return (
    <RSwitch.Root id={props.id} className={css.root} checked={props.checked} onClick={props.on_click}>
      <RSwitch.Thumb className={css.thumb} />
    </RSwitch.Root>
  );
}
