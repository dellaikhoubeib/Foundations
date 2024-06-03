function reverseString(s) {
    return s.split('').reverse().join('');
}

console.log(reverseString("hello"));  // Output: "olleh"
// -------------------------------------------------
function countCharacters(s) {
    return s.length;
}


console.log(countCharacters("hello"));  // Output: 5
// --------------------------------------------
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}


console.log(capitalizeWords("hello world"));  // Output: "Hello World"
// -----------------------------------------------------
function findMaximum(arr) {
    return Math.max(...arr);
}

function findMinimum(arr) {
    return Math.min(...arr);
}

console.log(findMaximum([1, 2, 3, 4, 5]));  // Output: 5
console.log(findMinimum([1, 2, 3, 4, 5]));  // Output: 1
// ---------------------------------------------------
function sumOfArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}


console.log(sumOfArray([1, 2, 3, 4, 5]));  // Output: 15
// ------------------------------------------------------
function filterArray(arr, condition) {
    return arr.filter(condition);
}

console.log(filterArray([1, 2, 3, 4, 5, 6], x => x % 2 !== 0));  // Output: [1, 3, 5]
// ----------------------------------------------------
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);


console.log(factorial(5));  // Output: 120

// -----------------------------------------------
function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(11));  // Output: true
console.log(isPrime(4));   // Output: false

// --------------------------------------------
function fibonacciSequence(n) {
    let sequence = [];
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        sequence.push(a);
        let temp = a;
        a = b;
        b = temp + b;
    }
    return sequence;
}

console.log(fibonacciSequence(10));  // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


