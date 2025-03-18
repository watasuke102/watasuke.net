// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import BreadcrumbItem from '@mytypes/Breadcrumb';

export const GenBreadcrumb = (
  list: {name: string; item?: string}[],
): BreadcrumbItem[] => {
  const breadcrumb: BreadcrumbItem[] = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Top',
      item: '/',
    },
  ];

  return breadcrumb.concat(
    list.map((e, i) => {
      return {
        '@type': 'ListItem',
        // 実際は1-indexed + pos1 は 'Top'
        position: i + 2,
        name: e.name,
        item: e.item,
      };
    }),
  );
};
