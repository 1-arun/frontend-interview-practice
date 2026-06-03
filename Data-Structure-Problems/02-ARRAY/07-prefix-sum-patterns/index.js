/*
========================================
PREFIX SUM PROBLEMS
========================================
*/

/*
1. Running Sum Array

Return the running sum of the array.

Input:
[1, 2, 3, 4]

Output:
[1, 3, 6, 10]

Explanation:
1
1+2
1+2+3
1+2+3+4
*/

/*
2. Prefix Sum Array

Construct and return the prefix sum array.

Input:
[2, 4, 6, 8]

Output:
[2, 6, 12, 20]

Explanation:
prefix[i] = sum of elements from 0 to i
*/

/*
3. Sum From L To R

Given indices L and R,
return the sum of elements between them.

Input:
arr = [1, 2, 3, 4, 5]
L = 1
R = 3

Output:
9

Explanation:
2 + 3 + 4 = 9
*/

/*
4. Range Sum Query

Answer multiple range sum queries efficiently.

Input:
arr = [1, 2, 3, 4, 5]

Queries:
[0,2]
[1,4]

Output:
[6, 14]

Explanation:
1+2+3 = 6
2+3+4+5 = 14
*/

/*
5. Total Sum Using Prefix

Find the total sum of the array
using the prefix sum array.

Input:
[5, 10, 15]

Output:
30
*/

/*
6. Find Index Where Left Sum = Right Sum

Return the pivot index where:

left sum == right sum

Input:
[1, 7, 3, 6, 5, 6]

Output:
3

Explanation:
Left Sum = 11
Right Sum = 11
*/

/*
7. Count Prefixes With Even Sum

Count how many prefixes
have an even sum.

Input:
[1, 2, 3, 4]

Prefix Sums:
1
3
6
10

Output:
2

Explanation:
6 and 10 are even.
*/

/*
8. Count Prefixes With Odd Sum

Count how many prefixes
have an odd sum.

Input:
[1, 2, 3, 4]

Prefix Sums:
1
3
6
10

Output:
2

Explanation:
1 and 3 are odd.
*/

/*
9. Maximum Prefix Sum

Return the maximum prefix sum.

Input:
[2, -1, 3, -2, 5]

Prefix:
2
1
4
2
7

Output:
7
*/

/*
10. Minimum Prefix Sum

Return the minimum prefix sum.

Input:
[2, -5, 3, -2, 5]

Prefix:
2
-3
0
-2
3

Output:
-3
*/

/*
========================================
BONUS PROBLEMS
========================================
*/

/*
11. Equilibrium Index

Find all indices where:

left sum = right sum

Input:
[1,3,5,2,2]

Output:
[2]
*/

/*
12. Subarray Sum Equals K

Count subarrays whose sum equals k.

Input:
arr = [1,1,1]
k = 2

Output:
2
*/

/*
13. Longest Subarray With Sum K

Input:
arr = [1,2,3,1,1,1,1]
k = 6

Output:
4
*/

/*
14. Count Subarrays With Equal 0s And 1s

Input:
[0,1,0,1,1]

Output:
4
*/

/*
15. Maximum Sum Subarray (Prefix Sum Approach)

Input:
[-2,1,-3,4,-1,2,1,-5,4]

Output:
6

Explanation:
[4,-1,2,1]
*/