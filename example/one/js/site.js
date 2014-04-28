function init() {

	var map = L.map('map').setView([43.089632, -89.392001], 13);

	L.tileLayer('http://{s}.tiles.mapbox.com/v3/examples.map-h67hf2ic/{z}/{x}/{y}.png', {
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
		maxZoom: 18
	}).addTo(map);

}

window.onLoad = init();