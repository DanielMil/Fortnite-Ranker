window.onload = function () {
	var call = new XMLHttpRequest();

	call.onreadystatechange = function() {
		if (call.readyState == 4) {
			if (call.status == 200) {
				let response = JSON.parse(call.responseText);
				console.log(response);
			}
		}
	}

	call.open("GET", "http://localhost:3400/?arg1=OnlyLukey&arg2=OnlyLukey", true);
	call.send();
}
