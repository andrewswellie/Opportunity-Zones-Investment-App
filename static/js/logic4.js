// Plotly.d3.csv("https://raw.githubusercontent.com/andrewswellie/ProjectTwo_Opportunity-Zones-Investment-App/master/csv_raw_data/final_api_data.csv"), function(data) {
//     function unpack(rows, key) {
//         return rows.map(function(row) {
//             return row[key];
//         });
//       }

buildCharts()
   

     if (value === "income") {
        trace1;
    }
    else if (value === "median_home") {
        trace2;
    }
    else if (value === "home_change") {
        trace3;
    }
    else if (value === "population") {
        trace4;
    }
    else if (value === "pop_change") {
        trace5;
    }
    else if (value === "poverty") {
        trace6;
    }
    else if (value === "unemployment") {
        trace7;
    }
    else if (value === "crime") {
        trace8;
    }
    else if (value === "education") {
        trace9;  
    }
    else trace1



d3.csv("https://raw.githubusercontent.com/andrewswellie/ProjectTwo_Opportunity-Zones-Investment-App/master/csv_raw_data/final_api_data.csv", function(data) {
    // Once we get a response, send the data.features object to the createFeatures function
    console.log(data);

    var tract = data.map(row => row.tract)
    var income = data.map(row => row.median_income)
    var median_home = data.map(row => row.home_value)
    var home_change = data.map(row => row.home_change)
    var population = data.map(row => row.pop_12_17)
    var pop_change = data.map(row => row.pop_change)
    var poverty = data.map(row => row.poverty_rate)
    var unemployment = data.map(row => row.unemployment)
    var crime = data.map(row => row.crimes_per_1000)
    var education = data.map(row => row.assoc_degree_or_higher)

    console.log(tract, income, median_home, home_change, population, pop_change, poverty, unemployment, crime, education)

    
data = buildCharts();

trace1 = {
    x: tract,
    y: income,
    hoverinfo: 'x+y', 
    marker: {opacity: 0.89}, 
    opacity: 1, 
    orientation: 'v', 
    selectedpoints: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134], 
    type: 'bar', 
    xsrc: 'andrewswellie:0:7c7a4a', 
    ysrc: 'andrewswellie:0:6aa06d'
  };

 
  layout = {
    autosize: false, 
    bargap: 0.15000000000000002, 
    barmode: 'group', 
    barnorm: '', 
    dragmode: 'select', 
    font: {size: 14}, 
    height: 710, 
    hoverlabel: {font: {
        family: 'Roboto', 
        size: 18
      }}, 
    margin: {
      r: 13, 
      t: 40, 
      b: 84, 
      l: 80, 
      pad: 0
    }, 
    paper_bgcolor: 'rgb(245, 242, 242)', 
    plot_bgcolor: 'rgb(235, 226, 226)', 
    showlegend: false, 
    title: {
      x: 0.5, 
      font: {
        size: 22, 
        color: 'rgb(0, 0, 0)', 
        family: 'Roboto'
      }, 
      text: 'Median Household Income by Census Tract'
    }, 
    width: 1170, 

    xaxis: {
      automargin: true, 
      autorange: true, 
      dtick: 2, 
      fixedrange: true, 
      gridwidth: -1, 
      nticks: 0, 
      range: [-0.5, 134.5], 
      rangeslider: {
        autorange: true, 
        range: [-0.5, 134.5], 
        visible: false
      }, 
      showgrid: true, 
      showspikes: true, 
      side: 'bottom', 
      spikethickness: 1, 
      tickangle: 'auto', 
      tickfont: {
        family: 'Roboto', 
        size: 11
      }, 
      ticklen: 4, 
      tickmode: 'linear', 
      ticks: 'outside', 
      tickwidth: 1, 
      title: {
        font: {
          size: 17, 
          family: 'Roboto'
        }, 
        text: 'Census Tract'
      }, 
      type: 'category'
    }, 

    yaxis: {
      autorange: true, 
      dtick: 28, 
      gridwidth: -1, 
      nticks: 0, 
      range: [0, 66447.36842105263], 
      separatethousands: false, 
      showgrid: true, 
      showspikes: true, 
      spikethickness: 1, 
      tick0: 9, 
      tickfont: {
        family: 'Roboto', 
        size: 11
      }, 
      tickmode: 'auto', 
      tickprefix: '$', 
      title: {
        font: {family: 'Roboto'}, 
        text: 'Median Household Income'
      }, 
      type: 'linear'
    }
  };
  trace2 = {
    x: tract,
    y: median_home,
    hoverinfo: 'x+y', 
    marker: {opacity: 0.89}, 
    opacity: 1, 
    orientation: 'v', 
    selectedpoints: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134], 
    type: 'bar', 
    xsrc: 'andrewswellie:0:7c7a4a', 
    ysrc: 'andrewswellie:0:6aa06d'
  };

 
  layout = {
    autosize: false, 
    bargap: 0.15000000000000002, 
    barmode: 'group', 
    barnorm: '', 
    dragmode: 'select', 
    font: {size: 14}, 
    height: 710, 
    hoverlabel: {font: {
        family: 'Roboto', 
        size: 18
      }}, 
    margin: {
      r: 13, 
      t: 40, 
      b: 84, 
      l: 80, 
      pad: 0
    }, 
    paper_bgcolor: 'rgb(245, 242, 242)', 
    plot_bgcolor: 'rgb(235, 226, 226)', 
    showlegend: false, 
    title: {
      x: 0.5, 
      font: {
        size: 22, 
        color: 'rgb(0, 0, 0)', 
        family: 'Roboto'
      }, 
      text: 'Median Home Value by Census Tract'
    }, 
    width: 1170, 

    xaxis: {
      automargin: true, 
      autorange: true, 
      dtick: 2, 
      fixedrange: true, 
      gridwidth: -1, 
      nticks: 0, 
      range: [-0.5, 134.5], 
      rangeslider: {
        autorange: true, 
        range: [-0.5, 134.5], 
        visible: false
      }, 
      showgrid: true, 
      showspikes: true, 
      side: 'bottom', 
      spikethickness: 1, 
      tickangle: 'auto', 
      tickfont: {
        family: 'Roboto', 
        size: 11
      }, 
      ticklen: 4, 
      tickmode: 'linear', 
      ticks: 'outside', 
      tickwidth: 1, 
      title: {
        font: {
          size: 17, 
          family: 'Roboto'
        }, 
        text: 'Census Tract'
      }, 
      type: 'category'
    }, 

    yaxis: {
      autorange: true, 
      dtick: 28, 
      gridwidth: -1, 
      nticks: 0, 
      range: [0, 350,000], 
      separatethousands: false, 
      showgrid: true, 
      showspikes: true, 
      spikethickness: 1, 
      tick0: 9, 
      tickfont: {
        family: 'Roboto', 
        size: 11
      }, 
      tickmode: 'auto', 
      tickprefix: '$', 
      title: {
        font: {family: 'Roboto'}, 
        text: 'Median Home Value'
      }, 
      type: 'linear'
    }
  };
  trace3 = {
    x: tract,
    y: home_change,
    hoverinfo: 'x+y', 
    marker: {opacity: 0.89}, 
    opacity: 1, 
    orientation: 'v', 
    selectedpoints: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134], 
    type: 'bar', 
    xsrc: 'andrewswellie:0:7c7a4a', 
    ysrc: 'andrewswellie:0:6aa06d'
  };

 
  layout = {
    autosize: false, 
    bargap: 0.15000000000000002, 
    barmode: 'group', 
    barnorm: '', 
    dragmode: 'select', 
    font: {size: 14}, 
    height: 710, 
    hoverlabel: {font: {
        family: 'Roboto', 
        size: 18
      }}, 
    margin: {
      r: 13, 
      t: 40, 
      b: 84, 
      l: 80, 
      pad: 0
    }, 
    paper_bgcolor: 'rgb(245, 242, 242)', 
    plot_bgcolor: 'rgb(235, 226, 226)', 
    showlegend: false, 
    title: {
      x: 0.5, 
      font: {
        size: 22, 
        color: 'rgb(0, 0, 0)', 
        family: 'Roboto'
      }, 
      text: 'Change in Home Value since 2010 by Census Tract'
    }, 
    width: 1170, 

    xaxis: {
      automargin: true, 
      autorange: true, 
      dtick: 2, 
      fixedrange: true, 
      gridwidth: -1, 
      nticks: 0, 
      range: [-0.5, 134.5], 
      rangeslider: {
        autorange: true, 
        range: [-0.5, 134.5], 
        visible: false
      }, 
      showgrid: true, 
      showspikes: true, 
      side: 'bottom', 
      spikethickness: 1, 
      tickangle: 'auto', 
      tickfont: {
        family: 'Roboto', 
        size: 11
      }, 
      ticklen: 4, 
      tickmode: 'linear', 
      ticks: 'outside', 
      tickwidth: 1, 
      title: {
        font: {
          size: 17, 
          family: 'Roboto'
        }, 
        text: 'Census Tract'
      }, 
      type: 'category'
    }, 

    yaxis: {
      autorange: true, 
      dtick: 28, 
      gridwidth: -1, 
      nticks: 0, 
      range: [0, 100], 
      separatethousands: false, 
      showgrid: true, 
      showspikes: true, 
      spikethickness: 1, 
      tick0: 9, 
      tickfont: {
        family: 'Roboto', 
        size: 11
      }, 
      tickmode: 'auto', 
      tickprefix: '$', 
      title: {
        font: {family: 'Roboto'}, 
        text: 'Change in Home Value since 2010'
      }, 
      type: 'linear'
    }
  };
  trace4 = {
    x: tract,
    y: population,
    hoverinfo: 'x+y', 
    marker: {opacity: 0.89}, 
    opacity: 1, 
    orientation: 'v', 
    selectedpoints: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134], 
    type: 'bar', 
    xsrc: 'andrewswellie:0:7c7a4a', 
    ysrc: 'andrewswellie:0:6aa06d'
  };

 
  layout = {
    autosize: false, 
    bargap: 0.15000000000000002, 
    barmode: 'group', 
    barnorm: '', 
    dragmode: 'select', 
    font: {size: 14}, 
    height: 710, 
    hoverlabel: {font: {
        family: 'Roboto', 
        size: 18
      }}, 
    margin: {
      r: 13, 
      t: 40, 
      b: 84, 
      l: 80, 
      pad: 0
    }, 
    paper_bgcolor: 'rgb(245, 242, 242)', 
    plot_bgcolor: 'rgb(235, 226, 226)', 
    showlegend: false, 
    title: {
      x: 0.5, 
      font: {
        size: 22, 
        color: 'rgb(0, 0, 0)', 
        family: 'Roboto'
      }, 
      text: 'Population by Census Tract'
    }, 
    width: 1170, 

    xaxis: {
      automargin: true, 
      autorange: true, 
      dtick: 2, 
      fixedrange: true, 
      gridwidth: -1, 
      nticks: 0, 
      range: [-0.5, 134.5], 
      rangeslider: {
        autorange: true, 
        range: [-0.5, 134.5], 
        visible: false
      }, 
      showgrid: true, 
      showspikes: true, 
      side: 'bottom', 
      spikethickness: 1, 
      tickangle: 'auto', 
      tickfont: {
        family: 'Roboto', 
        size: 11
      }, 
      ticklen: 4, 
      tickmode: 'linear', 
      ticks: 'outside', 
      tickwidth: 1, 
      title: {
        font: {
          size: 17, 
          family: 'Roboto'
        }, 
        text: 'Census Tract'
      }, 
      type: 'category'
    }, 

    yaxis: {
      autorange: true, 
      dtick: 28, 
      gridwidth: -1, 
      nticks: 0, 
      range: [250, 12000], 
      separatethousands: false, 
      showgrid: true, 
      showspikes: true, 
      spikethickness: 1, 
      tick0: 9, 
      tickfont: {
        family: 'Roboto', 
        size: 11
      }, 
      tickmode: 'auto', 
      tickprefix: '$', 
      title: {
        font: {family: 'Roboto'}, 
        text: 'Population'
      }, 
      type: 'linear'
    }
  };
  trace5 = {
    x: tract,
    y: pop_change,
    hoverinfo: 'x+y', 
    marker: {opacity: 0.89}, 
    opacity: 1, 
    orientation: 'v', 
    selectedpoints: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134], 
    type: 'bar', 
    xsrc: 'andrewswellie:0:7c7a4a', 
    ysrc: 'andrewswellie:0:6aa06d'
  };

 
  layout = {
    autosize: false, 
    bargap: 0.15000000000000002, 
    barmode: 'group', 
    barnorm: '', 
    dragmode: 'select', 
    font: {size: 14}, 
    height: 710, 
    hoverlabel: {font: {
        family: 'Roboto', 
        size: 18
      }}, 
    margin: {
      r: 13, 
      t: 40, 
      b: 84, 
      l: 80, 
      pad: 0
    }, 
    paper_bgcolor: 'rgb(245, 242, 242)', 
    plot_bgcolor: 'rgb(235, 226, 226)', 
    showlegend: false, 
    title: {
      x: 0.5, 
      font: {
        size: 22, 
        color: 'rgb(0, 0, 0)', 
        family: 'Roboto'
      }, 
      text: 'Population Change since 2000 by Census Tract'
    }, 
    width: 1170, 

    xaxis: {
      automargin: true, 
      autorange: true, 
      dtick: 2, 
      fixedrange: true, 
      gridwidth: -1, 
      nticks: 0, 
      range: [-0.5, 134.5], 
      rangeslider: {
        autorange: true, 
        range: [-0.5, 134.5], 
        visible: false
      }, 
      showgrid: true, 
      showspikes: true, 
      side: 'bottom', 
      spikethickness: 1, 
      tickangle: 'auto', 
      tickfont: {
        family: 'Roboto', 
        size: 11
      }, 
      ticklen: 4, 
      tickmode: 'linear', 
      ticks: 'outside', 
      tickwidth: 1, 
      title: {
        font: {
          size: 17, 
          family: 'Roboto'
        }, 
        text: 'Census Tract'
      }, 
      type: 'category'
    }, 

    yaxis: {
      autorange: true, 
      dtick: 28, 
      gridwidth: -1, 
      nticks: 0, 
      range: [0, 100], 
      separatethousands: false, 
      showgrid: true, 
      showspikes: true, 
      spikethickness: 1, 
      tick0: 9, 
      tickfont: {
        family: 'Roboto', 
        size: 11
      }, 
      tickmode: 'auto', 
      tickprefix: '$', 
      title: {
        font: {family: 'Roboto'}, 
        text: 'Population Change since 2000'
      }, 
      type: 'linear'
    }
  };
  trace6 = {
    x: tract,
    y: poverty,
    hoverinfo: 'x+y',
    marker: {opacity: 0.89},
    opacity: 1,
    orientation: 'v',
    selectedpoints: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134],
    type: 'bar',
    xsrc: 'andrewswellie:0:7c7a4a',
    ysrc: 'andrewswellie:0:6aa06d'
  };
 
 
  layout = {
    autosize: false,
    bargap: 0.15000000000000002,
    barmode: 'group',
    barnorm: '',
    dragmode: 'select',
    font: {size: 14},
    height: 710,
    hoverlabel: {font: {
        family: 'Roboto',
        size: 18
      }},
    margin: {
      r: 13,
      t: 40,
      b: 84,
      l: 80,
      pad: 0
    },
    paper_bgcolor: 'rgb(245, 242, 242)',
    plot_bgcolor: 'rgb(235, 226, 226)',
    showlegend: false,
    title: {
      x: 0.5,
      font: {
        size: 22,
        color: 'rgb(0, 0, 0)',
        family: 'Roboto'
      },
      text: 'Percent in Poverty by Census Tract'
    },
    width: 1170,
 
    xaxis: {
      automargin: true,
      autorange: true,
      dtick: 2,
      fixedrange: true,
      gridwidth: -1,
      nticks: 0,
      range: [-0.5, 134.5],
      rangeslider: {
        autorange: true,
        range: [-0.5, 134.5],
        visible: false
      },
      showgrid: true,
      showspikes: true,
      side: 'bottom',
      spikethickness: 1,
      tickangle: 'auto',
      tickfont: {
        family: 'Roboto',
        size: 11
      },
      ticklen: 4,
      tickmode: 'linear',
      ticks: 'outside',
      tickwidth: 1,
      title: {
        font: {
          size: 17,
          family: 'Roboto'
        },
        text: 'Census Tract'
      },
      type: 'category'
    },
 
    yaxis: {
      autorange: true,
      dtick: 28,
      gridwidth: -1,
      nticks: 0,
      range: [0, 100],
      separatethousands: false,
      showgrid: true,
      showspikes: true,
      spikethickness: 1,
      tick0: 9,
      tickfont: {
        family: 'Roboto',
        size: 11
      },
      tickmode: 'auto',
      tickprefix: '$',
      title: {
        font: {family: 'Roboto'},
        text: 'Median Household Income ($)'
      },
      type: 'linear'
    }
  };
 
  trace7 = {
     x: tract,
     y: unemployment,
     hoverinfo: 'x+y',
     marker: {opacity: 0.89},
     opacity: 1,
     orientation: 'v',
     selectedpoints: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134],
     type: 'bar',
     xsrc: 'andrewswellie:0:7c7a4a',
     ysrc: 'andrewswellie:0:6aa06d'
   };
  
  
   layout = {
     autosize: false,
     bargap: 0.15000000000000002,
     barmode: 'group',
     barnorm: '',
     dragmode: 'select',
     font: {size: 14},
     height: 710,
     hoverlabel: {font: {
         family: 'Roboto',
         size: 18
       }},
     margin: {
       r: 13,
       t: 40,
       b: 84,
       l: 80,
       pad: 0
     },
     paper_bgcolor: 'rgb(245, 242, 242)',
     plot_bgcolor: 'rgb(235, 226, 226)',
     showlegend: false,
     title: {
       x: 0.5,
       font: {
         size: 22,
         color: 'rgb(0, 0, 0)',
         family: 'Roboto'
       },
       text: 'Unemployment Rate by Census Tract'
     },
     width: 1170,
  
     xaxis: {
       automargin: true,
       autorange: true,
       dtick: 2,
       fixedrange: true,
       gridwidth: -1,
       nticks: 0,
       range: [-0.5, 134.5],
       rangeslider: {
         autorange: true,
         range: [-0.5, 134.5],
         visible: false
       },
       showgrid: true,
       showspikes: true,
       side: 'bottom',
       spikethickness: 1,
       tickangle: 'auto',
       tickfont: {
         family: 'Roboto',
         size: 11
       },
       ticklen: 4,
       tickmode: 'linear',
       ticks: 'outside',
       tickwidth: 1,
       title: {
         font: {
           size: 17,
           family: 'Roboto'
         },
         text: 'Census Tract'
       },
       type: 'category'
     },
  
     yaxis: {
       autorange: true,
       dtick: 28,
       gridwidth: -1,
       nticks: 0,
       range: [0, 100],
       separatethousands: false,
       showgrid: true,
       showspikes: true,
       spikethickness: 1,
       tick0: 9,
       tickfont: {
         family: 'Roboto',
         size: 11
       },
       tickmode: 'auto',
       tickprefix: '$',
       title: {
         font: {family: 'Roboto'},
         text: 'Unemployment Rate (%)'
       },
       type: 'linear'
     }
   };
 
 
   trace8 = {
     x: tract,
     y: crime,
     hoverinfo: 'x+y',
     marker: {opacity: 0.89},
     opacity: 1,
     orientation: 'v',
     selectedpoints: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134],
     type: 'bar',
     xsrc: 'andrewswellie:0:7c7a4a',
     ysrc: 'andrewswellie:0:6aa06d'
   };
  
  
   layout = {
     autosize: false,
     bargap: 0.15000000000000002,
     barmode: 'group',
     barnorm: '',
     dragmode: 'select',
     font: {size: 14},
     height: 710,
     hoverlabel: {font: {
         family: 'Roboto',
         size: 18
       }},
     margin: {
       r: 13,
       t: 40,
       b: 84,
       l: 80,
       pad: 0
     },
     paper_bgcolor: 'rgb(245, 242, 242)',
     plot_bgcolor: 'rgb(235, 226, 226)',
     showlegend: false,
     title: {
       x: 0.5,
       font: {
         size: 22,
         color: 'rgb(0, 0, 0)',
         family: 'Roboto'
       },
       text: 'Crimes per 1000 people by Census Tract'
     },
     width: 1170,
  
     xaxis: {
       automargin: true,
       autorange: true,
       dtick: 2,
       fixedrange: true,
       gridwidth: -1,
       nticks: 0,
       range: [-0.5, 134.5],
       rangeslider: {
         autorange: true,
         range: [-0.5, 134.5],
         visible: false
       },
       showgrid: true,
       showspikes: true,
       side: 'bottom',
       spikethickness: 1,
       tickangle: 'auto',
       tickfont: {
         family: 'Roboto',
         size: 11
       },
       ticklen: 4,
       tickmode: 'linear',
       ticks: 'outside',
       tickwidth: 1,
       title: {
         font: {
           size: 17,
           family: 'Roboto'
         },
         text: 'Census Tract'
       },
       type: 'category'
     },
  
     yaxis: {
       autorange: true,
       dtick: 28,
       gridwidth: -1,
       nticks: 0,
       range: [0, 650],
       separatethousands: false,
       showgrid: true,
       showspikes: true,
       spikethickness: 1,
       tick0: 9,
       tickfont: {
         family: 'Roboto',
         size: 11
       },
       tickmode: 'auto',
       tickprefix: '$',
       title: {
         font: {family: 'Roboto'},
         text: 'Crimes per 1000 people'
       },
       type: 'linear'
     }
   };
 
   trace9 = {
     x: tract,
     y: education,
     hoverinfo: 'x+y',
     marker: {opacity: 0.89},
     opacity: 1,
     orientation: 'v',
     selectedpoints: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134],
     type: 'bar',
     xsrc: 'andrewswellie:0:7c7a4a',
     ysrc: 'andrewswellie:0:6aa06d'
   };
  
  
   layout = {
     autosize: false,
     bargap: 0.15000000000000002,
     barmode: 'group',
     barnorm: '',
     dragmode: 'select',
     font: {size: 14},
     height: 710,
     hoverlabel: {font: {
         family: 'Roboto',
         size: 18
       }},
     margin: {
       r: 13,
       t: 40,
       b: 84,
       l: 80,
       pad: 0
     },
     paper_bgcolor: 'rgb(245, 242, 242)',
     plot_bgcolor: 'rgb(235, 226, 226)',
     showlegend: false,
     title: {
       x: 0.5,
       font: {
         size: 22,
         color: 'rgb(0, 0, 0)',
         family: 'Roboto'
       },
       text: "Percent with Associate's Degree or Higher by Census Tract"
     },
     width: 1170,
  
     xaxis: {
       automargin: true,
       autorange: true,
       dtick: 2,
       fixedrange: true,
       gridwidth: -1,
       nticks: 0,
       range: [-0.5, 134.5],
       rangeslider: {
         autorange: true,
         range: [-0.5, 134.5],
         visible: false
       },
       showgrid: true,
       showspikes: true,
       side: 'bottom',
       spikethickness: 1,
       tickangle: 'auto',
       tickfont: {
         family: 'Roboto',
         size: 11
       },
       ticklen: 4,
       tickmode: 'linear',
       ticks: 'outside',
       tickwidth: 1,
       title: {
         font: {
           size: 17,
           family: 'Roboto'
         },
         text: 'Census Tract'
       },
       type: 'category'
     },
  
     yaxis: {
       autorange: true,
       dtick: 28,
       gridwidth: -1,
       nticks: 0,
       range: [0, 100],
       separatethousands: false,
       showgrid: true,
       showspikes: true,
       spikethickness: 1,
       tick0: 9,
       tickfont: {
         family: 'Roboto',
         size: 11
       },
       tickmode: 'auto',
       tickprefix: '$',
       title: {
         font: {family: 'Roboto'},
         text: "Percent with Associate's Degree or Higher"
       },
       type: 'linear'
     }
   };
  Plotly.plot('graph', {
    data: data,
    layout: layout
  });
})
