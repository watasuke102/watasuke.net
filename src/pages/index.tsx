/*!
 * index.tsx
 *
 * CopyRight (c) 2021-2023 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */
import '@/pages/top.scss';
import {Seo, Background} from '@/common';
import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';
import React from 'react';
import '@/common/main.scss';
import {GenBreadcrumb} from '@utils/Breadcrumb';

const breadcrumb_list = GenBreadcrumb([]);

export default function Index(): React.ReactElement {
  const menu_list = [
    {text: 'About', url: '/about', icon: 'fas fa-info-circle'},
    {text: 'Blog', url: '/blog', icon: 'fas fa-pen'},
    {text: 'Profile', url: '/profile', icon: 'fas fa-user'},
    {text: 'Portfolio', url: '/portfolio', icon: 'fas fa-rocket'},
  ];

  return (
    <>
      <Background />
      <div className='top-container'>
        <div className='top-icon_and_name'>
          <StaticImage loading='eager' placeholder='none' width={150} src='../assets/icon.jpg' alt='icon' />
          <h2>Welcome</h2>
        </div>
        <div className='top-menu'>
          {menu_list.map(e => (
            <Link key={e.text} to={e.url} className='top-menu_card' aria-label={e.text}>
              <i className={e.icon} />
              <span>{e.text}</span>
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
