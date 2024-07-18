// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './TocMapper.css';
import React from 'react';
import Heading from '@mytypes/Heading';

interface Props {
  headings: Heading[];
}

export function TocMapper(props: Props): React.ReactElement {
  return (
    <ol className={css.list_wrapper}>
      {props.headings.map(item => (
        <li key={item.slug} className={`${css.item} ${css.toc_list[item.size]}`}>
          <a href={`#${item.slug}`}>{item.body}</a>
        </li>
      ))}
    </ol>
  );
}
