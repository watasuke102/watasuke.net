/*!
 * portfolio.tsx
 *
 * CopyRight (c) 2021 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import SkillCard from '../components/SkillCard';
import Container from '../components/PortfolioContainer';
import '../styles/portfolio.scss'

export default () => {
  return (
    <div id='portfolio-container'>
      <Container>
        {/*
        <div id='portfolio-0'>
          <h2>Hi there👋</h2>
          <div className='avatar-and-name'>
            <StaticImage width={250} src='../assets/icon.jpg' alt='icon' />
            <div className='separator' />
            <div>
              <p className='name-main'>わたすけ</p>
              <p className='name-sub'>Watasuke</p>
              <div>
                <div className='icon-and-text'>
                  <i className="fab fa-twitter" />
                  <p>@Watasuke102</p>
                </div>
                <div className='icon-and-text'>
                  <i className="fab fa-github" />
                  <p>watasuke102</p>
                </div>
                <div className='icon-and-text'>
                  <i className="fas fa-envelope" />
                  <p>watasuke102@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className='next-page' />
        </div>

        <div id='portfolio-1'>
          <h2>About me</h2>
          <p>2004年生まれの高専生です</p>
          <p>プログラミングでツールを作ったり、フロントエンド開発したりしています</p>
          <p>AR/MRを始めとするxRに興味があります</p>
          <div className='next-page' />
        </div>

        <div id='portfolio-2'>
          <h2>Skills</h2>
          <div id='skill-container'>
            <div className='categoly'>
              <p className='heading'>Languages</p>
              <SkillCard name='C/C++' body='使用歴が最も長い言語です' />
              <SkillCard name='TypeScript' body='Reactと一緒に使います' />
              <SkillCard name='HTML' />
            </div>
            <div className='categoly'>
              <p className='heading'>Frameworks</p>
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
              <SkillCard name='Docker' />
            </div>
            <div className='categoly'>
              <p className='heading'>Other</p>
              <SkillCard name='MySQL' />
              <SkillCard name='CSS/SCSS' />
              <SkillCard name='AviUtl' />
              <SkillCard name='Blender' body='高度なモデリングはできません' />
              <SkillCard name='DTM' body='かなり低頻度' />
              <SkillCard name='Go' body='興味があります' />
              <SkillCard name='Rust' body='興味があります' />
            </div>
          </div>
          <div className='next-page' />
        </div>
*/}
        <div id='portfolio-3'>
          <h2>Works</h2>
          void
          <div className='next-page' />
        </div>

        <div id='portfolio-4'>
          <h2>Address</h2>
          <div>
            <div className='card'>
              <i className="fab fa-twitter" />
              <a href='https://twitter.com/Watasuke102'>Twitter (@Watasuke102)</a>
              <p className='desc'>
                メンションもしくはDMに反応します<br />
                （恐らく最速で反応できる連絡手段です）
              </p>
            </div>
            <div className='card'>
              <i className="fas fa-envelope" />
              <a href='mailto:watasuke102@google.com'>Email (watasuke102@google.com)</a>
              <p className='desc'>
                気づかないかもしれません
              </p>
            </div>
            <div className='card'>
              <i className="fab fa-github" />
              <a href='https://github.com/watasuke102'>GitHub</a>
              <p className='desc'>
                いろいろつくってます
              </p>
            </div>
            <div className='card'>
              <i className="fab fa-soundcloud" />
              <a href='https://soundcloud.com/watasuke'>SoundCloud</a>
              <p className='desc'>
                今までに作った曲を投稿しています
              </p>
            </div>
            <div className='card'>
              <i className="fas fa-box-open" />
              <a href='https://peing.net/ja/watasuke102'>質問箱</a>
              <p className='desc'>
                匿名で質問ができます
              </p>
            </div>
          </div>
        </div>

      </Container >
    </div>
  );
}

