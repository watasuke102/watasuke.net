// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
const jst = 9 /*hours*/ * 60 /*minutes*/ * 60 /*sec*/ * 1000; /*ms*/

/// Receive date that expresses JST and return 'YYYY-MM-DDTHH:mm:ss+0900'-formatted string
/// if date isn't provided, current datetime is used
/// ex) date_to_jst_str(new Date('2025-01-23T11:22:33Z'))
///     -> '2025-01-23T20:22:33+0900'
export function date_to_jst_str(d?: Date): string {
  const time = d?.getTime() ?? Date.now();
  // remove `.???Z` (? is msec) and convert JST string
  return new Date(time + jst).toISOString().slice(0, -5) + '+0900';
}
