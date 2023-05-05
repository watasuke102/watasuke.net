// BlogContent.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {imageUrl} from '@config';
import {ImageViewer} from '@/common';
import {AnimatePresence, motion} from 'framer-motion';
// コードのシンタックスハイライト
import Prism from 'prismjs';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Raw from 'rehype-raw';
// Remark関連
import Gfm from 'remark-gfm';
import Slug from 'remark-slug';
import Toc from 'remark-toc';
import {AdsInArticle} from '@/feature/Ads';
import {EmbedCard} from '@/feature/Article';
import ExtractHeading from '@utils/ExtractHeading';
import {toc_list} from '../TableOfContents.css';
import './BlogContent.scss';

interface Props {
  body: string;
}

interface Position {
  line: number;
  column: number;
  offset: number;
}

interface Node {
  children: Array<string>;
  href: string;
  node: {
    position: {
      start: Position;
      end: Position;
    };
  };
}

const Link: React.ComponentType<Node> = (props: Node) => {
  // [Display](url)の形式であった場合、文頭ではなかった場合（箇条書き内など）はEmbedにしない
  if (props.children[0] !== props.href || props.node.position.start.column !== 1) {
    return <a href={props.href}>{props.children[0]}</a>;
  }
  // Twitter
  if (props.href.slice(0, 19) === 'https://twitter.com') {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: `<blockquote class="twitter-tweet" data-theme="dark"><a href="${props.href}">ツイート</a>を読み込み中...</blockquote>`,
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

export const BlogContent = (props: Props): React.ReactElement => {
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
      <AdsInArticle />
      {
        // 見出しが2個未満だったら目次を出しても違和感がある気がする
        table_of_contents.length > 2 && (
          <>
            <div className='BlogContent-table_of_contents_container'>
              <div className='top_items'>
                <div className='close_button' onClick={() => SetTocOpening(!tocOpening)}>
                  {tocOpening ? <i className='fa-solid fa-angle-up' /> : <i className='fa-solid fa-angle-down' />}
                </div>
                <span className='heading'>目次</span>
              </div>
              <AnimatePresence>
                <motion.div
                  className='toc'
                  animate={{
                    opacity: tocOpening ? 1 : 0,
                    maxHeight: tocOpening ? 300 : 0,
                    overflowY: tocOpening ? 'scroll' : 'hidden',
                  }}
                  transition={{
                    ease: 'easeOut',
                    duration: 0.3,
                  }}
                >
                  <ol>
                    {table_of_contents.map(item => (
                      <li key={item.body} className={toc_list[item.size]}>
                        <a href={`#${item.body.toLowerCase()}`}>{item.body}</a>
                      </li>
                    ))}
                  </ol>
                </motion.div>
              </AnimatePresence>
            </div>
            <hr />
          </>
        )
      }
      <ReactMarkdown
        components={{
          a: Link,
          // eslint-disable-next-line react/prop-types
          img: props => <ImageViewer src={props.src || ''} alt={props.alt} />,
        }}
        remarkPlugins={[Gfm, Toc, Slug]}
        rehypePlugins={[Raw]}
        // eslint-disable-next-line react/no-children-prop
        children={props.body.replace(/\/uploads/g, `${imageUrl}/uploads`)}
      />
      <AdsInArticle />
    </section>
  );
};
