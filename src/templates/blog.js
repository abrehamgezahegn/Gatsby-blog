import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../layouts"
import Head from "../components/Head/Head"

const BlogPost = styled.div`
	margin-bottom: 30px;
	margin-top: 60px;
	height: auto;
	width: 90%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	h1 {
		margin-bottom: 10px;
		line-height: 20px;
	}
	p{
		color: ${props => props.theme.lightText}
		margin: 0px;
		margin-bottom:5px;
		margin-left: 10px;
		font-size: 1.4rem;
		    font-weight: 900;

	}
`

export const query = graphql`
	query($slug: String!) {
		contentfulBlogPost(slug: { eq: $slug }) {
			title
			publishDate(formatString: "MMMM Do")
			body {
				json
			}
		}
	}
`

const blog = props => {
	console.log("blog post page is running")
	const options = {
		renderNode: {
			"embedded-asset-block": node => {
				const alt = node.data.target.fields.title["en-US"]
				const src = node.data.target.fields.file["en-US"].url
				return (
					<img
						style={{
							width: "100%",
							height: 500,
							marginBottom: 30,
							marginTop: 40,
							borderRadius: 6,
						}}
						src={src}
						alt={alt}
					/>
				)
			},
		},
	}
	return (
		<Layout>
			<Head title={props.data.contentfulBlogPost.title} />
			<BlogPost>
				<h1> {props.data.contentfulBlogPost.title}</h1>
				<p> {props.data.contentfulBlogPost.publishDate} </p>
				{documentToReactComponents(
					props.data.contentfulBlogPost.body.json,
					options
				)}
			</BlogPost>
		</Layout>
	)
}
export default blog
