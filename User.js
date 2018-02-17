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

var users = [new User("null", "null", 0), new User("null", "null", 0), new User("null", "null", 0), new User("null", "null", 0)];
var usersSorted = [new User("null", "null", 0), new User("null", "null", 0), new User("null", "null", 0), new User("null", "null", 0)];

//This function gets called when the user hits the 'Rank' button
function getIdAndPlatform () { 

	users[0]._id = document.getElementById("Teammate-1").value;
	users[1]._id = document.getElementById("Teammate-2").value;
	users[2]._id = document.getElementById("Teammate-3").value;
	users[3]._id = document.getElementById("Teammate-4").value;

	users[0]._platform = document.getElementById("platform1").value;
	users[1]._platform = document.getElementById("platform2").value;
	users[2]._platform = document.getElementById("platform3").value;
	users[3]._platform = document.getElementById("platform4").value;

	for (var i = 0; i < users.length; i++) {
		console.log("Name: " + users[i].id + " Platform: " + users[i].platform + "  Score: " + users[i].score); 
	}

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
	}, 4000); 
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
				users[index].score = -1; 
			}
		}
	}

	call.open("GET", "http://localhost:3400/?username=" + userId + "&platform=" + userPlatform, true);
	call.send();
}

function sortUsersByScore () {
 /*
  var sorted = false
  
  while (!sorted){
    sorted = true;
    arr.forEach(function (element, index, array){
      if (users[index].score > users[index+1].score) {
        array[index] = array[index+1];
        array[index+1] = element;
        sorted = false;
      }
    });
  }
*/
	for (var i = 0; i < users.length; i++) {
		console.log("Username: " + users[i].id + " Score: " + users[i].score); 
	}

}
