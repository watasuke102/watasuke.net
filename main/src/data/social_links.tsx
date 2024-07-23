// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import IconInstagram from '@assets/icons/Links/instagram.svg';
import IconSoundcloud from '@assets/icons/Links/soundcloud.svg';
import IconTwitter from '@assets/icons/Links/twitter.svg';
import IconGithub from '@assets/icons/Links/github.svg';
import IconScrapbox from '@assets/icons/Links/scrapbox.svg';
import IconBoxOpen from '@assets/icons/Links/box-open.svg';

export type LinkType =
  | 'twitter'
  | 'instagram'
  | 'soundcloud'
  | 'github_account'
  | 'github_repo'
  | 'cosense'
  | 'retrospring';

export type LinkRecord = Record<LinkType, JSX.IntrinsicElements['a']>;

const common: JSX.IntrinsicElements['a'] = {
  target: '_blank',
  rel: 'nofollow noopener noreferrer',
};

export const social_links: LinkRecord = {
  twitter: {
    ...common,
    title: 'Twitter (@Watasuke102)',
    href: 'https://x.com/Watasuke102',
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
  github_account: {
    ...common,
    title: 'GitHub account (watasuke102)',
    href: 'https://github.com/watasuke102/watasuke.net',
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
  retrospring: {
    ...common,
    title: 'Retrospring（質問箱）',
    href: 'https://retrospring.net/@watasuke',
    children: <IconBoxOpen />,
  },
};
