/*
=========================================
PRIORITY QUEUE SCHEDULING PATTERN
(BEGINNER -> ADVANCED)
=========================================

1. Last Stone Weight (#1046)
----------------------------
Difficulty: Easy

Pattern:
Max Heap

Problem:
Repeatedly remove the two largest stones.
If they are different, push back the difference.

Why Learn:
- Simplest heap scheduling problem.
- Learn heap push and pop operations.

Concepts:
✓ Max Heap Basics
✓ Priority Processing

=========================================

2. Kth Largest Element in an Array (#215)
-----------------------------------------
Difficulty: Medium

Pattern:
Min Heap

Problem:
Find the kth largest element in an array.

Why Learn:
- Learn maintaining top-k elements.
- Strong foundation for heap questions.

Concepts:
✓ Min Heap
✓ Heap Size Control
✓ Top K Pattern

=========================================

3. Meeting Rooms II (#253)
--------------------------
Difficulty: Medium

Pattern:
Min Heap Scheduling

Problem:
Find the minimum number of meeting rooms
required to schedule all meetings.

Why Learn:
- First real scheduling problem.
- Learn resource allocation using heaps.

Concepts:
✓ Scheduling
✓ Resource Allocation
✓ Min Heap

=========================================

4. Task Scheduler (#621)
------------------------
Difficulty: Medium

Pattern:
Max Heap Scheduling

Problem:
Schedule tasks with cooldown period n.

Why Learn:
- Learn how priority changes over time.
- Classic interview scheduling problem.

Concepts:
✓ Frequency Counting
✓ Max Heap
✓ Greedy Scheduling

=========================================

5. Single-Threaded CPU (#1834)
------------------------------
Difficulty: Medium

Pattern:
Arrival Time + Min Heap

Problem:
Process tasks according to CPU rules and
return execution order.

Why Learn:
- Most important scheduling problem.
- Introduces event simulation.

Concepts:
✓ Job Scheduling
✓ Event Simulation
✓ Min Heap

=========================================

LEARNING ORDER
=========================================

1. Last Stone Weight (#1046)
2. Kth Largest Element in an Array (#215)
3. Meeting Rooms II (#253)
4. Task Scheduler (#621)
5. Single-Threaded CPU (#1834)

=========================================
AFTER COMPLETING THESE
=========================================

Advanced Problems:
- Process Tasks Using Servers (#1882)
- IPO (#502)
- Meeting Rooms III (#2402)
- Maximum Performance of a Team (#1383)

=========================================
PATTERN RECOGNITION
=========================================

- Highest priority item      -> Max Heap
- Smallest/earliest item     -> Min Heap
- CPU scheduling             -> Heap
- Meeting room allocation    -> Heap
- Dynamic task assignment    -> Heap
- Available vs busy workers  -> Two Heaps
*/