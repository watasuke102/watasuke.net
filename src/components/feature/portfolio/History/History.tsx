// History.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT SUSHI-WARE License.
import {graphql, useStaticQuery} from 'gatsby';
import React from 'react';
import toml from 'toml';
import {Event} from './Event';
import {EventCard} from './EventCard';
import './History.scss';

interface Props {
  animation_enabled: boolean;
  lang: string;
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
          {events.map((e, i) => (
            <EventCard key={i} event={e} {...props} />
          ))}
        </>,
      );
    });

    return cards;
  }, []);

  return (
    <div id='portfolio-history'>
      <h2>History</h2>
      <div className='container_wrapper'>
        <div className='container'>{EventList}</div>
      </div>
      <div className='next-page' />
    </div>
  );
};
