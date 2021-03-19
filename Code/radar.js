function populateDrowdown(){
  d3.csv("poke_data.csv", function(error,data){
    if(error) throw error;
    for (var i=1; i<data.length; i++){
      d3.select("#poke1").selectAll("option")
      .data(data)
      .enter().append("option")
      .attr("value", function (d) { return d.Name; })
      .text(function (d) { return d.Name; });
    }
  })
}

function buildPlot() {
  var name = d3.select("#poke1").property("value");
  d3.csv("poke_data.csv", function(error,data){
    if(error) throw error;
    for (var i=1; i<data.length; i++){
      if(data[i].Name == name){
        var attack = data[i].Attack;
        var defense = data[i].Defense;
        var hp = data[i].HP
        console.log(`attack: ${attack}, defense:${defense}, hp: ${hp}`);
      }
    }
  })
}
populateDrowdown();
buildPlot();
document.getElementById("poke1").addEventListener("change", buildPlot);

      // // Grab values from the response json object to build the plots
      // var name = data.Name;
      // var attack = data.Attack;
      // var defense = data.Defense;
      // var special_attack = data.stats[3].base_stat;
      // var special_defense = data.stats[4].base_stat;
      // var speed = data.stats[5].base_stat;

      // console.log(`Name: ${name}, attack: ${attack}, defense:${defense}, special_attack:${special_attack}`);
  
    


// ​
// //iterate through json result from API to capture the KPIs listed below per pokemon selected 
// // data1.forEach((poke) => { }
// ​
// var data1 = [
//     {x: "HP", value: 39},
//     {x: "Attack", value: 52},
//     {x: "Defense", value: 43},
//     {x: "Special Attack", value: 60},
//     {x: "Special Defense", value: 50},
//     {x: "Speed", value: 65},
// ];
// ​
// var data2 = [
//     {x: "HP", value: 89},
//     {x: "Attack", value: 42},
//     {x: "Defense", value: 53},
//     {x: "Special Attack", value: 40},
//     {x: "Special Defense", value: 70},
//     {x: "Speed", value: 35},
// ];
// ​
// ​
// // create radar chart
// var pokechart = anychart.radar();
// ​
// // set chart title
// chart.title("Stats");
// ​
// // set chart yScale settings
// chart.yScale()
//   .minimum(0)
//   .maximum(100)
//   .ticks({'interval':20});
// ​
// // create first series 
// chart.line(data1)
// // create second series
// chart.line(data2)
// // create third series
// chart.line(data3)
// ​
// ​
// // set the start angle
// radar2.startAngle(90);
// ​
// //should set color to be based on pokemon type 
// // configure the appearance of the y-axis
// chart.yAxis().stroke({
//     color: "gray",
//     thickness: 2,
//     dash: "10 5"
//   });  
  
//   // configure the appearance of the X-axis
//   chart.xAxis().stroke({
//     color: "#00cc99",
//     thickness: 4,
//   });    
// ​
// // set container id for the chart
// chart.container('container');
// // initiate chart drawing
// chart.draw();
// ​
// ​
// // color the even-odd cells of the x-grid
// radar1.xGrid().palette(["gray 0.05", "gray 0.1"]);
// ​
// // color the even-odd cells of the y-grid 
// radar2.yGrid().palette(["gray 0.05", "gray 0.1"]);