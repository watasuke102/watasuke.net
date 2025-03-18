// watasuke.net > editor
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {embed_card, inner_embed} from './common.css';
import React from 'react';

type Props = {
  slug: string;
};

export function InnerEmbedCard(props: Props) {
  return (
    <span className={`${embed_card} ${inner_embed}`}>
      InnerEmbed: /{props.slug}
    </span>
  );
}
