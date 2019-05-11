//check if given integer is within 20 of 100 or 400

const twentyWithin = num => {
    if (num >= 80 && num <= 120) {
        console.log(true);
        //return true;
    } else if (num >= 380 && num <= 420) {
        console.log(true);
        //return true;
    } else {
        console.log(false);
        //return false;
    }
}

twentyWithin(100);
twentyWithin(400);
twentyWithin(20);
twentyWithin(460);
twentyWithin(200);