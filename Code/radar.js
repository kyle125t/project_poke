// function to populate all of the both of the dropdowns with the possible pokemon that can be selected
function populateDrowdown(){
  d3.csv("clean_data.csv", function(error,data){
    if(error) throw error;
    // go through the length of the document and add the name of each pokemon to the list
    for (var i=1; i<data.length; i++){
      d3.select("#poke1").selectAll("option")
      .data(data)
      .enter().append("option")
      .attr("value", function (d) { return d.Name; })
      .property("selected", function(d){ return d.Name })
      .text(function (d) { return d.Name; });

      // do the same thing with the second dropdown
      d3.select("#poke2").selectAll("option")
      .data(data)
      .enter().append("option")
      .attr("value", function (d) { return d.Name; })
      .property("selected", function(d){ return d.Name })
      .text(function (d) { return d.Name; });
    }
  });
}
function gatherData(){
   d3.csv("clean_data.csv", function(error,data){
    var name = d3.select("#poke1").property("value");
    var name2 = d3.select("#poke2").property("value");
    if(error) throw error;
    for (var i=1; i<data.length; i++){
      // check if the name is the name that is selected
      if(data[i].Name == name){
        // get all of the values for that pokemon
        var attack1 = data[i].Attack;
        var defense1 = data[i].Defense;
        var hp1 = data[i].HP;
        var spatk1 = data[i].SpAtk;
        var spdef1 = data[i].SpDef;
      }
      if(data[i].Name == name2){
        // get all of the values for that pokemon
        var attack2 = data[i].Attack;
        var defense2 = data[i].Defense;
        var hp2 = data[i].HP;
        var spatk2 = data[i].SpAtk;
        var spdef2 = data[i].SpDef;
      }
    }
    // add the data to a list of dictionaries 
    var data1 = [ 
      {x: "HP", value: hp1},
      {x: "Attack", value: attack1},
      {x: "Defense", value: defense1},
      {x: "Special Attack", value: spatk1},
      {x: "Special Defense", value: spdef1}
    ]; 
    var data2 = [
      {x: "HP", value: hp2},
      {x: "Attack", value: attack2},
      {x: "Defense", value: defense2},
      {x: "Special Attack", value: spatk2},
      {x: "Special Defense", value: spdef2}
    ];
    var dataSet = [data1, data2];
        // let data = gatherData();
      let dataSet1 = dataSet[0];
  
        let dataSet2 = dataSet[1];
      // create radar chart
      var chart = anychart.radar();
    
      // set chart title
      chart.title("Your Pokemon Matchup!");
    
      // set chart yScale settings
      chart.yScale()
      .minimum(0)
      .maximum(200)
      .ticks({'interval':20});
    
      // create second series
      var Pokemon1 = chart.area(data1);
      var Pokemon2 = chart.area(data2);

      // set container id for the chart
      chart.container('chart1');
      chart.yGrid().palette(["gray 0.15", "gray 0.05"]);
      // configure the stroke of the x-grid
      chart.xGrid().stroke({
        color: "black",
        thickness: 0.5,
        opacity: 0.5
      });

      // configure the stroke of the circular grid
      chart.yGrid().stroke({
        color: "black",
        thickness: 0.5,
        opacity: 0.5,
      });
      // chart.xGrid().palette(["blue 0.35", "gray 0.1"]);
      // chart.tooltip.bodyFormat("{%name}: {%x}");
      // chart.tooltip().titleFormat("{%seriesName}");
      chart.tooltip().format("{%value}");
    
      // create second series
      chart.area(data1, data2).markers(false).fill("#FFCB05", 0.5).stroke("#FFCB05");
      
      // initiate chart drawing
      chart.draw();
  })
}


// function to remove the chart that was there before
function removeChartElement(){
  // grab the chart element
  var elem = document.getElementById("chart1");
  // check if there is anything in the chart area
  if(elem.hasChildNodes()){
    // if so we will remove that
    elem.removeChild(elem.firstChild);
  }
  
}

// function buildPlot2() {
//   var name = d3.select("#poke2").property("value");
//   d3.csv("poke_data.csv", function(error,data){
//     if(error) throw error;
//     for (var i=1; i<data.length; i++){
//       if(data[i].Name == name){
//         var attack = data[i].Attack;
//         var defense = data[i].Defense;
//         var hp = data[i].HP
//         console.log(`attack: ${attack}, defense:${defense}, hp: ${hp}`);
//       }
//     }
//   })
// }
populateDrowdown();

// When the selection change we will first remove the chart is there is one

// after that we will build the new plot based on the pokemon that is selected



document.getElementById("poke1").addEventListener("change",  removeChartElement);
document.getElementById("poke1").addEventListener("change",  gatherData);
document.getElementById("poke2").addEventListener("change",  removeChartElement);
document.getElementById("poke2").addEventListener("change", gatherData);



