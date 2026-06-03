/*
=========================================
HEAP + GREEDY PATTERN
(BEGINNER -> ADVANCED)
=========================================

1. Maximum Units on a Truck (#1710)
-----------------------------------
Difficulty: Easy

Pattern:
Greedy

Problem:
Choose boxes to maximize total units that
can be loaded onto a truck.

Why Learn:
- Pure greedy foundation.
- Learn how greedy decisions work.

Concepts:
✓ Greedy Selection
✓ Sorting

=========================================

2. Last Stone Weight (#1046)
----------------------------
Difficulty: Easy

Pattern:
Heap + Greedy

Problem:
Repeatedly remove the two largest stones.
If they are different, push back the difference.

Why Learn:
- First Heap + Greedy problem.
- Learn selecting the best candidate repeatedly.

Concepts:
✓ Max Heap
✓ Greedy Choice

=========================================

3. Reorganize String (#767)
---------------------------
Difficulty: Medium

Pattern:
Max Heap + Greedy

Problem:
Rearrange characters so that no two adjacent
characters are the same.

Why Learn:
- Classic Heap + Greedy interview problem.
- Learn frequency-based scheduling.

Concepts:
✓ Max Heap
✓ Frequency Counting
✓ Greedy Placement

=========================================

4. Task Scheduler (#621)
------------------------
Difficulty: Medium

Pattern:
Heap + Greedy Scheduling

Problem:
Schedule tasks with cooldown period n.

Why Learn:
- One of the most asked heap problems.
- Learn dynamic priority handling.

Concepts:
✓ Max Heap
✓ Greedy Scheduling
✓ Frequency Management

=========================================

5. IPO (#502)
-------------
Difficulty: Medium

Pattern:
Heap + Greedy Optimization

Problem:
Choose at most k projects to maximize
final capital.

Why Learn:
- Most important Heap + Greedy problem.
- Frequently asked in interviews.

Concepts:
✓ Max Heap
✓ Greedy Selection
✓ Optimization

=========================================
LEARNING ORDER
=========================================

1. Maximum Units on a Truck (#1710)
2. Last Stone Weight (#1046)
3. Reorganize String (#767)
4. Task Scheduler (#621)
5. IPO (#502)

=========================================
AFTER COMPLETING THESE
=========================================

Advanced Problems:
- Furthest Building You Can Reach (#1642)
- Maximum Performance of a Team (#1383)
- Course Schedule III (#630)
- Minimum Refueling Stops (#871)
- Meeting Rooms III (#2402)

=========================================
PATTERN RECOGNITION
=========================================

- Repeatedly choose best option      -> Heap
- Need maximum profit/reward         -> Max Heap
- Need minimum cost/resource         -> Min Heap
- Best choice at every step          -> Greedy
- Dynamic priorities                 -> Heap + Greedy
- Optimization under constraints     -> Heap + Greedy

Core Idea:
At every step:
1. Make the best local choice (Greedy)
2. Use Heap to quickly find that choice

This combination appears in many
Google, Amazon, Microsoft, Uber,
and Atlassian interview questions.
*/