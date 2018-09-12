var lyrics = ["This", "hit", "that", "ice", "cold", 
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];
/*First function: Prints the array, lyrics, to the console, including necessary spaces.
Second function: Prints lyrics backwards ("pretty so I'm myself kiss Gotta", ...).
Third function: Prints every other word to the console, (e.g. "this that cold Pfeiffer" ...). */

/*function print(arr){
    console.log(arr)
}
print(lyrics)

function printR(arr){
    console.log(arr.reverse()) 
}
printR(lyrics)

*/

function everyOther(arr) {
  var ar2 = [];

  for (var i = 0; i < arr.length ; i++) {
    ar2.push(arr[2 * i]);
  }

  console.log(ar2)
}

everyOther(lyrics)