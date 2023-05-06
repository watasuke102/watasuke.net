// BlogContent.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {imageUrl} from '@config';
import {ImageViewer} from '@/common';
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
import {TagContainer} from '@/feature/Tag';
import ExtractHeading from '@utils/ExtractHeading';
import Article from '@mytypes/Article';
import {Link} from '../Link/Link';
import {TocInArticle} from '../TocInArticle/TocInArticle';
import * as style from './BlogContent.css';
import './BlogContent_override.scss';

interface Props {
  data: Article;
}

let h2_count = 0;
const Heading = (props: HTMLHeadingElement) => (
  <>
    {++h2_count % 3 === 0 && <AdsInArticle />}
    <h2 id={props.id}>
      <>{props.children}</>
    </h2>
  </>
);

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

  const table_of_contents = ExtractHeading(props.data.body);
  return (
    <section className='BlogContent-container'>
      <h1 className={style.title}>{props.data.title}</h1>
      {/* サムネ */}
      {/* <Thumbnail url={props.data.thumbnail} /> */}

      <div className={style.article_info}>
        <TagContainer tags={props.data.tags} />
        {/* 公開日と更新日 */}
        <div className={style.date_container}>
          <div className={style.date} aria-label='記事の更新日'>
            <i className='fa-solid fa-history' />
            <span>{props.data.updated_at.slice(0, 10)}</span>
          </div>
          <div className={style.date} aria-label='記事の投稿日'>
            <i className='fa-solid fa-upload' />
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
          h2: Heading,
          // eslint-disable-next-line react/prop-types
          img: props => <ImageViewer src={props.src || ''} alt={props.alt} />,
        }}
        remarkPlugins={[Gfm, Toc, Slug]}
        rehypePlugins={[Raw]}
        // eslint-disable-next-line react/no-children-prop
        children={props.data.body.replace(/\/uploads/g, `${imageUrl}/uploads`)}
      />
      <AdsInArticle />
    </section>
  );
};
