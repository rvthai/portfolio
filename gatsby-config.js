/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Ricky Thai`,
    description: `Ricky Thai's Portfolio`,
    author: `Ricky Thai`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-layout`,
    //   options: {
    //     component: require.resolve(`./src/layouts/index.js`),
    //   },
    // },
    "gatsby-plugin-sass",
    `gatsby-transformer-remark`,
    `gatsby-plugin-fontawesome-css`,
  ],
}
