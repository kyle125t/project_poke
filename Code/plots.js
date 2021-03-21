//Create a function to build the bubble

function charts(gen){
    //Get the data from the csv
    d3.csv("clean_data.csv").then(function(data){
        //Create arrays for the different types
        var normal = [];
        var water = [];
        var elec = [];
        var fight = [];
        var ground = [];
        var psy = [];
        var rock = [];
        var dark = [];
        var steel = [];
        var fire = [];
        var grass = [];
        var ice = [];
        var poison = [];
        var fly = [];
        var bug = [];
        var ghost = [];
        var dragon = [];
        var fairy = [];

        //Loop through the array and append the pokemon to the type list
        for (i = 0; i< data.length; i++){
            //Checks the generation for each pokemon
            if (data[i].Generation == gen){
                //Long conditional to check each type and add to the list for the first type
                if (data[i].Type1 == "Normal" || data[i].Type2 == "Normal"){
                    normal.push(data[i]);
                } else if (data[i].Type1 == "Water"){
                    water.push(data[i]);
                } else if (data[i].Type1 == "Electric"){
                    elec.push(data[i]);
                } else if (data[i].Type1 == "Fighting"){
                    fight.push(data[i]);
                } else if (data[i].Type1 == "Ground"){
                    ground.push(data[i]);
                } else if (data[i].Type1 == "Psychic"){
                    psy.push(data[i]);
                } else if (data[i].Type1 == "Rock"){
                    rock.push(data[i]);
                } else if (data[i].Type1 == "Dark"){
                    dark.push(data[i]);
                } else if (data[i].Type1 == "Steel"){
                    steel.push(data[i]);
                } else if (data[i].Type1 == "Fire"){
                    fire.push(data[i]);
                } else if (data[i].Type1 == "Grass"){
                    grass.push(data[i]);
                } else if (data[i].Type1 == "Ice"){
                    ice.push(data[i]);
                } else if (data[i].Type1 == "Poison"){
                    poison.push(data[i]);
                } else if (data[i].Type1 == "Flying"){
                    fly.push(data[i]);
                } else if (data[i].Type1 == "Bug"){
                    bug.push(data[i]);
                } else if (data[i].Type1 == "Ghost"){
                    ghost.push(data[i]);
                } else if (data[i].Type1 == "Dragon"){
                    dragon.push(data[i]);
                } else if (data[i].Type1 == "Fairy"){
                    fairy.push(data[i]);
                } 
                else{
                    console.log(`Could not place ${data[i].Name} with a type`)
                }

                //Repeat the loop for type 2
                if (data[i].Type2 == "Normal"){
                    normal.push(data[i]);
                } else if (data[i].Type2 == "Water"){
                    water.push(data[i]);
                } else if (data[i].Type2 == "Electric"){
                    elec.push(data[i]);
                } else if (data[i].Type2 == "Fighting"){
                    fight.push(data[i]);
                } else if (data[i].Type2 == "Ground"){
                    ground.push(data[i]);
                } else if (data[i].Type2 == "Psychic"){
                    psy.push(data[i]);
                } else if (data[i].Type2 == "Rock"){
                    rock.push(data[i]);
                } else if (data[i].Type2 == "Dark"){
                    dark.push(data[i]);
                } else if (data[i].Type2 == "Steel"){
                    steel.push(data[i]);
                } else if (data[i].Type2 == "Fire"){
                    fire.push(data[i]);
                } else if (data[i].Type2 == "Grass"){
                    grass.push(data[i]);
                } else if (data[i].Type2 == "Ice"){
                    ice.push(data[i]);
                } else if (data[i].Type2 == "Poison"){
                    poison.push(data[i]);
                } else if (data[i].Type2 == "Flying"){
                    fly.push(data[i]);
                } else if (data[i].Type2 == "Bug"){
                    bug.push(data[i]);
                } else if (data[i].Type2 == "Ghost"){
                    ghost.push(data[i]);
                } else if (data[i].Type2 == "Dragon"){
                    dragon.push(data[i]);
                } else if (data[i].Type2 == "Fairy"){
                    fairy.push(data[i]);
                } 
                else{
                    // console.log(`Could not place ${data[i].Name} with a type`)
                }
            } else if (gen == "All"){
                //Assumes the all generation is selected
                //Repeats the process but for all generations
                if (data[i].Type1 == "Normal" || data[i].Type2 == "Normal"){
                    normal.push(data[i]);
                } else if (data[i].Type1 == "Water"){
                    water.push(data[i]);
                } else if (data[i].Type1 == "Electric"){
                    elec.push(data[i]);
                } else if (data[i].Type1 == "Fighting"){
                    fight.push(data[i]);
                } else if (data[i].Type1 == "Ground"){
                    ground.push(data[i]);
                } else if (data[i].Type1 == "Psychic"){
                    psy.push(data[i]);
                } else if (data[i].Type1 == "Rock"){
                    rock.push(data[i]);
                } else if (data[i].Type1 == "Dark"){
                    dark.push(data[i]);
                } else if (data[i].Type1 == "Steel"){
                    steel.push(data[i]);
                } else if (data[i].Type1 == "Fire"){
                    fire.push(data[i]);
                } else if (data[i].Type1 == "Grass"){
                    grass.push(data[i]);
                } else if (data[i].Type1 == "Ice"){
                    ice.push(data[i]);
                } else if (data[i].Type1 == "Poison"){
                    poison.push(data[i]);
                } else if (data[i].Type1 == "Flying"){
                    fly.push(data[i]);
                } else if (data[i].Type1 == "Bug"){
                    bug.push(data[i]);
                } else if (data[i].Type1 == "Ghost"){
                    ghost.push(data[i]);
                } else if (data[i].Type1 == "Dragon"){
                    dragon.push(data[i]);
                } else if (data[i].Type1 == "Fairy"){
                    fairy.push(data[i]);
                } 
                else{
                    console.log(`Could not place ${data[i].Name} with a type`)
                }

                //Repeat the loop for type 2
                if (data[i].Type2 == "Normal"){
                    normal.push(data[i]);
                } else if (data[i].Type2 == "Water"){
                    water.push(data[i]);
                } else if (data[i].Type2 == "Electric"){
                    elec.push(data[i]);
                } else if (data[i].Type2 == "Fighting"){
                    fight.push(data[i]);
                } else if (data[i].Type2 == "Ground"){
                    ground.push(data[i]);
                } else if (data[i].Type2 == "Psychic"){
                    psy.push(data[i]);
                } else if (data[i].Type2 == "Rock"){
                    rock.push(data[i]);
                } else if (data[i].Type2 == "Dark"){
                    dark.push(data[i]);
                } else if (data[i].Type2 == "Steel"){
                    steel.push(data[i]);
                } else if (data[i].Type2 == "Fire"){
                    fire.push(data[i]);
                } else if (data[i].Type2 == "Grass"){
                    grass.push(data[i]);
                } else if (data[i].Type2 == "Ice"){
                    ice.push(data[i]);
                } else if (data[i].Type2 == "Poison"){
                    poison.push(data[i]);
                } else if (data[i].Type2 == "Flying"){
                    fly.push(data[i]);
                } else if (data[i].Type2 == "Bug"){
                    bug.push(data[i]);
                } else if (data[i].Type2 == "Ghost"){
                    ghost.push(data[i]);
                } else if (data[i].Type2 == "Dragon"){
                    dragon.push(data[i]);
                } else if (data[i].Type2 == "Fairy"){
                    fairy.push(data[i]);
                } 
                else{
                    // console.log(`Could not place ${data[i].Name} with a type`)
                }
            }
    
        };

        //Create the datasets for the charts
        var x_values = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800];
        var y_values = [
            normal.length,
            water.length,
            elec.length,
            fight.length,
            ground.length,
            psy.length,
            rock.length,
            dark.length,
            steel.length,
            fire.length,
            grass.length,
            ice.length,
            poison.length,
            fly.length,
            bug.length,
            ghost.length,
            dragon.length,
            fairy.length
        ];
        var labels = ["Normal", "Water", "Electric", "Fighting", "Ground", "Psychic", "Rock",
            "Dark", "Steel", "Fire", "Grass", "Ice", "Poison", "Fly", "Bug", "Ghost", "Dragon", "Fairy"
        ];

        //Console log the number of pokemon
        var pokemon = 0;
        for (i=0; i<y_values.length; i++){
            pokemon += y_values[i]
        }
        console.log(pokemon)

        //Create and plot the bar chart
        var pie_values =[{
            values: y_values,
            labels: labels,
            type: "pie",
        }];

        var pie_layout = {
            title : "Number of Pokemon Per Type"
        };

        // Plot the bar chart
        Plotly.newPlot("pie", pie_values, pie_layout);

        
        // Create the bubble chart data
        var bubble_values = [
            {
                x: labels,
                y: y_values,
                text: labels,
                mode: "markers",
                marker: {
                    size: y_values,
                    color: x_values,
                    colorscale: "Jet"
                }
            }
        ];

        //Create the chart layout
        var layout = {
            title: `Types of Pokemon for Generation: ${gen}`,
            margin: { t:0},
            hovermode: "closest",
            xaxis: {title: "Pokemon Type"},
            margin: { t: 30}
        };
        
        //Plot the chart
        Plotly.newPlot("bubble", bubble_values, layout);
    });
};

