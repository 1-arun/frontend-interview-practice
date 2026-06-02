/*
------------------------------------
Problem: Reverse Word Order in a Sentence
Input: "arun chauhan"
Output: "chauhan arun"

Approach:
1. Split the string into an array of words.
   ["arun", "chauhan"]

2. Create an empty string to store the result.

3. Start looping from the last index of the words array.

4. Append each word followed by a space to the result string.

5. Return the final string after removing the extra space.

Time Complexity: O(n)
Space Complexity: O(n)
------------------------------------
*/


let str = "arun chauhan";

let word = str.split(" ");

let revStr = "";
function foo(str) {
  for (let i = word.length - 1; i >= 0; i--) {
    revStr += word[i] + " ";
  }
  return revStr;
}
// console.log(foo(str));

/*
------------------------------------
Problem: Reverse Word Order using Reduce
Input: "arun chauhan"
Output: "chauhan arun"

Approach:
1. Split the sentence into an array of words.
   ["arun", "chauhan"]

2. Use reduce() to build the result from right to left.

3. For each word:
   - Place the current word before the accumulator.

4. Return the final reversed sentence.

Time Complexity: O(n)
Space Complexity: O(n)
------------------------------------
*/


// approach 2 with reduce method 

let strr = "arun chauhan"
let result = strr.split("").reduce((acc, char) => char + " " + acc, " ")
console.log(result)


