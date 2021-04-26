/*!
 * ProfileCard.tsx
 *
 * CopyRight (c) 2021 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import '../styles/ProfileCard.scss'

export default () => {
  const profile_text = useStaticQuery(graphql`
    query {
      siteData(slug: {eq: "short-profile"}) {
        body
      }
    }  
  `);
  return (
    <div className='ProfileCard-container'>
      <StaticImage width={80} src='../assets/icon.jpg' alt='icon' />
      <p>わたすけ</p>
      <p className='ProfileCard-body'>
        {profile_text.siteData.body}
        <br />
        プロフィール詳細は<Link to='/profile'>こちら</Link>
      </p>
    </div>
  )
}
