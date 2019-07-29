var map, markers;

var experiences = [
    {
        location: [33.207156, -97.152629],
        title: "University of North Texas",
        timespan: "GRADUATED MAY 2013",
        body: "I graduated summa cum laude with a Bachelor of Science in Geography and a GIS Certificate."
    },
    {
        location: [33.201731, -97.087396],
        title: "Denton County",
        timespan: "SEPTEMBER 2012 - MAY 2013",
        body: "I worked as a GIS technician part-time while attending UNT. I became well acquainted with georeferencing while digitizing 1958 aerial imagery."
    },
    {
        location: [33.158723, -96.939448],
        title: "Town of Little Elm",
        timespan: "MAY 2013 - AUGUST 2013",
        body: "After graduation, I began working at Little Elm as a full-time GIS technician. I started experimenting with python and data visualization."
    },
    {
        location: [32.932248, -97.110703],
        title: "Templeton Demographics",
        timespan: "SEPTEMBER 2013 - SEPTEMBER 2016",
        body: "I got an opportunity to join a rising company in Texas education consulting. We grew the GIS team from one person to three, promoting me to GIS Manager. This fast-paced position gave me a crash course in all things GIS."
    },
    {
        location: [32.755129, -97.335246],
        title: "Tarrant County",
        timespan: "SEPTEMBER 2016 - PRESENT",
        body: "With a growing interest in programming, I transitioned to a GIS developer position. At Tarrant County, I've expanded my technical skills by working on interesting projects." 
    }
];

$(document).ready(function () {
	load_map();
	AOS.init();
});

function load_map() {
    map = L.map("map").setView(experiences[0].location, 12);
    L.tileLayer(
        "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
        {
            attribution:
                'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, '+
                '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: "mapbox.streets",
            accessToken:
                "pk.eyJ1IjoiY2hsb2UtbWMiLCJhIjoiY2praGJibDFuMHNvZzN2bzNtcWZnbXhhcCJ9.xXYfoIoIpRaO4CXYrqywZw"
        }
    ).addTo(map);

    map.on('popupopen', function (e) {
        var px = map.project(e.popup._latlng); // find the pixel location on the map where the popup anchor is
        px.y -= e.popup._container.clientHeight / 2 // find the height of the popup container, divide by 2, subtract from the Y axis of marker location
        map.panTo(map.unproject(px), { animate: true, duration: 0.7 }); // pan to new center
    });

    markers = new L.featureGroup();
    experiences.forEach(function (exp, i) {
        var btntext = i === experiences.length - 1 ? '<span class="fa fa-redo"></span>' : "Next"; 
        var body = "<h6>" + exp.title + "</h6>" +
            "<p>" + exp.body + "</p>" +
            "<div class='d-flex justify-content-between'>" +
            "<span>" + exp.timespan + "</span>" +
            "<button onclick='advance(" + (i + 1) + ")' class='btn btn-primary btn-sm'>" + btntext + "</button>" +
            "</div>";

        var marker = L.marker(exp.location)
            .bindTooltip(exp.title)
            .bindPopup(body, { maxWidth: 228 })
            .addTo(markers);
    });
    markers.addTo(map);
    advance(0);

    var polyline = L.polyline(connect_dots()).addTo(map);
}

function advance(i) {
    var lyrs = markers.getLayers();
    i = i >= lyrs.length ? 0 : i;
    var lyr = lyrs[i];
    lyr.openPopup();
};

function connect_dots(){
    var c = [];
    markers.getLayers().forEach(function(m, i){
        var x = m.getLatLng().lat;
        var y = m.getLatLng().lng;
        c.push([x, y]);
    });
    return c;
}