// //map:  allows you to itterate through an array
// var arr = [1,2,3,4];
// var results = arr.map(function(item){
//     return item + 10
// })

// console.log(results)

// //filter: loops through an array and returns an array that passes the test
// var arr = [1,2,3,4,5,6,7,8];
// var results = arr.filter(function(number){
//     return number > 3
// })

// //reduce: adds all your values 
// var arr = [1,2,3,4,5,6,7,8,9,10]
// var results = arr.reduce(function(a,b){
//     return a+b
// })

// //sort orginizes all your data
// var arr = [1,2,3,4,5,6,7,8,9,10, -10,-5,-2,0]
// var results = arr.sort(function(a,b){
//     return a - b
// })

// //forEach: runs a loop on the array  
// var results = arr.forEach(function(number, i){
//     return arr[i] = number * 10
// })

// //find:
// var arr = [1,2,3,4,5,6,7,8]
// var results = arr.find(function(number){
//     return number > 4
// })

//findIndex
// var arr = [1,2,3,4,5,6,7,8,10]
// var results = arr.findIndex(function(number){
//     return number > 4
// })


//some returns true if any value is equal to the the test set 
//every returns false if any result is not true  
var arr = [1,2,3,4,5,6,7,8,10];
var arr2 = [1,2,3,4];
var results = arr.some(function(number){
    return number > 11
})
var results = arr2.every(function(number){
    return number > 3})
console.log(results)

