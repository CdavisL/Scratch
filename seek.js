//take in array and remove whatever is in following arguments

var oddArr = [7, 8, 9, "Noctis", 15, "Tactics", 7];

//arguments, indexOf, filter
function seekAndDestroy(arr) {
    const args = Array.from(arguments);
    //return args;

    function filterArr(arr) {
        //return true if not in array
        return args.indexOf(arr) === -1;
    }

    return arr.filter(filterArr);
}

console.log(seekAndDestroy(oddArr, 7, 15));

//...rest, filter, and include
function seekAndDestroy(arr, ...rest) {
    return arr.filter(val => !rest.includes(val));
}

console.log(seekAndDestroy(oddArr, 7, 15));