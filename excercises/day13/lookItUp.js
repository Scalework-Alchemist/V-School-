// Warm up
// Using objects, create a dictionary that allows a user to save words and their definitions and then look them up again.

// Create an object that will store words and their definitions.
// Create a function that adds words to the object.
// Do not allow duplicate words to be stored (Not case sensitive)

var dict = [
    {
        word: 'test',     
    },
]

 
function wordSmith(str){
    var holder = str;
    dict.prototype.newWord = function(word){
        this.word = str;
    }
    var results = new dict('str');
    
    if (dict.str !== holder){
    results.newWord()
    }else{
        console.log('already there boy')
    }
}

wordSmith('mike')
console.log(dict)