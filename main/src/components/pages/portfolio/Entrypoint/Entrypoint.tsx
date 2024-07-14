// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as style from './Entrypoint.css';
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
  }, [lang, animation, page_transition]);

  return (
    <>
      <motion.div
        className={style.center_menu}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.5, duration: 1}}
      >
        <div className={style.outer_0} />
        <div className={style.inner_0} />
        <div className={style.inner_1} />
        <div className={style.inner_2} />

        <div className={style.container}>
          <span className={style.welcome}>Welcome!</span>

          <div className={style.option}>
            <span className={style.label}>Language</span>
            <div className={style.toggle}>
              <Toggle first='ja' second='en' current={lang} set_state={set_lang} />
            </div>
          </div>
          <div className={style.option}>
            <span className={style.label}>Page Transition</span>
            <div className={style.toggle}>
              {IsMobileDevice() ? (
                <span>Off</span>
              ) : (
                <Toggle first='on' second='off' current={page_transition} set_state={set_transition} />
              )}
            </div>
          </div>
          <div className={style.option}>
            <span className={style.label}>Animation</span>
            <div className={style.toggle}>
              <Toggle first='on' second='off' current={animation} set_state={set_animation} />
            </div>
          </div>

          <div
            className={style.continue_button}
            onClick={() => {
              if (animation !== 'off') {
                set_button_clicked(true);
              } else {
                complete();
              }
            }}
          >
            <span>continue</span>
          </div>
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
            className={style.page_transition}
          />
        )}
      </AnimatePresence>
    </>
  );
};
