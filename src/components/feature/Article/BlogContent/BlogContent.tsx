// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {apiUrl} from '@config';
import * as style from './BlogContent.css';
import 'highlight.js/styles/atom-one-dark.min.css';
import {ImageViewer} from '@/common';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import {HeadingProps} from 'react-markdown/lib/ast-to-react';
import Highlight from 'rehype-highlight';
import Raw from 'rehype-raw';
import Gfm from 'remark-gfm';
import Slug from 'remark-slug';
import Toc from 'remark-toc';
import {AdsInArticle} from '@/feature/Ads';
import {Link, TocInArticle} from '@/feature/Article';
import {TagContainer} from '@/feature/Tag';
import {rehypeAddFootnoteLabel, remarkAddFootnoteLabel} from '@utils/AddFootnoteLabel';
import ExtractHeading from '@utils/ExtractHeading';
import Article from '@mytypes/Article';
import IconHistory from '@assets/icons/article/history.svg';
import IconUpload from '@assets/icons/article/upload.svg';

interface Props {
  data: Article;
}

let heading_count = 0;
const Heading = (props: HeadingProps) => {
  return (
    <>
      {++heading_count % 5 === 0 && <AdsInArticle />}
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
              <h4 id={props.id}>
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
};

export const BlogContent = (props: Props): React.ReactElement => {
  React.useEffect(() => {
    setTimeout(() => {
      // Twitter embed
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.className = 'twitter-widgets-script';
      document.body.appendChild(script);
    }, 0);
    return () =>
      Array.from(document.body.getElementsByClassName('twitter-widgets-script') ?? []).forEach(e => e.remove());
  }, []);

  // 再レンダリング時の広告位置変更を抑制
  heading_count = 0;
  const table_of_contents = ExtractHeading(props.data.body);
  return (
    <section className={style.container}>
      <h1 className={style.title}>{props.data.title}</h1>
      <div className={style.article_info}>
        <TagContainer tags={props.data.tags} />
        {/* 公開日と更新日 */}
        <div className={style.date_container}>
          <div className={style.date} aria-label='記事の更新日'>
            <IconHistory />
            <span>{props.data.updated_at.slice(0, 10)}</span>
          </div>
          <div className={style.date} aria-label='記事の投稿日'>
            <div>
              <IconUpload />
            </div>
            <span>{props.data.published_at.slice(0, 10)}</span>
          </div>
        </div>
      </div>

      <AdsInArticle />
      {/* 見出しが2個未満だったら目次を出しても違和感がある気がする */}
      {table_of_contents.length > 2 && <TocInArticle table_of_contents={table_of_contents} />}

      <ReactMarkdown
        components={{
          a: Link,
          h1: Heading,
          h2: Heading,
          h3: Heading,
          h4: Heading,
          h5: Heading,
          h6: Heading,
          // eslint-disable-next-line react/prop-types
          img: props => <ImageViewer src={props.src || ''} alt={props.alt} />,
        }}
        remarkPlugins={[Gfm, Toc, Slug, remarkAddFootnoteLabel]}
        rehypePlugins={[Raw, Highlight, rehypeAddFootnoteLabel]}
        // eslint-disable-next-line react/no-children-prop
        children={props.data.body.replaceAll('/img', `${apiUrl}/img/${props.data.slug}`)}
      />
      <AdsInArticle />
    </section>
  );
};
