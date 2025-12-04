// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import '@watasuke.net/common/src/css/base.css';
import React from 'react';
import {M_PLUS_Rounded_1c} from 'next/font/google';

// same trick with `main/src/app/layout.tsx`
/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-expect-error: ?
const _ = M_PLUS_Rounded_1c({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
});

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='ja'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
