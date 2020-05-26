//fxbg lat: 38.306610
//fxbg lng: -77.473600

// // Create the script tag, set the appropriate attributes
// var script = document.createElement('script');
// script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCJrBLflGnQLI6IpKcxXUsWeACxWyHkySI&callback=initMap&libraries=places';
// script.defer = true;
// script.async = true;

  
// var map;


  
// // Attach your callback function to the `window` object
// window.initMap = function() {
//     var fxbg = new google.maps.LatLng(38.306610,-77.473600);

//     map = new google.maps.Map(document.getElementById('map'), {
//         center: fxbg,
//         zoom: 15
//       });

//       var request = {
//         location: fxbg,
//         radius: '1609',
//         type: ['restaurant']
//       };
    
//       service = new google.maps.places.PlacesService(map);
//       service.nearbySearch(request, callback);
//     }

//     function createMarker(place) {
//         var marker = new google.maps.Marker({
//           map: map,
//           position: place.geometry.location
//         });

//         google.maps.event.addListener(marker, 'click', function() {
//           infowindow.setContent(place.name);
//           infowindow.open(map, this);
//         });
//       }
    
//     function callback(results, status) {
//       if (status == google.maps.places.PlacesServiceStatus.OK) {
//         for (var i = 0; i < results.length; i++) {
//           createMarker(results[i]);
//         }
//       }
     
    
// };


// // Append the 'script' element to 'head'
// document.head.appendChild(script);