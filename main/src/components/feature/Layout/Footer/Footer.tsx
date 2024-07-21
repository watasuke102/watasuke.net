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
import {SimpleInnerLinks} from '@common';
import {social_links} from '../../../../data/social_links';

export function Footer(): JSX.Element {
  const info: Queries.footerInfoQuery = useStaticQuery(graphql`
    query footerInfo {
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
  const build_date = new Date(Date.parse(info.site?.buildTime ?? '') + jst);
  const build_date_str = build_date.toISOString().replace('T', ' ').slice(0, 19);

  const links = [
    {data: social_links.github_repo, class_name: css.icon},
    {data: social_links.twitter, class_name: `${css.icon} ${css.twitter_icon}`},
    {data: social_links.instagram, class_name: css.icon},
    {data: social_links.soundcloud, class_name: `${css.icon} ${css.soundcloud_icon}`},
  ];

  return (
    <footer className={css.container}>
      <h2 className={css.sitename}>{info.site?.siteMetadata?.title ?? ''}</h2>

      <span className={css.buildinfo}>
        Powered by Gatsby, built at {build_date_str} <br />
        Git hash:{' '}
        <a href={`${info.site?.siteMetadata?.repo}/commit/${info.buildInfo?.githash ?? ''}`} className={css.githash}>
          {info.buildInfo?.githash ?? ''}
        </a>{' '}
        || contents Git hash: {info.buildInfo?.contents_githash /* private repo; hyperlink is not available */ ?? ''}
      </span>

      {/* FIXME: `title` is not working because SVG has <title> */}
      <div className={css.icon_container}>
        {links.map(e => {
          // eslint-disable-next-line jsx-a11y/anchor-has-content
          return <a key={e.data.title} className={e.class_name} {...e.data} />;
        })}
      </div>

      <div className={css.link_container}>
        <h2 className={css.link_head}>Links</h2>
        <div /> {/* <- for 500 < width < 800 (space-between) */}
        <div>
          {/* ^ for width > 800 (align: right) */}
          <SimpleInnerLinks />
        </div>
      </div>
    </footer>
  );
}
