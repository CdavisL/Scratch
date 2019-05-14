//add all primes
//a prime is a number > 1 and only factors are 1 and itself

function sumAllPrimes(num) {
    let total = 0;

    //nested
    function checkForPrime(i) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                return false;
            }
        }
        return true;
    }

    for (let i = 2; i <= num; i++) {
        if (checkForPrime(i)) {
            total += i;
        }
    }
    return total;
}

console.log(sumAllPrimes(10));