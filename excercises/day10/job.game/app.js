//Characters and Character functions
//User


//New Employees
function Staff(hitpoints, attackPoints, name , outcomes){
    let names = ['Dave','Sam','Jennifer','Cass','Alicia','Dannie','Kevin','Kate']
    let outcomes = ['stole from the register','gave you a hug','gave away your pokéDex']

    this.hitPoints = Math.floor(Math.random() * 30 + 100);
    this.attackPoints = Math.floor(Math.random() * 15 + 35);
    this.name = names[Math.floor(Math.random() * names.length)];
    this.outcomes = outcomes[Math.floor(Math.random() * outcomes.length)];
    

    };
//actions

Staff.prototype.speak = function() {
    console.log("Employee: " + this.name + " Job Title: " + this.job_Title + " Salary: " + this.salary + "/an hour" + " Status: " + this.status);
}
Staff.prototype.fireAttack= function(status){
    this.status="Fired!!";
    this.salary=0;
}
Staff.prototype.lottery= function(status){
    this.status="Full-Time";
    this.salary=100000000000000000000;
}
// new occurances of staff are called in this fashion
// var name* = new Staff(hitpoints, attackPoints, name , outcomes)
var mike = new Staff('mike','boss-baby',200000000,'full-time');
var guy = new Staff("guy",'burger-flipper',15000,"part-time");
var nick = new Staff('nick','Master at Arms',95000,'full-time');











// let employees=[]
// function Employee(name, jobTitle, salary, status){
//     this.name = name;
//     this.job_Title = jobTitle;
//     this.salary = salary=salary/1686;
//     this.status = status;
    
//     employees.push(this);
// };

// Employee.prototype.speak = function() {
//     console.log("Employee: " + this.name + " Job Title: " + this.job_Title + " Salary: " + this.salary + "/an hour" + " Status: " + this.status);
// }
//     Employee.prototype.trump= function(status){
//     this.status="Fired!!";
//     this.salary=0;
// }
//     Employee.prototype.lottery= function(status){
//     this.status="Full-Time";
//     this.salary=100000000000000000000;
// }

// var mike = new Employee('mike','boss-baby',200000000,'full-time');
// var guy = new Employee("guy",'burger-flipper',15000,"part-time");
// var nick = new Employee('nick','Master at Arms',95000,'full-time');
// nick.speak()
// guy.speak()
// guy.trump()
// guy.speak()
// nick.lottery()
// nick.speak()