// card.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as style from '@/pages/card/card.css';
import {Seo} from '@/common';
import {navigate} from 'gatsby';
import React from 'react';
import {Back, Front} from '@/pages/card';
import {GenBreadcrumb} from '@utils/Breadcrumb';

const breadcrumb_list = GenBreadcrumb([{name: 'Card'}]);

export default function Card(): React.ReactElement {
  const [is_fliped, set_is_flipped] = React.useState(false);
  const [is_button_hidden, set_is_button_hidden] = React.useState(false);
  const [is_button_disabled, set_is_button_disabled] = React.useState(false);

  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    set_is_button_disabled((params.get('disable_button') ?? '') === 'true');
  }, []);

  const buttons = [
    {
      label: 'back to the top page',
      icon: 'chevron-left',
      on_click: () => navigate('/'),
    },
    {
      label: 'flip over the card',
      icon: 'repeat',
      on_click: () => set_is_flipped(s => !s),
    },
    {
      label: 'hide button container',
      icon: 'chevron-up',
      on_click: () => set_is_button_hidden(true),
    },
    {
      label: 'disable button container',
      icon: 'ban',
      on_click: () => {
        set_is_button_disabled(true);
        navigate('?disable_button=true');
      },
    },
  ];

  return (
    <>
      <div
        className={style.background}
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
        <div className={style.button_container}>
          {buttons.map(e => (
            <button key={e.icon} aria-label={e.label} className={`fa-solid fa-${e.icon}`} onClick={e.on_click} />
          ))}
        </div>
      )}
    </>
  );
}

export const Head = (): React.ReactElement => (
  <Seo title={'card'} desc={'名刺'} url={'/card'} breadcrumb_list={breadcrumb_list} />
);
