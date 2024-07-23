// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './History.css';
import React from 'react';
import {color} from '@watasuke.net/common/src/css/color';
import {EventCard} from './EventCard';
import {event_list} from './event_list';
import {Heading} from '../Heading';

interface Props {
  animation_enabled: boolean;
  lang: string;
}

export function History(props: Props): React.ReactElement {
  const EventList = React.useMemo(() => {
    return Object.keys(event_list).map(year => {
      return (
        <>
          <div className={css.year_bg} key={year}>
            <span className={css.year}>{year}</span>
          </div>
          {event_list[year].map((e, i) => (
            <EventCard key={i} event={e} {...props} />
          ))}
        </>
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
