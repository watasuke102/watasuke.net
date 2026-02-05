// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './SelectItem.css';

interface Props {
  label: string;
  color: string;
}
export function SelectItem(props: Props) {
  return (
    <span className={css.select_item} style={{backgroundColor: props.color}}>
      {props.label}
    </span>
  );
}
