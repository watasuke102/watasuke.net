// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {useMonaco} from '@monaco-editor/react';
import React from 'react';

export const MonacoContext = React.createContext<ReturnType<
  typeof useMonaco
> | null>(null);
