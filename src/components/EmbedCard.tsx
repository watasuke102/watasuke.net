/*!
 * EmbedCard.tsx
 *
 * CopyRight (c) 2021 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import '../styles/main.scss';
import '../styles/EmbedCard.scss';

interface Props {
  url: string,
}

export default (props: Props) => {
  // mapでひとまとめにするのもいいかも知れないけど、setStateが面倒
  const [title, set_title] = React.useState('読み込み中...');
  const [url, set_url] = React.useState('');
  const [description, set_description] = React.useState('');
  const [image, set_image] = React.useState('');
  React.useEffect(() => {
    fetch(props.url)
      .then(res => res.text())
      .then(res => {
        const doc = new DOMParser().parseFromString(res, 'text/html');
        Array.from(doc.head.children).map(e => {
          const kind = e.getAttribute('property');
          const value = e.getAttribute('content');
          if (!kind || !value) return;
          switch (kind) {
            case 'og:title':
              set_title(value); break;
            case 'og:url':
              set_url(value); break;
            case 'og:description':
              set_description(value); break;
            case 'og:image':
              set_image(value); break;
          }
        });
      });
  }, []);


  return (
    <div className='EmbedCard-container' onClick={() => url !== '' && window.open(props.url)}>
      <div className='EmbedCard-img_wrapper'>
        <img src={image} alt={title} />
      </div>
      <div className='EmbedCard-text'>
        <span className='title'>{title}</span>
        <span className='url'>{url}</span>
        <span className='description'>{description}</span>
      </div>
    </div >
  );
}
