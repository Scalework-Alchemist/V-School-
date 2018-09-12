var readlineSync = require('readline-sync');
var options = ['look around','open door','put hands in hole']
var selection=[]
//game functions
// var player = {
//     name;
//     blah:
//     attack;
//     enemiesKilled: 3;
// }
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