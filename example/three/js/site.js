function init() {

	var map = L.map('map').setView([23.729700, 15.100586], 3);
	L.tileLayer('http://{s}.tiles.mapbox.com/v3/examples.map-h67hf2ic/{z}/{x}/{y}.png', {
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
		maxZoom: 5
	}).addTo(map);

	L.geoJson(geojson, {
		onEachFeature: onEachFeature,
		style: function(feature) {
			return {color: getColor(feature) };
		},
		pointToLayer: function(feature, latlng) {
			return new L.CircleMarker(latlng, {radius: getRadius(feature), fillOpacity: 0.6});
		}
	}).addTo(map);

	function onEachFeature(feature, layer) {
		// does this feature have a property named popupContent?
		var point = feature.properties;
		if (point && point.NAME) {
			layer.bindPopup('<strong>' + point.NAME + '</strong><br>' + point.POP_MAX);
		}
	}

	function getColor(feature) {
		pop = feature.properties.POP_MAX;
		if (pop > 8000000) {
			return '#cc4c02';
		} else if (pop > 3000000) {
			return '#fe9929';
		} else {
			return '#fed98e';
		}
	}

	function getRadius(feature) {
		pop = feature.properties.POP_MAX / 19040000;
		return pop * 40;
	}
}

window.onLoad = init();