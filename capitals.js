//return the first letter of this string in caps
//var string = "world's biggest gamer";

function capitalizeLetters(str) {
    //first make sure all letters are lowercase, then split
    const strArr = str
    .toLowerCase()
    .split(" ");

    //run through for loop
    for(let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].substring(0,1).toUpperCase() + strArr[i].substring(1);
    }

    return strArr.join(" ");
}

capitalizeLetters("One does not simply walk into Mordor.");

function capitalizeLetters(str) {
    return str
        .toLowerCase()
        .split(" ")
        .map(word => word[0].toUpperCase() + word.substr(1)
        )
        .join(" ");
}

capitalizeLetters("I used to be an adventurer like you, until I took an arrow to the knee.");

//regular expressions
function capitalizeLetters(str) {
    return str.replace(/\b[a-z]/gi, function(char) {
        return char.toUpperCase();
    });
}

capitalizeLetters("One ring to rule them all.");