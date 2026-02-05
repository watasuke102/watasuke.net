// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {Transition as TransitionVar} from 'framer-motion';

export const Transition = (
  enabled: boolean,
  props: TransitionVar,
): TransitionVar => (enabled ? props : {duration: 0});
