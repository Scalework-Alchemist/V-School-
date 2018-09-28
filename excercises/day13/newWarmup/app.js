function getLongestString(array){
        var longest=array;
        var results= array.filter(word => word.length > longest ){
            
        };
}

module.exports = getLongestString;


// Goal
// Write a mocha/chai test for a function called getLongestString that does the following:

// Given an array of strings, it will return the string containing the most letters. If two strings are tied for the most, return the one which occurs first. If the array contains only one string, it should return it.

longestString(["abc", "abcd", "ab", "xyzz"]) //--> returns "abcd"
