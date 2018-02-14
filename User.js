class User {
	
	constructor (id, platform, score) {
		this.id = id;
		this.platform = platform;
		this.score = score;
	}
	
	get id () {
		return this._id;
	}
	
	set id (value) {
		if (value.length == 0) {
			return; 
		}
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

//This function gets called when the user hits the 'Rank' button
function getIdAndPlatform () {
	var users[];

	users[0].id = document.getElementById("Teammate 1").value;
	users[1].id = document.getElementById("Teammate 2").value;
	users[2].id = document.getElementById("Teammate 3").value;
	users[3].id = document.getElementById("Teammate 4").value;

	var radio1 = getElementsByName("platform1");

	for (var i = 0; length = radio1.length; i < length, i++) {
		if (radio1[i].checked) {
			users[0].platform = radio1[i].value;
			break; 
		}
	}

	var radio2 = getElementsByName("platform1");

	for (var i = 0; length = radio2.length; i < length, i++) {
		if (radio2[i].checked) {
			users[1].platform = radio2[i].value;
			break; 
		}
	}

	var radio3 = getElementsByName("platform1");

	for (var i = 0; length = radio3.length; i < length, i++) {
		if (radio[i].checked) {
			users[2].platform = radio3[i].value;
			break;
		}
	}

	var radio4 = getElementsByName("platform1");

	for (var i = 0; length = radio4.length; i < length, i++) {
		if (radio4[i].checked) {
			users[3].platform = radio4[i].value;
			break; 
		}
	}
}



 