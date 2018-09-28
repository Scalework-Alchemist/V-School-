//url
//type of request

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var jsonData = xhr.responseText;
        var data = JSON.parse(jsonData);
        var name = data.name;
        document.getElementById("demo1").innerHTML = "JSON results: " + jsonData;
        document.getElementById("demo2").innerHTML = "Parsed JSON's 'name' property: " + data.name;
        spaceshipurl = data.starships[0];
        console.log(spaceshipurl);
    }
};

xhr.open("GET", "https://swapi.co/api/starships/", true);
xhr.send();


var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var jsonData = xhr.responseText;
        var lukeSkywalker = JSON.parse(jsonData);
        var body= document.querySelector("body")
        var h1 = document.createElement("h1");
        h1.innerHTML = lukeSkywalker.name;
        body.appendChild(h1);
        // console.log(lukeSkywalker)
    }
}

xhr.open("GET", "https://swapi.co/api/people/1/", true);
xhr.send();
