// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as config from '@watasuke.net/config/config';
import '@watasuke.net/common/src/css/base.css';
import {M_PLUS_Rounded_1c} from 'next/font/google';
import {GoogleAnalytics} from '@next/third-parties/google';

/* eslint-disable @typescript-eslint/no-unused-vars
   --
  * `font-family` is set by `base.css`
  * `ts-expect-error` prevents from using `eslint-disable-next-line`
  so I'm forced to use `eslint-disable` here
*/
// @ts-expect-error: ?
const _ = M_PLUS_Rounded_1c({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
});

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='ja'>
      <head></head>
      <body>{children}</body>
      {/* 
      eslint-disable-next-line @typescript-eslint/ban-ts-comment
      --
      When `config.trackingId` is set, the compiler raises the error
      that says `comparison appears to be unintentional`
      because comparison result seems obvious for compiler
      But config file can be changed, so it's actually not obvious!
      */}
      {/* @ts-ignore: ??? */}
      {config.trackingId !== '_' && (
        <GoogleAnalytics gaId={config.trackingId} />
      )}
    </html>
  );
}
