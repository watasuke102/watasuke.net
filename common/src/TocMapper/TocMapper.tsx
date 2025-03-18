// watasuke.net > common
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './TocMapper.css';
import Link from 'next/link';
import React from 'react';
import {Heading} from '@watasuke.net/common';

interface Props {
  headings: Heading[];
}

export function TocMapper(props: Props) {
  return (
    <ol className={css.list_wrapper}>
      {props.headings.map(item => {
        return (
          <li
            key={item.slug}
            className={`${css.item} ${css.toc_list[item.size]}`}
          >
            <Link href={`#${item.slug}`}>{item.body}</Link>
          </li>
        );
      })}
    </ol>
  );
}
