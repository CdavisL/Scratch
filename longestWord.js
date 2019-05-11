//find the longest word

//expression

function longestWord(sen) {
    //create an expression to look through all text, including numbers
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
    //this checks to see if working
    //console.log(wordArr);

    //then sort by length
    const sorted = wordArr.sort(function(a, b) {
        return b.length - a.length;
    });

    //this checks to see if working
    //console.log(sorted);

    //this returns the first longest word
    //return sorted[0];

    //if multiple words are returned for longest
    const longestWordArr = sorted.filter(function(word) {
        return word.length === sorted[0].length;
    });

    console.log(longestWordArr);
}

longestWord("That's it! I've come up with a new recipeh!");