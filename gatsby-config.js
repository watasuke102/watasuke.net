const config = require('./config.js');

module.exports = {
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,

    // マニフェスト設定
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `watasuke.tk`,
        short_name: `watasuke.tk`,
        start_url: `/`,
        background_color: `#9955ff`,
        theme_color: `#9955ff`,
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
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: config.trackingId
      }
    },
  ]
}
