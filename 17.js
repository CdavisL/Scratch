//find difference between a num and 19
//if num greater than 19, triple

const nineteen = num => {
    if (num >= 19) {
        console.log((num - 19) * 3);
    } else {
        console.log(num - 19);
    }
}

nineteen(19);
nineteen(17);
nineteen(25);