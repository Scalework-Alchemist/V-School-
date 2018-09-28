var rs = require('readline-sync');

let newPlayerArray = [];
class Person{
    constructor(sex, name, killPoints,healthPoints){
        this.sex = sex;
        this.name = name;
        this.killPoints = killPoints;
        this.healthPoints=healthPoints;
        newPlayerArray.push(this);
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
let cokeDealerNames = ["Tyrone", "La Blanca", "Top Flight Securtity 1", "Top Flight Securtity 2", "Jermaine", "Sam", "Ben"];
let cokeWeapons = [
    ["AK-47", 7.62],
    ["M-16", 5.56],
    ["Tek-9", 9],
    ["KNIFE", 3],
    ["Coke-Cloud", 14]
]
let enemyItems = [
    ["Jumber Chip", hasChip=true],
    ["Check Book"]
    ["Ferrari Keys"]
    ["Sandwich"]
    []
]
var hasChip = false
var escape = false
function death(){
    Console.log(`${newPlayer} you have died in Miami`)
    movement()
}







// const ida = new Person('woman', 'ida',25,100)
// const mike = new Person('man', 'mike', 200,100)

//new game and new player 
console.log("FIVE...\nFOUR...\nTHREE...\nTWO...\nIMPACT\n commenceing rentery mental checks.")
const newPlayer = rs.question("Hello wake up!!!\nDo you Remember you name?")
const sex = rs.question(`Hi ${newPlayer} my name is Jordan\nI'm your Anti-Paradox cookie im implanted in your head\nand have information that can help you with your mission.\nDo you know what your sex is?`);
const playerSaver = new Person(sex, newPlayer, 25, 100);
const statusCheck = rs.keyInYN(`Jordan: hey ${newPlayer} do you want to know your status?`);
    if(statusCheck === true){
        console.log(newPlayerArray)
        console.log(`Jordan: lets continue.`)
        rs.keyInPause();
        movement()
    }
    else{
        console.log(`Jordan: fine lets continue.`)
        rs.keyInPause();
        movement()
    }

//fucntion movement
function movement(){
    movements = ["River Side Bank","Miami Beach"]
    movements = rs.keyInSelect(movements, "Jordan: where should we go?")
    if(movements === 0){
        bank()
    }else if(movements === 1){
        miamiBeach()
    }

}
function miamiBeach(){
    if(hasChip === false){
    console.log(`${newPlayer}: i haven't unlocked that part of the map....must purchase from the steam store....`)
    rs.keyInPause()
    movement()
    }else if(hasChip === true){
        console.log(`${newPlayer} welcome to Miami Beach\nnow that you have the Jumper Chip we have to Activate our portal gun\n and return back to our time the year 2018!!`)
        const gameOver=rs.keyInYN(`${newPlayer} do you want to use the jumper chip?`)
        if(gameOver=== true){
            console.log(`Congratulations ${newPlayer} you have made it back home`)
        }else if(gameOver=== false){
            console.log('do you want to go back and kill more bad guys?')
            rs.keyInPause()
            movement()
        }
    }
}



    //<---bank intro and scenario start--->//
function bank(){
//options
const bankHeist1=["I don't know sounds like a bad idea","Jordan what do you know of this event?","Sure lets do it!!"]
//

    console.log(`${newPlayer} arrived to the River Side Bank, a black Monte Carlo with two men pull up to the bank.\n Jordan exclaims\n"${newPlayer} you need to get into that bank and retrieve an item from the vault\nthe item is called a JumperChip it will help you return to the future!!"`);
    console.log("\nJordan: 'I have a information on a historical event that happens in about 5 mins'\nJordan: 'we need to get into that bank you are gonna have to team up with those bank robbers in that black Monte Carlo'\n...\n...\n Jordan: 'What do you say?\n\n")
    var bankHeist= rs.keyInSelect(bankHeist1,)
    if (bankHeist === 0) {
        console.log('You Hesitated\nthe bank robbers storm the bank and you get scared ');
        death() 
    } else if (bankHeist === 1) {
        console.log("\nJordan: The incident is infamous in FBI history and is well-studied in law enforcement circles.\nDespite outnumbering the suspects 4 to 1,\nthe agents found themselves pinned down by suppressive rifle fire\nand unable to respond effectively. '\n\n")
            console.log(`${newPlayer}: "i guess we got to use these guys as a distraction..."`)
        rs.keyInPause()    
        insideBank()     
    }
    else if(bankHeist === 2){
        rs.keyInPause()    
        insideBank() 
    }
function insideBank(){
    console.log('you walk up to the door of the bank several minutes before the bank is gonna get robbed\nJordan: you need to sneak past security\n and remain unnoticed by the robbers when they enter\ngood luck');
        console.log('time to find the jumper chip lets sneak\nJordan: be careful where you step might be boobie traps');
        rs.keyInPause()
        gameTime()
    }
}

function gameTime(){
        var cokeWeapon = cokeWeapons[Math.floor((cokeWeapons.length) * Math.random())];
        var weaponName = cokeWeapon[0]
        var weaponDamage = cokeWeapon[1]
        var cokeDealer = cokeDealerNames[Math.floor(cokeDealerNames.length * Math.random())];
        var enemyHp = Math.floor((Math.random() * 31) + 50);
        var playerHP=100;
        var playerdamage= 25;

        function attack() {
            var playerAttack = Math.floor((Math.random() * 10) + (playerdamage * 0.8));
            rs.keyInPause("Attack!");
            enemyHp -= playerAttack
            if (enemyHp > 0) {
                console.log("\nYou attacked the " + cokeDealer + " for " + playerAttack + " hitpoints! \nThe " + cokeDealer + " now has " + enemyHp + " health!\n")
            } else {
                console.log("\nYou have killed the " + cokeDealer + "!\n")
                rs.keyInPause()
                gameTime()
                if (weaponDamage > playerdamage) {
                    console.log("\nYou have picked up a " + weaponName + " and found \n")

                        rs.keyInPause()
                    if (rs.keyInYN("Would you like to continue exploring the bank?")) {
                        gameTime()
                    } else {
                        movement()
                    }
                }
            }
        }
    function defend() {
        var enemyDamage = Math.floor((Math.random() * 11) + 5);
        rs.keyInPause("Defend!")
        playerHP -= enemyDamage
        if (playerHP > 0) {
            console.log("\nThe " + cokeDealer + " hit you for " + enemyDamage + "! \nYou now have " + playerHP + " health. \n")
        } else {
            console.log("\nThe " + cokeDealer + " hit you for " + enemyDamage + "! \nYou have died!\n")
        }
    }

    console.log("\nYou have ran into a " + cokeDealer + " carrying a " + weaponName + " !\n")
    while ((enemyHp > 0 && playerHP > 0) && (escape === false)) {
        escape = Math.random() >= 0.5;
        var fightOrFlight = ["Fight!", "Run!"];
        fightOrFlight = rs.keyInSelect(fightOrFlight, "What do you want to do?");

        if ((fightOrFlight === 1) && (escape === true)) {
            console.log("\nYou have escaped!\n")
            movement();
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
}