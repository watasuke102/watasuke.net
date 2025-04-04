// watasuke.net > editor
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {css} from './Button.css';
import React from 'react';

type Props = {
  type: 'text' | 'outlined' | 'contained';
  text?: string;
  icon?: JSX.Element;
  aria_label: string;
  disabled?: boolean;
  on_click: () => void;
};

export function Button(props: Props) {
  const class_name = (() => {
    switch (props.type) {
      case 'text':
        return css.button_text;
      case 'outlined':
        return css.button_outlined;
      case 'contained':
        return css.button_contained;
    }
  })();
  return (
    <button
      className={`${css.common} ${props.disabled ? css.disabled : css.enabled} ${class_name}`}
      disabled={props.disabled}
      onClick={props.on_click}
      aria-label={props.aria_label}
    >
      {props.icon}
      {props.text !== '' && <span className={css.text}>{props.text}</span>}
    </button>
  );
}
