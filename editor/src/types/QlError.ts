// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
export type QlError = {
  response: {
    errors: {
      message: string;
      extensions: string;
    }[];
  };
};
