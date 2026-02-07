// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
'use client';

import * as css from './MonthlyTable.css';
import Link from 'next/link';
import React from 'react';
import {cs} from '@watasuke.net/common';
import {AllMonthliesQuery} from '@utils/graphql';

type Props = {
  monthlies: AllMonthliesQuery['allPublicMonthlies'];
  year?: number;
};

export function MonthlyTable(props: Props) {
  const [year, set_year] = React.useState(props.year ?? 2026);

  const per_year = Object.groupBy(props.monthlies, e => e.year);
  const years = Object.keys(per_year)
    .map(Number)
    .sort((a, b) => b - a);
  return (
    <div className={css.root}>
      {years.length > 1 && (
        <div className={css.header}>
          {years.map(y => (
            <button
              key={`yearbutton_${y}`}
              className={cs(
                css.header_button,
                year === y && css.header_button_selected,
              )}
              onClick={() => set_year(y)}
            >
              {y}
            </button>
          ))}
        </div>
      )}
      <div className={css.container}>
        {per_year[year]
          ?.sort((a, b) => b.month - a.month)
          .map(e => {
            const month_str = e.month.toString().padStart(2, '0');
            return (
              <Link
                key={year + month_str}
                className={css.item}
                href={`/blog/monthly/${e.year}/${month_str}`}
              >
                <div className={css.item_title}>
                  {e.year}/{month_str}
                </div>
                <span className={css.item_tldr}>{e.tldr}</span>
              </Link>
            );
          }) ?? <></>}
      </div>
    </div>
  );
}
