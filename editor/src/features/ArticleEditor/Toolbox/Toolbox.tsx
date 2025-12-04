// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {css} from './Toolbox.css';
import * as Accordion from '@radix-ui/react-accordion';
import React from 'react';
import {Button} from '@common/Button';
import {Dialog} from '@common/Dialog';
import {ImageUploader} from '@features/ArticleEditor/ImageUploader';
import {MonacoContext} from '@features/MonacoEditor';
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
  save_button_handler: () => void;
  publish_button_handler: () => void;
};

export function Toolbox(props: Props) {
  const monaco = React.useContext(MonacoContext);
  const [accordion_value, set_accordion_value] = React.useState('');
  const [is_img_uploader_open, set_is_img_uploader_open] =
    React.useState(false);

  const insert_image_name = React.useCallback(
    (file_name: string) => {
      if (!monaco) {
        return;
      }
      const editor = monaco.editor.getEditors()[0];
      if (!editor) {
        return;
      }
      const model = editor.getModel();
      const selection = editor.getSelection();
      if (!model || !selection) {
        return;
      }
      const pos = selection.getPosition();
      const current_line = pos.lineNumber;

      let prev_cursor = '';
      for (let i = -2; i < 0; i++) {
        if (current_line + i > 0) {
          prev_cursor += model.getLineContent(current_line + i) + '\n';
        }
      }
      let after_cursor = '';
      for (let i = 0; i <= 2; i++) {
        if (current_line + i < model.getLineCount()) {
          after_cursor += model.getLineContent(current_line + i) + '\n';
        }
      }
      const nearby_contents = prev_cursor + after_cursor;
      const cursor_pos = prev_cursor.length + pos.column - 1;

      /* ideal: blank lines exist both before and after the image like this:
          <...before>

          ![alt](path)

          <after...>
        it means: <before>\n\n<image>\n\n<after>
      */
      let insert_content = '';
      if (
        nearby_contents[cursor_pos - 2] &&
        nearby_contents[cursor_pos - 2] !== '\n'
      ) {
        insert_content += '\n';
      }
      if (
        nearby_contents[cursor_pos - 1] &&
        nearby_contents[cursor_pos - 1] !== '\n'
      ) {
        insert_content += '\n';
      }
      insert_content += `![](/img/${file_name})`;
      if (nearby_contents[cursor_pos] !== '\n') {
        insert_content += '\n';
      }
      if (nearby_contents[cursor_pos + 1] !== '\n') {
        insert_content += '\n';
      }

      editor.executeEdits('insert-image', [
        {
          range: selection,
          text: insert_content,
          forceMoveMarkers: true,
        },
      ]);
      editor.focus();
    },
    [monaco],
  );

  // FIXME: collapsible is enough
  return (
    <>
      <Accordion.Root
        type='single'
        collapsible
        value={accordion_value}
        onValueChange={set_accordion_value}
      >
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
        on_close={() => {
          monaco?.editor.getEditors()[0].focus();
        }}
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
