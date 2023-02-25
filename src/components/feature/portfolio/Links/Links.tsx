// Links.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT SUSHI-WARE License.
import {graphql, useStaticQuery} from 'gatsby';
import React from 'react';
import toml from 'toml';
import { LinkCard } from './LinkCard';
import './Links.scss';

interface Link {
  title: string;
  icon: string;
  url: string;
  desc_ja: string;
  desc_en: string;
}

interface Props {
  lang: string;
}

export const Links = (props: Props): React.ReactElement => {
  const link_list: Link[] = toml.parse(
    useStaticQuery(graphql`
      query {
        portfolioToml(name: {eq: "Links.toml"}) {
          body
        }
      }
    `).portfolioToml.body,
  ).link;

  return (
    <div id='portfolio-links'>
      <h2>Links</h2>
      <div className='container'>
        {link_list.map((link, i) => (
          <LinkCard
            key={i}
            title={link.title}
            url={link.url}
            icon={link.icon}
            desc={props.lang !== 'en' ? link.desc_ja : link.desc_en}
          />
        ))}
        {/* <LinkCard
          title='Twitter (@Watasuke102)'
          url='https://twitter.com/Watasuke102'
          icon='fab fa-twitter'
          desc='メンションもしくはDMに反応します\n （恐らく最速で反応できる連絡手段です）'
        />
        <LinkCard
          title='SoundCloud'
          url='https://soundcloud.com/watasuke'
          icon='fab fa-soundcloud'
          desc='今までに作った曲を投稿しています'
        />
        <LinkCard
          title='GitHub'
          url='https://github.com/watasuke102'
          icon='fab fa-github'
          desc='いろいろつくってます'
        />
        <LinkCard
          title='YouTube'
          url='https://www.youtube.com/@watasuke'
          icon='fab fa-youtube'
          desc='稀に何らかの動画を上げます'
        />
        <LinkCard
          title='Scrapbox'
          url='https://scrapbox.io/watasuke'
          icon='fas fa-edit'
          desc='自分語りなどをしています'
        />
        <LinkCard
          title='質問箱'
          url='https://peing.net/ja/watasuke102'
          icon='fas fa-box-open'
          desc='匿名で質問ができます'
        />
        <LinkCard
          title='Email (watasuke102@gmail.com)'
          url='mailto:watasuke102@gmail.com'
          icon='fas fa-envelope'
          desc='気づかないかもしれません'
        /> */}
      </div>
      <div className='next-page' />
    </div>
  );
};
