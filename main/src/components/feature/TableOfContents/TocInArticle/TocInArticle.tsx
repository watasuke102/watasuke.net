// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
'use client';

import * as css from './TocInArticle.css';
import {AnimatePresence, motion, useReducedMotion} from 'framer-motion';
import React from 'react';
import {Heading, TocMapper} from '@watasuke.net/common';
import IconCollapse from '@assets/icons/general/up.svg';

interface Props {
  headings: Heading[];
}

export function TocInArticle(props: Props) {
  const [tocOpening, SetTocOpening] = React.useState(true);
  const should_reduce_motion = useReducedMotion();

  return (
    <nav className={css.container}>
      <AnimatePresence>
        <div className={css.top_items}>
          <button
            className={css.close_button}
            onClick={() => SetTocOpening(!tocOpening)}
            aria-label='toggle table of contents'
          >
            <motion.div
              className={css.button_icon}
              animate={{
                transform: tocOpening ? 'rotate(0deg)' : 'rotate(-180deg)',
              }}
              transition={{duration: 0.2 * Number(!should_reduce_motion)}}
            >
              <IconCollapse />
            </motion.div>
          </button>
          <span className={css.heading}>目次</span>
        </div>
        <motion.div
          className={css.toc}
          animate={{
            opacity: tocOpening ? 1 : 0,
            maxHeight: tocOpening ? 300 : 0,
            overflowY: tocOpening ? 'scroll' : 'hidden',
          }}
          transition={{
            ease: 'easeOut',
            duration: 0.2 * Number(!should_reduce_motion),
          }}
          // initial value to prevent layout shift on the first load
          style={{maxHeight: 300, overflowY: 'scroll'}}
        >
          <TocMapper headings={props.headings} />
        </motion.div>
      </AnimatePresence>
    </nav>
  );
}
