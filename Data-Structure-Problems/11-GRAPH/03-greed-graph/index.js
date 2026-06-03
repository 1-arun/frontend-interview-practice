/*
=========================================
GRID GRAPH PATTERN
(BEGINNER -> ADVANCED)
=========================================

1. Flood Fill (#733)
--------------------
Difficulty: Easy

Pattern:
Grid DFS / BFS

Problem:
Change the color of a starting cell and
all connected cells having the same color.

Why Learn:
- Simplest grid traversal problem.
- Learn movement in 4 directions.

Concepts:
✓ DFS
✓ BFS
✓ Matrix Traversal

=========================================

2. Number of Islands (#200)
---------------------------
Difficulty: Medium

Pattern:
Connected Components in Grid

Problem:
Count the number of islands in a 2D grid.

Why Learn:
- Most important grid problem.
- Foundation for many graph questions.

Concepts:
✓ DFS
✓ BFS
✓ Grid Traversal

=========================================

3. Max Area of Island (#695)
----------------------------
Difficulty: Medium

Pattern:
Grid Component Size

Problem:
Find the size of the largest island
in a 2D grid.

Why Learn:
- Extension of Number of Islands.
- Learn area calculation.

Concepts:
✓ DFS
✓ BFS
✓ Component Size

=========================================

4. Rotting Oranges (#994)
-------------------------
Difficulty: Medium

Pattern:
Multi-Source BFS

Problem:
Find the minimum time required for all
fresh oranges to become rotten.

Why Learn:
- First important BFS-only grid problem.
- Learn level-order traversal.

Concepts:
✓ BFS
✓ Queue
✓ Level Traversal

=========================================

5. Walls and Gates (#286)
-------------------------
Difficulty: Medium

Pattern:
Multi-Source BFS

Problem:
Fill each empty room with the distance
to its nearest gate.

Why Learn:
- Classic shortest distance grid problem.
- Common interview question.

Concepts:
✓ BFS
✓ Distance Calculation
✓ Multi-Source BFS

=========================================
LEARNING ORDER
=========================================

1. Flood Fill (#733)
2. Number of Islands (#200)
3. Max Area of Island (#695)
4. Rotting Oranges (#994)
5. Walls and Gates (#286)

=========================================
AFTER COMPLETING THESE
=========================================

Advanced Problems:
- Surrounded Regions (#130)
- Number of Enclaves (#1020)
- Pacific Atlantic Water Flow (#417)
- Shortest Path in Binary Matrix (#1091)
- Making A Large Island (#827)

=========================================
PATTERN RECOGNITION
=========================================

- 2D matrix/grid problem       -> Grid Graph
- Move Up/Down/Left/Right      -> DFS/BFS
- Count islands/groups         -> DFS/BFS
- Shortest distance in grid    -> BFS
- Spread infection/fire/water  -> Multi-Source BFS
- Explore connected cells      -> DFS/BFS

Core Idea:
Treat every cell as a graph node.

Directions:
int[][] dirs = {
    {1,0},
    {-1,0},
    {0,1},
    {0,-1}
};

For each cell:
- Visit neighbors
- Mark visited
- Continue DFS/BFS traversal

Grid + BFS/DFS is one of the most
frequently asked interview patterns.
*/