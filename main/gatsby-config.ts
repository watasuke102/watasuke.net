// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
// FIXME: cannot import from '@watasuke.net/config/config'
import * as config from '../config/config';
import path from 'path';
import {GatsbyConfig} from 'gatsby';

const site_url = 'https://watasuke.net';

const gatsby_config: GatsbyConfig = {
  siteMetadata: {
    title: 'わたすけのへや',
    siteUrl: site_url,
    repo: 'https://github.com/watasuke102/watasuke.net',
  },
  graphqlTypegen: {
    typesOutputPath: 'src/types/gatsby-types.d.ts',
  },
  jsxRuntime: 'automatic',
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-vanilla-extract',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        // prettier-ignore
        alias: {
          '@utils': path.resolve(__dirname, 'src/utils'),
          '@assets': path.resolve(__dirname, 'src/assets'),
          '@data': path.resolve(__dirname, 'src/data'),
          '@mytypes': path.resolve(__dirname, 'src/types'),
          '@pages': path.resolve(__dirname, 'src/components/pages'),
          '@common': path.resolve(__dirname, 'src/components/common'),
          '@feature': path.resolve(__dirname, 'src/components/feature'),
        },
        extensions: [],
      },
    },
    // マニフェスト設定
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'watasuke.net',
        short_name: 'watasuke.net',
        start_url: '/',
        background_color: '#282c34',
        theme_color: '#282c34',
        display: 'minimal-ui',
        icon: 'src/assets/icon.jpg',
      },
    },
    // 画像読み込み
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /.svg$/,
        },
      },
    },
    // Google Analytics
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        pluginConfig: {head: true},
        trackingIds: [config.trackingId],
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: site_url,
        stripQueryString: true,
      },
    },
  ],
};

export default gatsby_config;
