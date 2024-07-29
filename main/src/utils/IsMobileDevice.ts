// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
export const IsMobileDevice = (): boolean => {
  if (typeof navigator === 'undefined') {
    return false;
  }
  return navigator.userAgent.match(/iPhone|iPad|Android.+Mobile/) !== null;
};
