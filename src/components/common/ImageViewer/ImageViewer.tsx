// ImageViewer.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {AnimatePresence, motion} from 'framer-motion';
import React from 'react';
import * as style from './ImageViewer.css';

interface Props {
  src: string;
  alt: string | undefined;
}

export const ImageViewer = ({src, alt}: Props): React.ReactElement => {
  const [is_open, SetIsOpen] = React.useState(false);

  return (
    <>
      <img
        className={style.inline_img}
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
            transition={{duration: 0.2}}
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
};
