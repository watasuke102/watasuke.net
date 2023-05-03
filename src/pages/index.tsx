// index.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as style from '@/pages/top.css';
import {Seo, Background} from '@/common';
import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';
import React from 'react';
import '@/common/main.scss';
import {GenBreadcrumb} from '@utils/Breadcrumb';

const breadcrumb_list = GenBreadcrumb([]);

export default function Index(): React.ReactElement {
  const menu_list = [
    {text: 'About', url: '/about', icon: 'fa-solid fa-info-circle'},
    {text: 'Blog', url: '/blog', icon: 'fa-solid fa-pen'},
    {text: 'Card', url: '/card', icon: 'fa-solid fa-address-card'},
    {text: 'Profile', url: '/profile', icon: 'fa-solid fa-user'},
    {text: 'Portfolio', url: '/portfolio', icon: 'fa-solid fa-rocket'},
  ];

  return (
    <>
      <Background />
      <div className={style.container}>
        <div className={style.icon_and_name}>
          <StaticImage loading='eager' placeholder='none' width={150} src='../assets/icon.jpg' alt='icon' />
          <h2 className={style.welcome}>Welcome</h2>
        </div>
        <div className={style.menu}>
          {menu_list.map(e => (
            <Link key={e.text} to={e.url} className={style.menu_card} aria-label={e.text}>
              <i className={`${style.menu_card_icon} ${e.icon}`} />
              <span className={style.menu_card_text}>{e.text}</span>
            </Link>
          ))}
        </div>
      </div>
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
