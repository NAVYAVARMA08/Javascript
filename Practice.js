//  question no 1
function reverseString(str) {
    return str.split('').reverse('').join('');
}
console.log(reverseString("hello")); 

// question no 2
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
    
}
console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello")); 

// question no 3
function findMax(arr) {
    return Math.max(...arr);
}
console.log(findMax([3, 1, 4, 1, 5, 9])); 

// question no 4
function removeDuplicates(arr) {
    let newArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    
    return newArr;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

//  question no 5
function factorial(n) {
    if (n === 0 || n === 1) return 1; 
    return n * factorial(n - 1); 
}
console.log(factorial(5)); 

// question no 6
function fibonacci(n) {
    if (n <= 0) return []; 
    if (n === 1) return [0]; 

    let series = [0, 1]; 

    for (let i = 2; i < n; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }

    return series;
}

console.log(fibonacci(5)); 

// question no 7
function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false
    return  str1.split('').sort().join('') === str2.split('').sort().join('');
    
}
console.log(areAnagrams("listen", "silent")); // Expected output: true

// question no 9
function findMissingNumber(arr) {
    let n = arr.length + 1; 
    let expectedSum = (n * (n + 1)) / 2; 
    let actualSum = arr.reduce((sum, num) => sum + num, 0); 

    return expectedSum - actualSum; 
}

console.log(findMissingNumber([1, 2, 4, 5])); // 3

// question no 10
function countOccurrences(str) {
    let charCount = {};

    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    return charCount;
}

console.log(countOccurrences("hello")); 

// questio no 1 output based questions 
console.log(1 + "2" + "2"); // "122"
console.log(1 + +"2" + "2");// 32
console.log(1 + -"1" + "2");//02
console.log(+"1" + "1" + "2");//112
console.log("A" - "B" + "2");//NaN2
console.log("A" - "B" + 2);//NaN

// question no 2
console.log(0.1 + 0.2 === 0.3); // false

//question no 3
let a = {};
let b = { key: "b" };
let c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]); // 456

// question no 4
function foo() {
    return
    {
        name: "John"
    };
}
console.log(foo()); // undefined

// question 5
function sum(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log(sum(2)(3)(4)); // 9

// question no 8
console.log(typeof NaN); // "number"

// question no 9
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

console.log(isEmpty({})); // true
console.log(isEmpty({ a: 1 })); // false

// /question no  10
function test() {
    console.log(a);
    var a = 5;
    console.log(a);
}
test(); // 5

















 



