/*
=========================================
RUNNING MEDIAN PATTERN
(BEGINNER -> ADVANCED)
=========================================

1. Find Median from Data Stream (#295)
--------------------------------------
Difficulty: Hard

Pattern:
Two Heaps

Problem:
Design a data structure that supports:
- addNum(num)
- findMedian()

Why Learn:
- Core problem of this pattern.
- Introduces Max Heap + Min Heap.

Concepts:
✓ Two Heaps
✓ Running Median
✓ Stream Processing

=========================================

2. Sliding Window Median (#480)
-------------------------------
Difficulty: Hard

Pattern:
Running Median + Sliding Window

Problem:
Find the median of every sliding window
of size k.

Why Learn:
- Extension of Data Stream Median.
- Very common follow-up interview question.

Concepts:
✓ Two Heaps
✓ Lazy Deletion
✓ Sliding Window

=========================================

3. Kth Largest Element in a Stream (#703)
-----------------------------------------
Difficulty: Easy

Pattern:
Streaming Data

Problem:
Continuously add numbers and return the
kth largest element after each insertion.

Why Learn:
- Beginner stream-processing problem.
- Helps understand dynamic heap updates.

Concepts:
✓ Min Heap
✓ Data Stream
✓ Dynamic Updates

=========================================

4. Top K Frequent Elements (#347)
---------------------------------
Difficulty: Medium

Pattern:
Heap on Streaming Data

Problem:
Find the k most frequent elements.

Why Learn:
- Learn maintaining top-k results while
  processing data.

Concepts:
✓ Frequency Map
✓ Heap
✓ Top K Pattern

=========================================

5. Number of Recent Calls (#933)
--------------------------------
Difficulty: Easy

Pattern:
Real-Time Stream Processing

Problem:
Count recent requests within the last
3000 milliseconds.

Why Learn:
- Builds stream-processing intuition.
- Easier preparation before advanced
  running median problems.

Concepts:
✓ Queue
✓ Stream Processing
✓ Window Maintenance

=========================================
LEARNING ORDER
=========================================

1. Number of Recent Calls (#933)
2. Kth Largest Element in a Stream (#703)
3. Top K Frequent Elements (#347)
4. Find Median from Data Stream (#295)
5. Sliding Window Median (#480)

=========================================
PATTERN RECOGNITION
=========================================

- Median after every insertion  -> Two Heaps
- Running median               -> Max Heap + Min Heap
- Continuous data stream       -> Heap
- Dynamic insertions           -> Heap
- Median in sliding window     -> Two Heaps
- Balance smaller/larger half  -> Two Heaps

Core Idea:
Maintain:
- Max Heap for left half
- Min Heap for right half

Keep both heaps balanced so median can
be found in O(1) time.
*/