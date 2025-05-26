// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './History.css';
import React from 'react';
import {color} from '@watasuke.net/common';
import {gen_event_list} from '@data/event_list';

export function History(props: {lang: 'ja' | 'en'}) {
  const event_list = React.useMemo(
    () => gen_event_list(props.lang),
    [props.lang],
  );
  return (
    <section>
      <h2 className={css.heading}>History</h2>
      {Object.keys(event_list).map(year => {
        return (
          <section key={year}>
            <div className={css.year_container}>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 110 110'>
                <polygon
                  points='55,5 98,30 98,80 55,105 12,80 12,30'
                  style={{
                    fill: color.bg,
                    stroke: color.fg,
                    strokeWidth: 4,
                  }}
                />
              </svg>
              <h3 className={css.year}>{year}</h3>
            </div>
            {event_list[year].map((event, index) => {
              return (
                <div key={`${year}-${index}`} className={css.history_item}>
                  <div className={css.history_line_vertical} />
                  <div className={css.history_line_horizontal} />
                  <div className={css.history_info_container}>
                    <h4 className={css.history_title}>{event.title}</h4>
                    <span className={css.history_subtitle}>
                      {event.subtitle}
                    </span>
                  </div>
                </div>
              );
            })}
          </section>
        );
      })}
    </section>
  );
}
