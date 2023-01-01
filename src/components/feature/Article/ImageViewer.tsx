/*!
 * ImageViewer.tsx
 *
 * CopyRight (c) 2021-2023 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */
import {AnimatePresence, motion} from 'framer-motion';
import React from 'react';
import './ImageViewer.scss';

interface Props {
  src: string;
  alt: string | undefined;
}

export default ({src, alt}: Props) => {
  const [is_open, SetIsOpen] = React.useState(false);

  return (
    <>
      <img
        className='ImageViewer-inline_img'
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
            className='ImageViewer-modal'
          >
            <div className='ImageViewer-img_wrapper'>
              <img className='ImageViewer-dialog_img' src={src} alt={alt ?? ''} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
