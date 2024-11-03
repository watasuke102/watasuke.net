// watasuke.net > common
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
export function classnames(...args: unknown[]): string {
  const classes = new Array<string>();
  for (const i in args) {
    if (typeof args[i] === 'string') {
      classes.push(args[i]);
    }
  }
  return classes.join(' ');
}
