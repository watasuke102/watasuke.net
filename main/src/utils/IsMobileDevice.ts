// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
export const IsMobileDevice = (): boolean => {
  if (typeof navigator === 'undefined') {
    return false;
  }
  return navigator.userAgent.match(/iPhone|iPad|Android.+Mobile/) !== null;
};
