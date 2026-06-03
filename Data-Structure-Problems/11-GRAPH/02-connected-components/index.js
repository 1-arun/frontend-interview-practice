/*
=========================================
CONNECTED COMPONENTS PATTERN
(BEGINNER -> ADVANCED)
=========================================

1. Number of Provinces (#547)
-----------------------------
Difficulty: Medium

Pattern:
Connected Components

Problem:
Given a matrix representing connections
between cities, find the number of provinces.

Why Learn:
- Simplest connected component problem.
- Direct DFS/BFS application.

Concepts:
✓ DFS
✓ BFS
✓ Connected Components

=========================================

2. Number of Islands (#200)
---------------------------
Difficulty: Medium

Pattern:
Connected Components in Grid

Problem:
Count the number of islands in a 2D grid.

Why Learn:
- Most famous connected component problem.
- Frequently asked in interviews.

Concepts:
✓ DFS
✓ BFS
✓ Grid Traversal

=========================================

3. Max Area of Island (#695)
----------------------------
Difficulty: Medium

Pattern:
Component Size Calculation

Problem:
Find the size of the largest island
in a 2D grid.

Why Learn:
- Extension of Number of Islands.
- Learn how to calculate component size.

Concepts:
✓ DFS
✓ BFS
✓ Component Counting

=========================================

4. Count Unreachable Pairs of Nodes
   in an Undirected Graph (#2316)
----------------------------------
Difficulty: Medium

Pattern:
Connected Components

Problem:
Count pairs of nodes that cannot
reach each other.

Why Learn:
- Learn how component sizes are used
  in calculations.

Concepts:
✓ DFS
✓ BFS
✓ Component Size

=========================================

5. Number of Connected Components
   in an Undirected Graph (#323)
--------------------------------
Difficulty: Medium

Pattern:
Pure Connected Components

Problem:
Given n nodes and edges, find the number
of connected components in the graph.

Why Learn:
- Purest connected component problem.
- Classic interview question.

Concepts:
✓ DFS
✓ BFS
✓ Graph Traversal

=========================================
LEARNING ORDER
=========================================

1. Number of Provinces (#547)
2. Number of Islands (#200)
3. Max Area of Island (#695)
4. Number of Connected Components (#323)
5. Count Unreachable Pairs of Nodes (#2316)

=========================================
AFTER COMPLETING THESE
=========================================

Advanced Problems:
- Making A Large Island (#827)
- Number of Enclaves (#1020)
- Surrounded Regions (#130)
- Redundant Connection (#684)
- Accounts Merge (#721)

=========================================
PATTERN RECOGNITION
=========================================

- Count groups in graph         -> Connected Components
- Count islands in grid         -> Connected Components
- Find largest group            -> Component Size
- Nodes connected together      -> DFS/BFS
- Unreachable nodes             -> Components
- Separate clusters/groups      -> Components

Core Idea:
1. Iterate through all nodes.
2. If node is unvisited:
   - Start DFS/BFS.
   - Mark entire component visited.
   - Increment component count.
3. Repeat until all nodes are visited.

Template:
for each node:
    if not visited:
        dfs(node)
        components++
*/