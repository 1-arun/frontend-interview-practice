/*
========================================
STRING COMPRESSION / ENCODING PROBLEMS
========================================
*/

/*
1. Basic String Compression

Given a string, compress consecutive repeating characters
by replacing them with character + count.

Input:
"aaabbcc"

Output:
"a3b2c2"
*/

/*
2. Compress Only If Smaller

Compress the string using character + count.
Return the original string if the compressed string
is not shorter.

Input:
"aaabbcc"

Output:
"a3b2c2"

Input:
"abcd"

Output:
"abcd"
*/

/*
3. Run Length Decoding

Given an encoded string, decode it.

Input:
"a3b2c4"

Output:
"aaabbcccc"

Input:
"x5y1"

Output:
"xxxxxy"
*/

/*
4. Encode Consecutive Words

Compress repeated consecutive words.

Input:
"dog dog dog cat cat bird"

Output:
"dog3 cat2 bird1"

Input:
"hi hi hello hello hello"

Output:
"hi2 hello3"
*/

/*
5. Decode Nested Encoded String

Rule:
k[encoded_string]

means repeat encoded_string k times.

Input:
"3[a]"

Output:
"aaa"

Input:
"3[a2[b]]"

Output:
"abbabbabb"
*/

/*
========================================
BONUS
========================================
*/

/*
6. In-Place String Compression

Input:
["a","a","b","b","c","c","c"]

Output:
["a","2","b","2","c","3"]

Return new length as well.
*/

/*
7. Count And Say

1 -> "1"
2 -> "11"
3 -> "21"
4 -> "1211"
5 -> "111221"

Input:
4

Output:
"1211"
*/

/*
8. String Decompression With Multi-Digit Counts

Input:
"a12b3"

Output:
"aaaaaaaaaaaabbb"
*/

/*
9. Mixed Character Compression

Input:
"aa11bbb22"

Output:
"a212b322"

(Compress consecutive occurrences of any character)
*/

/*
10. Design Encode/Decode Utility

Implement:

encode(str)
decode(str)

Example:

encode("aaabb")
=> "a3b2"

decode("a3b2")
=> "aaabb"
*/