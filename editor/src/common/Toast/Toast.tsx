// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {css} from './Toast.css';
import React from 'react';
import * as RToast from '@radix-ui/react-toast';
import CloseIcon from '@assets/close.svg';
import {ErrorQL} from '@mytypes/ErrorQL';

type State = {
  is_open: boolean;
  title: string;
  desc: string;
};
type Action =
  | {type: 'open/normal'; title: string; desc?: string}
  | {type: 'open/err'; err: unknown}
  | {type: 'close'};

export function toast_reducer(current: State, action: Action): State {
  switch (action.type) {
    case 'close':
      // re-use `current` in order to prevent change of contents during animation
      return {...current, is_open: false};
    case 'open/normal':
      return {is_open: true, title: action.title, desc: action.desc ?? ''};
  }
  const err = action.err;
  if (err.response && Array.isArray(err.response.errors)) {
    console.log('Following err will be shown as toast', {err});
    const error = (err as ErrorQL).response.errors[0];
    return {is_open: true, title: error.message, desc: error.extensions};
  } else if (err instanceof Error) {
    return {is_open: true, title: err.name, desc: err.message};
  }
  return {is_open: true, title: 'Unknown Error', desc: ''};
}

type ContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};
export const ToastContext = React.createContext<ContextType>({
  state: {is_open: false, title: '', desc: ''},
  dispatch: () => {},
});

export function Toast(): JSX.Element {
  const {state, dispatch} = React.useContext(ToastContext);
  return (
    <RToast.Provider swipeDirection='up' duration={3000}>
      <RToast.Root
        className={css.root}
        open={state.is_open}
        onOpenChange={is_open => {
          if (!is_open) {
            dispatch({type: 'close'});
          }
        }}
      >
        <RToast.Title className={css.title}>{state.title}</RToast.Title>
        <RToast.Description className={css.desc}>
          {state.desc}
        </RToast.Description>
        <RToast.Close className={css.close}>
          <CloseIcon />
        </RToast.Close>
      </RToast.Root>
      <RToast.Viewport className={css.viewpoint} />
    </RToast.Provider>
  );
}
