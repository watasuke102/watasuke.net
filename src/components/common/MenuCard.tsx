/*!
 * MenuCard.tsx
 *
 * CopyRight (c) 2021-2023 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */
import {Link} from 'gatsby';
import React from 'react';
import './MenuCard.scss';

interface Props {
  icon: string;
  text: string;
  url: string;
}

export default (props: Props) => {
  return (
    <Link to={props.url} className='MenuCard-container' aria-label={props.text}>
      <i className={props.icon} />
      <span>{props.text}</span>
    </Link>
  );
};
