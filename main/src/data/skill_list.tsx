// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import React from 'react';
import Arch from '@assets/icons/Skills/arch.svg';
import C from '@assets/icons/Skills/c.svg';
import Cmake from '@assets/icons/Skills/cmake.svg';
import Cpp from '@assets/icons/Skills/cpp.svg';
import Docker from '@assets/icons/Skills/docker.svg';
import File from '@assets/icons/Skills/file.svg';
import Flutter from '@assets/icons/Skills/flutter.svg';
import Git from '@assets/icons/Skills/git.svg';
import MySQL from '@assets/icons/Skills/mysql.svg';
import Neovim from '@assets/icons/Skills/neovim.svg';
import Nextjs from '@assets/icons/Skills/nextjs.svg';
import Qt from '@assets/icons/Skills/qt.svg';
import ReactIcon from '@assets/icons/Skills/react-logo.svg';
import Rust from '@assets/icons/Skills/rust.svg';
import Sass from '@assets/icons/Skills/sass.svg';
import TypeScript from '@assets/icons/Skills/typescript.svg';
import VSCode from '@assets/icons/Skills/vscode.svg';
import Wayland from '@assets/icons/Skills/wayland.svg';

export interface Skill {
  name: string;
  icon: React.ReactNode;
  tier: number;
  category: 'Language' | 'FW/Lib' | 'Tool';
  desc_ja: string;
  desc_en: string;
}

interface TierDesc {
  ja: string;
  en: string;
}
export const tier_description: Record<number, TierDesc> = {
  1: {
    ja: '使用期間が長い / 頻繁に使う / 好んで使う',
    en: 'Long usage period / Use frequently / Prefer to use',
  },
  2: {
    ja: '数回使ったことがある / まだわからないことがある',
    // eslint-disable-next-line quotes
    en: "Use several times / remains something that I've not understand",
  },
  3: {
    ja: '経験はあるが自信がない / なにもわからない',
    // eslint-disable-next-line quotes
    en: "just experienced but not confident / I've not understand anything",
  },
};

