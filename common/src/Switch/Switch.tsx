// watasuke.net > common
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {css} from './Switch.css';
import * as RSwitch from '@radix-ui/react-switch';
import {cs} from '../..';

interface Props {
  id?: string;
  checked: boolean;
  same_color?: boolean; /// fix background color; use if switch is used not as enable/disable button
  on_click: () => void;
}

export function Switch(props: Props) {
  return (
    <RSwitch.Root
      id={props.id}
      className={cs(css.root, props.same_color || css.switch_bg)}
      checked={props.checked}
      onClick={props.on_click}
    >
      <RSwitch.Thumb className={css.thumb} />
    </RSwitch.Root>
  );
}
