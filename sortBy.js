//sort people by height
//treat -1 as immovable object

var heightArr = [-1, -1, -1, -1, 300, 129, -1, 60, -1, 90, 75, -1, -1, 15, -1];

//split into array and then splice
function sortByHeight(arr) {
    const arr1 = [];
    const arr2 = [];

    //ternary operator
    heightArr.forEach((val, i) => val === -1 ? arr1.push(i) : arr2.push(val));

    const sortArr = arr2.sort((a, b) => a - b);

    arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1));

    return sortArr;
}

console.log(sortByHeight());