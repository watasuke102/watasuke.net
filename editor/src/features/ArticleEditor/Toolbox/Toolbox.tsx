// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {css} from './Toolbox.css';
import * as Accordion from '@radix-ui/react-accordion';
import React from 'react';
import {Button} from '@common/Button';
import {Dialog} from '@common/Dialog';
import {ImageUploader} from '@features/ArticleEditor/ImageUploader';
import {FrontmatterEditor} from '../FrontmatterEditor/FrontmatterEditor';
import * as ArticleReducer from '../ArticleReducer';
import AddPhotoIcon from '@assets/add_photo.svg';
import ExpandIcon from '@assets/expand.svg';
import SaveIcon from '@assets/save.svg';

type Props = {
  slug: string;
  tldr_placeholder: string;
  is_published: boolean;
  state: ArticleReducer.StateType;
  dispatcher: React.Dispatch<ArticleReducer.Action>;
  ref: React.MutableRefObject<HTMLTextAreaElement | null | undefined>;
  save_button_handler: () => void;
  publish_button_handler: () => void;
};

export function Toolbox(props: Props): JSX.Element {
  const [accordion_value, set_accordion_value] = React.useState('');
  const [is_img_uploader_open, set_is_img_uploader_open] = React.useState(false);

  const insert_image_name = React.useCallback(
    (file_name: string) => {
      const cursor_pos = props.ref.current?.selectionStart ?? 0;
      /* ideal: blank lines exist both before and after the image like this:
          <...before>

          ![alt](path)

          <after...>
        it means: <before>\n\n<image>\n\n<after>
      */
      let new_body = '';
      if (props.state.body[cursor_pos - 2] && props.state.body[cursor_pos - 2] !== '\n') {
        new_body += '\n';
      }
      if (props.state.body[cursor_pos - 1] && props.state.body[cursor_pos - 1] !== '\n') {
        new_body += '\n';
      }
      new_body += `![](/img/${file_name})`;
      if (props.state.body[cursor_pos] !== '\n') {
        new_body += '\n';
      }
      if (props.state.body[cursor_pos + 1] !== '\n') {
        new_body += '\n';
      }
      if (navigator.clipboard) {
        navigator.clipboard.writeText(new_body);
      } else {
        console.warn('navigator.clipboard is unavailable. Please manually copy below:', new_body);
      }
    },
    [props.ref, props.state.body],
  );

  // FIXME: collapsible is enough
  return (
    <>
      <Accordion.Root type='single' collapsible value={accordion_value} onValueChange={set_accordion_value}>
        <Accordion.Item value='title_editor'>
          <Accordion.Header asChild>
            <div className={css.toolbox_header}>
              <Accordion.Trigger asChild>
                <div className={css.expand_icon}>
                  <ExpandIcon />
                </div>
              </Accordion.Trigger>
              <Button
                type='outlined'
                text={props.is_published ? 'renew' : 'publish'}
                aria_label='publish'
                on_click={props.publish_button_handler}
              />
              <Button
                type='outlined'
                icon={<AddPhotoIcon />}
                text=''
                aria_label='open image uploader'
                on_click={() => set_is_img_uploader_open(true)}
              />
              <Button
                type='contained'
                text='save <C-s>'
                icon={<SaveIcon />}
                aria_label='save'
                on_click={props.save_button_handler}
              />
            </div>
          </Accordion.Header>
          <Accordion.Content className={css.accordion_content}>
            <FrontmatterEditor
              state={props.state}
              dispatcher={props.dispatcher}
              tldr_placeholder={props.tldr_placeholder}
            />
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>

      <Dialog
        title='Upload the image'
        desc='You can upload only png or jpeg'
        is_open={is_img_uploader_open}
        set_is_open={set_is_img_uploader_open}
        on_close={() => props.ref.current?.focus()}
      >
        <ImageUploader
          slug={props.slug}
          on_complete={file_name => {
            set_is_img_uploader_open(false);
            insert_image_name(file_name);
          }}
        />
      </Dialog>
    </>
  );
}
