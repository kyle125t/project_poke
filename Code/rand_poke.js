//Random Pokemon sprite per generation
function rand_poke(type){
    
    //Write the url based on the type
    l_type = type.toLowerCase();
    var url = `https://pokeapi.co/api/v2/type/${l_type}`;

    //Query the api
    d3.json(url).then(function(data){
        
        //Store the array of pokemon
        type_pokemon = data.pokemon;

        //Create a random number based on the length of the type
        index = Math.round(Math.random()*type_pokemon.length);
        
        //Store the random pokemon to be queried
        winner = type_pokemon[index];
        
        //Store the query url for the pokemon
        poke_url = winner.pokemon.url;

        //Query the poke url and return the image
        d3.json(poke_url).then(function(pokemon){
            poke_name = pokemon.name;
            console.log(poke_name);
            
            //Get the link for the sprite
            sprite = pokemon.sprites.front_default;
            console.log(sprite);

            //Append the image and name to the html file
            var li = "";
            li += '<center><img src="' + sprite + '">';
            li += '<h5>' + "It's " + poke_name.toUpperCase() + '</h1></center>';
            console.log(li);

            // empty listview
            $("#pokeDetails").empty();

            // append new li to listview
            $("#pokeDetails").append(li).promise().done();

        })
    });
}

//Create an init function 
function init(){
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
    rand_poke("Normal");
}

//Create a type changed function
function typeChanged(newChoice){
    rand_poke(newChoice);
}

init();