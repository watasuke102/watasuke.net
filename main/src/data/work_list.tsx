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
  'Video',
  'Other',
] as const; // order sensitive!
export type WorkCategory = (typeof WorkCategoryArray)[number];

export interface Work {
  title: (lang: 'ja' | 'en') => string;
  category: WorkCategory[];
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
function soundcloud(id: number) {
  return `<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay"
    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${id}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
  ></iframe>`;
}

export type WorkListKey = keyof typeof work_list;
export const work_list = {
  watasukenet: {
    title: () => 'watasuke.net',
    category: ['Pickup', 'Website'],
    img: '/works/watasuke.net/thumbnail.jpg',
    tags: [
      {kind: 'lang', name: 'TypeScript'},
      {kind: 'fw/lib', name: 'React'},
      {kind: 'fw/lib', name: 'Next.js'},
      {kind: 'fw/lib', name: 'vanilla-extract'},
    ],
    desc_md: ja_en(
      `
このサイトです。ブログによる情報発信や、プロフィール、ポートフォリオを公開するために作成しました。以前はWordPressでブログを書いていましたが、なんとなく自作したかったので自作しました。2021年4月に公開してから、今に至るまでずっと開発し続けています。

ホームページ本体はTypeScript・Next.jsで作成しています。初めはReactのSSGフレームワークとして高速に動作するGatsbyを選択していたのですが、開発が停滞していることから、2024年7月ごろにNext.jsにリプレースしました。

ブログ記事を管理するCMSとして、以前はStrapiを使用していましたが、2023年末にRustで自作したものに移行しました。リアルタイムプレビューが出来るエディタも搭載しています。

![ブログ記事エディタ](/works/watasuke.net/editor.jpg)

[GitHub](https://github.com/watasuke102/watasuke.net)
`,
      `
This site. I created it to publish blog posts, profile, and portfolio. I used to write blog posts with WordPress, but I wanted to create my own, so I made it. Since its release in April 2021, I have been developing it continuously.

The homepage itself is made with TypeScript and Next.js. Initially, I chose Gatsby, a fast SSG framework for React, but I replaced it with Next.js around July 2024 due to its stagnation in development.

Previously I used Strapi as a CMS to manage blog articles, but I migrated to my own CMS written Rust at the end of 2023. It also has an editor with real-time preview.

![blog article editor](/works/watasuke.net/editor.jpg)

[GitHub](https://github.com/watasuke102/watasuke.net)
`,
    ),
  },
  tagether: {
    title: () => 'TAGether',
    category: ['Pickup', 'Web App'],
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

問題を解いている様子：

![問題解答ページのスクリーンショット](/works/tagether/solve.jpg)

問題を編集している様子：

![問題編集ページのスクリーンショット](/works/tagether/edit.jpg)

高専 1 年の秋、英語の単語テスト対策として、WordHolic というアプリにインポートできる英単語の csv を作成して Google ドライブで配布していました。しかし、配布したものをインポートした後に誤字・脱字が発覚した際、訂正を各自で行ってもらわなければならず、不便でした。そこで、一問一答形式の問題を作成して共有できるサービスを作成することで解決できるのでは、と考えました。

開発開始から 1 ヶ月でリリースし、5 年次まで 4 年以上にわたって運営しました。自ら利用して改善点を見つけるだけでなく、サービス内に機能要望フォームを設置して 50 件以上の意見を集めたり、クラスメイトにヒアリングを行ったりして、様々な点を改善しながらサービスの質を向上させ続けました。

フロントエンドにNext.jsを利用しています。バックエンドは初期のみPHPで開発し、後にJavaScript+Expressに移行し、最終的にNext.jsのApi Routeを利用して開発しました。データベースにはMySQLを利用しています。

- [GitHub](https://github.com/watasuke102/TAGether)
- [Cosense](https://cosen.se/watasuke/TAGether)
`,
      `
The service makes possible to share self-made exam for classmates.

The scene of solving exam:

![screenshot of exam solve page](/works/tagether/solve.jpg)

The scene of editing exam:

![screenshot of exam edit page](/works/tagether/edit.jpg)

In the fall of my first grade at Kosen, I created a CSV file of English vocabulary words that can be imported into smartphone app "WordHolic" for the exam preparation of English subject, and distributed it via Google Drive. However, when typos or omissions were discovered, people who had imported the distributed file had to fix by themselves, so I thought it was inconvenient. Therefore, I thought that creating a service that could create and share exam in a Q&A format could solve this problem.

I released this a month after started development and have operated for over four years until the fifth grade (the year of graduation). I not only found improvements by using it myself, but also collected over 50 opinions by setting up a feature request page in the service and conducting interviews with classmates, continuously improving the quality of the service.

Frontend is developed with Next.js. Backend was initially developed in PHP, later migrated to JavaScript + Express, and finally implemented using Next.js API Route. Database is MySQL.

- [GitHub](https://github.com/watasuke102/TAGether)
- [Cosense](https://cosen.se/watasuke/TAGether)
`,
    ),
  },
  settlang: {
    title: () => 'Settlang',
    category: ['Pickup', 'Other'],
    img: '/works/settlang/thumbnail.jpg',
    tags: [
      {kind: 'lang', name: 'Rust'},
      {kind: 'other', name: 'Wasm'},
    ],
    desc_md: ja_en(
      `
mutability を setter の有無で表す静的型付き言語です。

処理系はRustで実装されており、テスト以外でcrate (ライブラリ) を使用していません。コンパイル結果はWebAssemblyとして出力されます。これらにより、すべての処理をWebブラウザで完結させることができるため、コンパイラなどをWasmとして出力し、Viteで読み込んで実行するPlaygroundを作成して、GitHub Pagesで公開しています。

playgroundでコードを実行している様子：

![Settlang Playground](/works/settlang/playground.jpg)

- [Playground](https://watasuke102.github.io/settlang/)
- [GitHub](https://github.com/watasuke102/settlang)
- [紹介記事 (Zenn)](https://zenn.dev/watasuke/articles/a188b2dbd25a1f)
`,
      `
A statically typed programming language that expresses mutability by whether variables have setters.

The language processor is implemented by Rust without crate (except for the test). The compiler outputs WebAssembly. With these features, all processes can be completed in the Web browser, so I created playground that loads the compiler built as Wasm with Vite, and published it on GitHub Pages.

The scene of executing code in the playground:

![Settlang Playground](/works/settlang/playground.jpg)

- [Playground](https://watasuke102.github.io/settlang/)
- [GitHub](https://github.com/watasuke102/settlang)
- [Introductory article (Zenn)](https://zenn.dev/watasuke/articles/a188b2dbd25a1f)
`,
    ),
  },
  yaza: {
    title: () => 'yaza',
    category: ['Other'],
    img: '/works/yaza.jpg',
    tags: [
      {kind: 'lang', name: 'C++'},
      {kind: 'lang', name: 'C#'},
      {kind: 'fw/lib', name: 'OpenGL'},
      {kind: 'fw/lib', name: 'Wayland'},
      {kind: 'tool', name: 'Unity'},
    ],
    desc_md: ja_en(
      `
![yazaのスクリーンショット](/works/yaza.jpg)

XRREAL Air 2用のwindowing systemです。termux等で起動した2D/3DアプリケーションをXREAL Air 2によって仮想空間上に表示し、自由に配置できます。

高専の卒業研究として開発しました。未踏アドバンスト事業で開発したZwinのプロトコルを利用しています。

コンポジタはC++およびWaylandを用いて開発しました。コンポジタはアプリケーションからテクスチャや頂点情報を受け取り、zwin-projectのライブラリであるzen-remoteを用いてディスプレイシステムへそれらを転送します。ディスプレイシステムはUnityおよびNRSDKで開発されており、C++およびOpenGLを用いて開発したプラグインをC#で読み込んでウィンドウなどの描画を行います。

- [コンポジタ 'yaza' のGitHubリポジトリ](https://github.com/watasuke102/yaza)
- [ディスプレイシステム 'zen-mirror-xreal' のGitHubリポジトリ](https://github.com/watasuke102/zen-mirror-xreal)
`,
      `
A windowing system for XRREAL Air 2. It makes possible to display 2D/3D applications in the virtual space created by XREAL Air 2, and place them freely.

I developed it as my graduation research at Kosen. It uses the protocol developed in Zwin, which was developed in Mitou Advanced.

I developed the compositor with C++ and Wayland. The compositor receives information such as textures and vertex data from applications, and transfers them to the display system using zen-remote, a library of zwin-project. I developed the display system with Unity and NRSDK. Information such as window is drawn by a plugin, which is developed with C++ and OpenGL and is loaded by C#.

- [GitHub repository of the compositor 'yaza'](https://github.com/watasuke102/yaza)
- [GitHub repository of the display system 'zen-mirror-xreal'](https://github.com/watasuke102/zen-mirror-xreal)
      `,
    ),
  },
  zwin: {
    title: () => 'Zwin : XR windowing system',
    category: ['Pickup', 'Other'],
    img: '/works/zwin-zen.jpg',
    tags: [
      {kind: 'lang', name: 'C'},
      {kind: 'fw/lib', name: 'Wayland'},
      {kind: 'fw/lib', name: 'OpenGL'},
    ],
    desc_md: ja_en(
      `
![Zwinのスクリーンショット](/works/zwin-zen.jpg)

Linux上で動作する、Waylandを用いたXR向けwindowing systemです。VR HMDを用いて、仮想空間に2Dウィンドウを配置したり、3Dアプリケーションを動かしたりすることが出来ます。

2022年度の未踏アドバンスト事業に採択されました。主に2Dデスクトップ環境において必要とされる機能を実装しています。

- [Official site](https://www.zwin.dev/ja)
- [GitHub](https://github.com/zwin-project)
`,
      `
![screenshot of Zwin](/works/zwin-zen.jpg)

Windowing system for XR on Linux using Wayland. By using VR HMD, you can place 2D window in the virtual space and launch 3D application.

Adoped by 2022 Mitou Advanced. I implemented the feature for 2D desktop environment.

- [Official site](https://www.zwin.dev)
- [GitHub](https://github.com/zwin-project)
`,
    ),
  },
  nituc_fes2023: {
    title: ja_en('宇部高専 第60回高専祭', '60th NITUC Fes'),
    category: ['Pickup', 'Website', 'Music', 'Video'],
    img: '/works/nituc-fes2023/website.jpg',
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
広報部長として高専祭に参加しました。主にロゴ（及びロゴ候補の投票を行うサービス "ImGrate"）・ポスター・パンフレット・公式 Web サイト・エンディング映像（及び映像で用いる楽曲）の作成を行いました。

WebサイトはGatsbyを用いて作成しました。パンフレットはInDesignで、そこで用いた素材の一部とポスターはIllustratorで作成しました。エンディング映像はAviUtlで、そこで用いた楽曲「Reactiv」はCubaseで作成しました。

高専祭において何を行ったかを[ブログ記事](http://watasuke.net/blog/article/nituc-fes-2023-pr-works/)にまとめています。

Webサイトのスクリーンショット：

![公式Webサイトのスクリーンショット](/works/nituc-fes2023/website.jpg)

パンフレット：

![パンフレットの表紙](/works/nituc-fes2023/pamphlet_firstpage.jpg)

![パンフレットの「イベント」ページ](/works/nituc-fes2023/pamphlet_events.jpg)

エンディング映像&楽曲：

https://www.youtube.com/watch?v=ka-el8zNck0

${soundcloud(1670022474)}
`,
      `
I participated in NITUC Fes as a Public Relations Manager and created a logo (+ its voting system "ImGrate"), poster, booklet, official Website, and ending movie (+ its music).

The website was created with Gatsby. The booklet was made with InDesign, and some of the materials used in it and the poster were created with Illustrator. The ending movie was made with AviUtl, and the music "Reactiv" was created with Cubase.

I wrote a [blog post](http://watasuke.net/blog/article/nituc-fes-2023-pr-works/) about what I did for NITUC Fes.

The screenshot of Website:

![the screenshot of website](/works/nituc-fes2023/website.jpg)

The pamphlet:

![the cover page of the pamphlet](/works/nituc-fes2023/pamphlet_firstpage.jpg)

![the "event" page of the pamphlet](/works/nituc-fes2023/pamphlet_events.jpg)

Ending movie & music:

https://www.youtube.com/watch?v=ka-el8zNck0

${soundcloud(1670022474)}
`,
    ),
  },
  water_city_undersea_cave: {
    title: () => '水中都市と海底洞窟',
    category: ['Pickup', 'Music'],
    img: null,
    tags: [{kind: 'tool', name: 'Cubase'}],
    desc_md: () => soundcloud(1339266721),
  },
  corridor_drive: {
    title: () => 'CorridorDrive',
    category: ['Pickup', 'Music'],
    img: null,
    tags: [{kind: 'tool', name: 'Cubase'}],
    desc_md: () => soundcloud(1393272700),
  },
  // --- end of pickup -----------------------------------------
  place_to_go_back_is_always: {
    title: () => '帰る場所はいつも',
    category: ['Music'],
    img: null,
    tags: [{kind: 'tool', name: 'Studio One'}],
    desc_md: () => soundcloud(2161898373),
  },
  starbase: {
    title: () => 'starbase',
    category: ['Music'],
    img: null,
    tags: [{kind: 'tool', name: 'Studio One'}],
    desc_md: () => soundcloud(2148151380),
  },
  snowcarpet: {
    title: () => 'SnowCarpet',
    category: ['Music'],
    img: null,
    tags: [{kind: 'tool', name: 'Studio One'}],
    desc_md: () => soundcloud(748643143),
  },
  nituc_fes2024: {
    title: ja_en('宇部高専 第61回高専祭 Webサイト', '61st NITUC Fes Website'),
    category: ['Website'],
    img: '/works/nituc-fes2024.jpg',
    tags: [
      {kind: 'lang', name: 'TypeScript'},
      {kind: 'fw/lib', name: 'Gatsby'},
    ],
    desc_md: ja_en(
      `
宇部高専 第61回高専祭の公式 Web サイトをGatsbyで作成しました。

- [作成したサイト](https://nituc-fes61.org/)
- [GitHub](https://github.com/watasuke102/nituc-fes2024)
- [取り組みの紹介や感想](http://watasuke.net/blog/article/nituc-fes-2024-website/)
`,
      `
I created official Website of 61st NITUC fes with Gatsby.

- [Website](https://nituc-fes61.org/)
- [GitHub](https://github.com/watasuke102/nituc-fes2024)
- [my works and thoughts (blog)](http://watasuke.net/blog/article/nituc-fes-2024-website/)
`,
    ),
  },
  remind4f: {
    title: () => 'Remind4F',
    category: ['Tool'],
    img: '/works/remind4f.jpg',
    tags: [
      {kind: 'lang', name: 'Rust'},
      {kind: 'fw/lib', name: 'Serenity'},
    ],
    desc_md: ja_en(
      `
![Remind4Fのスクリーンショット](/works/remind4f.jpg)

イベントの日時を登録すると、そのイベントまでの日数を毎日リマインドしてくれるDiscord Botです。受験期間に試験日までのカウントダウンを行うために作成しました。現在は、完成までに時間がかかるような提出物の締め切りを登録して使用しています。

[GitHub](https://github.com/watasuke102/remind4f)
`,
      `
![screenshot of Remind4F](/works/remind4f.jpg)

This is a Discord Bot that reminds users of remaining days until the registered event date. I created it to count down the university entrance exam dates. Now I register deadlines for submissions that take a long time to complete.

[GitHub](https://github.com/watasuke102/remind4f)
`,
    ),
  },
  imgrate: {
    title: () => 'ImGrate',
    category: ['Web App'],
    img: '/works/imgrate/thumbnail.jpg',
    tags: [
      {kind: 'lang', name: 'TypeScript'},
      {kind: 'lang', name: 'Go'},
      {kind: 'fw/lib', name: 'Next.js'},
      {kind: 'fw/lib', name: 'Chakra UI'},
      {kind: 'tool', name: 'SQLite'},
    ],
    desc_md: ja_en(
      `
![ImGrateの画面](/works/imgrate/screens.jpg)

画像ギャラリーを共有したり、閲覧者に評価してもらったりすることができる Web アプリです。評価はコメントやスターの付与で行うことができ、管理者はスターの数やコメントを一覧表示で確認することができます。

高専祭のロゴ案を共有し、実行委員による投票で決定するために作成しました。

[GitHub](https://github.com/watasuke102/ImGrate)
`,
      `
![screenshot of ImGrate](/works/imgrate/screens.jpg)

This is a web app to share image galleries and receive feedback from viewers. Feedback can be given by comments and/or stars, and administrators can check them as a list.

I created this to share logo proposals for the Kosen fes and to determine actual logo by voting from the executive committee.

[GitHub](https://github.com/watasuke102/ImGrate)
`,
    ),
  },
  alterlinux: {
    title: () => 'Alter Linux',
    category: ['Music', 'Video', 'Other'],
    img: '/works/alterlinux/i3wm.jpg',
    tags: [
      {kind: 'lang', name: 'Shell'},
      {kind: 'lang', name: 'C++'},
      {kind: 'fw/lib', name: 'Qt'},
      {kind: 'tool', name: 'AviUtl'},
      {kind: 'other', name: 'Linux'},
    ],
    desc_md: ja_en(
      `
![alterlinux-i3wm](/works/alterlinux/i3wm.jpg)

学生団体[FascodeNetwork](https://fascode.net/)に参加し、
Alter Linux i3wmエディションの開発を主導しました。ドキュメントの整備、システム設定をGUIで簡単に行える[alterlinux-i3-manager](https://github.com/FascodeNet/alterlinux-i3-manager)の開発などを行いました。

\`alterlinux-i3-manager\` のスクリーンショット：

![alterlinux-i3-manager](/works/alterlinux/alterlinux-i3-manager.jpg)

[Alter Linux のGitHubリポジトリ](https://github.com/FascodeNet/alterlinux)

<hr />

また、YouTubeで公開するための、Alter Linuxに関する動画（及び映像で用いる楽曲）を作成しました。

Alter Linux プロモーション映像：

https://www.youtube.com/watch?v=S21W3mrnCqw

上記動画で使用している楽曲：

${soundcloud(826413637)}

<hr />

Alter Linux i3wm edition RC1 プロモーション映像：

https://www.youtube.com/watch?v=Pob_pcqq9UY

上記動画で使用している楽曲：

${soundcloud(887325604)}

`,
      `
![alterlinux-i3wm](/works/alterlinux/i3wm.jpg)

Join [FascodeNetwork](https://fascode.net/) (student organization), and lead developing Alter Linux i3wm edition. I involved its development by maintaining the documentation and developing GUI tool that easily configurate system preference such as [alterlinux-i3-manager](https://github.com/FascodeNet/alterlinux-i3-manager).

The screenshot of \`alterlinux-i3-manager\`:

![alterlinux-i3-manager](/works/alterlinux/alterlinux-i3-manager.jpg)

[GitHub repositofy of Alter Linux](https://github.com/FascodeNet/alterlinux)

<hr />

I also created videos about Alter Linux for YouTube, including the music used in the video.

Alter Linux promotion video:

https://www.youtube.com/watch?v=S21W3mrnCqw

The music used in the above video:

${soundcloud(826413637)}

<hr />

Alter Linux i3wm edition RC1 promotion video:

https://www.youtube.com/watch?v=Pob_pcqq9UY

The music used in the above video:

${soundcloud(887325604)}

`,
    ),
  },
  expnote: {
    title: () => 'ExpNote',
    category: ['Tool'],
    img: '/works/expnote/thumbnail.jpg',
    tags: [
      {kind: 'lang', name: 'Dart'},
      {kind: 'fw/lib', name: 'Flutter'},
    ],
    desc_md: ja_en(
      `
![ExpNoteの画面](/works/expnote/screens.jpg)

Flutterを用いて作った所持金管理アプリです。

日付・イベント名・収支を入力すると、全体の収支が分かります。

[GitHub](https://github.com/watasuke102/ExpNote)
`,
      `
![screenshot of ExpNote screen](/works/expnote/screen.jpg)

This is a household account book application with Flutter.

Add date, event name, and payment amounts to check the total balance.

[GitHub](https://github.com/watasuke102/ExpNote)
`,
    ),
  },
  discord_voicechat_notice: {
    title: () => 'discord-voicechat-notice',
    category: ['Tool'],
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
Discord Bot with Rust + Serenity.

Notify by sending a message when someone joins or leaves the Discord Voice Chat channel.

[GitHub](https://github.com/watasuke102/discord-voicechat-notice)
`,
    ),
  },
  timetree_noticebot: {
    title: () => 'TimeTree-NoticeBot',
    category: ['Tool'],
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
    img: '/works/arduino-clock.jpg',
    tags: [{kind: 'tool', name: 'Arduino'}],
    desc_md: ja_en(
      `
![完成品](/works/arduino-clock.jpg)

ArduinoでRTCおよびOLEDを制御し、ストップウォッチ機能つきの時計を作成しました。
夏休みの自由研究として学校に提出を行いました。

[開発中のツイートまとめ (posfie)](https://posfie.com/@Watasuke102/p/TzHVLtT)
`,
      `
![final product](/works/arduino-clock.jpg)

I created the clock with stopwatch function by controlling RTC and OLED by Arduino.      
I also created the report and submitted as research of summer vacation.

[Tweets collection during developing (JA, posfie)](https://posfie.com/@Watasuke102/p/TzHVLtT)
`,
    ),
  },
  markstudy: {
    title: () => 'MarkStudy',
    category: ['Tool'],
    img: '/works/markstudy.jpg',
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
[Cosense](https://cosen.se/watasuke/U-22%E3%83%97%E3%83%AD%E3%82%B3%E3%83%B3%EF%BC%9A2019%E5%B9%B4)
`,
      `
Submitted to 2019 U-22 Programming Contest (lose by a pre-election)

Edit with markup language like WYSIWYG, set importance and hide / emphasize the words.

[GitHub](https://github.com/watasuke102/MarkStudy) / 
[Cosense](https://cosen.se/watasuke/U-22%E3%83%97%E3%83%AD%E3%82%B3%E3%83%B3%EF%BC%9A2019%E5%B9%B4)
`,
    ),
  },
  school_fest_stg: {
    title: () => 'STG',
    category: ['Other'],
    img: '/works/schoolfest-stg.jpg',
    tags: [
      {kind: 'lang', name: 'C++'},
      {kind: 'fw/lib', name: 'OpenSiv3D'},
    ],
    desc_md: ja_en(
      `
![プレイ中のスクリーンショット](/works/schoolfest-stg.jpg)

OpenSiv3Dでグレイズをコンセプトにした弾幕シューティングゲームを作ろうとしていました。

[GitHub](https://github.com/watasuke102/SchoolFestSTG)
`,
      `
![screenshot of playing](/works/schoolfest-stg.jpg)

Trying to make Bullet Hell STG with Graze as a concept

[GitHub](https://github.com/watasuke102/SchoolFestSTG)
`,
    ),
  },
} satisfies Record<string, Work>;
