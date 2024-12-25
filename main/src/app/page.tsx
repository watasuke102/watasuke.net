// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from '@pages/top.css';
import '@watasuke.net/common/src/css/base.css';
import {Avatar, Background} from '@common';
import React from 'react';
import Link from 'next/link';
import {ArticleCard} from '@feature/ArticleList/ArticleCard/ArticleCard';
import {GenBreadcrumb} from '@utils/Breadcrumb';
import {gen_template, JsonLd} from '@utils/Metadata';
import {ql} from '@utils/QL';
import {social_links} from '@data/social_links';
import IconCard from '@assets/icons/top/card.svg';
import IconEdit from '@assets/icons/top/edit.svg';
import IconInfo from '@assets/icons/top/info.svg';
import IconProfile from '@assets/icons/top/profile.svg';
import IconRocket from '@assets/icons/top/rocket.svg';

const breadcrumb_list = GenBreadcrumb([]);
export const {viewport, metadata} = gen_template(
  '',
  '「わたすけのへや」へようこそ！プログラミング等についてのブログやプロフィール、ポートフォリオなどを掲載しています',
  '',
);

export default async function Index() {
  const {allPublicArticles} = await ql().allFavoriteArticles();
  const menu_list = [
    {text: 'About', url: '/about', icon: <IconInfo />},
    {text: 'Blog', url: '/blog', icon: <IconEdit />},
    {text: 'Card', url: '/card', icon: <IconCard />},
    {text: 'Profile', url: '/profile', icon: <IconProfile />},
    {text: 'Portfolio', url: '/portfolio', icon: <IconRocket />},
  ];
  const links = [
    {
      data: social_links.twitter,
      class_name: `${css.link_entry} ${css.link_twitter}`,
    },
    {data: social_links.github_account, class_name: css.link_entry},
    {data: social_links.instagram, class_name: css.link_entry},
    {
      data: social_links.soundcloud,
      class_name: `${css.link_entry} ${css.link_soundcloud}`,
    },
    {data: social_links.cosense, class_name: css.link_entry},
    {data: social_links.question_box, class_name: css.link_entry},
  ];

  return (
    <>
      <Background />
      <JsonLd breadcrumb_list={breadcrumb_list} />
      <main className={css.container}>
        <div className={css.left}>
          <div className={css.icon_and_welcome}>
            <Avatar size={240} loading='eager' />
            <h2 className={css.welcome_head}>Welcome</h2>
          </div>
          <nav className={css.menu}>
            <code className={css.ls}>
              $ <span className={css.command_name}>ls</span> -1{' '}
              <span className={css.directory}>watasuke.net</span>
            </code>
            {menu_list.map(e => (
              <Link
                key={e.text}
                href={e.url}
                className={css.menu_entry}
                aria-label={e.text}
              >
                {e.icon}
                <span className={css.menu_entry_path}>{e.text}</span>
              </Link>
            ))}
          </nav>
        </div>

        <section className={css.links_container}>
          <h2 className={css.info_head}>― Social Links ―</h2>
          <nav className={css.link_container}>
            {links.map(e => (
              // eslint-disable-next-line jsx-a11y/anchor-has-content
              <a key={e.data.title} className={e.class_name} {...e.data} />
            ))}
          </nav>
        </section>

        <section className={css.articles_container}>
          <h2 className={css.info_head}>― Article Picks ―</h2>
          <div className={css.favorite_articles}>
            {allPublicArticles.map(e => (
              <ArticleCard key={e.slug} article={e} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
