import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

const Div = styled.div`
	color: ${props => props.theme.main};
	position: fixed;
	bottom: 0;
	text-align: center;
`

const Footer = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					author
				}
			}
		}
	`)

	return (
		<Div>
			<h3> {data.site.siteMetadata.author} all rights reserved c.</h3>
		</Div>
	)
}
export default Footer
