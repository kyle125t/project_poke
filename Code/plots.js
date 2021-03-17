// poke_url = "https://pokeapi.co/api/v2/stat/"
// var pokemon_name = d3.select("#poke1").property("value");
// console.log(poke_name)
// function buildPlot(name) {
//     var url=`https://pokeapi.co/api/v2/pokemon/${name}`;
//     d3.json(url).then(function(data) {
//       // Grab values from the response json object to build the plots
//       var name = data.forms[0].name;
//       var attack = data.stats[1].base_stat;
//       var defense = data.stats[2].base_stat;
//       var special_attack = data.stats[3].base_stat;
//       var special_defense = data.stats[4].base_stat;
//       var speed = data.stats[5].base_stat;

//       console.log(`Name: ${name}, attack: ${attack}, defense:${defense}, special_attack:${special_attack}`);
//     })
//   };
// buildPlot(poke_name);

function bubble_chart(gen){
    var url ="https://pokeapi.co/api/v2/generation/";
    d3.json(url+gen).then((data)=>{

        //Store the values of the data to use
        pokemon = data.pokemon_species;

        //Create arrays to hold the types
        var type1 = [];
        var type2 = [];

        //Loop through the pokemon array, call the json and store the types
        for (var i = 0; i < pokemon.length; i++){

        }

    });
};

bubble_chart("1");