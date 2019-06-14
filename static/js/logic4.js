Plotly.d3.csv("https://raw.githubusercontent.com/andrewswellie/ProjectTwo_Opportunity-Zones-Investment-App/master/csv_raw_data/final_api_data.csv"), function(err, rows) {
    function unpack(rows, key) {
        return rows.map(function(row) {
            return row[key];
        });
      }

    var Trace1 = {
        type: "bar",
        name: "Holy Shit This Better Work",
        x: unpack(rows, "tract"),
        y: unpack(rows, "median_income"),
    }

    var data = [Trace1];

    var layout = {
        title: "Fuck this graph"
    };

    Plotly.newPlot("graph", data, layout);
};