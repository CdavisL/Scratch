//get the sum of two given integers
//if the sum falls between 50 and 80, return 65
//else return 80

function weirdMath(num, num2) {
    result = num + num2;

    if (result >= 50 && result <= 80) {
        return 65;
    } else {
        return 80;
    }
}

console.log(weirdMath(20, 20));
console.log(weirdMath(40, 20));
console.log(weirdMath(120, 234));