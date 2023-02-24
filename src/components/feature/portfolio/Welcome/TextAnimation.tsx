/*!
 * TextAnimation.tsx
 *
 * CopyRight (c) 2021-2023 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */
import {motion, Variants} from 'framer-motion';
import React from 'react';
import './TextAnimation.scss';

interface TextAnimationBody {
  text: string;
  type: 'link' | 'plain';
  break: boolean;
  link?: string;
}
interface Props {
  body: TextAnimationBody[];
  animation_enabled: boolean;
}

const Transition = {transition: {duration: 0, staggerChildren: 0.01}};
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

export const TextAnimation = (props: Props): React.ReactElement => {
  const [completed, SetCompleted] = React.useState(false);

  if (completed || !props.animation_enabled) {
    return (
      <>
        {' '}
        {props.body.map(body => {
          const text = (
            <>
              <span className='TextAnimation-block'>{body.text}</span>
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
      </>
    );
  }

  return (
    <motion.div
      variants={Container}
      initial={['fade_from', 'move_from']}
      animate={['fade_to', 'move_to']}
      onAnimationComplete={() => SetCompleted(true)}
    >
      {props.body.map(body => {
        const text = (
          <>
            {body.text.split('').map((char, i) => (
              <span key={`${i}${char}`} className='TextAnimation-block'>
                <motion.span className='TextAnimation-char' variants={Letter}>
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