// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './Links.css';
import React from 'react';
import {color} from '@watasuke.net/common/src/css/color';
import {LinkCard} from './LinkCard';
import {Heading} from '../Heading';
import {LinkType, social_links, social_links_desc} from '@data/social_links';

interface Props {
  animation_enabled: boolean;
  lang: string;
}

export function Links(props: Props) {
  return (
    <section>
      <Heading color={color.yellow} text='Links' />
      <div className={css.container}>
        {(Object.keys(social_links) as LinkType[]).map((key, i) => {
          const link = social_links[key];
          const desc = social_links_desc[key];
          return (
            <LinkCard
              key={i}
              title={link.title ?? ''}
              url={link.href ?? ''}
              icon={link.children ?? <></>}
              desc={props.lang !== 'en' ? desc.ja : desc.en}
              animation_enabled={props.animation_enabled}
            />
          );
        })}
      </div>
    </section>
  );
}
