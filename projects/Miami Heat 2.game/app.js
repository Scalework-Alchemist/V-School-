 
    
    //<--event functions-->
    function commenceHeist(){
        console.log("you decide to walk up to the car and ask them to join thier heist\n and well....\n\nyou get shot for spooking them\n\n"); 
        death()   
    }
    function insideBank(){
        console.log('you walk up to the door of the bank several minutes before the bank is gonna get robbed\nJordan: you need to sneak past security\n and remain unnoticed by the robbers when they enter\ngood luck');
        var sneakScenario= rS.keyInSelect(sneakScenario1)
        if(sneakScenario===1){
            console.log('you hesitated and the robbers shot you as the first victim');
            death()
        }else if (sneakScenario===0){
            console.log('time to find the jumper chip lets sneak\nJordan: be careful where you step might be boobie traps')
            gameTime()
        }
        
        function gameTime(){
        var cokeWeapon = cokeWeapons[Math.floor((cokeWeapons.length) * Math.random())];
        var weaponName = cokeWeapon[0]
        var weaponDamage = cokeWeapon[1]
        var cokeDealer = cokeDealers[Math.floor(cokeDealers.length * Math.random())];
        var enemyHp = Math.floor((Math.random() * 31) + 50);
        

        function attack() {
            var playerAttack = Math.floor((Math.random() * 10) + (player.damage * 0.8));
            rS.keyInPause("Attack!");
            enemyHp -= playerAttack
            if (enemyHp > 0) {
                console.log("\nYou attacked the " + cokeDealer + " for " + playerAttack + " hitpoints! \nThe " + cokeDealer + " now has " + enemyHp + " health!\n")
            } else {
                console.log("\nYou have killed the " + cokeDealer + "!\n")
                rS.keyInPause()
                if (weaponDamage > player.damage) {
                    console.log("\nYou have picked up a " + weaponName + " and found \n")
                    playerOne.damage = weaponDamage 
                    playerOne.enemiesKilled++
                        rS.keyInPause()
                    if (rS.keyInYN("Would you like to continue exploring the desert?")) {
                        gameTime()
                    } else {
                        insideBank()
                    }
                } else {
                    console.log("\nYou have found \n") 
                    player.enemiesKilled++
                        rS.keyInPause()
                    if (rS.keyInYN("Would you like to continue exploring the desert?")) {
                        gameTime()
                    } else {
                        insideBank()
                    }
                }
            }
        }

        function defend() {
            var enemyDamage = Math.floor((Math.random() * 11) + 5);
            rS.keyInPause("Defend!")
            playerOne.healthPoints -= enemyDamage
            if (playerOne.healthPoints > 0) {
                console.log("\nThe " + cokeDealer + " hit you for " + enemyDamage + "! \nYou now have " + playerOne.healthPoints + " health. \n")
            } else {
                console.log("\nThe " + cokeDealer + " hit you for " + enemyDamage + "! \nYou have died!\n")
            }
        }

        console.log("\nYou have ran into a " + cokeDealer + " carrying a " + weaponName + " !\n")
        while ((enemyHp > 0 && playerOne.healthPoints > 0) && (escape === false)) {
            escape = Math.random() >= 0.5;
            var fightOrFlight = ["Fight!", "Run!"];
            fightOrFlight = rs.keyInSelect(fightOrFlight, "What do you want to do?");
    
            if ((fightOrFlight === 1) && (escape === true)) {
                console.log("\nYou have escaped!\n")
                gameTime();
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
        }
    function commenceHeist2(){
        var bankHeist2 = ["Yeah im going to use them as a distraction while i slip in through the back", " Hey jordan what do you know of this event??"];
        console.log(name + " Jordan: 'You are right...'\nJordan: 'We need to slip in undetected'\n\n'Do you have a plan?")
        var bankHeist2 = rS.keyInSelect(bankHeist2,)
        if (bankHeist2 === 0){
            console.log('you decide that while then two men in the monte carlo are collecting their nerve\nto slip past them and into the the bank\n you  decide since those two men are supposed to complete this robbery if the future he is from\n is going to continue to exist!\n');
            insideBank()
            //you sneak into the back and call the cops they end upm showing up  you have to shooting at the cops this is the first real battle
        }else if (bankHeist2 === 1){
            console.log("\nJordan: The incident is infamous in FBI history and is well-studied in law enforcement circles.\nDespite outnumbering the suspects 4 to 1,\nthe agents found themselves pinned down by suppressive rifle fire\nand unable to respond effectively. '\n\n")
            console.log(name+": i guess we got to use these guys as a distraction...")
            //need to fix the loop  ***************
        }
    };

    //<---bank intro and scenario start--->//
    console.log(bankRobIntro);
    console.log("\nJordan: 'I have a information on a historical event that happens in about 5 mins'\nJordan: 'we need to get into that bank you are gonna have to team up with those bank robbers in that black Monte Carlo'\n...\n...\n Jordan: 'What do you say?\n\n")
    var bankHeist1= rS.keyInSelect(bankHeist1,)
    if (bankHeist1 === 0) {
        console.log('you selected to rob the bank');
        commenceHeist()
    } else if (bankHeist1 === 1) {
        commenceHeist2()
        
    }
}; 