// EventCard.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT SUSHI-WARE License.
import {BreakWithCR} from '@/common';
import {motion} from 'framer-motion';
import React from 'react';
import {ReactMarkdown} from 'react-markdown/lib/react-markdown';
import Raw from 'rehype-raw';
import Gfm from 'remark-gfm';
import Slug from 'remark-slug';
import {Transition} from '@utils/Transition';
import {Event} from './Event';
import './EventCard.scss';
import IconExpand from '@assets/icons/expand.svg';

interface Props {
  event: Event;
  animation_enabled: boolean;
  lang: string;
}

export function EventCard(props: Props): React.ReactElement {
  const [opening, set_opening] = React.useState(false);
  const body = props.lang !== 'en' ? props.event.body_ja : props.event.body_en;

  return (
    <div className='EventCard_container'>
      <div className='day'>
        <BreakWithCR str={props.event.day} />
      </div>
      <div className='card'>
        <div
          className='header'
          onClick={() => {
            if (body !== '') {
              set_opening(s => !s);
            }
          }}
        >
          <span className='title'>{props.lang !== 'en' ? props.event.title_ja : props.event.title_en}</span>
          <span className='subtitle'>{props.lang !== 'en' ? props.event.subtitle_ja : props.event.subtitle_en}</span>
          <span className='category'>{props.event.category}</span>
          {body !== '' && (
            <motion.div
              className='expand_icon'
              animate={{
                transform: opening ? 'rotate(-180deg)' : 'rotate(0deg)',
              }}
              transition={Transition(props.animation_enabled, {duration: 0.2})}
            >
              <IconExpand />
            </motion.div>
          )}
        </div>

        {body !== '' && (
          <motion.div
            className='body'
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
              remarkPlugins={[Gfm, Slug]}
              rehypePlugins={[Raw]}
              // eslint-disable-next-line react/no-children-prop
              children={body}
            />
          </motion.div>
        )}
      </div>
      <div className='h_connector' />
    </div>
  );
}
