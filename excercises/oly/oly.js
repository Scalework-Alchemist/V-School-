//bronze


  var person = {
    name: "Bobby",
    age: 12
  }
  if (person.age >= 18){
      console.log(person.name + "is allowed to go to the movie")
  }
  if (person.age <= 18){
    console.log(person.name+ " not old enough ol'chap")
}
if (person.name.includes("B")){
    console.log(person.name + " is allowed to go to the movie because of B")
}
if (person.age <= 18 && (person.name.includes("B"))){
  console.log(person.name+" is not allowed to go to the movie because of age but has B" )
}
if (person.age >= 18 && (person.name.includes("B"))){
    console.log(person.name+" is allowed to go to the movie because of B and age" )
  }





//Silver

if (1 === "1"){
    console.log("strict")
}
if (1 == "1"){
    console.log("loose")
}
else{
    console.log("nope")
}

if ((1<= 2)&&(2==4)){
    console.log("yes")
}
else{
    console.log("false")
}


//gold medal







//even odd looping
//Create a for loop that iterates through 101 numbers (from 0 - 100).
// If the current iteration is an Odd number, print "Odd" to the console, otherwise print "Even".

var x = function getRandomIntInclusive(min, max){
    min = Math.ceil(0);
    max = Math.floor(100);
    rNum = Math.floor(Math.random() * (max-min +1)) +min;
    return rNum
    if (rNum)
}





/* 
//define counter variable
//define the limit of the counter
//define rule for how the counter changes

for(i=20; i>= -100; i--) {
    console.log("your the best around");
    ;
}
*/
