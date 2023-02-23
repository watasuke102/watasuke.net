// Entrypoint.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT SUSHI-WARE License.
import {motion} from 'framer-motion';
import React from 'react';
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

export const Entrypoint = (props: {complete: (lang: string, animation: string) => void}): React.ReactElement => {
  const [lang, set_lang] = React.useState('ja');
  const [animation, set_animation] = React.useState('on');

  const complete = React.useCallback(() => {
    navigate(`?lang=${lang}&animation=${animation !== 'off'}`);
    props.complete(lang, animation);
  }, [lang, animation]);

  return (
    <motion.div
      id='portfolio-entrypoint'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{delay: 1, duration: 1}}
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
        </div>

        <div className='continue_button'>
          <span>continue</span>
        </div>
      </div>
    </motion.div>
  );
};
