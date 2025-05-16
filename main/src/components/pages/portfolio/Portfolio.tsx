// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
'use client';

import * as css from '@pages/portfolio/portfolio.css';
import React from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {color} from '@watasuke.net/common/src/css/color';

const blind_width = 50;
// prettier-ignore
const visible_mask   = `repeating-linear-gradient(55deg, ${color.bg} 0px 0px, transparent 0px ${blind_width}px)`;
const invisible_mask = `repeating-linear-gradient(55deg, ${color.bg} 0px ${blind_width}px, transparent 0px ${blind_width}px)`;

interface Props {
  init_lang: string | undefined;
}

export function Portfolio(props: Props) {
  return (
    <AnimatePresence>
      <main className={css.container}></main>
      {/* page cut in animation */}
      <motion.div
        initial={{background: invisible_mask}}
        animate={{background: visible_mask, display: 'none'}}
        // easeOutExpo
        transition={{delay: 0.6, duration: 0.3, ease: [0.16, 1, 0.3, 1]}}
        className={css.cutin_animation}
      />
    </AnimatePresence>
  );
}
