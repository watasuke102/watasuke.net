// History.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT SUSHI-WARE License.
import {graphql, useStaticQuery} from 'gatsby';
import React from 'react';
import toml from 'toml';
import * as portfolio_common from '@/feature/portfolio/PortfolioCommon.css';
import {Event} from './Event';
import {EventCard} from './EventCard';
import * as style from './History.css';

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
          <div className={style.year_bg} key={events[0].year}>
            <span className={style.year}>{events[0].year}</span>
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
    <div className={portfolio_common.container}>
      <h2>History</h2>
      <div style={{height: 48}} />
      <div className={style.container_wrapper}>
        <div className={style.container}>{EventList}</div>
      </div>
      <div style={{height: 128}} />
      <div className={portfolio_common.next_page} />
    </div>
  );
};
