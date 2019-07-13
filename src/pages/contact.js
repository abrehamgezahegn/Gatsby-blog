import React from "react"
import Layout from "../layouts"
import Head from "../components/Head/Head"

const Contact = () => (
	<Layout>
		<Head title="Contact" />

		<h1> My Contacts </h1>
		<h4> These are my Contacts enjoy </h4>
		<h5>
			{" "}
			<a target="_blank" href="twitter.com/abreham">
				{" "}
				Twitter{" "}
			</a>
		</h5>
	</Layout>
)

export default Contact
