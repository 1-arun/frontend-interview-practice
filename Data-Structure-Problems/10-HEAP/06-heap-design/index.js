/*
=========================================
HEAP DESIGN PATTERN
(BEGINNER -> ADVANCED)
=========================================

1. Kth Largest Element in a Stream (#703)
-----------------------------------------
Difficulty: Easy

Pattern:
Heap Design

Problem:
Design a class that continuously receives
numbers and returns the kth largest element.

Why Learn:
- Easiest heap design problem.
- Learn maintaining heap state across calls.

Concepts:
✓ Min Heap
✓ Class Design
✓ Streaming Data

=========================================

2. Find Median from Data Stream (#295)
--------------------------------------
Difficulty: Hard

Pattern:
Two Heap Design

Problem:
Design a data structure supporting:
- addNum()
- findMedian()

Why Learn:
- Most famous heap design problem.
- Introduces balancing two heaps.

Concepts:
✓ Max Heap
✓ Min Heap
✓ Data Structure Design

=========================================

3. Design Twitter (#355)
------------------------
Difficulty: Medium

Pattern:
Heap + System Design

Problem:
Design a simplified Twitter supporting:
- Post Tweet
- Follow
- Unfollow
- News Feed

Why Learn:
- Merge multiple tweet streams.
- Real-world heap usage.

Concepts:
✓ Max Heap
✓ Feed Generation
✓ Data Structure Design

=========================================

4. Smallest Number in Infinite Set (#2336)
------------------------------------------
Difficulty: Medium

Pattern:
Heap Design

Problem:
Design an infinite set supporting:
- popSmallest()
- addBack(num)

Why Learn:
- Great heap implementation practice.
- Tests heap state management.

Concepts:
✓ Min Heap
✓ Hash Set
✓ Custom Design

=========================================

5. Seat Reservation Manager (#1845)
-----------------------------------
Difficulty: Medium

Pattern:
Heap Design

Problem:
Design a seat manager supporting:
- reserve()
- unreserve()

Always return the smallest available seat.

Why Learn:
- Very common heap design interview question.
- Clean implementation.

Concepts:
✓ Min Heap
✓ Design Pattern
✓ State Management

=========================================
LEARNING ORDER
=========================================

1. Kth Largest Element in a Stream (#703)
2. Seat Reservation Manager (#1845)
3. Smallest Number in Infinite Set (#2336)
4. Find Median from Data Stream (#295)
5. Design Twitter (#355)

=========================================
AFTER COMPLETING THESE
=========================================

Advanced Problems:
- Food Rating System (#2353)
- Design Movie Rental System (#1912)
- SOR Tracker (#2102)
- Number Container System (#2349)
- LFU Cache (#460)

=========================================
PATTERN RECOGNITION
=========================================

- Design a class using heap         -> Heap Design
- Repeated insert/remove operations -> Heap
- Return smallest available item    -> Min Heap
- Return largest/top item           -> Max Heap
- Stream of incoming data           -> Heap Design
- Need efficient retrieval          -> Heap

Core Idea:
Heap Design problems focus less on
algorithms and more on maintaining
heap state efficiently across multiple
function calls.
*/