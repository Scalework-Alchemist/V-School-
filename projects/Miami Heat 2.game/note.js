var readlineSync = require('readline-sync');
var options = ['look around','open door','put hands in hole']
var selection=[]

function Enemy(){
    var names=['ork','chad','brad','dannie']
    var items=['potions','sypllyis','tinder password','key','condoms']

    this.hitPoints = Math.floor(Math.random() * 25 + 50);
    this.attackPower = Math.floor(Math.random() * 10 + 15);
    this.name= names[Math.floor(Math.random() * names.length)];
    this.name= names[Math.floor(Math.random() * names.length)];
    

}
while(true){
    readlineSync.keyInSelect(options, "you find your self in a dark room with a door, a dark hole in the wall, and a strange smell, what do you do?");
    if(options === 0){
        //execute look aroud
        console.log('you look around you see a shiny object on the ground');
    }
        var pickup = readlineSync.keyInYNStrict('do you pick it up? \n');
        if(pickup){
            //handle pickup copmmand
            console.log('you found a key!');
            hasKey = true;
        }else if (options === 1){
        //execute attempt open door
        console.log('execute 2 ')
        break
    }else if (options === 2){
        //execute hand in hole
        console.log('execute console')
        break
    }
}



//wruns into ememy
if(choice=0){
    var runsintoenemy = math.random()<3;
    if(runsintoenemy){
        //generate enemy
        var enemy= new Enemy()
        console.log('oh no ,an enemy' + enemy.name + ' appeared');

        var runs = rs.keyInYNStrict('\ndo you stand or fight?\n')

    }
}



function Staff(hitpoints, attackPoints, name , outcomes){
    let names = ['Dave','Sam','Jennifer','Cass','Alicia','Dannie','Kevin','Kate']
    // let outcomes = ['stole from the register','gave you a hug','gave away your pokéDex']

    this.hitPoints = Math.floor(Math.random() * 30 + 100);
    this.attackPoints = Math.floor(Math.random() * 15 + 35);
    this.name = names[Math.floor(Math.random() * names.length)];
    // this.outcomes = outcomes[Math.floor(Math.random() * outcomes.length)];
    

    };

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


        var mike = new Staff('mike','boss-baby',200000000,'full-time');
var guy = new Staff("guy",'burger-flipper',15000,"part-time");
var nick = new Staff('nick','Master at Arms',95000,'full-time');


while ((enemyHp > 0 && playerOne.healthPoints > 0) && (escape === false)) {
    escape = Math.random() >= 0.5;
    var fightOrFlight = ["Fight!", "Run!"];
    fightOrFlight = rS.keyInSelect(fightOrFlight, "What do you want to do?");

    if ((fightOrFlight === 1) && (escape === true)) {
        console.log("\nYou have escaped!\n")
        insideBank();
    }
    if ((fightOrFlight === 0)) {
        escape = false
        attack();
        if (enemyHp > 0) {
            defend();
        } else {}
    } else if ((fightOrFlight === 1) && (escape === false)) {
        console.log("\nYou failed to escape!\n")
        defend();
    }
    
}