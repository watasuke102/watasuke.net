// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {Link} from 'gatsby';
import React from 'react';
import BreadcrumbItem from '@mytypes/Breadcrumb';

interface Props {
  breadcrumb_list: BreadcrumbItem[];
}

export function Breadcrumb(props: Props): React.ReactElement {
  return (
    <nav aria-label='Breadcrumb'>
      {props.breadcrumb_list.map((e, i) => (
        <>
          {e.item ? (
            <Link key={`a_${i}`} to={e.item}>
              {e.name}
            </Link>
          ) : (
            <span key={`s_${i}`}>{e.name}</span>
          )}
          {i !== props.breadcrumb_list.length - 1 && (
            <span key={`sep_${i}`} aria-hidden>
              {' > '}
            </span>
          )}
        </>
      ))}
    </nav>
  );
}
