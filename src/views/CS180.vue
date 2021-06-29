<template>
  <div class="cs180">
    <h1>Surviving CS 180</h1>
    <hr />
    <h2>Table of Contents</h2>
    <h3
      class="link"
      @click="() => $refs['intro'].scrollIntoView({ behavior: 'smooth' })"
    >
      Introduction
    </h3>
    <h3
      class="link"
      @click="() => $refs['1'].scrollIntoView({ behavior: 'smooth' })"
    >
      Unit 1: Basics of Analysis
    </h3>
    <h4
      class="link"
      @click="() => $refs['1.1'].scrollIntoView({ behavior: 'smooth' })"
    >
      1.1: The Famous Problem
    </h4>
    <h4
      class="link"
      @click="() => $refs['1.2'].scrollIntoView({ behavior: 'smooth' })"
    >
      1.2: Gale-Shapely
    </h4>
    <h4
      class="link"
      @click="() => $refs['1.3'].scrollIntoView({ behavior: 'smooth' })"
    >
      1.3: Order Notation
    </h4>
    <h4
      class="link"
      @click="() => $refs['1.4'].scrollIntoView({ behavior: 'smooth' })"
    >
      1.4: Interval Scheduling
    </h4>
    <h3
      class="link"
      @click="() => $refs['2'].scrollIntoView({ behavior: 'smooth' })"
    >
      Unit 2: Graphs
    </h3>
    <h4
      class="link"
      @click="() => $refs['2.1'].scrollIntoView({ behavior: 'smooth' })"
    >
      2.1: Breadth-First Search
    </h4>
    <h4
      class="link"
      @click="() => $refs['2.2'].scrollIntoView({ behavior: 'smooth' })"
    >
      2.2: Depth-First Search
    </h4>
    <h4
      class="link"
      @click="() => $refs['2.3'].scrollIntoView({ behavior: 'smooth' })"
    >
      2.3: Graph Mechanics
    </h4>
    <h4
      class="link"
      @click="() => $refs['2.4'].scrollIntoView({ behavior: 'smooth' })"
    >
      2.4: Topological Sort
    </h4>
    <h4
      class="link"
      @click="() => $refs['2.5'].scrollIntoView({ behavior: 'smooth' })"
    >
      2.5: Connectivity
    </h4>
    <h3
      class="link"
      @click="() => $refs['3'].scrollIntoView({ behavior: 'smooth' })"
    >
      Unit 3: Greedy
    </h3>
    <h4
      class="link"
      @click="() => $refs['3.1'].scrollIntoView({ behavior: 'smooth' })"
    >
      3.1: Dijkstra's Algorithm
    </h4>
    <h4
      class="link"
      @click="() => $refs['3.2'].scrollIntoView({ behavior: 'smooth' })"
    >
      3.2: Prim's Algorithm
    </h4>
    <h4
      class="link"
      @click="() => $refs['3.3'].scrollIntoView({ behavior: 'smooth' })"
    >
      3.3: Kruskal's Algorithm
    </h4>
    <h4
      class="link"
      @click="() => $refs['3.4'].scrollIntoView({ behavior: 'smooth' })"
    >
      3.4: Clustering
    </h4>
    <h3
      class="link"
      @click="() => $refs['4'].scrollIntoView({ behavior: 'smooth' })"
    >
      Unit 4: Divide & Conquer and Dynamic Programming
    </h3>
    <h4
      class="link"
      @click="() => $refs['4.1'].scrollIntoView({ behavior: 'smooth' })"
    >
      4.1: Merge Sort
    </h4>
    <h4
      class="link"
      @click="() => $refs['4.2'].scrollIntoView({ behavior: 'smooth' })"
    >
      4.2: Inversion Count
    </h4>
    <h4
      class="link"
      @click="() => $refs['4.3'].scrollIntoView({ behavior: 'smooth' })"
    >
      4.3: Closest Pair
    </h4>
    <h4
      class="link"
      @click="() => $refs['4.4'].scrollIntoView({ behavior: 'smooth' })"
    >
      4.4: Maximum Weighted Subset
    </h4>
    <h4
      class="link"
      @click="() => $refs['4.5'].scrollIntoView({ behavior: 'smooth' })"
    >
      4.5: The Knapsack Problem
    </h4>
    <h4
      class="link"
      @click="() => $refs['4.6'].scrollIntoView({ behavior: 'smooth' })"
    >
      4.6: Curve Fitting
    </h4>
    <h4
      class="link"
      @click="() => $refs['4.7'].scrollIntoView({ behavior: 'smooth' })"
    >
      4.7: RNA Sequencing
    </h4>
    <h3
      class="link"
      @click="() => $refs['5'].scrollIntoView({ behavior: 'smooth' })"
    >
      Unit 5: Network Flow
    </h3>
    <h4
      class="link"
      @click="() => $refs['5.1'].scrollIntoView({ behavior: 'smooth' })"
    >
      5.1: Ford-Fulkerson
    </h4>
    <h4
      class="link"
      @click="() => $refs['5.2'].scrollIntoView({ behavior: 'smooth' })"
    >
      5.2: Min-Cut/Max-Flow Theorem
    </h4>
    <h4
      class="link"
      @click="() => $refs['5.3'].scrollIntoView({ behavior: 'smooth' })"
    >
      5.3: Cell Towers
    </h4>
    <h3
      class="link"
      @click="() => $refs['3'].scrollIntoView({ behavior: 'smooth' })"
    >
      Unit 6: NP-Completeness
    </h3>
    <h4
      class="link"
      @click="() => $refs['6.1'].scrollIntoView({ behavior: 'smooth' })"
    >
      6.1: Polynomial-Time Reducibility
    </h4>
    <h4
      class="link"
      @click="() => $refs['6.2'].scrollIntoView({ behavior: 'smooth' })"
    >
      6.2: Max Clique and Max Independent Set
    </h4>
    <h3
      class="link"
      @click="() => $refs['after'].scrollIntoView({ behavior: 'smooth' })"
    >
      Afterword
    </h3>
    <h2 ref="intro">Introduction</h2>
    <h2 ref="1">Unit 1: Basics of Analysis</h2>
    <h3 ref="1.1">Unit 1.1: The Famous Problem</h3>
    <h3 ref="1.2">Unit 1.2: Gale-Shapely</h3>
    <h3 ref="1.3">Unit 1.3: Order Notation</h3>
    <h3 ref="1.4">Unit 1.4: Interval Scheduling</h3>
    <h2 ref="2">Unit 2: Graphs</h2>
    <h3 ref="2.1">Unit 2.1: Breadth-First Search</h3>
    <h3 ref="2.2">Unit 2.2: Depth-First Search</h3>
    <h3 ref="2.3">Unit 2.3: Graph Mechanics</h3>
    <h3 ref="2.4">Unit 2.4: Topological Sort</h3>
    <h3 ref="2.5">Unit 2.5: Connectivity</h3>
    <h2 ref="3">Unit 3: Greedy</h2>
    <h3 ref="3.1">Unit 3.1: Dijkstra's Algorithm</h3>
    <h3 ref="3.2">Unit 3.2: Prim's Algorithm</h3>
    <h3 ref="3.3">Unit 3.3: Kruskal's Algorithm</h3>
    <h3 ref="3.4">Unit 3.4: Clustering</h3>
    <h2 ref="4">Unit 4: Divide & Conquer and Dynamic Programming</h2>
    <h3 ref="4.1">Unit 4.1: Merge Sort</h3>
    <h3 ref="4.2">Unit 4.2: Inversion Count</h3>
    <h3 ref="4.3">Unit 4.3: Closest Pair</h3>
    <h3 ref="4.4">Unit 4.4: Maximum Weighted Subset</h3>
    <h3 ref="4.5">Unit 4.5: The Knapsack Problem</h3>
    <h3 ref="4.6">Unit 4.6: Curve Fitting</h3>
    <h3 ref="4.7">Unit 4.7: RNA Sequencing</h3>
    <h2 ref="5">Unit 5: Network Flow</h2>
    <h3 ref="5.1">Unit 5.1: Ford-Fulkerson</h3>
    <h3 ref="5.2">Unit 5.2: Min-Cut/Max-Flow Theorem</h3>
    <h3 ref="5.3">Unit 5.3: Cell Towers</h3>
    <h2 ref="6">Unit 6: NP-Completeness</h2>
    <h3 ref="6.1">Unit 6.1: Polynomial-Time Reducibility</h3>
    <h3 ref="6.2">Unit 6.2: Max Clique and Max Independent Set</h3>
    <h2 ref="after">Afterword</h2>
  </div>
</template>

<script>
export default {
  name: "CS180",
};
</script>

<style lang="scss" scoped>
.cs180 {
  // Spacing
  padding: 0 calc(clamp(4rem, 2.4rem + 6.4vw, 8rem));
  padding-bottom: 2rem;
  // Sizing
  width: 100%;
}
</style>