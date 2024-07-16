// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from '@pages/top.css';
import '@watasuke.net/common/src/css/base.css';
import {Seo, Background} from '@common';
import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';
import React from 'react';
import {GenBreadcrumb} from '@utils/Breadcrumb';
import IconCard from '@assets/icons/top/card.svg';
import IconEdit from '@assets/icons/top/edit.svg';
import IconInfo from '@assets/icons/top/info.svg';
import IconProfile from '@assets/icons/top/profile.svg';
import IconRocket from '@assets/icons/top/rocket.svg';

const breadcrumb_list = GenBreadcrumb([]);

export default function Index(): React.ReactElement {
  const menu_list = [
    {text: 'About', url: '/about', icon: <IconInfo />},
    {text: 'Blog', url: '/blog', icon: <IconEdit />},
    {text: 'Card', url: '/card', icon: <IconCard />},
    {text: 'Profile', url: '/profile', icon: <IconProfile />},
    {text: 'Portfolio', url: '/portfolio', icon: <IconRocket />},
  ];

  return (
    <>
      <Background />
      <main className={css.container}>
        <section className={css.icon_and_name}>
          <StaticImage loading='eager' placeholder='none' width={150} src='../assets/icon.jpg' alt='icon' />
          <h2 className={css.welcome}>Welcome</h2>
        </section>
        <nav className={css.menu}>
          {menu_list.map(e => (
            <Link key={e.text} to={e.url} className={css.menu_card} aria-label={e.text}>
              <div className={css.menu_card_icon}> {e.icon} </div>
              <span className={css.menu_card_text}>{e.text}</span>
            </Link>
          ))}
        </nav>
      </main>
    </>
  );
}

export const Head = (): React.ReactElement => (
  <Seo
    title={''}
    desc={'プログラミングやゲームについてのブログ、プロフィール、ポートフォリオなど'}
    url={''}
    breadcrumb_list={breadcrumb_list}
  />
);
