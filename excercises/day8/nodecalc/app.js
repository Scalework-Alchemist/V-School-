
var readlineSync = require("readline-sync");
var operations = require("./operations.js");

var num1 = readlineSync.question("Enter your first number\n");
var num2 = readlineSync.question("Enter your second numnber\n");

var options = ["+","-","/","*"];
var index = readlineSync.keyInSelect(options,"which operation would you like to perform? ");

//functions
if(index === 0){
    answer = operations.sum(num1, num2)
    console.log(answer) 
} else if (index === 1){
    answer = operations.subtract(num1,num2)
    console.log(answer) 
}else if (index === 2){
    answer = operations.divide(num1,num2)
    console.log(answer) 
}else if (index === 3){
    answer = operations.multiply(num1,num2)
    console.log(answer) 
}



