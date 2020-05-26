var req = new XMLHttpRequest();
var url = "https://api.weatherbit.io/v2.0/current?lat=38.307&lon=-77.474&key=";
var api_key = "0c2ac532e84f42ecb56bf8970e811f60";

req.open("GET", url + api_key);
req.send();

req.addEventListener("load", function(){
	if(req.status == 200 && req.readyState == 4){
      var response = JSON.parse(req.responseText);
        var real = response['data'][0];
        for (entry in real){
            var listitem = document.createElement("LI");
            listitem.innerHTML = entry + ": " + real[entry];
            document.getElementById("weatherlist").appendChild(listitem);
        }
  }
})
