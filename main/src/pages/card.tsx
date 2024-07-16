// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from '@pages/card/card.css';
import {Seo} from '@common';
import {Back, Front} from '@pages/card';
import {navigate} from 'gatsby';
import React from 'react';
import {GenBreadcrumb} from '@utils/Breadcrumb';
import IconFlip from '@assets/icons/card/flip.svg';
import IconInvisible from '@assets/icons/card/invisible.svg';
import IconBack from '@assets/icons/general/left.svg';
import IconHide from '@assets/icons/general/up.svg';

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
      icon: <IconBack />,
      on_click: () => navigate('/'),
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
        navigate('?disable_button=true');
      },
    },
  ];

  return (
    <main>
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
            <button key={i} className={css.button} aria-label={e.label} onClick={e.on_click}>
              {e.icon}
            </button>
          ))}
        </div>
      )}
    </main>
  );
}

export function Head(): React.ReactElement {
  return <Seo title={'card'} desc={'名刺'} url={'/card'} breadcrumb_list={breadcrumb_list} />;
}
