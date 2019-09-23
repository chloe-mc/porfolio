
import censusThumbnail from "../images/census_thumb.png"
import census1 from "../images/census_1.png"
import census2 from "../images/census_2.png"
import census3 from "../images/census_3.png"

import dfzThumbail from "../images/dfz_thumb.png"
// import dfz1 from "../images/dfz_1.png"
// import dfz2 from "../images/dfz_2.png"
// import dfz3 from "../images/dfz_3.png"
import dfz4 from "../images/dfz_4.png"

import mcThumbnail from "../images/mc_thumb.png"
import mc1 from "../images/mc_1.png"
import mc2 from "../images/mc_2.png"
import mc3 from "../images/mc_3.png"
import mc4 from "../images/mc_4.png"
import mc5 from "../images/mc_5.png"
import mc6 from "../images/mc_6.png"
import mc7 from "../images/mc_7.png"
import mc8 from "../images/mc_8.png"
import mc9 from "../images/mc_9.png"

import pvThumb from "../images/pv_thumb.png"

import wazeThumb from "../images/waze_thumb.png"

import carteThumb from "../images/carte_thumb.png"

const projects = [
	{
		title: 'Census Dashboard',
		detail: `This application uses the Census API to display population statistics
		 for the county. Charts update dynamically based on user selection. Users can 
		 control the density map using the Population Map section.`,
		tech: `React, Bootstrap, Leaflet, .NET Core 2.1, C#, Census API`,
		thumbnail: censusThumbnail,
		site: 'https://gisittest.tarrantcounty.com/CensusDashboard/',
		screenshots: [
			{ image: census1, desc: "desc" },
			{ image: census2, desc: "desc" },
			{ image: census3, desc: "desc" }
		]
	},
	{
		title: 'Drug Free Zones',
		detail: `District Attorney and law enforcement officials use this app to 
		determine if a drug offense was committed in a drug free zone. Using predefined 
		school zones and drawing tools, prosecutors can determine whether or not to 
		pursue a drug free zone charge without any additional software or personnel.`,
		tech: `JQuery, Bootstrap, Leaflet`,
		thumbnail: dfzThumbail,
		site: 'https://gisit.tarrantcounty.com/drugfreezones/',
		screenshots: [
			// { image: dfz1, desc: "desc" },
			// { image: dfz2, desc: "desc" },
			// { image: dfz3, desc: "desc" },
			{ image: dfz4, desc: "desc" }
		]
	},
	{
		title: "Mosquito Control",
		detail: `Users can track mosquito spraying events 
		from the office or in the field. The application 
		is made using mobile-first design principles to 
		support quick data entry and uses basic authentication 
		to keep the data secure. The desktop version allows 
		users to manage pesticide applicator licenses.`,
		tech: `JQuery, Bootstrap, ArcGIS Javascript API, ASP.NET C#, T-SQL`,
		thumbnail: mcThumbnail,
		screenshots: [
			// { image: mc1, desc: "desc", showOnDesktop: false },
			// { image: mc2, desc: "desc", showOnDesktop: false },
			// { image: mc3, desc: "desc", showOnDesktop: false },
			// { image: mc4, desc: "desc", showOnDesktop: false },
			{ image: mc5, desc: "desc" },
			{ image: mc6, desc: "desc" },
			{ image: mc7, desc: "desc" },
			{ image: mc8, desc: "desc" },
			{ image: mc9, desc: "desc" }
		]
	},
	{
		title: `Public Viewer`,
		detail: `My first solo project, this 
		application allows users to get information 
		about their property within Tarrant County 
		and links to some of the other offerings from 
		the GIS department.`,
		tech: `JQuery, ArcGIS Javascript API, ASP.NET C#,
		 T-SQL`,
		thumbnail: pvThumb,
		site: `https://gisit.tarrantcounty.com/publicmapviewer/`
	},
	{
		title: `Waze Data Script`,
		detail: `This script takes advantage of the Waze 
		Connected Citizen program to obtain a live feed 
		of Waze alerts and traffic data. The live data is 
		saved to a database every 15 minutes for future 
		analysis and use in other Tarrant County projects.`,
		tech: `Python, Waze API, T-SQL`,
		thumbnail: wazeThumb
	},
	{
		title: `Waze/Cartegraph Integration`,
		detail: `This script searches Waze data for reports 
		of potholes on county maintained roads. If a pothole 
		is detected, a request is sent to Cartegraph 
		(the county’s asset management software) through 
		their API.`,
		tech: `Python, Cartegraph API, T-SQL`,
		thumbnail: carteThumb
	}

]

export default projects;