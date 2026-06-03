/*
=========================================
SHORTEST PATH PATTERN
(BEGINNER -> ADVANCED)
=========================================

1. Shortest Path in Binary Matrix (#1091)
-----------------------------------------
Difficulty: Medium

Pattern:
BFS Shortest Path

Problem:
Find the shortest clear path from the
top-left corner to the bottom-right corner
of a binary matrix.

Why Learn:
- Simplest shortest path problem.
- Introduces BFS distance tracking.

Concepts:
✓ BFS
✓ Grid Traversal
✓ Shortest Path

=========================================

2. Word Ladder (#127)
---------------------
Difficulty: Hard

Pattern:
BFS Shortest Path

Problem:
Transform a begin word into an end word
by changing one letter at a time.

Why Learn:
- Classic shortest path problem.
- BFS guarantees minimum transformations.

Concepts:
✓ BFS
✓ Graph Construction
✓ Shortest Path

=========================================

3. Rotting Oranges (#994)
-------------------------
Difficulty: Medium

Pattern:
Multi-Source BFS

Problem:
Find the minimum time required for all
fresh oranges to become rotten.

Why Learn:
- Learn shortest distance from multiple
  starting points.

Concepts:
✓ BFS
✓ Queue
✓ Multi-Source BFS

=========================================

4. Network Delay Time (#743)
----------------------------
Difficulty: Medium

Pattern:
Dijkstra's Algorithm

Problem:
Find the time needed for a signal to
reach all nodes in a network.

Why Learn:
- First Dijkstra problem.
- Most important weighted graph algorithm.

Concepts:
✓ Min Heap
✓ Dijkstra
✓ Weighted Graph

=========================================

5. Path With Minimum Effort (#1631)
-----------------------------------
Difficulty: Medium

Pattern:
Dijkstra on Grid

Problem:
Find a path minimizing the maximum height
difference between adjacent cells.

Why Learn:
- Advanced shortest path variation.
- Frequently asked in interviews.

Concepts:
✓ Dijkstra
✓ Min Heap
✓ Grid Graph

=========================================
LEARNING ORDER
=========================================

1. Shortest Path in Binary Matrix (#1091)
2. Rotting Oranges (#994)
3. Word Ladder (#127)
4. Network Delay Time (#743)
5. Path With Minimum Effort (#1631)

=========================================
AFTER COMPLETING THESE
=========================================

Advanced Problems:
- Cheapest Flights Within K Stops (#787)
- Swim in Rising Water (#778)
- Minimum Cost to Make at Least One
  Valid Path in a Grid (#1368)
- The Maze II (#505)
- Number of Ways to Arrive at Destination (#1976)

=========================================
PATTERN RECOGNITION
=========================================

Unweighted Graph:
- Minimum steps/moves         -> BFS
- Fewest transformations      -> BFS
- Shortest distance in grid   -> BFS

Weighted Graph:
- Minimum cost                -> Dijkstra
- Minimum time                -> Dijkstra
- Minimum effort              -> Dijkstra
- Weighted edges              -> Min Heap

Core Idea:
1. Unweighted Graph
   -> Use BFS

2. Weighted Graph
   -> Use Dijkstra (Min Heap)

3. Multiple Starting Points
   -> Multi-Source BFS

Interview Shortcut:
"Minimum steps"      -> BFS
"Minimum cost/time"  -> Dijkstra
"Weighted edges"     -> Dijkstra
*/