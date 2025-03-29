// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {test, expect} from '@playwright/test';

interface TestCase {
  suffix: string;
  path: string; // must be started with '/'
}

const cases: TestCase[] = [
  {suffix: 'Top', path: '/'},
  {suffix: 'Card', path: '/card/'},
  {suffix: 'Portfolio', path: '/portfolio/'},
  {suffix: 'ArticleList', path: '/blog/'},
  // maybe the best example; has embed (internal/external), image, footnote, table, collapsible, math expression
  {suffix: 'Article', path: '/blog/article/what-i-did-for-univ3rd-transfer/'},
];

cases.forEach(e => {
  test(`Regression:${e.suffix}`, async ({page}) => {
    await page.goto(`http://localhost:10210${e.path}`);
    await expect(page).toHaveScreenshot({fullPage: true});
  });
});
