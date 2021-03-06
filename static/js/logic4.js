// Plotly.d3.csv("https://raw.githubusercontent.com/andrewswellie/ProjectTwo_Opportunity-Zones-Investment-App/master/csv_raw_data/final_api_data.csv"), function(data) {
//     function unpack(rows, key) {
//         return rows.map(function(row) {
//             return row[key];
//         });
//       }

function buildCharts(value) {
  
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

 
  layout1 = {
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

 
  layout2 = {
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

 
  layout3 = {
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
      tickprefix: '',
      ticksuffix: '%',
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

 
  layout4 = {
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
      tickprefix: '', 
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

 
  layout5 = {
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
      tickprefix: '', 
      ticksuffix: '%',
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
 
 
  layout6 = {
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
      tickprefix: '',
      ticksuffix: '%',
      title: {
        font: {family: 'Roboto'},
        text: 'Poverty Rate (%)'
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
  
  
   layout7 = {
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
       tickprefix: '',
       ticksuffix: '%',
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
  
  
   layout8 = {
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
       tickprefix: '',
       ticksuffix: '',
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
  
  
   layout9 = {
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
       tickprefix: '',
       ticksuffix: '%',
       title: {
         font: {family: 'Roboto'},
         text: "Percent with Associate's Degree or Higher"
       },
       type: 'linear'
     }
   };

     if (value === "income") {
        data = [trace1];
        layout = layout1;
    }
    else if (value === "median_home") {
        data = [trace2];
        layout = layout2;
    }
    else if (value === "home_change") {
        data = [trace3];
        layout = layout3;
    }
    else if (value === "population") {
        data = [trace4];
        layout = layout4;
    }
    else if (value === "pop_change") {
        data = [trace5];
        layout = layout5;
    }
    else if (value === "poverty") {
        data = [trace6];
        layout = layout6;
    }
    else if (value === "unemployment") {
        data = [trace7];
        layout = layout7;
    }
    else if (value === "crime") {
        data = [trace8];
        layout = layout8;
    }
    else if (value === "education") {
        data = [trace9];
        layout = layout9;  
    }
    else {
        data = [trace9];
        layout = layout9;
    }
    
    

    Plotly.newPlot('graph', {
        data: data,
        layout: layout
})
   })
}

trace1 = {
    x: ['843600', '843300', '843000', '842900', '842100', '841800', '841500', '841400', '841000', '838800', '838700', '838600', '837000', '836900', '836100', '836000', '835900', '835500', '835000', '834900', '834800', '834700', '834600', '834500', '834400', '834300', '834200', '834000', '750600', '711400', '711000', '710500', '710300', '710200', '710100', '691500', '691400', '691300', '691100', '691000', '690300', '681300', '681200', '681000', '680900', '680600', '680500', '671800', '671600', '671500', '671400', '671200', '671100', '670800', '670700', '670600', '670500', '670400', '670200', '670100', '660900', '660800', '660700', '660600', '660301', '611900', '611800', '611700', '611600', '611200', '611100', '611000', '540101', '530502', '530200', '520200', '500300', '500200', '500100', '491400', '491300', '490901', '470100', '460500', '460400', '460302', '460301', '460200', '460100', '440201', '431302', '431301', '430900', '430600', '430400', '430300', '430200', '430101', '420800', '420700', '420600', '420500', '400800', '400500', '400400', '400300', '390300', '381400', '380500', '380100', '351500', '351400', '351100', '350100', '340600', '301200', '292500', '292200', '291200', '290900', '280900', '280400', '271800', '271300', '271200', '270500', '260600', '260200', '251900', '251800', '251500', '251300', '231500', '231200', '230600'], 
    y: ['35714', '47829', '18036', '21325', '33945', '36250', '24858', '29338', '63125', '19155', '22742', '14850', '29911', '26458', '25462', '60368', '18856', '20517', '26926', '18401', '20559', '21802', '21196', '31483', '38233', '34140', '33835', '34864', '34470', '37434', '33664', '30793', '33281', '26934', '15524', '20027', '28813', '40658', '19125', '49297', '19904', '25735', '23302', '15201', '15612', '24464', '23354', '35962', '23203', '28403', '24306', '20909', '30577', '22083', '36058', '14848', '26087', '26289', '22625', '35000', '29125', '37690', '27344', '27426', '22057', '25231', '31138', '25074', '36014', '27697', '24972', '20813', '12660', '41696', '29539', '36228', '41587', '34038', '41570', '28774', '25912', '39750', '24821', '37168', '39151', '23345', '36182', '27925', '31094', '32143', '19756', '20625', '34286', '23300', '15469', '15902', '22419', '32292', '35476', '19042', '19801', '25781', '20959', '24907', '32310', '29417', '21769', '38167', '19358', '19328', '23700', '13149', '10825', '43548', '11622', '26076', '40324', '31902', '24650', '24071', '19485', '35275', '16477', '24878', '26098', '16103', '20882', '33750', '20092', '23295', '21567', '29255', '28013', '29120', '34716'], 
    hoverinfo: 'x+y', 
    marker: {opacity: 0.89}, 
    opacity: 1, 
    orientation: 'v', 
    selectedpoints: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134], 
    type: 'bar', 
    xsrc: 'andrewswellie:0:7c7a4a', 
    ysrc: 'andrewswellie:0:6aa06d'
  };
  layout1 = {
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
  Plotly.plot('graph', {
    data: [trace1],
    layout: layout1
  });