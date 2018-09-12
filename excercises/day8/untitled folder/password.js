var rs = require("readline-sync");

function randomPasswordGenerator(number) {
    
    var random = ""
    while(random.length < number){
        var num = Math.floor(Math.random()*100)+33;
        var letters = String.fromCharCode(num);
        random+= letters + num;

    }

 
    console.log(random)

  
}

 randomPasswordGenerator(34)
