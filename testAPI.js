// window.onload = function () {

// 	var http = new XMLHttpRequest();

// 	http.onreadystatechange = function() {
// 		if (http.readyState == 4) {
// 			if (http.status == 200) {
// 				var data = JSON.parse(http.response);
// 				console.log(data);
// 			}
// 		}
// 	}

// 	http.open("GET", "https://api.fortnitetracker.com/v1/profile/psn/OnlyLukey", true);
// 	http.setRequestHeader("TRN-Api-Key", "14116965-82c4-4733-bb71-bc4f6ea9f9d1");
// 	http.send();
// }

const Fortnite = require('fortnite');
const client = new Fortnite('14116965-82c4-4733-bb71-bc4f6ea9f9d1');
var prom = client.getInfo('TheOnlyPrime', 'psn').then(data => {
	console.log(data.lifetimeStats[6].value); 
});