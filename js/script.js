'use strict';

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str){
    return str.split(' ')
            .map(word => /^[a-zA-Z0-9]+$/.test(word) ? word.slice(1) + word.slice(0, 1) + 'ay': word)
            .join(' ');    
}

console.log(pigIt('O Hello world !'));

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
// Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(integers){
    let filter1 = integers.filter((item) => {
        return item % 2 === 0;
    }),
        filter2 = integers.filter((item) => {
            return item % 2 !== 0;
        });

    return (filter1.length === 1) ? filter1[0]: filter2[0];
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));


// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

function order(words){
    let rightWords = [];
    words.split(' ')
        .map(word => {
            rightWords[word[word.search(/\d/)]] = word;
        });
    return rightWords.join(' ').slice(1);   
}

console.log(order("is2 Thi1s T4est 3a"));

// function order(words){
//     return words.split(' ').sort(function(a, b){
//         return a.match(/\d/) - b.match(/\d/);
//      }).join(' ');
// }    



// // Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

// // Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. 
// So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). 
// The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

function solution (roman) {
    let obj = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000,
    };
    return roman.split('')
                .map((item, i, arr) => {
                    if (item + arr[i + 1] == 'IV') { 
                        item = item + arr[i + 1]; 
                        arr.splice(arr[i + 1], 1);
                        return item;
                    } if (item + arr[i + 1] == 'IX') {
                        item = item + arr[i + 1]; 
                        arr.splice(arr[i + 1], 1);
                        return item;
                    } if (item + arr[i + 1] == 'CD') {
                        item = item + arr[i + 1]; 
                        arr.splice(arr[i + 1], 1);
                        return item;
                    } if (item + arr[i + 1] == 'XL') {
                        item = item + arr[i + 1]; 
                        arr.splice(arr[i + 1], 1);
                        return item;
                    } if (item + arr[i + 1] == 'XC') {
                        item = item + arr[i + 1]; 
                        arr.splice(arr[i + 1], 1);
                        return item;
                    } if (item + arr[i + 1] == 'CM') {
                        item = item + arr[i + 1]; 
                        arr.splice(arr[i + 1], 1);
                        return item;
                    } else {
                        return item;
                    }
                })
                .reduce((sum, letter) => {
                    return sum + obj[letter];
                }, 0);
  }

  console.log(solution('MMCXCV'));


//   Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. 
// The function should return true if the string is valid, and false if it's invalid.

//   Examples
//   "()"              =>  true
//   ")(()))"          =>  false
//   "("               =>  false
//   "(())((()())())"  =>  true

  function validParentheses(parens) {
    if (parens[0] == ')' || parens.at(-1) == '(') {
        return false;
    }
    if (parens[0] + parens[1] == '()' && parens[2] == ')') {
        return false;
    }
    let filter1 = parens.split('')
            .filter(item => item == '(');
    console.log(filter1);
    let filter2 = parens.split('')
            .filter(item => item == ')');
    console.log(filter2);

    return (filter1.length == filter2.length) ? true: false;
  }

  console.log(validParentheses("())(()"));


// Create a function that takes a string and returns the string ciphered with Rot13.
// If there are numbers or special characters included in the string, they should be returned as they are. 
// Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".



  function rot13(message){
    let result = '',
        lowerMessage = message.toLowerCase();
    for (let i = 0; i < lowerMessage.length; i++) {
        if (/^[a-zA-Z0-9]+$/.test(lowerMessage[i])) {
            result += String.fromCharCode(lowerMessage.charCodeAt(i) + 13);
            continue;
        }
        result += lowerMessage[i];
    }
    return result;
  }

  console.log(rot13('test'));

  