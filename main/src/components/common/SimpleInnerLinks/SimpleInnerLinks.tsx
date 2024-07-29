// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './SimpleInnerLinks.css';
import {Link} from 'gatsby';

export function SimpleInnerLinks(): JSX.Element {
  return (
    // fragment is needed because of prettier-ignore
    <>
      {/* prettier-ignore */}
      <ol className={css.links}>
        <li> <Link to='/'>Top</Link>                </li>
        <li> <Link to='/blog'>Blog</Link>           </li>
        <li> <Link to='/portfolio'>Portfolio</Link> </li>
        <li> <Link to='/profile'>Profile</Link>     </li>
        <li> <Link to='/card'>Card</Link>           </li>
        <li> <Link to='/about'>About</Link>         </li>
      </ol>
    </>
  );
}
