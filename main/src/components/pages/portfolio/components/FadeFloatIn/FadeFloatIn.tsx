// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import React from 'react';
import {motion} from 'framer-motion';
import {easing} from '@watasuke.net/common';

interface Props {
  delay: number;
  duration: number;
  children: React.ReactNode;
}

export function FadeFloatIn(props: Props) {
  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{
        delay: props.delay,
        duration: props.duration,
        ease: easing.out_expo.array,
      }}
    >
      {props.children}
    </motion.div>
  );
}
