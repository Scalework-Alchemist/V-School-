var obj={
    key:"value"
}

//read
var key = "key";
console.log(obj[key])

//add
obj.color = "blue";

//edit
obj.color = "red";

//delete
delete obj.color;
console.log(obj);

//method: its just a function nested in an object
obj.print = function(){
    console.log("hello");
}

//calling a method
obj.print();


//pass by reference and pass by value
//pass by value only effects primitive datatypes { string, number, boolean, null and undefined}
//pass by reference only effects composite datatypes{objects, arrays}


//pass by value
var number = 2;
var sameNumber = number;
number = 5 ;
console.log(sameNumber)

//pass by reference 
var myName = {
    firstName: "Carlos"
  };
  var identity = myName;
  myName.firstName = "Carla";
  console.log(myName.firstName); // "Carla"
  console.log(identity.firstName); // "Carla"