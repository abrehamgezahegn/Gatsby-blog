import React from "react"
import { Link } from "gatsby"
import Layout from "../layouts"
import Head from "../components/Head/Head"

export default () => (
	<Layout>
		<Head title="Home" />
		<h1> Hello baby </h1>{" "}
		<p>
			{" "}
			Please dont hesitate to <Link to="/contact"> contact me </Link>{" "}
		</p>
	</Layout>
)
