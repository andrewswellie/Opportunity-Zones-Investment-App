// Plotly.d3.csv("https://raw.githubusercontent.com/andrewswellie/ProjectTwo_Opportunity-Zones-Investment-App/master/csv_raw_data/final_api_data.csv"), function(err, rows) {
//     function unpack(rows, key) {
//         return rows.map(function(row) {
//             return row[key];
//         });
//       }

    var Trace1 = {
        type: "bar",
        name: "Holy Shit This Better Work",
        x: [843600,843300,843000,842900,842100,841800,841500,841400,841000,838800,838700,838600,837000,836900,836100,836000,835900,835500,835000,834900,834800,834700,834600,834500,834400,834300,834200,834000,750600,711400,711000,710500,710300,710200,710100,691500,691400,691300,691100,691000,690300,681300,681200,681000,680900,680600,680500,671800,671600,671500,671400,671200,671100,670800,670700,670600,670500,670400,670200,670100,660900,660800,660700,660600,660301,611900,611800,611700,611600,611200,611100,611000,540101,530502,530200,520200,500300,500200,500100,491400,491300,490901,470100,460500,460400,460302,460301,460200,460100,440201,431302,431301,430900,430600,430400,430300,430200,430101,420800,420700,420600,420500,400800,400500,400400,400300,390300,381400,380500,380100,351500,351400,351100,350100,340600,301200,292500,292200,291200,290900,280900,280400,271800,271300,271200,270500,260600,260200,251900,251800,251500,251300,231500,231200,230600],
        y: [35714,47829,18036,21325,33945,36250,24858,29338,63125,19155,22742,14850,29911,26458,25462,60368,18856,20517,26926,18401,20559,21802,21196,31483,38233,34140,33835,34864,34470,37434,33664,30793,33281,26934,15524,20027,28813,40658,19125,49297,19904,25735,23302,15201,15612,24464,23354,35962,23203,28403,24306,20909,30577,22083,36058,14848,26087,26289,22625,35000,29125,37690,27344,27426,22057,25231,31138,25074,36014,27697,24972,20813,12660,41696,29539,36228,41587,34038,41570,28774,25912,39750,24821,37168,39151,23345,36182,27925,31094,32143,19756,20625,34286,23300,15469,15902,22419,32292,35476,19042,19801,25781,20959,24907,32310,29417,21769,38167,19358,19328,23700,13149,10825,43548,11622,26076,40324,31902,24650,24071,19485,35275,16477,24878,26098,16103,20882,33750,20092,23295,21567,29255,28013,29120,34716],
    }

    var data = [Trace1];

    var layout = {
        title: "Fuck this graph"
    };

    Plotly.newPlot("graph", data, layout);
