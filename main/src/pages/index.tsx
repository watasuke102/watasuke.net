// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from '@pages/top.css';
import '@watasuke.net/common/src/css/base.css';
import {Seo, Background} from '@common';
import {graphql, Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';
import React from 'react';
import {ArticleCard} from '@feature/ArticleList/ArticleCard/ArticleCard';
import {GenBreadcrumb} from '@utils/Breadcrumb';
import {social_links} from '@data/social_links';
import IconCard from '@assets/icons/top/card.svg';
import IconEdit from '@assets/icons/top/edit.svg';
import IconInfo from '@assets/icons/top/info.svg';
import IconProfile from '@assets/icons/top/profile.svg';
import IconRocket from '@assets/icons/top/rocket.svg';
import Article from '@mytypes/Article';

const breadcrumb_list = GenBreadcrumb([]);

type Props = {
  data: {
    allArticles: {
      nodes: Article[];
    };
  };
};

export default function Index(props: Props): React.ReactElement {
  const menu_list = [
    {text: 'About', url: '/about', icon: <IconInfo />},
    {text: 'Blog', url: '/blog', icon: <IconEdit />},
    {text: 'Card', url: '/card', icon: <IconCard />},
    {text: 'Profile', url: '/profile', icon: <IconProfile />},
    {text: 'Portfolio', url: '/portfolio', icon: <IconRocket />},
  ];
  const links = [
    {data: social_links.twitter, class_name: `${css.link_entry} ${css.link_twitter}`},
    {data: social_links.github_account, class_name: css.link_entry},
    {data: social_links.instagram, class_name: css.link_entry},
    {data: social_links.soundcloud, class_name: `${css.link_entry} ${css.link_soundcloud}`},
    {data: social_links.cosense, class_name: css.link_entry},
    {data: social_links.question_box, class_name: css.link_entry},
  ];

  return (
    <>
      <Background />
      <main className={css.container}>
        <div className={css.left}>
          <div className={css.icon_and_welcome}>
            <StaticImage loading='eager' placeholder='none' width={240} src='../assets/icon.jpg' alt='icon' />
            <h2 className={css.welcome_head}>Welcome</h2>
          </div>
          <nav className={css.menu}>
            <code className={css.ls}>
              $ <span className={css.command_name}>ls</span> -1 <span className={css.directory}>watasuke.net</span>
            </code>
            {menu_list.map(e => (
              <Link key={e.text} to={e.url} className={css.menu_entry} aria-label={e.text}>
                {e.icon}
                <span className={css.menu_entry_path}>{e.text}</span>
              </Link>
            ))}
          </nav>
        </div>

        <h2 className={css.links_head}>― Social Links ―</h2>
        <nav className={css.link_container}>
          {links.map(e => (
            // eslint-disable-next-line jsx-a11y/anchor-has-content
            <a key={e.data.title} className={e.class_name} {...e.data} />
          ))}
        </nav>

        <h2 className={css.articles_head}>― Article recommendation ―</h2>
        <div className={css.favorite_articles}>
          {props.data.allArticles.nodes.map(e => (
            <ArticleCard key={e.slug} article={e} />
          ))}
        </div>
      </main>
    </>
  );
}

export const query = graphql`
  query favoriteArticles {
    allArticles(filter: {is_favorite: {eq: true}}, sort: {published_at: DESC}) {
      nodes {
        slug
        title
        tldr
        published_at
        tags {
          slug
          name
        }
      }
    }
  }
`;

export function Head(): React.ReactElement {
  return (
    <Seo
      title={''}
      desc={'プログラミングやゲームについてのブログ、プロフィール、ポートフォリオなど'}
      url={''}
      breadcrumb_list={breadcrumb_list}
    />
  );
}
