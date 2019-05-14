//find the largest of 3 integers

function compareNum (num, num2, num3) {
    if (num > num2 && num > num3) {
        return num;
    } else if (num2 > num && num2 > num3) {
        return num2;
    } else if (num3 > num && num3 > num2) {
        return num3;
    } else if (num === num2 && num === num3) {
        return "These numbers are all equal.";
    }
}

console.log(compareNum(2, 3, 4));
console.log(compareNum(2, 2, 4));
console.log(compareNum(2, 2, 2));
console.log(compareNum(2, 6, 4));
console.log(compareNum(8, 3, 4));