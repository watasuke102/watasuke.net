// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as config from '@watasuke.net/config/config';
import {createVanillaExtractPlugin} from '@vanilla-extract/next-plugin';
import type {NextConfig} from 'next';

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = withVanillaExtract({
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
  experimental: {
    allowedDevOrigins: config.allowed_dev_origins,
  },
});

export default nextConfig;
