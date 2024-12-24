// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {css} from './ImageUploader.css';
import React from 'react';
import {useDropzone, FileWithPath} from 'react-dropzone';
import {Button} from '@common/Button';
import {upload_new_image} from '@utils/api';

type Props = {
  slug: string;
  on_complete: (file_name: string) => void;
};

type ImageInfo = {
  url: string;
  type: string;
  buffer: ArrayBuffer;
};

export function ImageUploader(props: Props) {
  const [image_info, set_image_info] = React.useState<ImageInfo | undefined>();
  const [image_name, set_image_name] = React.useState('image');
  const [image_ext, set_image_ext] = React.useState('jpg');
  const image_filename = React.useCallback(
    () => image_name + '.' + image_ext,
    [image_ext, image_name],
  );

  const handle_drop = React.useCallback((files: FileWithPath[]) => {
    const file = files[0];
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result instanceof ArrayBuffer) {
        const match = file.name.match(/(?<name>.+)\.(?<ext>.*)?/);
        const name = match?.groups?.name;
        if (!name) {
          return;
        }
        set_image_name(name);
        set_image_ext(match?.groups?.ext ?? 'jpg');
        set_image_info({
          url: URL.createObjectURL(new Blob([reader.result])),
          type: file.type,
          buffer: reader.result,
        });
      }
    };
    reader.readAsArrayBuffer(file);
  }, []);

  const upload = React.useCallback(async () => {
    if (!image_info || image_name === '') {
      return;
    }
    await upload_new_image(
      props.slug,
      image_filename(),
      image_info.type,
      image_info.buffer,
    );
    props.on_complete(image_filename());
  }, [image_info, image_name, props, image_filename]);

  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop: handle_drop,
    multiple: false,
    accept: {
      'image/png': [],
      'image/jpeg': [],
    },
  });

  if (image_info) {
    return (
      <form onSubmit={upload}>
        <img className={css.img} src={image_info.url} alt='' />
        <div className={css.editor}>
          <input
            className={css.input}
            type='text'
            value={image_name}
            onChange={e => set_image_name(e.target.value)}
            required
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
          />
          <span className={css.ext_dot}>.</span>
          <input
            className={css.input}
            type='text'
            value={image_ext}
            onChange={e => set_image_ext(e.target.value)}
            required
          />
        </div>
        <div className={css.copy_area}>
          <span>copy this:</span>
          <input
            className={css.input}
            type='text'
            value={`![](/img/${image_filename()})`}
            readOnly
          />
        </div>
        <div className={css.buttons}>
          <Button
            type='contained'
            text='Upload'
            aria_label='upload'
            on_click={upload}
            disabled={image_name === '' || image_ext === ''}
          />
          <Button
            type='text'
            text='Discard and start over'
            aria_label='discard and start over'
            on_click={() => set_image_info(undefined)}
          />
        </div>
      </form>
    );
  }

  return (
    <div
      {...getRootProps()}
      className={`${css.upload_area} ${isDragActive ? css.dropping_file : ''}`}
      onPaste={e => {
        if (!e.clipboardData.files[0]) {
          return;
        }
        e.clipboardData.files[0].arrayBuffer().then(buf =>
          set_image_info({
            url: URL.createObjectURL(new Blob([buf])),
            type: 'image/jpeg',
            buffer: buf,
          }),
        );
      }}
    >
      <input {...getInputProps()} />
      <span className={css.dnd_prompt}>D&D here</span>
      <span> or click here to browse files</span>
    </div>
  );
}
