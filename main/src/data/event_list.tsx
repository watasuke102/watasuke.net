// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.

export interface Date {
  month: number;
  day: number;
}

export type Period =
  | undefined
  | {
      kind: 'day';
      date: Date;
    }
  | {
      kind: 'doing';
      begin: Date;
    }
  | {
      kind: 'period';
      begin: Date;
      end: Date;
    };

export interface Event {
  title_ja: string;
  title_en: string;
  subtitle_ja: string;
  subtitle_en: string;
  period: Period;
  category: 'General' | 'Work' | 'Event' | 'Presentation';
  body_ja: string;
  body_en: string;
}

export const event_list: Record<string, Event[]> = {
  '2019': [
    {
      // U-22への提出日
      period: {kind: 'day', date: {month: 8, day: 15}},
      category: 'Work',
      title_ja: 'MarkStudy',
      title_en: 'MarkStudy',
      subtitle_ja: '学習特化テキストエディタ',
      subtitle_en: 'text editor for study',
      body_ja: `
2019年U-22プロコン応募作品（事前審査落ち）

マークアップ形式でWYSIWYGライクに編集し、単語に重要度を設定し、
非表示にしたり強調したりして復習することができます。

[GitHub](https://github.com/watasuke102/MarkStudy) / 
[Scrapbox](https://scrapbox.io/watasuke/U-22%E3%83%97%E3%83%AD%E3%82%B3%E3%83%B3%EF%BC%9A2019%E5%B9%B4)
`,
      body_en: `
Submitted to 2019 U-22 Programming Contest (lose by a pre-election)

Edit with markup language like WYSIWYG, set importance and hide / emphasize the words.

[GitHub](https://github.com/watasuke102/MarkStudy) / 
[Scrapbox](https://scrapbox.io/watasuke/U-22%E3%83%97%E3%83%AD%E3%82%B3%E3%83%B3%EF%BC%9A2019%E5%B9%B4)
`,
    },
    {
      // "完成" ツイートをした日
      period: {kind: 'day', date: {month: 8, day: 26}},
      category: 'Work',
      title_ja: 'Arduinoで時計を作成する',
      title_en: 'Create the clock by Arduino',
      subtitle_ja: '夏休みの自由研究',
      subtitle_en: 'Research of summer vacation',
      body_ja: `
![完成品](/works/arduino-clock.jpg)

ArduinoでRTCおよびOLEDを制御し、ストップウォッチ機能つきの時計を作成しました。
夏休みの自由研究として学校に提出を行いました。

[開発の様子（Togetter）](https://togetter.com/li/2161192)
`,
      body_en: `
![final product](/works/arduino-clock.jpg)

I created the clock with stopwatch function by controlling RTC and OLED by Arduino.
I also created the report and submitted as research of summer vacation.

[Developing log (JA, Togetter)](https://togetter.com/li/2161192)
`,
    },
    {
      period: {kind: 'day', date: {month: 10, day: 25}},
      category: 'Work',
      title_ja: 'STG',
      title_en: 'STG',
      subtitle_ja: '文化祭用のシューティングゲーム',
      subtitle_en: 'Shooting Game for School festival',
      body_ja: `
![プレイ中のスクリーンショット](/works/schoolfest-stg.jpg)

OpenSiv3Dでグレイズをコンセプトにした弾幕シューティングゲームを作ろうとしていました。

[GitHub](https://github.com/watasuke102/SchoolFestSTG)
`,
      body_en: `
![screenshot of TAGether usage](/works/schoolfest-stg.jpg)

Trying to make Bullet Hell STG with Graze as a concept

[GitHub](https://github.com/watasuke102/SchoolFestSTG)
`,
    },
  ],
  '2020': [
    {
      period: {kind: 'day', date: {month: 4, day: 1}},
      category: 'General',
      title_ja: '高専入学',
      title_en: 'Enter KOSEN',
      subtitle_ja: '情報系の学科',
      subtitle_en: 'Department about information',
      body_ja: '',
      body_en: '',
    },
    {
      // join to Fascode
      period: {kind: 'doing', begin: {month: 5, day: 11}},
      category: 'Work',
      title_ja: 'Alter Linux (i3wm edition)',
      title_en: 'Alter Linux (i3wm edition)',
      subtitle_ja: 'Arch Linuxベースの国産Linuxディストリビューション',
      subtitle_en: 'Arch Linux derived Linux distribution made in Japan',
      body_ja: `
![alterlinux-i3-manager](/works/alterlinux-i3-manager.jpg)
（画像は i3wmエディション用のGUI設定ツール、
[alterlinux-i3-manager](https://github.com/FascodeNet/alterlinux-i3-manager)）

学生団体[FascodeNetwork](https://fascode.net/) に[参加](https://twitter.com/Watasuke102/status/1259835713991802881)し、
Alter Linux i3wmエディションの開発などを行いました。

[GitHub](https://github.com/FascodeNet/alterlinux)
`,
      body_en: `
![alterlinux-i3-manager](/works/alterlinux-i3-manager.jpg)
(This image is [alterlinux-i3-manager](https://github.com/FascodeNet/alterlinux-i3-manager), 
a GUI configuration tool for i3wm edition)

Join [FascodeNetwork](https://fascode.net/) (student organization), and developing Alter Linux i3wm edition.

[GitHub](https://github.com/FascodeNet/alterlinux)
`,
    },
    {
      period: undefined,
      category: 'Work',
      title_ja: 'ExpNote',
      title_en: 'ExpNote',
      subtitle_ja: '簡易的な所持金管理アプリ',
      subtitle_en: 'A simple household account book',
      body_ja: `
![ExpNoteを使用している様子](/works/expnote.jpg)

Flutterを用いて作った所持金管理アプリです。

日付・イベント名・収支を入力すると、全体の収支が分かります。

[GitHub](https://github.com/watasuke102/ExpNote)
`,
      body_en: `
![screenshot of ExpNote usage](/works/expnote.jpg)

Household account book application with Flutter

Add date, event name, and payment amounts to check the total balance.

[GitHub](https://github.com/watasuke102/ExpNote)
`,
    },
    {
      period: {kind: 'day', date: {month: 10, day: 31}},
      category: 'Presentation',
      title_ja: '第1回 限界LT feat.Fascode',
      title_en: '1st 限界LT feat.Fascode',
      subtitle_ja: 'LT「Flutterはいいぞ」',
      subtitle_en: 'LT "Flutterはいいぞ"',
      body_ja: `
ExpNoteの開発を経てFlutterを布教したくなったので、LTで雑に布教しました。

[スライド](https://docs.google.com/presentation/d/1vUuO9ZfyuO-fTv9cP9IfHdoXK1sQzAmNS05QJO-iRq0/edit?usp=share_link)
 / [発表の様子 (YouTube)](https://www.youtube.com/live/LetsnbqNA-U?feature=share&t=12701)
`,
      body_en: `
Lightning Talk to roughly recommend Flutter.

[Slide](https://docs.google.com/presentation/d/1vUuO9ZfyuO-fTv9cP9IfHdoXK1sQzAmNS05QJO-iRq0/edit?usp=share_link)
 / [発表の様子 (YouTube)](https://www.youtube.com/live/LetsnbqNA-U?feature=share&t=12701)
`,
    },
    {
      // initial commit
      period: {kind: 'doing', begin: {month: 12, day: 19}},
      category: 'Work',
      title_ja: 'TAGether',
      title_en: 'TAGether',
      subtitle_ja: 'テスト対策問題の共有サービス',
      subtitle_en: 'Service to share self-made exam',
      body_ja: `
![TAGetherを実際に使用している様子](/works/tagether.jpg)

テスト対策問題を作ってクラス内に共有することが出来るサービスです。

フロントエンドにNext.js、バックエンドにExpress・MySQLを使用して作成しました。

[GitHub](https://github.com/watasuke102/TAGether) / 
[Scrapbox](https://scrapbox.io/watasuke/TAGether)
`,
      body_en: `
![screenshot of TAGether usage](/works/tagether.jpg)

The service makes possible to share self-made exam for classmates.

Use Next.js as frontend, Express / MySQL as backend

[GitHub](https://github.com/watasuke102/TAGether) / 
[Scrapbox](https://scrapbox.io/watasuke/TAGether)
`,
    },
  ],
  '2021': [
    {
      period: {kind: 'day', date: {month: 9, day: 5}},
      category: 'Work',
      title_ja: 'TimeTree-NoticeBot',
      title_en: 'TimeTree-NoticeBot',
      subtitle_ja: 'TimeTreeの予定をDiscordに通知',
      subtitle_en: 'Notify schedule on TimeTree',
      body_ja: `
![TimeTree-NoticeBotからの通知](/works/timetree-noticebot.jpg)

Rustを用いて作成したDiscord用Botです。

TimeTreeからその日の予定を確認し、そのイベントの開始前に指定されたチャンネルに通知します。

[GitHub](https://github.com/watasuke102/TimeTree-NoticeBot-rust)
`,
      body_en: `
![Notice from TimeTree-NoticeBot](/works/timetree-noticebot.jpg)

Discord Bot with Rust.

Check toperiod's schedule in TimeTree and notify by sending a message before the event starts.

[GitHub](https://github.com/watasuke102/TimeTree-NoticeBot-rust)
`,
    },
    {
      period: {kind: 'day', date: {month: 12, day: 5}},
      category: 'Work',
      title_ja: 'discord-voicechat-notice',
      title_en: 'discord-voicechat-notice',
      subtitle_ja: 'VCの様子を通知',
      subtitle_en: 'Notify VC status',
      body_ja: `
![実際のメッセージ](/works/discord-voicechat-notice.jpg)

RustおよびSerenityを用いて作成したDiscord用Botです。

Discordのボイスチャットチャンネルに誰かが入ったり出たりするとメッセージを送信して通知します。

[GitHub](https://github.com/watasuke102/discord-voicechat-notice)
`,
      body_en: `
![actual message](/works/discord-voicechat-notice.jpg)

Discord Bot with Rust + Serenity.

Notify by sending a message when someone joins or leaves the Discord Voice Chat channel.

[GitHub](https://github.com/watasuke102/discord-voicechat-notice)
`,
    },
  ],
  '2022': [
    {
      // 未踏Ad 契約期間
      period: {
        kind: 'period',
        begin: {month: 7, day: 4},
        end: {month: 2, day: 28},
      },
      category: 'Work',
      title_ja: 'Zwin : XR windowing system',
      title_en: 'Zwin : XR windowing system',
      subtitle_ja: '2022年度 未踏アドバンスト事業採択',
      subtitle_en: '2022 Mitou Advanced',
      body_ja: `
![zen: Zwinプロトコルのリファレンス実装](/works/zwin-zen.jpg)

Linux上で動作する、Waylandを用いたXR向けwindowing systemです。
VR HMDを用いて、仮想空間に2Dウィンドウを配置したり、3Dアプリケーションを動かしたりすることが出来ます。

2022年度の未踏アドバンスト事業に採択されました。主に2Dデスクトップ環境において必要とされる機能を実装しています。

[Official site](https://www.zwin.dev/ja) / [GitHub](https://github.com/zwin-project)
`,
      body_en: `
![zen: the reference compositor implementation of Zwin protocol](/works/zwin-zen.jpg)

Windowing system for XR on Linux using Wayland.
By using VR HMD, you can place 2D window in the virtual space and launch 3D application.

Adoped by 2022 Mitou Advanced. I implemented the feature for 2D desktop environment.

[Official site](https://www.zwin.dev) / [GitHub](https://github.com/zwin-project)
`,
    },
    {
      period: {
        kind: 'period',
        begin: {month: 8, day: 8},
        end: {month: 8, day: 12},
      },
      category: 'Event',
      title_ja: 'セキュリティ・キャンプ 全国大会 2022',
      title_en: 'Security Camp 2022',
      subtitle_ja: 'Y4 RISC-V CPU自作ゼミ',
      subtitle_en: 'Y4 RISC-V CPU selfmade seminar',
      body_ja: `
CPU自作ゼミで、RISC-V CPUをFPGA上に実装しました。
講義中はUARTの実装・キャラクタLCDの制御・HDMI出力を行いました。

[GitHub](https://github.com/watasuke102/seccamp_2022_riscv_cpu)
 / [成果報告時に用いたスライド](https://docs.google.com/presentation/d/1jZhWOtsE-aoRW_FdrEXbnvV6VrNH59Q2q-pH8CTHtDc/edit?usp=sharing)
 / [応募課題晒し](https://watasuke.net/blog/article/seccamp-2022-app-publish/)
 / [感想](https://watasuke.net/blog/article/seccamp-2022-app-publish/)
`,
      body_en: `
Implementing RISC-V CPU on FPGA.
I implemented UART, character LCD operation, HDMI output.

[GitHub](https://github.com/watasuke102/seccamp_2022_riscv_cpu)
 / [Slide for final result presentation](https://docs.google.com/presentation/d/1jZhWOtsE-aoRW_FdrEXbnvV6VrNH59Q2q-pH8CTHtDc/edit?usp=sharing)
 / [my application](https://watasuke.net/blog/article/seccamp-2022-app-publish/)
 / [my thoughts (blog)](https://watasuke.net/blog/article/seccamp-2022-app-publish/)
`,
    },
    {
      period: {kind: 'day', date: {month: 8, day: 8}},
      category: 'Presentation',
      title_ja: 'セキュリティ・キャンプ 2022 LT大会',
      title_en: 'Security Camp 2022 LT',
      subtitle_ja: 'LT 「身内限定で自作サービスを公開するのかなり良いよ」',
      subtitle_en: 'LT "身内限定で自作サービスを公開するのかなり良いよ"',
      body_ja: `
セキュリティ・キャンプ 2022のプログラムとしてLT大会が開催され、
そこでTAGetherについて紹介しました。

[スライド](https://docs.google.com/presentation/d/1KDI_VyW8FBDn1HOIMIsVJAuwtDEI6TzFuUhQJHcE-8k/edit?usp=share_link)
`,
      body_en: `
Lightning Talk event is held by Security Camp 2022, and I introduced about TAGether.

[Slide](https://docs.google.com/presentation/d/1KDI_VyW8FBDn1HOIMIsVJAuwtDEI6TzFuUhQJHcE-8k/edit?usp=share_link)
`,
    },
    {
      // プレゼン実施日
      period: {kind: 'day', date: {month: 9, day: 18}},
      category: 'Event',
      title_ja: '技育展 2022',
      title_en: 'Geekten 2022',
      subtitle_ja: 'TAGether / Zwin',
      subtitle_en: 'TAGether / Zwin',
      body_ja: `
「世の中を便利にする」テーマでTAGetherを、「開発/スキル支援」テーマで Zwin （当時ZIGEN）をそれぞれ紹介しました。

Zwinは当該テーマにおいて最優秀賞を獲得しました。
`,
      body_en: `
Introduce TAGether in "Make the world more convenience" theme,
Zwin (ZIGEN at that time) in "Development/Skill assist" theme.

Zwin won at that theme.
`,
    },
  ],
  '2023': [
    {
      period: {
        kind: 'period',
        begin: {month: 2, day: 13},
        end: {month: 2, day: 17},
      },

      category: 'Event',
      title_ja: 'Global Cybersecurity Camp 2023 Singapore',
      title_en: 'Global Cybersecurity Camp 2023 Singapore',
      subtitle_ja: 'チューター',
      subtitle_en: 'Staff',
      body_ja: `
チューターとして参加し、受講生の支援・グループワークのモデレーションを行いました。

[感想](https://watasuke.net/blog/article/gcc2023-attend/)
`,
      body_en: `
Join as staff, and assist student / moderate groupwork.

[my thoughts (blog)](https://watasuke.net/blog/article/gcc2023-attend/)
`,
    },
    {
      period: {
        kind: 'period',
        begin: {month: 3, day: 4},
        end: {month: 4, day: 1},
      },
      category: 'Event',
      title_ja: '台湾留学',
      title_en: 'Internship in Taiwan',
      subtitle_ja: '国立聯合大学',
      subtitle_en: 'National United University',
      body_ja: `
台湾の国立聯合大学に留学し、画像処理に関する研究を行いました。

[開発したもの](https://github.com/watasuke102/measure-vehicle-distance)
 / [感想](https://watasuke.net/blog/article/internship-in-taiwan-nuu/)
`,
      body_en: `
Go to National United University in Taiwan, do the research about Image Processing.

[works](https://github.com/watasuke102/measure-vehicle-distance)
 / [my thoughts (blog)](https://watasuke.net/blog/article/internship-in-taiwan-nuu/)
`,
    },
    {
      period: {
        kind: 'period',
        begin: {month: 8, day: 7},
        end: {month: 8, day: 11},
      },
      category: 'Event',
      title_ja: 'セキュリティ・ネクストキャンプ 2023',
      title_en: 'Security Nextcamp',
      subtitle_ja: '受講生',
      subtitle_en: 'Student',
      body_ja: `
受講生として参加しました。

[応募課題晒し](https://watasuke.net/blog/article/nextcamp-23-app-revealing/)
 / [感想](https://watasuke.net/blog/article/the-end-of-nextcamp-23/)
`,
      body_en: `
I participated as a student.

[my application](https://watasuke.net/blog/article/nextcamp-23-app-revealing/)
 / [my thoughts (blog](https://watasuke.net/blog/article/the-end-of-nextcamp-23/)
`,
    },
    {
      period: {kind: 'day', date: {month: 8, day: 10}},
      category: 'Presentation',
      title_ja: 'セキュリティ・キャンプ 2023 LT大会',
      title_en: 'Security Camp 2023 LT',
      subtitle_ja: 'LT 「watasuke.netを支える技術」',
      subtitle_en: 'LT 「watasuke.netを支える技術」',
      body_ja: `
セキュリティ・キャンプ 2023のLT大会で、watasuke.netについて紹介しました。

[スライド](https://docs.google.com/presentation/d/11Z0c9Mo95BC2r71_lEYe37K3P4eBYsQdOkmdEWlOfd0/edit?usp=sharing)
`,
      body_en: `
Introduced about watasuke.net in the Lightning Talk event held by Security Camp 2023.

[Slide](https://docs.google.com/presentation/d/11Z0c9Mo95BC2r71_lEYe37K3P4eBYsQdOkmdEWlOfd0/edit?usp=sharing)
`,
    },
    {
      period: {
        kind: 'period',
        begin: {month: 8, day: 21},
        end: {month: 9, day: 26},
      },
      category: 'Event',
      title_ja: 'マレーシア留学',
      title_en: 'Internship in Malaysia',
      subtitle_ja: 'マラ工科大学',
      subtitle_en: 'Universiti Teknologi MARA',
      body_ja: 'マラ工科大学でIoTに関する研究を行いました。',
      body_en: 'I did the research about Iot in UiTM.',
    },
    {
      period: {
        kind: 'period',
        begin: {month: 10, day: 21},
        end: {month: 10, day: 22},
      },
      category: 'Event',
      title_ja: 'CAPCOM Hackathon',
      title_en: 'CAPCOM Hackathon',
      subtitle_ja: 'インターンシップ',
      subtitle_en: 'internship',
      body_ja: `
大阪で開催されたCAPCOM Hackathonに参加し、Unityを用いたゲーム開発を行いました。

[感想](https://watasuke.net/blog/article/participated-in-capcom-hackathon/)
`,
      body_en: `
I participated in CAPCOM Hackathon at Osaka, and developed a game using Unity.

[my thoughts (blog)](https://watasuke.net/blog/article/participated-in-capcom-hackathon/)
`,
    },
    {
      period: {
        kind: 'period',
        begin: {month: 11, day: 18},
        end: {month: 11, day: 19},
      },
      category: 'Event',
      title_ja: '宇部高専 第60回高専祭',
      title_en: '60th NITUC Fes',
      subtitle_ja: '広報部長',
      subtitle_en: 'Public Relations Manager',
      body_ja: `
![作成したWebサイト](/works/nituc-fes2023.jpg)

広報部長として高専祭に参加しました。主にロゴ（及びロゴ候補の投票を行うサービス）・ポスター・パンフレット・公式 Web サイト・エンディング映像（及び映像で用いる楽曲）の作成を行いました。

[取り組みの紹介や感想](http://watasuke.net/blog/article/nituc-fes-2023-pr-works/)
`,
      body_en: `
![Website that I created](/works/nituc-fes2023.jpg)

I participated in NITUC Fes as a Public Relations Manager and created a logo (+ its voting system), poster, booklet, official Website, and ending movie (+ its music).

[my works and thoughts (blog)](http://watasuke.net/blog/article/nituc-fes-2023-pr-works/)
`,
    },
  ],
  '2024': [
    {
      period: {kind: 'day', date: {month: 8, day: 30}}, // Tweet date: https://x.com/Watasuke102/status/1829492560295047609
      category: 'Work',
      title_ja: 'Settlang',
      title_en: 'Settlang',
      subtitle_ja: 'プログラミング言語',
      subtitle_en: 'Programming language',
      body_ja: `
![Playground で Settlang のプログラムを実行している様子](/works/settlang.jpg)

mutability を setter の有無で表す静的型付き言語です。

処理系はRustで実装されており、テスト以外でcrate (ライブラリ) を使用していません。コンパイル結果はWebAssemblyとして出力されます。

[Playground](https://watasuke102.github.io/settlang/)
 / [GitHub](https://github.com/watasuke102/settlang)
 / [紹介記事 (Zenn)](https://zenn.dev/watasuke/articles/a188b2dbd25a1f)
`,
      body_en: `
![screenshot of executing Settlang program on the Playground](/works/settlang.jpg)

A statically typed programming language that expresses mutability by whether variables have setters.

The language processor is implemented by Rust without crate. The compiler outputs WebAssembly.

[Playground](https://watasuke102.github.io/settlang/)
 / [GitHub](https://github.com/watasuke102/settlang)
 / [Introductory article (Zenn)](https://zenn.dev/watasuke/articles/a188b2dbd25a1f)
`,
    },
    {
      period: {
        kind: 'period',
        begin: {month: 11, day: 9},
        end: {month: 11, day: 10},
      },
      category: 'Work',
      title_ja: '宇部高専 第61回高専祭',
      title_en: '61th NITUC Fes',
      subtitle_ja: 'Webサイト制作',
      subtitle_en: 'Developing Website',
      body_ja: `
高専祭の公式 Web サイトを作成しました。

[作成したサイト](https://nituc-fes61.org/)
 / [GitHub](https://github.com/watasuke102/nituc-fes2024)
 / [取り組みの紹介や感想](http://watasuke.net/blog/article/nituc-fes-2024-website/)
`,
      body_en: `
I created official Website of NITUC fes.

[Website](https://nituc-fes61.org/)
 / [GitHub](https://github.com/watasuke102/nituc-fes2024)
 / [my works and thoughts (blog)](http://watasuke.net/blog/article/nituc-fes-2024-website/)
`,
    },
    {
      period: {
        kind: 'period',
        begin: {month: 11, day: 14},
        end: {month: 11, day: 15},
      },
      category: 'Event',
      title_ja: 'CODE BLUE 2024',
      title_en: 'CODE BLUE 2024',
      subtitle_ja: '学生スタッフ',
      subtitle_en: 'Student Volunteer',
      body_ja: `
CODE BLUE 2024 に学生スタッフとして参加しました。

[感想](https://watasuke.net/blog/article/codeblue-2024-as-sv/)
`,
      body_en: `
I participated in CODE BLUE 2024 as a Student Volunteer.

[my thoughts (blog)](https://watasuke.net/blog/article/codeblue-2024-as-sv/)
`,
    },
  ],
  '2025': [
    {
      period: {
        kind: 'period',
        begin: {month: 3, day: 5},
        end: {month: 3, day: 14},
      },
      category: 'Event',
      title_ja: 'PIXIV SPRING BOOT CAMP 2025',
      title_en: 'PIXIV SPRING BOOT CAMP 2025',
      subtitle_ja: 'pixiv ウェブエンジニアリングコース',
      subtitle_en: 'pixiv Web Engineering Course',
      body_ja: `
ピクシブ株式会社が開催するインターンシップに参加し、PHPの静的解析や自動リファクタリングに関連したタスクを行いました。

[感想](https://watasuke.net/blog/article/joined-pixiv-spring-internship-2025/)
`,
      body_en: `
I participated in an internship by pixiv Inc. and did the tasks related to static analysis and automatic refactoring of PHP.


[my thoughts (blog)](https://watasuke.net/blog/article/joined-pixiv-spring-internship-2025/)
`,
    },
  ],
};
