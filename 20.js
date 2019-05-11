//check if integer is positive or negative

const posNeg = num => {
    if (num >= 1) {
        console.log(num + " is positive.");
    } else if (num <= -1) {
        console.log(num + " is negative.");
    } else {
        console.log(num + " is zero.");
    }
}

posNeg(0);
posNeg(-1);
posNeg(1);
posNeg(-10);
posNeg(40);