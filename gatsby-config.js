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
        icon: `src/assets/icon.jpg`, // This path is relative to the root of the site.
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
  ]
}
