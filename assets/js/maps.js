// this .js file loads our #map element, and creates markers on the map where YouGym's locations are
// when the map is zoomed out, markers that are close together will be clustered into a 'marker cluster'

function initMap() {
    var center = { lat: 51.247017, lng: -0.1683 };
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 7, center: center });

    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // creates a list of labels for each marker, from A to Z.
    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length] // labels each marker with a different letter of the alphabet, going from A through to Z
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' }); // gets us our markerCluster images
}

// the positions of each Gym. These positions are based off of the real locations of gyms around southern England.
var locations = [
    { lat: 51.150189, lng: 0.869996 },
    { lat: 51.274991, lng: 1.341661 },
    { lat: 51.378900, lng: 0.527900 },
    { lat: 51.522252, lng: -0.622812 },
    { lat: 51.433046, lng: -0.96942 },
    { lat: 51.449453, lng: -2.601324 },
    { lat: 50.262794, lng: -5.100783 },
    { lat: 51.104842, lng: 0.446368 },
    { lat: 51.223147, lng: 1.384086 }
];
