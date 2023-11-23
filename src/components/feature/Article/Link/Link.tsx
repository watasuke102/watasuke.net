// Link.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import React from 'react';
import {ReactMarkdownProps} from 'react-markdown/lib/complex-types';
import {EmbedCard, FootnoteDef, InnerEmbedCard} from '@/feature/Article';

type Props = Omit<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, 'ref'> &
  ReactMarkdownProps;

export function Link(props: Props): React.ReactElement {
  const link_text = props.node.children[0].value;
  // footnotes
  if (props.node.properties && typeof props.node.properties['aria-label'] === 'string') {
    return (
      <FootnoteDef
        footnote={props.node.properties['aria-label']}
        properties={props.node.properties}
        link_text={link_text}
      />
    );
  }
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
}
