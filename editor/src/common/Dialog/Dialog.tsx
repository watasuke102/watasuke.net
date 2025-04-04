// watasuke.net > editor
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
'use client';

import {css} from './Dialog.css';
import * as RDialog from '@radix-ui/react-dialog';
import React from 'react';
import CloseIcon from '@assets/close.svg';

type Props = {
  title: string;
  desc: string;
  children: React.ReactNode;
  is_open: boolean;
  set_is_open: (s: boolean) => void;
  on_close?: () => void;
};

export function Dialog(props: Props) {
  return (
    <RDialog.Root open={props.is_open} onOpenChange={props.set_is_open}>
      <RDialog.Portal>
        <RDialog.Overlay className={css.overlay}>
          <RDialog.Content
            className={css.content}
            onCloseAutoFocus={props.on_close}
          >
            <div className={css.header}>
              <RDialog.Title className={css.title}>{props.title}</RDialog.Title>
              <RDialog.Close className={css.close_button} asChild>
                <CloseIcon />
              </RDialog.Close>
            </div>
            <RDialog.Description>{props.desc}</RDialog.Description>
            {props.children}
          </RDialog.Content>
        </RDialog.Overlay>
      </RDialog.Portal>
    </RDialog.Root>
  );
}
