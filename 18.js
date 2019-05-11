//check two given numbers
//return true if one number is 50
//or if their sum is 50

const numberCheck = (num, num2) => {
    if (num === 50 || num2 === 50) {
        //return true;
        console.log(true);
    } else if (num + num2 === 50) {
        //return true;
        console.log(true);
    } else {
        //return false;
        console.log(false);
    }
}

numberCheck(25, 25);
numberCheck(50, 6747879709);
numberCheck(32, 50);
numberCheck(0, 0);