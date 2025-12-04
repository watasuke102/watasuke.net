// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as style from './Body.css';
import 'highlight.js/styles/atom-one-dark.min.css';
import 'katex/dist/katex.min.css';
import React, {JSX} from 'react';
import ReactMarkdown, {ExtraProps} from 'react-markdown';
import Highlight from 'rehype-highlight';
import Katex from 'rehype-katex';
import Raw from 'rehype-raw';
import Gfm from 'remark-gfm';
import Math from 'remark-math';
import Slug from 'rehype-slug';
import {ScriptMounter} from '../ScriptMounter/ScriptMounter';
import {AdsInArticle} from '../../Ads';
import {ImageViewer} from '../ImageViewer/ImageViewer';
import {Link} from '../Link/Link';
import {EmbedCardType, InnerEmbedCardType} from '../PropsComponent';
import {
  rehypeAddFootnoteLabel,
  remarkAddFootnoteLabel,
} from '../plugins/AddFootnoteLabel';

let heading_count = 0;
function Heading(
  props: JSX.IntrinsicElements['h1'] & ExtraProps,
): React.ReactNode {
  if (!props.node) {
    return <></>;
  }
  return (
    <>
      {++heading_count % 5 === 0 && props.id !== 'footnote-label' && (
        <AdsInArticle />
      )}
      {(() => {
        switch (props.node.tagName) {
          case 'h1':
            return (
              <h1 id={props.id}>
                <>{props.children}</>
              </h1>
            );
          case 'h2':
            return (
              <h2 id={props.id} className={style.h2}>
                <>{props.children}</>
              </h2>
            );
          case 'h3':
            return (
              <h3 id={props.id} className={style.h3}>
                <>{props.children}</>
              </h3>
            );
          case 'h4':
            return (
              <h4 id={props.id} className={style.h4}>
                <>{props.children}</>
              </h4>
            );
          case 'h5':
            return (
              <h5 id={props.id}>
                <>{props.children}</>
              </h5>
            );
          case 'h6':
            return (
              <h6 id={props.id}>
                <>{props.children}</>
              </h6>
            );
          default:
            return <>{props.children}</>;
        }
      })()}
    </>
  );
}

interface Props {
  md: string;
  embed_card: EmbedCardType;
  inner_embed_card: InnerEmbedCardType;
}

export function Body(props: Props) {
  // 再レンダリング時の広告位置変更を抑制
  heading_count = 0;

  return (
    <section className={style.container}>
      <ScriptMounter />
      <ReactMarkdown
        components={{
          a: Link(props.embed_card, props.inner_embed_card),
          h1: Heading,
          h2: Heading,
          h3: Heading,
          h4: Heading,
          h5: Heading,
          h6: Heading,
          img: (props: JSX.IntrinsicElements['img'] & ExtraProps) => (
            <ImageViewer src={props.src?.toString() ?? ''} alt={props.alt} />
          ),
        }}
        remarkPlugins={[Gfm, Math, remarkAddFootnoteLabel]}
        rehypePlugins={[rehypeAddFootnoteLabel, Slug, Katex, Raw, Highlight]}
        // eslint-disable-next-line react/no-children-prop
        children={props.md}
      />
    </section>
  );
}
