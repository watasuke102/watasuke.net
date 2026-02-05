// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as config from '@watasuke.net/config/config';
import {createVanillaExtractPlugin} from '@vanilla-extract/next-plugin';
import type {NextConfig} from 'next';

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = withVanillaExtract({
  output: 'export',
  trailingSlash: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: [
        {
          loader: '@svgr/webpack',
        },
      ],
    });

    return config;
  },
  allowedDevOrigins: config.allowed_dev_origins,
  transpilePackages: ['@watasuke.net/common'],
});

export default nextConfig;
