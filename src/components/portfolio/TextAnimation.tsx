/*!
 * TextAnimation.tsx
 *
 * CopyRight (c) 2021-2022 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import {motion} from 'framer-motion';
import '../../styles/SkillCard.scss';

interface TextAnimationBody {
  text: string;
  type: 'link' | 'plain';
  break: boolean;
  link?: string;
}
interface Props {
  body: TextAnimationBody[];
}

const Container = {
  from: {},
  to: {transition: {duration: 0, delayChildren: 1.5, staggerChildren: 0.01}},
};
const Letter = {
  from: {opacity: 0, y: '120%'},
  to: {opacity: 1, y: 0},
};

export default (props: Props) => {
  return (
    <motion.div variants={Container} initial={'from'} animate={'to'}>
      {props.body.map(body => {
        const text = (
          <>
            {body.text.split('').map(char => (
              <motion.span style={{display: 'inline-block'}} variants={Letter} transition={{duration: 1.5}}>
                {char}
              </motion.span>
            ))}
            {body.break === true && <br />}
          </>
        );
        switch (body.type) {
          case 'plain':
            return <span>{text}</span>;
          case 'link':
            return <a href={body.link ?? ''}>{text}</a>;
        }
      })}
    </motion.div>
  );
};
