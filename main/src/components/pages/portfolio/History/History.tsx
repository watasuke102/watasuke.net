// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './History.css';
import React from 'react';
import {color} from '@watasuke.net/common/src/css/color';
import {cs} from '@watasuke.net/common';
import {EventCard} from './EventCard';
import {Heading} from '../Heading';
import {event_list} from '@data/event_list';

interface Props {
  animation_enabled: boolean;
  lang: string;
}

export function History(props: Props) {
  const EventList = React.useMemo(() => {
    return Object.keys(event_list).map((year, i) => {
      return (
        <div key={year}>
          <div className={cs(css.year_bg, i !== 0 && css.year_bg_padding_top)}>
            <span className={css.year}>{year}</span>
          </div>
          {event_list[year].map((e, i) => (
            <EventCard key={`${year}_${i}`} event={e} {...props} />
          ))}
        </div>
      );
    });
  }, [props]);

  return (
    <section>
      <Heading color={color.purple} text='History' />
      <div style={{height: 60}} />
      <div className={css.timeline_middle_line}>{EventList}</div>
    </section>
  );
}
