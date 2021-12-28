/*!
 * BlogContent.tsx
 *
 * CopyRight (c) 2021 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import {Remark} from 'react-remark';
import {CSSTransition} from 'react-transition-group';
import EmbedCard from '../components/EmbedCard';
import {imageUrl} from '../../config';

import '../styles/BlogContent.scss';

// Remark関連
import Gfm from 'remark-gfm';
import Toc from 'remark-toc';
import Slug from 'remark-slug';

// コードのシンタックスハイライト
import Prism from 'prismjs';

interface Props {
  body: string;
  tocComponent?: React.ReactElement;
}

interface Node {
  children: Array<string>;
  href: string;
}

function Link(props: Node): React.ReactElement {
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
}

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

  const rehype_react_options = {
    components: {
      a: Link,
      img: props => <img className='BlogContent-body_img' {...props} />,
    },
  };

  const [tocOpening, SetTocOpening] = React.useState(true);
  return (
    <div className='BlogContent-container'>
      {
        // 見出しが2個未満だったら目次を出しても違和感がある気がする
        props.tocComponent && (
          <>
            <div className='BlogContent-table_of_contents_container'>
              <div className='BlogContent-close_button' onClick={() => SetTocOpening(!tocOpening)}>
                {tocOpening ? <i className='fas fa-angle-up' /> : <i className='fas fa-angle-down' />}
              </div>
              <h2>目次</h2>
              <CSSTransition in={tocOpening} timeout={1000} classNames='toc-animation'>
                <ol className='toc-animation'>{props.tocComponent}</ol>
              </CSSTransition>
            </div>
            <hr />
          </>
        )
      }

      <Remark remarkPlugins={[Gfm, Toc, Slug]} rehypeReactOptions={rehype_react_options}>
        {/* 画像のURLを置き換える */}
        {props.body.replace(/\/uploads/g, `${imageUrl}/uploads`)}
      </Remark>
    </div>
  );
};
