// LinkCard.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT SUSHI-WARE License.
import {motion} from 'framer-motion';
import React from 'react';
import {FadeWithScroll} from '@utils/FadeWithScroll';
import './LinkCard.scss';
import IconBoxOpen from '@assets/icons/box-open.svg';
import IconEnvelope from '@assets/icons/envelope.svg';
import IconFilePen from '@assets/icons/file-pen.svg';
import IconGitHub from '@assets/icons/github.svg';
import IconSoundcloud from '@assets/icons/soundcloud.svg';
import IconTwitter from '@assets/icons/twitter.svg';
import IconYouTube from '@assets/icons/youtube.svg';

interface Props {
  title: string;
  url: string;
  icon: string;
  desc: string;
}

// // FIXME: どうにかならない？これ
function Icon(props: {icon: string}): React.ReactElement {
  let src = '';
  switch (props.icon) {
    case 'twitter':
      src = IconTwitter;
      break;
    case 'soundcloud':
      src = IconSoundcloud;
      break;
    case 'github':
      src = IconGitHub;
      break;
    case 'youtube':
      src = IconYouTube;
      break;
    case 'file-pen':
      src = IconFilePen;
      break;
    case 'box-open':
      src = IconBoxOpen;
      break;
    case 'envelope':
      src = IconEnvelope;
      break;
  }
  return <img alt={props.icon} src={src} />;
}

export const LinkCard = (props: Props): React.ReactElement => {
  return (
    <motion.a href={props.url} className='LinkCard_container' {...FadeWithScroll}>
      <div className='icon'>
        <Icon icon={props.icon} />
      </div>
      <span className='head'>{props.title}</span>
      <p className='desc'>
        {props.desc.split('\n').map(s => (
          <>
            {s}
            <br />
          </>
        ))}
      </p>
    </motion.a>
  );
};
