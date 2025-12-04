// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import React from 'react';

const message = 'Are you sure you want to leave?';

/// prevent
export function useConfirmBeforeLeave(): (enable: boolean) => void {
  const enable = React.useRef(false);

  // for reloading
  const handle_unload = React.useCallback((e: BeforeUnloadEvent): void => {
    if (!enable.current || !confirm) {
      return;
    }
    if (!confirm(message)) {
      e.preventDefault();
    }
  }, []);
  // TODO: prevent browser back
  // const handle_popstate = React.useCallback((e: PopStateEvent): void => ..., []);

  React.useLayoutEffect(() => {
    window.addEventListener('beforeunload', handle_unload);
    return () => {
      window.removeEventListener('beforeunload', handle_unload);
    };
  }, [handle_unload]);

  // TODO: prevent for <Link>

  return (e: boolean) => (enable.current = e);
}
