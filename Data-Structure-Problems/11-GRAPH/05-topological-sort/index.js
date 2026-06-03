/*
=========================================
TOPOLOGICAL SORT PATTERN
(BEGINNER -> ADVANCED)
=========================================

1. Course Schedule (#207)
-------------------------
Difficulty: Medium

Pattern:
Topological Sort (Kahn's Algorithm)

Problem:
Determine if it is possible to finish
all courses given prerequisite pairs.

Why Learn:
- Simplest topological sort problem.
- Learn indegree calculation.

Concepts:
✓ Topological Sort
✓ BFS
✓ Indegree Array

=========================================

2. Course Schedule II (#210)
----------------------------
Difficulty: Medium

Pattern:
Topological Sort

Problem:
Return a valid order in which all courses
can be completed.

Why Learn:
- Extension of Course Schedule.
- Learn how to build topo ordering.

Concepts:
✓ Topological Sort
✓ BFS
✓ Ordering

=========================================

3. Find Eventual Safe States (#802)
-----------------------------------
Difficulty: Medium

Pattern:
Reverse Topological Sort

Problem:
Find all nodes that eventually lead to
terminal nodes.

Why Learn:
- Different application of topo sort.
- Frequently asked graph problem.

Concepts:
✓ Topological Sort
✓ Reverse Graph
✓ BFS

=========================================

4. Parallel Courses (#1136)
---------------------------
Difficulty: Medium

Pattern:
Level Order Topological Sort

Problem:
Find minimum semesters required to
complete all courses.

Why Learn:
- Learn processing graph level by level.

Concepts:
✓ Topological Sort
✓ BFS Levels
✓ DAG

=========================================

5. Alien Dictionary (#269)
--------------------------
Difficulty: Hard

Pattern:
Topological Ordering

Problem:
Given words sorted in an alien language,
determine the character order.

Why Learn:
- Most famous topological sort interview
  problem.

Concepts:
✓ Graph Construction
✓ Topological Sort
✓ DAG

=========================================
LEARNING ORDER
=========================================

1. Course Schedule (#207)
2. Course Schedule II (#210)
3. Parallel Courses (#1136)
4. Find Eventual Safe States (#802)
5. Alien Dictionary (#269)

=========================================
AFTER COMPLETING THESE
=========================================

Advanced Problems:
- Sequence Reconstruction (#444)
- Sort Items by Groups Respecting
  Dependencies (#1203)
- Build a Matrix With Conditions (#2392)
- Minimum Height Trees (#310)
- Largest Color Value in a Directed Graph (#1857)

=========================================
PATTERN RECOGNITION
=========================================

- Prerequisites                -> Topological Sort
- Dependency Graph             -> Topological Sort
- Task Ordering                -> Topological Sort
- Build Order                  -> Topological Sort
- Course Dependencies          -> Topological Sort
- Directed Acyclic Graph (DAG) -> Topological Sort

Core Idea:
1. Calculate indegree of every node.
2. Push nodes with indegree 0 into queue.
3. Remove node from queue.
4. Reduce indegree of neighbors.
5. If indegree becomes 0, add to queue.
6. Continue until queue becomes empty.

Template:
- Build Graph
- Calculate Indegree
- Queue all nodes with indegree 0
- Process BFS
- Generate ordering

Interview Shortcut:
Dependencies + Ordering
        =
Topological Sort
*/