
 function buildCharts(sample) {
  
    // @TODO: Use `d3.json` to fetch the sample data for the plots
    var url = (`/api/v1.0`)

    // @TODO: Build a Bubble Chart using the sample data
    d3.json(url).then(function (data) {
      var tract = data['census_tract'];
      var income = data['median_income'];
      
  
      var trace = {
        x: tract,
        y: income,
        type: "scatter",
        mode: "markers",
        marker: {
          color: tract,
          size: income,
          symbol: "circle"
        },
        text: "Hello, test",
        textinfo: 'none',
        hoverinfo: "x+y+text"
      };
  
      var data = [trace];
  
      var layout = {
        title: "Bubble Chart",
        xaxis: { title: "Census Tract ID" },
        yaxis: { title: "Median Household Income" },
        hovermode: "closest",
        margin: { t:0 }
      };
  
      Plotly.newPlot("bubble", data, layout, {scrollZoom: true});
    });
}
      
  
//   function init() {
//         // Grab a reference to the dropdown select element
//         var selector = d3.select("#selDataset");
  
//         // Use the list of sample names to populate the select options
//         d3.json("/names").then((sampleNames) => {
//           sampleNames.forEach((sample) => {
//             selector
//               .append("option")
//               .text(sample)
//               .property("value", sample);
//           });
  
//           // Use the first sample from the list to build the initial plots
//           const firstSample = sampleNames[0];
//           buildCharts(firstSample);
//           buildMetadata(firstSample);
//         });
//       }
  
//   function optionChanged(newSample) {
//         // Fetch new data each time a new sample is selected
//         buildCharts(newSample);
//         buildMetadata(newSample);
//       }
  
//   // Initialize the dashboard
//   init();