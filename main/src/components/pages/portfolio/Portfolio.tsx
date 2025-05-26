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
import {easing, color, Switch} from '@watasuke.net/common';
import * as constant from '@pages/portfolio/constant';

import {Welcome, Whoami, History} from './sections';

const blind_width = 50;
// prettier-ignore
const visible_mask   = `repeating-linear-gradient(55deg, ${color.bg} 0px 0px, transparent 0px ${blind_width}px)`;
const invisible_mask = `repeating-linear-gradient(55deg, ${color.bg} 0px ${blind_width}px, transparent 0px ${blind_width}px)`;

export function Portfolio() {
  const disable_animation = useReducedMotion() ?? false;
  const [lang, set_lang] = React.useState<'ja' | 'en'>('ja');

  return (
    <>
      <AnimatePresence initial={!disable_animation}>
        <div className={css.container}>
          <main>
            <Welcome />
            <Whoami lang={lang} />
            {/* TODO: skills */}
            <History lang={lang} />
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
      <Menu
        additional_item={
          <>
            <div className={css.selector}>
              <span className={css.selector_label}>Language</span>
              <span>English</span>
              <Switch
                checked={lang !== 'en'}
                on_click={() => set_lang(prev => (prev !== 'ja' ? 'ja' : 'en'))}
                same_color
              />
              <span>日本語</span>
            </div>
            <hr />
          </>
        }
      />
    </>
  );
}
