class User {
	
	constructor (id, platform, score) {
		this._id = id;
		this._platform = platform;
		this._score = score;
	}
	
	get id () {
		return this._id;
	}
	
	set id (value) {
		this._id = value; 
	}
	
	get platform () {
		return this._platform; 
	}
	
	set platform (value) {
		this._platform = value;
	}
	
	get score () {
		return this._score;
	}
	
	set score (value) {
		this._score = value; 
	}
} 

window.onload = function () {
	
	var loadScreen = document.getElementById("load-screen");
	loadScreen.style.display = "none"; 

	var results = document.getElementById("results");
	results.style.display = "none"; 

}	

var users = [new User("null", "null", 0), new User("null", "null", 0), new User("null", "null", 0), new User("null", "null", 0)];

function getIdAndPlatform () { 

	users[0]._id = document.getElementById("Teammate-1").value;
	users[1]._id = document.getElementById("Teammate-2").value;
	users[2]._id = document.getElementById("Teammate-3").value;
	users[3]._id = document.getElementById("Teammate-4").value;

	users[0]._platform = document.getElementById("platform1").value;
	users[1]._platform = document.getElementById("platform2").value;
	users[2]._platform = document.getElementById("platform3").value;
	users[3]._platform = document.getElementById("platform4").value; 

	var loadScreen = document.getElementById("load-screen");
	loadScreen.style.display = "block"; 

	var toHide = document.getElementById("container-area");
	toHide.style.display = "none";

	if (users[3].platform != "null") {
		getPlayerScores(sortUsersByScore); 
	}
}

function getPlayerScores (callback) {

	//Loop to call server with delay
	for (let i = 0; i < users.length; i++) {
		setTimeout(function() {
  			caller(users[i].id, users[i].platform, i); 
  		}, 1000 * i);
	}

	setTimeout(function() {
		callback(); 
	}, 4200); 
}

function caller (userId, userPlatform, index) {

	var call = new XMLHttpRequest(); 

	var playerNum = index + 1; 

	call.onreadystatechange = function() {
		if (call.readyState == 4) {
			if (call.status == 200) {
				let response = call.responseText;
				users[index].score = response; 
			} else {
				console.log("Player " + playerNum + " not found."); 
				users[index].score = 0; 
			}
		}
	}

	call.open("GET", "http://localhost:3400/?username=" + userId + "&platform=" + userPlatform, true);
	call.send();
}

function sortUsersByScore () {
  
  	var len = users.length;
    var outputString = ""; 

 	for (var i = 0; i < len; i++) {
        for(var j = 0; j < len - 1; j++) { 
        	if (parseInt(users[j].score) < parseInt(users[j + 1].score)) {
	          var temp = users[j];
	          users[j] = users[j+1];
	          users[j + 1] = temp;
      		}
       	}
 	}

  setTimeout(function() {
		outputResults();
	}, 50); 
}

function outputResults () {

	var loadScreen = document.getElementById("load-screen");
	loadScreen.style.display = "none"; 

	var results = document.getElementById("results");
	results.style.display = "block"; 

	var outputString1 = "1: " + users[0].id + " Score: " + users[0].score; 
	var outputString2 = "2: " + users[1].id + " Score: " + users[1].score; 
	var outputString3 = "3: " + users[2].id + " Score: " + users[2].score; 
	var outputString4 = "4: " + users[3].id + " Score: " + users[3].score; 
	document.getElementById("results1").innerHTML = outputString1;
	document.getElementById("results2").innerHTML = outputString2; 
	document.getElementById("results3").innerHTML = outputString3; 
	document.getElementById("results4").innerHTML = outputString4;

}

