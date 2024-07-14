// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {Components} from 'hast-util-to-jsx-runtime';
import React from 'react';
import {EmbedCardType, InnerEmbedCardType} from '../PropsComponent';

export function Link(EmbedCard: EmbedCardType, InnerEmbedCard: InnerEmbedCardType) {
  const link: Components['a'] = props => {
    /* eslint-disable react/prop-types */
    if (!props.node) return <></>;
    const link_text = props.node.children[0].value;
    // [Display](url)の形式であった場合、文頭ではなかった場合（箇条書き内など）はEmbedにしない
    if (link_text !== props.href || props.node.position?.start.column !== 1) {
      return <a {...props.node.properties}>{link_text}</a>;
    }
    // Twitter
    if ((props.href?.slice(0, 20) ?? '') === 'https://twitter.com/') {
      return (
        <blockquote className='twitter-tweet' data-theme='dark'>
          <span>
            <a href={props.href}>ツイート</a>を読み込み中...
          </span>
        </blockquote>
      );
    }
    // YouTube
    if ((props.href?.slice(0, 32) ?? '') === 'https://www.youtube.com/watch?v=') {
      return (
        <div className='youtube-wrapper'>
          <iframe
            src={`https://www.youtube.com/embed/${props.href?.slice(32)}`}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            title='YouTube video player'
            allowFullScreen
          ></iframe>
        </div>
      );
    }

    const inner_url = props.href?.match(/https:\/\/watasuke.net\/blog\/article\/(.+)/) ?? '';
    if (inner_url) {
      return <InnerEmbedCard slug={inner_url[1].replace('/', '')} />;
    }

    return <EmbedCard url={props.href ?? ''} />;
  };
  return link;
}
