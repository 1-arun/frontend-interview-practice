/*
=========================================
ADVANCED GRAPH PATTERN
(BEGINNER -> ADVANCED)
=========================================

1. Network Delay Time (#743)
----------------------------
Difficulty: Medium

Pattern:
Dijkstra's Algorithm

Problem:
Given a network of nodes and travel times,
find how long it takes for a signal to
reach every node.

Why Learn:
- Best introduction to weighted graphs.
- Foundation for advanced graph algorithms.

Concepts:
✓ Dijkstra
✓ Min Heap
✓ Shortest Path

=========================================

2. Cheapest Flights Within K Stops (#787)
-----------------------------------------
Difficulty: Medium

Pattern:
Shortest Path with Constraints

Problem:
Find the cheapest flight from source to
destination using at most K stops.

Why Learn:
- Learn shortest path with extra conditions.

Concepts:
✓ BFS
✓ Dijkstra
✓ Graph Optimization

=========================================

3. Min Cost to Connect All Points (#1584)
-----------------------------------------
Difficulty: Medium

Pattern:
Minimum Spanning Tree (MST)

Problem:
Connect all points with minimum total cost.

Why Learn:
- Most popular MST problem.
- Introduces Prim's Algorithm.

Concepts:
✓ MST
✓ Prim's Algorithm
✓ Min Heap

=========================================

4. Reconstruct Itinerary (#332)
-------------------------------
Difficulty: Hard

Pattern:
Eulerian Path

Problem:
Reconstruct a valid flight itinerary using
all tickets exactly once.

Why Learn:
- Learn Eulerian Path traversal.
- Common advanced graph interview question.

Concepts:
✓ DFS
✓ Eulerian Path
✓ Graph Traversal

=========================================

5. Critical Connections in a Network (#1192)
--------------------------------------------
Difficulty: Hard

Pattern:
Tarjan's Algorithm

Problem:
Find all critical edges whose removal
disconnects the graph.

Why Learn:
- Classic advanced graph problem.
- Introduces Bridges and Low-Link values.

Concepts:
✓ DFS
✓ Tarjan's Algorithm
✓ Bridges

=========================================
LEARNING ORDER
=========================================

1. Network Delay Time (#743)
2. Cheapest Flights Within K Stops (#787)
3. Min Cost to Connect All Points (#1584)
4. Reconstruct Itinerary (#332)
5. Critical Connections in a Network (#1192)

=========================================
AFTER COMPLETING THESE
=========================================

Expert-Level Problems:
- Swim in Rising Water (#778)
- Alien Dictionary (#269)
- Number of Ways to Arrive at Destination (#1976)
- Redundant Connection II (#685)
- Minimum Cost to Make at Least One
  Valid Path in a Grid (#1368)
- The Maze II (#505)

=========================================
PATTERN RECOGNITION
=========================================

Weighted Graph:
- Minimum cost/time          -> Dijkstra
- Cheapest route            -> Dijkstra

Connect All Nodes:
- Minimum total cost        -> MST
- Connect network           -> Prim/Kruskal

Use Every Edge Once:
- Valid itinerary           -> Eulerian Path

Critical Roads/Edges:
- Remove edge disconnects   -> Tarjan

Advanced Connectivity:
- Bridges                   -> Tarjan
- Articulation Points       -> Tarjan

=========================================
CORE ALGORITHMS
=========================================

1. Dijkstra
-----------
Use When:
✓ Weighted Graph
✓ Shortest Path

Time:
O(E log V)

-----------------------------------------

2. Minimum Spanning Tree (MST)
------------------------------
Use When:
✓ Connect all nodes
✓ Minimum total cost

Algorithms:
✓ Prim
✓ Kruskal

-----------------------------------------

3. Eulerian Path
----------------
Use When:
✓ Visit every edge exactly once

Algorithm:
✓ Hierholzer's Algorithm

-----------------------------------------

4. Tarjan's Algorithm
---------------------
Use When:
✓ Find Bridges
✓ Find Articulation Points

=========================================
INTERVIEW SHORTCUT
=========================================

Shortest Cost/Time
        ->
Dijkstra

Connect All Nodes
        ->
MST

Use Every Ticket Once
        ->
Eulerian Path

Critical Roads
        ->
Tarjan

Weighted Graph + Min Cost
        ->
Dijkstra / MST
*/