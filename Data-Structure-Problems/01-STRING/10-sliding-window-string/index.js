/*
========================================
SLIDING WINDOW STRING PROBLEMS
========================================
*/

/*
1. Longest Substring Without Repeating Characters

Given a string s, find the length of the longest
substring without repeating characters.

Input:
"abcabcbb"

Output:
3

Explanation:
"abc" is the longest substring without repeating characters.
*/

/*
2. Longest Substring With K Unique Characters

Given a string s and an integer k,
find the length of the longest substring
that contains exactly k unique characters.

Input:
s = "aabacbebebe"
k = 3

Output:
7

Explanation:
"cbebebe" contains exactly 3 unique characters.
*/

/*
3. Minimum Window Substring

Given two strings s and t,
return the smallest substring of s
that contains all characters of t.

Input:
s = "ADOBECODEBANC"
t = "ABC"

Output:
"BANC"

Explanation:
"BANC" contains A, B and C.
*/

/*
4. Longest Repeating Character Replacement

You can replace at most k characters.

Find the length of the longest substring
containing the same character after replacement.

Input:
s = "AABABBA"
k = 1

Output:
4

Explanation:
Replace one 'A' with 'B'

"AABBBBA"

Longest repeating substring length = 4
*/

/*
5. Permutation In String

Given strings s1 and s2,
return true if s2 contains a permutation of s1.

Input:
s1 = "ab"
s2 = "eidbaooo"

Output:
true

Explanation:
"ba" is a permutation of "ab".
*/

/*
========================================
BONUS SLIDING WINDOW PROBLEMS
========================================
*/

/*
6. Find All Anagrams In A String

Find all starting indices of p's anagrams in s.

Input:
s = "cbaebabacd"
p = "abc"

Output:
[0, 6]

Explanation:
"cba" and "bac" are anagrams of "abc".
*/

/*
7. Maximum Number Of Vowels In A Substring

Given a string s and integer k,
return the maximum number of vowels
in any substring of length k.

Input:
s = "abciiidef"
k = 3

Output:
3

Explanation:
"iii" contains 3 vowels.
*/

/*
8. Longest Substring With At Most K Distinct Characters

Find the length of the longest substring
containing at most k distinct characters.

Input:
s = "eceba"
k = 2

Output:
3

Explanation:
"ece"
*/

/*
9. Minimum Size Subarray Sum (String Version)

Given a string and target frequency,
find the smallest substring satisfying the condition.

Example:
Find smallest substring containing:
2 x 'a'
1 x 'b'

Input:
"aabdecaa"

Output:
"aab"
*/


/*
10. Longest Substring After At Most K Replacements

Similar to Character Replacement
but works for any characters.

Input:
s = "abbcb"
k = 1

Output:
4

Explanation:
Replace one character to make
"bbbb"
*/