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
        plugins: [] // just in case those previously mentioned remark plugins sound cool :)
      }
    },
  ],
}
