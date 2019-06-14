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
  function yScale(tractData, chosenYaxis) {
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

// function used for updating bar groups for x-axis with transition to new circles

function renderbarsGroup (barsGroup, newYScale, chosenYAxis) {
    barsGroup.transition()
    .duration("500")
    //there might be an error here
    .attr("height", d => chartHeight - newYScale(d[chosenYAxis]));

    return barsGroup;
}



// update Tool Tip

function updateToolTip(chosenXaxis, chosenYAxis) {
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
    
    // @TO DO insert API URL
//var dataURL = ""
// Load data from API
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
      // Configure a band scale for the horizontal axis with a padding of 0.1 (10%)
      // @TODO: update objects
     // var xBandScale = d3.scaleBand()
       // .domain(data.map(d => d.name))
        //.range([0, chartWidth])
        //.padding(0.1);
      // Create a linear scale for the vertical axis.
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
    //var textGroup = chartGroup2.selectAll("text")
      //.data(tractData)
      //.enter()
      //.append("text")
      //.attr("x", d => xLinearScale(d[chosenXAxis]))
       // .attr("y", d => yLinearScale(d[chosenYAxis])+3)
     
      // Create one SVG rectangle per piece of tvData
      // Use the linear and band scales to position each rectangle within the chart
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
    // create X axis
    //create group for Y axes
        var yLabelsGroup = chartGroup.append("g")
            .attr("transform", "rotate(-90)");
        // y axis event listenter
        var povertyLabel = yLabelsGroup.append("text")
            .attr("y", -40)
            // what does the height part do?
            .attr("x", 0 -(height / 2))
            // what does this do?
            .attr( "dy", "1em")
            .classed("axis-text", true)
            .attr("value", "poverty_rate")
            //what does this do? 
            .classed("active", true)
            .text("Poverty Rate (%)");
        var crimesLabel = yLabelsGroup.append("text")
            .attr("y", -40)
            // what does the height part do?
            .attr("x", 0 -(height / 2))
            // what does this do?
            .attr( "dy", "1em")
            .classed("axis-text", true)
            .attr("value", "crimes_per_1000")
            //what does this do? 
            .classed("active", true)
            .text("Crimes per 1000 people");
        var incomeLabel = yLabelsGroup.append("text")
            .attr("y", -40)
            // what does the height part do?
            .attr("x", 0 -(height / 2))
            // what does this do?
            .attr( "dy", "1em")
            .classed("axis-text", true)
            .attr("value", "median_income")
            //what does this do? 
            .classed("active", true)
            .text("Median Household Income");
        var unemploymentLabel = yLabelsGroup.append("text")
            .attr("y", -40)
            // what does the height part do?
            .attr("x", 0 -(height / 2))
            // what does this do?
            .attr( "dy", "1em")
            .classed("axis-text", true)
            .attr("value", "unemployment")
            //what does this do? 
            .classed("active", true)
            .text("Percent Unemployed");
        var educationLabel = yLabelsGroup.append("text")
            .attr("y", -40)
            // what does the height part do?
            .attr("x", 0 -(height / 2))
            // what does this do?
            .attr( "dy", "1em")
            .classed("axis-text", true)
            .attr("value", "assoc_degree_or_higher")
            //what does this do? 
            .classed("active", true)
            .text("Percent of People with an Associate's Degree or Higher");
        var homevalueLabel = yLabelsGroup.append("text")
            .attr("y", -40)
            // what does the height part do?
            .attr("x", 0 -(height / 2))
            // what does this do?
            .attr( "dy", "1em")
            .classed("axis-text", true)
            .attr("value", "home_value")
            //what does this do? 
            .classed("active", true)
            .text("Median Home Value");
        var homechangeLabel = yLabelsGroup.append("text")
            .attr("y", -40)
            // what does the height part do?
            .attr("x", 0 -(height / 2))
            // what does this do?
            .attr( "dy", "1em")
            .classed("axis-text", true)
            .attr("value", "home_change")
            //what does this do? 
            .classed("active", true)
            .text("% Change in Median Home Value from 2009-2013");
        var populationLabel = yLabelsGroup.append("text")
            .attr("y", -40)
            // what does the height part do?
            .attr("x", 0 -(height / 2))
            // what does this do?
            .attr( "dy", "1em")
            .classed("axis-text", true)
            .attr("value", "pop_12_17")
            //what does this do? 
            .classed("active", true)
            .text("Population");
        var populationchangeLabel = yLabelsGroup.append("text")
            .attr("y", -40)
            // what does the height part do?
            .attr("x", 0 -(height / 2))
            // what does this do?
            .attr( "dy", "1em")
            .classed("axis-text", true)
            .attr("value", "pop_change")
            //what does this do? 
            .classed("active", true)
            .text("% Change in Population from 2000 - 2017");
    // update ToolTip function above csv import
        var barsGroup = updateToolTip(chosenXAxis, chosenYAxis, barsGroup);
        
     // y axis labels event listener   
        yLabelsGroup.select("#graphChange")
            .on("click", function() {
                var value = d3.select(this).attr("value")
                if (value !== chosenYAxis) {
                    chosenYAxis = value;
                    yLinearScale = yScale(data, chosenYAxis);
                    yAxis = renderYAxes(yLinearScale, yAxis);
                    //textGroup = renderYText(textGroup, yLinearScale, chosenYAxis);
                    barsGroup - renderbarsGroup(barsGroup, yLinearScale, chosenYAxis);
                    barsGroup = updateToolTip(chosenYAxis, barsGroup);
                    if (chosenYAxis === "poverty_rate") {
                        povertyLabel;
                    }
                    else if (chosenYAxis === "crimes_per_1000") {
                        crimesLabel;
                    }
                    else if (chosenYAxis === "median_income") {
                        incomeLabel;
                    }
                    else if (chosenYAxis === "assoc_degree_or_higher") {
                        educationLabel;
                    }
                    else if (chosenYAxis === "unemployment") {
                        unemploymentLabel;
                    }
                    else if (chosenYAxis === "home_value") {
                        homevalueLabel;
                    }
                    else if (chosenYAxis === "home_change") {
                        homechangeLabel;
                    }
                    else if (chosenYAxis === "pop_12_17") {
                        populationLabel;
                    }
                    else if (chosenYAxis === "pop_change") {
                        populationchangeLabel;  
                    }
                }
            });
        });

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
}
