// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './Links.css';
import {graphql, useStaticQuery} from 'gatsby';
import React from 'react';
import toml from 'toml';
import {LinkCard} from './LinkCard';

interface Link {
  title: string;
  icon: string;
  url: string;
  desc_ja: string;
  desc_en: string;
}

interface Props {
  animation_enabled: boolean;
  lang: string;
}

export function Links(props: Props): React.ReactElement {
  const link_list: Link[] = toml.parse(
    useStaticQuery(graphql`
      query portfolioLinks {
        portfolioToml(name: {eq: "Links.toml"}) {
          body
        }
      }
    `).portfolioToml.body,
  ).link;

  return (
    <section>
      <h2>Links</h2>
      <div className={css.container}>
        {link_list.map((link, i) => (
          <LinkCard
            key={i}
            title={link.title}
            url={link.url}
            icon={link.icon}
            desc={props.lang !== 'en' ? link.desc_ja : link.desc_en}
            animation_enabled={props.animation_enabled}
          />
        ))}
      </div>
    </section>
  );
}
