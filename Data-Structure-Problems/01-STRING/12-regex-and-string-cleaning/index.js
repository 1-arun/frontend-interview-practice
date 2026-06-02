/*
========================================
REGEX & STRING CLEANING PROBLEMS
========================================
*/

/*
1. Remove All Special Characters

Remove everything except alphabets and numbers.

Input:
"hello@123#world!"

Output:
"hello123world"

Hint:
Use regex.
*/

/*
2. Remove Extra Spaces

Remove leading/trailing spaces and
convert multiple spaces into a single space.

Input:
"   hello     world    react   "

Output:
"hello world react"

Hint:
Regex + trim()
*/

/*
3. Extract All Numbers From String

Return all numbers present in the string.

Input:
"My age is 25 and salary is 50000"

Output:
["25", "50000"]

Bonus:
Return [25, 50000]
*/

/*
4. Validate Email Address

Check whether a string is a valid email.

Input:
"john@gmail.com"

Output:
true

Input:
"john@gmail"

Output:
false

Hint:
Use regex pattern matching.
*/

/*
5. Convert String To URL Slug

Convert text into URL-friendly format.

Rules:
- Lowercase everything
- Remove special characters
- Replace spaces with '-'

Input:
"Frontend Developer Interview Guide!"

Output:
"frontend-developer-interview-guide"

Hint:
trim()
toLowerCase()
regex
replace()
*/

/*
========================================
BONUS PROBLEMS
========================================
*/

/*
6. Remove Duplicate Spaces And Newlines

Input:
"Hello\n\n\nWorld     React"

Output:
"Hello World React"
*/

/*
7. Extract Hashtags

Input:
"I love #javascript and #react"

Output:
["javascript", "react"]
*/

/*
8. Extract Mentions

Input:
"Hello @john and @alex"

Output:
["john", "alex"]
*/

/*
9. Mask Credit Card Number

Input:
"1234567812345678"

Output:
"************5678"
*/

/*
10. Remove HTML Tags

Input:
"<h1>Hello</h1><p>World</p>"

Output:
"HelloWorld"

Bonus:
"Hello World"
*/