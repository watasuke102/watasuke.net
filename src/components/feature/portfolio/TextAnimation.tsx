/*!
 * TextAnimation.tsx
 *
 * CopyRight (c) 2021-2022 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import {motion, Variants} from 'framer-motion';

interface TextAnimationBody {
  text: string;
  type: 'link' | 'plain';
  break: boolean;
  link?: string;
}
interface Props {
  body: TextAnimationBody[];
}

const Transition = {transition: {duration: 0, delayChildren: 1.5, staggerChildren: 0.01}};
const Container = {
  fade_to: Transition,
  move_to: Transition,
};
const Letter: Variants = {
  fade_from: {opacity: 0},
  fade_to: {opacity: 1, transition: {duration: 1}},

  move_from: {y: '150%'},
  move_to: {y: 0, transition: {duration: 0.5, ease: 'circOut'}},
};

export default (props: Props) => {
  return (
    <motion.div variants={Container} initial={['fade_from', 'move_from']} animate={['fade_to', 'move_to']}>
      {props.body.map(body => {
        const text = (
          <>
            {body.text.split('').map(char => (
              <span style={{display: 'inline-block', overflow: 'hidden'}}>
                <motion.span style={{display: 'inline-block'}} variants={Letter}>
                  {char}
                </motion.span>
              </span>
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
