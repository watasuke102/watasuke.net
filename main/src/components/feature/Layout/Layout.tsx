// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './Layout.css';
import {Header} from './Header/Header';
import {Menu} from './Menu';
import {Footer} from './Footer';

interface Props {
  children: React.ReactNode;
}

export function Layout({children}: Props) {
  return (
    <main className={css.layout}>
      <Header />
      <div className={css.main_area}>{children}</div>
      <Menu />
      <Footer />
    </main>
  );
}
