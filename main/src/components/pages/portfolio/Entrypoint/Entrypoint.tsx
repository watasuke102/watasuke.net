// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './Entrypoint.css';
import {Toggle} from '@common';
import {AnimatePresence, motion} from 'framer-motion';
import {navigate} from 'gatsby';
import React from 'react';
import {IsMobileDevice} from '@utils/IsMobileDevice';

const blind_width = 60;
const visible_mask = `repeating-linear-gradient(-60deg, #98c379 0px 0px, transparent 0px ${blind_width}px)`;
const invisible_mask = `repeating-linear-gradient(-60deg, #98c379 0px ${blind_width}px, transparent 0px ${blind_width}px)`;

export const Entrypoint = (props: {
  complete: (lang: string, page_transition: boolean, animation: boolean) => void;
}): React.ReactElement => {
  const [button_clicked, set_button_clicked] = React.useState(false);
  const [lang, set_lang] = React.useState('ja');
  const [animation, set_animation] = React.useState('on');
  const [page_transition, set_transition] = React.useState('on');

  const complete = React.useCallback(() => {
    const page_transition_bool = IsMobileDevice() ? false : page_transition !== 'off';
    navigate(`?lang=${lang}&page_transition=${page_transition_bool}&animation=${animation !== 'off'}`);
    props.complete(lang, page_transition_bool, animation !== 'off');
  }, [page_transition, lang, animation, props]);

  return (
    <>
      <motion.div
        className={css.center_menu}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.5, duration: 1}}
      >
        <div className={css.outer_0} />
        <div className={css.inner_0} />
        <div className={css.inner_1} />
        <div className={css.inner_2} />

        <div className={css.container}>
          <span className={css.welcome}>Welcome!</span>

          <div className={css.option}>
            <span className={css.label}>Language</span>
            <div className={css.toggle}>
              <Toggle first='ja' second='en' current={lang} set_state={set_lang} />
            </div>
          </div>
          <div className={css.option}>
            <span className={css.label}>Page Transition</span>
            <div className={css.toggle}>
              {IsMobileDevice() ? (
                <span>Off</span>
              ) : (
                <Toggle first='on' second='off' current={page_transition} set_state={set_transition} />
              )}
            </div>
          </div>
          <div className={css.option}>
            <span className={css.label}>Animation</span>
            <div className={css.toggle}>
              <Toggle first='on' second='off' current={animation} set_state={set_animation} />
            </div>
          </div>

          <button
            className={css.continue_button}
            onClick={() => {
              if (animation !== 'off') {
                set_button_clicked(true);
              } else {
                complete();
              }
            }}
          >
            <span>continue</span>
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {button_clicked && (
          <motion.div
            initial={{background: visible_mask}}
            animate={{background: invisible_mask}}
            // easeOutExpo
            transition={{duration: 0.3, ease: [0.16, 1, 0.3, 1]}}
            onAnimationComplete={complete}
            className={css.page_transition}
          />
        )}
      </AnimatePresence>
    </>
  );
};
