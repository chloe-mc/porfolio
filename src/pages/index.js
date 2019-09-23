import React from "react"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<div className="row">
			<div className="col-12 col-md-9 order-md-2 mb-4">
				<h1>I'm Chloe McKnight</h1>
				<h3>GIS Developer</h3>
				<p>I am a full stack developer with a background in mapping technology. From website development to python scripts,
					I make things that answer the question, "Where?"</p>
				<p>What is GIS? It stands for Geographic Information Systems. It means maintaining a system that acquires, stores,
					and serves spatial data. For more information, check out <a target="_blank" href="https://youtu.be/LHDCRjAxpI0">this video</a>. </p>
				<Link className="indexLinks" to="/experience/">See My Experience <FontAwesomeIcon icon={faArrowRight} /></Link>
				<Link className="indexLinks" to="/projects/">See My Work <FontAwesomeIcon icon={faArrowRight} /></Link>
			</div>
			<div className="col-12 col-md-3 order-md-1">
				<Image />
			</div>
		</div>
	</Layout >
)

export default IndexPage
