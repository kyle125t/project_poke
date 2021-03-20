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
            console.log(pokemon);
            
            //Get the link for the sprite
            sprite = pokemon.sprites.front_default;
            console.log(sprite);
        })
    });
}