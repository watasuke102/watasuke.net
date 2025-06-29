// watasuke.net > editor
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
'use client';

import {apiUrl} from '@watasuke.net/config/config';
import {css} from './Page.css';
import {GraphQLClient} from 'graphql-request';
import React from 'react';
import {useMonaco} from '@monaco-editor/react';
import {Button} from '@common/Button';
import {EditorPage} from '@common/EditorPage';
import {ModifyStatus} from '@common/EditorPage/EditorPage';
import {toast_reducer, ToastContext} from '@common/Toast';
import {useShortcut} from '@common/useShortcut/useShortcut';
import {MonacoContext} from '@features/MonacoEditor';
import {getSdk} from '@utils/graphql';
import {useConfirmBeforeLeave} from '@utils/ConfirmBeforeLeave';
import SaveIcon from '@assets/save.svg';

type Props = {
  profile: string;
};

export function Page(props: Props) {
  const [profile, set_profile] = React.useState(props.profile);
  const [modify_status, set_modify_status] =
    React.useState<ModifyStatus>('none');
  const [toast_state, toast_dispatch] = React.useReducer(toast_reducer, {
    is_open: false,
    title: '',
    desc: '',
  });
  const monaco = useMonaco();

  const is_first_rendering = React.useRef(true);
  const set_confirmation = useConfirmBeforeLeave();
  // prevent execution on the first rendering
  React.useEffect(() => {
    is_first_rendering.current = true;
  }, []);
  React.useEffect(() => {
    if (is_first_rendering.current) {
      is_first_rendering.current = false;
    } else {
      set_confirmation(true);
    }
  }, [set_confirmation, profile]);

  const save = React.useCallback(async () => {
    try {
      const sdk = getSdk(new GraphQLClient(`${apiUrl}/graphql`));
      await sdk.updateProfile({profile});
      toast_dispatch({type: 'open/normal', title: 'success'});
      set_confirmation(false);
    } catch (err) {
      toast_dispatch({type: 'open/err', err});
    }
  }, [set_confirmation, profile]);
  const modify = async (commit_message: string) => {
    try {
      const sdk = getSdk(new GraphQLClient(`${apiUrl}/graphql`));
      if (commit_message.length === 0) {
        throw Error('Commit message is empty');
      }
      await sdk.renewProfile({commit_message});
      set_modify_status('succeeded');
    } catch (err) {
      toast_dispatch({type: 'open/err', err});
      set_modify_status('none');
    }
  };

  useShortcut([{keycode: 'KeyS', handler: save}], {ctrl: true});

  return (
    <ToastContext.Provider
      value={{state: toast_state, dispatch: toast_dispatch}}
    >
      <MonacoContext.Provider value={monaco}>
        <EditorPage
          body={profile}
          is_published
          modify_status={modify_status}
          commit_scope='profile'
          toolbox={
            <div className={css.toolbox}>
              <Button
                type='outlined'
                text='renew'
                aria_label='renew'
                on_click={() => set_modify_status('confirmation')}
              />
              <Button
                type='contained'
                text='save <C-s>'
                icon={<SaveIcon />}
                aria_label='save'
                on_click={save}
              />
            </div>
          }
          header_text={
            <a
              href='https://watasuke.net/profile'
              rel='noreferrer'
              target='_blank'
              className={css.header_title}
            >
              profile
            </a>
          }
          modify_confirming_area={<></>}
          set_body={set_profile}
          set_modify_status={set_modify_status}
          modify={modify}
        />
      </MonacoContext.Provider>
    </ToastContext.Provider>
  );
}
