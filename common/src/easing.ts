// watasuke.net > common
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.

const easing_list = {
  out_quint: [0.22, 1, 0.36, 1],
  out_expo: [0.16, 1, 0.3, 1],
  out_circ: [0, 0.55, 0.45, 1],
} satisfies Record<string, number[]>;

type Easing = Record<
  keyof typeof easing_list,
  {array: number[]; cubic_bezier: string}
>;

export const easing: Easing = Object.keys(easing_list).reduce((acc, cur) => {
  const key = cur as keyof typeof easing_list;
  const array = easing_list[key];
  acc[key] = {
    array,
    cubic_bezier: `cubic-bezier(${array.join(', ')})`,
  };
  return acc;
}, {} as Easing);
