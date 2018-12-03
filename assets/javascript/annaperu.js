// // Initialize and add the Peru map
// function initMap() {
//   // The location of Cusco
//   var cusco = {lat: -13.532, lng: -71.965};
//   // The map, centered at Cusco
//   var map = new google.maps.Map(
//       document.getElementById('map'), {zoom: 5, center: cusco});
//   // The marker, positioned at Cusco
//   var marker = new google.maps.Marker({position: cusco, map: map});
// }


      // If you're adding a number of markers, you may want to drop them on the map
      // consecutively rather than all at once. This example shows how to use
      // window.setTimeout() to space your markers' animation.

// $(document).ready(function() {


        // var peruLocation = {lat: -13.532, lng: -71.965};
        // var whistler = {lat: 50.116, lng: -122.957};
        // var location;

        // var city = "peru"

        // if (city === "peru") {
        //     var location = peruLocation;
        // }

    
      var neighborhoods = [
        {lat: -13.163, lng: -72.545},
        {lat: -13.333, lng: -72.085},
        {lat: -13.334, lng: -72.544}
       
      ];

      var markers = [];
      var map;

      function initMap() {
        map = new google.maps.Map(document.getElementById('mapPeru'), {
          zoom: 8,
          center: {lat: -13.532, lng: -71.965}
        // center: location
        });
      }

      function drop() {
        clearMarkers();
        for (var i = 0; i < neighborhoods.length; i++) {
          addMarkerWithTimeout(neighborhoods[i], i * 200);
        }
      }

      function addMarkerWithTimeout(position, timeout) {
        window.setTimeout(function() {
          markers.push(new google.maps.Marker({
            position: position,
            map: map,
            animation: google.maps.Animation.DROP
          }));
        }, timeout);
      }

      function clearMarkers() {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(null);
        }
        markers = [];
      }

   






// Initialize and add the Whistler map
// function initMap() {
//     // The location of Whistler
//     var whistler = {lat: 50.116, lng: -122.957};
//     // The map, centered at Whistler
//     var mapWhistler = new google.maps.Map(
//         document.getElementById('mapWhistler'), {zoom: 5, center: whistler});
//     // The marker, positioned at Cusco
//     var marker = new google.maps.Marker({position: whistler, map: mapWhistler});
//   }


// });
