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
  retrospring: {
    ...common,
    title: 'Retrospring（質問箱）',
    href: 'https://retrospring.net/@watasuke',
    children: <IconBoxOpen />,
  },
};

export interface LinkDesc {
  ja: string;
  en: string;
}
export const social_links_desc: Record<LinkType, LinkDesc> = {
  twitter: {
    ja: 'メンションもしくはDMに反応します\n（恐らく最速で反応できる連絡手段です）',
    // eslint-disable-next-line quotes
    en: "I'll respond to mention or DM (probably the fastest way to get responses)",
  },
  instagram: {
    ja: 'ときどき写真とか作品とかを上げます',
    en: 'sometimes upload picture or my works',
  },
  soundcloud: {
    ja: '今までに作った曲を投稿しています',
    en: 'my original musics are here',
  },
  google_slide: {
    ja: 'これまでの発表に用いた資料です',
    en: 'Presentation slides which I have used before',
  },
  github_account: {
    ja: 'いろいろつくってます',
    en: 'something I made',
  },
  github_repo: {
    ja: 'このサイトのリポジトリです',
    en: 'repository of this site',
  },
  cosense: {
    ja: '自分語りなどをしています',
    en: 'recounting my own story or thought',
  },
  retrospring: {
    ja: '匿名で質問ができます',
    en: 'you can send me some question',
  },
};
