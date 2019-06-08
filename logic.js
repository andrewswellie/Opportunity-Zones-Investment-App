// Store our API endpoint inside queryUrl
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
var tectPlatesURL = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json";

// Perform a GET request to the query URL
d3.json(queryUrl, function(data) {
  // Once we get a response, send the data.features object to the createFeatures function
  createFeatures(data.features);
});

 // Color
function getColor(magnitude) {
  if (magnitude > 5) {
      return '#CC0000'
  } else if (magnitude > 4) {
      return '#FF6900'
  } else if (magnitude > 3) {
      return '#FFCC00'
  } else if (magnitude > 2) {
      return '#CCFF33'
  } else if (magnitude > 1) {
      return 'green'
  } else {
      return '#66FFCC'
  }
}

function createFeatures(earthquakeData) {

  // Define a function we want to run once for each feature in the features array
  // Give each feature a popup describing the place and time of the earthquake
  function onEachFeature(feature, layer) {
    layer.bindPopup("<h3>" + feature.properties.place + "   Magnitude:" + feature.properties.mag +
      "</h3><hr><p>" + new Date(feature.properties.time) +  "</p>");
  }

  // Create a GeoJSON layer containing the features array on the earthquakeData object
  // Run the onEachFeature function once for each piece of data in the array
  var earthquakes = L.geoJSON(earthquakeData, {
    onEachFeature: onEachFeature,
    
    pointToLayer: function (feature, latlng) {
      return L.circle(latlng, {
      stroke: false,
      fillOpacity: 0.75,
      color: "black",
      fillColor: getColor(feature.properties.mag),
      radius: feature.properties.mag*23000
      });
    }
  })

// Sending our earthquakes layer to the createMap function
createMap(earthquakes);

}



function createMap(earthquakes) {

  // Define streetmap and darkmap layers
  var outdoorsmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.outdoors",
    accessToken: API_KEY
  });

  var satmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.satellite",
    accessToken: API_KEY
  });

  var lightmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.light",
    accessToken: API_KEY
  });

   // Add a tectonic plate layer
   var tectonicPlates = new L.LayerGroup();

   // Create overlay object to hold our overlay layer
   var overlayMaps = {
     Earthquakes: earthquakes,
     "Tectonic Plates": tectonicPlates
   };

  // Define a baseMaps object to hold our base layers
  var baseMaps = {
    "Greyscale": lightmap,
    "Outdoors": outdoorsmap,
    "Satellite": satmap
  };


  // Create our map, giving it the streetmap and earthquakes layers to display on load
  var myMap = L.map("map", {
    center: [
      37.09, -95.71
    ],
    zoom: 5,
    layers: [lightmap, earthquakes, tectonicPlates]
  });

  
   // Add Fault lines data
   d3.json(tectPlatesURL, function(plateData) {
    // Adding our geoJSON data, along with style information, to the tectonicplates
    // layer.
    L.geoJson(plateData, {
      color: "blue",
      weight: 2
    })
    .addTo(tectonicPlates);
  });

  // Create a layer control
  // Pass in our baseMaps and overlayMaps
  // Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);

  // Create legend
  var legend = L.control({position: 'bottomright'});

  legend.onAdd = function () {

    var div = L.DomUtil.create('div', 'info legend'),
              grades = [0, 1, 2, 3, 4, 5],
              labels = [];

  // Loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }
    return div;
  };

  legend.addTo(myMap);
}

  