/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-source-starter",
      options: {
        centres: [
          "DIY Space for London",
          "Sumac Centre",
          "The Autonomous Centre of Edinburgh",
          "Cowley Club",
          "Common House",
          "The Field",
          "Freedom Bookshop",
          "Forest",
          "LARC",
          "Partisan",
          "DIY Space for London",
          "Star and Shadow Cinema",
        ],
      },
    },
  ],
}
