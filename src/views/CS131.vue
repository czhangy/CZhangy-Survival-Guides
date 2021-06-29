<template>
  <div class="cs131">
    <h1>Surviving CS 131</h1>
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
      Unit 1: Language Fundamentals
    </h3>
    <h4
      class="link"
      @click="() => $refs['1.1'].scrollIntoView({ behavior: 'smooth' })"
    >
      1.1: Design Philosophy
    </h4>
    <h4
      class="link"
      @click="() => $refs['1.2'].scrollIntoView({ behavior: 'smooth' })"
    >
      1.2: Phrase Structure
    </h4>
    <h4
      class="link"
      @click="() => $refs['1.3'].scrollIntoView({ behavior: 'smooth' })"
    >
      1.3: Lexical Structure
    </h4>
    <h3
      class="link"
      @click="() => $refs['2'].scrollIntoView({ behavior: 'smooth' })"
    >
      Unit 2: OCaml
    </h3>
    <h4
      class="link"
      @click="() => $refs['2.1'].scrollIntoView({ behavior: 'smooth' })"
    >
      2.1: Functional Programming
    </h4>
    <h4
      class="link"
      @click="() => $refs['2.2'].scrollIntoView({ behavior: 'smooth' })"
    >
      2.2: OCaml Core
    </h4>
    <h4
      class="link"
      @click="() => $refs['2.3'].scrollIntoView({ behavior: 'smooth' })"
    >
      2.3: Pattern Matching
    </h4>
    <h4
      class="link"
      @click="() => $refs['2.4'].scrollIntoView({ behavior: 'smooth' })"
    >
      2.4: Higher-Order Functions
    </h4>
    <h4
      class="link"
      @click="() => $refs['2.5'].scrollIntoView({ behavior: 'smooth' })"
    >
      2.5: Type Constructors
    </h4>
    <h3
      class="link"
      @click="() => $refs['3'].scrollIntoView({ behavior: 'smooth' })"
    >
      Unit 3: Java
    </h3>
    <h4
      class="link"
      @click="() => $refs['3.1'].scrollIntoView({ behavior: 'smooth' })"
    >
      3.1: Translation Environments
    </h4>
    <h4
      class="link"
      @click="() => $refs['3.2'].scrollIntoView({ behavior: 'smooth' })"
    >
      3.2: Types
    </h4>
    <h4
      class="link"
      @click="() => $refs['3.3'].scrollIntoView({ behavior: 'smooth' })"
    >
      3.3: Subtypes and Polymorphism
    </h4>
    <h4
      class="link"
      @click="() => $refs['3.4'].scrollIntoView({ behavior: 'smooth' })"
    >
      3.4: Generics
    </h4>
    <h4
      class="link"
      @click="() => $refs['3.5'].scrollIntoView({ behavior: 'smooth' })"
    >
      3.5: Interfaces
    </h4>
    <h4
      class="link"
      @click="() => $refs['3.6'].scrollIntoView({ behavior: 'smooth' })"
    >
      3.6: Threading and Synchronization
    </h4>
    <h4
      class="link"
      @click="() => $refs['3.7'].scrollIntoView({ behavior: 'smooth' })"
    >
      3.7: The Java Memory Model
    </h4>
    <h3
      class="link"
      @click="() => $refs['4'].scrollIntoView({ behavior: 'smooth' })"
    >
      Unit 4: Prolog
    </h3>
    <h4
      class="link"
      @click="() => $refs['4.1'].scrollIntoView({ behavior: 'smooth' })"
    >
      4.1: Logic Programming
    </h4>
    <h4
      class="link"
      @click="() => $refs['4.2'].scrollIntoView({ behavior: 'smooth' })"
    >
      4.2: Prolog Logic
    </h4>
    <h4
      class="link"
      @click="() => $refs['4.3'].scrollIntoView({ behavior: 'smooth' })"
    >
      4.3: Unification
    </h4>
    <h4
      class="link"
      @click="() => $refs['4.4'].scrollIntoView({ behavior: 'smooth' })"
    >
      4.4: Prolog Control
    </h4>
    <h3
      class="link"
      @click="() => $refs['5'].scrollIntoView({ behavior: 'smooth' })"
    >
      Unit 5: Scheme
    </h3>
    <h4
      class="link"
      @click="() => $refs['5.1'].scrollIntoView({ behavior: 'smooth' })"
    >
      5.1: Introduction and Conventions
    </h4>
    <h4
      class="link"
      @click="() => $refs['5.2'].scrollIntoView({ behavior: 'smooth' })"
    >
      5.2: Scheme Basics
    </h4>
    <h4
      class="link"
      @click="() => $refs['5.3'].scrollIntoView({ behavior: 'smooth' })"
    >
      5.3: Continuations
    </h4>
    <h3
      class="link"
      @click="() => $refs['3'].scrollIntoView({ behavior: 'smooth' })"
    >
      Unit 6: Language Principles
    </h3>
    <h4
      class="link"
      @click="() => $refs['6.1'].scrollIntoView({ behavior: 'smooth' })"
    >
      6.1: Garbage Collection
    </h4>
    <h4
      class="link"
      @click="() => $refs['6.2'].scrollIntoView({ behavior: 'smooth' })"
    >
      6.2: Parameter Passing
    </h4>
    <h4
      class="link"
      @click="() => $refs['6.3'].scrollIntoView({ behavior: 'smooth' })"
    >
      6.3: Object-Oriented Models
    </h4>
    <h4
      class="link"
      @click="() => $refs['6.4'].scrollIntoView({ behavior: 'smooth' })"
    >
      6.4: Exception Handling
    </h4>
    <h4
      class="link"
      @click="() => $refs['6.5'].scrollIntoView({ behavior: 'smooth' })"
    >
      6.5: Semantics
    </h4>
    <h3
      class="link"
      @click="() => $refs['after'].scrollIntoView({ behavior: 'smooth' })"
    >
      Afterword
    </h3>
    <h2 ref="intro">Introduction</h2>
    <h2 ref="1">Unit 1: Language Fundamentals</h2>
    <h3 ref="1.1">Unit 1.1: Design Philopsophy</h3>
    <h3 ref="1.2">Unit 1.2: Phrase Structure</h3>
    <h3 ref="1.3">Unit 1.3: Lexical Structure</h3>
    <h2 ref="2">Unit 2: OCaml</h2>
    <h3 ref="2.1">Unit 2.1: Functional Programming</h3>
    <h3 ref="2.2">Unit 2.2: OCaml Core</h3>
    <h3 ref="2.3">Unit 2.3: Pattern Matching</h3>
    <h3 ref="2.4">Unit 2.4: Higher-Order Functions</h3>
    <h3 ref="2.5">Unit 2.5: Type Constructors</h3>
    <h2 ref="3">Unit 3: Java</h2>
    <h3 ref="3.1">Unit 3.1: Translation Environments</h3>
    <h3 ref="3.2">Unit 3.2: Types</h3>
    <h3 ref="3.3">Unit 3.3: Subtypes and Polymorphism</h3>
    <h3 ref="3.4">Unit 3.4: Generics</h3>
    <h3 ref="3.5">Unit 3.5: Interfaces</h3>
    <h3 ref="3.6">Unit 3.6: Threading and Synchronization</h3>
    <h3 ref="3.7">Unit 3.7: The Java Memory Model</h3>
    <h2 ref="4">Unit 4: Prolog</h2>
    <h3 ref="4.1">Unit 4.1: Logic Programming</h3>
    <h3 ref="4.2">Unit 4.2: Prolog Logic</h3>
    <h3 ref="4.3">Unit 4.3: Unification</h3>
    <h3 ref="4.4">Unit 4.4: Prolog Control</h3>
    <h2 ref="5">Unit 5: Scheme</h2>
    <h3 ref="5.1">Unit 5.1: Introduction and Conventions</h3>
    <h3 ref="5.2">Unit 5.2: Scheme Basics</h3>
    <h3 ref="5.3">Unit 5.3: Continuations</h3>
    <h2 ref="6">Unit 6: Language Principles</h2>
    <h3 ref="6.1">Unit 6.1: Garbage Collection</h3>
    <h3 ref="6.2">Unit 6.2: Parameter Passing</h3>
    <h3 ref="6.3">Unit 6.3: Object-Oriented Models</h3>
    <h3 ref="6.4">Unit 6.4: Exception Handling</h3>
    <h3 ref="6.5">Unit 6.5: Semantics</h3>
    <h2 ref="after">Afterword</h2>
  </div>
</template>

<script>
export default {
  name: "CS131",
};
</script>

<style lang="scss" scoped>
.cs131 {
  // Spacing
  padding: 0 calc(clamp(4rem, 2.4rem + 6.4vw, 8rem));
  padding-bottom: 2rem;
  // Sizing
  width: 100%;
}
</style>