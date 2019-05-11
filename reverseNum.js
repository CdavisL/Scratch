//reverse these numbers

function reverseNum(num) {
    //first turn the number to a string
    var newNum = num
    .toString()
    //split it
    .split("")
    //reverse it
    .reverse()
    //join it
    .join("");
    //return it wrapped in parseInt() method and * Math.sign (to keep sign)
    return parseInt(newNum) * Math.sign(num);
}

reverseNum(-49);