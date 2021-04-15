/*!
 * Top.tsx
 *
 * CopyRight (c) 2021 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import '../styles/top.scss';
import MenuCard from '../components/MenuCard';
import Icon from '../assets/icon.jpg';

export default function Top() {
  console.log(Icon);
  return (
    <div className='top-container'>
      <div className='top-icon_and_name'>
        <img width={150} src={Icon} alt='icon' />
        <h2>Welcome</h2>
      </div>
      <div className='top-menu'>
        <MenuCard text='Blog' url='/blog' icon='edit' />
        <MenuCard text='Profile' url='/profile' icon='format_list_bulleted' />
        <MenuCard text='Portfolio' url='/portfolio' icon='flight_takeoff' />
      </div>
    </div>
  );
}
