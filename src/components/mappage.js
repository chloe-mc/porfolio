import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup, FeatureGroup, Polyline } from 'react-leaflet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import experiences from '../content/experience-content'

const mapConfig = {
	accessToken: "pk.eyJ1IjoiY2hsb2UtbWMiLCJhIjoiY2s5ODA2NmhlMWNlbjNrcDM0Ym1xN2hvOSJ9.dXozyK_Prlsg6f3CChxfPA",
	id: "mapbox.streets"
}

export default class Mappage extends Component {
	constructor(props) {
		super(props)

		this.state = {
			position: experiences[0].location,
			zoom: 16
		}
	}

	markerRef = React.createRef();
	mapRef = React.createRef();

	componentDidMount() {
		setTimeout(() => {
			this.showPopup(0);
		}, 600)
	}

	showPopup = (index) => {
		if (this.markerRef.current) {
			let lyr = this.markerRef.current.leafletElement.getLayers()[index];
			lyr.openPopup();
			this.setState({
				position: lyr.getLatLng()
			})
		}
	}

	render() {
		let exps = [];
		let markers = [];
		let lineCoords = [];
		experiences.forEach((exp, i) => {
			lineCoords.push(exp.location);
			exps.push(
				<div onClick={() => this.showPopup(i)}>
					<h6>{exp.title}</h6>
					<p>{exp.timespan}</p>
					<p>{exp.body}</p>
				</div>
			);
			markers.push(
				<Marker position={exp.location}>
					<Popup autoPan={true} className="popupFormat">
						<h6>{exp.title}</h6>
						<div className="d-md-none">{exp.body}</div>
						<span>{exp.timespan}</span>
						{
							i === experiences.length - 1 ?
								<button className="btn" onClick={() => this.showPopup(0)}>
									<FontAwesomeIcon icon={faSync} />
								</button>
								:
								<button className="btn" onClick={() => this.showPopup(i + 1)}>
									<FontAwesomeIcon icon={faArrowRight} />
								</button>
						}
					</Popup>
				</Marker>
			);
		});

		if (typeof window !== 'undefined') {
			return (
				<div className="row">
					<Map
						// onpopupopen={this.onPopupOpen}
						ref={this.mapRef}
						center={this.state.position}
						zoom={this.state.zoom}
						style={{ height: `60vh` }}
						className="col-12 col-md-8" >
						<TileLayer
							attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
							url={"https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=" + mapConfig.accessToken}
							id="mapbox/streets-v11"
						/>
						<FeatureGroup ref={this.markerRef}>
							{markers}
						</FeatureGroup>
						<Polyline positions={lineCoords}></Polyline>
					</Map>
					<div className="d-none d-md-block col-md-4 map-sidebar">
						{exps}
					</div>
				</div>
			)
		}
		return null
	}
}
