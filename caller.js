window.onload = function () {
	var call = new XMLHttpRequest();

	call.onreadystatechange = function() {
		if (call.readyState == 4) {
			if (call.status == 200) {
				let response = call.responseText;
				console.log(response);
			}
		}
	}

	call.open("GET", "http://localhost:3400/?username=canada_is_cold&platform=pc", true);
	call.send();
}


