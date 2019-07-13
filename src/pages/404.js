import React from "react"
import Layout from "../layouts"
import { Link } from "gatsby"
import Head from "../components/Head/Head"

const NotFound = () => (
	<Layout>
		<Head title="404" />

		<h1 style={{ marginTop: 40 }}> Oops,You're lost </h1>
		<Link to="/">
			{" "}
			<h3> Take me back home! </h3>{" "}
		</Link>
	</Layout>
)

export default NotFound
