// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as config from '@watasuke.net/config/config';
import {createVanillaExtractPlugin} from '@vanilla-extract/next-plugin';
import type {NextConfig} from 'next';

const withVanillaExtract = createVanillaExtractPlugin({
  unstable_turbopack: {mode: 'on'},
});

const nextConfig: NextConfig = withVanillaExtract({
  output: 'export',
  trailingSlash: true,
  allowedDevOrigins: config.allowed_dev_origins,
  transpilePackages: ['@watasuke.net/common'],
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
});

export default nextConfig;
