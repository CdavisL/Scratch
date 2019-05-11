//fizzbuzz!!!
//if i % 3, print fizz
//if i % 5, print buzz
//if i % 3 and 5, print fizzbuzz

function fizzbuzz() {
    for (let i = 1; i <= 100; i++) {
        //this can be shortened to 15
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz");
        } else if (i % 3 === 0) {
            console.log("fizz");
        } else if (i % 5 === 0) {
            console.log("buzz");
        } else {
            console.log(i);
        }
    }
}

fizzbuzz();