// watasuke.net > common
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import GithubSlugger from 'github-slugger';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import {unified} from 'unified';
import {visit} from 'unist-util-visit';
import {Heading} from '@watasuke.net/common';

export function ExtractHeading(md: string): Heading[] {
  const heads: Heading[] = [];
  // use same slug generator with `remark-slug`
  const slugger = new GithubSlugger();

  unified()
    .use(remarkParse)
    .use(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (tree: any) => {
        visit(tree, 'heading', node => {
          const body = node.children[0].value;
          heads.push({
            size: node.depth,
            body,
            slug: slugger.slug(body),
          });
        });
      };
    })
    .use(remarkRehype)
    .use(rehypeStringify)
    .processSync(md);

  return heads;
}
