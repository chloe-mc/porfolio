/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

	return (
		<>
			<Header siteTitle={data.site.siteMetadata.title} />
			<div
				style={{
					margin: `0 auto`,
					maxWidth: 960,
					padding: `0px 1.0875rem 1.45rem`,
					paddingTop: 0,
				}}
			>
				<main>{children}</main>
				<footer style={{ marginTop: `2em`, textAlign: `center` }}>
					<div className="col-12">
						<a className="socialLinks" target="_blank" href="https://github.com/chloe-mc">
							<FontAwesomeIcon icon={faGithub} />
						</a>
						<a className="socialLinks" target="_blank" href="https://www.linkedin.com/in/chloe-mcknight-061b9768/">
							<FontAwesomeIcon icon={faLinkedin} />
						</a>
						<a className="socialLinks" href="mailto:cbt0029@gmail.com">
							<FontAwesomeIcon icon={faEnvelope} />
						</a>
					</div>
					<div className="pt-3">
						Chloe McKnight © {new Date().getFullYear()}, Built with
						{` `}
						<a href="https://www.gatsbyjs.org">Gatsby</a>
					</div>
				</footer>
			</div>
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
