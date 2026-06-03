/*
========================================
SLIDING WINDOW (FIXED SIZE) PROBLEMS
========================================
*/

/*
1. Sum Of First K Elements

Return the sum of the first K elements.

Input:
arr = [1, 2, 3, 4, 5]
k = 3

Output:
6

Explanation:
1 + 2 + 3 = 6
*/

/*
2. Maximum Sum Of Size K

Find the maximum sum among
all subarrays of size K.

Input:
arr = [2, 1, 5, 1, 3, 2]
k = 3

Output:
9

Explanation:
[5,1,3] => 9
*/

/*
3. Minimum Sum Of Size K

Find the minimum sum among
all subarrays of size K.

Input:
arr = [2, 1, 5, 1, 3, 2]
k = 3

Output:
6

Explanation:
[2,1,3] or [1,3,2]
*/

/*
4. Average Of Every Window Size K

Return the average of every
contiguous subarray of size K.

Input:
arr = [1, 3, 2, 6, -1, 4, 1, 8, 2]
k = 5

Output:
[2.2, 2.8, 2.4, 3.6, 2.8]
*/

/*
5. Count Windows With Sum Greater Than X

Count the number of windows
whose sum is greater than X.

Input:
arr = [1, 2, 3, 4, 5]
k = 2
x = 5

Output:
3

Explanation:
[2,3], [3,4], [4,5]
*/

/*
6. First Negative In Every Window

Return the first negative number
in every window of size K.

Input:
arr = [12, -1, -7, 8, -15, 30, 16, 28]
k = 3

Output:
[-1, -1, -7, -15, -15, 0]

Explanation:
Return 0 if no negative exists.
*/

/*
7. Maximum Element In Every Window (Brute Force)

Find the maximum element
in every window of size K.

Input:
arr = [1, 3, -1, -3, 5, 3, 6, 7]
k = 3

Output:
[3, 3, 5, 5, 6, 7]
*/

/*
8. Count Vowels In Window

Given a string,
find the maximum number of vowels
in any substring of length K.

Input:
str = "abciiidef"
k = 3

Output:
3

Explanation:
"iii"
*/

/*
9. Sum Of All Windows

Return the sum of each window
of size K.

Input:
arr = [1, 2, 3, 4, 5]
k = 3

Output:
[6, 9, 12]

Explanation:
[1,2,3]
[2,3,4]
[3,4,5]
*/

/*
10. Window With Largest Average

Return the maximum average among
all windows of size K.

Input:
arr = [1, 12, -5, -6, 50, 3]
k = 4

Output:
12.75

Explanation:
[12,-5,-6,50]
Average = 12.75
*/

/*
========================================
BONUS PROBLEMS
========================================
*/

/*
11. Maximum Number Of Vowels In A Substring

Input:
"aeiouxyz"
k = 5

Output:
5
*/

/*
12. Distinct Elements In Every Window

Input:
arr = [1,2,1,3,4,2,3]
k = 4

Output:
[3,4,4,3]
*/

/*
13. Maximum Sum Subarray Of Size K

Input:
[100,200,300,400]
k = 2

Output:
700
*/

/*
14. Minimum Average Subarray Of Size K

Input:
[3,7,90,20,10,50,40]
k = 3

Output:
26.67
*/

/*
15. Sliding Window Maximum (Optimized)

Input:
[1,3,-1,-3,5,3,6,7]
k = 3

Output:
[3,3,5,5,6,7]

Constraint:
Solve using Deque.
*/