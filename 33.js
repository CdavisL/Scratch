//check if two num are between 40 & 60 
//or 70 and 100

function compareInt(num, num2) {
    if (num >= 40 && num <= 60 || num2 >= 40 && num2 <= 60) {
        return true;
    } else if (num >= 70 && num <= 100 || num2 >= 70 && num2 <= 100) {
        return true;
    } else {
        return "These numbers do not fall between 40 and 60 or 70 and 100.";
    }
}

console.log(compareInt(40, 60));
console.log(compareInt(20, 60));
console.log(compareInt(28, 110));
console.log(compareInt(55, 88));