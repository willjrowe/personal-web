

// Create the script tag, set the appropriate attributes
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCJrBLflGnQLI6IpKcxXUsWeACxWyHkySI&callback=initMap&libraries=drawing';
script.defer = true;
script.async = true;

var locationTable = {
    will: {
      center: {lat: 38.306610, lng: -77.473600},
      population: 2714856,
      color: '#424bf5'
    },
    joseph: {
      center: {lat: 37.890800, lng: -122.127472},
      population: 8405837,
      color: '#f54278'
    },
    jacob: {
      center: {lat: 44.977753, lng: -93.265015},
      population: 3857799,
      color: '#00990d'
    },
    ethan: {
      center: {lat: 45.512230, lng: -122.658722},
      population: 603502,
      color: '#42f5d1'
    },
    mia: {
        center: {lat: 37.8715, lng: -122.2730},
        population: 603502,
        color: '#f542b0'
      },
      faith: {
        center: {lat: 40.8262, lng: -73.5021},
        population: 603502,
        color: '#f58442'
      },
      jaime: {
        center: {lat: 42.3601, lng: -71.0589},
        population: 603502,
        color: '#FF0000'
      }
  };

  var nicePoints = [
    {x:38.306610,y:-77.473600},
    {x:37.890800,y:-122.127472},
    {x:44.977753,y:-93.265015},
    {x:45.512230,y:-122.658722},
    {x:37.8715,y:-122.2730},
    {x:40.8262,y:-73.5021},
    {x:42.3601,y:-71.0589}
  ];

  var currentX = 0.0;
  var currentY = 0.0;

  function geometricMedian (){
    var n = 7;
    for (var i = 0; i < n; i++){
      currentX = currentX + nicePoints[i].x;
      currentY += nicePoints[i].y;
    }
    currentX /= n;
    currentY /= n;
  }

  geometricMedian(nicePoints,7);

  var circlesArray = [];

  
var map;

function clearCircles(){
  for (var i =0; i<circlesArray.length;i++){
    circlesArray[i].setRadius(2500000 * ((document.getElementById("circleRange").value)/100));
  }
}
  
// Attach your callback function to the `window` object
window.initMap = function() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 37.090, lng: -95.712},
        zoom: 4
      });

      var avg = {lat: this.currentX, lng: this.currentY};

      var marker = new google.maps.Marker({
        position: avg,
        map: map,
        title: 'Average'
      });

      function addCircles() {
        for (var loc in locationTable) {
            // Add the circle for this city to the map.
            var locCircle = new google.maps.Circle({
              strokeColor: this.locationTable[loc].color,
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillOpacity: 0,
              map: map,
              center: this.locationTable[loc].center,
              radius: 2500000 * ((document.getElementById("circleRange").value)/100),
              clickable: false
              
            });
            circlesArray.push(locCircle);
            // for (var other in locationTable){
            //   if (locationTable[other].center!=locationTable[loc].center){
            //     pathCoordinates = [];
            //     pathCoordinates.push(locationTable[other].center);
            //     pathCoordinates.push(locationTable[loc].center);
            //     var funpath = new google.maps.Polyline({
            //       path: pathCoordinates,
            //       strokeColor: '#FF0000',
            //       strokeOpacity: 1.0,
            //       strokeWeight: 2
            //     });
              
            //     funpath.setMap(map);
            //   }
            // }
          }
      }


      addCircles();
     
};

document.getElementById("circleRange").addEventListener("input",clearCircles,false);

// Append the 'script' element to 'head'
document.head.appendChild(script);