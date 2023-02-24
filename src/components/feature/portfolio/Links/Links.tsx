// Links.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT SUSHI-WARE License.
import {motion} from 'framer-motion';
import {graphql, useStaticQuery} from 'gatsby';
import React from 'react';
import toml from 'toml';
import {FadeWithScroll} from '@utils/FadeWithScroll';
import './Links.scss';

const LinkCard = (props: {title: string; url: string; icon: string; desc: string}): React.ReactElement => (
  <motion.a href={props.url} className='card' {...FadeWithScroll}>
    <i className={props.icon} />
    <span className='head'>{props.title}</span>
    <p className='desc'>
      {props.desc.split('\\n').map(s => (
        <>
          {s}
          <br />
        </>
      ))}
    </p>
  </motion.a>
);

export const Links = (): React.ReactElement => {
  const link_list = toml.parse(
    useStaticQuery(graphql`
      query {
        portfolioToml(name: {eq: "Links.toml"}) {
          body
        }
      }
    `).portfolioToml.body,
  ).link;
  console.log(link_list);

  return (
    <div id='portfolio-links'>
      <h2>Links</h2>
      <div className='container'>
        <LinkCard
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
        />
      </div>
      <div className='next-page' />
    </div>
  );
};
