// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as style from './LinkCard.css';
import {BreakWithCR} from '@/common';
import {motion} from 'framer-motion';
import React from 'react';
import {FadeWithScroll} from '@utils/FadeWithScroll';
import IconBoxOpen from '@assets/icons/Links/box-open.svg';
import IconEnvelope from '@assets/icons/Links/envelope.svg';
import IconFilePen from '@assets/icons/Links/file-pen.svg';
import IconGitHub from '@assets/icons/Links/github.svg';
import IconInstagram from '@assets/icons/Links/instagram.svg';
import IconSoundcloud from '@assets/icons/Links/soundcloud.svg';
import IconTwitter from '@assets/icons/Links/twitter.svg';
import IconYouTube from '@assets/icons/Links/youtube.svg';

interface Props {
  title: string;
  url: string;
  icon: string;
  desc: string;
  animation_enabled: boolean;
}

// // FIXME: どうにかならない？これ
function Icon(props: {icon: string}): React.ReactElement {
  switch (props.icon) {
    case 'twitter':
      return <IconTwitter />;
    case 'soundcloud':
      return <IconSoundcloud />;
    case 'github':
      return <IconGitHub />;
    case 'instagram':
      return <IconInstagram />;
    case 'youtube':
      return <IconYouTube />;
    case 'file-pen':
      return <IconFilePen />;
    case 'box-open':
      return <IconBoxOpen />;
    case 'envelope':
      return <IconEnvelope />;
  }
  return <span> [{props.icon}] </span>;
}

export const LinkCard = (props: Props): React.ReactElement => {
  return (
    <motion.a href={props.url} className={style.container} {...(props.animation_enabled ? FadeWithScroll : {})}>
      <div className={style.icon}>
        <Icon icon={props.icon} />
      </div>
      <span className={style.head}>{props.title}</span>
      <span className={style.desc}>
        <BreakWithCR str={props.desc} />
      </span>
    </motion.a>
  );
};
