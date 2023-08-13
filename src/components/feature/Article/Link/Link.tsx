// Link.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import React, {AnchorHTMLAttributes, DetailedHTMLProps, ReactNode} from 'react';
import {ReactMarkdownProps} from 'react-markdown/lib/complex-types';
import {EmbedCard, InnerEmbedCard} from '@/feature/Article';

type Props = Omit<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, 'ref'> &
  ReactMarkdownProps;

export function Link(props: Props) {
  // [Display](url)の形式であった場合、文頭ではなかった場合（箇条書き内など）はEmbedにしない
  if (props.children[0] !== props.href || props.node.position?.start.column !== 1) {
    return <a href={props.href}>{props.children[0]}</a>;
  }
  // Twitter
  if (props.href?.slice(0, 19) === 'https://twitter.com' ?? '') {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: `<blockquote class="twitter-tweet" data-theme="dark"><a href="${props.href}">ツイート</a>を読み込み中...</blockquote>`,
        }}
      />
    );
  }
  // YouTube
  if (props.href?.slice(0, 23) === 'https://www.youtube.com' ?? '') {
    return (
      <div
        className='youtube-wrapper'
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.youtube.com/embed/${props.href?.slice(32)}"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title="YouTube video player" allowfullscreen></iframe>`,
        }}
      />
    );
  }

  const inner_url = props.href?.match(/https:\/\/watasuke.net\/blog\/article\/(.+)/) ?? '';
  if (inner_url) {
    return <InnerEmbedCard slug={inner_url[1].replace('/', '')} />;
  }

  return <EmbedCard url={props.href ?? ''} />;
}
