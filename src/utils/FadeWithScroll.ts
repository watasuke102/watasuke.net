/*!
 * FadeWithScroll.ts
 *
 * CopyRight (c) 2021-2022 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

export const FadeWithScroll = {
  initial: {opacity: 0, y: 30},
  whileInView: {opacity: 1, y: 0},
  transition: {duration: 0.5},
  viewport: {once: true, amount: 0.8},
};
