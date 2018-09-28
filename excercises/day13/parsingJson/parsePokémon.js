var xhr = new XMLHttpRequest();


xhr.onreadystatechange = function(){
    if (xhr.readyState == 4 && xhr.status == 200) {
        var jsonData = xhr.responseText;
        var pokedexData = JSON.parse(jsonData);
        var pokedexArray = pokedexData.objects[0].pokemon;
        pokedexArray.forEach(function (pokedex) {
        console.log(pokedex.name);
        var body = document.querySelector('body');
        var h1 = document.createElement("h1");
        h1.innerHTML = pokedex.name;
        body.appendChild(h1);
        });
     }
 };

 xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);
xhr.send();