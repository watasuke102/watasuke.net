/*!
 * Top.tsx
 *
 * CopyRight (c) 2021 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import MenuCard from '../components/MenuCard';
import Background from '../components/Background';
import Icon from '../assets/icon.jpg';
import '../styles/top.scss';

export default function Top() {
  return (
    <>
      <Background />
      <div className='top-container'>
        <div className='top-icon_and_name'>
          <img width={150} src={Icon} alt='icon' loading='lazy' />
          <h2>Welcome</h2>
        </div>
        <div className='top-menu'>
          <MenuCard text='Blog' url='/blog' icon='edit' />
          <MenuCard text='Profile' url='/profile' icon='format_list_bulleted' />
          <MenuCard text='Portfolio' url='/portfolio' icon='flight_takeoff' />
        </div>
      </div>
    </>
  );
}
