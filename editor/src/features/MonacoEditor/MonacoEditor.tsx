// watasuke.net > editor
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import Editor, {useMonaco} from '@monaco-editor/react';
import {onedark} from './onedark';
import {generate_suggestions} from './suggestions';

interface Props {
  body: string;
  on_change: (e: string) => void;
}

export function MonacoEditor(props: Props) {
  const monaco = useMonaco();
  if (monaco) {
    monaco.editor.defineTheme('onedark', onedark);
    monaco.languages.registerCompletionItemProvider('markdown', {
      provideCompletionItems: (model, pos) => {
        const word = model.getWordUntilPosition(pos);
        if (word.startColumn !== 0) {
          return {suggestions: []};
        }
        const range = {
          startLineNumber: pos.lineNumber,
          endLineNumber: pos.lineNumber,
          startColumn: word.startColumn,
          endColumn: word.endColumn,
        };
        return {
          suggestions: generate_suggestions(range),
        };
      },
    });
  }

  return (
    <Editor
      language='markdown'
      defaultValue={props.body}
      onChange={e => props.on_change(e ?? '')}
      theme='onedark'
      options={{
        fontFamily:
          '"Moralerspace Krypton HWJPDOCNF", "Moralerspace Krypton HWNF",  Consolas, monospace',
        minimap: {enabled: false},
        occurrencesHighlight: 'off',
        wordBasedSuggestions: 'off',
        wordWrap: 'on',
      }}
    />
  );
}
