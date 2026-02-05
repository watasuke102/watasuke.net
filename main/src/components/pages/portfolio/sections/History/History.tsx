// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './History.css';
import React from 'react';
import {motion} from 'framer-motion';
import {color} from '@watasuke.net/common';
import {floatup_with_scroll} from '@pages/portfolio/components/FloatUpWithScroll/FloatUpWithScroll';
import {HistoryItem} from './HistoryItem';
import {useSidepeak} from '../../components/SidePeak';
import {gen_event_list} from '@data/event_list';

interface Props {
  lang: 'ja' | 'en';
}

export function History(props: Props) {
  const {open_sidepeak} = useSidepeak();
  const event_list = React.useMemo(
    () => gen_event_list(props.lang),
    [props.lang],
  );
  return (
    <section className={css.container}>
      <h2 className={css.heading}>History</h2>
      {Object.keys(event_list).map(year => {
        return (
          <section key={year}>
            <motion.div {...floatup_with_scroll} className={css.year_container}>
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
            </motion.div>
            {event_list[year].map((event, index) => (
              <HistoryItem
                key={`${year}-${index}`}
                event={event}
                open_sidepeak={open_sidepeak}
              />
            ))}
          </section>
        );
      })}
    </section>
  );
}
