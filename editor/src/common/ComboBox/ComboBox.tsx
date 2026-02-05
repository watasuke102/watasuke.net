// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {css} from './ComboBox.css';
import React from 'react';
import * as Select from '@radix-ui/react-select';
import CheckIcon from '@assets/check.svg';

type Props = {
  id?: string;
  current: string;
  options: string[];
  on_change: (s: string) => void;
};

export function ComboBox(props: Props) {
  return (
    <Select.Root value={props.current} onValueChange={props.on_change}>
      <Select.Trigger className={css.trigger} id={props.id ?? ''}>
        <Select.Value placeholder='select...' />
        <Select.Icon />
      </Select.Trigger>

      <Select.Portal>
        <Select.Content position='popper' className={css.content}>
          <Select.Viewport className={css.viewport}>
            {props.options.map((e, i) => (
              <Select.Item key={e + i} value={e} className={css.item}>
                <Select.ItemText>{e}</Select.ItemText>
                <Select.ItemIndicator>
                  <CheckIcon />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
