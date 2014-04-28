function init() {
	var map = L.map('map').setView([49.471451, 16.902344], 5);
	L.tileLayer('http://{s}.tiles.mapbox.com/v3/examples.map-h67hf2ic/{z}/{x}/{y}.png', {
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
		maxZoom: 18
	}).addTo(map);

	L.geoJson(geojson, {
		onEachFeature: onEachFeature
	}).addTo(map);

	function onEachFeature(feature, layer) {
		// does this feature have a property named popupContent?
		var point = feature.properties;
		if (point && point.NAME) {
			layer.bindPopup('<strong>' + point.NAME + '</strong><br>' + point.POP_MAX);
		}
	}
}

window.onLoad = init();