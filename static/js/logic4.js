function unpack(rows, index) {
return rows.map(function(row) {
  return row[index];
});
}

function buildPlot() {
    d3.csv("https://raw.githubusercontent.com/andrewswellie/ProjectTwo_Opportunity-Zones-Investment-App/master/csv_raw_data/final_api_data.csv", function(demoData) {
        console.log(demoData);

        demoData.forEach(function(demoData) {
            demoData.tract = +demoData.tract;
            demoData.median_income = +demoData.median_income;
            
          });

  // Grab values from the data json object to build the plots
//   console.log(demoData);
//   console.log(data);
  
  var tract = demoData.tract;
  var income = demoData.median_income;

  console.log(tract);
  console.log(income);
  
  var trace1 = {
    type: "bar",
    x: tract,
    y: income,
    };

  var data = [trace1];

  Plotly.newPlot("graph", data);

});


buildPlot();}