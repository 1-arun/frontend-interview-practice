/*
------------------------------------
Problem: Reverse Each Word in a Sentence
Input: "arun chauhan"
Output: "nura nahuahc"

Approach:
1. Traverse the entire string.
2. Store characters of the current word.
3. When a space or end of string is found:
   - Reverse the stored word.
   - Append it to the result.
4. Reset the word variable.
5. Repeat until the string ends.

Time Complexity: O(n)
Space Complexity: O(n)
------------------------------------
*/


let str = "hello world"
let word = ""
let result = ""

for(let i = 0;   i <= str.length; i++){

    if(str[i] !== " " && i < str.length) {
        word += str[i]
    } else {
        let reverseWord = ""
        for(let j = word.length - 1; j >=0; j--){
            reverseWord += word[j]
        }
        result += reverseWord + " "
        word = ""

    }

}
// console.log(result.trim())


let strr = "hello world"

let resultt = strr.split(" ").map((word) => word.split("").reverse().join("")).join(" ")
console.log(word)
// console.log(resultt)




