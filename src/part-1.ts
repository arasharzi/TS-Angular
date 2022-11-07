// Reverse String
function reverseString(str: string)
{
    var result: string = ''
    for (var i = 0; i < str.length; i ++)
    {
        result = str.charAt(i) + result;
    }
    return result
}
console.log('------------Reverse String-----------')
console.log(reverseString('something') )

//  Fibonacci 
function fibonacci(num: number)
{
    var n1: number = 0
    var n2: number = 1
    var result: string = '0, 1'

    var next: number = n1 + n2
    while (next <= num)
    {
        result += ', ' + next.toString()
        n1 = n2
        n2 = next
        next = n1 + n2
    }
    return result
}
console.log('--------------Fibonacci--------------')
console.log(fibonacci(21))

// Palindrome of String / Number
function palindrome(str: string)
{
    var length: number = str.length / 2
    for (var i = 0; i < length; i++)
    {
        if (str.charAt(i) !== str.charAt(str.length - 1 - i))
        {
            return false;
        }
    }
    return true;    
}
console.log('----------Palindrome String----------')
console.log(palindrome('test'))
console.log(palindrome('noon'))

function palindromeNum(num: number)
{
    var str: string = num.toString()
    var length: number = str.length / 2
    for (var i = 0; i < length; i++)
    {
        if (str.charAt(i) !== str.charAt(str.length - 1 - i))
        {
            return false;
        }
    }
    return true; 
}
console.log('----------Palindrome Number----------')
console.log(palindrome('123321'))
console.log(palindrome('123'))

// Leap Year
function isLeapYear(num: number)
{
    if ((num % 4 == 0 && num % 100 != 0) || num % 400 == 0)
    {
        return true;
    }
    return false;
}
console.log('--------------Leap Year--------------')
console.log(isLeapYear(2022))
console.log(isLeapYear(2024))

// Prime Number
function isPrimeNumber(num: number)
{
    if (num < 2)
    {
        return false;
    }
    for (var i = 2; i < num; i++)
    {
        if (num % i == 0)
        {
            return false;
        }
    }
    return true;
}
console.log('-------------Prime Number------------')
console.log(isPrimeNumber(100))
console.log(isPrimeNumber(97))