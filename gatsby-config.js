module.exports = {
  siteMetadata: {
    title: `Student AI Group (SAIG)`,
  },
  plugins: [
    `gatsby-plugin-react-next`,
    `gatsby-plugin-catch-links`,
  	`gatsby-plugin-react-helmet`,
  	`gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {}
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
            },
          },
        ],
      }
    },
    {
      resolve: 'gatsby-plugin-purify-css',
      options: {
        purifyOptions: {}
      }
    },
  ],
}
