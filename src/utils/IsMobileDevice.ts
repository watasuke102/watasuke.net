// IsMobileDevice.ts
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT SUSHI-WARE License.

export const IsMobileDevice = (): boolean => {
  if (!navigator) {
    return false;
  }

  return navigator.userAgent.match(/iPhone|iPad|Android.+Mobile/) !== null;
};
