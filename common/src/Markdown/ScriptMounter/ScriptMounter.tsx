// watasuke.net > common
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
'use client';

import React from 'react';

export function ScriptMounter() {
  React.useEffect(() => {
    setTimeout(() => {
      if (
        document.body.getElementsByClassName('twitter-widgets-script')
          .length !== 0
      ) {
        return;
      }
      // Twitter embed
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.className = 'twitter-widgets-script';
      document.body.appendChild(script);
    }, 0);
    return () =>
      Array.from(
        document.body.getElementsByClassName('twitter-widgets-script') ?? [],
      ).forEach(e => e.remove());
  }, []);
  return <></>;
}
