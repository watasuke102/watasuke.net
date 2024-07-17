// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './EventCard.css';
import {BreakWithCR} from '@common';
import {motion} from 'framer-motion';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Raw from 'rehype-raw';
import Gfm from 'remark-gfm';
import {Transition} from '@utils/Transition';
import {Event} from './Event';
import IconCollapse from '@assets/icons/general/up.svg';

interface Props {
  event: Event;
  animation_enabled: boolean;
  lang: string;
}

export function EventCard(props: Props): React.ReactElement {
  const [opening, set_opening] = React.useState(false);
  const body = props.lang !== 'en' ? props.event.body_ja : props.event.body_en;
  const on_click = () => {
    if (body !== '') {
      set_opening(s => !s);
    }
  };

  return (
    <div className={css.container}>
      <div className={css.day}>
        <BreakWithCR str={props.event.day} />
      </div>
      <div className={css.card}>
        <button className={css.header} onClick={on_click}>
          <span className={css.title}>{props.lang !== 'en' ? props.event.title_ja : props.event.title_en}</span>
          <span className={css.subtitle}>
            {props.lang !== 'en' ? props.event.subtitle_ja : props.event.subtitle_en}
          </span>
          <span className={css.category}>{props.event.category}</span>
          {body !== '' && (
            <motion.div
              className={css.expand_icon}
              initial={{transform: 'translateY(8px) rotate(-180deg)'}}
              animate={{
                transform: `translateY(8px) ${opening ? 'rotate(0deg)' : 'rotate(-180deg)'}`,
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
              height: {duration: 0.4 * Number(props.animation_enabled), ease: [0.22, 1, 0.36, 1]},
            }}
          >
            <hr />
            <ReactMarkdown
              remarkPlugins={[Gfm]}
              rehypePlugins={[Raw]}
              // eslint-disable-next-line react/no-children-prop
              children={body}
            />
          </motion.div>
        )}
      </div>
      <div className={css.h_connector} />
    </div>
  );
}
