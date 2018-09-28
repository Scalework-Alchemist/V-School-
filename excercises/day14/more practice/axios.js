//get request are promises
//types of sent pending rejected or resolved


var xhr = new XMLHttpRequest();
var url = "http://api.vschool.io:6543/pokemon.json";

var getRequest = axios.get(url);
getRequest.then(function(response){
    var jsonData= response.data
    var pokedexArray = jsonData.objects[0].pokemon;
    pokedexArray.forEach(function (pokedex) {
    console.log(pokedex.name);
    var body = document.querySelector('body');
    var h1 = document.createElement("h1");
    h1.innerHTML = pokedex.name;
    body.appendChild(h1);
})
})
.catch(function(err){
    document.write("sorry no data for you!!")
})