// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
'use client';
import * as css from './SlidesPage.css';
import React from 'react';
import {classnames as cs} from '@watasuke.net/common/style/classnames';
import {AllSlidesQuery} from '@utils/graphql';
import {SlideViewer} from './SlideViewer';

const viewer_id = 'SlideViewer';

function desc(e: AllSlidesQuery['allSlides'][number]) {
  return e.date + (e.event ? ` | ${e.event}` : '');
}

interface Props {
  slides: AllSlidesQuery['allSlides'];
}
export function SlidesPage({slides}: Props) {
  const [selected, set_selected_raw] = React.useState(-1);
  const set_selected = (i: number) => {
    set_selected_raw(i);
    const element = document.getElementById(viewer_id);
    if (element) {
      window.scroll({
        top: window.pageYOffset + element.getBoundingClientRect().top - 20,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={css.container}>
      <div id={viewer_id} className={css.selected}>
        <div className={css.selected_presentation}>
          {selected === -1
            ? '発表名をクリックすると、スライド資料がここに表示されます'
            : (() => {
                const slide = slides[selected];
                if ('embedId' in slide.content) {
                  return (
                    <iframe
                      title={slide.title}
                      src={`https://docs.google.com/presentation/d/${slide.content.embedId}/embed`}
                      allowFullScreen
                    />
                  );
                } else {
                  return (
                    <SlideViewer key={selected} slide={slides[selected]} />
                  );
                }
              })()}
        </div>
        <div className={css.selected_desc}>
          {selected === -1 ? (
            '未選択'
          ) : (
            <div>
              <span className={css.item_title}>{slides[selected].title}</span>
              <br />
              <span className={css.item_desc}>{desc(slides[selected])}</span>
            </div>
          )}
        </div>
      </div>
      <div className={css.item_container}>
        {slides.map((e, i) => (
          <button
            className={cs(css.item, i === selected && css.item_active)}
            key={i}
            onClick={() => set_selected(i)}
          >
            <h2 className={css.item_title}>{e.title}</h2>
            <span
              className={
                i === selected ? css.item_desc_selected : css.item_desc
              }
            >
              {desc(e)}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
