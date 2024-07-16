// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import {unified} from 'unified';
import {visit} from 'unist-util-visit';

export default function ExtractLink(md: string): string[] {
  const links: string[] = [];

  unified()
    .use(remarkParse)
    .use(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
      return (tree: any) => {
        visit(tree, 'link', node => {
          links.push(node.url);
        });
      };
    })
    .use(remarkRehype)
    .use(rehypeStringify)
    .processSync(md);

  return links;
}
