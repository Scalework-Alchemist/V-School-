/**
 Warm up
Given a string, your task is to remove any duplicate letters. Any letters removed should be added to another string called "duplicates".

Create function that accepts a string.
Create variable that stores the string without duplicates.
Create a variable that stores the letters removed.
Have the function return the string without duplicate letters
Have the string return the letters removed.

 */


// No duplicates: "bokepr lay"
// The Extras: "okeerr"


/*function splitter(input){
   var result = input.split("");
       console.log(result)

    }
*/



/*function lettersRemoved(str){


var recordOfPastCharacters={};
var output = "";

for(var i =0; i < str.lenght; i++){
    var currentLetter = str[i];
    if(recordOfPastCharacters[currentLetter]=== undefined){
        recordOfPastCharacters[currentLetter]= i;
    }
    else {
        output += currentLetter;

    }
    return output;
}
}
console.log(lettersRemoved("bookkeeper larry"))
*/


var recordOfPastCharacters = {};
var output = "";

function removeDupes(str){
    var recordOfPastCharacters = {};
    var output = "";

    for(var i = 0; i < str.length; i++){
        var currentLetter = str[i];
        if(recordOfPastCharacters[currentLetter] === undefined){
            output += currentLetter;
            recordOfPastCharacters[currentLetter] = i;
        }
    }
    return output;
}

console.log(removeDupes("bookkeeper larry"))


/*  array methods
    why do arrays have methods: methods are utility functions 
    we like to perform these methods on a particular thing
    
*/



/*
Remove the last item from the vegetable array.
Remove the first item from the fruit array.
Find the index of "orange."
Add that number to the end of the fruit array.
Use the length property to find the length of the vegetable array. Log that to the console.
Add that number to the end of the vegetable array.
Put the two arrays together into one array. Fruit first. Call the new Array "food".
 Remove 2 elements from your new array starting at index 4 with one method.
 Reverse your array.
 Log your array as a string to the console. 
*/

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop()
fruit.shift()
var one = fruit.indexOf("orange")
fruit.push(one)
var len = vegetables.length
vegetables.push(len)
var food = fruit.concat(vegetables)    
food.splice(4,2);
food.reverse();


console.log(fruit)
console.log(vegetables)
console.log(food.toString())

