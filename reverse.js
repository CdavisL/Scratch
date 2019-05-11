//reverse a string
function reverseString(str) {
    //split the string to return a new array
    var splitStr = str.split("");
    //reverse the newly created array
    var reverseArr = splitStr.reverse();
    //join all elements into string
    var joinArr = reverseArr.join("");
    //return string
    return joinArr;
}

reverseString("hello");

//cleaner and prettier
function reverseString(str) {
    return str
        .split("")
        .reverse()
        .join("");
}

reverseString("Hakuna Matata");

//for loop
function reverseString(str) {
    //create an empty string to hold new string
    var newStr = "";

    //create a for loop starting at -1 (this is the last character of a string)
    for (var i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    //return newly reversed string
    return newStr;
}

reverseString("Noctis");

//another for loop w/decrement
function reverseString(str) {
    //placeholder
    let revString = "";
    //create a for loop starting at -1 (this is the last character of a string)
    for (let i = str.length - 1; i--) {
        revString = str[i] + revString;
    }
    //return newly reversed string
    return revString;
}

reverseString("Gladio");

//another for loop w/increment
function reverseString(str) {
    //placeholder
    let revString = "";
    //create a for loop starting at -1 (this is the last character of a string)
    for (let i = 0; i <= str.length - 1; i++) {
        revString = str[i] + revString;
    }
    //return newly reversed string
    return revString;
}

reverseString("Gladio");

//es6
function reverseString(str) {
    //placeholder
    let revString = "";
    //create a for loop starting at -1 (this is the last character of a string)
    for (let char of str) {
        revString = char + revString;
    }
    //return newly reversed string
    return revString;
}

reverseString("Ignis");

//for each loop
function reverseString(str) {
    let revString = "";
    //split the string, the use for each and nameless function
    str.split("").forEach(function(char) {
        revString = char + revString;
    });
    return revString;
}

reverseString("Prompto");

//added es6
//for each loop
function reverseString(str) {
    let revString = "";
    //split the string, the use for each and es6 function
    str.split("").forEach(char => revString = char + revString);
    return revString;
}

reverseString("Prompto");

//reduce w/es6
function reverseString(str) {
    return str.split("").reduce((revString, char) =>
        char + revString, "");
}

reverseString("Regis");