// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
'use client';

import * as css from '@pages/portfolio/portfolio.css';
import React from 'react';
import Link from 'next/link';
import {AnimatePresence, motion} from 'framer-motion';
import {Switch} from '@watasuke.net/common';
import {color} from '@watasuke.net/common/src/css/color';
import {Welcome, Skills, History, Links, End} from '@pages/portfolio';
import {Whoami} from '@pages/portfolio/Whoami';
import IconLeft from '@assets/icons/general/left.svg';
import IconTranslate from '@assets/icons/general/translate.svg';

const blind_width = 60;
// prettier-ignore
const visible_mask   = `repeating-linear-gradient(-60deg, ${color.bg} 0px 0px, transparent 0px ${blind_width}px)`;
const invisible_mask = `repeating-linear-gradient(-60deg, ${color.bg} 0px ${blind_width}px, transparent 0px ${blind_width}px)`;

interface Props {
  init_animation: string | undefined;
  init_lang: string | undefined;
}

export function Portfolio(props: Props) {
  const [animation_enabled, set_animation_enabled] = React.useState<boolean>(
    props.init_animation !== 'false',
  );
  const [lang, set_lang] = React.useState<string>(props.init_lang ?? 'ja');

  return (
    <AnimatePresence>
      <div className={css.main_container}>
        <header className={css.header}>
          <Link href='/'>
            <IconLeft />
          </Link>
          <form className={css.animation_form}>
            <label htmlFor='animation_switch'>
              {lang === 'en' ? 'アニメーション' : 'Animation'}
            </label>
            <Switch
              checked={animation_enabled}
              on_click={() => set_animation_enabled(f => !f)}
              id='animation_switch'
            />
          </form>
          <button
            className={css.translate_button}
            onClick={() => set_lang(l => (l === 'ja' ? 'en' : 'ja'))}
          >
            {/* a */}
            <span className={css.button_text}>
              {lang === 'en' ? '日本語で表示' : 'Show in English'}
            </span>
            <IconTranslate />
          </button>
        </header>
        <main className={css.portfolio_container}>
          <Welcome animation_enabled={animation_enabled} lang={lang} />
          <Whoami animation_enabled={animation_enabled} lang={lang} />
          <Skills animation_enabled={animation_enabled} lang={lang} />
          <History animation_enabled={animation_enabled} lang={lang} />
          <Links animation_enabled={animation_enabled} lang={lang} />
          <End />
        </main>
        {/* page cut in animation */}
        <motion.div
          initial={{background: invisible_mask}}
          animate={{background: visible_mask, display: 'none'}}
          // easeOutExpo
          transition={{delay: 0.6, duration: 0.3, ease: [0.16, 1, 0.3, 1]}}
          className={css.cutin_animation}
        />
      </div>
    </AnimatePresence>
  );
}
