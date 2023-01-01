/*!
 * index.tsx
 *
 * CopyRight (c) 2021-2023 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */
import '@/pages/top.scss';
import {StaticImage} from 'gatsby-plugin-image';
import React from 'react';
import Background from '@/common/Background';
import MenuCard from '@/common/MenuCard';
import Seo from '@/common/Seo';
import '@/common/main.scss';
import {GenBreadcrumb} from '@utils/Breadcrumb';

const breadcrumb_list = GenBreadcrumb([]);

export default () => {
  return (
    <>
      <Background />
      <div className='top-container'>
        <div className='top-icon_and_name'>
          <StaticImage loading='eager' placeholder='none' width={150} src='../assets/icon.jpg' alt='icon' />
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

export const Head = () => (
  <Seo
    title={''}
    desc={'プログラミングやゲームについてのブログ、プロフィール、ポートフォリオなど'}
    url={''}
    breadcrumb_list={breadcrumb_list}
  />
);
