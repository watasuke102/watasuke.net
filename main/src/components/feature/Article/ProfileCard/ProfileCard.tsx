// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './ProfileCard.css';
import {graphql, Link, useStaticQuery} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';
import React from 'react';

export const ProfileCard = (): React.ReactElement => {
  const query = useStaticQuery(graphql`
    query {
      siteData(slug: {eq: "short_profile"}) {
        body
      }
    }
  `);
  return (
    <section className={css.container}>
      <StaticImage className={css.avatar} width={80} src='../../../../assets/icon.jpg' alt='icon' />
      <p>わたすけ</p>
      <p className={css.body}>
        {query.siteData.body ?? ''}
        <br />
        プロフィール詳細は<Link to='/profile'>こちら</Link>
      </p>
    </section>
  );
};
