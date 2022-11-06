/*!
 * index.tsx
 *
 * CopyRight (c) 2021-2022 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import {StaticImage} from 'gatsby-plugin-image';
import Head from '@/common/Head';
import MenuCard from '@/common/MenuCard';
import Background from '@/common/Background';
import '@/common/main.scss';
import '@/pages/top.scss';

export default () => {
  return (
    <>
      <Head title={''} desc={'プログラミングやゲームについてのブログ、プロフィール、ポートフォリオなど'} url={''} />
      <Background />
      <div className='top-container'>
        <div className='top-icon_and_name'>
          <StaticImage width={150} src='../assets/icon.jpg' alt='icon' />
          <h2>Welcome</h2>
        </div>
        <div className='top-menu'>
          <MenuCard text='About' url='/about' icon='fas fa-info-circle' />
          <MenuCard text='Blog' url='/blog' icon='fas fa-pen' />
          <MenuCard text='Profile' url='/profile' icon='fas fa-user' />
          <MenuCard text='Portfolio' url='/portfolio' icon='fas fa-rocket' />
        </div>
      </div>
    </>
  );
};
