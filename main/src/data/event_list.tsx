// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {work_list} from './work_list';

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

export type Event = {
  title: string;
  subtitle: string;
  period: Period;
} & (
  | {
      category: 'General' | 'Event' | 'Talk';
      body: string | null;
    }
  | {
      category: 'Work';
      key: keyof typeof work_list;
    }
);

export function gen_event_list(lang: 'ja' | 'en'): Record<string, Event[]> {
  const ja = lang !== 'en';
  return {
    '2019': [
      {
        // U-22への提出日
        period: {kind: 'day', date: {month: 8, day: 15}},
        category: 'Work',
        title: 'MarkStudy',
        subtitle: ja ? '学習特化テキストエディタ' : 'text editor for study',
        key: 'markstudy',
      },
      {
        // "完成" ツイートをした日
        period: {kind: 'day', date: {month: 8, day: 26}},
        category: 'Work',
        title: ja ? 'Arduinoで時計を作成する' : 'Create the clock by Arduino',
        subtitle: ja ? '夏休みの自由研究' : 'Research of summer vacation',
        key: 'arduino_clock',
      },
      {
        period: {kind: 'day', date: {month: 10, day: 25}},
        category: 'Work',
        title: 'STG',
        subtitle: ja
          ? '文化祭用のシューティングゲーム'
          : 'Shooting Game for School festival',
        key: 'school_fest_stg',
      },
    ],
    '2020': [
      {
        period: {kind: 'day', date: {month: 4, day: 1}},
        category: 'General',
        title: ja
          ? '宇部高専 入学'
          : 'Enter National Institute of Technology, Ube College',
        subtitle: ja
          ? '制御情報工学科'
          : 'Department of Intelligent System Engineering',
        body: '',
      },
      {
        // join to Fascode
        period: {kind: 'doing', begin: {month: 5, day: 11}},
        category: 'Work',
        title: 'Alter Linux (i3wm edition)',
        subtitle: ja
          ? 'Arch Linuxベースの国産Linuxディストリビューション'
          : 'Arch Linux derived Linux distribution made in Japan',
        key: 'alterlinux',
      },
      {
        period: undefined,
        category: 'Work',
        title: 'ExpNote',
        subtitle: ja
          ? '簡易的な所持金管理アプリ'
          : 'A simple household account book',
        key: 'expnote',
      },
      {
        period: {kind: 'day', date: {month: 10, day: 31}},
        category: 'Talk',
        title: ja ? '第1回 限界LT feat.Fascode' : '1st 限界LT feat.Fascode',
        subtitle: ja ? 'LT「Flutterはいいぞ」' : 'LT "Flutterはいいぞ"',
        body: ja
          ? `
ExpNoteの開発を経てFlutterを布教したくなったので、LTで雑に布教しました。

- [スライド (Google Slides)](https://docs.google.com/presentation/d/1vUuO9ZfyuO-fTv9cP9IfHdoXK1sQzAmNS05QJO-iRq0/edit?usp=share_link)
- [発表の様子 (YouTube)](https://www.youtube.com/live/LetsnbqNA-U?feature=share&t=12701)
`
          : `
Lightning Talk to roughly recommend Flutter.

- [Slides (Google Slides)](https://docs.google.com/presentation/d/1vUuO9ZfyuO-fTv9cP9IfHdoXK1sQzAmNS05QJO-iRq0/edit?usp=share_link)
- [発表の様子 (YouTube)](https://www.youtube.com/live/LetsnbqNA-U?feature=share&t=12701)
`,
      },
      {
        // initial commit
        period: {kind: 'doing', begin: {month: 12, day: 19}},
        category: 'Work',
        title: 'TAGether',
        subtitle: ja
          ? 'テスト対策問題の共有サービス'
          : 'Service to share self-made exam',
        key: 'tagether',
      },
    ],
    '2021': [
      {
        period: {kind: 'day', date: {month: 9, day: 5}},
        category: 'Work',
        title: 'TimeTree-NoticeBot',
        subtitle: ja
          ? 'TimeTreeの予定をDiscordに通知'
          : 'Notify schedule on TimeTree',
        key: 'timetree_noticebot',
      },
      {
        period: {kind: 'day', date: {month: 12, day: 5}},
        category: 'Work',
        title: 'discord-voicechat-notice',
        subtitle: ja ? 'VCの様子を通知' : 'Notify VC status',
        key: 'discord_voicechat_notice',
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
        title: 'Zwin : XR windowing system',
        subtitle: ja
          ? '2022年度 未踏アドバンスト事業採択'
          : '2022 Mitou Advanced',
        key: 'zwin',
      },
      {
        period: {
          kind: 'period',
          begin: {month: 8, day: 8},
          end: {month: 8, day: 12},
        },
        category: 'Event',
        title: ja
          ? 'セキュリティ・キャンプ 全国大会 2022'
          : 'Security Camp 2022',
        subtitle: ja
          ? 'Y4 RISC-V CPU自作ゼミ'
          : 'Y4 RISC-V CPU selfmade seminar',
        body: ja
          ? `
CPU自作ゼミで、RISC-V CPUをFPGA上に実装しました。
講義中はUARTの実装・キャラクタLCDの制御・HDMI出力を行いました。

- [CPUの実装 (GitHub)](https://github.com/watasuke102/seccamp_2022_riscv_cpu)
- [成果報告時に用いたスライド (Google Slides)](https://docs.google.com/presentation/d/1jZhWOtsE-aoRW_FdrEXbnvV6VrNH59Q2q-pH8CTHtDc/edit?usp=sharing)
- [応募課題晒し](https://watasuke.net/blog/article/seccamp-2022-app-publish/)
- [感想](https://watasuke.net/blog/article/the-end-of-security-camp/)
`
          : `
Implementing RISC-V CPU on FPGA.
I implemented UART, character LCD operation, HDMI output.

- [CPU implementation (GitHub)](https://github.com/watasuke102/seccamp_2022_riscv_cpu)
- [Slides for final result presentation (Google Slides)](https://docs.google.com/presentation/d/1jZhWOtsE-aoRW_FdrEXbnvV6VrNH59Q2q-pH8CTHtDc/edit?usp=sharing)
- [my application](https://watasuke.net/blog/article/seccamp-2022-app-publish/)
- [my thoughts (blog)](https://watasuke.net/blog/article/the-end-of-security-camp/)
`,
      },
      {
        period: {kind: 'day', date: {month: 8, day: 8}},
        category: 'Talk',
        title: ja
          ? 'セキュリティ・キャンプ 2022 LT大会'
          : 'Security Camp 2022 LT',
        subtitle: ja
          ? 'LT 「身内限定で自作サービスを公開するのかなり良いよ」'
          : 'LT "身内限定で自作サービスを公開するのかなり良いよ"',
        body: ja
          ? `
セキュリティ・キャンプ 2022のプログラムとしてLT大会が開催され、
そこでTAGetherについて紹介しました。

[スライド (Google Slides)](https://docs.google.com/presentation/d/1KDI_VyW8FBDn1HOIMIsVJAuwtDEI6TzFuUhQJHcE-8k/edit?usp=share_link)
`
          : `
Lightning Talk event is held by Security Camp 2022, and I introduced about TAGether.

[Slide (Google Slides)](https://docs.google.com/presentation/d/1KDI_VyW8FBDn1HOIMIsVJAuwtDEI6TzFuUhQJHcE-8k/edit?usp=share_link)
`,
      },
      {
        // プレゼン実施日
        period: {kind: 'day', date: {month: 9, day: 18}},
        category: 'Event',
        title: ja ? '技育展 2022' : 'Geekten 2022',
        subtitle: 'TAGether / Zwin',
        body: ja
          ? `
「世の中を便利にする」テーマでTAGetherを、「開発/スキル支援」テーマで Zwin （当時ZIGEN）をそれぞれ紹介しました。

Zwinは当該テーマにおいて最優秀賞を獲得しました。

- [TAGetherの発表スライド (Google Slides)](https://docs.google.com/presentation/d/1wgm5F7gCZnGjSQ2yVQmgi7oVazUC1wWspEui3KikIJY/edit?usp=drive_link)
`
          : `
Introduce TAGether in "Make the world more convenience" theme,
Zwin (ZIGEN at that time) in "Workelopment/Skill assist" theme.

Zwin won at that theme.

- [Presentation slides of TAGether (Google Slides)](https://docs.google.com/presentation/d/1wgm5F7gCZnGjSQ2yVQmgi7oVazUC1wWspEui3KikIJY/edit?usp=drive_link)
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
        title: 'Global Cybersecurity Camp 2023 Singapore',
        subtitle: ja ? 'チューター' : 'Tutor',
        body: ja
          ? `
チューターとして参加し、受講生の支援・グループワークのモデレーションを行いました。

[感想](https://watasuke.net/blog/article/gcc2023-attend/)
`
          : `
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
        title: ja ? '台湾留学' : 'Internship in Taiwan',
        subtitle: ja ? '国立聯合大学' : 'National United University',
        body: ja
          ? `
台湾の国立聯合大学に留学し、画像処理に関する研究を行いました。

- [研究成果](https://github.com/watasuke102/measure-vehicle-distance)
- [感想](https://watasuke.net/blog/article/internship-in-taiwan-nuu/)
`
          : `
Go to National United University in Taiwan, do the research about Image Processing.

- [research results](https://github.com/watasuke102/measure-vehicle-distance)
- [my thoughts (blog)](https://watasuke.net/blog/article/internship-in-taiwan-nuu/)
`,
      },
      {
        period: {
          kind: 'period',
          begin: {month: 5, day: 27},
          end: {month: 6, day: 9},
        },
        title: 'ImGrate',
        subtitle: ja
          ? 'お気に入りとコメントで即座に評価される画像ギャラリー'
          : 'Image gallery that is immediately rated by favorites and comments',
        category: 'Work',
        key: 'imgrate',
      },
      {
        period: {
          kind: 'period',
          begin: {month: 8, day: 7},
          end: {month: 8, day: 11},
        },
        category: 'Event',
        title: ja ? 'セキュリティ・ネクストキャンプ 2023' : 'Security Nextcamp',
        subtitle: ja ? '受講生' : 'Student',
        body: ja
          ? `
受講生として参加しました。

- [応募課題晒し](https://watasuke.net/blog/article/nextcamp-23-app-revealing/)
- [感想](https://watasuke.net/blog/article/the-end-of-nextcamp-23/)
`
          : `
I participated as a student.

- [my application](https://watasuke.net/blog/article/nextcamp-23-app-revealing/)
- [my thoughts (blog](https://watasuke.net/blog/article/the-end-of-nextcamp-23/)
`,
      },
      {
        period: {kind: 'day', date: {month: 8, day: 10}},
        category: 'Talk',
        title: ja
          ? 'セキュリティ・キャンプ 2023 LT大会'
          : 'Security Camp 2023 LT',
        subtitle: 'LT 「watasuke.netを支える技術」',
        body: ja
          ? `
セキュリティ・キャンプ 2023のLT大会で、watasuke.netについて紹介しました。

[スライド](https://docs.google.com/presentation/d/11Z0c9Mo95BC2r71_lEYe37K3P4eBYsQdOkmdEWlOfd0/edit?usp=sharing)
`
          : `
Introduced about watasuke.net in the Lightning Talk event held by Security Camp 2023.

[Slides](https://docs.google.com/presentation/d/11Z0c9Mo95BC2r71_lEYe37K3P4eBYsQdOkmdEWlOfd0/edit?usp=sharing)
`,
      },
      {
        period: {
          kind: 'period',
          begin: {month: 8, day: 21},
          end: {month: 9, day: 26},
        },
        category: 'Event',
        title: ja ? 'マレーシア留学' : 'Internship in Malaysia',
        subtitle: ja ? 'マラ工科大学' : 'Universiti Teknologi MARA',
        body: ja
          ? 'マラ工科大学でIoTに関する研究を行いました。'
          : 'I did the research about Iot in UiTM.',
      },
      {
        period: {
          kind: 'period',
          begin: {month: 10, day: 21},
          end: {month: 10, day: 22},
        },
        category: 'Event',
        title: 'CAPCOM Hackathon',
        subtitle: ja ? 'インターンシップ' : 'internship',
        body: ja
          ? `
大阪で開催されたCAPCOM Hackathonに参加し、Unityを用いたゲーム開発を行いました。

[感想](https://watasuke.net/blog/article/participated-in-capcom-hackathon/)
`
          : `
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
        category: 'Work',
        title: ja ? '宇部高専 第60回高専祭' : '60th NITUC Fes',
        subtitle: ja ? '広報部長' : 'Public Relations Manager',
        key: 'nituc_fes2023',
      },
    ],
    '2024': [
      {
        period: {
          kind: 'period',
          begin: {month: 4, day: 14},
          end: {month: 4, day: 21},
        },
        title: 'Remind4F',
        subtitle: ja
          ? 'イベントまでの日数をリマインドするDiscord Bot'
          : 'Discord Bot that reminds users of remaining days for events',
        category: 'Work',
        key: 'remind4f',
      },
      {
        period: {kind: 'day', date: {month: 6, day: 25}},
        category: 'Talk',
        title: ja ? '1年生向け講話' : 'Talk for 1st grade students',
        subtitle: '「学生向け事業のすゝめ」',
        body: ja
          ? `
宇部高専の1年生に向け、「学生向け事業のすゝめ」というタイトルで発表を行い、セキュリティ・キャンプや未踏ジュニアなどを紹介し、応募の際に心がけると良いことを説明しました。

- [発表スライド (Google Slides)](https://docs.google.com/presentation/d/1hjeEemqmPwhzLpVapBHn5QpPvll-KfhJDLonadH-CX8/edit?usp=sharing)
- [学生向け事業 (Cosense)](https://scrapbox.io/watasuke/%E5%AD%A6%E7%94%9F%E5%90%91%E3%81%91%E4%BA%8B%E6%A5%AD)
`
          : `
I talked titled "学生向け事業のすゝめ" (Invitation of students-targeted project) to 1st grade students of NITUC, introduced projects such as Security Camp and Mitou Junior, and descibed what to keep in mind when applying for them.
          
- [Presentation slides (Google Drive)](https://drive.google.com/drive/folders/1vTiDzJm19ykinLq1kv3aUFQSXo3Fz5iP?usp=drive_link)
- [高専からの編入学について (Cosense)](https://scrapbox.io/watasuke/%E9%AB%98%E5%B0%82%E3%81%8B%E3%82%89%E3%81%AE%E7%B7%A8%E5%85%A5%E5%AD%A6%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6)
          `,
      },
      {
        period: {kind: 'day', date: {month: 8, day: 30}}, // Tweet date: https://x.com/Watasuke102/status/1829492560295047609
        category: 'Work',
        title: 'Settlang',
        subtitle: ja ? 'プログラミング言語' : 'Programming language',
        key: 'settlang',
      },
      {
        period: {
          kind: 'day',
          date: {month: 11, day: 5},
        },
        category: 'Talk',
        title: ja ? '進学講話' : 'Talk about going to university',
        subtitle: '「進学は情報収集が9割」&「受験対策まとめ」',
        body: ja
          ? `
宇部高専の1～3年生に向け、進学講話を行いました。1・2年生には「進学は情報収集が9割」というタイトルで、進路全般についてのアドバイスを行いました。3年生には「受験対策まとめ」というタイトルで、受験勉強やTOEIC対策についてのアドバイスを行いました。

- [発表スライド一覧 (Google Drive)](https://drive.google.com/drive/folders/1vTiDzJm19ykinLq1kv3aUFQSXo3Fz5iP?usp=drive_link)
- [高専からの編入学について (Cosense)](https://scrapbox.io/watasuke/%E9%AB%98%E5%B0%82%E3%81%8B%E3%82%89%E3%81%AE%E7%B7%A8%E5%85%A5%E5%AD%A6%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6)
`
          : `
I talked about going to university from Kosen for 1st to 3rd grade students of NITUC. For 1st and 2nd grade students, I talked titled "進学は情報収集が9割" (90% of going to university is information gathering), giving advice about general career paths. For 3rd grade students, I talked titled "受験対策まとめ" (Summary of exam preparation), giving advice about study for the entrance exam and TOEIC preparation.
          
- [The list of presentation slides (Google Drive)](https://drive.google.com/drive/folders/1vTiDzJm19ykinLq1kv3aUFQSXo3Fz5iP?usp=drive_link)
- [高専からの編入学について (Cosense)](https://scrapbox.io/watasuke/%E9%AB%98%E5%B0%82%E3%81%8B%E3%82%89%E3%81%AE%E7%B7%A8%E5%85%A5%E5%AD%A6%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6)
          `,
      },
      {
        period: {
          kind: 'period',
          begin: {month: 11, day: 9},
          end: {month: 11, day: 10},
        },
        category: 'Work',
        title: ja ? '宇部高専 第61回高専祭' : '61th NITUC Fes',
        subtitle: ja ? 'Webサイト制作' : 'Workeloping Website',
        key: 'nituc_fes2024',
      },
      {
        period: {
          kind: 'period',
          begin: {month: 11, day: 14},
          end: {month: 11, day: 15},
        },
        category: 'Event',
        title: 'CODE BLUE 2024',
        subtitle: ja ? '学生スタッフ' : 'Student Volunteer',
        body: ja
          ? `
CODE BLUE 2024 に学生スタッフとして参加しました。

[感想](https://watasuke.net/blog/article/codeblue-2024-as-sv/)
`
          : `
I participated in CODE BLUE 2024 as a Student Volunteer.

[my thoughts (blog)](https://watasuke.net/blog/article/codeblue-2024-as-sv/)
`,
      },
    ],
    '2025': [
      {
        period: {
          kind: 'period',
          begin: {month: 1, day: 7},
          end: {month: 2, day: 4}, // graduate research presentation day
        },
        category: 'Work',
        title: 'yaza',
        subtitle: ja
          ? 'XREAL Air 2向けwindowing system'
          : 'Windowing system for XREAL Air 2',
        key: 'yaza',
      },
      {
        period: {
          kind: 'period',
          begin: {month: 3, day: 5},
          end: {month: 3, day: 14},
        },
        category: 'Event',
        title: 'PIXIV SPRING BOOT CAMP 2025',
        subtitle: ja
          ? 'pixiv ウェブエンジニアリングコース'
          : 'pixiv Web Engineering Course',
        body: ja
          ? `
ピクシブ株式会社が開催するインターンシップに参加し、PHPの静的解析や自動リファクタリングに関連したタスクを行いました。

[感想](https://watasuke.net/blog/article/joined-pixiv-spring-internship-2025/)
`
          : `
I participated in an internship by pixiv Inc. and did the tasks related to static analysis and automatic refactoring of PHP.

[my thoughts (blog)](https://watasuke.net/blog/article/joined-pixiv-spring-internship-2025/)
`,
      },
      {
        period: {kind: 'day', date: {month: 4, day: 1}},
        category: 'General',
        title: ja
          ? '筑波大学 3年次編入'
          : 'Transfer to University of Tsukuba as junior',
        subtitle: ja
          ? '情報学群 情報メディア創成学類'
          : 'School of Informatics, college of Media Arts, Science and Technology',
        body: '',
      },
      {
        period: {
          kind: 'period',
          begin: {month: 8, day: 11},
          end: {month: 8, day: 15},
        },
        category: 'Event',
        title: ja ? 'セキュリティ・キャンプ 2025' : 'Security Camp 2025',
        subtitle: ja ? '全国大会 Lゼミ チューター' : 'L seminar Tutor',
        body: ja
          ? `
Lゼミのチューターとして参加しました。主にL4「Cコンパイラゼミ」において受講者のデバッグや設計に関する支援を行いました。
`
          : `
I participated as a tutor of L seminar, mainly L4 "C Compiler Seminar". I supported students about debugging and design.
`,
      },
      {
        period: {
          kind: 'day',
          date: {month: 8, day: 14},
        },
        category: 'Talk',
        title: ja
          ? 'セキュリティ・キャンプ 2025 LT大会'
          : 'Security Camp 2025 LT',
        subtitle: 'LT "純粋関数型言語 Idris で 「正しい」プログラムを書く"',
        body: ja
          ? `
セキュリティ・キャンプ 2025のLT大会で、プログラミング言語Idrisを紹介するLT発表を行いました。

[スライド](https://docs.google.com/presentation/d/1j7JZ-Ca0xbWkfmPn7cBuTCUu_kv4pZ8MJizq6V7ts0M/edit?usp=sharing)
`
          : `
I introduced about the programming language Idris in the Lightning Talk event held by Security Camp 2025.

[Slides](https://docs.google.com/presentation/d/1j7JZ-Ca0xbWkfmPn7cBuTCUu_kv4pZ8MJizq6V7ts0M/edit?usp=sharing)
`,
      },
      {
        period: {
          kind: 'day',
          date: {month: 11, day: 28},
        },
        category: 'Talk',
        title: 'Terminal Night #1'
        subtitle: '"作業環境の可搬性を高めるCLI"',
        body: ja
          ? `
ターミナル・CLI環境に関連した知見を共有するイベント 「Terminal Night #1」 にて、「作業環境の可搬性を高めるCLI」というタイトルで発表を行いました。

[スライド](https://docs.google.com/presentation/d/1X27AEzed67hrQ9imimVfisMGlsdr7D_dVjRN9dzYsCw/edit?usp=sharing)
`
          : `
I talked about my CLI environment in the event "Terminal Night #1", which shares knowledge related to terminal and CLI environment.

[Slides](https://docs.google.com/presentation/d/1X27AEzed67hrQ9imimVfisMGlsdr7D_dVjRN9dzYsCw/edit?usp=sharing)
`,
      },
      {
        period: {
          kind: 'day',
          date: {month: 2, day: 1},
        },
        category: 'Talk',
        title: 'UNTIL. LT #0x09',
        subtitle: 'LT "自宅サーバーでぜんぶやる"',
        body: ja
          ? `
筑波大学の情報系技術者コミュニティが開催するイベント 「UNTIL. LT #0x09」 にて、「自宅サーバーでぜんぶやる」というタイトルで発表を行いました。

[スライド](https://docs.google.com/presentation/d/19nq0H1IFbT0j4EghE3joi61npFyR981LDHHosvCBsrg/edit?usp=sharing)
`
          : `
I talked what I do with my home server in the event "UNTIL. LT #0x09", held by the information technology community of University of Tsukuba.

[Slides](https://docs.google.com/presentation/d/19nq0H1IFbT0j4EghE3joi61npFyR981LDHHosvCBsrg/edit?usp=sharing)
`,
      },
    ],
  };
}
