// FootnoteDef.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as style from './FootnoteDef.css';
import {current} from '@/pages/portfolio/PortfolioContainer/PortfolioContainer.css';
import {Properties} from 'hast';
import React from 'react';

type Props = {
  footnote: string;
  properties: Properties;
  link_text: string;
};

type Pos = {
  x: number;
  y: number;
};

export function FootnoteDef(props: Props): React.ReactElement {
  const [pos, set_pos] = React.useState<Pos | null>(null);
  const ref = React.useRef<HTMLSpanElement | null>();

  console.log(props.properties);
  return (
    <>
      <a
        {...props.properties}
        onMouseOver={e => {
          console.log(e.clientX, e.clientY, ref.current?.clientWidth, document.body.clientWidth);
          const cursor_x = e.clientX;
          const cursor_y = e.clientY;
          const element_w = ref.current?.clientWidth ?? 0;
          const element_h = ref.current?.clientHeight ?? 0;
          let x = cursor_x + 8;
          // 要素が画面外に出ていたら、押し戻す
          if (x + element_w > document.body.clientWidth) {
            x = document.body.clientWidth - element_w - 8;
          }
          set_pos({
            x: Math.max(x, 0),
            y: Math.max(cursor_y - element_h - 12, 0),
          });
        }}
        onMouseLeave={() => set_pos(null)}
      >
        {props.link_text}
      </a>
      <span
        ref={r => (ref.current = r)}
        className={style.footnote_body + (pos ? ' ' + style.displayed : '')}
        style={{left: pos?.x, top: pos?.y}}
        aria-hidden
      >
        {props.footnote}
      </span>
    </>
  );
}
