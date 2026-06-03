/*
=========================================
MERGE K SORTED PATTERN
(BEGINNER -> ADVANCED)
=========================================

1. Merge Two Sorted Lists (#21)
-------------------------------
Difficulty: Easy

Pattern:
Basic Merge

Problem:
Merge two sorted linked lists and return
a single sorted linked list.

Why Learn:
- Learn the core merge process.
- Foundation for all merge problems.

Concepts:
✓ Two Pointers
✓ Sorted Merge

=========================================

2. Merge Sorted Array (#88)
---------------------------
Difficulty: Easy

Pattern:
Array Merge

Problem:
Merge two sorted arrays into one sorted array.

Why Learn:
- Simplest array merging problem.
- Builds merge intuition.

Concepts:
✓ Two Pointers
✓ Sorted Arrays

=========================================

3. Merge k Sorted Lists (#23)
-----------------------------
Difficulty: Hard

Pattern:
K-Way Merge using Min Heap

Problem:
Merge k sorted linked lists into one
sorted linked list.

Why Learn:
- Core problem of this pattern.
- Introduces Min Heap merging.

Concepts:
✓ Min Heap
✓ K-Way Merge
✓ Linked Lists

=========================================

4. Kth Smallest Element in a Sorted Matrix (#378)
------------------------------------------------
Difficulty: Medium

Pattern:
K-Way Merge

Problem:
Find the kth smallest element in a matrix
where rows and columns are sorted.

Why Learn:
- Same merge-k-sorted logic.
- Very common interview question.

Concepts:
✓ Min Heap
✓ K-Way Merge
✓ Matrix Traversal

=========================================

5. Find K Pairs with Smallest Sums (#373)
-----------------------------------------
Difficulty: Medium

Pattern:
K-Way Merge

Problem:
Find k pairs with the smallest sums from
two sorted arrays.

Why Learn:
- Advanced application of merge pattern.
- Frequently asked heap problem.

Concepts:
✓ Min Heap
✓ Pair Generation
✓ K-Way Merge

=========================================
LEARNING ORDER
=========================================

1. Merge Two Sorted Lists (#21)
2. Merge Sorted Array (#88)
3. Merge k Sorted Lists (#23)
4. Kth Smallest Element in a Sorted Matrix (#378)
5. Find K Pairs with Smallest Sums (#373)

=========================================
PATTERN RECOGNITION
=========================================

- Multiple sorted lists       -> K-Way Merge
- Merge k arrays/lists        -> Min Heap
- Kth smallest in sorted rows -> K-Way Merge
- Smallest pairs/combinations -> Min Heap
- Need smallest among k heads -> Min Heap

Core Idea:
Keep the smallest element from each sorted
source inside a Min Heap and repeatedly
extract the minimum.
*/