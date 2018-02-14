window.onload = function () {

	call.onreadystatechange = function() {
		if (call.readyState == 4) {
			if (call.status == 200) {
				var data = http.response; 
				console.log(data); 
			}
		}
	}

	var call = new XMLHttpRequest();
	call.open("GET", "localhost:3400/endpoint?arg1=OnlyLukey&arg2=OnlyLukey", true);
	call.send();
}