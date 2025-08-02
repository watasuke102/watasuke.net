// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './Front.css';
import React from 'react';
import {cs} from '@watasuke.net/common';
import IconHouse from '@assets/icons/general/house.svg';
import IconGitHub from '@assets/icons/Links/github.svg';
import IconInstagram from '@assets/icons/Links/instagram.svg';
import IconSoundcloud from '@assets/icons/Links/soundcloud.svg';
import IconTwitter from '@assets/icons/Links/twitter.svg';

interface Props {
  hidden: boolean;
}

export function Front(props: Props) {
  return (
    <div
      className={css.container}
      style={props.hidden ? {display: 'none'} : {}}
    >
      <div className={css.avatar_wrapper}>
        <img className={css.avatar} src='/icon.jpg' alt='icon' />
      </div>
      <div className={css.info}>
        <span className={css.name}>わたすけ</span>
        <span className={css.name_sub}>watasuke</span>

        <hr className={css.hr} />

        <div className={css.icon_and_id}>
          <div className={css.row}>
            <div className={css.icon}>
              <IconHouse />
            </div>
            <span className={cs(css.id, css.link)}>watasuke.net</span>
          </div>
          <div className={css.row}>
            <div className={css.icon}>
              <IconTwitter />
            </div>
            <span className={css.id}>@watasuke1024</span>
          </div>
          <div className={css.row}>
            <div className={css.icon}>
              <IconGitHub /> <IconInstagram />
            </div>
            <span className={css.id}>@watasuke102</span>
          </div>
          <div className={css.row}>
            <div className={css.icon}>
              <IconSoundcloud />
            </div>
            <span className={css.id}>watasuke</span>
          </div>
        </div>
      </div>
    </div>
  );
}
