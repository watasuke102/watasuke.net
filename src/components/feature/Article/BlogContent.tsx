/*!
 * BlogContent.tsx
 *
 * CopyRight (c) 2021-2022 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import ReactMarkdown from 'react-markdown';
import {CSSTransition} from 'react-transition-group';
import EmbedCard from '@/feature/Article/EmbedCard';
import {imageUrl} from '../../../../config';

import './BlogContent.scss';
import './TableOfContents.scss';

// Remark関連
import Gfm from 'remark-gfm';
import Toc from 'remark-toc';
import Slug from 'remark-slug';
import Raw from 'rehype-raw';

// コードのシンタックスハイライト
import Prism from 'prismjs';
import ExtractHeading from '@utils/ExtractHeading';

interface Props {
  body: string;
}

interface Node {
  children: Array<string>;
  href: string;
}

const Link: React.ComponentType<Node> = (props: Node) => {
  // [Display](url)の形式であった場合は
  if (props.children[0] !== props.href) {
    return <a href={props.href}>{props.children[0]}</a>;
  }
  // Twitter
  if (props.href.slice(0, 19) === 'https://twitter.com') {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: `<blockquote class="twitter-tweet"><a href="${props.href}">ツイート</a>を読み込み中...</blockquote>`,
        }}
      />
    );
  }
  // YouTube
  if (props.href.slice(0, 23) === 'https://www.youtube.com') {
    return (
      <div
        className='youtube-wrapper'
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.youtube.com/embed/${props.href.slice(32)}"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title="YouTube video player" allowfullscreen></iframe>`,
        }}
      />
    );
  }
  return <EmbedCard url={props.href} />;
};

export default (props: Props) => {
  React.useEffect(() => {
    setTimeout(() => {
      // Twitter embed
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      document.body.appendChild(script);
      //Prismjs
      Prism.highlightAll();
    }, 0);
  }, []);

  const [tocOpening, SetTocOpening] = React.useState(true);
  const table_of_contents = ExtractHeading(props.body);
  return (
    <section className='BlogContent-container'>
      {
        // 見出しが2個未満だったら目次を出しても違和感がある気がする
        table_of_contents.length > 2 && (
          <>
            <div className='BlogContent-table_of_contents_container'>
              <div className='top_items'>
                <div className='close_button' onClick={() => SetTocOpening(!tocOpening)}>
                  {tocOpening ? <i className='fas fa-angle-up' /> : <i className='fas fa-angle-down' />}
                </div>
                <span className='heading'>目次</span>
              </div>
              <CSSTransition in={tocOpening} timeout={1000} classNames='toc-animation'>
                <ol className='toc-animation'>
                  {table_of_contents.map(item => (
                    <li className={`toc-${item.size}`}>
                      <a href={`#${item.body.toLowerCase()}`}>{item.body}</a>
                    </li>
                  ))}
                </ol>
              </CSSTransition>
            </div>
            <hr />
          </>
        )
      }
      <ReactMarkdown
        components={{
          a: Link,
          img: props => <img className='BlogContent-body_img' {...props} />,
        }}
        remarkPlugins={[Gfm, Toc, Slug]}
        rehypePlugins={[Raw]}
        children={props.body.replace(/\/uploads/g, `${imageUrl}/uploads`)}
      />
      {/* <Remark remarkPlugins={[Gfm, Toc, Slug]} rehypeReactOptions={rehype_react_options}>
        {/* 画像のURLを置き換える /}
      </Remark> */}
    </section>
  );
};
