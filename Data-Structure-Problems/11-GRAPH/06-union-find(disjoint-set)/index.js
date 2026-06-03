/*
=========================================
UNION FIND (DISJOINT SET)
(BEGINNER -> ADVANCED)
=========================================

1. Find if Path Exists in Graph (#1971)
---------------------------------------
Difficulty: Easy

Pattern:
Basic Union Find

Problem:
Given an undirected graph and two nodes,
determine if a valid path exists.

Why Learn:
- Simplest Union Find application.
- Learn union() and find() operations.

Concepts:
✓ Union Find
✓ Connected Components
✓ Graph Connectivity

=========================================

2. Number of Connected Components
   in an Undirected Graph (#323)
--------------------------------
Difficulty: Medium

Pattern:
Connected Components

Problem:
Given n nodes and edges, find the number
of connected components.

Why Learn:
- Classic DSU problem.
- Learn component counting.

Concepts:
✓ Union Find
✓ Component Counting

=========================================

3. Redundant Connection (#684)
------------------------------
Difficulty: Medium

Pattern:
Cycle Detection

Problem:
Find the edge that creates a cycle in
an undirected graph.

Why Learn:
- Most common Union Find interview problem.

Concepts:
✓ Union Find
✓ Cycle Detection

=========================================

4. Number of Provinces (#547)
-----------------------------
Difficulty: Medium

Pattern:
Connected Components

Problem:
Find the number of provinces formed
by connected cities.

Why Learn:
- Can be solved using DFS or DSU.
- Great Union Find practice.

Concepts:
✓ Union Find
✓ Connectivity

=========================================

5. Accounts Merge (#721)
------------------------
Difficulty: Medium

Pattern:
Grouping / Merging

Problem:
Merge accounts belonging to the same
person using common email addresses.

Why Learn:
- Learn real-world DSU applications.
- Frequently asked interview problem.

Concepts:
✓ Union Find
✓ Group Merging
✓ HashMap

=========================================
LEARNING ORDER
=========================================

1. Find if Path Exists in Graph (#1971)
2. Number of Connected Components (#323)
3. Redundant Connection (#684)
4. Number of Provinces (#547)
5. Accounts Merge (#721)

=========================================
AFTER COMPLETING THESE
=========================================

Advanced Problems:
- Graph Valid Tree (#261)
- Number of Islands II (#305)
- Most Stones Removed (#947)
- Satisfiability of Equality Equations (#990)
- Min Cost to Connect All Points (#1584)
- Regions Cut By Slashes (#959)

=========================================
PATTERN RECOGNITION
=========================================

- Merge two groups             -> Union
- Find group leader            -> Find
- Connectivity queries         -> DSU
- Connected components         -> DSU
- Cycle detection              -> DSU
- Dynamic graph connections    -> DSU
- Grouping entities            -> DSU

Core Idea:
Each node belongs to a set.

Operations:

find(x)
- Returns parent/root of x.

union(x, y)
- Merges two sets.

Optimization:
✓ Path Compression
✓ Union By Rank / Size

Template:

if (find(u) == find(v))
{
    // cycle found
}
else
{
    union(u, v);
}

Interview Shortcut:
Connectivity + Repeated Merges
            =
Union Find (DSU)
*/