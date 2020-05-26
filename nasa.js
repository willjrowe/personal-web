var req = new XMLHttpRequest();
var url = "https://api.nasa.gov/planetary/apod?api_key=";
var api_key = "yTNgoyU0gjQPmRWLo82UINDQWgofCfKjrrxkivTN";

req.open("GET", url + api_key);
req.send();

req.addEventListener("load", function(){
	if(req.status == 200 && req.readyState == 4){
      var response = JSON.parse(req.responseText);
      console.log(response);
    document.getElementById("dailypic").src = response.hdurl;
  }
})