// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
// @ts-expect-error ??? (FIXME)
import React from 'react';
import IconInstagram from '@assets/icons/Links/instagram.svg';
import IconSoundcloud from '@assets/icons/Links/soundcloud.svg';
import IconTwitter from '@assets/icons/Links/twitter.svg';
import IconGithub from '@assets/icons/Links/github.svg';
import IconScrapbox from '@assets/icons/Links/scrapbox.svg';
import IconBoxOpen from '@assets/icons/Links/box-open.svg';
import IconYouTube from '@assets/icons/Links/youtube.svg';

export type LinkType = 'twitter' | 'instagram' | 'soundcloud' | 'github_repo';

export type LinkRecord = Record<LinkType, JSX.IntrinsicElements['a']>;

export const social_links: LinkRecord = {
  twitter: {
    title: 'Twitter (@Watasuke102)',
    href: 'https://x.com/Watasuke102',
    children: <IconTwitter />,
  },
  instagram: {
    title: 'Instagram (@watasuke102)',
    href: 'https://instagram.com/watasuke102',
    children: <IconInstagram />,
  },
  soundcloud: {
    title: 'SoundCloud (watasuke)',
    href: 'https://soundcloud.com/watasuke',
    children: <IconSoundcloud />,
  },
  github_repo: {
    title: 'GitHub repository',
    href: 'https://github.com/watasuke102/watasuke.net',
    children: <IconGithub />,
  },
};
