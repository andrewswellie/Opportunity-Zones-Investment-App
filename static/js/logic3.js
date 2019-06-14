var svgWidth = 1170;
var svgHeight = 560;

// Define the chart's margins as an object
var chartMargin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30
};

// Define dimensions of the chart area
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// Select body, append SVG area to it, and set the dimensions
var svg = d3.select("#graph")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

// Append a group to the SVG area and shift ('translate') it to the right and to the bottom
var chartGroup = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// Initial params
var chosenXAxis = "tract";
var chosenYAxis = "median_income";

// create scales
function xScale(tractData, chosenXAxis) {
    var xLinearScale = d3.scaleLinear()
    .domain([d3.min(tractData, d =>[chosenXAxis]) * 0.8,
    d3.max(tractData, d => d[chosenXAxis]) * 1.2
])
.range([0, width]);

return xLinearScale;

}
  function yScale(tractData, chosenYAxis) {
      var yLinearScale = d3.scaleLinear()
      .domain([d3.min(tractData, d =>[chosenYAxis]) * 0.8,
        d3.max(tractData, d => d[chosenYAxis]) * 1.2
    ])
    .range([height, 0]);

    return yLinearScale
  }

// render axes
function renderXAxes(newXScale, xAxis) {
    var bottomAxis = d3.axisBottom(newXScale);

    xAxis.transition()
    .duration(0)
    .call(bottomAxis);

    return xAxis;
}
function renderYAxes(newYScale, yAxis) {
    var leftAxis = d3.axisLeft(newYScale);

    yAxis.transition()
    .duration(500)
    .call(leftAxis);

    return yAxis;
}

// function used for updating bar groups for x-axis with transition to new bars

function renderbarsGroup (barsGroup, newYScale, chosenYAxis) {
    barsGroup.transition()
    .duration("500")
    .attr("height", d => chartHeight - newYScale(d[chosenYAxis]));
    return barsGroup;
}


// update Tool Tip

function updateToolTip(chosenXAxis, chosenYAxis) {
    if (chosenYAxis === "poverty_rate"){
        var label = "Poverty Rate: "
        var pct = "%"
        var dolla = ""
        
    }
    else if (chosenYaxis === "crimes_per_1000") {
        var label = "Crimes per 1000 people: "
        var pct = ""
        var dolla = ""
       
    }
    else if (chosenYaxis === "assoc_degree_or_higher") {
        var label = "% with Associate's or higher"
        var pct = "%"
        var dolla = ""
        
    }
    else if (chosenYaxis === "unemployment") {
        var label = "Unemployment Rate"
        var pct = "%"
        var dolla = ""
        
    }
    else if (chosenYaxis === "home_value") {
        var label = "Median Home Value"
        var pct = ""
        var dolla = "$"
        
    }
    else if (chosenYaxis === "median_income") {
        var label = "Median Income"
        var pct = ""
        var dolla = "$"
        
    }
    else if (chosenYaxis === "home_change") {
        var label = "Change in Home Value"
        var pct = "%"
        var dolla = ""
      
    }
    else if (chosenYaxis === "pop_12_17") {
        var label = "Population"
        var pct = ""
        var dolla = "$"
        
    }
    else if (chosenYaxis === "pop_change") {
        var label = "Change in Population"
        var pct = "%"
        var dolla = ""
    
    } 
    

// Load data 
d3.csv("{{ url_for('csv_raw_data', filename='final_api_data.csv') }}").then(function(tractData){
    //console.log(data);
      // retrieve and parse data
        tractData.forEach(function(data) {
            data.tract = +data.tract;
            data.community_name = +data.community_name;
            data.poverty_rate = +data.poverty_rate;
            data.crimes_per_1000 = +data.crimes_per_1000;
            data.median_income = +data.median_income;
            data.assoc_degree_or_higher = +data.assoc_degree_or_higher;
            data.unemployment = +data.unemployment;
            data.home_value = +data.home_value;
            data.home_change = +data.home_change;
            data.pop_12_17 = +data.pop_12_17;
            data.pop_change = +data.pop_change;
        });
      console.log(tractData)
     

        var yLinearScale = d3.scaleLinear()
            .domain([0, d3.max(tractData, d => d.median_income)])
            .range([chartHeight, 0]);
        var xLinearScale = d3.scaleLinear()
            .domain([0, d3.max(tractData, d => d.tract)])
            .range([0, chartWidth]);
        
        // Create two new functions passing our scales in as arguments
        // These will be used to create the chart's axes
        var bottomAxis = d3.axisBottom(xLinearScale);
        var leftAxis = d3.axisLeft(yLinearScale).ticks(10);
        var xAxis = chartGroup.append("g")
            .classed("x-axis", true)
            .attr("transform", `translate(0, ${chartHeight})`)
            .call(bottomAxis);
        var yAxis = chartGroup.append("g")
            .classed("y-axis", true)
            .call(leftAxis);
    

    // @TODO update "d." values
        var barsGroup = chartGroup.selectAll(".bar")
            .data(tractData)
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("x", d => xLinearScale(d.tract))
            .attr("y", d => yLinearScale(d.median_income))
            .attr("width", xLinearScale.bandwidth())
            .attr("height", d => chartHeight - yLinearScale(d.median_income))
            .attr("fill", "green")
            .attr("opacity", ".6")
   


    var toolTip = d3.tip()
        .attr("class", "d3-tip")
        .direction("w")
        .html(function(d){
            return (`${d.tract}${d.community_name}<br>${label} ${dolla}${d[chosenYAxis]}${pct}<br>`)
        });
    
    barsGroup.call(toolTip);
// create event listeners to alter graph based on hovering
    barsGroup.on("mouseover", function(data) {
        ToolTip.show(data, this);
        d3.select(this)
            .attr("opacity", "1")
    });
    barsGroup.on("mouseout", function(data) {
        ToolTip.hide(data, this);
        d3.select(this)
            .attr("opacity", ".6")
    });
    return barsGroup;
})}