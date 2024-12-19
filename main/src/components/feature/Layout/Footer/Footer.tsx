// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as config from '@watasuke.net/config/config';
import * as css from './Footer.css';
import child_process from 'child_process';
import {SimpleInnerLinks} from '@common';
import {ql} from '@utils/QL';
import {social_links} from '@data/social_links';

export async function Footer() {
  let githash = '';
  try {
    githash = child_process.execSync('git rev-parse HEAD').toString().slice(0, 7);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_) {
    githash = '[unavailable]';
  }
  const contents_githash = (await ql().contentsGitHash()).contentsGitHeadHash;

  const links = [
    {data: social_links.github_repo, class_name: css.icon},
    {data: social_links.twitter, class_name: `${css.icon} ${css.twitter_icon}`},
    {data: social_links.instagram, class_name: css.icon},
    {data: social_links.soundcloud, class_name: `${css.icon} ${css.soundcloud_icon}`},
  ];

  return (
    <footer className={css.container}>
      <h2 className={css.sitename}>{config.site_title}</h2>

      <span className={css.buildinfo}>
        Powered by Next.js
        <br />
        Git hash:{' '}
        <a href={`${config.site_repo}/commit/${githash}`} className={css.githash}>
          {githash}
        </a>{' '}
        || contents Git hash: {contents_githash}
        {/* contents are in the private repo; hyperlink is not available */}
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
