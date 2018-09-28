class Person{
    constructor(sex, name, killPoints,healthPoints){
        this.sex = sex;
        this.name = name;
        this.killPoints = killPoints;
        this.healthPoints=healthPoints;
    }
    talk(){
        console.log(`hi my name is ${this.name} im a ${this.sex}!`)
    }
    add(a, b){
        let x = a + b
        console.log('the sum of '+a+ ' and '+b+ ' is ' + x)
    }
    attack(a){
        console.log(a-this.killPoints)
    }
}
let maker=[]
const ida = new Person('woman', 'ida',25,100)
const mike = new Person('man', 'mike', 200,100)

var questionsArray = [];
class Quizer {
    constructor(question, choices, answer){
    this.question = question;
    this.choices = choices;
    this.answer = answer;
    
    questionsArray.push(this);
    
}
}
const x = new Quizer('why me',["a: hero","b: zero"],"a")

console.log(questionsArray)