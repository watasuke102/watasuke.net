// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import '@watasuke.net/common/src/css/base.css';
import React from 'react';

export default function RootLayout({children}: {children: React.ReactNode}): JSX.Element {
  return (
    <html lang='ja'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link
          href='https://fonts.googleapis.com/css2?family=M+PLUS+1p&family=M+PLUS+Rounded+1c&display=swap'
          rel='stylesheet'
        ></link>
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
