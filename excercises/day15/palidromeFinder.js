function isPalindrome(str){
    let palCheck = str === str.split('').reverse().join('');
    console.log(palCheck) 
}



isPalindrome("star rats");  // true
isPalindrome("palindrome");  // false
isPalindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!");
isPalindrome('racecar')