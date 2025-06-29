// watasuke.net > common
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
'use client';

import * as css from './ImageViewer.css';
import * as Dialog from '@radix-ui/react-dialog';
import React from 'react';

interface Props {
  src: string;
  alt: string | undefined;
}

export function ImageViewer({src, alt}: Props) {
  const [is_open, SetIsOpen] = React.useState(false);

  return (
    <Dialog.Root open={is_open} onOpenChange={SetIsOpen}>
      <Dialog.Trigger asChild>
        <img
          className={css.inline_img}
          loading='lazy'
          src={src}
          alt={alt ?? ''}
        />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={css.modal_overlay} />
        <Dialog.Content
          id='imageviewer_content_wrapper'
          className={css.modal_content}
          onClick={() => SetIsOpen(false)}
        >
          <img
            id='img_in_imageviewer'
            className={css.dialog_img}
            src={src}
            alt={alt ?? ''}
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
