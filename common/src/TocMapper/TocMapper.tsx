// watasuke.net > common
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './TocMapper.css';
import React from 'react';
import Heading from '../Heading';

interface Props {
  headings: Heading[];
}

export function TocMapper(props: Props): React.ReactElement {
  return (
    <ol className={css.list_wrapper}>
      {props.headings.map(item => {
        const jump = () => {
          const heading = document.getElementById(item.slug);
          if (heading) {
            window.scrollTo({top: heading.offsetTop, behavior: 'smooth'});
          }
        };
        return (
          <li key={item.slug} className={`${css.item} ${css.toc_list[item.size]}`}>
            <span role='link' tabIndex={0} onClick={jump} onKeyDown={jump}>
              {item.body}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
