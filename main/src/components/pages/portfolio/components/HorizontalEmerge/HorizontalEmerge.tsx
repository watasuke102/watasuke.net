// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './HorizontalEmerge.css';
import {motion, MotionProps} from 'framer-motion';
import {easing} from '@watasuke.net/common';

interface Props {
  height?: number;
  delay: number;
  duration: number;
  children: React.ReactNode;
}

export function HorizontalEmerge(props: Props) {
  const motion_props: MotionProps['transition'] = {
    duration: props.duration,
    delay: props.delay,
  };

  return (
    <motion.span
      style={{
        position: 'relative',
        display: 'block',
        height: props.height ?? 'auto',
      }}
    >
      <motion.span
        animate={{
          opacity: [0, 0, 0.9, 1],
        }}
        transition={{
          ...motion_props,
          times: [0, 0.5, 0.5, 1],
        }}
      >
        {props.children}
      </motion.span>
      <motion.span
        animate={{
          left: ['0%', '0%', '100%'],
          width: ['0%', '100%', '0%'],
        }}
        className={css.animator}
        transition={{
          ...motion_props,
          ease: easing.out_expo.array,
        }}
      />
    </motion.span>
  );
}
