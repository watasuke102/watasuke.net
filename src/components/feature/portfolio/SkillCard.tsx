/*!
 * SkillCard.tsx
 *
 * CopyRight (c) 2021-2023 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */
import {motion} from 'framer-motion';
import React from 'react';
import './SkillCard.scss';

interface Props {
  name: string;
  body?: string;
}

export default (props: Props) => {
  return (
    <motion.div
      className='SkillCard-container'
      initial={{opacity: 0, y: 30}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      viewport={{once: true, amount: 0.3}}
    >
      <p className='name'>{props.name}</p>
      {props.body && <p className='body'>{props.body}</p>}
    </motion.div>
  );
};
