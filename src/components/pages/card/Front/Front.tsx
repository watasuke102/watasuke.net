// Front.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as style from './Front.css';
import React from 'react';
import IconEnvelope from '@assets/icons/Links/envelope.svg';
import IconGitHub from '@assets/icons/Links/github.svg';
import IconInstagram from '@assets/icons/Links/instagram.svg';
import IconSoundcloud from '@assets/icons/Links/soundcloud.svg';
import IconTwitter from '@assets/icons/Links/twitter.svg';
import IconYouTube from '@assets/icons/Links/youtube.svg';

interface Props {
  hidden: boolean;
}

export function Front(props: Props): React.ReactElement {
  return (
    <div className={style.container} style={props.hidden ? {display: 'none'} : {}}>
      <div className={style.avatar_wrapper}>
        {/* <StaticImage className={style.avatar} loading='eager' placeholder='none' src='../../../../assets/icon.jpg' alt='icon' /> */}
        <img className={style.avatar} src='/icon.jpg' />
      </div>
      <div className={style.info}>
        <span className={style.name}>わたすけ</span>
        <span className={style.url}>https://watasuke.net</span>

        {/* prettier-ignore */}
        <div className={`${style.icon_and_link} ${style.primary}`}>
          <div><IconEnvelope /></div> <div className={style.separator} /> <span>watasuke102@gmail.com</span>
          <div><IconTwitter /></div>  <div className={style.separator} /> <span>Watasuke102</span>
          <div><IconGitHub /></div>   <div className={style.separator} /> <span>watasuke102</span>
        </div>

        {/* prettier-ignore */}
        <div className={`${style.icon_and_link} ${style.secondary}`}>
          <div><IconInstagram /></div>  <div className={style.separator} /> <span>watasuke102</span>
          <div><IconSoundcloud /></div> <div className={style.separator} /> <span>watasuke</span>
          <div><IconYouTube /></div>    <div className={style.separator} /> <span>watasuke</span>
        </div>
      </div>
    </div>
  );
}
