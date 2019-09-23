import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup, FeatureGroup, Polyline } from 'react-leaflet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import experiences from '../content/experience-content'

const mapConfig = {
	accessToken: "pk.eyJ1IjoiY2hsb2UtbWMiLCJhIjoiY2praGJibDFuMHNvZzN2bzNtcWZnbXhhcCJ9.xXYfoIoIpRaO4CXYrqywZw",
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
		let lyr = this.markerRef.current.leafletElement.getLayers()[index];
		lyr.openPopup();
		this.setState({
			position: lyr.getLatLng()
		})
	}

	// onPopupOpen = (e) => {
	// 	let map = this.mapRef.current.leafletElement;
	// 	let px = map.project(e.popup.getLatLng());
	// 	console.log(map._popup._container.offsetHeight);
	// 	console.log(map)
	// 	px.y -= e.popup._container.offsetHeight / 2;
	// 	let position = map.unproject(px);
	// 	this.setState({
	// 		position
	// 	})
	// }

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
						<h5>{exp.title}</h5>
						<span className="d-md-none">{exp.body}</span>
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
							url={"https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=" + mapConfig.accessToken}
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


// // Create your own class, extending from the Marker class.
// class ExtendedMarker extends Marker {
// 	// "Hijack" the component lifecycle.
//   componentDidMount() {
//   	// Call the Marker class componentDidMount (to make sure everything behaves as normal)
//   	super.componentDidMount();

//     // Access the marker element and open the popup.
//     this.leafletElement.openPopup();
//   }
// }