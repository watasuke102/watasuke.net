/*!
 * Breadcrumb.ts
 *
 * CopyRight (c) 2021-2022 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */
import Breadcrumb from '@mytypes/Breadcrumb';

/**
 *
 * @param position 0-indexed
 * @param name 表示名
 * @param item リンクにしたい場合はURL slug (/blog' のように、ドメイン以降) を指定
 * @returns Breadcrumb
 */
export const GenBreadcrumb = (position: number, name: string, item?: string): Breadcrumb => {
  const breadcrumb: Breadcrumb = {
    '@type': 'ListItem',
    // 実際は1-indexed + pos1 は 'Top'
    position: position + 2,
    name: name,
    item: item && `https://watasuke.net${item}/`,
  };
  return breadcrumb;
};
