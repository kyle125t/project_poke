//Create a function to build the bubble

function bubble_chart(gen){
    //Get the data from the csv
    d3.csv("poke_data.csv").then(function(data){
    
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

        //Create the datasets for the bubble chart
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
        
        // Create the chart data
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

    //Build the first plots for all generation
    bubble_chart(choices[0]);

}

//Creat an option changed function
function optionChanged(newChoice){
    //Create the new charts
    bubble_chart(newChoice);
}

//Initalize the dashboard
init();
