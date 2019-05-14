//flatten array

var chunkyArr = [ [ 'Noctis', 'Gladio' ],
[ 'Prompto', 'Ignis' ],
[ 'Regis', 'Regalia' ],
[ 'Cid' ] ];

//reduce
function flattenArr(arrs) {
    //return arrs;
    return arrs.reduce((a, b) => a.concat(b));
}

console.log(flattenArr(chunkyArr));

//concat.apply
function flattenArr(arrs) {
    return [].concat.apply([], arrs);
}

console.log(flattenArr(chunkyArr));

//concat and spread
//spread is an operation and in this case acts as a + b + c
function flattenArr(arrs) {
    return [].concat(...arrs);
} 

console.log(flattenArr(chunkyArr));