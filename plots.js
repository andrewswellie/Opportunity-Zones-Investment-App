// Sort the data array using the greekSearchResults value

// Trace1 for the Greek Data
var trace1 = {
  x: data.map(row => row.census_tract),
  y: data.map(row => row.median_income),
  text: data.map(row => row.census_tract),
  name: "Greek",
  type: "bar"
};

// data
var data = [trace1];

// Apply the group bar mode to the layout
var layout = {
  title: "Title",
 
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout);
