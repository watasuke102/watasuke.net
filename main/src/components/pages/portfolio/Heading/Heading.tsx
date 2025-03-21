// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './Heading.css';

interface Props {
  text: string;
  color: string;
}

export function Heading(props: Props) {
  return (
    <h2 className={css.heading}>
      <span style={{borderLeftColor: props.color}} className={css.heading_text}>
        {props.text}
      </span>
    </h2>
  );
}
