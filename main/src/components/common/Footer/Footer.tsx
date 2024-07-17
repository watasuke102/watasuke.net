// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './Footer.css';
// @ts-expect-error ??? (FIXME)
import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {SimpleLinks} from '../SimpleLinks';
import IconInstagram from '@assets/icons/Links/instagram.svg';
import IconSoundcloud from '@assets/icons/Links/soundcloud.svg';
import IconTwitter from '@assets/icons/Links/twitter.svg';
import IconGithub from '@assets/icons/general/github.svg';

export function Footer(): JSX.Element {
  const info = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          repo
          title
        }
        buildTime
      }
      buildInfo {
        githash
        contents_githash
      }
    }
  `);
  // siteBuildMetadata.buildTime: ISO 8601 formatted (`YYYY-MM-DDTHH:mm:ss.sssZ`)
  const jst = 9 /*hours*/ * 60 /*minutes*/ * 60 /*sec*/ * 1000; /*ms*/
  const build_date = new Date(Date.parse(info.site.buildTime) + jst);
  const build_date_str = build_date.toISOString().replace('T', ' ').slice(0, 19);

  return (
    <footer className={css.container}>
      <h2 className={css.sitename}>{info.site.siteMetadata.title}</h2>

      <span className={css.buildinfo}>
        Powered by Gatsby, built at {build_date_str} <br />
        Git hash:{' '}
        <a href={`${info.site.siteMetadata.repo}/commit/${info.buildInfo.githash}`} className={css.githash}>
          {info.buildInfo.githash}
        </a>{' '}
        || contents Git hash: {info.buildInfo.contents_githash /* private repo; hyperlink is not available */}
      </span>

      {/* FIXME: `title` is not working because SVG has <title> */}
      <div className={css.icon_container}>
        <a className={css.icon} title='GitHub repository' href={info.site.siteMetadata.repo}>
          <IconGithub />
        </a>
        <a
          className={`${css.icon} ${css.twitter_icon}`}
          title='Twitter (@Watasuke102)'
          href='https://x.com/Watasuke102'
        >
          <IconTwitter />
        </a>
        <a className={css.icon} title='Instagram (@watasuke102)' href='https://instagram.com/watasuke102'>
          <IconInstagram />
        </a>
        <a
          className={`${css.icon} ${css.soundcloud_icon}`}
          title='SoundCloud (watasuke)'
          href='https://soundcloud.com/watasuke'
        >
          <IconSoundcloud />
        </a>
      </div>

      <div className={css.link_container}>
        <h2 className={css.link_head}>Links</h2>
        <div /> {/* <- for 500 < width < 800 (space-between) */}
        <div>
          {/* ^ for width > 800 (align: right) */}
          <SimpleLinks />
        </div>
      </div>
    </footer>
  );
}
