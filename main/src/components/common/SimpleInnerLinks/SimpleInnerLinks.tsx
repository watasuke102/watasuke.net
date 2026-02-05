// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './SimpleInnerLinks.css';
import Link from 'next/link';

export function SimpleInnerLinks() {
  return (
    // fragment is needed because of prettier-ignore
    <>
      {/* prettier-ignore */}
      <ol className={css.links}>
        <li> <Link href='/'>Top</Link>                </li>
        <li> <Link href='/blog'>Blog</Link>           </li>
        <li> <Link href='/portfolio'>Portfolio</Link> </li>
        <li> <Link href='/profile'>Profile</Link>     </li>
        <li> <Link href='/card'>Card</Link>           </li>
        <li> <Link href='/about'>About</Link>         </li>
      </ol>
    </>
  );
}
