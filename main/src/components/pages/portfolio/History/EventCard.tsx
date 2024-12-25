// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './EventCard.css';
import {motion} from 'framer-motion';
import React from 'react';
import {Markdown} from '@watasuke.net/common';
import {Transition} from '@utils/Transition';
import {Event} from '@data/event_list';
import IconCollapse from '@assets/icons/general/up.svg';

interface Props {
  event: Event;
  animation_enabled: boolean;
  lang: string;
}

export function EventCard(props: Props) {
  const [opening, set_opening] = React.useState(false);
  const body = props.lang !== 'en' ? props.event.body_ja : props.event.body_en;
  const on_click = () => {
    if (body !== '') {
      set_opening(s => !s);
    }
  };

  // without this, component fetches every time when `opening` is changed
  const markdown = React.useMemo(
    () => (
      <Markdown
        md={body}
        embed_card={() => <></>}
        inner_embed_card={() => <></>}
      />
    ),
    [body],
  );

  function Period() {
    const period = props.event.period;
    if (!period) {
      return <></>;
    }
    switch (period.kind) {
      case 'day':
        return (
          <div className={css.day}>
            <span>
              {period.date.month}/{period.date.day}
            </span>
          </div>
        );
      case 'period':
        return (
          <div className={css.day}>
            <span>
              {period.begin.month}/{period.begin.day}
            </span>
            <span className={css.range_separator} />
            <span>
              {period.end.month}/{period.end.day}
            </span>
          </div>
        );
      case 'doing':
        return (
          <div className={css.day}>
            <span>
              {period.begin.month}/{period.begin.day}
            </span>
            <span className={css.range_separator} />
            <span style={{height: 4}} />
          </div>
        );
    }
  }

  return (
    <div className={css.container}>
      <Period />
      <div className={css.card}>
        <button className={css.header} onClick={on_click}>
          <span className={css.title}>
            {props.lang !== 'en' ? props.event.title_ja : props.event.title_en}
          </span>
          <span className={css.subtitle}>
            {props.lang !== 'en'
              ? props.event.subtitle_ja
              : props.event.subtitle_en}
          </span>
          <span className={css.category}>{props.event.category}</span>
          {body !== '' && (
            <motion.div
              className={css.expand_button}
              initial={{transform: 'translateY(6px) rotate(-180deg)'}}
              animate={{
                transform: `translateY(6px) ${opening ? 'rotate(0deg)' : 'rotate(-180deg)'}`,
              }}
              transition={Transition(props.animation_enabled, {duration: 0.2})}
            >
              <IconCollapse />
            </motion.div>
          )}
        </button>

        {body !== '' && (
          <motion.div
            className={css.body}
            animate={{
              opacity: opening ? 1 : 0,
              height: opening ? 'auto' : 0,
            }}
            transition={{
              opacity: {duration: 0.2 * Number(props.animation_enabled)},
              // easeOutQuint
              height: {
                duration: 0.4 * Number(props.animation_enabled),
                ease: [0.22, 1, 0.36, 1],
              },
            }}
          >
            <hr className={css.body_hr} />
            {markdown}
          </motion.div>
        )}
      </div>
      <div className={css.h_connector} />
    </div>
  );
}
