// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {apiUrl} from '@watasuke.net/config/config';

export function upload_new_image(
  slug: string,
  file_name: string,
  file_type: string,
  buffer: ArrayBuffer,
): Promise<Response> {
  return fetch(`${apiUrl}/img/${slug}/${file_name}`, {
    method: 'POST',
    headers: {
      'Content-Type': file_type,
    },
    body: buffer,
  });
}
