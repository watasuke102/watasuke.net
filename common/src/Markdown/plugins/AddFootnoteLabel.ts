// watasuke.net > common
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {visit} from 'unist-util-visit';

const map = new Map<string, string>();
export const remarkAddFootnoteLabel = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (tree: any) => {
    map.clear();
    visit(tree, 'footnoteDefinition', node => {
      const id = `user-content-fnref-${node.identifier}`;
      visit(node, child => {
        if (child.value) {
          map.set(id, (map.get(id) ?? '') + child.value);
        }
      });
    });
  };
};

export const rehypeAddFootnoteLabel = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (tree: any) => {
    visit(tree, 'element', node => {
      const aria_described_by = node.properties.ariaDescribedBy ?? [''];
      if (aria_described_by[0] !== 'footnote-label') {
        return;
      }
      node.properties['title'] = map.get(node.properties.id);
    });
  };
};
