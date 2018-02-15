var request = new XMLHttpRequest();

request.onreadystatechange = function() {
  if (request.readyState == 4) {
    if(request.status == 200) {
      var stats = JSON.parse(request.response);
      console.log(stats);
    } else {
      throw new Error(request.response);
    }

  }
}

request.open('GET', "https://api.fortnitetracker.com/v1/profile/psn/OnlyLukey");
request.send();
