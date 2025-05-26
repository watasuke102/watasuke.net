// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './Whoami.css';
import {motion, MotionProps} from 'framer-motion';
import {cs, easing} from '@watasuke.net/common';
import {BioEn, BioJa} from '@data/bio';
import IconClose from '@assets/icons/general/close.svg';
import IconExpand from '@assets/icons/general/expand.svg';

export function Whoami(props: {lang: 'ja' | 'en'}) {
  const item = (delay: number) => {
    return {
      variants: {
        initial: {opacity: 0, y: 20},
        animate: {opacity: 1, y: 0},
      },
      transition: {
        delay,
        duration: 0.4,
        ease: easing.out_expo.array,
      },
    } as MotionProps;
  };
  const prefix = (
    <>
      <span className={css.host}>watasuke@watasuke.net</span>:~${' '}
    </>
  );
  return (
    <motion.section
      variants={{
        initial: {opacity: 0, y: 20},
        animate: {opacity: 1, y: 0},
      }}
      initial='initial'
      whileInView='animate'
      viewport={{once: true, amount: 1.0}}
      transition={{
        when: 'beforeChildren',
        duration: 0.4,
        ease: easing.out_expo.array,
      }}
      className={css.container}
    >
      <div className={css.tabbar}>
        <div className={cs(css.tabbar_button, css.tabbar_close_button)}>
          <IconClose />
        </div>
        <div className={cs(css.tabbar_button, css.tabbar_minimize_button)}>
          <div className={css.minimize_button_icon} />
        </div>
        <div className={cs(css.tabbar_button, css.tabbar_expand_button)}>
          <IconExpand />
        </div>
        <span>/usr/bin/zsh - terminal</span>
      </div>
      <motion.div {...item(0.0)}>
        <span>
          {prefix}
          <span className={css.command}>~/.local/whoami</span>
        </span>
      </motion.div>
      <motion.div {...item(0.4)}>
        {props.lang === 'en' ? <BioEn /> : <BioJa />}
      </motion.div>
    </motion.section>
  );
}
