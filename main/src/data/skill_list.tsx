// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import React from 'react';
import Arch from '@assets/icons/Skills/arch.svg';
import C from '@assets/icons/Skills/c.svg';
import Cmake from '@assets/icons/Skills/cmake.svg';
import Cpp from '@assets/icons/Skills/cpp.svg';
import Docker from '@assets/icons/Skills/docker.svg';
import Figma from '@assets/icons/Skills/figma.svg';
import File from '@assets/icons/Skills/file.svg';
import Git from '@assets/icons/Skills/git.svg';
import MySQL from '@assets/icons/Skills/mysql.svg';
import Neovim from '@assets/icons/Skills/neovim.svg';
import Nextjs from '@assets/icons/Skills/nextjs.svg';
import OpenGL from '@assets/icons/Skills/opengl.svg';
import Qt from '@assets/icons/Skills/qt.svg';
import ReactIcon from '@assets/icons/Skills/react-logo.svg';
import Rust from '@assets/icons/Skills/rust.svg';
import Sass from '@assets/icons/Skills/sass.svg';
import TypeScript from '@assets/icons/Skills/typescript.svg';
import VSCode from '@assets/icons/Skills/vscode.svg';
import Wasm from '@assets/icons/Skills/wasm.svg';
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
        '最も長い期間触れている言語です。低めのレイヤを触る際に使用します',
        'I use this for the longest time. I use this for low-layer programming',
      ),
    },
    {
      name: 'Rust',
      icon: <Rust />,
      tier: '1',
      category: 'Language',
      desc: ja_en(
        `
match・Result・if式など好きなポイントが豊富で、最も好きな言語です。
自作OS・DiscordのBot作成・TUIツール開発に使用しています。
`,
        `
My most favorite language because there are many favorite features such as match, Result, if expression.
I use this for OS development, Discord bot, or TUI tool.
`,
      ),
    },
    {
      name: 'TypeScript',
      icon: <TypeScript />,
      tier: '1',
      category: 'Language',
      desc: ja_en(
        '主にWebフロントエンドで使用しています。Denoを用いて簡易的なスクリプトを書くこともあります。',
        'I use this mainly for Web frontend but also for simple scripts with Deno.',
      ),
    },
    {
      name: '(S)CSS',
      icon: <Sass />,
      tier: '2',
      category: 'Language',
      desc: ja_en(
        '以前 CSS Module を愛用していました。このサイトを作成できる程度には理解しています。',
        'Previously I loved CSS Module. I understand it enough to create this site.',
      ),
    },
    {
      name: 'C++',
      icon: <Cpp />,
      tier: '2',
      category: 'Language',
      desc: ja_en(
        `言語仕様やSTLのごく一部を把握しています。Better Cとして利用しています。`,
        `I understand few parts of language specification and STL. I use this as Better C`,
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
        'Next.jsあるいはViteと一緒に使っています。',
        'I use this with Next.js or Vite.',
      ),
    },
    {
      name: 'vanilla-extract',
      tier: '1',
      category: 'FW/Lib',
      desc: ja_en(
        '最近のWebフロントエンド開発はおよそ全てにおいて導入しています',
        'I use this for almost all recent web frontend development',
      ),
    },
    {
      name: 'Next.js',
      icon: <Nextjs />,
      tier: '2',
      category: 'FW/Lib',
      desc: ja_en(
        'このサイトやTAGetherの開発に使用しています。',
        'I use this for this site and TAGether.',
      ),
    },
    {
      name: 'WebAssembly',
      icon: <Wasm />,
      tier: '2',
      category: 'FW/Lib',
      desc: ja_en(
        'Wasmを出力結果とする自作言語 (Settlang) の作成経験があります。',
        'I have experience by creating a programming language that outputs Wasm (Settlang).',
      ),
    },
    {
      name: 'OpenGL',
      icon: <OpenGL />,
      tier: '2',
      category: 'FW/Lib',
      desc: ja_en(
        'Zwinやyazaの開発に使用しました。基本的な描画手法を理解しています。',
        'I used this for Zwin and yaza development. I understand basic rendering techniques.',
      ),
    },
    {
      name: 'Wayland',
      icon: <Wayland />,
      tier: '2',
      category: 'FW/Lib',
      desc: ja_en(
        `
wlrootsを用いてZwinを、Waylandを直接用いてyazaを開発していました。
クライアントというよりはコンポジタ側の知識を持っています。
`,
        `
We developed Zwin with wlroots and yaza with Wayland directly.
My knowledge is not client side but compositor side.
`,
      ),
    },
    {
      name: 'Qt',
      icon: <Qt />,
      tier: '3',
      category: 'FW/Lib',
      desc: ja_en(
        'しっかりとしたGUIツールを作りたいときに利用していました。',
        'I used this for GUI tool developing.',
      ),
    },

    // tool
    {
      name: 'VSCode',
      icon: <VSCode />,
      tier: '1',
      category: 'Tool',
      desc: ja_en(
        'VSCodeVim と併せて、Web開発などに使用しています。',
        'I use this with VSCodeVim for web development and more.',
      ),
    },
    {
      name: '(Neo)vim',
      icon: <Neovim />,
      tier: '1',
      category: 'Tool',
      desc: ja_en(
        'CUIにおける開発の際に利用しています。',
        'I use this for development in CUI.',
      ),
    },
    {
      name: 'Git',
      icon: <Git />,
      tier: '1',
      category: 'Tool',
      desc: ja_en(
        'commit, push, fetchといった基本的な動作や、複数人開発におけるブランチの運用について、実践を踏まえて理解しています。',
        'I have knowledge not only basic operations (such as commit, push, fetch) but also branch management in multi-person development, understood by actual practice.',
      ),
    },
    {
      name: 'Linux',
      icon: <Arch />,
      tier: '1',
      category: 'Tool',
      desc: ja_en(
        'Arch Linux で Hyprland を使っています。VPSやローカルマシンによるサーバー運用も行っています。',
        'btw I use arch (and Hyprland). I also run servers on VPS and local machines.',
      ),
    },
    {
      name: 'Typst',
      tier: '1',
      category: 'Tool',
      desc: ja_en(
        'レポートのような文書を作成する際に利用しています。基本的なスクリプティングについて理解しています。',
        'I use this for creating documents like reports. I understand basic scripting.',
      ),
    },
    {
      name: 'AviUtl',
      tier: '1',
      category: 'Tool',
      desc: ja_en(
        '動画編集に使用しています。モーショングラフィックスを取り入れた映像制作の経験があります。',
        'I use this for video editing. I have experience in creating videos with motion graphics.',
      ),
    },
    {
      name: 'CMake',
      icon: <Cmake />,
      tier: '2',
      category: 'Tool',
      desc: ja_en(
        '自分で以前書いた CMakeLists.txt やドキュメントを参照しつつ CMakeLists.txt の設定を行うことができます。',
        'I can create CMakeLists.txt while referring to the document and the CMakeLists.txt I wrote before.',
      ),
    },
    {
      name: 'Studio One',
      tier: '2',
      category: 'Tool',
      desc: ja_en(
        'Studio One 6 Pro を楽曲制作に使用しています。',
        'I use Studio One 6 Pro to create music.',
      ),
    },
    {
      name: 'Figma',
      icon: <Figma />,
      tier: '2',
      category: 'Tool',
      desc: ja_en(
        '個人開発におけるUIデザインでの使用経験があります。',
        'I use this for UI design in personal projects.',
      ),
    },
    {
      name: 'Illustrator',
      tier: '2',
      category: 'Tool',
      desc: ja_en(
        '高専祭のポスターや各種素材の作成に利用しました。',
        'I used this for creating the poster and some materials for the Kosen fes.',
      ),
    },
    {
      name: 'InDesign',
      tier: '2',
      category: 'Tool',
      desc: ja_en(
        '高専祭のパンフレット作成に利用しました。',
        'I used this for creating the pamphlet for the Kosen fes.',
      ),
    },
    {
      name: 'Makefile',
      icon: <File />,
      tier: '2',
      category: 'Tool',
      desc: ja_en(
        'ビルドツールとしてではなく、コマンドまとめのような使い方をしています。',
        'I use this not as a build tool but as a way to shorthand commands.',
      ),
    },
    {
      name: 'MySQL',
      icon: <MySQL />,
      tier: '3',
      category: 'Tool',
      desc: ja_en(
        'TAGetherのバックエンドとして使用していました。初歩的なSQL文を書くことができます',
        'I used this as TAGether backend. I can write basic SQL statements.',
      ),
    },
    {
      name: 'Docker',
      icon: <Docker />,
      tier: '3',
      category: 'Tool',
      desc: ja_en(
        'Web関連の環境構築に使っています',
        'I use this for web developing environment',
      ),
    },
  ];
}
