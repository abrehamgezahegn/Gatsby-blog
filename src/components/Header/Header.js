import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const Ul = styled.div`
	padding-left: 0px;
	display: flex;
`

const Title = styled.h1`
	margin-bottom: 30px;
	margin-top: 30px;
`

const activeClassName = "active"
const StyledNavLink = styled(Link).attrs({
	activeClassName: activeClassName,
})`
	&.${activeClassName} {
		font-weight: 600;
		color: ${props => props.theme.textColor};
	}
	font-family: ${"Indie Flower"};
	color: ${props => props.theme.lightText};
	underline: none;
	text-decoration: none;
	h4 {
		margin-right: 26px;
		font-size: 1.8rem;
	}
`

const Header = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	return (
		<header>
			<Title> {data.site.siteMetadata.title} </Title>
			<h3> {data.site.siteMetadata.author} </h3>
			<div>
				<Ul>
					<StyledNavLink to="/">
						<h4> Home </h4>
					</StyledNavLink>
					<StyledNavLink to="/blog">
						<h4> Blog </h4>
					</StyledNavLink>
					<StyledNavLink to="/contact">
						<h4> Contact </h4>
					</StyledNavLink>
					<StyledNavLink to="/about">
						<h4> About me </h4>
					</StyledNavLink>
				</Ul>
			</div>
		</header>
	)
}

export default Header
