// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as style from './TocRight.css';
import {toc_list} from '@/feature/Article/TableOfContents.css';
import React from 'react';
import Heading from '@mytypes/Heading';

interface Props {
  table_of_contents: Heading[];
}

export function TocRight(props: Props): React.ReactElement {
  return (
    <section className={style.side_toc}>
      {props.table_of_contents.map(item => (
        <a key={item.body} className={`${style.item} ${toc_list[item.size]}`} href={`#${item.body.toLowerCase()}`}>
          {item.body}
        </a>
      ))}
    </section>
  );
}
