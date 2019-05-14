//return true is anagram or false if not

function isAnagram(str, str2) {
    return formatter(str) === formatter(str2);
}

//helper
function formatter(str) {
    return str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}

console.log(isAnagram("Noctis", "Ignis"));
console.log(isAnagram("elbow", "below"));
console.log(isAnagram("dirty room", "dormitory##"));