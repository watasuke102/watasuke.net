// watasuke.net > common
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {Components} from 'hast-util-to-jsx-runtime';
import {classify_url_embed_type} from '@watasuke.net/common';
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

    const embed_type = classify_url_embed_type(props.href ?? '');
    switch (embed_type.embed_type) {
      case 'internal':
        return <InnerEmbedCard slug={embed_type.data} />;
      case 'twitter':
        return (
          <blockquote className='twitter-tweet' data-theme='dark'>
            <span>
              <a href={embed_type.data}>ツイート</a>を読み込み中...
            </span>
          </blockquote>
        );
      case 'youtube':
        return (
          <div className='youtube-wrapper'>
            <iframe
              src={`https://www.youtube.com/embed/${embed_type.data}`}
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              title='YouTube video player'
              allowFullScreen
            ></iframe>
          </div>
        );
      case 'none':
        return <EmbedCard url={props.href ?? ''} />;
    }
  };
  return link;
}
