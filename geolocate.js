var showPosition = function(pos) {
	//alert('Latitude: '+ pos.coords.latitude + ', Longitude: ' + pos.coords.longitude + ', TimeStamp: ' + pos.timestamp);
	var lat = pos.coords.latitude, long = pos.coords.longitude, coords = lat+', '+long;
	
	document.getElementById('google_map').setAttribute('src', 'https://maps.google.com/?q='+coords+'&z=17&output=embed');
}

document.getElementById('get_location').onclick = function() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);					// define callback method that retrieves location info		
	} else {
		alert('Your browser does not support Geolocation');
	}
	return false;
}
