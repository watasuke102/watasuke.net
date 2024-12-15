// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './LinkCard.css';
import {motion} from 'framer-motion';
import React from 'react';
import {FadeWithScroll} from '@utils/FadeWithScroll';

interface Props {
  title: string;
  url: string;
  icon: React.ReactNode;
  desc: string;
  animation_enabled: boolean;
}

export function LinkCard(props: Props): JSX.Element {
  return (
    <motion.a
      href={props.url}
      target='_blank'
      rel='nofollow noopener noreferrer'
      className={css.outer}
      {...(props.animation_enabled ? FadeWithScroll : {})}
    >
      <div className={css.inner}>
        <div className={css.icon}>{props.icon}</div>
        <span className={css.head}>{props.title}</span>
        <span className={css.desc}>{props.desc}</span>
      </div>
    </motion.a>
  );
}
