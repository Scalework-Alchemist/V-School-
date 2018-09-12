//required data for game to function
var rs = require('readline-sync');
var rs= readlineSync
//room_options
var options = ['look around','open door','put hands in hole']
var pickUP = 




//game storyline
while(true){
    rs.keyInSelect(options, "you find your self in a dark room with a door, a dark hole in the wall, and a strange smell, what do you do?");
    if(options === 0){
        console.log('you looked around and found a key');
    
    }
    var pickUP = rs.keyInYNStrict('\nDo you Pick it up?\n');
    console.log('you found a key');
    var hasKey=true;
    else if(options === 1){
        console.log('you attempted to open the door but its locked')
    }
}