// Bar chart for type counts by generation
function type_bar(type){
    //Get the data from the csv
    d3.csv("clean_data.csv").then(function(data){

        //Create the array to hold the pokemon
        var filtered_poke = [];

        //Loop through the data and append the types to the array
        for (i=0; i<data.length; i++){
            //Push the matching types to the array
            if (data[i].Type1 == type){
                filtered_poke.push(data[i]);
            };

            if (data[i].Type2 == type){
                filtered_poke.push(data[i]);
            }
        };

        console.log(filtered_poke);

        //Create the arrays for the bar chart
        var gen1 = [];
        var gen2 = [];
        var gen3 = [];
        var gen4 = [];
        var gen5 = [];
        var gen6 = [];

        //Iterate through the type array and append to the generation
        for(i = 0; i<filtered_poke.length; i++){
            if (filtered_poke[i].Generation == "1"){
                gen1.push(filtered_poke[i]);
            } else if (filtered_poke[i].Generation == "2"){
                gen2.push(filtered_poke[i]);
            } else if (filtered_poke[i].Generation == "2"){
                gen2.push(filtered_poke[i]);
            } else if (filtered_poke[i].Generation == "3"){
                gen3.push(filtered_poke[i]);
            } else if (filtered_poke[i].Generation == "4"){
                gen4.push(filtered_poke[i]);
            } else if (filtered_poke[i].Generation == "5"){
                gen5.push(filtered_poke[i]);
            } else if (filtered_poke[i].Generation == "6"){
                gen6.push(filtered_poke[i]);
            }
        }

        //Build the chart data
        y_values = [gen1.length, gen2.length,gen3.length,gen4.length,gen5.length,gen6.length,];
        labels = ["Gen 1", "Gen 2", "Gen 3", "Gen 4", "Gen 5", "Gen 6"];

        var bar_data = [
            {
                y: y_values,
                x: labels,
                text: labels,
                type: "bar",
            }
        ];

        var bar_layout = {
            title : "Type Counts: " + type,
            margin: { t:30, l: 150}
        };

        Plotly.newPlot("bar", bar_data,bar_layout);
    });
}

//Create an init function 
function init(){
    //Create the array of selections
    var choices = ["All", "1", "2", "3", "4", "5", "6"];
    
    //Grab a reference to the doprdown select element
    var selector = d3.select("#selDataset");

    // Populate the selector with the choices
    choices.forEach((choice)=>{
        selector
            .append("option")
            .text(choice)
            .property("value", choice);
    });

    //Create the array of the selections
    var types = ["Normal", "Water", "Electric", "Fighting", "Ground", "Psychic", "Rock",
    "Dark", "Steel", "Fire", "Grass", "Ice", "Poison", "Flying", "Bug", "Ghost", "Dragon", "Fairy"];

    var type_sel = d3.select("#selTypeset");
    types.forEach((choice)=>{
        type_sel
            .append("option")
            .text(choice)
            .property("value", choice);
    });

    //Build the first plots for all generation
    charts(choices[0]);
    type_bar(types[0]);

}

//Creat an option changed function
function optionChanged(newChoice){
    //Create the new charts
    charts(newChoice);
}

//Create a type changed function
function typeChanged(newChoice){
    type_bar(newChoice);
}

//Initalize the dashboard
init();