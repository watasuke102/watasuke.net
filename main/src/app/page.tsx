// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from '@pages/top.css';
import '@watasuke.net/common/style/base.css';
import React from 'react';
import Link from 'next/link';
import {classnames as cs} from '@watasuke.net/common/style/classnames';
import {Avatar} from '@common/Avatar/Avatar';
import {GenBreadcrumb} from '@utils/Breadcrumb';
import {gen_template, JsonLd} from '@utils/Metadata';
import IconCard from '@assets/icons/top/card.svg';
import IconLink from '@assets/icons/top/link.svg';
import IconEdit from '@assets/icons/top/edit.svg';
import IconInfo from '@assets/icons/top/info.svg';
import IconProfile from '@assets/icons/top/profile.svg';
import IconRocket from '@assets/icons/top/rocket.svg';
import IconFeed from '@assets/icons/general/feed.svg';

const breadcrumb_list = GenBreadcrumb([]);
export const {viewport, metadata} = gen_template(
  '',
  '「わたすけのへや」へようこそ！プログラミング等についてのブログやプロフィール、ポートフォリオなどを掲載しています',
  '',
);

export default function Index() {
  // prettier-ignore
  const primary_menu_list = [
    {text: 'Blog',      url: '/blog',      icon: <IconEdit />},
    {text: 'Links', url: '/links', icon: <IconLink />},
    {text: 'Profile',   url: '/profile',   icon: <IconProfile />},
    {text: 'Portfolio', url: '/portfolio', icon: <IconRocket />},
  ];
  const secondary_menu_list = [
    {text: 'About', url: '/about', icon: <IconInfo />},
    {text: 'Feeds', url: '/feeds', icon: <IconFeed />},
    {text: 'Card', url: '/card', icon: <IconCard />},
  ];

  return (
    <>
      <JsonLd breadcrumb_list={breadcrumb_list} />
      <div className={css.wrapper}>
        <main className={css.main_contents}>
          <div className={css.welcome_area}>
            <Avatar size={240} loading='eager' />
            <h2>Welcome!</h2>
          </div>
          <nav className={cs(css.links, css.primary_links)}>
            {primary_menu_list.map(e => (
              <Link
                key={e.url}
                href={e.url}
                className={cs(css.links_item, css.primary_item)}
              >
                <div className={css.links_item_icon}>{e.icon}</div>
                <span
                  className={cs(css.links_item_text, css.primary_item_text)}
                >
                  {e.text}
                </span>
              </Link>
            ))}
          </nav>
          <nav className={css.links}>
            {secondary_menu_list.map(e => (
              <Link
                key={e.url}
                href={e.url}
                className={cs(css.links_item, css.secondary_item)}
              >
                <div className={css.links_item_icon}>{e.icon}</div>
                <span
                  className={cs(css.links_item_text, css.secondary_item_text)}
                >
                  {e.text}
                </span>
              </Link>
            ))}
          </nav>
        </main>
      </div>
    </>
  );
}
