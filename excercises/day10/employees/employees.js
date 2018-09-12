let employees=[]
function Employee(name, jobTitle, salary, status){
    this.name = name;
    this.job_Title = jobTitle;
    this.salary = salary=salary/1686;
    this.status = status;
    
    employees.push(this);
};

Employee.prototype.speak = function() {
    console.log("Employee: " + this.name + " Job Title: " + this.job_Title + " Salary: " + this.salary + "/an hour" + " Status: " + this.status);
}
    Employee.prototype.trump= function(status){
    this.status="Fired!!";
    this.salary=0;
}
    Employee.prototype.lottery= function(status){
    this.status="Full-Time";
    this.salary=100000000000000000000;
}

var mike = new Employee('mike','boss-baby',200000000,'full-time');
var guy = new Employee("guy",'burger-flipper',15000,"part-time");
var nick = new Employee('nick','Master at Arms',95000,'full-time');
nick.speak()
guy.speak()
guy.trump()
guy.speak()
nick.lottery()
nick.speak()

















// new Employee
// dealer=[]
// function Car(model,year,mileage,owner,color,sound){
//     this.model = model;
//     this.year = year;
//     this.mileage = mileage;
//     this.owner = owner;
//     this.color = color;
//     this.sound = sound;
// }
// Car.prototype.moveToDealer= function(){
//     dealer.push(new Car())
// }

// var tesla = new Car("model3",2019,12,"mike","obsideien","eeeeeeeeeeeeeeeee");
// var lambo = new Car("Ferrari Testarosa",1987,1500,'mike','v8 horsie')
//  console.log(dealer)
