import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const linkStyle = {
	margin: `0 0 4px 20px`,
	fontSize: `0.9em`,
	fontWeight: `300`,
	color: `white`,
	textDecoration: `none`,
	letterSpacing: `0.75px`
}

const Header = ({ siteTitle }) => (
	<header
		style={{
			background: `rgb(103, 239, 164)`,
			background: `linear-gradient(90deg, rgba(103,239,164,1) 0%, rgba(67,135,181,1) 48%, rgba(114,68,206,1) 100%)`,
			marginBottom: `1.45rem`,
		}}
	>
		<div
			style={{
				margin: `0 auto`,
				maxWidth: 960,
				padding: `0.5rem`,
				display: `flex`,
				justifyContent: 'space-between'
			}}
		>
			<h3 style={{ margin: 0 }}>
				<Link
					to="/"
					style={{
						color: `white`,
						textDecoration: `none`,
					}}
				>
					{siteTitle}
				</Link>
			</h3>
			<div>
				<Link style={linkStyle} to="/experience/">Experience</Link>
				<Link style={linkStyle} to="/projects/">Projects</Link>
			</div>
		</div>
	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
