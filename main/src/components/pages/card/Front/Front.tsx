// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './Front.css';
import React from 'react';
import IconEnvelope from '@assets/icons/Links/envelope.svg';
import IconGitHub from '@assets/icons/Links/github.svg';
import IconInstagram from '@assets/icons/Links/instagram.svg';
import IconSoundcloud from '@assets/icons/Links/soundcloud.svg';
import IconTwitter from '@assets/icons/Links/twitter.svg';

interface Props {
  hidden: boolean;
}

export function Front(props: Props) {
  return (
    <div className={css.container} style={props.hidden ? {display: 'none'} : {}}>
      <div className={css.avatar_wrapper}>
        <img className={css.avatar} src='/icon.jpg' alt='icon' />
      </div>
      <div className={css.info}>
        <span className={css.name}>わたすけ</span>
        <span className={css.url}>https://watasuke.net</span>

        {/* prettier-ignore */}
        <div className={`${css.icon_and_link} ${css.primary}`}>
          <div><IconEnvelope /></div> <div className={css.separator} /> <span>watasuke102@gmail.com</span>
          <div><IconTwitter /></div>  <div className={css.separator} /> <span>Watasuke102</span>
          <div><IconGitHub /></div>   <div className={css.separator} /> <span>watasuke102</span>
        </div>

        {/* prettier-ignore */}
        <div className={`${css.icon_and_link} ${css.secondary}`}>
          <div><IconInstagram /></div>  <div className={css.separator} /> <span>watasuke102</span>
          <div><IconSoundcloud /></div> <div className={css.separator} /> <span>watasuke</span>
        </div>
      </div>
    </div>
  );
}
