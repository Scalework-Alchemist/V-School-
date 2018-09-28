
var url= "http://api.vschool.io:6543/pokemon.json"

var getRequest = axios.get(url);
getRequest.then(function(response){
    var todos = response.data;
    todos.forEach(displayTodo)
})
.catch(function(err){
    console.log(err)
})
function displayTodo(todo){
    var li = document.createElement('li');
    li.innerText = todo.title;
    ul.appendChild(li);

}





// var promise = new promise(function(resolve,reject){
//     var coinFlip= Math.random()<.5;
//     setTimeout(function(){
//         if(coinFlip){
//             resolve("heads")
//         }else{
//             reject('tails')
//         }
//     }, 2000)
// })

// promise.then(function(result){
//     console.log("the coin is "+ result)
// })
// .catch(function(resolve){
//     console.log("this coin is "+ result)
// })
