import React from "react"
import { Link } from "gatsby"

import ProjectList from '../components/project-list'
import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = () => (
	<Layout>
		<SEO title="Projects" />
		<h2>Projects</h2>
		<ProjectList></ProjectList>
	</Layout>
)

export default Projects
