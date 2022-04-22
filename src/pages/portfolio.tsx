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
import Head from '../components/Head';
import SkillCard from '../components/SkillCard';
import Container from '../components/PortfolioContainer';
import '../styles/portfolio.scss';

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
            <motion.div
              className='bio'
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 1.5, duration: 1}}
            >
              <p>2004年生まれの高専生です</p>
              <p>プログラミングでツールを作ったり、フロントエンド開発したりしています</p>
              <p>
                AR/MR を始めとする xR や HCI の力で、
                <a href='https://scrapbox.io/watasuke/%E5%A4%A2%E3%83%BB%E5%B0%86%E6%9D%A5%E5%83%8F%EF%BC%9F'>
                  人間のやることを減らす
                </a>
                のが目標です
              </p>
            </motion.div>
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
            <div className='card'>
              <StaticImage width={400} alt='tagether' src='../assets/works/tagether.jpg' />
              <div className='desc'>
                <a href='https://github.com/watasuke102/TAGether'>TAGether</a>
                <p>
                  クラス内でテスト対策問題を共有するサービスです。
                  <br />
                  使用技術: React, Next.js, TypeScript, MySQL, PHP
                </p>
              </div>
            </div>

            <div className='card'>
              <StaticImage width={400} alt='timetree-noticebot' src='../assets/works/timetree-noticebot.jpg' />
              <div className='desc'>
                <a href='https://github.com/watasuke102/TimeTree-NoticeBot-rust'>TimeTree-NoticeBot</a>
                <p>
                  指定したTimeTreeカレンダーの予定を朝8時および予定開始10分前にDiscordへ通知します。
                  <br />
                  使用技術: Rust
                </p>
              </div>
            </div>

            <div className='card'>
              <StaticImage width={350} alt='expnote' src='../assets/works/expnote.jpg' />
              <div className='desc'>
                <a href='https://github.com/watasuke102/ExpNote'>ExpNote</a>
                <p>
                  簡易的な所持金管理ツールです。
                  <br />
                  使用技術: Flutter, Dart
                </p>
              </div>
            </div>

            <div className='card'>
              <StaticImage width={350} alt='alterlinux-i3-manager' src='../assets/works/alterlinux-i3-manager.jpg' />
              <div className='desc'>
                <a href='https://github.com/FascodeNet/alterlinux-i3-manager'>alterlinux-i3-manager</a>
                <p>
                  Alter Linux i3wm エディション用のGUI設定ツールです。
                  <br />
                  使用技術: C++, Qt
                </p>
              </div>
            </div>

            <div className='card'>
              <StaticImage alt='MIT-SUSHI-WARE' src='../assets/works/MIT-SUSHI-WARE.jpg' />
              <div className='desc'>
                <a href='https://github.com/watasuke102/mit-sushi-ware'>MIT SUSHI-WARE LICENSE</a>
                <p>
                  SUSHI-WARE LICENSEのフォーク
                  <br />
                  作者(著作権者)の著作権表示を残しつつソフトウェアを自由に利用してもらうことができる、
                  ユーモアのあるライセンスです。
                </p>
              </div>
            </div>
          </div>

          <div className='next-page' />
        </div>

        <div id='portfolio-links'>
          <h2>Links</h2>
          <div className='container'>
            <a href='https://twitter.com/Watasuke102' className='card'>
              <i className='fab fa-twitter' />
              <span className='head'>Twitter (@Watasuke102)</span>
              <p className='desc'>
                メンションもしくはDMに反応します <br />
                （恐らく最速で反応できる連絡手段です）
              </p>
            </a>
            <a href='https://github.com/watasuke102' className='card'>
              <i className='fab fa-github' />
              <span className='head'>GitHub</span>
              <p className='desc'>いろいろつくってます</p>
            </a>
            <a href='https://scrapbox.io/watasuke' className='card'>
              <i className='fas fa-edit' />
              <span className='head'>Scrapbox</span>
              <p className='desc'>自分語りなどをしています</p>
            </a>
            <a href='https://soundcloud.com/watasuke' className='card'>
              <i className='fab fa-soundcloud' />
              <span className='head'>SoundCloud</span>
              <p className='desc'>今までに作った曲を投稿しています</p>
            </a>
            <a href='https://watasuke.tk' className='card'>
              <i className='fab fa-youtube' />
              <span className='head'>YouTube</span>
              <p className='desc'>稀に何らかの動画を上げます</p>
            </a>
            <a href='https://peing.net/ja/watasuke102' className='card'>
              <i className='fas fa-box-open' />
              <span className='head'>質問箱</span>
              <p className='desc'>匿名で質問ができます</p>
            </a>
            <a className='card' href='mailto:watasuke102@gmail.com'>
              <i className='fas fa-envelope' />
              <span className='head'>Email (watasuke102@google.com)</span>
              <p className='desc'>気づかないかもしれません</p>
            </a>
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
