/*
=========================================
CYCLE DETECTION PATTERN
(BEGINNER -> ADVANCED)
=========================================

1. Linked List Cycle (#141)
---------------------------
Difficulty: Easy

Pattern:
Fast & Slow Pointers

Problem:
Determine if a linked list contains a cycle.

Why Learn:
- Simplest cycle detection problem.
- Introduces Floyd's Cycle Detection.

Concepts:
✓ Fast & Slow Pointers
✓ Cycle Detection

=========================================

2. Linked List Cycle II (#142)
------------------------------
Difficulty: Medium

Pattern:
Floyd's Algorithm

Problem:
Return the node where the cycle begins.

Why Learn:
- Extension of #141.
- Very common interview question.

Concepts:
✓ Fast & Slow Pointers
✓ Cycle Start Detection

=========================================

3. Graph Valid Tree (#261)
--------------------------
Difficulty: Medium

Pattern:
Union Find Cycle Detection

Problem:
Determine whether a graph forms a valid tree.

Why Learn:
- Learn cycle detection using DSU.

Concepts:
✓ Union Find
✓ Cycle Detection

=========================================

4. Redundant Connection (#684)
------------------------------
Difficulty: Medium

Pattern:
Union Find

Problem:
Find the edge that creates a cycle in an
undirected graph.

Why Learn:
- Most popular graph cycle problem.

Concepts:
✓ Union Find
✓ Cycle Detection

=========================================

5. Course Schedule (#207)
-------------------------
Difficulty: Medium

Pattern:
Directed Graph Cycle Detection

Problem:
Determine if all courses can be completed
given prerequisite relationships.

Why Learn:
- Learn cycle detection in directed graphs.
- Foundation for Topological Sort.

Concepts:
✓ DFS
✓ Topological Sort
✓ Directed Cycle Detection

=========================================
LEARNING ORDER
=========================================

1. Linked List Cycle (#141)
2. Linked List Cycle II (#142)
3. Graph Valid Tree (#261)
4. Redundant Connection (#684)
5. Course Schedule (#207)

=========================================
AFTER COMPLETING THESE
=========================================

Advanced Problems:
- Detect Cycle in Directed Graph
- Find Eventual Safe States (#802)
- Longest Cycle in a Graph (#2360)
- Alien Dictionary (#269)
- Redundant Connection II (#685)

=========================================
PATTERN RECOGNITION
=========================================

Linked List:
- Repeated node              -> Fast & Slow

Undirected Graph:
- Edge connects same set     -> Union Find
- Visited neighbor (not parent)
                             -> DFS

Directed Graph:
- Back Edge                  -> DFS
- Cannot complete ordering   -> Topological Sort

Core Idea:
-----------------------------------------
1. Linked List
-----------------------------------------
Use Floyd's Algorithm:

slow = slow.next
fast = fast.next.next

If slow == fast
=> Cycle Exists

-----------------------------------------
2. Undirected Graph
-----------------------------------------
DFS:
- Track parent node
- If visited neighbor is not parent
  => Cycle Exists

OR

Union Find:
- Same parent before union
  => Cycle Exists

-----------------------------------------
3. Directed Graph
-----------------------------------------
DFS States:

0 = Unvisited
1 = Visiting
2 = Visited

If we visit a node already in
"Visiting" state
=> Cycle Exists

=========================================
INTERVIEW SHORTCUT
=========================================

Linked List Cycle      -> Fast & Slow
Undirected Graph Cycle -> DFS / DSU
Directed Graph Cycle   -> DFS States
Prerequisite Problems  -> Topological Sort
*/