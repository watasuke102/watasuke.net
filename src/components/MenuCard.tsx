/*!
 * MenuCard.tsx
 *
 * CopyRight (c) 2021-2022 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import {navigate} from 'gatsby';
import '../styles/MenuCard.scss';

interface Props {
  icon: string;
  text: string;
  url: string;
}

export default (props: Props) => {
  return (
    <div className='MenuCard-container' onClick={() => navigate(props.url)}>
      <i className={props.icon} />
      <p>{props.text}</p>
    </div>
  );
};
