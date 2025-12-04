// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {apiUrl} from '@watasuke.net/config/config';
import axios from 'axios';

export async function upload_new_image(
  slug: string,
  file_name: string,
  file_type: string,
  buffer: ArrayBuffer,
): Promise<undefined> {
  axios.post(`${apiUrl}/img/${slug}/${file_name}`, buffer, {
    headers: {
      'Content-Type': file_type,
    },
  });
}
