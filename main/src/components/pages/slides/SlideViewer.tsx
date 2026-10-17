// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {apiUrl} from '@watasuke.net/config/config';
import * as css from './SlideViewer.css';
import React from 'react';
import {AllSlidesQuery} from '@utils/graphql';
import IconLeft from '@assets/icons/general/left.svg';
import IconRight from '@assets/icons/general/right.svg';

interface Props {
  slide: AllSlidesQuery['allSlides'][number];
}
export function SlideViewer({slide}: Props) {
  const [index, set_index] = React.useState(0);
  if ('pages' in slide.content === false) {
    throw Error(
      "invalid slide value (it does not have `pages` field; isn't it GoogleSlide entry?)",
    );
  }
  return (
    <div className={css.container}>
      <div className={css.svg_viewer}>
        {slide.content.pages.map((e, i) => (
          // alt text cannot be determined for slide images
          // eslint-disable-next-line jsx-a11y/alt-text
          <img
            key={`slide_${i}`}
            src={`${apiUrl}/slide/${slide.title}/${e}.svg`}
            style={{opacity: i === index ? 1 : 0}}
            loading={i === index ? 'eager' : 'lazy'}
          />
        ))}
      </div>
      <div className={css.bottom}>
        <button
          className={css.button}
          disabled={index === 0}
          onClick={() => set_index(i => i - 1)}
        >
          <IconLeft />
        </button>
        <span className={css.index_text}>{index + 1}</span>
        <button
          className={css.button}
          disabled={index === slide.content.pages.length - 1}
          onClick={() => set_index(i => i + 1)}
        >
          <IconRight />
        </button>
      </div>
    </div>
  );
}
