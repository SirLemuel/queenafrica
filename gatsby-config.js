module.exports = {
  siteMetadata: {
    title: `BootyEnvy.com`,
    description: `BootyEnvy is Curvy, Shapely, and Classy.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
    resolve: "gatsby-plugin-react-svg",
    options: {
      rule: {
        include: `${__dirname}/src/assets/svg/`,
      }
    }
  },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    'gatsby-plugin-root-import',
    `gatsby-transformer-xml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
