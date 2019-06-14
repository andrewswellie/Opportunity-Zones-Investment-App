/**
* Helper function to select stock data
* Returns an array of values
* @param {array} rows
* @param {integer} index
* index 0 - Date
* index 1 - Open
* index 2 - High
* index 3 - Low
* index 4 - Volume
*/
function unpack(rows, index) {
return rows.map(function(row) {
  return row[index];
});
}

function buildCharts() {
    d3.csv("https://raw.githubusercontent.com/andrewswellie/ProjectTwo_Opportunity-Zones-Investment-App/master/csv_raw_data/final_api_data.csv", function(data) {

  // Grab values from the data json object to build the plots
  var tract = data.dataset.census_tract;
  var income = data.dataset.median_income;
  
  var trace1 = {
    type: "bar",
    name: tract,
    x: tract,
    y: income,
    line: {
      color: "#17BECF"
    }
  };

  var data = [trace1];

  Plotly.newPlot("graph", data);

});
}

buildCharts();