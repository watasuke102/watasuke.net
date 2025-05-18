// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
'use client';

import * as css from './Menu.css';
import React from 'react';
import {AnimatePresence, motion, useReducedMotion} from 'framer-motion';
import {color, easing} from '@watasuke.net/common';
import {MenuContents} from '../MenuContents';

interface Props {
  additional_item?: React.ReactNode;
}

export function Menu(props: Props) {
  const [is_open, set_is_open] = React.useState(false);
  const should_reduce_motion = useReducedMotion();
  const duration = (() => {
    if (should_reduce_motion) {
      return {open: 0, close: 0};
    }
    if (props.additional_item) {
      return {open: 0.45, close: 0.4};
    }
    return {open: 0.3, close: 0.2};
  })();

  return (
    <div className={css.container}>
      <AnimatePresence>
        {is_open && (
          <motion.nav
            variants={{
              init: {
                height: 0,
                borderColor: `${color.fg}00`,
                boxShadow: '0 0 12px 2px #1110',
                transition: {
                  duration: duration.close,
                  ease: easing.out_quint.array,
                },
              },
              open: {
                // maxHeight: '80dvh',
                height: 'auto',
                borderColor: `${color.fg}ff`,
                boxShadow: '0 0 12px 2px #111d',
                transition: {
                  duration: duration.open,
                  ease: easing.out_expo.array,
                },
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
            <MenuContents additional_item={props.additional_item} />
          </motion.nav>
        )}
      </AnimatePresence>
      <button
        className={css.menu_opener}
        aria-label='toggle menu'
        aria-expanded={is_open}
        onClick={() => set_is_open(f => !f)}
      >
        <span
          className={`${css.icon} ${is_open ? css.icon_opening : ''}`}
          aria-hidden
        />
      </button>
    </div>
  );
}
