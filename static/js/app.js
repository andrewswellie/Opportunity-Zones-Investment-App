function buildMetadata(sample) {

  // Use d3 to select the panel with id of `#sample-metadata`
  var selector = d3.select("#sample-metadata");

  // Use `.html("") to clear any existing metadata
  selector.html("");

  // Use `Object.entries` to add each key and value pair to the panel
  d3.json(`/metadata/` + `${sample}`).then((metaSample) => {
    Object.entries(metaSample).forEach(function ([key, value]) {
      selector
        .append("p")
        .text(`${key}: ${value}`);
    });
  });
 }

function buildCharts(sample) {

  // @TODO: Use `d3.json` to fetch the sample data for the plots
  var url = (`/samples/` + `${sample}`);

  // @TODO: Build a Bubble Chart using the sample data
  d3.json(url).then(function (data) {
    var otu_ids = data['otu_ids'];
    var sample_values = data['sample_values'];
    var text = data['otu_labels'];

    var trace = {
      x: otu_ids,
      y: sample_values,
      type: "scatter",
      mode: "markers",
      marker: {
        color: otu_ids,
        size: sample_values,
        symbol: "circle"
      },
      text: text,
      textinfo: 'none',
      hoverinfo: "x+y+text"
    };

    var data = [trace];

    var layout = {
      title: "Bubble Chart",
      xaxis: { title: "OTU ID" },
      yaxis: { title: "Sample Values" },
      hovermode: "closest",
      margin: { t:0 }
    };

    Plotly.newPlot("bubble", data, layout, {scrollZoom: true});
  });

    // @TODO: Build a Pie Chart
    var pieurl = (`/samples/` + `${sample}`);

    d3.json(pieurl).then(function (data) {
      var trace1 = {
        labels: data.otu_ids.slice(0,10),
        values: data.sample_values.slice(0,10),
        type: 'pie',
        hovertext: data.otu_labels.slice(0,10)
      };
      var data = [trace1];
      var layout = {
        title: "Top Observed Microbes",
      };

      Plotly.newPlot("pie", data, layout);

    });
  }

function init() {
      // Grab a reference to the dropdown select element
      var selector = d3.select("#selDataset");

      // Use the list of sample names to populate the select options
      d3.json("/names").then((sampleNames) => {
        sampleNames.forEach((sample) => {
          selector
            .append("option")
            .text(sample)
            .property("value", sample);
        });

        // Use the first sample from the list to build the initial plots
        const firstSample = sampleNames[0];
        buildCharts(firstSample);
        buildMetadata(firstSample);
      });
    }

function optionChanged(newSample) {
      // Fetch new data each time a new sample is selected
      buildCharts(newSample);
      buildMetadata(newSample);
    }

// Initialize the dashboard
init();