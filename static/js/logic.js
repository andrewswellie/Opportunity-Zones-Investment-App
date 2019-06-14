// Store our API endpoint inside queryUrl
var queryUrl = "https://raw.githubusercontent.com/andrewswellie/ProjectTwo_Opportunity-Zones-Investment-App/master/OppZones.geojson";

 // Perform a GET request to the query URL
 d3.json(queryUrl, function(data) {
  // Once we get a response, send the data.features object to the createFeatures function
  createFeatures(data.features);


function createFeatures(tracts) {

  // Define a function we want to run once for each feature in the features array
  // Give each feature a popup describing the place and time of the earthquake
  function onEachFeature(feature, layer) {
    layer.bindPopup("<h3>" + feature.properties.namelsad10 +
      "</h3><hr><p><b>" + feature.properties.community_name + "</b><br/><br/>" +
      " Poverty rate: " + feature.properties.poverty_rate + "<br/>" + 
      " Median Home Value: " + feature.properties.home_value + "<br/>" +
      "% Change Home Value: " + feature.properties.home_change + "<br/>" + 
      "Crimes per 1000: " + feature.properties.crimes_per_1000 + "<br/>" + 
      "Population: " + feature.properties.pop_12_17 + "<br/>" + 
      "Median Income: " + feature.properties.median_income + "<br/>" + 
      "% Unemployment: " + feature.properties.unemployment + "<br/>" + 
      "% Change Home Value: " + feature.properties.home_change + "<br/>" + 
      "Associates Degree or Higher: " + feature.properties.assoc_degree_or_higher + 
      "</p>");
  }

  // Create a GeoJSON layer containing the features array on the tracts object
  // Run the onEachFeature function once for each piece of data in the array

  var tract = L.geoJSON(tracts, {
    onEachFeature: onEachFeature
  },

    onEachFeature: function(feature, layer) {
      // Set mouse events to change map styling
      layer.on({
        // When a user's mouse touches a map feature, the mouseover event calls this function, that feature's opacity changes to 90% so that it stands out
        mouseover: function(event) {
          layer = event.target;
          layer.setStyle({
            fillOpacity: 0.9
          });
        },
        // When the cursor no longer hovers over a map feature - when the mouseout event occurs - the feature's opacity reverts back to 50%
        mouseout: function(event) {
          layer = event.target;
          layer.setStyle({
            fillOpacity: 0.5
          });
        },
        // When a feature (neighborhood) is clicked, it is enlarged to fit the screen
        click: function(event) {
          map.fitBounds(event.target.getBounds());
        }
      });
  });
  


  // Sending our tract layer to the createMap function
  createMap(tract);
}

})

function createMap(tract) {

// Define streetmap and darkmap layers
var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
});

var lightmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.light",
  accessToken: API_KEY
});

// Define a baseMaps object to hold our base layers
var baseMaps = {
  "Street Map": streetmap,
  "Light Map": lightmap
};

// Create overlay object to hold our overlay layer
var overlayMaps = {
  tract: tract
};

// Create our map, giving it the streetmap and tract layers to display on load
var myMap = L.map("map", {
  center: [
    41.881832, -87.623177
  ],
  zoom: 11,
  layers: [streetmap, tract]
});



// Create a layer control
// Pass in our baseMaps and overlayMaps
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);
}
