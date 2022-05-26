/*!
 * portfolio.tsx
 *
 * CopyRight (c) 2021-2022 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import {Link} from 'gatsby';
import {motion} from 'framer-motion';
import {StaticImage} from 'gatsby-plugin-image';
import Head from '@/common/Head';
import LinkCard from '@/feature/portfolio/LinkCard';
import WorkCard from '@/feature/portfolio/WorkCard';
import SkillCard from '@/feature/portfolio/SkillCard';
import Container from '@/feature/portfolio/PortfolioContainer';
import TextAnimation from '@/feature/portfolio/TextAnimation';
import '@/pages/portfolio.scss';

export default () => {
  return (
    <div id='portfolio-container'>
      <Head title={'ポートフォリオ'} desc={'ポートフォリオです'} url={'/portfolio'} />
      <Container>
        <motion.div
          id='portfolio-welcome'
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 0.5, duration: 1}}
        >
          <h2 className='greeting'>Hi there👋</h2>

          <div className='center'>
            <div className='avatar-and-name'>
              <StaticImage height={200} src='../assets/icon.jpg' alt='icon' />
              <div className='separator' />
              <div>
                <p className='name-main'>わたすけ</p>
                <p className='name-sub'>Watasuke</p>
                <div>
                  <div className='icon-and-text'>
                    <i className='fab fa-twitter' />
                    <p>@Watasuke102</p>
                  </div>
                  <div className='icon-and-text'>
                    <i className='fab fa-github' />
                    <p>watasuke102</p>
                  </div>
                  <div className='icon-and-text'>
                    <i className='fas fa-envelope' />
                    <p>watasuke102@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='bio'>
              <TextAnimation
                body={[
                  {
                    type: 'plain',
                    text: '2004年生まれの高専生です',
                    break: true,
                  },
                  {
                    type: 'plain',
                    text: 'プログラミングでツールを作ったり、フロントエンド開発したりしています',
                    break: true,
                  },
                  {
                    type: 'plain',
                    text: 'ウェアラブルコンピューティングや AR/MR を始めとする xR、 HCI 等に興味があります',
                    break: true,
                  },
                  {
                    type: 'plain',
                    text: 'これらの技術などを活用して、',
                    break: false,
                  },
                  {
                    type: 'link',
                    link: 'https://scrapbox.io/watasuke/%E5%A4%A2%E3%83%BB%E5%B0%86%E6%9D%A5%E5%83%8F%EF%BC%9F',
                    text: '人間のやることを減らす',
                    break: false,
                  },
                  {
                    type: 'plain',
                    text: 'のが目標です',
                    break: true,
                  },
                ]}
              />
            </div>
          </div>
          <div className='next-page'>
            <span>Scroll</span>
          </div>
        </motion.div>

        <div id='portfolio-skills'>
          <h2>Skills</h2>
          <div id='skill-container'>
            <div className='categoly'>
              <p className='heading'>Languages</p>
              <SkillCard name='C/C++' body='使用歴が最も長い言語です' />
              <SkillCard name='Rust' body='DiscordのBot、自作OSに' />
              <SkillCard name='TypeScript' body='Reactと一緒に使います' />
              <SkillCard name='HTML' />
            </div>
            <div className='categoly'>
              <p className='heading'>Frameworks/Libraries</p>
              <SkillCard name='React' body='Next.js, Gatsbyを使ったことがあります' />
              <SkillCard name='Qt' />
              <SkillCard name='OpenSiv3D' />
              <SkillCard name='Flutter' body='使用回数は少ないです' />
            </div>
            <div className='categoly'>
              <p className='heading'>Tools</p>
              <SkillCard name='VSCode' body='愛用しているエディタ' />
              <SkillCard name='Linux' body='Arch Linuxを主に使用しています' />
              <SkillCard name='Git' body='コミットなど基本的な知識はあります' />
              <SkillCard name='GitHub' />
              <SkillCard name='Docker' body='このサイトは一部docker-composeによって運用されています' />
            </div>
            <div className='categoly'>
              <p className='heading'>Other</p>
              <SkillCard name='MySQL' />
              <SkillCard name='CSS/SCSS' />
              <SkillCard name='AviUtl' />
              <SkillCard name='Blender' body='高度なモデリングはできません' />
              <SkillCard name='DTM' body='かなり低頻度' />
            </div>
          </div>
          <div className='next-page' />
        </div>

        <div id='portfolio-works'>
          <h2>Works</h2>
          <p className='page-desc'>
            下線が付いている作品名をクリックすると、 作品ページやGitHubリポジトリにジャンプします
          </p>
          <div className='container'>
            <WorkCard
              title='TAGether'
              image={<StaticImage width={400} alt='tagether' src='../assets/works/tagether.jpg' />}
              url='https://github.com/watasuke102/TAGether'
              desc='クラス内でテスト対策問題を共有するサービスです。\n使用技術: React, Next.js, TypeScript, MySQL'
            />
            <WorkCard
              title='TimeTree-NoticeBot'
              image={<StaticImage width={400} alt='timetree-noticebot' src='../assets/works/timetree-noticebot.jpg' />}
              url='https://github.com/watasuke102/TimeTree-NoticeBot-rust'
              desc='指定したTimeTreeカレンダーの予定を朝8時および予定開始10分前にDiscordへ通知します。\n使用技術: Rust'
            />
            <WorkCard
              title='ExpNote'
              image={<StaticImage width={400} alt='expnote' src='../assets/works/expnote.jpg' />}
              url='https://github.com/watasuke102/ExpNote'
              desc='簡易的な所持金管理ツールです。\n使用技術: Flutter, Dart'
            />
            <WorkCard
              title='alterlinux-i3-manager'
              image={
                <StaticImage width={400} alt='alterlinux-i3-manager' src='../assets/works/alterlinux-i3-manager.jpg' />
              }
              url='https://github.com/FascodeNet/alterlinux-i3-manager'
              desc='Alter Linux i3wm エディション用のGUI設定ツールです。\n使用技術: C++, Qt'
            />
            <WorkCard
              title='MIT-SUSHI-WARE'
              image={<StaticImage width={400} alt='MIT-SUSHI-WARE' src='../assets/works/MIT-SUSHI-WARE.jpg' />}
              url='https://github.com/watasuke102/mit-sushi-ware'
              desc='SUSHI-WARE LICENSEのフォーク\n 作者(著作権者)の著作権表示を残しつつソフトウェアを自由に利用してもらうことができる、 ユーモアのあるライセンスです。'
            />
          </div>

          <div className='next-page' />
        </div>

        <div id='portfolio-links'>
          <h2>Links</h2>
          <div className='container'>
            <LinkCard
              title='Twitter (@Watasuke102)'
              url='https://twitter.com/Watasuke102'
              icon='fab fa-twitter'
              desc='メンションもしくはDMに反応します\n （恐らく最速で反応できる連絡手段です）'
            />
            <LinkCard
              title='GitHub'
              url='https://github.com/watasuke102'
              icon='fab fa-github'
              desc='いろいろつくってます'
            />
            <LinkCard
              title='Scrapbox'
              url='https://scrapbox.io/watasuke'
              icon='fas fa-edit'
              desc='自分語りなどをしています'
            />
            <LinkCard
              title='SoundCloud'
              url='https://soundcloud.com/watasuke'
              icon='fab fa-soundcloud'
              desc='今までに作った曲を投稿しています'
            />
            <LinkCard
              title='YouTube'
              url='https://watasuke.tk'
              icon='fab fa-youtube'
              desc='稀に何らかの動画を上げます'
            />
            <LinkCard
              title='質問箱'
              url='https://peing.net/ja/watasuke102'
              icon='fas fa-box-open'
              desc='匿名で質問ができます'
            />
            <LinkCard
              title='Email (watasuke102@google.com)'
              url='mailto:watasuke102@gmail.com'
              icon='fas fa-envelope'
              desc='気づかないかもしれません'
            />
          </div>
          <div className='next-page' />
        </div>

        <div id='portfolio-last'>
          <div>
            <h2>Thank you for visiting my site!</h2>
            <div className='links'>
              <Link to='/'>トップ</Link>
              <span>・</span>
              <Link to='/blog'>ブログ</Link>
              <span>・</span>
              <Link to='/profile'>プロフィール</Link>
            </div>
          </div>
          <p>
            Copyright (C) 2021-2022 Watasuke
            <br />
            Powered by Gatsby
          </p>
        </div>
      </Container>
    </div>
  );
};
