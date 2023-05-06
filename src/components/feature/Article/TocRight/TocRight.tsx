// TocRight.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import React from 'react';
import {toc_list} from '@/feature/Article/TableOfContents.css';
import Heading from '@mytypes/Heading';
import * as style from './TocRight.css';

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
