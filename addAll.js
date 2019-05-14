//add all numbers

//es5 argument object and for loop
function addAll () {
    var args = Array.prototype.slice.call(arguments);
    //es6 version is Array.from(arguments)

    var total = 0;

    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }

    return total;
}

console.log(addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15));

//...rest, reduce
//rest ignores the first entry and returns the rest of array
//different from spread
function addAll(...numbers) {
    let total = 0;
    numbers.forEach((num) => (total += num));
    return total;
}

console.log(addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15));

//reduce and accumulator
function addAll(...numbers) {
    let total = 0;
    return numbers.reduce((acc, cur) => acc + cur);
}

console.log(addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15));