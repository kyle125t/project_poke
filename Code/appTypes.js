function pokeSubmit(){
    var param = document.getElementById("pokeInput").value;
    var pokeURL = "http://pokeapi.co/api/v2/pokemon/" + param.toLowerCase();
    var jsonType1;
    var jsonType2;
                
    var dF = [];
    var dT = [];
    var hF = [];
    var hT = [];
    var nF = [];
    var nT = [];

    $.getJSON(pokeURL, function(data){
        var pokeID = data.id;
        var pokeName = data.name;
        var imageURI = data.sprites.front_default;
        var pokeType1 = data.types[0].type.name;
        var type1URL = "https://pokeapi.co/api/v2/type/" + pokeType1 + "/";
        if (data.types.length == 2) {
            var pokeType2 = data.types[1].type.name;
        }
        else var pokeType2 = null;
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
                var x = data.name;
                dF.push(x);
                return dF; 
            })
            console.log(dF[0]);
            doubleTo.forEach(function(data){
                var x = data.name;
                dT.push(x);
            })
            halfFrom.forEach(function(data){
                var x = data.name;
                hF.push(x);
            })
            halfTo.forEach(function(data){
                var x = data.name;
                hT.push(x);
            })
            noFrom.forEach(function(data){
                var x = data.name;
                nF.push(x);
            })
            noTo.forEach(function(data){
                var x = data.name;
                nT.push(x);
            })

        });


        console.log("Number: ", pokeID);
        console.log("Name: ", pokeName);
        console.log("Type 1: ", pokeType1);
        console.log("Type 2: ", pokeType2);
        console.log("Image URI: ", imageURI);
        var li = "";
            li += '<li><img src="' + imageURI + '">';
            li += '<h1>#' + pokeID + ' ' + pokeName.toUpperCase() + '</h1>';
            li += '<p>Type 1: ' + pokeType1.toUpperCase() + '</p>';

            // only display Type 2 if it is not null
            if (pokeType2 != null){
                li += '<p>Type 2: ' + pokeType2.toUpperCase() + '</p>';
            }
            // li += "<p>Takes double damage from " + console.log(dF) + "</p>";
            
            li += '<p>Double from: ' + dF[0] + '</p>';
            
            // empty listview
            $("#pokeDetails").empty();

            // append new li to listview
            $("#pokeDetails").append(li).promise().done();
            //     function(){
            //         $(this).listview("refresh");
            // });
        });
    };