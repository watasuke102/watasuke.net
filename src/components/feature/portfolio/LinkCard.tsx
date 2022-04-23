/*!
 * LinkCard.tsx
 *
 * CopyRight (c) 2021-2022 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import {motion} from 'framer-motion';
import {FadeWithScroll} from '@utils/FadeWithScroll';
import './LinkCard.scss';

interface Props {
  title: string;
  url: string;
  icon: string;
  desc: string;
}

export default (props: Props) => {
  return (
    <motion.a href={props.url} className='LinkCard-container' {...FadeWithScroll}>
      <i className={props.icon} />
      <span className='head'>{props.title}</span>
      <p className='desc'>
        {props.desc.split('\\n').map(s => (
          <>
            {s}
            <br />
          </>
        ))}
      </p>
    </motion.a>
  );
};
