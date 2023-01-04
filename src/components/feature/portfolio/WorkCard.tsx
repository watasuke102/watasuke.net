/*!
 * WorkCard.tsx
 *
 * CopyRight (c) 2021-2023 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */
import {motion} from 'framer-motion';
import React from 'react';
import {FadeWithScroll} from '@utils/FadeWithScroll';
import './WorkCard.scss';

interface Props {
  title: string;
  url: string;
  image: React.ReactElement;
  desc: string;
}

export const WorkCard = (props: Props): React.ReactElement => {
  return (
    <motion.div className='WorkCard-container' {...FadeWithScroll}>
      {props.image}
      <div className='desc'>
        <a href={props.url}>{props.title}</a>
        <p>
          {props.desc.split('\\n').map(s => (
            <>
              {s}
              <br />
            </>
          ))}
        </p>
      </div>
    </motion.div>
  );
};
