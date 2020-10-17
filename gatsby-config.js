/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Ricky Thai`,
    description: `I am a software engineer based in San Jose, CA focused on building things for the web and bringing them to life on the internet.`,
    author: `Ricky Thai`,
    siteUrl: "https://rickythai.com",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ricky Thai`,
        short_name: `Ricky Thai`,
        start_url: `/`,
        background_color: `#212121`,
        theme_color: `#212121`,
        display: `standalone`,
        icon: `src/images/favicons/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/projects`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-scroll-reveal`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-180738875-1",
      },
    },
  ],
}
