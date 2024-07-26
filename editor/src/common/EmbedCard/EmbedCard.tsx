// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {embed_card} from './common.css';
import React from 'react';

type Props = {
  url: string;
};

export function EmbedCard(props: Props): JSX.Element {
  return <span className={embed_card}>Embed: {props.url}</span>;
}
