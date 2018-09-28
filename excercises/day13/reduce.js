//vote counter
// 3) Turn an array of voter objects into a count of how many people voted

function totalVotes(arr) {
   var totalVoter = arr.reduce(function(counter, currentVoter){
       if (currentVoter.voted){
           return counter +1
       }
       return counter
    }, 0)
    return totalVoter
}

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
totalVotes(voters) // 7