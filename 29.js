//check if three integers are between 50-99
//return true if one or more is in range

const checkThree = (num, num2, num3) => {
    if (num >= 50 && num <= 99) {
        console.log(true);
    } else if (num2 >= 50 && num2 <= 99) {
        console.log(true);
    } else if (num3 >= 50 && num3 <= 99) {
        console.log(true);
    } else {
        console.log(false);
    }
}

checkThree(1, 60, 79);
checkThree(9, 6, 20);
checkThree(90, 60, 79);