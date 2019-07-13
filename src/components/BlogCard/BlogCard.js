import React from "react"
import styled from "styled-components"

const Blog = styled.div`
	cursor: pointer;
	padding-left: 15px;
	margin-bottom: 30px;
	height: 100px;
	width: 90%;
	border-radius: 6px;
	box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.15);
	background-color: ${props => props.theme.lightBlue};
	display: flex;
	flex-direction: column;
	justify-content: center;
	&:hover {
		box-shadow: none;
	}
	h3 {
		margin-bottom: 0px;
		line-height: 15px;
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

const BlogCard = ({ title, date, slug }) => {
	return (
		<Blog>
			<h3> {title}</h3>
			<p> {date} </p>
			<h5> {slug} </h5>
		</Blog>
	)
}
export default BlogCard
