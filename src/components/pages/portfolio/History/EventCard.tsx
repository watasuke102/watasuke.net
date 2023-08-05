// EventCard.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {BreakWithCR} from '@/common';
import {motion} from 'framer-motion';
import React from 'react';
import {ReactMarkdown} from 'react-markdown/lib/react-markdown';
import Raw from 'rehype-raw';
import Gfm from 'remark-gfm';
import {Transition} from '@utils/Transition';
import {Event} from './Event';
import * as style from './EventCard.css';
import IconCollapse from '@assets/icons/general/up.svg';

interface Props {
  event: Event;
  animation_enabled: boolean;
  lang: string;
}

export function EventCard(props: Props): React.ReactElement {
  const [opening, set_opening] = React.useState(false);
  const body = props.lang !== 'en' ? props.event.body_ja : props.event.body_en;

  return (
    <div className={style.container}>
      <div className={style.day}>
        <BreakWithCR str={props.event.day} />
      </div>
      <div className={style.card}>
        <div
          className={style.header}
          onClick={() => {
            if (body !== '') {
              set_opening(s => !s);
            }
          }}
        >
          <span className={style.title}>{props.lang !== 'en' ? props.event.title_ja : props.event.title_en}</span>
          <span className={style.subtitle}>
            {props.lang !== 'en' ? props.event.subtitle_ja : props.event.subtitle_en}
          </span>
          <span className={style.category}>{props.event.category}</span>
          {body !== '' && (
            <motion.div
              className={style.expand_icon}
              initial={{transform: 'translateY(8px) rotate(-180deg)'}}
              animate={{
                transform: `translateY(8px) ${opening ? 'rotate(0deg)' : 'rotate(-180deg)'}`,
              }}
              transition={Transition(props.animation_enabled, {duration: 0.2})}
            >
              <IconCollapse />
            </motion.div>
          )}
        </div>

        {body !== '' && (
          <motion.div
            className={style.body}
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
      <div className={style.h_connector} />
    </div>
  );
}
