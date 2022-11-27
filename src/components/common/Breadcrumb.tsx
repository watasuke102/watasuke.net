/*!
 * Breadcrumb.tsx
 *
 * CopyRight (c) 2021-2022 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */
import {Link} from 'gatsby';
import React from 'react';
import BreadcrumbItem from '@mytypes/Breadcrumb';

interface Props {
  breadcrumb_list: BreadcrumbItem[];
}

export default (props: Props) => {
  return (
    <section>
      {props.breadcrumb_list.map((e, i) => (
        <>
          {e.item ? (
            <Link key={`a_${i}`} to={e.item || ''}>
              {e.name}
            </Link>
          ) : (
            <span key={`s_${i}`}>{e.name}</span>
          )}
          {i !== props.breadcrumb_list.length - 1 && <span key={`sep_${i}`}>{' > '}</span>}
        </>
      ))}
    </section>
  );
};
