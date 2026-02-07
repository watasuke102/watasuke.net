// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {css} from './MonthliesTable.css';
import React from 'react';
import Link from 'next/link';
import {IndexPageQuery} from '@utils/graphql';
import LinkIcon from '@assets/link.svg';

type Props = {
  monthlies: IndexPageQuery['allMonthlies'];
};

function datetime(s: string) {
  if (s === '') {
    return 'none';
  } else {
    return s.replace('T', ' ');
  }
}

export function MonthliesTable(props: Props) {
  return (
    <>
      <table className={css.table}>
        <thead>
          <tr>
            <th></th>
            <th>year/month</th>
            <th>updated_at</th>
            <th>published_at</th>
          </tr>
        </thead>
        <tbody>
          {props.monthlies.map(e => {
            const year_str = e.year.toString();
            const month_str = e.month.toString().padStart(2, '0');
            return (
              <tr key={year_str + month_str}>
                <td>
                  <a
                    className={css.icon}
                    href={`https://watasuke.net/blog/monthly/${year_str}/${month_str}`}
                    target='_blank'
                    rel='nofollow noopener noreferrer'
                  >
                    <LinkIcon />
                  </a>
                </td>
                <td>
                  <Link href={`/editor/monthly/${year_str}/${month_str}`}>
                    {year_str}/{month_str}
                  </Link>
                </td>
                <td>{datetime(e.updatedAt)}</td>
                <td>{datetime(e.publishedAt)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
