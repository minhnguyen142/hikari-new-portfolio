/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Mochizuki Hikari's Portfolio`,
    siteUrl: `https://www.mochizukihikari.net`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-netlify",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/favicon.jpg`,
        display: `standalone`,
      },
    },
  ],
};
