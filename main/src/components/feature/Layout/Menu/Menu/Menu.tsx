// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
'use client';

import * as css from './Menu.css';
import React from 'react';
import {AnimatePresence, motion, useReducedMotion} from 'framer-motion';
import {color} from '@watasuke.net/common';
import {MenuContents} from '../MenuContents';

export function Menu() {
  const [is_open, set_is_open] = React.useState(false);
  const should_reduce_motion = useReducedMotion();
  const duration = 0.4 * Number(!should_reduce_motion);

  return (
    <div className={css.container}>
      <AnimatePresence>
        {is_open && (
          <motion.nav
            variants={{
              init: {
                maxHeight: 0,
                borderColor: `${color.fg}00`,
                boxShadow: '0 0 12px 2px #1110',
                transition: {duration, ease: [0.22, 1, 0.36, 1]},
              },
              open: {
                maxHeight: '80dvh',
                borderColor: `${color.fg}ff`,
                boxShadow: '0 0 12px 2px #111d',
                transition: {duration, ease: [0.16, 1, 0.3, 1]},
              },
            }}
            initial='init'
            animate='open'
            exit='init'
            className={css.menu}
          >
            <div className={css.padding_top} />
            <div className={css.padding_left} />
            <div className={css.padding_right} />
            <MenuContents />
          </motion.nav>
        )}
      </AnimatePresence>
      <button
        className={css.menu_opener}
        aria-label='toggle menu'
        aria-expanded={is_open}
        onClick={() => set_is_open(f => !f)}
      >
        <span className={`${css.icon} ${is_open ? css.icon_opening : ''}`} aria-hidden />
      </button>
    </div>
  );
}
