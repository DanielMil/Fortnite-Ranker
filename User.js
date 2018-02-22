class User {

	constructor (id, platform, score, kd, ast, kpm, kills, wins, matches) {
		this._id = id;
		this._platform = platform;
		this._score = score;
		this._kd = kd;
		this._kpm = kpm;
		this._kills = kills;
		this._wins = wins;
		this._ast = ast;
		this._matches = matches;
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

	toString() {
		return (this.id + " Score: " + this.score + " Matches Played: " + this.matches + " Wins: " + this.wins + "Kills: " + this.kills + " KD: " + this.kd + " KPM: " + this.kpm + " Average Survival Time: " + this.ast);
	}

}

window.onload = function () {

	var loadScreen = document.getElementById("load-screen");
	loadScreen.style.display = "none";

	var results = document.getElementById("results");
	results.style.display = "none";

}

var users = [new User("null", "null", 0, 0, 0, 0, 0, 0, 0), new User("null", "null", 0, 0, 0, 0, 0, 0, 0), new User("null", "null", 0, 0, 0, 0, 0, 0, 0), new User("null", "null", 0, 0, 0, 0, 0, 0, 0)];

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
				let response = JSON.parse(call.responseText);
				users[index].score = response.lifetimeStats[6].value;
				users[index].kpm = response.lifetimeStats[12].value;
				users[index].kills = response.lifetimeStats[10].value;
				users[index].ast = response.lifetimeStats[14].value;
				users[index].kd = response.lifetimeStats[11].value;
				users[index].wins = response.lifetimeStats[8].value;
				users[index].matches = response.lifetimeStats[7].value;
			} else {
				console.log("Player " + playerNum + " not found.");
				users[index].score = 0;
				users[index].kpm = 0;
				users[index].kills = 0;
				users[index].ast = 0;
				users[index].kd = 0;
				users[index].wins = 0;
				users[index].matches = 0;
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
			users[j].score = users[j].score.toString().replace(/,/g, "");
			users[j+1].score = users[j+1].score.toString().replace(/,/g, "");
        	if (parseInt(users[j].score, 10) < parseInt(users[j + 1].score, 10)) {
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

	for (var i in users) {
		console.log(users[i].toString());
	}

	var loadScreen = document.getElementById("load-screen");
	loadScreen.style.display = "none";

	var results = document.getElementById("results");
	results.style.display = "block";

	var outputString1 = users[0].toString();
	var outputString2 = users[1].toString();
	var outputString3 = users[2].toString();
	var outputString4 = users[3].toString();
	document.getElementById("results1").innerHTML = outputString1;
	document.getElementById("results2").innerHTML = outputString2;
	document.getElementById("results3").innerHTML = outputString3;
	document.getElementById("results4").innerHTML = outputString4;

}

function savePlayers () {

	var loadScreen = document.getElementById("load-screen");
	loadScreen.style.display = "none";

	var results = document.getElementById("results");
	results.style.display = "none";

	var toHide = document.getElementById("container-area");
	toHide.style.display = "block";

	document.getElementById("Teammate-1").innerHTML = users[0];
	document.getElementById("Teammate-2").innerHTML = users[1];
	document.getElementById("Teammate-3").innerHTML = users[2];
	document.getElementById("Teammate-4").innerHTML = users[3];

}
