// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {IRange, languages} from 'monaco-editor';

export function generate_suggestions(
  range: IRange,
): languages.CompletionItem[] {
  return [
    {
      label: 'Collapsible',
      kind: languages.CompletionItemKind.Snippet,
      insertTextRules: languages.CompletionItemInsertTextRule.InsertAsSnippet,
      insertText: `<details>
  <summary>\${1:title}</summary>

  \${2:content}

</details>`,
      range,
    },
  ];
}
