# String Traversal — Character Counting Pattern

## Overview
This folder contains the first string traversal pattern: counting and classifying characters in a string using a single pass.

Use this pattern for problems like:
- counting vowels and consonants
- counting digits and special characters
- calculating character frequency
- handling word counts with extra spaces

## Files in this folder
- `index.js` — All examples, utility functions, and practice problems.

## How to run
From workspace root run:

```bash
node Data-Structure-Problems/01-STRING/01-string-traversal-character-processing/index.js
```

If needed, open `index.js` and add or uncomment `console.log(...)` lines for specific functions.

## Quick cheatsheet
- Pattern: traverse the string once and update counters or maps.
- Use when you need to count or classify characters.
- Common checks:
  - letter? `(ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')`
  - vowel? `aeiouAEIOU`.includes(ch)
  - digit? `ch >= '0' && ch <= '9'`
  - special character? not letter, not digit, and not space.
- Case-insensitive: use `str.toLowerCase()` when needed.

## Sample practice problem
Count these values in one traversal:
- vowels
- consonants
- digits
- special characters

Example:
Input: `"Hello123@ World!"`
Output:
```js
{
  vowels: 3,
  consonants: 7,
  digits: 3,
  specialChars: 3
}
```

## Revision plan
Review this pattern on a schedule:
- after 1 day
- after 3 days
- after 7 days
- after 30 days

For each review session:
1. Read this README and refresh the cheatsheet.
2. Run `node test.js` and check output.
3. Re-write one utility from memory.
4. Solve one related problem from the suggested list.

## Related problems to practice
- Count vowels and consonants with uppercase and lowercase.
- Count digits and special characters.
- First non-repeating character.
- Most frequent character.
- Count words when the string has extra spaces.

## Use this folder for beginners
1. Read `README.md` first.
2. Open `index.js` and understand the example functions.
3. Run `test.js` to verify the code.
4. Practice by writing one function again on your own.
5. Solve one related problem from the list above.

## Notes
- Keep only this README for documentation; the other markdown files are removed to avoid duplication.
- If you want, I can also update `test.js` with a new example for the practice problem above.
