/*
------------------------------------
Problem: Reverse a String without method approach 1
Input: "arun"
Output: "nura"
Approach:
1. Start from the last index.
2. Append each character to a new string.
3. Return the reversed string.
------------------------------------
*/

let str = "arun";
let reverseStr = "";

for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
}

// console.log(reverseStr);


// =========   approach 2 with method 

let val = "chauhan"
let result = str.split("").reverse().join("")
// console.log(result)


// approach 3 with reduce method 

let value = "arun"
let output = value.split("").reduce((acc, char) => char + acc, "")
console.log(output, ":reduce o/p")

// 