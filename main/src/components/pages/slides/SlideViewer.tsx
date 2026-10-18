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
  if ('pages' in slide.content === false) {
    throw Error(
      "invalid slide value (it does not have `pages` field; isn't it GoogleSlide entry?)",
    );
  }

  const [index, set_index_raw] = React.useState(0);
  const [jump_to, set_jump_to] = React.useState<number | null>(null);
  function set_index(next: ((j: number) => number) | number) {
    const clamp = (j: number) =>
      Math.min(Math.max(0, j), slide.content.pages.length - 1);
    if (typeof next === 'function') {
      set_index_raw(j => clamp(next(j)));
    } else {
      set_index_raw(clamp(next));
    }
  }

  React.useEffect(() => {
    const shortcut = (event: KeyboardEvent) => {
      switch (event.code) {
        case 'ArrowLeft':
          event.preventDefault();
          set_index(i => i - 1);
          break;
        case 'ArrowRight':
          event.preventDefault();
          set_index(i => i + 1);
          break;
        case 'Escape':
          set_jump_to(null);
          break;
        case 'Backspace':
          if (jump_to) {
            set_jump_to(i => {
              if (!i || i < 10) {
                return null;
              } else {
                return Math.floor(i / 10);
              }
            });
          }
          break;
        case 'Enter':
          if (jump_to) {
            set_index(jump_to - 1);
            set_jump_to(null);
          }
          break;
        default: {
          const match = /(Digit|Numpad)([0-9])/.exec(event.code);
          if (match?.[2]) {
            set_jump_to(i => (i ?? 0) * 10 + Number(match[2]));
          }
          break;
        }
      }
    };
    window.addEventListener('keydown', shortcut);
    return () => {
      window.removeEventListener('keydown', shortcut);
    };
  });

  return (
    <div className={css.container}>
      <div className={css.svg_viewer}>
        <span>読み込み中...</span>
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
      {jump_to && (
        <div className={css.jump_to_overlay}>
          <span className={css.jump_to}>{jump_to}</span>
        </div>
      )}
    </div>
  );
}
