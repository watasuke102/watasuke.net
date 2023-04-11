// ProfileCard.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT SUSHI-WARE License.
import {graphql, Link, useStaticQuery} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';
import React from 'react';
import * as style from './ProfileCard.css';

export const ProfileCard = (): React.ReactElement => {
  const profile_text = useStaticQuery(graphql`
    query {
      siteData(slug: {eq: "short-profile"}) {
        body
      }
    }
  `);
  return (
    <section className={style.container}>
      <StaticImage className={style.avatar} width={80} src='../../../assets/icon.jpg' alt='icon' />
      <p>わたすけ</p>
      <p className={style.body}>
        {profile_text.siteData.body}
        <br />
        プロフィール詳細は<Link to='/profile'>こちら</Link>
      </p>
    </section>
  );
};
