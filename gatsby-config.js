require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
	siteMetadata: {
		title: "Gatsby Bootcamp",
		author: "Abreham Gezahegn",
	},

	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: "gatsby-source-contentful",
			options: {
				spaceId: process.env.CONTENTFUL_SPACE_ID,
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
			},
		},
		`gatsby-plugin-styled-components`,
	],
}
