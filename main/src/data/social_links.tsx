// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {JSX} from 'react';
import IconInstagram from '@assets/icons/Links/instagram.svg';
import IconSoundcloud from '@assets/icons/Links/soundcloud.svg';
import IconTwitter from '@assets/icons/Links/twitter.svg';
import IconGithub from '@assets/icons/Links/github.svg';
import IconScrapbox from '@assets/icons/Links/scrapbox.svg';
import IconPresentation from '@assets/icons/Links/presentation.svg';
import IconBoxOpen from '@assets/icons/Links/box-open.svg';

export type LinkType =
  | 'twitter'
  | 'instagram'
  | 'soundcloud'
  | 'google_slide'
  | 'github_account'
  | 'github_repo'
  | 'cosense'
  | 'question_box';

export type LinkRecord = Record<LinkType, JSX.IntrinsicElements['a']>;

const common: JSX.IntrinsicElements['a'] = {
  target: '_blank',
  rel: 'nofollow noopener noreferrer',
};

export const social_links: LinkRecord = {
  twitter: {
    ...common,
    title: 'Twitter (@watasuke1024)',
    href: 'https://x.com/watasuke1024',
    children: <IconTwitter />,
  },
  instagram: {
    ...common,
    title: 'Instagram (@watasuke102)',
    href: 'https://instagram.com/watasuke102',
    children: <IconInstagram />,
  },
  soundcloud: {
    ...common,
    title: 'SoundCloud (watasuke)',
    href: 'https://soundcloud.com/watasuke',
    children: <IconSoundcloud />,
  },
  google_slide: {
    ...common,
    title: 'Google Slide',
    href: 'https://drive.google.com/drive/folders/1Ipm-dngXqPCaEeRm7ES5UM9RnwSm7Hfu?usp=drive_link',
    children: <IconPresentation />,
  },
  github_account: {
    ...common,
    title: 'GitHub account (watasuke102)',
    href: 'https://github.com/watasuke102',
    children: <IconGithub />,
  },
  github_repo: {
    ...common,
    title: 'GitHub repository',
    href: 'https://github.com/watasuke102/watasuke.net',
    children: <IconGithub />,
  },
  cosense: {
    ...common,
    title: 'Cosense',
    href: 'https://cosen.se/watasuke/',
    // TODO: replace icon
    children: <IconScrapbox />,
  },
  question_box: {
    ...common,
    title: 'mond（質問箱）',
    href: 'https://mond.how/ja/Watasuke102',
    children: <IconBoxOpen />,
  },
};
