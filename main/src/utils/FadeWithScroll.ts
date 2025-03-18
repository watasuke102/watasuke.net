// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {MotionProps} from 'framer-motion';

export const FadeWithScroll: MotionProps = {
  initial: {opacity: 0, y: 30},
  whileInView: {opacity: 1, y: 0},
  transition: {duration: 0.5},
  viewport: {once: true, amount: 0.8},
};
