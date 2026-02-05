// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {MotionProps} from 'framer-motion';
import {easing} from '@watasuke.net/common';

export const floatup_with_scroll: MotionProps = {
  variants: {
    initial: {opacity: 0, y: 20},
    animate: {opacity: 1, y: 0},
  },
  initial: 'initial',
  whileInView: 'animate',
  viewport: {once: true, amount: 1.0},
  transition: {
    when: 'beforeChildren',
    duration: 0.6,
    ease: easing.out_expo.array,
  },
};
