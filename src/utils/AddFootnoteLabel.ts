// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {visit} from 'unist-util-visit';

const map = new Map<number, string>();
export const remarkAddFootnoteLabel = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  return (tree: any) => {
    map.clear();
    let counter = -1;
    visit(tree, 'footnoteDefinition', node => {
      ++counter;
      visit(node, child => {
        if (child.value) {
          map.set(counter, (map.get(counter) ?? '') + child.value);
        }
      });
    });
  };
};

export const rehypeAddFootnoteLabel = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (tree: any) => {
    let counter = 0;
    visit(tree, 'element', node => {
      const aria_described_by = node.properties.ariaDescribedBy ?? [''];
      if (aria_described_by[0] !== 'footnote-label') {
        return;
      }
      node.properties['title'] = map.get(counter);
      ++counter;
    });
  };
};
