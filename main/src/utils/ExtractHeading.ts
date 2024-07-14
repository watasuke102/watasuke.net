// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import remarkParse from 'remark-parse';
import {unified} from 'unified';
import {visit} from 'unist-util-visit';
import Heading from '@mytypes/Heading';

export default function ExtractHeading(md: string): Heading[] {
  const heads: Heading[] = [];

  unified()
    .use(remarkParse)
    .use(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
      return (tree: any) => {
        visit(tree, 'heading', node => {
          heads.push({size: node.depth, body: node.children[0].value});
        });
      };
    })
    .process(md);

  return heads;
}
