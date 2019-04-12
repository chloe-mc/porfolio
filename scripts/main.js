var map, markers;

var experiences = [
    {
        location: [33.207156, -97.152629],
        title: "University of North Texas",
        body: "<p>GRADUATED MAY 2013</p>" +
            "<p>I received a Bachelor of Science in Geography, graduating summa cum laude with a GIS Certificate.</p>"
    },
    {
        location: [33.201731, -97.087396],
        title: "Denton County",
        body: "<p>GIS Technician, SEPTEMBER 2012 - MAY 2013</p>" +
            "<p>I worked here part-time while attending UNT. I became well acquainted with georeferencing while digitizing 1958 aerial imagery."
    },
    {
        location: [33.158723, -96.939448],
        title: "Town of Little Elm",
        body: "<p>GIS Technician, MAY 2013 - AUGUST 2013</p>" +
            "<p>After graduation, I sought full-time employment.<p>" +
            "<ul><li>Automated the parcel download process using Python.</li>" +
            "<li>Performed site analysis for new business locations and created attractive maps for public distribution.</li></ul>"
    },
    {
        location: [32.932248, -97.110703],
        title: "Templeton Demographics",
        body: "<p>GIS Manager, SEPTEMBER 2013 - SEPTEMBER 2016</p>" +
            "<p>I got an opportunity to join a rising company in Texas education consulting. We grew the GIS team from 1 person to 3 people.<p>" +
            "<ul><li>Replaced Google Earth with ArcGIS for Server.</li>" +
            "<li>Developed tools to assist in redistricting efforts.</li>" +
            "<li>Provided data for high-stakes decision making.</li></ul>"
    },
    {
        location: [32.755129, -97.335246],
        title: "Tarrant County",
        body: "<p>Senior Application Programmer Analyst, SEPTEMBER 2016 - PRESENT</p>" +
            "<p>Itching for more time to program, I was happy to accept a full-time developer position.<p>" +
            "<ul><li>Developed full-stack applications using .NET C#, javascript, html, css, and sql.</li>" +
            "<li>Created integrations with existing software using python.</li>" +
            "<li>Utilized user feedback to improve legacy applications.</li></ul>"
    }
];

$(document).ready(function () {
    LoadMap();
});

function LoadMap() {
    map = L.map("map").setView(experiences[0].location, 12);
    L.tileLayer(
        "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
        {
            attribution:
                'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: "mapbox.streets",
            accessToken:
                "pk.eyJ1IjoiY2hsb2UtbWMiLCJhIjoiY2praGJibDFuMHNvZzN2bzNtcWZnbXhhcCJ9.xXYfoIoIpRaO4CXYrqywZw"
        }
    ).addTo(map);

    map.on('popupopen', function (e) {
        var px = map.project(e.popup._latlng); // find the pixel location on the map where the popup anchor is
        px.y -= e.popup._container.clientHeight / 2 // find the height of the popup container, divide by 2, subtract from the Y axis of marker location
        map.panTo(map.unproject(px), { animate: true, duration: 1 }); // pan to new center
    });

    markers = new L.featureGroup();
    experiences.forEach(function (exp, i) {
        var body = "<h5>" + exp.title + "</h5>" +
            exp.body +
            "<div class='d-flex justify-content-end'>" +
            "<button onclick='advance(" + (i + 1) + ")' class='btn btn-primary btn-sm'>Next</button>" +
            "</div>";

        var marker = L.marker(exp.location)
            .bindTooltip(exp.title)
            .bindPopup(body)
            .addTo(markers);
    });
    markers.addTo(map);
    advance(0);
}

function advance(i) {
    var lyrs = markers.getLayers();
    i = i >= lyrs.length ? 0 : i;

    var lyr = lyrs[i];
    lyr.openPopup();
};