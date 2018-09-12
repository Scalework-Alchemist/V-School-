//gets first match
var body = document.querySelector("body")

//gets all 
var listElements = document.querySelectorAll("li")

//add things node aka append
var body = document.querySelector("body");
var h1 = document.createElement("h1");
//body.appendChild(h1);
h1.innerHTML="hello world";

//make a list

var ul = document.createElement("ul");
var li = document.createElement("li");
 ul.appendChild(li);
 body.appendChild(ul);
 body.prepend(h1);


//burn the tree down
var body = document.querySelector("body");
var button = document.querySelector("button");
var ul = document.querySelector("ul");

button.addEventListener("click", function()){
var listItems = document.querySelectorAll("li");
ul.removeChild(listItems[listItems.length - 1]);
}
