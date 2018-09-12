// Object
// String
// Boolean
// Number
// Array

// 'im a string'
// or String('im a string');

//constructor functions is written like this named with a Capital or reverse camel case
function Animal(){
    this.hasCellWalls= false;

}
//new methods are made in this fasion
Animal.prototype.eat = function(){
    console.log('nom nom nom');
}

var anatalope= new Animal;
console.log (anatalope);

anatalope.eat()

//how to steal properties from other constructor functions
function Cat(){
    Animal.apply(this);
    this.hasFangs = true;

}
//to inhertite prototypes we do this
Cat.prototype = Object.create(Animal.prototype)

var tom= new Cat();
console.log(tom)



function User(username, password){
    this.username= username;
    this.password= password;
}
User.prototype.authenticate  = function(pwdattempt){
    return pwdattempt === this.password
}

var ash = new User ('AshGallo','password');

function login(pwdattempt){
    var isAuthenticated= ash.authenticate()
}