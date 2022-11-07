"use strict";
function reverseString(str) {
    var result = '';
    for (var i = 0; i < str.length; i++) {
        result = str.charAt(i) + result;
    }
    return result;
}
console.log('------------Reverse String-----------');
console.log(reverseString('something'));
function fibonacci(num) {
    var n1 = 0;
    var n2 = 1;
    var result = '0, 1';
    var next = n1 + n2;
    while (next <= num) {
        result += ', ' + next.toString();
        n1 = n2;
        n2 = next;
        next = n1 + n2;
    }
    return result;
}
console.log('--------------Fibonacci--------------');
console.log(fibonacci(21));
function palindrome(str) {
    var length = str.length / 2;
    for (var i = 0; i < length; i++) {
        if (str.charAt(i) !== str.charAt(str.length - 1 - i)) {
            return false;
        }
    }
    return true;
}
console.log('----------Palindrome String----------');
console.log(palindrome('test'));
console.log(palindrome('noon'));
function palindromeNum(num) {
    var str = num.toString();
    var length = str.length / 2;
    for (var i = 0; i < length; i++) {
        if (str.charAt(i) !== str.charAt(str.length - 1 - i)) {
            return false;
        }
    }
    return true;
}
console.log('----------Palindrome Number----------');
console.log(palindrome('123321'));
console.log(palindrome('123'));
function isLeapYear(num) {
    if ((num % 4 == 0 && num % 100 != 0) || num % 400 == 0) {
        return true;
    }
    return false;
}
console.log('--------------Leap Year--------------');
console.log(isLeapYear(2022));
console.log(isLeapYear(2024));
function isPrimeNumber(num) {
    if (num < 2) {
        return false;
    }
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
console.log('-------------Prime Number------------');
console.log(isPrimeNumber(100));
console.log(isPrimeNumber(97));
//# sourceMappingURL=sample.js.map