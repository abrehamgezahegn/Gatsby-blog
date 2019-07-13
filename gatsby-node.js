const path = require("path")
const slash = require("slash")

module.exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
	const blogTemplate = path.resolve("./src/templates/blog.js")
	try {
		const res = await graphql(`
			{
				allContentfulBlogPost {
					edges {
						node {
							slug
						}
					}
				}
			}
		`)
		res.data.allContentfulBlogPost.edges.forEach(edge => {
			createPage({
				path: `blog/${edge.node.slug}/`,
				component: slash(blogTemplate),
				context: {
					slug: edge.node.slug,
				},
			})
		})
	} catch (err) {
		console.log("Error fetching data from contentful: ", err)
	}
}
