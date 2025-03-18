// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.

export type SearchParams = {
  [key: string]: string | string[] | undefined;
};

/**
usage: in `page.tsx`,
```ts
export default async function PortfolioPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const foo = get_params(params, 'foo');
  // ...
}
```
*/
export function get_params(
  params: SearchParams,
  key: string,
): string | undefined {
  const entry = params[key];
  if (!entry) return undefined;
  if (Array.isArray(entry)) return entry[0];
  return entry;
}
