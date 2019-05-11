//palindrome is a word that is the same forwards or backwords

//my solution
function isPalindrome(str) {
    //reverse the string
    var newStr = str
    .split("")
    .reverse()
    .join("");
    //check 
    if (newStr === str) {
        return true;
    } else {
        return false;
    }
}

isPalindrome("racecar");
isPalindrome("regalia");

//another solution
function isPalindrome(str) {
    const revString = str
    .split("")
    .reverse()
    .join("");
    
    return revString === str;
}

isPalindrome("regalia");