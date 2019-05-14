//split an array into chunked arrays of a specific length

var nameArr = ["Noctis", "Gladio", "Prompto", "Ignis", "Regis", "Regalia", "Cid"]

//uses a while loop
function chunkArr(arr, len) {
    //init chunked arr
    const chunkedArr = [];

    //set index
    let i = 0;

    //loop while index is < arr.length
    while(i < arr.length) {
        //slice from index to the index + chunk length push on the chunk array
        chunkedArr.push(arr.slice(i, i + len));
        //increment by chunk length
        i += len;
    }

    //return chunkedArr;
    console.log(chunkedArr);
}

chunkArr(nameArr, 2);

//for each
function chunkArr(arr, len) {
    //init chunk arr
    const chunkedArr = [];

    //loop thru arr
    arr.forEach((val) => {
        //get last element
        const last = chunkedArr[chunkedArr.length - 1];

        //check if last and if last length = chunk length
        if (!last || last.length === len) {
            chunkedArr.push([val]);
        } else {
            last.push(val);
        }
    });

    console.log(chunkedArr);
}

chunkArr(nameArr, 2);