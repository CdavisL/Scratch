//get the sum of 2 numbers
//if numbers are equal to each other, triple results

const sumTriple = (num, num2) => {
    if (num === num2) {
        console.log((num + num2) * 3);
    } else {
        console.log(num + num2);
    }
}

sumTriple(2, 2);
sumTriple(3, 5);