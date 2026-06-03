/*
=========================================
GRAPH TRAVERSAL (BFS / DFS)
(BEGINNER -> ADVANCED)
=========================================

1. Find if Path Exists in Graph (#1971)
---------------------------------------
Difficulty: Easy

Pattern:
Basic BFS / DFS

Problem:
Given an undirected graph and two nodes,
determine if a valid path exists.

Why Learn:
- Simplest graph traversal problem.
- Learn adjacency list + visited array.

Concepts:
✓ BFS
✓ DFS
✓ Graph Representation

=========================================

2. Number of Provinces (#547)
-----------------------------
Difficulty: Medium

Pattern:
Connected Components

Problem:
Given a matrix representing connections
between cities, find the number of provinces.

Why Learn:
- Learn how DFS/BFS finds connected groups.

Concepts:
✓ DFS
✓ BFS
✓ Connected Components

=========================================

3. Flood Fill (#733)
--------------------
Difficulty: Easy

Pattern:
Grid BFS / DFS

Problem:
Change the color of a starting pixel and
all connected pixels with the same color.

Why Learn:
- Easiest grid traversal problem.

Concepts:
✓ DFS
✓ BFS
✓ Matrix Traversal

=========================================

4. Number of Islands (#200)
---------------------------
Difficulty: Medium

Pattern:
Grid Traversal

Problem:
Count the number of islands in a 2D grid.

Why Learn:
- Most important BFS/DFS problem.
- Asked in almost every interview.

Concepts:
✓ DFS
✓ BFS
✓ Connected Components
✓ Grid Traversal

=========================================

5. Clone Graph (#133)
---------------------
Difficulty: Medium

Pattern:
Graph Traversal + Construction

Problem:
Create a deep copy of an entire graph.

Why Learn:
- Learn graph traversal with node creation.
- Very common interview question.

Concepts:
✓ DFS
✓ BFS
✓ Graph Copying

=========================================
LEARNING ORDER
=========================================

1. Find if Path Exists in Graph (#1971)
2. Flood Fill (#733)
3. Number of Provinces (#547)
4. Number of Islands (#200)
5. Clone Graph (#133)

=========================================
AFTER COMPLETING THESE
=========================================

Advanced Problems:
- Rotting Oranges (#994)
- Course Schedule (#207)
- Pacific Atlantic Water Flow (#417)
- Surrounded Regions (#130)
- Word Ladder (#127)

=========================================
PATTERN RECOGNITION
=========================================

- Visit all connected nodes      -> BFS / DFS
- Find path between nodes        -> BFS / DFS
- Count groups/components        -> BFS / DFS
- Grid exploration               -> BFS / DFS
- Shortest path (unweighted)     -> BFS
- Explore all possibilities      -> DFS
- Traverse graph/tree            -> BFS / DFS

Core Idea:
BFS:
- Uses Queue
- Level by Level Traversal
- Best for shortest path

DFS:
- Uses Recursion or Stack
- Goes Deep First
- Best for exploration problems
*/