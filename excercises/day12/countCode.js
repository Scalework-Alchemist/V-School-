// Write a function that returns the number of times that the string "code" appears anywhere in the given string, except we'll accept any letter for "d", so "cope" and "cooe" would also count.

// Return how many times the word code appears in a string.
// Return the count, including any substitutions for the letter "d".

function countCode(string) {
    var amt=""
    var results = string => string.match(/co\de/g)
    console.log(results.length)

}
countCode('codecodecode')
