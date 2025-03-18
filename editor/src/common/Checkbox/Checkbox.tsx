// watasuke.net > editor
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {css} from './Checkbox.css';
import React from 'react';
import * as RCheckbox from '@radix-ui/react-checkbox';
import CheckIcon from '@assets/check.svg';

interface Props {
  checked: boolean;
  on_click: () => void;
  label: string;
}

export function Checkbox(props: Props) {
  return (
    <div className={css.checkbox_wrapper}>
      <RCheckbox.Root
        checked={props.checked}
        onClick={props.on_click}
        id='favorite_checkbox'
        className={css.check_icon}
      >
        <RCheckbox.Indicator>
          <CheckIcon />
        </RCheckbox.Indicator>
      </RCheckbox.Root>
      <label htmlFor='favorite_checkbox'>{props.label}</label>
    </div>
  );
}
