//computer counter

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
var compCounter=0;
    for (var i = 0; i<officeItems.length ; i++) {
        if(officeItems[i] === "computer"){
            compCounter++; 
        }
    }
        console.log(compCounter);

/*#2
Loop through the following array and log to the console "old enough"
 if they are 18 or older, and "not old enough" if thy aren't 18.*/

 var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

  /*
Switch

  var on = false:
  var numOfSwitches = [2,3,2];
  for(var i =0 ; i< numOfSwitches.length: i++){
      if(numOfSwitches[i] % 3 !== 0){
          on = !on;
      }
  }
  
  */