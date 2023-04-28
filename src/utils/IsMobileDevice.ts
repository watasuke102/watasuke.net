// IsMobileDevice.ts
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
export const IsMobileDevice = (): boolean => {
  if (typeof navigator === 'undefined') {
    return false;
  }
  return navigator.userAgent.match(/iPhone|iPad|Android.+Mobile/) !== null;
};
