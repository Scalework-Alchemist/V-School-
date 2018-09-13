// //1) Make an array of numbers that are doubles of the first array
// function doubleNumbers(arr){
//     var results = arr.map(x => x * 2)
//     console.log(results)
// }


// doubleNumbers([2, 5, 100]); // [4, 10, 200]




// //2) Take an array of numbers and make them strings
// function stringItUp(arr){
//     var results = arr.map(x => x.toString())
//     console.log(results)
// }

// stringItUp([2, 5, 100]); // ["2", "5", "100"]


// //3) Capitalize each of an array of names
// function capitalizeNames(arr){
//     var results = arr.map(x => x.toUpperCase())
//     console.log(results)
// }

// capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

// //4) Make an array of strings of the names
// function namesOnly(arr){
//     var arr2=[]
//     var results = arr.map(x => arr2.push(x.name))
//     console.log(arr2)
// }

// namesOnly([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]) 
// // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]




function makeStrings(arr){
    var matrix=[]
    var results= arr.map(x => matrix.push(x.name + ))
}

makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]) 
// ["Angelina Jolie can go to The Matrix", 
// "Eric Jones is under age!!", 
// "Paris Hilton is under age!!", 
// "Kayne West is under age!!", 
// "Bob Ziroll can go to The Matrix"]



