// Entrypoint.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT SUSHI-WARE License.
import {AnimatePresence, motion} from 'framer-motion';
import {navigate} from 'gatsby';
import React from 'react';
import {IsMobileDevice} from '@utils/IsMobileDevice';
import './Entrypoint.scss';

const Toggle = (props: {
  first: string;
  second: string;
  current: string;
  set_state: (state: string) => void;
}): React.ReactElement => (
  <div className='portfolio-entrypoint_toggle'>
    <span
      className={'first' + (props.current === props.first ? ' selected' : '')}
      onClick={() => props.set_state(props.first)}
    >
      {props.first}
    </span>
    <span
      className={'second' + (props.current === props.second ? ' selected' : '')}
      onClick={() => props.set_state(props.second)}
    >
      {props.second}
    </span>
  </div>
);

const blind_width = 30;
const visible_mask = `repeating-linear-gradient(-60deg, #98c379 0px 0px, transparent 0px ${blind_width}px)`;
const invisible_mask = `repeating-linear-gradient(-60deg, #98c379 0px ${blind_width}px, transparent 0px ${blind_width}px)`;

export const Entrypoint = (props: {complete: (lang: string, animation: boolean) => void}): React.ReactElement => {
  const [button_clicked, set_button_clicked] = React.useState(false);
  const [lang, set_lang] = React.useState('ja');
  const [animation, set_animation] = React.useState('on');

  const complete = React.useCallback(() => {
    navigate(`?lang=${lang}&animation=${animation !== 'off'}`);
    props.complete(lang, animation !== 'off');
  }, [lang, animation]);

  React.useEffect(() => {
    if (!navigator) {
      return;
    }
    if (IsMobileDevice()) {
      set_animation('off');
    }
  }, []);

  if (!navigator) {
    return <></>;
  }

  return (
    <>
      <div id='portfolio-entrypoint'>
        <motion.div
          className='center_menu'
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 0.5, duration: 1}}
        >
          <div className='outer_0' />
          <div className='inner_0' />
          <div className='inner_1' />
          <div className='inner_2' />

          <div className='container'>
            <span className='welcome'>Welcome!</span>

            <div className='option'>
              <span>Language</span>
              <Toggle first='ja' second='en' current={lang} set_state={set_lang} />
            </div>
            <div className='option'>
              <span>Animation</span>
              <Toggle first='on' second='off' current={animation} set_state={set_animation} />
              {IsMobileDevice() &&
                (lang === 'ja' ? (
                  <span className='device-notice ja'>
                    スマホ等においてアニメーションを有効にすると、 <br />
                    ページ移動など一部が正常に動作しません
                  </span>
                ) : (
                  <span className='device-notice en'>
                    On smartphone, the part of animated portfolio
                    <br />
                    such as page transitions may not work properly
                  </span>
                ))}
            </div>

            <div className='continue_button' onClick={() => set_button_clicked(true)}>
              <span>continue</span>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {button_clicked && (
          <motion.div
            initial={{background: visible_mask}}
            animate={{background: invisible_mask}}
            // easeOutExpo
            transition={{duration: 0.3, ease: [0.16, 1, 0.3, 1]}}
            onAnimationComplete={complete}
            className='portfolio-entrypoint_page_transition'
          />
        )}
      </AnimatePresence>
    </>
  );
};
