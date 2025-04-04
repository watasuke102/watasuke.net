// watasuke.net > editor
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import React from 'react';

export function useShortcut(
  actions: {keycode: string; handler: () => void}[],
  opt?: {ctrl?: boolean; shift?: boolean},
): void {
  const shortcut = React.useCallback(
    (event: KeyboardEvent) => {
      if (event.repeat) {
        return;
      }
      if (opt?.ctrl && !event.ctrlKey) {
        return;
      }
      if (opt?.shift && !event.shiftKey) {
        return;
      }
      actions.forEach(action => {
        if (event.code === action.keycode) {
          event.preventDefault();
          action.handler();
        }
      });
    },
    [actions],
  );
  React.useEffect(() => {
    window.addEventListener('keydown', shortcut);
    return () => {
      window.removeEventListener('keydown', shortcut);
    };
  }, [actions]);
}
