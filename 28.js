//check if two integers is between 50 - 99
//return true if either is in range

const numCheck2 = (num, num2) => {
    if (num >= 50 && num <= 99) {
        console.log(true);
    } else if (num2 >= 50 && num2 <= 99) {
        console.log(true)
    } else {
        console.log(false);
    }
}

numCheck2(50, 400);
numCheck2(99, 10);
numCheck2(60, 75);
numCheck2(1, 100);
numCheck2(49, 287);