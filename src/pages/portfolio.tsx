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
                  <i className="fab fa-twitter"></i>
                  <p>@Watasuke102</p>
                </div>
                <div className='icon-and-text'>
                  <i className="fab fa-github"></i>
                  <p>watasuke102</p>
                </div>
                <div className='icon-and-text'>
                  <i className="fas fa-envelope"></i>
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

        */}

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
              <SkillCard name='Blender' body='高度なモデリングはできません'/>
              <SkillCard name='Go' body='興味があります' />
              <SkillCard name='Rust' body='興味があります' />
            </div>
          </div>
          <div className='next-page' />
        </div>

        <div>
          <p>text</p>
        </div>

        <>
          <h2>Page 3</h2>
          <li>D</li><li>E</li><li>F</li>
          <li>A</li><li>B</li><li>C</li>
        </>

      </Container >
    </div>
  );
}

