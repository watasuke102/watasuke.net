// watasuke.net > editor
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {useRouter} from 'next/navigation';
import React from 'react';

const message = 'Are you sure you want to leave?';

/// prevent
export function useConfirmBeforeLeave(): (enable: boolean) => void {
  const router = useRouter();
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
  }, []);

  // for <Link>
  React.useEffect(() => {
    const next_push = router.push;
    router.push = (href, options) => {
      if (!enable.current || (confirm && confirm(message))) {
        next_push(href, options);
      }
    };
    return () => {
      router.push = next_push;
    };
  }, [router, enable]);

  return (e: boolean) => (enable.current = e);
}
