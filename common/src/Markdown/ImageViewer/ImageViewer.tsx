// watasuke.net > common
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
'use client';

import * as style from './ImageViewer.css';
import {AnimatePresence, motion, useReducedMotion} from 'framer-motion';
import React from 'react';

interface Props {
  src: string;
  alt: string | undefined;
}

export function ImageViewer({src, alt}: Props) {
  const [is_open, SetIsOpen] = React.useState(false);
  const should_reduce_motion = useReducedMotion();

  return (
    <>
      {/* FIXME? idk how to handle this rule for ImageViewer */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      <img
        className={style.inline_img}
        loading='lazy'
        src={src}
        alt={alt ?? ''}
        onClick={() => {
          SetIsOpen(true);
        }}
      />

      <AnimatePresence>
        {is_open && (
          <motion.div
            variants={{
              init: {opacity: 0},
              main: {opacity: 1},
            }}
            initial='init'
            animate='main'
            exit='init'
            transition={{duration: 0.2 * Number(!should_reduce_motion)}}
            onClick={() => SetIsOpen(false)}
            className={style.modal}
          >
            <div className={style.img_wrapper}>
              <img className={style.dialog_img} src={src} alt={alt ?? ''} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
