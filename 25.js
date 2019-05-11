//check if number is a multiple of 3 or seven

const multipleOf = num => {
    if (num % 3 === 0 && num % 7 === 0) {
        console.log("This " + num + " is a multiple of 3 and 7.");
    } else if (num % 3 === 0) {
        console.log("This " + num + " is a multiple of 3.");
    } else if (num % 7 === 0) {
        console.log("This " + num + " is a multiple of 7.");
    } else {
        console.log("This " + num + " is not a multiple of 3 or 7.");
    }
}

multipleOf(21);
multipleOf(3);
multipleOf(7);
multipleOf(42);