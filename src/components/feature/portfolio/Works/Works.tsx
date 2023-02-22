// Works.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT SUSHI-WARE License.
import {motion} from 'framer-motion';
import {StaticImage} from 'gatsby-plugin-image';
import React from 'react';
import {FadeWithScroll} from '@utils/FadeWithScroll';
import './Works.scss';

const WorkCard = (props: {title: string; url: string; image: React.ReactElement; desc: string}): React.ReactElement => {
  return (
    <motion.div className='card' {...FadeWithScroll}>
      {props.image}
      <div className='desc'>
        <a href={props.url}>{props.title}</a>
        <p>
          {props.desc.split('\\n').map(s => (
            <>
              {s}
              <br />
            </>
          ))}
        </p>
      </div>
    </motion.div>
  );
};
export const Works = (): React.ReactElement => (
  <div id='portfolio-works'>
    <h2>Works</h2>
    <p className='page-desc'>下線が付いている作品名をクリックすると、 作品ページやGitHubリポジトリにジャンプします</p>
    <div className='container'>
      <WorkCard
        title='TAGether'
        image={<StaticImage width={400} alt='tagether' src='../../../../assets/works/tagether.jpg' />}
        url='https://github.com/watasuke102/TAGether'
        desc='クラス内でテスト対策問題を共有するサービスです。\n使用技術: React, Next.js, TypeScript, MySQL'
      />
      <WorkCard
        title='TimeTree-NoticeBot'
        image={
          <StaticImage width={400} alt='timetree-noticebot' src='../../../../assets/works/timetree-noticebot.jpg' />
        }
        url='https://github.com/watasuke102/TimeTree-NoticeBot-rust'
        desc='指定したTimeTreeカレンダーの予定を朝8時および予定開始10分前にDiscordへ通知します。\n使用技術: Rust'
      />
      <WorkCard
        title='ExpNote'
        image={<StaticImage width={400} alt='expnote' src='../../../../assets/works/expnote.jpg' />}
        url='https://github.com/watasuke102/ExpNote'
        desc='簡易的な所持金管理ツールです。\n使用技術: Flutter, Dart'
      />
      <WorkCard
        title='alterlinux-i3-manager'
        image={
          <StaticImage
            width={400}
            alt='alterlinux-i3-manager'
            src='../../../../assets/works/alterlinux-i3-manager.jpg'
          />
        }
        url='https://github.com/FascodeNet/alterlinux-i3-manager'
        desc='Alter Linux i3wm エディション用のGUI設定ツールです。\n使用技術: C++, Qt'
      />
      <WorkCard
        title='MIT-SUSHI-WARE'
        image={<StaticImage width={400} alt='MIT-SUSHI-WARE' src='../../../../assets/works/MIT-SUSHI-WARE.jpg' />}
        url='https://github.com/watasuke102/mit-sushi-ware'
        desc='SUSHI-WARE LICENSEのフォーク\n 作者(著作権者)の著作権表示を残しつつソフトウェアを自由に利用してもらうことができる、 ユーモアのあるライセンスです。'
      />
    </div>

    <div className='next-page' />
  </div>
);
