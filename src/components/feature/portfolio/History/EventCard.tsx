// EventCard.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT SUSHI-WARE License.
import {BreakWithCR} from '@/common';
import React from 'react';
import {Event} from './Event';
import './EventCard.scss';

interface Props {
  event: Event;
  animation_enabled: boolean;
  lang: string;
}

export function EventCard(props: Props): React.ReactElement {
  return (
    <div className='EventCard_container'>
      <div className='day'>
        <BreakWithCR str={props.event.day} />
      </div>
      <div className='card'>
        <div className='header'>
          <span className='title'>{props.lang !== 'en' ? props.event.title_ja : props.event.title_en}</span>
          <span className='subtitle'>{props.lang !== 'en' ? props.event.subtitle_ja : props.event.subtitle_en}</span>
        </div>
      </div>
      <div className='h_connector' />
      <div className='v_connector' />
    </div>
  );
}
