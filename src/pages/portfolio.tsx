/*!
 * portfolio.tsx
 *
 * CopyRight (c) 2021 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Container from '../components/PortfolioContainer';
import '../styles/portfolio.scss'

export default () => {
  return (
    <div id='portfolio-container'>
      <Container>

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
        </div>

        <div id='portfolio-2'>
          <h2>Works</h2>
          <li>3</li><li>4</li><li>5</li>
          <li>0</li><li>1</li><li>2</li>
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

