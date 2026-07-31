// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as style from './Body.css';
import 'katex/dist/katex.min.css';
import asm from '@shikijs/langs/asm';
import bash from '@shikijs/langs/bash';
import bat from '@shikijs/langs/bat';
import c from '@shikijs/langs/c';
import cpp from '@shikijs/langs/cpp';
import diff from '@shikijs/langs/diff';
import html from '@shikijs/langs/html';
import ini from '@shikijs/langs/ini';
import javascript from '@shikijs/langs/javascript';
import json from '@shikijs/langs/json';
import lua from '@shikijs/langs/lua';
import php from '@shikijs/langs/php';
import rust from '@shikijs/langs/rust';
import scss from '@shikijs/langs/scss';
import toml from '@shikijs/langs/toml';
import typ from '@shikijs/langs/typ';
import Shiki from '@shikijs/rehype/core';
import oneDarkPro from '@shikijs/themes/one-dark-pro';
import React, {JSX} from 'react';
import ReactMarkdown, {ExtraProps} from 'react-markdown';
import Katex from 'rehype-katex';
import Raw from 'rehype-raw';
import Gfm from 'remark-gfm';
import Math from 'remark-math';
import Slug from 'rehype-slug';
import {createHighlighterCoreSync} from 'shiki/core';
import {createJavaScriptRegexEngine} from 'shiki/engine/javascript';
import {ScriptMounter} from '../ScriptMounter/ScriptMounter';
import {AdsInArticle} from '../../Ads/AdsInArticle';
import {ImageViewer} from '../ImageViewer/ImageViewer';
import {Link} from '../Link/Link';
import {EmbedCardType, InnerEmbedCardType} from '../PropsComponent';
import {
  rehypeAddFootnoteLabel,
  remarkAddFootnoteLabel,
} from '../plugins/AddFootnoteLabel';

const highlighter = createHighlighterCoreSync({
  themes: [oneDarkPro],
  langs: [
    bash,
    bat,
    c,
    cpp,
    diff,
    html,
    ini,
    javascript,
    json,
    lua,
    asm,
    php,
    rust,
    scss,
    toml,
    typ,
  ],
  langAlias: {nasm: 'asm'},
  engine: createJavaScriptRegexEngine(),
});

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

export function Markdown(props: Props) {
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
        rehypePlugins={[
          rehypeAddFootnoteLabel,
          Slug,
          Katex,
          Raw,
          [Shiki, highlighter, {theme: oneDarkPro}],
        ]}
        // eslint-disable-next-line react/no-children-prop
        children={props.md}
      />
    </section>
  );
}
