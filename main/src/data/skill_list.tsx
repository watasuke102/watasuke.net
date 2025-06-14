// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import React from 'react';
import Arch from '@assets/icons/Skills/arch.svg';
import C from '@assets/icons/Skills/c.svg';
import Cmake from '@assets/icons/Skills/cmake.svg';
import Cpp from '@assets/icons/Skills/cpp.svg';
import OpenGL from '@assets/icons/Skills/opengl.svg';
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

type ValidTier = '1' | '2' | '3';

export interface Skill {
  name: string;
  icon?: React.ReactNode;
  tier: ValidTier;
  category: 'Language' | 'FW/Lib' | 'Tool';
  desc: string;
}

interface TierDesc {
  ja: string;
  en: string;
}
export const tier_description: Record<ValidTier, TierDesc> = {
  '1': {
    ja: '使用期間が長い / 頻繁に使う / 好んで使う',
    en: 'Long usage period / Use frequently / Prefer to use',
  },
  '2': {
    ja: '数回使ったことがある / まだわからないことがある',
    en: "Use several times / remains something that I've not understand",
  },
  '3': {
    ja: '経験はあるが自信がない / なにもわからない',
    en: "just experienced but not confident / I've not understand anything",
  },
};

export function gen_skills(lang: 'ja' | 'en'): Skill[] {
  const ja_en = (ja: string, en: string): string => (lang === 'en' ? en : ja);
  return [
    // language
    {
      name: 'C',
      icon: <C />,
      tier: '1',
      category: 'Language',
      desc: ja_en(
        `
最も長い期間触れている言語です
言語仕様はまだあまり深く把握できていません
`,
        `
I use this for the longest time
I still don't have a deep knowledge of language specification
`,
      ),
    },
    {
      name: 'Rust',
      icon: <Rust />,
      tier: '1',
      category: 'Language',
      desc: ja_en(
        `
個人的に最も好きな言語です
match・Result・if式など好きなポイントが豊富
自作OS・DiscordのBot作成・TUIツール開発に使用
`,
        `
My most favorite language
I like match, Result, if expression
For OS, Discord bot, or TUI tool development
`,
      ),
    },
    {
      name: 'TypeScript',
      icon: <TypeScript />,
      tier: '1',
      category: 'Language',
      desc: ja_en(
        `
そこそこ楽に書けるところが良いと思います
基本的にReact.jsを書く際に使用します
`,
        `
I can write this somewhat confortably
basicaly I use this with React.js
Use in backend of TAGether
`,
      ),
    },
    {
      name: '(S)CSS',
      icon: <Sass />,
      tier: '2',
      category: 'Language',
      desc: ja_en(
        '以前 CSS Module を愛用していました',
        'Previously I loved CSS Module',
      ),
    },
    {
      name: 'C++',
      icon: <Cpp />,
      tier: '2',
      category: 'Language',
      desc: ja_en(
        '書けはしますが、言語仕様の1割も理解していません',
        'I can write but my knowledge of this language is less than 10%',
      ),
    },
    {
      name: '日本語',
      tier: '1',
      category: 'Language',
      desc: ja_en('母語です', 'My mother tongue'),
    },
    {
      name: 'English',
      tier: '1',
      category: 'Language',
      desc: ja_en(
        `
TOEFL : 79 [R26, L21, S16, W16] (試験日: 2024-12-21)
TOEIC L&R : 905 [L465, R440] (試験日: 2024-03-17)
TOEIC S&W : 280 [S130, W150] (試験日: 2023-11-14)
`,
        `
TOEFL : 79 [R26, L21, S16, W16] (Exam date: 2024-12-21)
TOEIC L&R : 905 [L465, R440] (Exam date: 2024-03-17)
TOEIC S&W : 280 [S130, W150] (Exam date: 2023-11-14)
`,
      ),
    },
    {
      name: '中文',
      tier: '3',
      category: 'Language',
      desc: ja_en('まだ勉強中です', 'Still studying'),
    },
    {
      name: '한국어',
      tier: '3',
      category: 'Language',
      desc: ja_en('まだ勉強中です', 'Still studying'),
    },
    // framework / library
    {
      name: 'React',
      icon: <ReactIcon />,
      tier: '1',
      category: 'FW/Lib',
      desc: ja_en(
        '基本的にNext.js等と一緒に使っています',
        'Usually I use this with Next.js',
      ),
    },
    {
      name: 'Next.js',
      icon: <Nextjs />,
      tier: '2',
      category: 'FW/Lib',
      desc: ja_en(
        `
このサイトやTAGetherの開発に使用
ルーティング周りが楽で良いです
`,
        `
Used for this site and TAGether
It makes easy to configure about routing
`,
      ),
    },
    {
      name: 'vanilla-extract',
      tier: '1',
      category: 'FW/Lib',
      desc: ja_en(
        '最近のスタイリングはすべてこれを使っています',
        'Recently I use this for all styling',
      ),
    },
    {
      name: 'OpenGL',
      icon: <OpenGL />,
      tier: '2',
      category: 'FW/Lib',
      desc: ja_en('Zwinの開発に使用しました', 'I used OpenGL for Zwin'),
    },
    {
      name: 'Wayland',
      icon: <Wayland />,
      tier: '2',
      category: 'FW/Lib',
      desc: ja_en(
        `
wlrootsを用いてZwinを開発していました
知識はほぼコンポジッタ側のもの
`,
        `
We developed Zwin with wlroots
My knowledge is almost compositor side
`,
      ),
    },
    {
      name: 'Qt',
      icon: <Qt />,
      tier: '3',
      category: 'FW/Lib',
      desc: ja_en(
        'しっかりとしたGUIツールを作りたいときに',
        'For GUI tool developing',
      ),
    },
    {
      name: 'OpenSiv3D',
      tier: '3',
      category: 'FW/Lib',
      desc: ja_en(
        '中学生時代、ゲームやツール開発に使用していました',
        'I used this for game or tool developing at junior high school',
      ),
    },
    {
      name: 'Flutter',
      icon: <Flutter />,
      tier: '3',
      category: 'FW/Lib',
      desc: ja_en(
        `
ExpNoteの開発に使用
かなり好きなライブラリです（最近は使ってませんが）
`,
        `
For ExpNote developing
favorite library (but recently I don't use this)
`,
      ),

      // tool
    },
    {
      name: 'VSCode',
      icon: <VSCode />,
      tier: '1',
      category: 'Tool',
      desc: ja_en(
        `
最強のエディタ
GitLensやRemote Developmentなど、多数の拡張機能に助けられています
`,
        `
Strongest editor
I'm helped by many extensions like GitLens, Remote Development, etc
`,
      ),
    },
    {
      name: '(Neo)vim',
      icon: <Neovim />,
      tier: '1',
      category: 'Tool',
      desc: ja_en(
        `
CUIでファイルを編集する必要が生じた時に
Vimキーバインドそれ自体はVSCodeVimで使用しています
`,
        `
When edit the file on CUI
I usually use vim keybind on VSCode with VSCodeVim
`,
      ),
    },
    {
      name: 'Git',
      icon: <Git />,
      tier: '1',
      category: 'Tool',
      desc: ja_en(
        `
commit, push, fetchといった基本的な動作なら問題なくこなすことができます
`,
        `
I can use basic command such as commit, push, fetch
`,
      ),
    },
    {
      name: 'Linux',
      icon: <Arch />,
      tier: '1',
      category: 'Tool',
      desc: ja_en('Arch Linuxを使っています', 'btw I use arch'),
    },
    {
      name: 'CMake',
      icon: <Cmake />,
      tier: '2',
      category: 'Tool',
      desc: ja_en(
        '複数ファイルからビルドする必要がある場合に',
        'For build from multiple files',
      ),
    },
    {
      name: 'Makefile',
      icon: <File />,
      tier: '2',
      category: 'Tool',
      desc: ja_en(
        `ビルドツールとしてのMakefileは人間が書くものではない
便利コマンドまとめのような使い方をしています
`,
        `
Human should not write Makefile as build tool
Used for command set
`,
      ),
    },
    {
      name: 'MySQL',
      icon: <MySQL />,
      tier: '3',
      category: 'Tool',
      desc: ja_en(
        `
TAGetherのバックエンドとして使用経験あり
初歩的なSQL文を書くことができます
`,
        'Used as TAGether backend',
      ),
    },
    {
      name: 'Docker',
      icon: <Docker />,
      tier: '3',
      category: 'Tool',
      desc: ja_en(
        'Web関連の環境構築に使っています',
        'For web developing environment',
      ),
    },
  ];
}
