// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
'use client';

// do not import from 'Layout' because it imports 'Footer'
// that depends 'child_process' despite this page is client component
// eslint-disable-next-line import/order
import {Menu} from '@feature/Layout/Menu';

import * as css from '@pages/portfolio/portfolio.css';
import React from 'react';
import {AnimatePresence, motion, useReducedMotion} from 'framer-motion';
import {easing, color} from '@watasuke.net/common';
import {constant} from './constant';

import {Welcome} from './sections';

const blind_width = 50;
// prettier-ignore
const visible_mask   = `repeating-linear-gradient(55deg, ${color.bg} 0px 0px, transparent 0px ${blind_width}px)`;
const invisible_mask = `repeating-linear-gradient(55deg, ${color.bg} 0px ${blind_width}px, transparent 0px ${blind_width}px)`;

interface Props {
  init_lang: string | undefined;
}

export function Portfolio(props: Props) {
  const disable_animation = useReducedMotion() ?? false;

  return (
    <>
      <AnimatePresence initial={!disable_animation}>
        <div className={css.container}>
          <main>
            <Welcome />
          </main>

          {
            /* page cut in animation */
            !disable_animation && (
              <motion.div
                initial={{background: invisible_mask}}
                animate={{background: visible_mask, display: 'none'}}
                transition={{
                  delay: constant.page_cutin.delay,
                  duration: constant.page_cutin.duration,
                  ease: easing.out_expo.array,
                }}
                className={css.cutin_animation}
              />
            )
          }
        </div>
      </AnimatePresence>
      <Menu additional_item={<></>} />
    </>
  );
}