export const skills: Skill[] = [
  // language
  {
    name: 'C',
    icon: <C />,
    tier: 1,
    category: 'Language',
    desc_ja: `
最も長い期間触れている言語です
言語仕様はまだあまり深く把握できていません
`,
    desc_en: `
I use this for the longest time
I still don't have a deep knowledge of language specification
`,
  },
  {
    name: 'Rust',
    icon: <Rust />,
    tier: 1,
    category: 'Language',
    desc_ja: `
個人的に最も好きな言語です
match・Result・if式など好きなポイントが豊富
自作OS・DiscordのBot作成・TUIツール開発に使用
`,
    desc_en: `
My most favorite language
I like match, Result, if expression
For OS, Discord bot, or TUI tool development
`,
  },
  {
    name: 'TypeScript',
    icon: <TypeScript />,
    tier: 1,
    category: 'Language',
    desc_ja: `
そこそこ楽に書けるところが良いと思います
基本的にReact.jsを書く際に使用します
`,
    desc_en: `
I can write this somewhat confortably
basicaly I use this with React.js
Use in backend of TAGether
`,
  },
  {
    name: '(S)CSS',
    icon: <Sass />,
    tier: 2,
    category: 'Language',
    desc_ja: '以前 CSS Module を愛用していました',
    desc_en: 'Previously I loved CSS Module',
  },
  {
    name: 'C++',
    icon: <Cpp />,
    tier: 2,
    category: 'Language',
    desc_ja: '書けはしますが、言語仕様の1割も理解していません',
    desc_en: 'I can write but my knowledge of this language is less than 10%',

    // framework / library
  },
  {
    name: 'React.js',
    icon: <ReactIcon />,
    tier: 1,
    category: 'FW/Lib',
    desc_ja: '基本的にNext.js等と一緒に使っています',
    desc_en: 'Usually I use this with Next.js',
  },
  {
    name: 'Next.js',
    icon: <Nextjs />,
    tier: 2,
    category: 'FW/Lib',
    desc_ja: `
TAGetherの開発に使用
ルーティング周りが楽で良いです
`,
    desc_en: `
Used for TAGether
It makes easy to configure about routing
`,
  },
  {
    name: 'vanilla-extract',
    icon: <></>,
    tier: 1,
    category: 'FW/Lib',
    desc_ja: '最近のスタイリングはすべてこれを使っています',
    desc_en: 'Recently I use this for all styling',
  },
  {
    name: 'Wayland',
    icon: <Wayland />,
    tier: 2,
    category: 'FW/Lib',
    desc_ja: `
wlrootsを用いてZwinを開発していました
知識はほぼコンポジッタ側のもの
`,
    desc_en: `
We developed Zwin with wlroots
My knowledge is almost compositor side
`,
  },
  {
    name: 'Qt',
    icon: <Qt />,
    tier: 3,
    category: 'FW/Lib',
    desc_ja: 'しっかりとしたGUIツールを作りたいときに',
    desc_en: 'For GUI tool developing',
  },
  {
    name: 'OpenSiv3D',
    icon: <></>,
    tier: 3,
    category: 'FW/Lib',
    desc_ja: '中学生時代、ゲームやツール開発に使用していました',
    desc_en: 'I used this for game or tool developing at junior high school',
  },
  {
    name: 'Gatsby',
    icon: <></>,
    tier: 1,
    category: 'FW/Lib',
    desc_ja: `
このサイトで使用中
速いので好きです
`,
    desc_en: `
Using on this site
I like this because it is fast
`,
  },
  {
    name: 'Flutter',
    icon: <Flutter />,
    tier: 3,
    category: 'FW/Lib',
    desc_ja: `
ExpNoteの開発に使用
かなり好きなライブラリです（最近は使ってませんが）
`,
    desc_en: `
For ExpNote developing
favorite library (but recently I don't use this)
`,

    // tool
  },
  {
    name: 'VSCode',
    icon: <VSCode />,
    tier: 1,
    category: 'Tool',
    desc_ja: `
最強のエディタ
GitLensやRemote Developmentなど、多数の拡張機能に助けられています
`,
    desc_en: `
Strongest editor
I'm helped by many extensions like GitLens, Remote Development, etc
`,
  },
  {
    name: '(Neo)vim',
    icon: <Neovim />,
    tier: 1,
    category: 'Tool',
    desc_ja: `
CUIでファイルを編集する必要が生じた時に
Vimキーバインドそれ自体はVSCodeVimで使用しています
`,
    desc_en: `
When edit the file on CUI
I usually use vim keybind on VSCode with VSCodeVim
`,
  },
  {
    name: 'Git',
    icon: <Git />,
    tier: 1,
    category: 'Tool',
    desc_ja: `
commit, push, fetchといった基本的な動作なら問題なくこなすことができます
`,
    desc_en: `
I can use basic command such as commit, push, fetch
`,
  },
  {
    name: 'Linux',
    icon: <Arch />,
    tier: 1,
    category: 'Tool',
    desc_ja: 'Arch Linuxを使っています',
    desc_en: 'btw I use arch',
  },
  {
    name: 'CMake',
    icon: <Cmake />,
    tier: 2,
    category: 'Tool',
    desc_ja: '複数ファイルからビルドする必要がある場合に',
    desc_en: 'For build from multiple files',
  },
  {
    name: 'Makefile',
    icon: <File />,
    tier: 2,
    category: 'Tool',
    desc_ja: `ビルドツールとしてのMakefileは人間が書くものではない
便利コマンドまとめのような使い方をしています
`,
    desc_en: `
Human should not write Makefile as build tool
Used for command set
`,
  },
  {
    name: 'MySQL',
    icon: <MySQL />,
    tier: 3,
    category: 'Tool',
    desc_ja: `
TAGetherのバックエンドとして使用経験あり
初歩的なSQL文を書くことができます
`,
    desc_en: 'Used as TAGether backend',
  },
  {
    name: 'Docker',
    icon: <Docker />,
    tier: 3,
    category: 'Tool',
    desc_ja: 'Web関連の環境構築に使っています',
    desc_en: 'For web developing environment',
  },
];
