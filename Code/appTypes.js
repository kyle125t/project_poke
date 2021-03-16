// const Pokedex = require("pokeapi-js-wrapper")
// const customOptions = {
//   protocol: "https",
//   hostName: "pokeapi.co",
//   versionPath: "/api/v2/",
//   cache: true,
//   timeout: 5 * 1000, // 5s
//   cacheImages: true
// }
// const P = new Pokedex.Pokedex(customOptions)

// P.getTypeByName("pikachu").then(function(response) {
//     console.log(response)
//   })

function pokeSubmit(){
    var param = document.getElementById("pokeInput").value;
    var pokeURL = "http://pokeapi.co/api/v2/pokemon/" + param;

    $.getJSON(pokeURL, function(data){
        //console.log(data);
        //console.log(JSON.stringify(data, null, "  "));

        var pokeID = data.id;
        var pokeName = data.name;
        var pokeType1 = data.types[0].type.name;
        if (data.types.length == 2) {
            var pokeType2 = data.types[1].type.name;
        }
        else var pokeType2 = null;

        console.log("Number: ", pokeID);
        console.log("Name: ", pokeName);
        console.log("Type 1: ", pokeType1);
        console.log("Type 2: ", pokeType2);
    })
};