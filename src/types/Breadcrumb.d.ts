// Breadcrumb.d.ts
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT SUSHI-WARE License.
export default interface BreadcrumbItem {
  '@type': 'ListItem';
  // begin with 2 (1 is 'Top')
  position: number;
  name: string;
  // relative path (ex: '/blog/article')
  item?: string;
}
