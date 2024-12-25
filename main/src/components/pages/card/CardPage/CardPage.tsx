// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
'use client';
import * as css from '@pages/card/card.css';
import {useRouter} from 'next/navigation';
import React from 'react';
import localFont from 'next/font/local';
import {Back, Front} from '@pages/card';
import IconFlip from '@assets/icons/card/flip.svg';
import IconInvisible from '@assets/icons/card/invisible.svg';
import IconBack from '@assets/icons/general/left.svg';
import IconHide from '@assets/icons/general/up.svg';

const monaspace = localFont({
  display: 'swap',
  src: [
    {
      path: '../fonts/MonaspaceKrypton-Regular.woff2',
      weight: '400',
    },
    {
      path: '../fonts/MonaspaceKrypton-Bold.woff2',
      weight: '700',
    },
  ],
});

type Props = {
  init_disable_button: string | undefined;
};
export function CardPage(props: Props) {
  const [is_fliped, set_is_flipped] = React.useState(false);
  const [is_button_hidden, set_is_button_hidden] = React.useState(false);
  const [is_button_disabled, set_is_button_disabled] = React.useState(
    props.init_disable_button,
  );
  const router = useRouter();

  const buttons = [
    {
      label: 'back to the top page',
      icon: <IconBack />,
      on_click: () => router.push('/'),
    },
    {
      label: 'flip over the card',
      icon: <IconFlip />,
      on_click: () => set_is_flipped(s => !s),
    },
    {
      label: 'hide button container',
      icon: <IconHide />,
      on_click: () => set_is_button_hidden(true),
    },
    {
      label: 'disable button container',
      icon: <IconInvisible />,
      on_click: () => {
        set_is_button_disabled(true);
        router.push('?disable_button=true');
      },
    },
  ];
  return (
    <main className={monaspace.className}>
      {/* FIXME: add `onKeyDown` listener to background does not make sense */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div
        className={css.background}
        onClick={() => {
          if (is_button_disabled) {
            set_is_flipped(s => !s);
          } else {
            set_is_button_hidden(false);
          }
        }}
      >
        {/* unmountすると切り替え時に画像をfetchしに行ってしまう */}
        <Front hidden={is_fliped} />
        <Back hidden={!is_fliped} />
      </div>
      {!is_button_hidden && !is_button_disabled && (
        <div className={css.button_container}>
          {buttons.map((e, i) => (
            <button
              key={i}
              className={css.button}
              aria-label={e.label}
              onClick={e.on_click}
            >
              {e.icon}
            </button>
          ))}
        </div>
      )}
    </main>
  );
}
