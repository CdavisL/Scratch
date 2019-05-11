//get the difference between a num and 13
//if number is bigger than 13, double it

const thirteen = num => {
    //compare num to 13
    //if num > 13, double the absolute difference
    if (num >= 13) {
        console.log((num - 13) * 2);
    } else {    //else just subtract the difference
        console.log(num - 13);
    }
}

thirteen(23);
thirteen(12);
thirteen(13);