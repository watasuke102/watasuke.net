// History.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT SUSHI-WARE License.
import {BreakWithCR} from '@/common';
import {graphql, useStaticQuery} from 'gatsby';
import React from 'react';
import toml from 'toml';
import './History.scss';

interface Props {
  animation_enabled: boolean;
  lang: string;
}

interface Event {
  year: string;
  title_ja: string;
  title_en: string;
  subtitle_ja: string;
  subtitle_en: string;
  day: string;
  category: string;
  body_ja: string;
  body_en: string;
}

export const History = (props: Props): React.ReactElement => {
  const EventList = React.useMemo(() => {
    const event_group = new Map<string, Event[]>();
    const skill_list: Event[] = toml.parse(
      useStaticQuery(graphql`
        query {
          portfolioToml(name: {eq: "History.toml"}) {
            body
          }
        }
      `).portfolioToml.body,
    ).event;

    skill_list.forEach(e => {
      event_group.set(e.year, event_group.get(e.year) ?? []);
      event_group.get(e.year)?.push(e);
    }, {});

    const cards: React.ReactElement[] = [];
    event_group.forEach(events => {
      cards.push(
        <>
          <div className='year_bg' key={events[0].year}>
            <span className='year'>{events[0].year}</span>
          </div>
          {events.map((e, i) => {
            return (
              <div className='event' key={i}>
                <div className='day'>
                  <BreakWithCR str={e.day} />
                </div>
                <div className='card'>
                  <div className='header'>
                    <span className='title'>{props.lang !== 'en' ? e.title_ja : e.title_en}</span>
                    <span className='subtitle'>{props.lang !== 'en' ? e.subtitle_ja : e.subtitle_en}</span>
                  </div>
                </div>
                <div className='h_connector' />
                <div className='v_connector' />
              </div>
            );
          })}
        </>,
      );
    });

    return cards;
  }, []);

  return (
    <div id='portfolio-history'>
      <h2>History</h2>
      {EventList}
      {/* <div className='year_bg'>
        <span className='year'>2020</span>
      </div>
      <div className='event'>
        <div className='day'>04/01</div>
        <div className='card'>first</div>
      </div>
      <div className='event'>
        <div className='day'>04/02</div>
        <div className='card'>second</div>
      </div>{' '}
      <div className='event'>
        <div className='day'>04/03</div>
        <div className='card'>3rd</div>
      </div>{' '}
      <div className='event'>
        <div className='day'>04/03</div>
        <div className='card'>4th</div>
      </div>
      <div className='year_bg'>
        <span className='year'>2020</span>
      </div>
      <div className='event'>
        <div className='day'>04/01</div>
        <div className='card'>first</div>
      </div>
      <div className='event'>
        <div className='day'>04/02</div>
        <div className='card'>second</div>
      </div>{' '}
      <div className='event'>
        <div className='day'>04/03</div>
        <div className='card'>3rd</div>
      </div>{' '}
      <div className='event'>
        <div className='day'>04/03</div>
        <div className='card'>4th</div>
      </div> */}
      <div className='next-page' />
    </div>
  );
};
