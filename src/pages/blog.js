import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../layouts"
import BlogCard from "../components/BlogCard/BlogCard"
import Head from "../components/Head/Head"

const BlogList = styled.div`
	width: 100%;
	height: auto;
`

const Title = styled.h2`
	margin-top: 30px;
`

const Blog = () => {
	const data = useStaticQuery(
		graphql`
			query {
				allContentfulBlogPost(sort: { order: ASC, fields: publishDate }) {
					edges {
						node {
							title
							slug
							publishDate(formatString: "MMMM Do, ha")
						}
					}
				}
			}
		`
	)

	console.log("posts: ", data.allContentfulBlogPost.edges)

	return (
		<Layout>
			<Head title="Blogs" />
			<Title> My Blogs </Title>
			<BlogList>
				{data.allContentfulBlogPost.edges.map(item => (
					<Link to={`blog/${item.node.slug}`}>
						<BlogCard
							title={item.node.title}
							slug={item.node.slug}
							date={item.node.publishDate}
						/>
					</Link>
				))}
			</BlogList>
		</Layout>
	)
}

export default Blog
