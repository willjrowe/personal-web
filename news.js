var req = new XMLHttpRequest();
var url = "http://newsapi.org/v2/everything?q=bitcoin&from=2020-04-26&sortBy=publishedAt&apiKey=512417cd8ca94053a1a5215d857a7bad";
var api_key = "512417cd8ca94053a1a5215d857a7bad";

req.open("GET", url);
req.send();

req.addEventListener("load", function(){
	if(req.status == 200 && req.readyState == 4){
      var response = JSON.parse(req.responseText);
        console.log(response);
  }
})

// var url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=512417cd8ca94053a1a5215d857a7bad";

// $(document).ready(function(){
//     $.ajax({
//         url:url,
//         method: "GET",
//         dataType: "json",

//         success: function (response){
//             console.log(response);
//         }
//     })



// }
// );