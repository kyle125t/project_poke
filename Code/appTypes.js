function pokeSubmit(){

    var param = document.getElementById("pokeInput").value;
    var pokeURL = "https://pokeapi.co/api/v2/pokemon/" + param.toLowerCase();
    var jsonType1;
    var jsonType2;
                
    var dF = [];
    var dT = [];
    var hF = [];
    var hT = [];
    var nF = [];
    var nT = [];

    var dF2 = [];
    var dT2 = [];
    var hF2 = [];
    var hT2 = [];
    var nF2 = [];
    var nT2 = [];    

    $.getJSON(pokeURL, function(data){
        var pokeID = data.id;
        var pokeName = data.name;
        var imageURI = data.sprites.front_default;
        var pokeType1 = data.types[0].type.name;
        var type1URL = "https://pokeapi.co/api/v2/type/" + pokeType1 + "/";
        if (data.types.length == 2) {
            var pokeType2 = data.types[1].type.name;
            var type2URL = "https://pokeapi.co/api/v2/type/" + pokeType2 + "/";
        }
        else var pokeType2 = null;
        if (pokeType2 != null){
            $.getJSON(type2URL, function(data3){
                    var doubleFrom2 = data3.damage_relations.double_damage_from;
                    var doubleTo2 = data3.damage_relations.double_damage_to;
                    var halfFrom2 = data3.damage_relations.half_damage_from;
                    var halfTo2 = data3.damage_relations.half_damage_to;
                    var noFrom2 = data3.damage_relations.no_damage_from;
                    var noTo2 = data3.damage_relations.no_damage_to;
        
                    // console.log(doubleFrom);
                    // console.log(doubleTo);
                    // console.log(halfFrom);
                    // console.log(halfTo);
                    // console.log(noFrom);
                    // console.log(noTo);
        
                    doubleFrom2.forEach(function(data){
                        var x = (" " + data.name);
                        dF2.push(x);
                        return dF; 
                    })
        
                    doubleTo2.forEach(function(data){
                        var x = (" " + data.name);
                        dT2.push(x);
                    })
                    halfFrom2.forEach(function(data){
                        var x = (" " + data.name);
                        hF2.push(x);
                    })
                    halfTo2.forEach(function(data){
                        var x = (" " + data.name);
                        hT2.push(x);
                    })
                    noFrom2.forEach(function(data){
                        var x = (" " + data.name);
                        nF2.push(x);
                    })
                    noTo2.forEach(function(data){
                        var x = (" " + data.name);
                        nT2.push(x);
                    })
            })
        }
        $.getJSON(type1URL, function(data2){
            var doubleFrom = data2.damage_relations.double_damage_from;
            var doubleTo = data2.damage_relations.double_damage_to;
            var halfFrom = data2.damage_relations.half_damage_from;
            var halfTo = data2.damage_relations.half_damage_to;
            var noFrom = data2.damage_relations.no_damage_from;
            var noTo = data2.damage_relations.no_damage_to;

            // console.log(doubleFrom);
            // console.log(doubleTo);
            // console.log(halfFrom);
            // console.log(halfTo);
            // console.log(noFrom);
            // console.log(noTo);

            doubleFrom.forEach(function(data){
                var x = (" " + data.name);
                dF.push(x);
                return dF; 
            })

            doubleTo.forEach(function(data){
                var x = (" " + data.name);
                dT.push(x);
            })
            halfFrom.forEach(function(data){
                var x = (" " + data.name);
                hF.push(x);
            })
            halfTo.forEach(function(data){
                var x = (" " + data.name);
                hT.push(x);
            })
            noFrom.forEach(function(data){
                var x = (" " + data.name);
                nF.push(x);
            })
            noTo.forEach(function(data){
                var x = (" " + data.name);
                nT.push(x);
            })
            // console.log("Number: ", pokeID);
            // console.log("Name: ", pokeName);
            // console.log("Type 1: ", pokeType1);
            // console.log("Type 2: ", pokeType2);
            // console.log("Image URI: ", imageURI);
            
            var dF_final = dF.concat(dF2);
            var dT_final = dT.concat(dT2);
            var hF_final = hF.concat(hF2);
            var hT_final = hT.concat(hT2);
            var nF_final = nF.concat(nF2);
            var nT_final = nT.concat(nT2);


            var li = ""; 
                li += '<li><img src="' + imageURI + '">';
                li += '<h1>#' + pokeID + ' ' + pokeName.toUpperCase() + '</h1>';
                li += '<p>Type 1: ' + pokeType1.toUpperCase() + '</p>';

                // only display Type 2 if it is not null
                if (pokeType2 != null){
                    li += '<p>Type 2: ' + pokeType2.toUpperCase() + '</p>';
                }
                li += "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -";
                li += "<br>";
                li += "<b>Takes double damage from: " + dF_final + "</b>";
                li += "<br>";
                li += "<br>";

                li += "<b>Deals double damage to: " + dT_final + "</b>";
                li += "<br>";
                li += "<br>";

                li += "<b>Takes half damage from: " + hF_final + "</b>";
                li += "<br>";
                li += "<br>";

                li += "<b>Deals half damage to: " + hT_final + "</b>";
                li += "<br>";
                li += "<br>";

                li += "<b>Takes no damage from: " + nF_final + "</b>";
                li += "<br>";
                li += "<br>";


                li += "<b>Deals no damage to: " + nT_final + "</b>";
                
                // empty listview
                $("#pokeDetails").empty();

                // append new li to listview
                $("#pokeDetails").append(li).promise().done();
        });
    });
};
