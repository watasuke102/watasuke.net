// Entrypoint.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT SUSHI-WARE License.
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

export const Entrypoint = (): React.ReactElement => {
  const [lang, set_lang] = React.useState('ja');
  const [animation, set_animation] = React.useState('on');

  return (
    <div id='portfolio-entrypoint'>
      <div className='circle' />
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
    </div>
  );
};
