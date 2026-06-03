/*
========================================
SUBARRAY PROBLEMS
========================================
*/

/*
1. Print All Subarrays

Print all possible contiguous subarrays.

Input:
[1, 2, 3]

Output:
[
  [1],
  [1,2],
  [1,2,3],
  [2],
  [2,3],
  [3]
]

Explanation:
A subarray must be contiguous.
*/

/*
2. Count All Subarrays

Return the total number of subarrays.

Input:
[1, 2, 3]

Output:
6

Explanation:
[1]
[1,2]
[1,2,3]
[2]
[2,3]
[3]

Formula:
n * (n + 1) / 2
*/

/*
3. Sum Of Every Subarray

Return the sum of each subarray.

Input:
[1, 2, 3]

Output:
[
  1,
  3,
  6,
  2,
  5,
  3
]
*/

/*
4. Largest Subarray Sum (Brute Force)

Find the maximum subarray sum.

Input:
[-2,1,-3,4,-1,2,1,-5,4]

Output:
6

Explanation:
[4,-1,2,1]
Sum = 6
*/

/*
5. Smallest Subarray Sum

Find the minimum subarray sum.

Input:
[3,-4,2,-3,-1,7,-5]

Output:
-6

Explanation:
[-4,2,-3,-1]
*/

/*
6. Count Subarrays With Even Sum

Return the number of subarrays
whose sum is even.

Input:
[1, 2, 3]

Output:
2

Explanation:
[2]
[1,2,3]
*/

/*
7. Count Subarrays With Odd Sum

Return the number of subarrays
whose sum is odd.

Input:
[1, 2, 3]

Output:
4
*/

/*
8. Maximum Length Subarray

Return the length of the longest subarray.

Input:
[1, 2, 3, 4]

Output:
4

Explanation:
The entire array is the longest subarray.
*/

/*
9. Minimum Length Subarray

Return the length of the smallest subarray.

Input:
[1, 2, 3, 4]

Output:
1

Explanation:
Any single element forms a valid subarray.
*/

/*
10. Subarray With Target Sum

Return any subarray whose sum equals target.

Input:
arr = [1, 2, 3, 7, 5]
target = 12

Output:
[2,3,7]

Explanation:
2 + 3 + 7 = 12
*/

/*
========================================
BONUS PROBLEMS
========================================
*/

/*
11. Count Subarrays With Sum K

Input:
arr = [1,1,1]
k = 2

Output:
2
*/

/*
12. Longest Subarray With Sum K

Input:
arr = [1,2,3,1,1,1,1]
k = 6

Output:
4

Explanation:
[3,1,1,1]
*/

/*
13. Shortest Subarray With Sum At Least K

Input:
arr = [2,3,1,2,4,3]
k = 7

Output:
2

Explanation:
[4,3]
*/

/*
14. Maximum Product Subarray

Input:
[2,3,-2,4]

Output:
6

Explanation:
[2,3]
*/

/*
15. Kadane's Algorithm

Find maximum subarray sum
in O(n).

Input:
[-2,1,-3,4,-1,2,1,-5,4]

Output:
6
*/