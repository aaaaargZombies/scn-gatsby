/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	/* Your site config here */
	plugins: [
		{
			resolve: "gatsby-source-radar",
			options: {
				centres: [
					"Sumac Centre",
					"DIY Space for London",
					"The Autonomous Centre of Edinburgh",
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
