/*!
 * Top.tsx
 *
 * CopyRight (c) 2021 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import MenuCard from '../components/MenuCard';
import Background from '../components/Background';
import '../styles/main.scss';
import '../styles/top.scss';

export default function Top() {
  return (
    <>
      <Background />
      <div className='top-container'>
        <div className='top-icon_and_name'>
          <StaticImage width={150} src='../assets/icon.jpg' alt='icon' />
          <h2>Welcome</h2>
        </div>
        <div className='top-menu'>
          <MenuCard text="What's this" url='/about' icon='info' />
          <MenuCard text='Blog' url='/blog' icon='edit' />
          <MenuCard text='Profile' url='/profile' icon='format_list_bulleted' />
          <MenuCard text='Portfolio' url='/portfolio' icon='flight_takeoff' />
        </div>
      </div>
    </>
  );
}
