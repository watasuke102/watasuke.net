// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {embed_card} from './common.css';
import React from 'react';

type Props = {
  url: string;
};

export function EmbedCard(props: Props) {
  return <span className={embed_card}>Embed: {props.url}</span>;
}
