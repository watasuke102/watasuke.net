// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
export const WorkCategoryArray = [
  'Pickup',
  'Website',
  'Web App',
  'Tool',
  'Music',
  'Other',
] as const; // order sensitive!
export type WorkCategory = (typeof WorkCategoryArray)[number];

export interface Work {
  title: (lang: 'ja' | 'en') => string;
  category: WorkCategory[];
  load_initially: boolean;
  img: string | null;
  tags: {
    kind: 'lang' | 'fw/lib' | 'tool' | 'other';
    name: string;
  }[];
  desc_md: (lang: 'ja' | 'en') => string;
}

function ja_en(ja: string, en: string): (lang: 'ja' | 'en') => string {
  return (lang: 'ja' | 'en') => (lang === 'en' ? en : ja);
}

export const work_list = {
  watasukenet: {
    title: () => 'watasuke.net',
    category: ['Pickup', 'Website'],
    load_initially: true,
    img: '/works/watasukenet.jpg',
    tags: [
      {kind: 'lang', name: 'TypeScript'},
      {kind: 'fw/lib', name: 'React'},
      {kind: 'fw/lib', name: 'Next.js'},
      {kind: 'fw/lib', name: 'vanilla-extract'},
    ],
    desc_md: ja_en(
      `
テスト対策問題を作ってクラス内に共有することが出来るサービスです。

フロントエンドにNext.js、バックエンドにExpress・MySQLを使用して作成しました。
`,
      `
The service makes possible to share self-made exam for classmates.

Use Next.js as frontend, Express / MySQL as backend
`,
    ),
  },
  tagether: {
    title: () => 'TAGether',
    category: ['Pickup', 'Web App'],
    load_initially: true,
    img: '/works/tagether/thumbnail.jpg',
    tags: [
      {kind: 'lang', name: 'TypeScript'},
      {kind: 'fw/lib', name: 'React'},
      {kind: 'fw/lib', name: 'Next.js'},
      {kind: 'fw/lib', name: 'vanilla-extract'},
    ],
    desc_md: ja_en(
      `
テスト対策問題を作ってクラス内に共有することが出来るサービスです。

フロントエンドにNext.js、バックエンドにExpress・MySQLを使用して作成しました。

[GitHub](https://github.com/watasuke102/TAGether) / [Scrapbox](https://scrapbox.io/watasuke/TAGether)
`,
      `
The service makes possible to share self-made exam for classmates.

Use Next.js as frontend, Express / MySQL as backend

[GitHub](https://github.com/watasuke102/TAGether) / [Scrapbox](https://scrapbox.io/watasuke/TAGether)
`,
    ),
  },
  settlang: {
    title: () => 'Settlang',
    category: ['Pickup', 'Other'],
    load_initially: true,
    img: '/works/settlang/thumbnail.jpg',
    tags: [
      {kind: 'lang', name: 'Rust'},
      {kind: 'other', name: 'Wasm'},
    ],
    desc_md: ja_en(
      `
mutability を setter の有無で表す静的型付き言語です。

処理系はRustで実装されており、テスト以外でcrate (ライブラリ) を使用していません。コンパイル結果はWebAssemblyとして出力されます。

[Playground](https://watasuke102.github.io/settlang/)
 / [GitHub](https://github.com/watasuke102/settlang)
 / [紹介記事 (Zenn)](https://zenn.dev/watasuke/articles/a188b2dbd25a1f)
`,
      `
A statically typed programming language that expresses mutability by whether variables have setters.

The language processor is implemented by Rust without crate. The compiler outputs WebAssembly.

[Playground](https://watasuke102.github.io/settlang/)
 / [GitHub](https://github.com/watasuke102/settlang)
 / [Introductory article (Zenn)](https://zenn.dev/watasuke/articles/a188b2dbd25a1f)
`,
    ),
  },
  zwin: {
    title: () => 'Zwin : XR windowing system',
    category: ['Pickup', 'Other'],
    load_initially: true,
    img: '/works/zwin-zen.jpg',
    tags: [
      {kind: 'lang', name: 'C'},
      {kind: 'fw/lib', name: 'Wayland'},
    ],
    desc_md: ja_en(
      `
Linux上で動作する、Waylandを用いたXR向けwindowing systemです。
VR HMDを用いて、仮想空間に2Dウィンドウを配置したり、3Dアプリケーションを動かしたりすることが出来ます。

2022年度の未踏アドバンスト事業に採択されました。主に2Dデスクトップ環境において必要とされる機能を実装しています。

[Official site](https://www.zwin.dev/ja) / [GitHub](https://github.com/zwin-project)
`,
      `
Windowing system for XR on Linux using Wayland.
By using VR HMD, you can place 2D window in the virtual space and launch 3D application.

Adoped by 2022 Mitou Advanced. I implemented the feature for 2D desktop environment.

[Official site](https://www.zwin.dev) / [GitHub](https://github.com/zwin-project)
`,
    ),
  },
  nituc_fes2023: {
    title: ja_en('宇部高専 第60回高専祭', '60th NITUC Fes'),
    category: ['Pickup', 'Website', 'Music'],
    load_initially: true,
    img: '/works/nituc-fes2023.jpg',
    tags: [
      {kind: 'lang', name: 'TypeScript'},
      {kind: 'fw/lib', name: 'Gatsby'},
      {kind: 'tool', name: 'InDesign'},
      {kind: 'tool', name: 'Illustrator'},
      {kind: 'tool', name: 'AviUtl'},
      {kind: 'tool', name: 'Cubase'},
    ],
    desc_md: ja_en(
      `
広報部長として高専祭に参加しました。主にロゴ（及びロゴ候補の投票を行うサービス）・ポスター・パンフレット・公式 Web サイト・エンディング映像（及び映像で用いる楽曲）の作成を行いました。

[取り組みの紹介や感想](http://watasuke.net/blog/article/nituc-fes-2023-pr-works/)
`,
      `
I participated in NITUC Fes as a Public Relations Manager and created a logo (+ its voting system), poster, booklet, official Website, and ending movie (+ its music).

[my works and thoughts (blog)](http://watasuke.net/blog/article/nituc-fes-2023-pr-works/)
`,
    ),
  },
  nituc_fes2024: {
    title: ja_en('宇部高専 第61回高専祭 Webサイト', '61st NITUC Fes Website'),
    category: ['Website'],
    load_initially: true,
    img: null,
    tags: [
      {kind: 'lang', name: 'TypeScript'},
      {kind: 'fw/lib', name: 'Gatsby'},
    ],
    desc_md: ja_en(
      `
高専祭の公式 Web サイトを作成しました。

[作成したサイト](https://nituc-fes61.org/)
 / [GitHub](https://github.com/watasuke102/nituc-fes2024)
 / [取り組みの紹介や感想](http://watasuke.net/blog/article/nituc-fes-2024-website/)
`,
      `
I created official Website of NITUC fes.

[Website](https://nituc-fes61.org/)
 / [GitHub](https://github.com/watasuke102/nituc-fes2024)
 / [my works and thoughts (blog)](http://watasuke.net/blog/article/nituc-fes-2024-website/)
`,
    ),
  },
  alterlinux: {
    title: () => 'Alter Linux (i3wm edition)',
    category: ['Other'],
    load_initially: true,
    img: null,
    tags: [
      {kind: 'lang', name: 'Shell'},
      {kind: 'lang', name: 'C++'},
      {kind: 'fw/lib', name: 'Qt'},
      {kind: 'other', name: 'Linux'},
    ],
    desc_md: ja_en(
      `
![alterlinux-i3-manager](/works/alterlinux-i3-manager.jpg)
（画像は i3wmエディション用のGUI設定ツール、
[alterlinux-i3-manager](https://github.com/FascodeNet/alterlinux-i3-manager)）

学生団体[FascodeNetwork](https://fascode.net/) に[参加](https://twitter.com/Watasuke102/status/1259835713991802881)し、
Alter Linux i3wmエディションの開発などを行いました。

[GitHub](https://github.com/FascodeNet/alterlinux)
`,
      `
![alterlinux-i3-manager](/works/alterlinux-i3-manager.jpg)
(This image is [alterlinux-i3-manager](https://github.com/FascodeNet/alterlinux-i3-manager), 
a GUI configuration tool for i3wm edition)

Join [FascodeNetwork](https://fascode.net/) (student organization), and developing Alter Linux i3wm edition.

[GitHub](https://github.com/FascodeNet/alterlinux)
`,
    ),
  },
  // --------------------------------------------
  expnote: {
    title: () => 'ExpNote',
    category: ['Tool'],
    load_initially: false,
    img: '/works/expnote.jpg',
    tags: [
      {kind: 'lang', name: 'Dart'},
      {kind: 'fw/lib', name: 'Flutter'},
    ],
    desc_md: ja_en(
      `
![ExpNoteを使用している様子](/works/expnote.jpg)

Flutterを用いて作った所持金管理アプリです。

日付・イベント名・収支を入力すると、全体の収支が分かります。

[GitHub](https://github.com/watasuke102/ExpNote)
`,
      `
![screenshot of ExpNote usage](/works/expnote.jpg)

Household account book application with Flutter

Add date, event name, and payment amounts to check the total balance.

[GitHub](https://github.com/watasuke102/ExpNote)
`,
    ),
  },
  discord_voicechat_notice: {
    title: () => 'discord-voicechat-notice',
    category: ['Tool'],
    load_initially: false,
    img: '/works/discord-voicechat-notice.jpg',
    tags: [
      {kind: 'lang', name: 'Rust'},
      {kind: 'fw/lib', name: 'Serenity'},
    ],
    desc_md: ja_en(
      `
RustおよびSerenityを用いて作成したDiscord用Botです。

Discordのボイスチャットチャンネルに誰かが入ったり出たりするとメッセージを送信して通知します。

[GitHub](https://github.com/watasuke102/discord-voicechat-notice)
`,
      `
![actual message](/works/discord-voicechat-notice.jpg)

Discord Bot with Rust + Serenity.

Notify by sending a message when someone joins or leaves the Discord Voice Chat channel.

[GitHub](https://github.com/watasuke102/discord-voicechat-notice)
`,
    ),
  },
  timetree_noticebot: {
    title: () => 'TimeTree-NoticeBot',
    category: ['Tool'],
    load_initially: false,
    img: '/works/timetree-noticebot.jpg',
    tags: [{kind: 'lang', name: 'Rust'}],
    desc_md: ja_en(
      `
![TimeTree-NoticeBotからの通知](/works/timetree-noticebot.jpg)

Rustを用いて作成したDiscord用Botです。

TimeTreeからその日の予定を確認し、そのイベントの開始前に指定されたチャンネルに通知します。

[GitHub](https://github.com/watasuke102/TimeTree-NoticeBot-rust)
`,
      `
![Notice from TimeTree-NoticeBot](/works/timetree-noticebot.jpg)

Discord Bot with Rust.

Check toperiod's schedule in TimeTree and notify by sending a message before the event starts.

[GitHub](https://github.com/watasuke102/TimeTree-NoticeBot-rust)
`,
    ),
  },
  arduino_clock: {
    title: ja_en('Arduinoで時計を作成する', 'Create the clock by Arduino'),
    category: ['Tool'],
    load_initially: false,
    img: '/works/arduino-clock.jpg',
    tags: [{kind: 'tool', name: 'Arduino'}],
    desc_md: ja_en(
      `
ArduinoでRTCおよびOLEDを制御し、ストップウォッチ機能つきの時計を作成しました。
夏休みの自由研究として学校に提出を行いました。

[開発の様子（Togetter）](https://togetter.com/li/2161192)
`,
      `
I created the clock with stopwatch function by controlling RTC and OLED by Arduino.
I also created the report and submitted as research of summer vacation.

[Developing log (JA, Togetter)](https://togetter.com/li/2161192)
`,
    ),
  },
  markstudy: {
    title: () => 'MarkStudy',
    category: ['Tool'],
    load_initially: false,
    img: null,
    tags: [
      {kind: 'lang', name: 'C++'},
      {kind: 'fw/lib', name: 'OpenSiv3D'},
    ],
    desc_md: ja_en(
      `
2019年U-22プロコン応募作品（事前審査落ち）

マークアップ形式でWYSIWYGライクに編集し、単語に重要度を設定し、
非表示にしたり強調したりして復習することができます。

[GitHub](https://github.com/watasuke102/MarkStudy) / 
[Scrapbox](https://scrapbox.io/watasuke/U-22%E3%83%97%E3%83%AD%E3%82%B3%E3%83%B3%EF%BC%9A2019%E5%B9%B4)
`,
      `
Submitted to 2019 U-22 Programming Contest (lose by a pre-election)

Edit with markup language like WYSIWYG, set importance and hide / emphasize the words.

[GitHub](https://github.com/watasuke102/MarkStudy) / 
[Scrapbox](https://scrapbox.io/watasuke/U-22%E3%83%97%E3%83%AD%E3%82%B3%E3%83%B3%EF%BC%9A2019%E5%B9%B4)
`,
    ),
  },
  school_fest_stg: {
    title: () => 'STG',
    category: ['Other'],
    load_initially: false,
    img: '/works/schoolfest-stg.jpg',
    tags: [
      {kind: 'lang', name: 'C++'},
      {kind: 'fw/lib', name: 'OpenSiv3D'},
    ],
    desc_md: ja_en(
      `
OpenSiv3Dでグレイズをコンセプトにした弾幕シューティングゲームを作ろうとしていました。

[GitHub](https://github.com/watasuke102/SchoolFestSTG)
`,
      `
Trying to make Bullet Hell STG with Graze as a concept

[GitHub](https://github.com/watasuke102/SchoolFestSTG)
`,
    ),
  },
} satisfies Record<string, Work>;
