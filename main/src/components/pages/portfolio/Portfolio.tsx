// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
'use client';

// do not import from 'Layout' because it imports 'Footer'
// that depends 'child_process' despite this page is client component
// eslint-disable-next-line import/order
import {Menu} from '@feature/Layout/Menu/Menu/Menu';

import * as css from '@pages/portfolio/portfolio.css';
import React from 'react';
import {AnimatePresence, motion, useReducedMotion} from 'framer-motion';
import {easing} from '@watasuke.net/common/style/easing';
import {color} from '@watasuke.net/common/style/color';
import {Switch} from '@watasuke.net/common/Switch/Switch';
import * as constant from '@pages/portfolio/constant';

import {Welcome} from './sections/Welcome/Welcome';
import {Whoami} from './sections/Whoami/Whoami';
import {Skills} from './sections/Skills/Skills';
import {Works} from './sections/Works/Works';
import {History} from './sections/History/History';
import {End} from './sections/End/End';
import {SidepeakComponent, SidepeakProvider} from './components/SidePeak/SidePeak';

const blind_width = 50;
// prettier-ignore
const visible_mask   = `repeating-linear-gradient(55deg, ${color.bg} 0px 0px, transparent 0px ${blind_width}px)`;
const invisible_mask = `repeating-linear-gradient(55deg, ${color.bg} 0px ${blind_width}px, transparent 0px ${blind_width}px)`;

export function Portfolio(props: {init_lang: 'ja' | 'en'}) {
  const disable_animation = useReducedMotion() ?? false;
  const [lang, set_lang] = React.useState<'ja' | 'en'>(props.init_lang);

  return (
    <>
      <AnimatePresence initial={!disable_animation}>
        <SidepeakProvider>
          <div className={css.container}>
            <main>
              <Welcome />
              <Whoami lang={lang} />
              <Skills lang={lang} />
              <Works lang={lang} />
              <History lang={lang} />
              <End />
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
          <SidepeakComponent />
        </SidepeakProvider>
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
