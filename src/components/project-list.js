import React, { Component } from 'react'
import projects from '../content/project-content'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Modal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


export default class ProjectList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			modalIsOpen: false,
			projectIndex: null
		}
	}

	renderScreenshots = () => {
		console.log(this.state.projectIndex);
		let screenshots = projects[this.state.projectIndex].screenshots.map((ss) => {
			return (<div style={{ maxHeight: `70vh` }}>
				<img src={ss.image} />
				<p>{ss.desc}</p>
			</div>)
		});
		return <Carousel infiniteLoop={true} showThumbs={false} dynamicHeight={true}>
			{screenshots}
		</Carousel>
	}

	openModal = (i) => {
		this.setState({
			modalIsOpen: true,
			projectIndex: i
		});
	}

	closeModal = () => {
		this.setState({ modalIsOpen: false });
	}

	render() {
		let projList = [];
		projects.forEach((proj, i) => {
			projList.push(
				<div className="row mb-5 pb-4" style={{ borderBottom: `1px solid lightgray` }}>
					<div className="col-12 col-md-5 mb-3 mb-md-0" style={{ textAlign: `center` }}>
						<img alt={proj.title + " thumbnail"} src={proj.thumbnail} />
						{proj.site ? <a href={proj.site} target="_blank">View Site</a> : null}
						{proj.site && proj.screenshots ? <span>  |  </span> : null}
						{proj.screenshots ?
							<a href="#" onClick={() => { this.openModal(i) }}>View Screenshots</a> : null
						}
					</div>
					<div className="col-12 col-md-7">
						<h5>{proj.title}</h5>
						<p>{proj.detail}</p>
						<p style={{ fontStyle: `italic`, color: `gray` }}>{proj.tech}</p>
					</div>
				</div>
			);
		});

		return (
			<div>
				<br />
				{projList}
				<Modal ariaHideApp={false} isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}>
					<div className="col-12 d-flex justify-content-end" onClick={this.closeModal}><FontAwesomeIcon icon={faTimes} /></div>
					<div>{this.state.modalIsOpen ? this.renderScreenshots() : null}</div>
				</Modal>
			</div>
		)
	}
}
