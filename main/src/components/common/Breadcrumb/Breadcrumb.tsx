// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './Breadcrumb.css';
import Link from 'next/link';
import React from 'react';
import BreadcrumbItem from '@mytypes/Breadcrumb';

interface Props {
  breadcrumb_list: BreadcrumbItem[];
}

export function Breadcrumb(props: Props) {
  return (
    <nav aria-label='Breadcrumb'>
      <ol className={css.list_ol}>
        {props.breadcrumb_list.map((e, i) => (
          <li key={i} className={css.list_item}>
            {e.item ? (
              <>
                <Link href={e.item || ''} aria-current={e.item ? undefined : 'page'}>
                  {e.name}
                </Link>
              </>
            ) : (
              <span>{e.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
