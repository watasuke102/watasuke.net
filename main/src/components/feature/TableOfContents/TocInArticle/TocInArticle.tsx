// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './TocInArticle.css';
import {AnimatePresence, motion, useReducedMotion} from 'framer-motion';
import React from 'react';
import {HeadingContext, TocMapper} from '@feature/TableOfContents';
import IconCollapse from '@assets/icons/general/up.svg';

export function TocInArticle(): React.ReactElement {
  const [tocOpening, SetTocOpening] = React.useState(true);
  const headings = React.useContext(HeadingContext);
  const should_reduce_motion = useReducedMotion();

  if (!headings) {
    return <></>;
  }

  return (
    <nav className={css.container}>
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
      <AnimatePresence>
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
        >
          <TocMapper headings={headings} />
        </motion.div>
      </AnimatePresence>
    </nav>
  );
}
