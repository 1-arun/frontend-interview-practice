/*
========================================
ANAGRAM PROBLEMS
========================================
*/

/*
1. Valid Anagram

Check whether two strings are anagrams.

Two strings are anagrams if they contain
the same characters with the same frequencies.

Input:
s = "listen"
t = "silent"

Output:
true

Input:
s = "rat"
t = "car"

Output:
false
*/

/*
2. Group Anagrams

Group all strings that are anagrams
of each other.

Input:
["eat","tea","tan","ate","nat","bat"]

Output:
[
  ["eat","tea","ate"],
  ["tan","nat"],
  ["bat"]
]

Explanation:
Each group contains words that are anagrams.
*/

/*
3. Count Anagram Pairs

Count the number of anagram pairs
present in the array.

Input:
["eat","tea","tan","ate","nat","bat"]

Output:
4

Explanation:
Pairs:
(eat, tea)
(eat, ate)
(tea, ate)
(tan, nat)
*/

/*
4. Find All Anagrams In A String

Find all starting indices of p's anagrams in s.

Input:
s = "cbaebabacd"
p = "abc"

Output:
[0, 6]

Explanation:
Substring at index 0 -> "cba"
Substring at index 6 -> "bac"

Both are anagrams of "abc".
*/

/*
5. Minimum Steps To Make Anagram

Return the minimum number of character
replacements needed to make t an anagram of s.

Input:
s = "bab"
t = "aba"

Output:
1

Explanation:
Replace one character in t.
*/

/*
========================================
BONUS PROBLEMS
========================================
*/

/*
6. Anagram Substring Search

Check if any substring of s
is an anagram of p.

Input:
s = "oidbcaf"
p = "abc"

Output:
true

Explanation:
"bca" exists in s.
*/

/*
7. Sort Array Of Strings By Anagram Groups

Input:
["eat","tea","tan","ate","nat","bat"]

Output:
[
  "eat",
  "tea",
  "ate",
  "tan",
  "nat",
  "bat"
]

Explanation:
Anagrams appear together.
*/

/*
8. Check K-Anagrams

Two strings are K-anagrams if they can become
anagrams after changing at most k characters.

Input:
s = "anagram"
t = "grammar"
k = 3

Output:
true
*/

/*
9. Remove Anagrams From Array

Remove consecutive anagrams.

Input:
["abba","baba","bbaa","cd","cd"]

Output:
["abba","cd"]
*/

/*
10. Count Distinct Anagram Groups

Return the total number of unique
anagram groups.

Input:
["eat","tea","tan","ate","nat","bat"]

Output:
3

Explanation:
Groups:
["eat","tea","ate"]
["tan","nat"]
["bat"]
*/