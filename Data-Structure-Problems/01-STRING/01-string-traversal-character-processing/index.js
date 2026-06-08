/*
========================================
CHARACTER FREQUENCY & COUNTING PROBLEMS
========================================
*/
/*
1. Count Vowels In A String

Return the total number of vowels.

Input:
"frontend"

Output:
3

Explanation:
'o', 'e', 'e'
*/

// approach 1 without method
let str = "frontEnd";

let vowels = "aeiouAEIOU";
function countVowels(str) {
  count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      ((str[i] >= "a" && str[i] <= "z") || (str[i] >= "A" && str[i] <= "Z")) &&
      !vowels.includes(str[i])
    ) {
      count++;
    }
  }
  return count;
}
// console.log(countVowels(str))

/*
2. Count Consonants In A String

Return the total number of consonants.

Input:
"frontend"

Output:
5

Explanation:
'f', 'r', 'n', 't', 'n'
*/

// approach 1 without method
let strr = "frontEnd";

let vowel = "aeiouAEIOU";
function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      ((str[i] >= "a" && str[i] <= "z") || (str[i] >= "A" && str[i] <= "Z")) &&
      !vowel.includes(str[i])
    ) {
      count++;
    }
  }
  return count;
}
// console.log(countVowels(str))

/*
3. Count Uppercase Letters

Return the total number of uppercase letters.

Input:
"HelloWORLD"

Output:
6

Explanation:
H,W,O,R,L,D
*/

// we can solve this problems using regex, filter method, ascii/unique code method
let uppar = "HelloWORLD";
function countUpperCase(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      count++;
    }
  }
  return count;
}
// console.log(countUpperCase(uppar))

/*
4. Count Lowercase Letters

Return the total number of lowercase letters.

Input:
"HelloWORLD"

Output:
4

Explanation:
e,l,l,o
*/

let lower = "HelloWORLD";
function countLowerCase(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "a" && str[i] <= "z") {
      count++;
    }
  }
  return count;
}
// console.log(countLowerCase(lower))

/*
5. Count Digits In A String

Return the total number of digits.

Input:
"abc123xyz45"

Output:
5

Explanation:
1,2,3,4,5
*/
let countDigit = "abc123xyz45";
function countDigits(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 0 && str[i] <= 9) {
      count++;
    }
  }
  return count;
}
// console.log(countDigits(countDigit),":this much digits")
/*
6. Count Special Characters

Return the total number of special characters.

Input:
"hello@123#world!"

Output:
3

Explanation:
@,#,!
*/

// approach 1 using manual

let specialCharacter = "hello@123#world!";
function specialCharacters(str) {
  count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      !(
        (str[i] >= "0" && str[i] <= "9") ||
        (str[i] >= "a" && str[i] <= "z") ||
        (str[i] >= "A" && str[i] <= "Z")
      )
    ) {
      count++;
    }
  }
  return count;
}

// console.log(specialCharacters(specialCharacter))

// approach 2 with method

/*
7. Count Words In A Sentence

Return the total number of words.

Input:
"I love React JS"

Output:
4
*/

// approach 1 using split("") method
let countWord = "I love React JS";
function countWords(str) {
  let count = 0;
  str = str.split("  ");
  for (let i = 0; i < str.length; i++) {
    count++;
  }
  return count;
}
// console.log(countWords(countWord))

// approach 2 without split("") method
let countWordss = "I love React JS";
function countwords(str) {
  let isWords = false;
  let count = 0;
  for (let i = 0; i < countWordss.length; i++) {
    if (countWordss[i] !== " " && !isWords) {
      count++;
      isWords = true;
    }
    if (countWordss[i] === " ") {
      isWords = false;
    }
  }
  return count;
}
// console.log(countwords(countWordss))

// approach 3
let cou = "I love React JS";
function countWords(str) {
  return str.split(" ").length;
}
// console.log(countWords(cou), ":this o")

// approach 3 with regex

function countWords(str) {
  return str.trim().split(/\s+/).length;
}
//  console.log(countWords(" I Love   JS ARUN BHAI "))

/*
8. Find Frequency Of A Given Character

Return how many times the target character appears.

Input:
str = "banana"
char = "a"

Output:
3
*/
let char = "a";
function findFrequency(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}
// console.log(findFrequency("banana", char))

/*
9. Count Vowels (Case Insensitive)

Return the number of vowels regardless of case.

Input:
"AEiouxyz"

Output:
5
*/
let input = "AEouxyz";
function countVowels(str) {
  let count = 0;
  let vowels = "aeiou";
  str = str.toLowerCase().split("");
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
// console.log(countVowels(input));

/*
10. Count Words (Handle Extra Spaces)

Input:
"   I    love     React   "

Output:
3

Explanation:
Ignore extra spaces.
*/
// approache 1 with method
function countsWordsHandleSpaces(str) {
  return str.trim().split(/\s+/).length;
}
// console.log(countsWordsHandleSpaces("   I    love     React   "))

// approach without method
let extraSpaces = "   I    love     React   ";
function countWords(str) {
  let count = 0;
  let inWords = false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " " && !inWords) {
      count++;
      inWords = true;
    }
    if (str[i] === " ") {
      inWords = false;
    }
  }
  return count;
}
// console.log(countWords(extraSpaces))

/*
11. First Non-Repeating Character

Return the first character that appears only once.

Input:
"leetcode"

Output:
"l"
*/

function nonRepeating(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        count++;
      }
    }
    if (count === 1) {
      return str[i];
    }
  }
}
// console.log(nonRepeating("leetcode"))

// approach 2

function nonRepeatingg(str) {
  let freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (let char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }
}
// console.log(nonRepeatingg("aeetcode"))

/*
12. Character Frequency Map

Return frequency of every character.

Input:
"aabbbc"

Output:
{
  a: 2,
  b: 3,
  c: 1
}
*/
// approach 1
function freqofChar(str) {
  let freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
}
// console.log(freqofChar("aabbbc"))

// approach 2

function freqofChar(str) {
  let map = new map();
  for (let char of str) {
    map.set(char, map.get(char || 0 + 1));
  }

  for (let char of str) {
  }
}

/*
13. Most Frequent Character

Return the character with highest frequency.

Input:
"javascript"

Output:
"a"

Explanation:
'a' appears 2 times.
*/

// approach 1 without method 
function mostFreq(str) {
  let freq = {};
  let maxFreq = 0;
  let maxChar = "";
  for (let i = 0; i < str.length; i++) {
    freq[str[i]] = (freq[str[i]] || 0) + 1;

    if (freq[str[i]] > maxFreq) {
      maxFreq = freq[str[i]];
      maxChar = str[i];
    }
  }
  return maxChar;
}
// console.log(mostFreq("javascript"));

// approach 2 
function findFreqOfChar(str) {
  let freq = {}
 for(let char of str) {
  freq[char] = (freq[char] || 0) + 1
 }
 let maxFreq = 0
 let maxChar = ""
 for(let [key] in  freq) {
  if(freq[key] > maxFreq) {
    maxFreq = freq[key]
    maxChar = key
  }
 }
 return maxChar
}
console.log(findFreqOfChar("javascript"))

// approach 3 using map method 

function find(str) {
    let map = new Map()
    for(let char of str) {
        map.set(char, (map.get(char) || 0 ) + 1)
    }
    
    let maxFreq  = 0;
    let maxChar = ""
    for(let [key, value]  of map) {
        if(value > maxFreq) {
            maxFreq = value
            maxChar = key
        }
    }
    return maxChar;
}
// console.log(find("javascript"))

