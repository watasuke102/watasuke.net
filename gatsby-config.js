const config = require('./config.json');
const path = require('path');

module.exports = {
  siteMetadata: {
    siteUrl: `https://watasuke.net`,
  },

  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@': path.resolve(__dirname, 'src/components'),
          '@utils': path.resolve(__dirname, 'src/utils'),
          '@mytypes': path.resolve(__dirname, 'src/types'),
          '@config': path.resolve(__dirname, 'config.json'),
        },
        extensions: [],
      },
    },
    // マニフェスト設定
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `watasuke.net`,
        short_name: `watasuke.net`,
        start_url: `/`,
        background_color: `#282c34`,
        theme_color: `#282c34`,
        display: `minimal-ui`,
        icon: `src/assets/icon.jpg`,
      },
    },

    // 画像読み込み
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },

    // Google Analytics
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        pluginConfig: {head: true},
        trackingIds: [config.trackingId],
      },
    },
  ],
};
