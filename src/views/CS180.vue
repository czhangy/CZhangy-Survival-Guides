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
    <p>
      Welcome welcome to my second round of guides. Hopefully that means that
      the content in here is going to be a little less awful than in my first
      attempts (Phys. 1C, CS 33, Math 61), but no promises. One big change is
      that I’m writing these in the middle of taking the class, so I won’t have
      a lot of foresight into what’s coming up. Whatever the case, let’s get
      into more important things.
    </p>
    <p>
      As you can tell by the name of the course, we’re going to be spending a
      lot of time focusing on algorithms and algorithm analysis. From my
      experience, and for the purposes of this guide, this means pseudocode
      rather than actual code. Now that we’ve escaped the grasp of CS 31/32,
      we’re not going to care as much about the implementation, and we’re going
      to worry more about establishing good practices and making sure you know
      why your code actually works.
    </p>
    <p>
      Due to the nature of the course, there are a lot of topics that we’re
      going to work with. As a result, the organization of this guide is going
      to leave a lot to be desired. I’m going to do my best to put everything
      together in a way that makes sense, but, from what I’ve seen so far, I
      wouldn’t keep my hopes up. Thankfully, I am taking this class with the
      Almighty Majid Sarrafzadeh, so what we lack in organization, we should
      hopefully make up for in content.
    </p>
    <p>
      As a final note, I highly, highly recommend putting your best effort into
      this material. It’s going to be the baseline for a lot of basics when it
      comes to interviewing for internships or whatever else you’re going to do
      with that shiny CS degree. Put the work in now so you don’t have to later.
    </p>
    <h2 ref="1">Unit 1: Basics of Analysis</h2>
    <p>
      We’re going to hit the ground running and dive right into the material
      here. For this first unit, everything’s going to be a little disjoint
      since we’re introducing a lot of things. For the most part, we’ll touch on
      some analytic techniques that you’ll need to master to make it through
      this class (complexity, proofs, etc.), and we’ll use some basic algorithms
      as a way to apply them.
    </p>
    <p>
      This is where you should be starting to build good habits when it comes to
      your work. Proofs are infinitely easier to do when someone is walking you
      through them. Just because you can read someone else’s proof doesn’t mean
      you actually understand it; the only way to ensure that you do is to
      actually do the work yourself. Don’t shoot yourself in the foot by
      half-assing the basics.
    </p>
    <h3 ref="1.1">Unit 1.1: The Famous Problem</h3>
    <p>
      So, something you’ll get very familiar with in this course is breaking
      down a problem statement. When we design algorithms, we need to make sure
      we know exactly what our goal is. Misunderstanding one sentence can be the
      difference between you acing the midterm and a really sad day.
    </p>
    <p>
      With that in mind, let’s begin setting up our first problem of the course.
      We’ll start by defining a famous person as a person that everyone knows
      and that doesn’t know anyone. Of course, there are many possible
      definitions for a famous person, but for the purposes of our work here,
      we’ll work with the provided definition.
    </p>
    <p>
      This tells us that, given a group of n people, a person must be known by
      exactly n – 1 people (everyone else), while also knowing exactly 0 other
      people. For the purposes of this problem, we will assume that people
      cannot know themselves and that n ≥ 2. Adding that detail in would require
      us to redefine our conditions for fame, and that’s more work that we don’t
      want to do. So, to make sure we get the conditions, here’s a simple visual
      example of what we’re talking about:
    </p>
    <img src="@/assets/CS180/img1.png" />
    <p>
      In this 3 person group, person 1 knows neither person 2 nor person 3.
      Meanwhile both person 2 and person 3 know person 1. As a result, person 1
      is famous. Note that it doesn’t matter at all if person 2 and 3 know each
      other. They’re not famous, so who cares about them right?
    </p>
    <p>
      Drawing diagrams like these is a really good way to make sure you fully
      understand the problem you’re trying to solve, so don’t be afraid to take
      the time to construct examples. Everything we’ve done so far has been in
      an effort to understand the problem statement; we don’t even know what
      we’re trying to solve for yet. We’re probably used to reading problems
      once and immediately jumping into the solution. This class isn’t going to
      work that way. In the words of Majid, “this class is not about your
      intuition.” Problems are going to need to be read and reread for full
      understanding, so get used to it now. This is going to be a long guide.
    </p>
    <p>
      You know what? Let’s spend even more time talking about this problem
      before we get to the algorithm. I wanna introduce our first proof method.
      So, let’s answer the question, can there be multiple famous people in a
      given group? Well, as soon at least 5 of your neurons fire, you’ll come to
      the conclusion that, no, there can’t be multiple famous people. Well, now
      we need to answer the next question: why?
    </p>
    <p>
      The reasoning should be obvious enough, but we need to be careful here. We
      want a formal, mathematical proof as to why there cannot be multiple
      famous people. To get us there, let’s introduce proofs by contradiction.
      In essence, a proof by contradiction works by taking the negation of the
      thing we’re trying to prove, and then proving that the negation is
      impossible. Let’s get into it.
    </p>
    <p>
      So, to start, we’ll assume there can be multiple famous people in a group.
      To make our lives easier, we’ll assume there are 2 famous people. It is
      always best to use the simplest case available for your proofs. By
      definition of a famous person, famous person 1 must be known by famous
      person 2, and vice versa. Since both famous people must know another
      person in the group in this scenario, we’ve reached a contradiction of the
      definition of a famous person. As a result, we have proved there cannot be
      multiple famous people in a group by contradiction.
    </p>
    <p>
      Fun stuff. All that writing for a pretty trivial proof, but, don’t worry,
      they get much harder than that. We’ll get into that more later, so for
      now, informally prove to yourself that it is possible to have 0 famous
      people in a group. Hint: it’s really easy.
    </p>
    <p>
      With all that out of the way, it’s fairly safe to say that we really
      understand the situation at hand. So now here’s the problem: in a group of
      n people, is there a famous person in the problem, and if there is, who
      are they? Now, unlike our visual example above, the algorithm we’re about
      to construct must be generalized for any given n ≥ 2.
    </p>
    <p>
      Before we can begin developing our algorithm, we need to know our model of
      computation, or what tools we have available to us. Essentially, what can
      our computer actually do? Let’s say that we’re allowed to take 2 people
      from the group and ask the computer if one knows the other:
    </p>
    <img src="@/assets/CS180/img2.png" />
    <p>
      It’s very important to us that the answer is deterministic. Once we ask if
      1 knows 2, we will know for a fact whether or not 1 knows 2. Given this
      information, let’s set out a very simple solution to this problem, using
      the number of total questions asked as the measure of how efficient our
      solution is.
    </p>
    <p>
      Let’s go through all n – 1 people other than 1, and ask if they know 1.
      Imagine all n – 1 people know 1. Now, we know everyone else knows 1, all
      that’s left to find out is if 1 knows any of the other n – 1 people. Let’s
      also imagine 1 knows no one else. At this point, we can conclude 1 is
      famous. How many questions did we ask to get there? Well, we had to ask n
      – 1 questions to see if everyone else knew 1, and another n – 1 questions
      to see if 1 knew anyone else. As a result, we asked a total of 2(n – 1)
      questions to determine if 1 was famous.
    </p>
    <p>
      But what if 1 wasn’t famous? That would mean our algorithm wouldn’t be
      complete yet. We would have to ask another 2(n – 1)-ish questions to
      figure out if 2 was famous. I say 2(n – 1)-ish because we technically
      already have the information on if 1 knows 2 and if 2 knows 1, but we’re
      going to wave that aside for now. Obviously, if 2 wasn’t famous, we would
      have to continue down the sequence of people until we found a famous
      person or we checked through every person.
    </p>
    <p>
      In a worst-case scenario (which is what we care about for this class), we
      would have to ask n people 2(n – 1) questions to get a deterministic
      answer to our question. This comes out to 2n(n – 1) total questions. I’ll
      tell you right now, this algorithm solves the problem. No matter what
      value of n you have, you will get an answer.
    </p>
    <p>
      However, can we do better? Returning back to our short dive into big-O
      from CS 32, we know this algorithm runs in O(2n^2 – 2n) time, which
      reduces to O(n^2) time for large values of n. Considering we used such a
      brute-force approach to this algorithm, I’d say it’s pretty reasonable to
      assume we haven’t done this as optimally as we can. Sad.
    </p>
    <p>
      So what if we ask each person if they know everyone in the group? Well,
      unfortunately for us, our computer is stupid and dumb and can’t do that.
      We always have to keep in mind what our model of computation allows. So
      how can we do this better? Let’s think a little harder about what
      information we get from each question asked.
    </p>
    <p>
      Let’s imagine we ask some arbitrary person 1 if they know another
      arbitrary person 2. If they answer yes, what can we conclude? Well, since
      1 knows someone, they simply cannot be famous. We can’t actually conclude
      anything about 2 yet, since all we know is that 1 knows them. Ok then,
      what if they answer no? We then know that 2 cannot be famous, because
      there is at least one person in the group that doesn’t know them. Ok, so
      essentially, every time we ask a question, we’re able to definitively say
      that 1 person is not famous. Well, that’s fantastic. With every question,
      we can decrease the size of the problem by 1 person.
    </p>
    <p>
      Knowing this, let’s modify our algorithm. How about we arbitrarily pick 2
      people from the group and ask if one knows the other. Each time we do
      this, the remaining group size will decrease from n to n – 1, from n to n
      – 2, etc. Ok, so we can do this until we have 1 person left at the end. Up
      until this point, we have asked n – 1 questions, which we know since there
      have been n – 1 people eliminated.
    </p>
    <p>
      Well, what can we say about the last person remaining? How many questions
      have we asked him? The answer is we don’t know. Due to this, we actually
      don’t know this remaining person is famous. All we know is they are the
      only person that can be famous. As a result, we need to go back and ask
      every person that has been eliminated if they know the final person. In
      addition, we must also ask the final person if they know any other person
      in the group. Only after this process can we say whether or not this last
      person is famous.
    </p>
    <p>
      Ok, so we ended up doing the same process anyways. Basically, I’m garbage
      and just wasted your time. Except not really. Let’s count how many total
      questions we asked to solve our problem this time around. We needed n – 1
      questions to find our famous candidate. Afterwards, we needed to ask
      another 2(n – 1) questions (we proved this in the first algorithm) to
      confirm whether or not our famous candidate is actually famous. This means
      we used a total of 3(n – 1) questions in the worst-case scenario, giving
      us a runtime of O(n). Yeah that’s right, this algorithm is actually
      better. Told you so.
    </p>
    <p>
      Well, what if we’re super-perfectionists and want to make this algorithm
      even better? Well, to get a better runtime than O(n), we would need to
      finish execution without asking everyone at least one question. Common
      sense tells us that this is stupid and you should stop being a
      perfectionist. The definition that we’ve given for a famous person
      requires us to have information about the famous person that we can only
      get by asking them a question. Therefore, based on a worst-case runtime,
      we cannot guarantee this algorithm will finish executing without asking
      each person at least one question. This process, called lower-bound
      analysis, tells us our runtime is the best and that means we can stop
      talking about famous people. Hooray.
    </p>
    <p>
      A good habit to get into as we crank through these problems is thinking
      about how the problem could change. For instance, how would you solve this
      problem if a famous person was allowed to know at most 1 person?
      Obviously, your process/proof/runtime are all going to change somehow, so
      performing these kind of thought experiments are a great way to test
      yourself on the material.
    </p>
    <p>With that said, let’s move onto the next algorithm.</p>
    <h3 ref="1.2">Unit 1.2: Gale-Shapely</h3>
    <p>
      Ok lets imagine we have 2 sets of people of size n, divided into men and
      women:
    </p>
    <img src="@/assets/CS180/img3.png" />
    <p>
      Each of these people are looking to get married. Each person can marry
      exactly one person from the other set, and each person has a preference
      list, ordered by who they would like to marry. For instance:
    </p>
    <img src="@/assets/CS180/img4.png" />
    <p>
      Here, m1 would prefer to marry w1 before wn and so on. This preference
      list is a complete order, which means that there are no ties between
      members of the list, and each member of the other set is present in every
      list. Each person may or may not have the list. Instead of spending an
      eternity analyzing the problem statement again, we’re just going to get
      into the problem at hand.
    </p>
    <p>
      Our goal is to find a perfect, stable matching of the sets. What does that
      mean? Well, a perfect matching is a matching where each person has exactly
      one partner. Doesn’t seem so hard right? Well that’s where the stable part
      comes in. This one’s a little harder to explain. Let’s say we have some
      arbitrary men a and b and some arbitrary women x and y:
    </p>
    <img src="@/assets/CS180/img5.png" />
    <p>
      At the end of the algorithm’s execution, let’s imagine these men and women
      are matched as follows:
    </p>
    <img src="@/assets/CS180/img6.png" />
    <p>Now let’s imagine these pairings have preference lists as follows:</p>
    <img src="@/assets/CS180/img7.png" />
    <p>
      Essentially, both a and y would rather be matched with each other than
      their current matchings. This is called an unstable pair. As long as an
      unstable pair exists, the entire matching is also unstable. So there’s our
      problem. How can we match everyone while keeping the matching stable? Are
      we even sure it’s possible? Yes it is, and it’s actually easier than you
      think.
    </p>
    <p>
      So let’s start off with a first intuition. Let’s take a man mi and make
      him propose to a the first woman on his preference list like we’re living
      in some third-world country. The woman will either accept or decline his
      proposal, which we will set up later. If declined, the man will move on to
      the next woman on his list and so on and so forth. Obviously, mi won’t go
      back and re-propose to a woman that rejected him, because that would be
      embarrassing and sad. Therefore, any man will propose to a maximum of n
      women. Make sense so far? Good.
    </p>
    <p>
      If a woman chooses to accept mi‘s proposal, we create a temporary match
      between him and the woman. mi is happy because, based on the algorithm,
      this woman is his best available option since he proposes from most
      preferred to least.
    </p>
    <p>
      How about from the woman’s perspective? Well, for the sake of creating
      this algorithm we’re gonna say the women have no say in who they propose
      to. Sorry women’s rights movements. The women do, however, get the option
      of declining proposals, so how do we set that up? There’s a couple
      possibilities. The first is that the woman is unmatched. If the woman is
      unmatched, she will say yes because she wants to be married. Am I gonna
      get cancelled? The other obvious case is that the woman is matched.
      However, within this case we have 2 subcases. If the woman is currently
      matched with a man lower on her preference list than the one proposing,
      she will leave her old match and accept the proposal. mi is a homewrecker.
      If the man is lower on the woman’s preference list than her current match,
      she will reject him since she’s happier with her current match. Big sad
      for mi.
    </p>
    <p>
      We can now see that women are given the option to leave, which is why we
      said we created a temporary match for each proposal. If we continue this
      algorithm until each man is paired with a woman, we’re actually guaranteed
      to arrive at a stable matching, and we have correctly implemented the
      Gale-Shapely algorithm. As we’ll come to learn in this class, that means
      absolutely nothing unless we can describe how efficient this methodology
      is, and if we can prove it. Here we go.
    </p>
    <p>
      So, as we already mentioned, for any given man, he will propose to a
      maximum of n women. Since there are n men, the total number of proposals
      that occur in the worst-case is n x n, or n^2. Of course there are a few
      steps that happen per proposal (find the woman, have the woman check if
      the man is better than her current match, etc.), but these are all assumed
      to be constant-time operations, so we’ll just say this algorithm is
      O(n^2). Ok, well there’s part of our analysis done.
    </p>
    <p>
      Now comes the hard part. We need to prove this algorithm actually works
      for any given scenario. Let’s go back to the proof by contradiction that
      we introduced in the last section. Imagine that our algorithm finishes
      execution and, oh no, this structure exists somewhere in the set:
    </p>
    <img src="@/assets/CS180/img8.png" />
    <p>
      As we can see, this is an unstable matching, and, if this structure does
      occur, our algorithm would be broken and trash and garbage and bad.
      Remember that the solid line implies that m prefers w‘ over his current
      match w, and w‘ prefers m over her current match m‘. The first question we
      want to ask now is did m propose to w‘?
    </p>
    <p>
      There are obviously exactly 2 options: yes and no. If m never proposed to
      w‘, the fact that he ended with w means that he proposed to w before
      proposing to w‘. This would mean m must prefer w to w‘. However, this
      contradicts the configuration that we created above. This tells us that it
      is impossible for m to propose to w without proposing to w‘ first.
    </p>
    <p>
      Now, the only other possibility is that m did propose to w‘ before
      eventually proposing to w. This proposal could have been either accepted
      or rejected, but we don’t know for sure. Now, since the final result shows
      that m ends up with w, we know that, at some point in the algorithm’s
      execution, w‘ has been matched with some m” (more on this later), such
      that m” > m on the preference list of w‘. If you think about it for a few
      seconds, you’ll see this is true, regardless of if m‘s proposal was ever
      accepted, so we don’t have to worry about that anymore. So now, we know
      that w‘ is matched with some m” at some point in the algorithm’s
      execution. We also know that w‘ ended up matching with m‘, which tells us
      that m‘ > m“. By transitivity, we know that, in order for this to occur,
      the condition m‘ > m” > m must hold. Ok, I don’t know about you, but my
      smol brain is telling me we have a contradiction. Our assumption was that
      m > m‘, but we’ve just shown that that’s actually as broken as my will to
      live.
    </p>
    <p>
      Now, why did we use the intermediate value m“? Well, as I said at the
      beginning, this proof must apply to all possible cases. It is very likely
      that sometime in the execution of this algorithm, w‘ would be matched with
      neither m nor m‘. As a result, we use this value m” to generalize our
      proof for all cases. It’s worth noting that the man represented by m”
      could be the same man represented by m‘, which would simplify our proof,
      but since that isn’t true for all cases, we cannot use it here.
    </p>
    <p>
      Bam, we’re finally done. So obviously this algorithm can be a bit
      overwhelming. The general concept for the problem isn’t even that hard,
      but there’s a lot of stuff that we have to add in for the purposes of this
      class that makes it significantly worse. Pretty much everything’s gonna be
      like this, but you’ll get used to the pain and suffering soon enough.
    </p>
    <h3 ref="1.3">Unit 1.3: Order Notation</h3>
    <p>
      So far when we’ve been doing our time complexity analysis, we’ve mostly
      just hand-waved a lot of the analysis away. Before we move on, we need to
      formally define our methodology for determining complexity. Let’s take the
      following expression:
    </p>
    <img src="@/assets/CS180/img9.png" />
    <p>
      We say that if the above expression is true, then there exists some
      constants c and n0 such that for all n ≥ n0:
    </p>
    <img src="@/assets/CS180/img10.png" />
    <p>
      Ok, you probably don’t know what that means. I sure didn’t. Essentially,
      we’re saying that to identify a time complexity function T(n) as order
      f(n), we must satisfy the second statement above. T(n) and f(n) can be
      whatever function in terms of n: log n, n^3, whatever you want. Let’s
      simplify things a little more.
    </p>
    <p>
      Let’s remember that, for most things in computer science, we don’t care
      about small problems. We like to solve very large-scale problems. That
      idea is reflected in the concept n ≥ n0. We’re essentially saying that for
      some value of n greater than some arbitrary n0, our algorithm falls under
      a certain time complexity. We can visualize this with a graph as follows:
    </p>
    <img src="@/assets/CS180/img11.png" />
    <p>
      As you can see, the function f(n) is greater than T(n) for all n greater
      than n0. Despite it T(n) being greater than f(n) for values below n0, we
      don’t care about that section at all. Ignore it like a bad ex.
    </p>
    <p>
      So that’s the n explained, what about the c? Well imagine we make this
      small modification to the graph:
    </p>
    <img src="@/assets/CS180/img12.png" />
    <p>
      Well now our time complexity function is greater than f(n) for all n ≥ n0.
      Pack it up, our algorithm sucks, we’re done. Haha. Kidding. This is where
      we see why we use the c coefficient. Remember that the condition we have
      to satisfy is T(n) ≤ cf(n). This means we can multiply f(n) by whatever
      constant we want, allowing us to change the graph once more:
    </p>
    <img src="@/assets/CS180/img13.png" />
    <p>
      Once again, our condition is satisfied. What we can see from this is that
      the c pretty much allows us to hand-wave other coefficients, and instead
      focus on the order of n.
    </p>
    <p>
      Let’s do some simple examples. By these definitions, can we say that n^2
      is of order n^3? Well, for all values greater than 1, n^3 is greater than
      n^2, so yes, we can. How about n^2 + 40? Same thing applies. As long as
      our n0 is large enough, n^2 + 40 will always be less than n^3.
    </p>
    <p>
      How about we flip things around? Can we say that n^3 is order n^2?
      Depending on our constants, this may initially be true. However, no matter
      how high we raise our value of c, there will always be an n0 where, for
      any n after it, n^3 is greater than n^2. This means that we cannot say an
      algorithm that runs in n^3 is order n^2. Hopefully these examples weren’t
      too hard. Or hard at all. Come on, I know you’re smart, ok?
    </p>
    <p>
      So with that background, we now have a better understanding of what we
      were taught in CS 32. This order notation is the reason that complexity
      analysis tends to ignore coefficients and lower-degree terms. At the end
      of the day, the only thing that really matters is the highest degree of n.
      So, if we had something like 5n + 30 + 3n^1/2, who cares about the
      complicated stuff? All we need to know is that this algorithm runs in O(n)
      time. Finally, something’s allowed to be easy for once.
    </p>
    <p>
      Just for convenience’s sake, here’s a few common complexities we’ll see
      throughout this course, listed from best to worst:
    </p>
    <img src="@/assets/CS180/img14.png" />
    <p>
      When it comes down to algorithm design, our absolute biggest concern is
      pushing our runtime towards the left side of this list. We do not want to
      waste time worrying about reducing coefficients or lower-degree terms.
    </p>
    <p>
      While we’re talking about this, let’s introduce something we’ll use a
      little bit later in the class. Let’s define a new variant of this
      notation:
    </p>
    <img src="@/assets/CS180/img15.png" />
    <p>
      Similar to our original notation, we define some c > 0 and n ≥ n0 such
      that:
    </p>
    <img src="@/assets/CS180/img16.png" />
    <p>
      As you can see, here, we have exactly the opposite of our O notation.
      We’ve gone over the mechanics above, so we’re not gonna repeat them again
      because my midterm’s in less than a week and I still have 5 lectures to
      write up. We will say that, for example, we can say that n^2 = O(n^3),
      just like we can say that n^3 = Ω(n^2). This notation is useful for
      lower-bound analysis, which we won’t be dealing with for a bit, but just
      keep this stored away in your RAM. Haha I’m a ~ quirky ~ CS major.
    </p>
    <h3 ref="1.4">Unit 1.4: Interval Scheduling</h3>
    <p>
      Ok, new problem time so we can wrap up the unit. Let’s assume we have a
      set of tasks with fixed start times and end times. These tasks therefore
      take up an interval of time and may or may not overlap with other tasks.
      The question we will try to answer is, if we can only do one task at a
      given time, which tasks should we do if we want to do the highest number
      of total tasks?
    </p>
    <p>Let’s draw a picture for the visual learners out there:</p>
    <img src="@/assets/CS180/img17.png" />
    <p>
      Obviously, like with all algorithms, we don’t care about small amounts of
      data. I drew 3 intervals here because, despite what you may think, I don’t
      actually have the time to draw out 8 billion intervals for you, so just
      use your imagination. To guide your imagination, let’s say that we have n
      intervals. This means our input to this problem consists of 2n inputs – n
      starting times and n ending times.
    </p>
    <p>
      Now, this problem setup has many, many variations, but we’ll focus on
      maximizing total number of tasks to introduce the topic. Making sure we
      understand the problem statement, let’s give the algorithm a shot.
    </p>
    <p>We’ll start by drawing yet another picture:</p>
    <img src="@/assets/CS180/img18.png" />
    <p>
      Before we do anything complicated, I want you to answer the question
      yourself. What is the largest number of tasks you could do here with no
      overlap?
    </p>
    <p>
      If you answered 3, you’re correct. We should also ask ourselves, is this
      solution unique? The answer of course is no. The sets {A, B, C} and {A, E,
      C} both contain 3 elements, and are both valid. With that in mind, let’s
      try to use the intuition we had during that solution to generate some
      algorithm for the problem.
    </p>
    <p>
      The basic intuition we’ll start with is part of greedy algorithm design.
      This means taking part of our data and just adding it to the solution
      while adjusting the remaining data to fit the bounds of the problem. We’ll
      learn more about what that means later, but let’s just do this specific
      case first. In this case, the basic greedy step we’ll be performing is
      picking an interval based on some condition, adding it to our solution,
      and then deleting all intervals that overlap with it from our dataset.
    </p>
    <p>
      Ok, so what should our condition be. Oh, I have an idea. Let’s do what we
      did in the famous problem and stable matching problem and arbitrarily pick
      an interval to start with. I’m so smart. Wait:
    </p>
    <img src="@/assets/CS180/img19.png" />
    <p>
      What happens if our algorithm arbitrarily picked A? Well our algorithm
      would put A into the solution and then proceed to delete B and C since
      they overlap with A. It would then tell us that the maximum number of
      tasks you could do was 1. Well, visually we can see that we can perform
      both B and C, which is 2 tasks. According to my calculations, 1 &lt; 2, so
      my algorithm is a massive failure.
    </p>
    <p>
      Let’s try to learn from this failure. What if we actually put some thought
      into what we choose. How about we go from left to right and pick the
      shortest interval available to us? Logically, the shortest interval should
      end up deleting less intervals. Ok, I like where this is going. Let’s try
      this out:
    </p>
    <img src="@/assets/CS180/img20.png" />
    <p>
      So our algorithm will run left to right. It finds A and B and checks to
      see which is shorter. It sees B is shorter, therefore it adds B to our
      solution and deletes A. It then proceeds to add the rest of the intervals
      to our solution and return 4. Yay! It worked. That must mean our algorithm
      is now correct and we’re the best right?
    </p>
    <p>Wrong.</p>
    <p>
      We have proved our algorithm worked for this one specific example. If you
      test out a few more, you’ll eventually find an example that looks
      something like this:
    </p>
    <img src="@/assets/CS180/img21.png" />
    <p>
      So the algorithm checks from left to right and finds B as the shortest
      available interval. It then adds B to the algorithm and deletes both A and
      C – wait. Yeah, we failed again. Well, what now? We keep trying and trying
      until we arrive at the following.
    </p>
    <p>
      If we analyze what’s been going wrong in our attempts, we simply keep
      picking intervals that overlap with too many other intervals, so how can
      we avoid this? I’ll skip the multiple other failed algorithms and just
      tell you that we want to pick the interval that has the earliest endpoint
      out of all our available intervals. This guarantees minimal overlap, and
      we’ll prove this now. It’s actually pretty cool.
    </p>
    <p>Let this be the set of intervals returned by our algorithm:</p>
    <img src="@/assets/CS180/img22.png" />
    <p>
      We need to be general, so the only thing we can say about this solution is
      that it contains no overlapping intervals. Let’s say David Smallberg comes
      along and tells us that he found a better solution. His solution looks
      something like this:
    </p>
    <img src="@/assets/CS180/img23.png" />
    <p>
      His solution shares the first i intervals as ours. However,
      das@cs.ucla.edu claims that we made a mistake at interval i + 1. Remember,
      David believes his solution is more optimal than ours, which means his
      solution must have more intervals than ours. Let’s draw our solutions one
      on top of the other:
    </p>
    <img src="@/assets/CS180/img24.png" />
    <p>
      So the first difference between these solutions occurs at a in our
      solution and b in his. Now, based on the structure of our algorithm, we
      know that a must end before or at the same time as b because we’re taking
      the earliest possible endpoint. As a result, we can simply take David’s
      solution and replace b with a. Continuing to leverage our algorithm, we
      can continue to replace all of Smallberg’s solution set and replace it
      with ours. Each of these substitutions is necessarily valid based on the
      logic laid out above. Now, this continues until the last interval in our
      solution replaces an interval in the other solution. As we said, there
      must be more remaining intervals in the other solution for it to be more
      optimal than ours. However, since our endpoints are guaranteed to be the
      earliest possible, any remaining intervals would’ve simply been picked up
      by our algorithm. This means that there actually cannot be any remaining
      intervals after the substitution, and we have proven optimality by
      contradiction. Take that Smallberg.
    </p>
    <p>
      First unit done! Don’t get too excited yet, hard material starts next
      unit.
    </p>
    <h2 ref="2">Unit 2: Graphs</h2>
    <p>
      Thankfully, the upcoming material can be grouped up so that the sections
      are a little related. This does mean we’re going to need to go more
      in-depth on the material. It also means if you get lost early, you’ll be
      doomed later on, so make sure you get your foundations strong.
    </p>
    <p>
      We’re going to continue introducing some more proof techniques as we go,
      and our complexity analysis is going to be a little more annoying. Once we
      define everything, we’ll start to see some patterns as we move on. Let’s
      go!
    </p>
    <h3 ref="2.1">Unit 2.1: Breadth-First Search</h3>
    <p>
      So, a graph consists of a set of vertices/nodes and a set of edges/links.
      We can write this as G = (V, E), where V = {v1, v2, …, vn} and E = {e1,
      e2, …, em}.
    </p>
    <p>
      Within graphs, we like to identify paths and cycles. A path is a series of
      vertices that are connected by edges, and will be a useful tool for our
      definitions later. In general, this class will focus on simple paths,
      which means there will be no repeated vertices in the path. A cycle is a
      path that begins and ends at the same vertex (kinda duh). Once again,
      we’ll be analyzing these in the context of some future problems.
    </p>
    <p>
      There can also be many types of graphs. The first distinction we’ll make
      is a directed graph vs. an undirected graph. A directed graph means the
      edges in the graph have a direction, while an undirected graph means the
      edges don’t. We’ll get into some other classifications as we run into
      them.
    </p>
    <p>
      Now, the most common thing we’ll do with graphs is searching. We’ll start
      with a breadth-first search. In a BFS, we attempt to search the neighbors
      of a node before moving forwards. Here, neighbors of a node mean the nodes
      that have an edge between them and the current node. Take the following
      graph:
    </p>
    <img src="@/assets/CS180/img25.png" />
    <p>
      So here, nodes a, b, and c are neighbors of s. Likewise, s, e, and d are
      neighbors of b. You probably get the point. This means that when we begin
      a BFS at s, we will search a, b, and c in some arbitrary order. Once this
      is done, we search the neighbors of a, b, and c next. As you can see, e is
      a neighbor of both b and c. As the BFS executes, a searched node will be
      marked as such, so e will only be searched one time. The BFS terminates
      once there are no more nodes to search. The construction of all nodes and
      edges used by BFS is called a BFS tree. The resultant tree from the graph
      above might look something like:
    </p>
    <img src="@/assets/CS180/img26.png" />
    <p>
      From this tree, you can see that e was discovered by c, which means the
      path from b to e that was present in the original graph is now gone from
      the BFS tree. This is a result of the fact that BFS trees don’t recheck
      discovered nodes. From that, we can pull together another property of BFS
      trees and trees in general: trees cannot contain cycles.
    </p>
    <p>
      Let’s move onto something a little more useful. We’ll start by taking the
      tree above and making it a little neater:
    </p>
    <img src="@/assets/CS180/img27.png" />
    <p>
      Visually, it seems pretty reasonable that we can separate this tree into
      levels as follows:
    </p>
    <img src="@/assets/CS180/img28.png" />
    <p>
      Remember that we said a tree cannot contain cycles. This tells us that it
      is impossible for there to be an edge within a single level of the BFS
      tree, as that would create a cycle automatically.
    </p>
    <p>
      So, why are these levels useful? Well they aren’t just yet. First, we need
      to define another graph concept: distance. Distance, for the purposes of
      this argument, is the length of the shortest path between vertices. I
      claim that the levels of the BFS tree are exactly the distance between the
      root of the tree and the nodes within that level. For instance, this means
      that the distance between s and d in the BFS tree above is 2, since s is
      the root and d is on level 2.
    </p>
    <p>
      Do you agree or disagree? If you disagree, well, you’re wrong, but good.
      Like I said in the last unit, nothing in this class means anything without
      a proof, so don’t take anything I say at face value. I’m literally taking
      this class too remember? Let’s try to make you believe me for real.
    </p>
    <p>
      Let’s take a single path in a BFS tree (so not the whole BFS tree) as
      depicted below:
    </p>
    <img src="@/assets/CS180/img29.png" />
    <p>
      This tree depicts some path from s to xL in a BFS tree. Note that L is
      just some generic level, there may or may not be levels after it. As a
      reminder, our goal is to prove that the level a vertex is on is going to
      be the distance from that vertex to the source. Let’s dive into a
      contradiction.
    </p>
    <p>
      Let’s say that the vertex xL is actually a distance i from the source,
      where i &lt; L. Let’s draw this imaginary path out:
    </p>
    <img src="@/assets/CS180/img30.png" />
    <p>
      So by our assumption, the path containing the y nodes reaches xL in a
      shorter path length than the path containing the x nodes. Now, I drew the
      paths as completely distinct, but that isn’t necessarily true. For
      instance, y1 could be the same node as x1, however, it would be much
      harder to draw so this is what you get.
    </p>
    <p>
      Another tricky thing that might trip you up is that the y-path is not part
      of the BFS tree. Remember that we’re trying to prove a property of the BFS
      tree, so we’re trying to use the properties of the general graph to
      contradict it. What this tells us is that the node y1 would be in level 1
      of the BFS tree. Here’s the tricky part. The node y2 would then be in
      level 2 or less of the BFS tree. We have to note that, for all we know, y2
      is also contained in level 1. This is because we’ve clarified that the
      y-path is part of the general graph, which means there is no guarantee
      that nodes between “levels” don’t exist. If you’re confused about what
      this means, go back to the first graph/BFS tree pairing above and pretend
      that b and c had an edge between them. The BFS tree would remain the same,
      but the graph would display the property that we’ve been discussing. This
      is critical to the proof so make sure you understand it before moving on.
    </p>
    <p>
      If we continue this logic down the y-path, we arrive at the statement that
      xL must be located at level i or less in the BFS tree. The issue is, we’ve
      established that xL is on level L of the BFS tree. This would seem to
      imply that level L is either the same as level j or before level j.
      However, remember that we said that, in order for this to contradict our
      claim, j &lt; L. End of proof by contradiction.
    </p>
    <p>
      Now, if you were in my lecture, you’d hear about 15-20 minutes of
      questions on this proof. I personally think I explained it in a clearer
      way than my professor, but I also have no teaching credentials, much less
      a PhD, so who knows. The point is, if you’re confused about this proof,
      you definitely aren’t alone. Don’t panic, just make sure you get it by the
      time your midterm rolls around.
    </p>
    <p>
      Now for the last thing to cover for BFS to be useful as a building block.
      We need to figure out time complexity. Thankfully, it’s gonna be pretty
      easy this time around. If you think about the functionality of the
      algorithm, you notice that we have to traverse every single edge and node
      and perform a variety of constant-time operations on each of them.
      Therefore, if we say our graph has n nodes and e edges, our overall
      algorithm is O(n + e).
    </p>
    <p>
      Done and done. Like I said, this is going to be a building block for later
      algorithms in the unit, so definitely don’t wait to get this stuff under
      your belt. There’s no shame in review things a couple times, ok?
    </p>
    <h3 ref="2.2">Unit 2.2: Depth-First Search</h3>
    <p>
      Onto our next search. A DFS, or depth-first search is the same general
      concept as a BFS. This time, however, we’re going to look at a node’s
      child nodes before looking at its neighbors. Let’s take the graph below:
    </p>
    <img src="@/assets/CS180/img31.png" />
    <p>
      So what would a DFS do? Well, just like BFS, we’d start at some
      predetermined source node, in this case, s. We would then search one of
      s‘s neighbors, like a for instance. Now, if this were BFS, our next step
      would be to search b or c, as those are a‘s neighbors. But this is DFS –
      watch out for that alveolar stop (s/o to Ling 1).
    </p>
    <p>
      In a DFS algorithm, the next node to search would be one of a‘s children,
      so d or e. Let’s imagine we search d. After its added to our DFS tree, we
      move on to its only child node: f. Ok, now what? There’s nowhere else to
      go, so we go back up. d has no more child nodes to explore, we’re going
      back again. a does have another child node, so let’s go explore e. Now,
      your intuition might be telling you there’s nowhere to go from there, but
      think a little harder. b is in fact a child node of e, so we explore it
      now. If we trace back to a node that has an unexplored child node, we’ll
      find our way back to s, where we will then explore c, finishing our
      algorithm. The resulting DFS tree of this process looks like:
    </p>
    <img src="@/assets/CS180/img32.png" />
    <p>
      Of course, we could follow our BFS example and assign levels to our tree,
      but that would be as useless as this guide. Of course, this DFS tree isn’t
      unique for the graph we had. If we had decided to explore b first, the
      tree would’ve changed dramatically. Try it for yourself.
    </p>
    <p>
      Now, just as BFS trees contain information about shortest paths, DFS trees
      contain information about cycles. Instead of covering that here, we’re
      actually going to cover it a little later in the guide because Majid said
      so.
    </p>
    <p>
      Since we’re putting the actual applications for this stuff off for now,
      we’re actually done with the section. Nice and easy right?
    </p>
    <h3 ref="2.3">Unit 2.3: Graph Mechanics</h3>
    <p>
      Up until now, we’ve done a lot of hand-waving of what goes on behind the
      scenes when it comes to graphs. Unfortunately, that’s going to have to
      change for our analyses moving forward, so before we get too stuck in,
      let’s lay pout some basic mechanics here.
    </p>
    <p>
      For now, let’s assume any graph we’re talking about is undirected and
      connected (there is a path from any vertex to any other vertex). As usual,
      we will say our graph has e edges and n vertices. What is the minimum
      number of edges in terms of the number of vertices? I’ll give you a
      second.
    </p>
    <p>
      If the answer you came up with was e = n – 1, congratulations, you’re
      really smart. An example like this one should make this obvious enough:
    </p>
    <img src="@/assets/CS180/img33.png" />
    <p>
      As you can see, we have a starting vertex, and then for every vertex you
      add afterwards, an edge must be added to connect it to the rest of the
      graph. The same logic applies for other graphs like trees as well. Knowing
      this, we can set the lower bound of e as e ≥ n – 1. How about the upper
      edge?
    </p>
    <p>
      Well, for there to be the maximum number of edges, each node must be
      connected to every other node. That means each vertex must have n – 1
      edges connected to it. However, let’s say that node a is connected to node
      b. When we count the number of edges connected to node a, we have n – 1.
      The same number comes up when we count for node b, but we’ve already
      counted the edge connecting a and b, so we subtract 1. We can then say
      there are n – 2 new edges connected to b. If we follow this along, we
      essentially get that there are (n – 1) + (n – 2) + … + 1 distinct edges in
      the graph. If we calculate this summation of integers, we find that there
      are at most n(n – 1) / 2 edges in a graph.
    </p>
    <p>
      This can of course be solved for in a variety of other methods, such as
      using combinations, but who really cares? All that we want to know now is
      that we have our upper bound of edges and lower bound:
    </p>
    <img src="@/assets/CS180/img34.png" />
    <p>
      If we translate this into order notation, we know that exploring every
      edge is equivalent to O(n) in the best case and O(n^2) in the worst case.
      Graphs closer to the O(n) case are called sparse graphs, while graphs
      closer to O(n^2) are dense graphs. As we’ll see later in the unit, some of
      our algorithms’ runtime are going to depend on this distinction, and we
      might even end up having to change part of our approaches for different
      situations. But that’s for later.
    </p>
    <p>
      For now, let’s continue on by trying to answer a question you may have had
      since we started the unit. How do we represent graphs? There’s actually a
      couple different approaches, each with their own pros and cons, so let’s
      check them out.
    </p>
    <p>
      The first method is an adjacency matrix. Let’s say we have a graph that
      looks like:
    </p>
    <img src="@/assets/CS180/img35.png" />
    <p>
      To represent this as an adjacency matrix, we’d set up a matrix like this:
    </p>
    <img src="@/assets/CS180/img36.png" />
    <p>
      If any node i has an edge to a node j, we put a 1 at the entry i, j.
      Otherwise, we put a 0. Depending on the problem, we may or may not define
      a node as connected to itself, so the main diagonal may contain all 0s or
      all 1s. From the graph above, out matrix would look something like:
    </p>
    <img src="@/assets/CS180/img37.png" />
    <p>
      As you may have noticed, our matrix is symmetric across the main diagonal.
      This is a property shared by all undirected graphs (think about it for
      like ~2 seconds), so oftentimes, we just fill in the top-right triangle.
      Do whatever you’re comfortable with. Now, of course, this representation
      of a graph requires roughly n^2 entries, so it takes up a lot of space in
      memory. On the other hand, operations like checking if a connection exists
      are very quick and essentially constant time due to them being simple
      array accesses. What about the other representation that I promised you?
    </p>
    <p>Another way we could represent the same graph is with a linked list:</p>
    <img src="@/assets/CS180/img38.png" />
    <p>
      In this representation, every node holds a linked list containing all the
      nodes it’s connected to. Pretty self-explanatory right? Well how much
      space does this one take up? In an undirected graph, saying a is connected
      to b is just as valid as saying b is connected to a. As a result, we have
      to represent both connections in our linked list. For this reason, each
      edge is represented twice, leading to this structure taking up roughly 2e
      entries in memory. Operations on this data structure may be fairly slow,
      up to O(n) in the worst case, as you have to continually traverse the
      linked list of a node to search for a connection.
    </p>
    <p>
      So which is better? Like many things in this class, it depends on the
      problem at hand. Unfortunately for us, there isn’t a single answer, so
      we’ll just have to keep both in mind moving forwards.
    </p>
    <h3 ref="2.4">Unit 2.4: Topological Sort</h3>
    <p>
      Ok, so we probably know what sorting is. What the hell does topological
      mean?
    </p>
    <p>Let’s imagine we have a set of tasks:</p>
    <img src="@/assets/CS180/img39.png" />
    <p>
      Let’s pretend some of these tasks must be done before others. If a task
      has to be done before another, we draw a directed edge from the first task
      to the second as follows:
    </p>
    <img src="@/assets/CS180/img40.png" />
    <p>
      Given this directed graph, our goal is to output a sorting of each task
      such that every task’s prerequisites come before it. Let’s start by doing
      this with words. So, before any tasks can be done, a must be finished, so
      it must come first in our sorting. Next, we could do any of b, c, or d.
      For fun, let’s do c and d first. Doing d allows us to to f, so we’ll put
      that next. Now, the only available task is b, so we append that to the
      list. Finally, since b and d have been finished, e can be put in. The
      output of this process looks something like:
    </p>
    <img src="@/assets/CS180/img41.png" />
    <p>
      Ok, how on earth do we develop an algorithm around this? Well before we
      can start, how about we get an edge case out of the way first? Give me a
      topological sorting of this graph:
    </p>
    <img src="@/assets/CS180/img42.png" />
    <p>
      Did you do it? Yes? Well you’re wrong. It’s impossible to make a
      topological sorting for an graph with a cycle in it. For this reason, the
      graphs we will be working with for this section will all be acyclic. Let’s
      be even more specific. Every graph we run into will be a DAG – a directed
      acyclic graph.
    </p>
    <p>
      Ok, now we can begin out work on the algorithm. Sort of. We’ll need to
      build up some more tools that are going to allow us to solve this. Let’s
      define the term indegree as the number of edges coming into a vertex and
      the outdegree as – you ready for this – the number of edges going out of
      the vertex.
    </p>
    <p>
      With these definitions, we can take things a little further. If a node has
      an indegree of 0, we call that node a source. Likewise, if a node has an
      outdegree of 0, we call it a sink. One aspect of a DAG we should get used
      to is that there must be at minimum 1 source in the graph. Feel free to go
      off and prove this to yourself.
    </p>
    <p>
      Now we can start with our algorithm. The first thing to do is find a
      source. We will then put the source in our solution and delete it from the
      graph, along with its outgoing edges. We can do this because the only
      information these edges give us is that a must come before any nodes they
      lead to. However, we’ve already placed the source in our solution, so we
      no longer need that information. Upon deleting this source, we can confirm
      that it’s impossible for the graph to suddenly become cyclic. This tells
      us that there must still be sources in the graph as long as there are
      remaining nodes. This allows us to wrap the process we’ve written so far
      in a loop that says “while there is a source”. We’re done.
    </p>
    <p>
      Before we go on to analysis, let’s do a little recap. We’re given a DAG.
      While there is a source, we will find some arbitrary source, place it in
      our solution, and then delete the source and its edges. At the end of
      execution, we will simply return the solution we generated.
    </p>
    <p>
      Let’s move onto the proof. We’ve actually gotten most of it out of the
      way, we just have to formalize it a little. Let’s assume we’re i sources
      into our algorithm and have hit a source a. Our solution so far looks
      something like:
    </p>
    <img src="@/assets/CS180/img43.png" />
    <p>
      To complete this proof, we’re going to use inductive reasoning (I hope you
      know what induction is). Our base case of course is a single source. There
      isn’t much to say about that one. you put it in the solution and you’re
      done. Yay. Now, we take this situation and assume the first i sources have
      been input correctly. All we need to prove is that a is input correctly.
      Well, a is a source, so by definition, if it had any nodes that preceded
      it, they have been included in the solution as part of i. So, we know a is
      allowed to be in the solution here. In addition, as we mentioned earlier,
      we can delete the edges coming out of a, since a is now in our source
      list. This means any nodes that need the edges from a preceding them no
      longer need that information. This inclusion of a is valid, and we’ve
      proven by induction that our algorithm is valid. Now we can yay. Yay!
    </p>
    <p>
      You may have noticed some blah blah blah-ing going on there. How do we
      actually get the sources/degrees for our algorithm? Let’s take a little
      tangent off of that problem and analyze indegrees and outdegrees. First
      let’s get an idea of how many indegrees and outdegrees we can have. As we
      know from earlier analyses, there are n – 1 other nodes in the graph, so
      the maximum number of indegrees and outdegrees is n – 1. This means each
      node may have to search through 2(n – 1) edges to calculate its in and
      outdegrees. If we wanted to find this information for each node in the
      graph, we’d have 2n(n – 1) operations, so the algorithm would take O(n^2).
      Well that kinda sucks.
    </p>
    <p>
      We can actually make it better. The analysis we did would be perfectly
      correct for a complete graph, or a graph where each node is connected to
      every other node. That’s obviously an edge case, so how can be do better?
      Well the analysis we just did is a vertex-centric analysis. What if we did
      something like this: we look at every edge and increment the outdegree of
      the node it comes from by 1 and increment the indegree of the node it
      leads to by 1. This is a perfectly valid method that performs multiple
      constant-time operations on each edge. This makes this approach an O(e)
      runtime. Well, that sounds a lot better than O(n^2). Of course, as we
      explained earlier in the unit, n^2 is the upper-bound of e, so it’s not
      technically always better, but it is more accurate for the problem at
      hand, so we’ll take it.
    </p>
    <p>
      Unfortunately, our analysis isn’t quite done. If you recall, our graphs
      are represented based on our nodes, not our edges. As a result, we still
      have to iterate through all our nodes to know what our edges are
      connecting. As a result, the final runtime of our algorithm is O(n + e).
      Despite the extra n term, the runtime is still better than our
      vertex-centric analysis, so who cares?
    </p>
    <p>
      So now, we know that in O(n + e) time, we have access to all the degrees
      of each node in our graph. By extension, we can use the definition of a
      source to say we know all the sources in the graph as well. To use our
      algorithm, we’ll throw all our sources into a source list, which we can
      then maintain throughout the algorithm. Since we also have degrees, we can
      then simply update our degrees as the algorithm runs. If, during the
      update, a node’s indegree becomes 0, we add it to the source list. These
      updates will happen once per edge, so there will be e updates. If we add
      this to the the runtime we get from iterating through each node, we see
      the body of the algorithm also has an O(n + e) runtime. It shouldn’t come
      as a surprise to you that the algorithm as a whole has an O(n + e)
      runtime.
    </p>
    <p>Ok, now we’re done, I promise.</p>
    <h3 ref="2.5">Unit 2.5: Connectivity</h3>
    <p>
      This section comes a lot earlier in the book that it does in lecture, so
      I’m really not sure why we’re just covering this now. Either way,
      connectivity is a pretty important property of a graph, so let’s just
      ZoomTM through it.
    </p>
    <p>Let’s say we have a single graph that looks like the following:</p>
    <img src="@/assets/CS180/img44.png" />
    <p>
      Note that this is a single graph, not 3 separate graphs. Whenever we have
      a valid path between 2 vertices, we say those 2 vertices are connected.
      Makes sense.
    </p>
    <p>
      This means that the 4 vertices on the left are connected to each other and
      the 2 vertices in the middle are connected to each other, while the
      rightmost vertex is not connected to any other vertex.
    </p>
    <p>
      One fairly basic property of connectivity states that if some vertex a is
      connected to some vertex b and a is also connected to some vertex c, b and
      c are also connected. This is pretty easy to prove since there must be a
      path from b to a as well as a path from a to c. Transitivity states there
      must also be a path from b to c.
    </p>
    <p>
      Another term we want to introduce is the idea of a component. Within a
      graph, a subset of vertices that are connected to each other are called a
      component of the graph. For instance, the graph above has 3 components.
      There are multiple methods to find these components, one such way is using
      BFS, but that’s pretty minor for our purposes. What we really want to get
      to is analysis of components in directed graphs. Take the following
      example:
    </p>
    <img src="@/assets/CS180/img45.png" />
    <p>
      Obviously a can get to b, but b can’t get to a. Would we still say a and b
      are connected? Instead of using these terms that are defined for
      undirected graphs and eh for directed graphs, we use some new terms. Most
      importantly for us, we replace connected components with strongly
      connected components. You better bet these components take their protein
      powder. A strongly connected component is a component made up of a set of
      vertices such that any vertex is able to get to any other vertex in the
      component. Take something like this:
    </p>
    <img src="@/assets/CS180/img46.png" />
    <p>
      All of b, c, and d can reach other, but none of them can reach a.
      Therefore, this graph has 2 strongly connected components, the cycle at
      the bottom and a at the top. Something we like about strongly connected
      components is that they don’t overlap. Oh wait. That’s useful information.
      We need to prove it. Sigh.
    </p>
    <p>
      Let’s imagine we have a vertex a. We claim this vertex is in a strongly
      connected component with vertex m. We also claim a is in a strongly
      connected component with vertex n. However, our final claim is that m and
      n are not in the same strongly connected component. This claim must be
      true for strongly connected components to be disjoint. Using very similar
      logic to our undirected case, by definition of a strongly connected
      component, a and m are mutually reachable and a and n are mutually
      reachable. Since you can get from m to a and from a to n, transitivity
      states we can get from m to n. The same logic works for the reverse, and
      we can prove n can reach m. Once again using the definition of a strongly
      related component, m and n are part of the same strongly connected
      component. Proof done. Strongly connected components are disjoint.
    </p>
    <p>
      Do note that, unlike undirected graphs, edges are allowed to exist between
      strongly connected components. A vertex a in component x can have an edge
      leading to b in component y, but the problem arises when b has a
      connection back to a.
    </p>
    <p>
      Nothing too complicated here, it was nice having a break from all the
      algorithms and proofs, but we’ll get back to that in the next unit, don’t
      relax just yet.
    </p>
    <h2 ref="3">Unit 3: Greedy</h2>
    <p>
      Ok, so we touched on our first greedy algorithm in the first unit with
      interval scheduling. Now, we’re going to use that methodology to solve
      some graph-related problems. We’re getting to the point in the class where
      everything is kinda different every lecture, so there might be a lot of
      short units ahead. My OCD is absolutely livid right now.
    </p>
    <p>
      While the material isn’t necessarily harder, there’s going to be a lot
      more of it as we move on. Just stay on track and you’ll be fine.
    </p>
    <h3 ref="3.1">Unit 3.1: Dijkstra's Algorithm</h3>
    <p>
      So, back in the BFS topic, we extensively covered a way to find the
      shortest path in an unweighted graph. The question now is, how can we do
      the same in a weighted graph. Obviously the same method won’t work for
      graphs like the following:
    </p>
    <img src="@/assets/CS180/img47.png" />
    <p>
      A BFS would end execution and claim that the right path from s to t is the
      shortest, but that’s not necessarily correct. Not only do we have to
      change our algorithm, but we have to change our definition of shortest
      path altogether. In the case of weighted graphs, when we say shortest
      path, we’re referring to the path with minimum weight.
    </p>
    <p>
      The algorithm we’ll be developing to solve this is going to be aimed at
      finding the shortest path from vertex s to t in a given graph. Based on
      the construction of this algorithm, we’re going to find that the
      side-effect of running this algorithm is that we actually find the
      shortest path from s to every other vertex in the graph as well. Useful
      algorithm is useful. Let’s get into it ASAP.
    </p>
    <p>
      To begin with, we need to make a very important assumption: none of the
      edges have negative weights. This is critical for the algorithm behaving
      correctly, so just assume it. Let’s imagine we have a section of a graph
      and this is the only information given:
    </p>
    <img src="@/assets/CS180/img48.png" />
    <p>
      For our purposes, the number in the brackets represents the shortest path
      from s to that vertex. It should be pretty self-explanatory why the
      shortest path from s to itself is 0. If it isn’t, well, I don’t know how
      to help you there.
    </p>
    <p>
      If you think back to BFS, you’d remember how every time we discovered a
      node, we’d essentially know the distance to that node. This is because we
      could just look at the level that the node was on and conclude that was
      the distance. Do you think we can do something similar here and say:
    </p>
    <img src="@/assets/CS180/img49.png" />
    <p>
      If you think that’s valid, then I wonder what you’ll think after I fill in
      a little more information:
    </p>
    <img src="@/assets/CS180/img50.png" />
    <p>
      So now, we can go from s to b with a weight of 2 and then from b to a with
      a weight of 1. As far as I know, 1 + 2 = 3 and 3 is less than 4, so
      explain that one Atheists.
    </p>
    <p>
      In all seriousness, this obstacle is the whole reason we need to find a
      new algorithm in the first place. We cannot conclude that we have found
      the shortest path until we’ve search every possible path. Or something
      like that at least. Remember back to the interval scheduling problem from
      the last unit. There, we used a subset of thinking called the greedy
      paradigm, where we used a piece of data and then stuck it in our solution.
      We’ll be using the same method here, which means we need to establish some
      criteria to get those pieces of data. Unlike last time, I’m not going to
      play dumb and pretend I don’t know the correct answer. I’ve wasted enough
      of your time already.
    </p>
    <p>
      So let’s take the same graph as above, but assign some arbitrary weights
      to our edges:
    </p>
    <img src="@/assets/CS180/img51.png" />
    <p>
      We’ll make the claim that w2 is less than w1 and w3. Since we want to
      follow the greedy paradigm, we’ll take w2 and claim that it is the
      shortest path to b:
    </p>
    <img src="@/assets/CS180/img52.png" />
    <p>
      Is this a valid claim? If these are the only 3 edges coming from s, the
      answer is yes. Why? Well, we know that w1 and w3 are both greater than w2.
      This tells us any path going through those 2 edges is guaranteed to be
      greater than w2 by the assumption that there are no negative edges; that’s
      why that assumption is so important to our algorithm. Based on that logic,
      since there’s no other paths to go down, w2 must be the shortest.
    </p>
    <p>
      Ok, awesome, let’s take that idea and expand on it. Following our previous
      step, we just look for the next lowest edge from s right? Wrong. All we
      know is w2 is the lowest edge. What if there are edges coming from b such
      that their weight plus w2 would be less than w1 or w3? That makes our next
      step a little more involved, but we got this.
    </p>
    <p>
      At the heart of our algorithm, we will first look at all known paths from
      the origin vertex. We will then follow the shortest path available to a
      node and proceed to finalize the shortest path to that node. Now, instead
      of returning back to the origin like our intuition may tell us, we’re
      going to search through all known edges coming out of nodes with finalized
      paths. In the case above, this means our next step will be to search all
      edges coming from s and b. So there’s the key to our greedy algorithm.
      Let’s visualize this for you using a continuation of the above graph:
    </p>
    <img src="@/assets/CS180/img53.png" />
    <p>
      As you can see, we’ve placed temporary weights on each of the
      non-finalized nodes. Emphasis on temporary. If we follow our algorithm, we
      want to find the minimum value out of each of these temporary weights.
      Once we do so, we can finalize the node that path leads to, by the same
      logic we described above. Starting to get the hang of the logic?
    </p>
    <p>
      Let’s generalize the step we just took. At some point in our algorithm’s
      execution, we’ll have a set of finalized nodes and a set of unknown nodes:
    </p>
    <img src="@/assets/CS180/img54.png" />
    <p>
      Within the set of unknown nodes, we have a subset of nodes that are
      neighbors to finalized nodes, depicted by the nodes with edges between the
      2 sets. The next step of our algorithm is to search through these neighbor
      nodes for the minimum weight available, and then move that node into the
      finalized set. This step is a generic step that could applied to any point
      in the algorithm. This step will continue repeating until we have no more
      unknown nodes. Not too bad right?
    </p>
    <p>
      Since we’ve weaved the proof all throughout our algorithm development, I
      won’t really put down a formal proof for you here. All you really need to
      know is that you can use induction with the generic step presented above,
      and you should be able to resolve your proof without too much trouble.
    </p>
    <p>
      Of course, we aren’t excused from all analysis though, because time
      complexity exists. Let’s look back at our generic step. Every time we move
      a node from the unknown set into the finalized set, we must ensure that
      all temporary weights in the unknown set are still the smallest value they
      can be. In the worst case, you’d have to update all nodes in the unknown
      set, so this may take O(n) time. Well that’s kinda bad. Let’s account for
      this a little better.
    </p>
    <p>
      When we move a node to the finalized set, the only values that may change
      are the direct neighbors of the node we moved. Therefore, instead of
      checking all nodes in the unknown set, we can just limit that search to
      the neighbors of the node we moved. Well, that still kinda sucks because
      that’s still generalized to O(n) time, which will change to O(n^2) by the
      end of the algorithm since we’d have to make that adjustment for each
      node. Wait, this sounds familiar. If we think about it, we only have to
      update when there’s an edge connecting a node to its neighbors. Since each
      edge can cause a maximum of 1 update, we can simply say there will be O(e)
      updates throughout the entire algorithm. Like always, we like that more
      than O(n^2).
    </p>
    <p>
      You may have noticed I just skipped over a part of this algorithm in our
      analysis. We kinda just took for granted that we knew the minimum of the
      unknown set. Sadly, we don’t. If we suck, we could run a linear scan of
      the entire set every time we want to find the minimum, but that sounds
      pretty awful, so let’s not. Instead we’ll be using a data structure that
      we haven’t used since CS 32: the heap. The heap is a data structure that
      is represented by a binary tree such that the root of each subtree is the
      minimum value of that subtree. We’re not going to get super into the
      details of this just yet, all we should know for now is that accessing the
      minimum of a heap takes O(1) time. Sick. After that we have to include the
      complexity of updating the heap, or heapification. Yes, that’s a real
      word. Despite everything we’ve taught in this class, we won’t prove this
      now, but the runtime of this process is O(log n) time. Ok now we can
      finish our complexity analysis.
    </p>
    <p>
      Since every time we look at an edge, we have to extract the minimum and
      update the heap, our overall runtime is O(e log n). If you want a quick
      little math puzzle (who doesn’t), prove that this is actually the same as
      O(e log e). Other than that, we doneeeee.
    </p>
    <h3 ref="3.2">Unit 3.2: Prim's Algorithm</h3>
    <p>
      Ok, it’s time for us to take a look at the problem statement we’ll be
      looking at for the next 2 sections. Let’s imagine a connected, undirected,
      weighted graph such as:
    </p>
    <img src="@/assets/CS180/img55.png" />
    <p>
      If we were to remove any set of edges or nodes from the graph above, we
      would create a subgraph of the graph. When we perform this process, the
      graph that is left behind potentially takes on a new topology. For now,
      we’ll focus on tree subgraphs. Any tree subgraph that still contains all
      nodes from the original graph is called a spanning tree.
    </p>
    <p>
      The goal of this problem is to find the minimum weighted spanning tree
      possible, given the graph above. If we wanted to make a spanning tree from
      the graph above, we could remove edges (b, c), (b, d), or (c, d). However,
      in order to get the minimum spanning tree, we must remove (c, d), since
      that is the removeable edge with the largest weight. No fat-shaming
      involved.
    </p>
    <p>
      Let’s get started with our first attempt. Remember that we’re in the
      greedy unit, so the goal is to take part of the problem and put it in our
      solution. Within graphs, there are 2 general pieces: nodes and edges.
      We’re going to start here by focusing on the nodes. We’ll take each node
      in the graph separate them into 2 partitions. By the definition of a
      partition, each node must appear in our partitions exactly once, and
      neither partition can be the empty set. With the knowledge that the graph
      is connected we know that there is at least 1 edge that travels between
      the 2 partitions. Here’s an arbitrary case of what we’re talking about:
    </p>
    <img src="@/assets/CS180/img56.png" />
    <p>
      From here, we’re going to identify the minimum weight edge that travels
      between the 2 partitions and label it emin:
    </p>
    <img src="@/assets/CS180/img57.png" />
    <p>
      The claim is that there exists a minimum spanning tree of the graph that
      contains emin. Extraordinary claims require extraordinary proof, so let’s
      go. By contradiction, let’s assume there exists some minimum spanning tree
      that doesn’t contain emin. By the definition of a tree, this MST contains
      n – 1 edges. From here, let’s add emin into the MST. Since the graph now
      has n edges, it must now contain a cycle. Part of that cycle must also
      travel between both partitions based on our placement of emin. Let’s say
      we remove this edge ei that crosses both partitions, creating another
      spanning tree. The total weight of this spanning tree is the weight of all
      other edges, minus ei plus emin. Since we defined emin as the minimum
      weight edge that travels between the partitions, this new spanning tree is
      guaranteed to be a true MST.
    </p>
    <p>
      This idea is called the MST theorem. Time to abuse it to solve this
      problem.
    </p>
    <p>
      Let’s take a single node out of a graph and place it in partition V. The
      rest of the nodes will be place in partition W. This leaves us starting
      with something along the lines of:
    </p>
    <img src="@/assets/CS180/img58.png" />
    <p>
      The number of edges between V and W is equal to the degree of v1. Out of
      those edges, we will apply MST theorem to say that the minimum edge will
      be part of our MST. This edge connects to some arbitrary vk, which we will
      now bring over from W to V:
    </p>
    <img src="@/assets/CS180/img59.png" />
    <p>
      Now, we can repeat the process to use MST again. At this point, the
      minimum edge could be connected to v1 or it could be connected to vk. We
      really don’t care which one. We continue this process until all nodes have
      found their way to V, which tells us that this algorithm, called Prim’s
      Algorithm, has finished executing. Analysis time.
    </p>
    <p>
      Recall back to Dijkstra’s, where every time we moved a node from one set
      to the other, we had to update all of its adjacent edges. To make our time
      complexity analysis more accurate, we extended our analysis over the
      entire algorithm’s execution time, meaning there were a total of e such
      updates. Continuing the similarities, we’ll maintain a heap structure to
      keep track of the minimum edge between V and W. Just like Dijkstra’s, this
      results in an O(e log n) runtime.
    </p>
    <p>
      Now, if we consider that this algorithm is really just utilizing the MST
      theorem over and over again, we’d realize that we’ve already proved this
      algorithm’s correctness. Super convenient.
    </p>
    <p>
      Sadly, we’re not quite done with the problem yet, because there’s still
      one other approach we’ll be taking a look at in the upcoming section.
    </p>
    <h3 ref="3.3">Unit 3.3: Kruskal's Algorithm</h3>
    <p>
      Now that we’ve taken the node approach to the MST problem, let’s focus in
      on the edges. We will our graph has a total of m edges. The first
      requirement for this algorithm is that the list of edges in the graph be
      sorted by increasing weight. As you may have known, and as we’ll see
      later, sorting will take us O(m log m) time to complete, immediately
      adding overhead to this approach.
    </p>
    <p>Now, let’s throw up a visual to help us here:</p>
    <img src="@/assets/CS180/img60.png" />
    <p>
      We’re going to imagine that this is our graph with all of the edges
      removed. The first thing we’ll do is to take the first edge in our sorted
      list, e1, and place it into the graph:
    </p>
    <img src="@/assets/CS180/img61.png" />
    <p>
      Mimicking our method from last section, we’ll now separate a into its own
      partition:
    </p>
    <img src="@/assets/CS180/img62.png" />
    <p>Yeah, I know it looks awful. News flash, Google Drawings is awful.</p>
    <p>
      Now, due to MST theorem, we know that there exists an MST that contains
      e1. Sound familiar?
    </p>
    <p>From here, we’ll move on to taking care of e2:</p>
    <img src="@/assets/CS180/img63.png" />
    <p>
      Well how the hell do we partition now? Here’s where remembering exactly
      what MST theorem says is important. All we need to know is that, the edge
      that ends up as part of the MST only needs to be the smallest edge out of
      edges that cross both partitions. This means we can do something like:
    </p>
    <img src="@/assets/CS180/img64.png" />
    <p>
      We know that e2 is the lowest weighted edge in the graph besides e1. The
      thing is, MST theorem doesn’t care about e1 as long as it’s within the
      same partition. By the same reasoning as the last step, we know that e2
      must be part of the MST. At this point, it’s worth noting that this
      process of partitioning is not part of this algorithm, which is called
      Kruskal’s algorithm. These partitions are created for the sole purpose of
      using MST theorem, nothing more.
    </p>
    <p>
      So, are we done then? Can we write the algorithm? Well, imagine we
      continue this process until we run into this situation:
    </p>
    <img src="@/assets/CS180/img65.png" />
    <p>
      How can we create a partition that allows us to use MST theorem on e4? The
      point is, we can’t. No matter how hard we try, we can’t create partitions
      such that e4 is the smallest edge that crosses them. This is because we’ve
      created a cycle in the graph. That alone should already be suspect, since
      trees aren’t allowed to have cycles in the first place. So, what now? Can
      we give up? Well, the solution is pretty simple; we’re just going to skip
      over e4.
    </p>
    <p>
      Let’s put a more formal definition of the algorithm on paper now. We start
      Kruskal’s by sorting the edges from lowest weight to highest. For all i
      between 1 and m, we’ll consider the edge ei. If ei creates a cycle with
      previous edges that have been added to the MST, ignore it. Otherwise, add
      it to the MST. Pretty simple right? Well, not quite. You may have noticed
      that we waved aside a pretty important aspect of this problem? How do we
      detect a cycle?
    </p>
    <p>
      To answer that question, we have to take a detour into the world of
      obscure data structures. Let’s say we’re given a set of unique elements
      like:
    </p>
    <img src="@/assets/CS180/img66.png" />
    <p>
      We want to perform 2 different operations on this set. The first operation
      is find, where we want to find if 2 elements are in the same grouping. For
      instance, if we wanted to find if (1, 5) were in the same grouping, the
      answer would be yes, while (1,7) would be a no. The other operation is a
      union. To simplify future explanations, we’re going to name each grouping
      by the first element in the grouping, which means this set consists of
      groups 1, 3, and 7. This naming is arbitrary, so don’t get caught up on
      it. The point of a union is to take 2 groupings and merge them. Therefore,
      if we wanted to union (1, 3), we’d end up with:
    </p>
    <img src="@/assets/CS180/img67.png" />
    <p>
      Once this union occurs, we don’t care about what the original groupings
      were. As far as we’re concerned, group 1 has always contained 1, 5, and 3.
      This set of problems is called the union-find problem. CS people are so
      damn creative.
    </p>
    <p>
      The point of the problem is that we start with a set and proceed to
      perform an arbitrary number of unions and finds until some goal is
      achieved. In order to implement this efficiently, we need to implement a
      data structure called, you’ll never guess this one, the union-find data
      structure.
    </p>
    <p>
      Now, there are a lot of implementations that I could go through here and
      continuously misdirect you to show you bad time complexities and blah blah
      blah. However, the fact that you’re reading this means I’ve wasted enough
      of your time, so let’s just head to the final implementation. We start by
      representing each grouping as a balanced tree. This simply means that the
      height of each tree is going to be less than or equal to the log of the
      total number of nodes in the tree.
    </p>
    <p>
      In order to perform a find operation, we’ll access the elements in
      question and follow them back up to their root. If their roots are equal,
      then they’re part of the same tree and, therefore, part of the same
      grouping. In the worst case scenario, each element will take log n steps
      to traverse the tree, so the find operation is O(log n) in this structure.
    </p>
    <p>
      What about the union? The goal here is going to be to take the root of one
      tree and point it to the root of another. It’s important to note that
      these trees are not necessarily binary, so we don’t need to perform any
      fancy operations for this merge, redirecting the root is enough. Well,
      that’s an O(1) operation, which sounds great to me. So which root should
      we redirect? Well, if we redirect the shorter tree’s root, then we
      actually find that the height of the resultant tree is automatically less
      than or equal to the height of the larger of the original trees. That
      probably means very little to you, so here’s a diagram showing what I
      mean:
    </p>
    <img src="@/assets/CS180/img68.png" />
    <p>
      Since a is, by definition, smaller than b, we know that pointing the root
      of a to the root of b will result in a tree that contains all the nodes of
      a and b, but that has not grown in height. Remember that the point of this
      data structure is to efficiently solve the union-find problem, which means
      we need to be able to handle an arbitrary number of unions and finds.
      Since the height doesn’t grow, we preserve the runtime for our find
      operation, which seems like an A++ to me.
    </p>
    <p>
      The geniuses in the crowd are getting upset at me right now. They’re over
      there asking, “What if the trees are equal height?”. Well, don’t worry, I
      hate you guys too. Kidding of course. Logically, if the trees are the same
      height, we have to increase the height of the overall tree by 1. At first
      glance, that sucks because we lose our log n invariant on find’s runtime.
      However, if we think about it mathematically, this increase in height is
      accompanied by a doubling of the number of nodes in the tree. That
      relationship is exactly what describes the logarithmic function h = log2
      n. You don’t have to understand what that means, but the end result is
      that our invariant is preserved, and we can continue to flex our O(log n)
      find, O(1) union runtime.
    </p>
    <p>
      Ok, that was a long detour. How the hell does that help us detect cycles
      for Kruskal’s? Well, what we can do is, any time we add an edge to the
      MST, we’ll perform a union between the groups that those elements belong
      to. This means that our union-find groupings are going to consist of
      subtrees that we’ve formed throughout our algorithm’s execution. Before we
      perform this union, we’ll perform a find for each of the elements that
      we’re trying to connect. If both elements are in the same grouping prior
      to the union, they’re already in a subtree, and, therefore, creating a new
      edge between them would create a cycle. Bam, we’ve solved our problem. Add
      this union-find component of the algorithm to the general execution we
      defined earlier, and we have our counterpart to Prim’s and I can finally
      stop writing.
    </p>
    <p>
      Oh wait, time complexity exists. Ok, I’ll keep this short. The first sort
      that begins the algorithm has an O(m log m) runtime. For each edge, we
      perform a find and a union, which boils down to an O(log n) runtime. Since
      we do it for each edge, we have an O(m log n) runtime for our loop. As we
      stated in a previous section, log m and log n are the same when we analyze
      runtime, so we can say our final runtime of Kruskal’s is O(m log m). Yay,
      bye.
    </p>
    <h3 ref="3.4">Unit 3.4: Clustering</h3>
    <p>
      Clustering is the action of grouping elements together based on some
      similar characteristic. In the real world, we’d use this in marketing,
      polling, machine learning, etc. There are plenty of varieties of the
      problem we’re about to tackle, but we’re only gonna cover the most basic
      one because that’s easiest on me.
    </p>
    <p>
      Let’s start with our problem representation. We’ll represent our elements
      with nodes, connected by weighted edges. Smaller weights imply greater
      similarities. In the variation of the problem we’re looking at, we’ll be
      given the number of clusters, k, we have to create. We don’t care about
      how many elements are in each of these, as long as we can separate the
      graph into k clusters.
    </p>
    <p>
      We’re going to start a little backwards here to provide some more problem
      definitions. Here’s a small section of a valid solution of the clustering
      problem:
    </p>
    <img src="@/assets/CS180/img69.png" />
    <p>
      If we find the smallest edge that crosses between i and j, we call the
      value of that edge, the distance between i and j:
    </p>
    <img src="@/assets/CS180/img70.png" />
    <p>
      Within a given solution, a distance is defined between each pair of
      clusters, so if there are k clusters, there are kC2 distances defined per
      solution. Now, if one of these distances is very small, that means that 2
      elements from 2 different clusters are very similar to each other.
      However, by definition, we said that clusters group elements that are
      similar to each other. The point I’m trying to make is that something like
      this:
    </p>
    <img src="@/assets/CS180/img71.png" />
    <p>
      Would not be an optimal solution for a k = 2 problem. c and d are very
      similar to each other, yet are not in the same cluster, so, in reality,
      we’d want something along the lines of:
    </p>
    <img src="@/assets/CS180/img72.png" />
    <p>
      In more explicit terms, the objective of our clustering algorithm is going
      to be to maximize the minimum distance between clusters in our solution.
      For us, we’re only going to focus on the minimum distance between any 2
      clusters in our solution, so our goal is going to be to maximize that
      distance after partitioning our graph into k clusters. So let’s say we
      have clusters with distances as shown below:
    </p>
    <img src="@/assets/CS180/img73.png" />
    <p>
      We don’t care about the 2 or the 3, because 1 is the minimum distance. The
      goal of this algorithm will be to make sure that 1 is the largest possible
      distance that we care about. With the problem statement out of the way,
      let’s try to get started.
    </p>
    <p>
      I’m going to assume you remember the Kruskal algorithm from last section.
      The clustering algorithm is pretty much the same exact thing. At the
      beginning of execution, there are n clusters in the graph, as there are no
      edges connecting any of the nodes. Every step of the algorithm, we add an
      edge, which reduces the number of remaining clusters by 1 by connecting 2
      clusters together (as long as the edge didn’t create a cycle). Since we’re
      aiming to have k clusters, we stop the algorithm once our graph has
      reached that k components. Sounds great, we’re done now right? Lol nope.
    </p>
    <p>
      We have done absolutely nothing to prove how this algorithm works.
      Intuitively, the method we’re using makes sense, since Kruskal’s starts by
      assigning edges of the lowest weight and grouping those nodes together,
      which is exactly what the clustering problem should do. However, that’s
      not a formal proof so it’s absolutely worthless. 0/20 on the midterm.
    </p>
    <p>
      Ok, so after the algorithm finishes executing, we’re left with some
      clusters C1, C2, … , Ck. Within these clusters we have a bunch of
      distances, the minimum of which we will denote with d*. In order for this
      solution to not be optimal, there must exist a more optimal set of
      clusters C1‘, C2‘, … , Ck‘. By definition, there must be at least one
      cluster within this “optimal solution” that is different from our
      solution. This would result in some structure that looks like:
    </p>
    <img src="@/assets/CS180/img74.png" />
    <p>
      Here, one of our clusters, Cr, is split into 2 “optimal” clusters, Cd‘ and
      Ce‘. Let’s focus in on 2 vertices in Cr:
    </p>
    <img src="@/assets/CS180/img75.png" />
    <p>
      Now, remember how we defined d*. By that definition, and our knowledge of
      how Kruskal’s works, we know that, when we terminate the algorithm after
      reaching k clusters, d* is the next edge that has not been processed yet.
      Take a second to think about that to make sure you get the logic. Knowing
      this, we know that every edge that is within a cluster must be less than
      this d*, since Kruskal’s runs from lowest weight to highest.
    </p>
    <p>
      Since clusters are connected via edges, we know that x and y above must be
      connected somehow, since they’re both inside of Cr. Regardless of how
      they’re connected, one of the edges in the path from x to y is the
      distance between Cd‘ and Ce‘. That should set off some red flags. So we’re
      saying the d*’ of this optimal solution is of an edge that we’ve processed
      during the runtime of Kruskal’s? Well that’s wrong. If that were the case,
      then, by the execution logic of Kruskal’s, d*’ must be less than d*, which
      means our solution is actually more optimal. Oh wait, that does make sense
      since our solution is in fact the optimal solution. End of proof.
    </p>
    <p>
      Of course, we normally would still have to worry about time complexity,
      but, since this algorithm is asymptotically the same as Kruskal’s you can
      just head back to the last section if you’re worried about it.
    </p>
    <h2 ref="4">Unit 4: Divide & Conquer and Dynamic Programming</h2>
    <p>
      Ok, so the class is starting to speed up now, which means we’re going to
      be touching on a wider variety of algorithms. That’s fun and all, but
      awful for my organization, because none of these things have enough
      content to have their own unit. As a result, they’re getting
      Frankensteined into one. Big sad.
    </p>
    <p>
      Both of these methodologies are fairly common, at least in interview-style
      questions, so it’s honestly pretty helpful that we’re covering these here.
      We haven’t really seen examples of these up until now, so there might be a
      learning curve but we both know you’ve got this.
    </p>
    <h3 ref="4.1">Unit 4.1: Merge Sort</h3>
    <p>
      You’ve probably run into a lot of sorting at this point in your CS career.
      For the most part, we simply take for granted that sorting is O(n log n),
      even though the only sorts we’ve really covered at this point in the
      curriculum are O(n^2) sorts, like selection sort or bubble sort. Here,
      we’ll introduce one of the common sort implementations: merge sort, which
      takes advantage of divide and conquer to achieve that beautiful O(n log n)
      time.
    </p>
    <p>
      Obviously, the sorting problem helps us take a list of elements and sort
      them in non-decreasing order. The divide and conquer paradigm takes a
      problem, splits it into multiple, roughly equal, subproblems, solves the
      subproblems, and then recombines them to form an answer. As you can
      probably tell, this process usually happens recursively. If we split a 10
      billion element problem into 2 subproblems of 5 billion elements, so what?
      We still can’t solve the 5 billion parter. We have to keep partitioning
      this problem until we can actually solve it.
    </p>
    <p>
      Now, these partitions are fairly easy; all we have to do is divide the
      current problem in half. The hard part is going to be the merge part. For
      now, assume we’ve solved the rest of the algorithm, and we need to merge 2
      lists into our final, sorted list:
    </p>
    <img src="@/assets/CS180/img76.png" />
    <p>
      Clearly, this merge must also be responsible for the sorting part as well,
      so the problem is definitely looking challenging so far. When we sort, we
      want to have 2 pointers pointing at the smallest values in L1 and L2, and
      then we’ll proceed to place the smaller value being pointed to into the
      final list. Ok, that seems awful in terms of runtime. In a worst case
      scenario, we have to compare an arbitrary element of one list to all of
      the elements in the other list. If the size of L1 and L2 was n, this would
      result in an O(n^2) runtime. Like I said, awful.
    </p>
    <p>
      But what if it didn’t? So we definitely have to compare elements at every
      step of the algorithm. However, every comparison puts something into the
      final list, regardless of the result. Since we said the 2 lists each have
      n elements, that means the final list would have 2n elements. If each
      comparison results in 1 element getting added to the final list, 2n
      comparisons are needed to merge, which means the merge step is actually
      O(n).
    </p>
    <p>
      Sounds pretty good. We more or less have our algorithm down now. Now let’s
      get into the bad part: time complexity. The logic of the complexity here
      is a lot more muddled than other algorithms we’ve covered. Here’s what we
      know:
    </p>
    <img src="@/assets/CS180/img77.png" />
    <p>
      So, the time to complete a merge sort on n elements, T(n), is equal to 2
      times the time it takes to use merge sort on n / 2 elements, T(n / 2),
      plus the time it takes to merge, O(n). Make sense so far? Good. How do we
      solve for T(n)? Let’s start by rewriting the O(n) so everything looks a
      little more similar:
    </p>
    <img src="@/assets/CS180/img78.png" />
    <p>
      Here, C is just an arbitrary constant, and this substitution comes from
      the way we defined order notation. Now, we can expand the equation above
      by substituting for T(n / 2):
    </p>
    <img src="@/assets/CS180/img79.png" />
    <p>
      Well, that doesn’t look helpful. You know what we do with methods that
      aren’t helpful? We do them again:
    </p>
    <img src="@/assets/CS180/img80.png" />
    <p>
      Ok, this is officially not epic anymore. One good thing we got out of this
      is that we start to see this pattern emerge:
    </p>
    <img src="@/assets/CS180/img81.png" />
    <p>
      I promise we’re actually getting somewhere. Obviously, this formula looks
      worse than what we started with, and it doesn’t seem like it’s helpful.
      But it is. In a general case, we have no idea what T(n / 2^i) is, but we
      do know what T(1) is.
    </p>
    <p>
      How long does it take to sort 1 element? Duh. 1 unit of time. By that
      logic, we know T(1) is 1. Let’s keep going with that. If we were to solve
      for i, we would see:
    </p>
    <img src="@/assets/CS180/img82.png" />
    <p>If we plug this back into the equation, we get:</p>
    <img src="@/assets/CS180/img83.png" />
    <p>Since we know what T(1) is, this is very easy to simplify:</p>
    <img src="@/assets/CS180/img84.png" />
    <p>
      And, of course, with our knowledge of order notation, we can finally say
      that merge sort must be O(n log n). Fun analysis right?
    </p>
    <h3 ref="4.2">Unit 4.2: Inversion Count</h3>
    <p>
      Ok, so now that we’ve taken a quick look at merge sort to introduce the
      idea of divide and conquer, let’s try to expand this methodology to some
      more problems. The first of these is called the inversion count problem.
      Consider the list of integers L = {3, 1, 2, 4}. If this list were sorted,
      the 1 would come before the 2, 3, and 4, the 2 would come before the 3 and
      4, and the 3 would come before the 4. However, in this list, that isn’t
      all true. Yes, the 1 does come before the 2 and the 4, but not the 3. That
      pairing, (3, 1) is an inversion, since it is out of order. If we look a
      little harder, we’ll also see that the pairing (3, 2) is also an
      inversion, as the 2 should be before the 3.
    </p>
    <p>
      Well, now that we’ve defined an inversion, you can probably guess what
      inversion count means. The goal of this algorithm is going to be to count
      the number of inversions that occur in a given list of numbers. In the
      example I gave above, there are 2 inversions. Ok, how the hell do we apply
      divide and conquer to this? Obviously, a brute force solution is so easy
      that a 5th grader could code it, but that’s O(n^2) time and that’s yucky.
      We can do better.
    </p>
    <p>
      So we know that we’re going to have to split our problem up into multiple
      pieces. Since we’re working with a list, just like in the last section,
      we’re going to borrow a lot of our logic from merge sort. Once again,
      dividing our list shouldn’t make you lose sleep, we just recursively
      divide it in half until we believe the problem is manageable. The merge is
      where we have to use a little brain power. In an arbitrary step, where
      we’re merging 2 lists, we’re going to make 2 assumptions about the lists:
      they’re both sorted and we know how many inversions exists within each
      list:
    </p>
    <img src="@/assets/CS180/img85.png" />
    <p>
      At this stage in the algorithm’s execution, we’ve accounted for all IL +
      IR inversions in the left and right lists. That means that, when we merge
      the 2 subproblems, the only inversions we haven’t accounted for are those
      created by the combination of the 2 lists. What does that mean? By the
      definition of an inversion, that means that, after merging, there exists
      some numbers originally in the left list and some numbers originally in
      the right list that are in reverse order. For instance, if the number 10
      was in the left list above, and the number 1 was in the right list, that
      would be 1 additional inversion after the 2 lists merged. Make sense so
      far?
    </p>
    <p>
      This tells us that, when it comes to counting the number of inversions, we
      only need to focus on these new inversions created by elements in
      different subproblems. Based on our assumptions for each subproblem, we
      know we also have to follow our merge sort methodology to sort each list.
      With this high-level foundation set, let’s get into a little more detail
      on how we’re actually going to do this.
    </p>
    <p>
      As a baseline, recall the merge algorithm from merge sort. No, I will not
      rewrite it here because I’m lazy, so flip back to the last section if you
      need it. That process obviously takes care of our sorting requirement for
      our problem. Let’s take a quick think about what an inversion would mean
      in this problem. Well, if the number that was pushed into the final list
      came from the left sub-list, then that number was in the correct order.
      This is because it came before any number remaining in the right sub-list,
      so we’re chillin’ if that happens. On the other hand, if a number was
      pushed into the final list from the right sub-list, then we have an uh-oh.
      As long as there are elements remaining in the left sub-list, this push
      implies than an inversion exists.
    </p>
    <p>
      If you still don’t understand why that is, let me make another attempt to
      clarify things a little more. When we split our problem, we’re essentially
      breaking it up into a bunch of segments. These segments came from some
      place in the original problem. This placement is maintained as we merge
      the subproblems back together. Therefore, when we discover a value from a
      right subproblem is less than a value from a left subproblem, we’re really
      just finding the definition of an inversion. Did that help? No? Didn’t
      think it would. I tried my best ok.
    </p>
    <p>
      Ok, so when this happens, we just add 1 to the inversion count and move on
      right? If you thought that was right, you don’t really understand the
      logic we’re going through here. Remember, our sub-lists are sorted. That
      means that if some value j from the right sub-list is less than some value
      i from the left sub-list, it is also less than any value beyond i in the
      left sub-list. Each pairing of j and those values creates 1 more
      inversion. Based on that logic, we have to add the number of elements
      remaining in the left sub-list to our inversion count. Whew, a lot of text
      right there. I’ll interrupt that horror show with a picture to (hopefully)
      help prove my point:
    </p>
    <img src="@/assets/CS180/img86.png" />
    <p>
      So, we’ve merged the left and right sub-lists up to some arbitrary point.
      Now, we’ve found a situation where the next element going in the list is
      j, which is in the right sub-list. This implicitly tells us that j &lt; i.
      Since the sub-lists are also sorted, all elements after i must also be
      greater than j. Since we have some k elements on the left that are greater
      than an element on the right, this step has allowed us to discover an
      additional k inversions.
    </p>
    <p>
      At the end of the day, this algorithm is merge sort with an additional
      step. As a result, our analysis is going to be practically identical, so
      we won’t waste our time and rewrite it. All we care about is that we’ve
      found a way to reduce this problem from O(n^2) to O(n log n), and that’s a
      big win. One little problem I’ll leave you with to check your
      understanding is, how should the algorithm behave it it finds that i == j?
      :thinking_emoji:
    </p>
    <h3 ref="4.3">Unit 4.3: Closest Pair</h3>
    <p>
      Let’s change things up a little bit. This problem’s going to be a little
      harder than the last 2. Let’s say we have some points in a 2-D plane:
    </p>
    <img src="@/assets/CS180/img87.png" />
    <p>
      The goal of this problem is going to be to find the shortest Euclidean
      distance between any 2 points. Obviously, we once again have an easy brute
      force solution: compare each point to every other point and keep track of
      a global minimum. But that solution is awful, so let’s make a better one.
    </p>
    <p>
      To simplify our analysis, let’s analyze the x-coordinate for now. We’ll
      discuss how to deal with the y-coordinates later. Now, we have what is
      essentially a 1-D list, which is much more familiar to us. Going off our
      intuition, we’ll take this list and recursively divide it until the
      problem is trivial enough to solve. When we merge back, we should be left
      with 2 groups, in which we assume we know the closest pair:
    </p>
    <img src="@/assets/CS180/img88.png" />
    <p>No, these aren’t drawn to scale, ok? I’m tired, give me a break.</p>
    <p>
      Remember this is still a very high-level view of our solution, so we’ll
      just assume we can get to this point for now. We’ll show how we do it in a
      second. Like before, our next step is going to be to merge the 2
      subproblems. In order to keep our assumptions accurate, we need to
      recalculate a new minimum distance. Is it fair to say that new minimum
      distance is simply the minimum of d1 and d2? No it’s not, so if you
      answered yes, you’re dumb and should feel bad. Kidding of course, I’m sure
      you’re much smarter than I am at least.
    </p>
    <p>
      Sure, d1 and d2 are the minimums of their respective sets, but they don’t
      account for potential minimums found by comparing points between the 2
      sets. Déjà vu much? Ok, let’s see if we can pull some genius-level IQ
      logic out of our ass here. Let’s say that d is the minimum between d1 and
      d2. Knowing this, we can say that:
    </p>
    <img src="@/assets/CS180/img89.png" />
    <p>
      Any pairing between the subproblems that might have a shorter Euclidean
      distance than d must satisfy the condition that both points must fall
      within their respective subproblem’s shaded regions. Why is that? Well
      remember that, when we divide the problem, each subproblem is directly
      adjacent to another subproblem. In addition, in order for a pairing to be
      significant, it must have a Euclidean distance less than the current known
      minimum. As a result, we can narrow our search to the elements shaded
      above, since any point that lays outside of the shaded boxes is
      automatically more than d units away from any point in the other
      subproblem. Draw a couple examples out if you want to prove this for
      yourself.
    </p>
    <p>
      Now, obviously our work here isn’t done. How many points are within that
      shaded region? For all we know, all of them are. That just brings us back
      to the brute force solution. Darn. Let’s focus in on the shaded region for
      a second. Take an arbitrary point x and an imaginary grid that we’ll
      justify in a second:
    </p>
    <img src="@/assets/CS180/img90.png" />
    <p>
      So, each of the 8 boxes in the grid has the dimension d / 2. Why? Well
      think back to how we’ve defined d. d is the shortest distance between
      points within a single subproblem. Why is that relevant? Well,
      mathematically, this means that it is impossible for more than 1 point to
      exist within a single box in our imaginary grid. If there were some grid
      box containing more than 1 point, then our definition for d would be
      contradicted. If you want to do the math to prove that, go wild, but I
      won’t. Furthermore, we use the 8 grid boxes above because any point
      outside of that grid will automatically be more than d units away from x,
      and therefore cannot be the closest pair in the problem. Pretty cool.
    </p>
    <p>
      What this tells us is that, if we have a list of points in the right
      subproblem sorted by y-component, all we have to do is compare x to the
      closest 4 points in either direction in that list. Those points may
      actually fall outside of our imaginary grid, but the point is that there
      are at most 8 relevant points we need to check. That gives us a constant
      of 8 distances that we have to check for each point in the left
      subproblem. Since we now have a constant for this situation, we’ve escaped
      our O(n^2) hell, and our time complexity of the merge step has suddenly
      become linear. Wait a second, that seems unbelievably hand-wavy. Since
      when did we start managing y-components? Let’s just take it for granted
      for now, and we’ll get back to it later.
    </p>
    <p>
      For now, we can take a quick glance at our time complexity analysis to see
      that we’ve arrived at:
    </p>
    <img src="@/assets/CS180/img91.png" />
    <p>
      Absolutely huge. O(n log n) time achieved. Kinda. We’re really relying on
      being able to deal with the y-components in linear time, which, on the
      surface, doesn’t seem like a safe bet at all. At the beginning of the
      problem, we skipped over some assumptions. We assume that the points are
      sorted by x-coordinate and y-coordinate. Obviously, this won’t always be
      true, but if it isn’t, we can just add the 2n log n from the 2 sorts to
      our time, and we’ll still be fine. Now, since we’re doing our divisions
      based on x-coordinate, it’s pretty self-explanatory why we’d want those to
      be sorted. So how about this mysterious y-component?
    </p>
    <p>
      All we know about this y-component list is that we must be able to find 8
      neighbors of any point in linear time to run our algorithm. Now that we
      know these are sorted, this actually seems pretty simple. What we can do
      is maintain a list of all components in the problem’s shaded region. For
      each problem, this list only needs to be created once, so if we maintain a
      global list of sorted points, we can construct this list in O(n) time.
      From here, the problem becomes finding our x in constant time. Once we do,
      since our local list is sorted, finding its neighbors is trivial.
    </p>
    <p>
      So, how about we remove that step? What if we sacrificed our assumption of
      8 checks in order to simplify our lives. Instead of thinking about this
      step as a comparison between a point in the left subproblem and the grid
      in the right subproblem, let’s just expand the grid:
    </p>
    <img src="@/assets/CS180/img92.png" />
    <p>
      Now, we will go through and check every point that falls in that shaded
      region, because that’s still O(n) time, like we had before. Instead of
      comparing it to the 8 closest neighbors, we can now pivot to comparing it
      to the next 15 points in the sorted list? Why? Well, the current point
      must take up a grid spot, leaving 15 possibilities for other spots. Since
      we’re iterating through every point now, we don’t have to pick a point and
      find it in the list, since we will eventually get through all of them in
      the end. Draw this out if my awful writing didn’t help you. At the end of
      the day, we now have reached our goal of completing our merge in O(n)
      time, and I can go cry now. This section might honestly get rewritten.
    </p>
    <h3 ref="4.4">Unit 4.4: Maximum Weighted Subset</h3>
    <p>
      We’re going to switch gears here and move onto the next part of this unit:
      dynamic programming. To introduce this, we’re going to revisit an old
      problem that we looked at in the first unit. Of course, before we start
      attacking the problem, we’re going to need to get an idea of what dynamic
      programming is in the first place.
    </p>
    <p>
      In divide and conquer, we were introduced to the idea of splitting a
      problem up into subproblems recursively, solving them, and then merging
      together. Dynamic programming takes a similar approach, with one key
      difference. In the algorithms we’ve covered so far, our subproblems didn’t
      overlap. Here they will. Let’s get an idea of what that means for us.
    </p>
    <p>
      Recall the interval scheduling problem that we went over at the beginning
      of the course. In that variation of the problem we took a greedy approach
      to get the maximum number of intervals in our final subset. Well, we
      already know how to solve that problem, so let’s change it up. What if,
      instead of having the maximum number of intervals, we give each interval a
      weight, and then proceed to collect the subset containing the maximum
      weight of intervals. It should take you about half a second to prove to
      yourself why our old greedy algorithm is busted, so let’s start from
      scratch.
    </p>
    <p>Let’s focus in on a single interval in our input:</p>
    <img src="@/assets/CS180/img93.png" />
    <p>
      Regardless of what our final algorithm ends up being, we need to know one
      thing about this interval. Is it in our optimal solution or not?
      Obviously, if we had a way to answer that question directly, we wouldn’t
      need to solve this problem. Instead, we’re going to consider all
      possibilities that may occur when we look at i. Well, that’s not too hard.
      Either i is in the solution or it isn’t. Let’s actually relax that a
      little bit. For common sense reasons, when we look at i, we know nothing
      about what comes after it. As a result, it’s complicated to say whether i
      is in the final solution or not. So, instead, we’ll say that i may or may
      not be in the solution that ends at fi, the end time of interval i. Ok,
      now we can look a little bit closer at the problem.
    </p>
    <p>
      Following our logic from divide and conquer, we want to be able to assume
      we know the solution for every subproblem that leads up to this problem.
      In this case, this means that we will assume we know the optimal solution
      for all significant regions that come before i. So, whatever grouping of
      intervals appear entirely in the input prior to i, we’ll say we know the
      optimal subset of those intervals. At this point, you might be able to see
      where we’re going with this.
    </p>
    <p>
      Let’s look at the case where i isn’t in the solution. To make things
      easier on me, I’m going to assume each interval starts and ends on a
      distinct integer time value. This assumption doesn’t change the algorithm
      at all, it just makes it a little easier for me to show what I’m talking
      about. If i isn’t in the solution, then we are adding no additional weight
      to the optimal solution when we process i, since it’s ignored. This tells
      us that the optimal solution at fi is the same as the optimal solution at
      fi – 1. In less mathy terms, the optimal solution at the endpoint of i is
      the same as the optimal solution at the previous time unit. If you don’t
      include the interval, you don’t include its weight. Makes sense right?
    </p>
    <p>
      By that same logic, we can say that, if i is in the optimal solution, then
      the optimal solution at fi is the same as the optimal solution at the time
      unit directly preceding i, plus wi. Once again, pretty reasonable. If we
      want to include i in the solution, then the optimal solution at the end of
      i is the optimal solution at the beginning of i plus i‘s contribution.
    </p>
    <p>
      With both of those facts in our brains, we combine them with the
      assumption that we know the optimal solution in all previous regions to
      say that we now know the optimal solution at fi by the following
      calculation:
    </p>
    <img src="@/assets/CS180/img94.png" />
    <p>
      Make sure everything up to this point’s clear to you, because we’re
      essentially done with the algorithm. Now that we’ve gotten the optimal
      value at fi, we can apply the logic to fi + 1, and so on. With this
      method, we can repeat our process until we’ve analyzed all of our
      intervals.
    </p>
    <p>
      So what do we actually need to get all this done? Well, first things
      first, our entire methodology relies on our intervals being sorted by end
      time, so we’re already operating at an O(n log n) runtime. The rest of the
      algorithm just does some constant time operations on each interval, so the
      rest is essentially O(n) time. Cool deal, O(n log n) isn’t bad. Second
      things second, oh wait. We’re done. Huh.
    </p>
    <p>
      Let’s step back and get a better idea of how dynamic programming fits into
      all of this. For each region we optimize, we’re solving a subproblem: the
      optimal solution of the region. Once we solve each subproblem, we
      eventually use the results of the subproblems (which may overlap) to find
      the result of the overall problem. Of course, some of these subproblems
      may not be useful for the final result, but we still need to solve them,
      because we don’t know which ones are significant until the end of the
      algorithm. If we have an interval of weight 5 that comes before an
      interval of weight 10, we still have to process the interval of weight 5
      because we aren’t aware of the existence of the interval of weight 10 yet.
      Cool cool? Cool cool.
    </p>
    <p>
      Make yourself an example and walk through it if you’d like. It’s good to
      get this early intuition of how dynamic programming works before we ramp
      things up a little bit.
    </p>
    <h3 ref="4.5">Unit 4.5: The Knapsack Problem</h3>
    <p>
      Let’s dive straight into another example. Let’s imagine we have a knapsack
      of size S. Alongside this knapsack, we have a group of n items, each with
      a value vi and a size si. For the sake of this variation of the problem,
      we will assume there are infinitely many copies of each of these items
      available to us. Our goal will be to maximize the total value of the
      objects we fit into the knapsack.
    </p>
    <p>
      Ok, already we’re looking at a little more complexity than our previous
      problem since we have 2 parameters we have to pay attention to now: size
      and value. Let’s draw this out:
    </p>
    <img src="@/assets/CS180/img95.png" />
    <p>
      As you might be able to tell from my awful diagram, we’re going to
      essentially partition this into a 2-D array of subproblems. Each object
      will be assigned an arbitrary ID. Each row represents the optimal
      solutions you obtain with some grouping of these objects. For instance,
      the second row contains the optimal solutions obtained when you only have
      access to objects 1 and 2. Each column represents a size of the knapsack.
      With those definitions, we can generalize a little and say that the entry
      (i, j) of the array represents the optimal solution for a knapsack of size
      j when given access to objects 1, 2, …, i. To solve the problem, we need
      to be able to get to the entry (n, S), and, of course, we’ll be using
      dynamic programming to carry us there.
    </p>
    <p>
      I’m going to spare you the logical reasoning and tell you we’re going to
      be moving row by row. This means that when we’re working on some entry,
      all rows above it and all entries directly to the left of it will be
      solved already. With that assumption, let’s see how we can solve for an
      arbitrary entry (i, j).
    </p>
    <p>
      Once again, we have 2 options: we add i to the knapsack or we don’t. Let’s
      say we do. This means that the optimal solution at (i, j) is equal to the
      optimal solution where the knapsack has enough space for i, plus the value
      of i. In math terms, this translates to:
    </p>
    <img src="@/assets/CS180/img96.png" />
    <p>
      If we don’t want i in the solution, then we say that the optimal solution
      at (i, j) is the optimal solution in a bag of size j, without the option
      to include i, or:
    </p>
    <img src="@/assets/CS180/img97.png" />
    <p>
      Just like the previous problem, the true optimal solution of (i, j) is the
      maximum of the 2 functions above. Once again, we can solve this subproblem
      and slowly build our way to our target entry. As you’ve probably deduced
      already, if we perform constant time operations to solve for each of these
      entries, our program will run in O(nS) time.
    </p>
    <p>
      Hopefully at this point, you can see how dynamic programming really works
      to direct us in our problem solutions. It’s arguably the most complex
      paradigm we’ve touched on thus far, so don’t wait until later to get a
      little bit of practice with it.
    </p>
    <h3 ref="4.6">Unit 4.6: Curve Fitting</h3>
    <p>
      Ok, new problem time. Let’s say we’re given some distribution of point’s
      on a 2-D plane. Our goal is going to be to find some line or group of
      lines that best fits these points based on some given criteria. Now, to
      start us off, I’m going to drop in some formulas:
    </p>
    <img src="@/assets/CS180/img98.png" />
    <p>
      Don’t worry you won’t have to memorize these or anything. They simply
      represent a way to find the error of a given line. What we do need to
      notice is that, in order to calculate the parts of this formula, we need
      to go through all n points that we’re given. As a result, the big takeaway
      from these is that we can calculate the error of a line in O(n) time.
      Useful.
    </p>
    <p>
      Let’s take a closer look at what the problem is asking. So, given this set
      of points:
    </p>
    <img src="@/assets/CS180/img99.png" />
    <p>
      How could we draw lines through them to minimize error? Obviously, a
      single line doesn’t seem to fit very well:
    </p>
    <img src="@/assets/CS180/img100.png" />
    <p>Maybe we could do better if we added a line:</p>
    <img src="@/assets/CS180/img101.png" />
    <p>
      Well, that certainly looks a lot better. But wait, if we can just do that,
      then why can’t we just go full COVID-19 mode and cheat:
    </p>
    <img src="@/assets/CS180/img102.png" />
    <p>
      Surely, this solution would simply have 0 error and we’d be done right? I
      wish.
    </p>
    <p>
      Unfortunately for us and our sanity, we have to actually care about the
      number of line segments. This means that we’re going to have to spend our
      time balancing the trade-off between having less error and less line
      segments. In more formal terms, our goal is to find:
    </p>
    <img src="@/assets/CS180/img103.png" />
    <p>
      The error is simply some function like the ones I dumped for you above. We
      aren’t going to concern ourselves with the details of that function, all
      we care about is that it can be computed in O(n) time. The cL in the other
      term is simply a way to give some weight to the line count. If the line
      count matters a lot, c will be very high and that term will be
      significant. If the line count doesn’t matter much, then the c will be
      low, and the term will be relatively insignificant. This constant will be
      part of our algorithm’s input.
    </p>
    <p>
      Ok, so now our problem may become a little more clear. We need to find the
      optimal number of line segments to model this graph with. Let’s zoom in on
      a specific point:
    </p>
    <img src="@/assets/CS180/img104.png" />
    <p>
      To provide some structure to our solution, we’re going to assume we have
      all points sorted by x-component. At a stage in the algorithm where we’re
      analyzing point i, we’re going to make our dynamic programming-style
      assumption that we have the optimal solution for all points j that precede
      i in our sorting. All we need to find now, is how to extend that optimal
      solution to the point i.
    </p>
    <p>
      When we’re processing i, we have to consider the line segment it’s paired
      with. Each line segment “covers” some set of points. What this means is
      that the error of each point in that set is calculated with regards to
      that line segment. To start, we will say that the line segment that covers
      i covers a set of points {i, i – 1, …, j}. Now, we don’t know how many
      points back the optimal line segment would cover. For all we know, the
      optimal line segment only covers i, or it could cover every point thus
      far. Based on that, we can put the following constraint on j:
    </p>
    <img src="@/assets/CS180/img105.png" />
    <p>
      Of course, whichever point j ends up being, we can then combine this line
      segment with the optimal solution for the point j – 1. The magic of
      dynamic programming, kinda. We still have work to do.
    </p>
    <p>
      How do we actually figure out what point j is? Well, in dynamic
      programming, we generally check every possible option exhaustively to
      arrive at our answer. So that’s exactly what we’ll do. We’ll go through
      all possibilities for what j can be and try to find the optimal solution
      in the problem. So what’s the total error of the problem? Well, we have 2
      distinct sections: the line segment that covers points j through i, and
      the optimal solution of the points before that. The solution of a given
      split can therefore be given by the solution of the current line segment
      plus the solution of the prior points:
    </p>
    <img src="@/assets/CS180/img106.png" />
    <p>
      Whichever j provides us with the minimum value of the calculation above,
      is the one we want to pick. There are i such possibilities for j, so we
      will have to perform the above calculation i times. The calculation itself
      takes O(n) time due to the error calculation. In the worst-case scenario,
      i will be the same as n, so now we’re at an O(n^2) runtime. And, just to
      make things even more tragic, we have to do this step for every point in
      the graph, so we arrive at our final runtime of O(n^3). Yikes. Despite the
      trash runtime, the algorithm itself shouldn’t be too challenging to
      understand. Hopefully at this point, the process of dynamic programming is
      becoming a little familiar to you. What a nerd.
    </p>
    <h3 ref="4.7">Unit 4.7: RNA Sequencing</h3>
    <p>
      I bet you’re thinking, “Wait, I chose CS so I could make a ton of money
      without touching the life sciences”. Well don’t worry, you’re still in a
      south-south campus class.
    </p>
    <p>
      Quick science lesson though, RNA has 4 distinct bases. Since we’re CS and
      really don’t care, we’ll call them A, U, C, and G. As can match with Us
      and Cs can match with Gs. Why? I don’t know, I don’t care. For this
      problem, we’re going to be given a string of length n, comprised entirely
      of these 4 characters. Our goal is going to be to find the maximum number
      of viable matchings within this string. Wait, that sounds so easy, you’re
      probably thinking of switching to pre-med right now. Don’t get too hasty,
      we have some more rules we have to follow.
    </p>
    <p>
      So, as of right now, we know that As must pair with Us and that Cs must
      pair with Gs. We’ve also implicitly stated that each base can only pair
      with one other base, by the definition of a matching. We also need to make
      sure our matchings are non-crossing and contain no sharp turns. To
      understand what that means, we need to show that our data is represented
      as something like:
    </p>
    <img src="@/assets/CS180/img107.png" />
    <p>So, from here, we could find some valid pairings like:</p>
    <img src="@/assets/CS180/img108.png" />
    <p>
      When we say that we cannot have crossing matchings, we mean that pairings
      like this:
    </p>
    <img src="@/assets/CS180/img109.png" />
    <p>
      Are invalid. In addition, when we say no sharp turns, we invalidate
      pairings such as:
    </p>
    <img src="@/assets/CS180/img110.png" />
    <p>
      Well, that doesn’t look like any sharp turn I’ve ever seen. What we
      actually mean when we say “no sharp turns” is that, assuming i and j
      represent the index of the bases being paired, i must be less than j – 4.
      That seems horrifically arbitrary, but it is what it is. Since our data
      set isn’t laid out in a straight line, this might be a little hard to see,
      but we can really think of this requirement as “i and j must be separated
      by at least 4 bases”. Since the A-U pairing above only has 2 bases in
      between them, they can’t be paired.
    </p>
    <p>
      Ok, let’s get started with the actual solution now. So, we’re given our
      input in what is essentially an array. If you’re looking at the pictures
      above and thinking about how un-array-like they look, well just lay the
      sequence flat and your problems will be solved. Like always, we’re going
      to pick some arbitrary base i and assume that, for any subsequence prior
      to i from bases a to b, we know the optimal solution. Let‘s figure out how
      to extend that solution to i.
    </p>
    <p>
      When we process i, we have 2 options: it gets matched with a base in the
      previous region or it doesn’t. Let’s start with the easier case. If i
      doesn’t get matched, we can say that:
    </p>
    <img src="@/assets/CS180/img111.png" />
    <p>
      This should be pretty self-explanatory. If i doesn’t match with a previous
      base, it contributes nothing to the optimal solution, so the most matches
      possible from 1 to i is the same as the most matches possible from 1 to i
      – 1. Now let’s get a little more complex. In the case where i does match
      with a previous base, we’ll call i‘s paired base k. In this situation, we
      say that:
    </p>
    <img src="@/assets/CS180/img112.png" />
    <p>
      So, our new optimal solution would be the optimal solution from 1 to the
      base before i‘s matching, plus the optimal solution from the base after
      i‘s matching to the base before i, plus 1 for the new matching created by
      i and k. Whew, that’s a mouthful. We should note that we don’t have to
      consider possible matchings between bases that cross between the 2 regions
      we’ve described above, as that would create a crossing, and that’s
      illegal.
    </p>
    <p>
      As you’d probably expect, we’re going to simply do an exhaustive search
      for all values of k when we search for the optimal value of the base i. We
      can record all these optimal values in a 2-D array, where the entry (i, j)
      represents the optimal solution for a sequence starting at i and ending at
      j, which means the entry (1, n) will contain our optimal solution at the
      end of our program’s execution. Since there are n x n entries in this
      array, and each entry requires linear time to calculate, our overall
      algorithm is O(n^3).
    </p>
    <p>
      Dynamic programming done! It’s honestly not too bad, we don’t need to be
      super smart to make everything work, we just need to get used to the basic
      methodology we’ve been covering. Good luck on whatever homework/interview
      questions you have in the near future!
    </p>
    <h2 ref="5">Unit 5: Network Flow</h2>
    <p>
      Welcome to the next unit. Thankfully, this is our last real algorithmy
      unit of the class, and it’s not even a bad one. There’s only one algorithm
      we need to cover, and the rest is going to be up to your brain and some
      practice problems. All in all, not too bad.
    </p>
    <p>
      Hopefully by now, you’ve got a decent grasp of some of the more
      challenging paradigms we’ve covered here so far, and you’re getting ample
      time to practice for your upcoming final. These last 2 units shouldn’t
      give you much trouble if you’ve been able to handle things like D&C and
      DP, so let’s just relax and try to make it down the final stretch.
    </p>
    <h3 ref="5.1">Unit 5.1: Ford-Fulkerson</h3>
    <p>
      Ok, before we can really dive into the main focus of the unit, we have to
      first define what a network is. I thought about making a separate section
      for this, but it’s the beginning of finals week and I’m tired, so deal
      with it. Networks in general should look fairly familiar to you:
    </p>
    <img src="@/assets/CS180/img113.png" />
    <p>
      Our input to our problem is really just a weighted directed graph. We’re
      pretty familiar with those. In the context of this problem, the weights on
      each edge represent the capacity of that edge. We’ll get to what that
      means in a second, but for now, let’s just make it known that these
      capacities must be positive integers.
    </p>
    <p>
      In this graph, we have two special nodes: S and T. These nodes are the
      source and sink respectively. The goal of network flow problems is to take
      something from S and transport it to T. More specifically for our
      purposes, we’re going to be attempting to find the maximum amount of these
      things that we can send from S to T with the given network. The term we
      use for these things is flow.
    </p>
    <p>
      In case it helps to model this as a real-world problem, imagine S is the
      US and T is China. We’re trying to export the maximum amount of some good
      from US to China, and each edge represents some path between the 2
      nations. Each edge can only handle a limited amount of goods, represented
      by its capacity, so how do we find a way to maximize the number of goods
      we send along this network?
    </p>
    <p>
      An important property we must consider is that flow is conserved. What
      does that mean? Well, if 2 units of flow go into a, 2 units of flow must
      also come out of a, no more, no less. Obviously, the exceptions to this
      rule are S and T, as they do not take in or send out flow, respectively.
      If we extend this property inductively, we can conclude that, however much
      flow comes out of S, must go into T. In our simplified version of the
      problem, we will analyze the flow at a given snapshot in time. This means
      that whatever units of flow we send from S to a will be sent out of a at
      the same moment.
    </p>
    <p>
      Ok, boring blah blah over, let’s get into the solution. You can go ahead
      and try all the methods we’ve discussed so far and solve the problem. We
      spent a lot of time on graph theory, so we’ve gotta be able to solve this
      with what we know right? Eh, not really. I’m not gonna beat around the
      bush because that’s a lot more writing for me, let’s just dive into the
      optimal solution.
    </p>
    <p>
      The basic structure of our algorithm is going to be something along the
      lines of: find a path from S to T, send 1 unit of flow along that path,
      decrement the capacity of each edge on that path by 1, delete all
      saturated (0 capacity) edges, repeat until no more paths from S to T
      exist. Sounds easy enough right? Well there’s a little more nuance we have
      to throw in there to make it work. For reasons that I’m not going to cover
      here, this algorithm necessitates the creation of back-edges, or
      augmenting edges, at the beginning of the problem. I know this demands an
      example, so bear with me here because this is going to be ugly:
    </p>
    <img src="@/assets/CS180/img114.png" />
    <p>
      For each directed edge in the original graph, we create a directed edge
      going in the reverse direction. When we create these edges, we say they
      have a capacity of 0. Wow, that sounds useless, why’d we do that? Well,
      referring back to our algorithm, every time we add 1 unit of flow to an
      edge, we’ll increase its associated augmenting edge’s capacity by 1. In a
      higher-level view of the algorithm, this is essentially giving our network
      the option of “undoing” a transmission of flow. Don’t worry too much if
      you don’t know what that means, it should become clearer to you as we move
      on. To hopefully avoid some confusion later, let’s make it clear now that
      this works the other way around too. If you end up sending a unit of flow
      back along an augmenting edge, you’ll increase the capacity of the
      original edge by 1 as well.
    </p>
    <p>
      So to recap, we take in a weighted directed graph as input, create our
      augmented edges, find a path from S to T, send a unit of flow across that
      path, decrement the capacity of the edge while incrementing the capacity
      of its associated augmented edge, remove all saturated edges, find another
      path, and repeat until there are no more paths. Of course, we’re finding a
      path through some method we already know like BFS or DFS. Since the
      algorithm is actually relatively simple, we can quickly address time
      complexity here.
    </p>
    <p>
      Our path-finding method is going to take something like O(v + e) time due
      to the complexity of BFS/DFS/whatever. Since we send a unit of flow across
      the network each iteration, we’re going to take f iterations, where f
      represents the max flow possible in the network. As a result, we say that
      this algorithm, called Ford-Fulkerson, has a runtime of O(f(v + e)). There
      are more efficient variations of this algorithm that you can find in the
      textbook but they weren’t a part of the material I learned in class, so
      you won’t be hearing about them from me.
    </p>
    <p>
      My best advice for getting your bearings here is running through the
      algorithm on an example yourself and really understanding the full
      process. Of course, we’re missing a major part of our introduction: our
      proof. However, this proof is a little more in-depth than we’re used to,
      and it’s going to require a few more concepts that we haven’t touched on
      yet, so we’re actually going to tackle it in the next section.
    </p>
    <h3 ref="5.2">Unit 5.2: Min-Cut/Max-Flow Theorem</h3>
    <p>
      So, what we’ve done so far is propose an algorithm that finds the maximum
      flow in a given network. In order to prove this algorithm is in fact
      optimal, we have to introduce the concept of a cut.
    </p>
    <p>
      A cut is a partition of vertices in the network, such that S is in one
      partition and T is in the other. In this structure, if we take all the
      edges that extend from the S partition to the T partition and remove them,
      we can no longer send flow from S to T, as there will no longer be a valid
      path from S to T. We define the capacity of a cut as the sum of capacities
      of these edges that cross from the S partition to the T partition. If
      you’re comfortable with the Ford-Fulkerson algorithm, you should be able
      to see why this is important. Since cuts restrict how much flow can travel
      from S to T, we can say that the max-flow is less than or equal to the
      capacity of any cut in the network:
    </p>
    <img src="@/assets/CS180/img115.png" />
    <p>
      This tells us that we can cap our max-flow at the minimum capacity of any
      cut we find. This idea is going to be pivotal to our proof of
      Ford-Fulkerson.
    </p>
    <p>
      Let’s start off with 3 statements. (1) The residual network, Gf, contains
      no augmenting path. (2) The flow f is equal to the capacity of some cut
      (S, T) of G. (3) f is a max-flow of G. Our goal for these statements is
      going to be to show that, if one of these statements is true, then all of
      them must be true. We’ll see why after the proof.
    </p>
    <p>
      Ok, let’s start with statement (1). When we say our residual network
      contains no augmenting paths, we mean that the network comprised of G,
      along with its augmenting edges and flows, has no paths from S to T. Ok,
      let’s assume this is true. With that assumption, can we show that (2) is
      also true? Well, if there are no augmenting paths from S to T, that means
      there is some subset of saturated edges in the graph Gf. If we remove
      these saturated edges, S and T are guaranteed to be disconnected, since
      there are no augmenting paths. Let’s define a cut as containing all the
      vertices that are reachable from S. We then have a subset of saturated
      edges that go from the S partition to the T partition, whose total
      capacity is equivalent to the capacity of the cut. Since flow must travel
      from S to T, we know that the flow is equal to the sum of the capacities
      of the saturated edges that go from the S partition to the T partition. By
      transitivity, we have proved that if statement (1) is true, then statement
      (2) is also true. Notice that we’ve said nothing so far about whether this
      flow is a max-flow or not, that’s for the next step.
    </p>
    <p>
      Ok, let’s move on to the next association. Now, we’re going to assume that
      statement (2) is true, and we’re going to use that to prove statement (3)
      must also be true. So we know there’s a cut such that the flow of the
      network is equal to the capacity of the cut. We need to show that this
      flow must be the max-flow. Let’s remember back to the inequality from
      earlier. We know that the capacity of any cut must be greater than or
      equal to any valid flow in the graph. What this means is that max-flow is
      bounded by the capacity of cuts. If we think about it, we have found some
      flow that is equal to the capacity of a cut. Based on this inequality, we
      know that there cannot possibly exist a larger flow, as that larger flow
      would then exceed the capacity of the cut. Since there can be no larger
      flow, we have indeed found the max-flow. A nice analogy Master Majid gave
      during lecture is that, assume there’s some carnival ride where you must
      be 5′ or under to ride. If you proceed to find a person on the ride that
      is 5′, you know that they are the tallest person on the ride. Same logic
      applies. Flow must be equal to the capacity of a cut or less. If you find
      a flow that is equal to the capacity of a cut, you know that is the
      maximum flow in that graph. As a side-effect of this logic, we also know
      that the cut we’ve found must be the min-cut. Why? Well imagine there was
      a cut with smaller capacity. That means that any valid flow must be less
      that or equal to that smaller cut. However, we’ve found a valid flow that
      does not satisfy that condition. Sounds like a solid contradiction to me.
    </p>
    <p>
      Although this next proof is unnecessary, going over it wraps this whole
      thing up nicely, so here we go. Using statement (3), let’s prove that
      statement (1) is true. Well, we know that we have some max-flow. Assume
      there actually does exist an augmenting path in the residual network. If
      this were true, that means there exists some subset of non-saturated edges
      that can be used to go from S to T. As a result, we must be able to push
      at least 1 more unit of flow along that path, increasing our flow. That’s
      a contradiction, since we’ve claimed that we have already found our
      max-flow. (3) implies (1).
    </p>
    <p>
      Ok, so when are we going to start proving Ford-Fulkerson finds the
      max-flow. Well, we already have. Think about statement (1) real quick. The
      residual network having no augmenting paths is exactly the stopping
      condition for Ford-Fulkerson. That means that, if we apply Ford-Fulkerson
      to a network, we will arrive at a residual network where statement (1) is
      true. As we just spent the last few paragraphs proving, we’ll also have
      arrived at a residual network where statements (2) and (3) are true.
      Statement (3) claims that the flow is a max-flow, so, boom, we’re done.
      Kinda cool right?
    </p>
    <p>
      I really recommend familiarizing yourself with this proof; know it inside
      and out. Draw examples, try to think of counterexamples, do whatever suits
      your fancy, but just practice, practice, practice.
    </p>
    <h3 ref="5.3">Unit 5.3: Cell Towers</h3>
    <p>
      Ok, we’re going to cap off this short unit with a new aspect of network
      flow: problem design. As you may have been able to tell from the last 2
      sections, network flow is fairly limited algorithmically. We can’t change
      much about Ford-Fulkerson to force it into solving a wide variety of
      problems. So none of that “How do I DP this?” or “How to I D&C that?” that
      we’ve been getting in the past few units. Instead, network flow problems
      revolve around modelling a problem as a network, and then letting
      Ford-Fulkerson + min-cut/max-flow theorem handle the rest. Let’s see what
      we mean by that.
    </p>
    <p>
      Take a set of cell phones and cell towers. Each cell phone i must connect
      to a cell tower within its radius Ri to function. Each cell tower j can
      only handle a maximum of Cj phones. How do we connect phones to towers
      such that the maximum number of phones are functional? Try greedy, try DP,
      try praying, nothing’s really gonna work out. Let’s give networks a shot.
    </p>
    <p>
      Let’s create a set of nodes that represent phones and a set of nodes that
      represent towers:
    </p>
    <img src="@/assets/CS180/img116.png" />
    <p>
      In order for this network to make any sense at all to Ford-Fulkerson, we
      must add an arbitrary source and sink:
    </p>
    <img src="@/assets/CS180/img117.png" />
    <p>
      Sorry for the duplicate T‘s, but I don’t feel like remaking those images.
      Now, how do we connect our cell phones to cell towers? Well we said that
      as long as a tower was within a radius Ri of phone i, we could have a
      valid connection. As a result, we’ll create a directed edge going from
      each phone to every tower that falls in its radius. To simplify our logic,
      we’ll say that these edges have a capacity of 1. Each phone can only
      connect to a single cell tower. Now, remember, just because we’ve created
      this edge doesn’t mean this phone will be connected to these towers in the
      end. All we’re doing right now is constructing a network with the
      information we’re given. Ford-Fulkerson can handle the rest.
    </p>
    <p>
      We’re looking good so far, but how do we handle the capacities of each
      tower? What we’ll do is we’ll duplicate the tower in the following manner
      (assignment of phones to towers is arbitrary):
    </p>
    <img src="@/assets/CS180/img118.png" />
    <p>
      This duplication allows us to enforce an artificial bottleneck on our
      network. From the perspective of Ford-Fulkerson, this means that each
      tower Ti can only handle Ci units of flow as input, as that is the maximum
      it can output. Seems like solid logic to me. All that’s left to do is to
      connect our network to the source and sink, but how do we assign
      capacities to those edges? Well, if you really think about it, our
      problem’s logic all takes place in the interaction between phones and
      towers, the S and T are really just there to translate this network into
      the language of network flow. As a result, we don’t want to let them
      dictate how the algorithm runs, so let’s just give their edges a capacity
      of infinity:
    </p>
    <img src="@/assets/CS180/img119.png" />
    <p>
      Just imagine the capacities are there. I don’t have the right level of
      insanity to fill them in myself right now. At this point, that looks like
      a solid network to me. In fact, if we run this through Ford-Fulkerson, we
      get exactly the answer we want. Network flow is cool. And easy. Thank God.
    </p>
    <h2 ref="6">Unit 6: NP-Completeness</h2>
    <p>
      Ok, welcome back to the world of theory. Even in a fairly practical class
      like this, we’re not safe. Throughout our time in 180, we’ve been dealing
      with efficient algorithms and uncovering efficient solutions using the
      tools we’ve discovered along the way. Now, we’re delving into the world of
      problems where that isn’t so possible.
    </p>
    <p>
      Of course, these problems aren’t unsolvable by any means. In fact,
      oftentimes, their most efficient solution is simple brute force. Great for
      us programmers. Not so great for anyone else. What this means is that this
      unit isn’t going to cover our usual problem -> solution that we’ve seen
      thus far. Get ready for something a little new.
    </p>
    <h3 ref="6.1">Unit 6.1: Polynomial-Time Reducibility</h3>
    <p>
      What the hell does a problem being NP-Complete mean? NP-Complete problems
      are “difficult”. Well that’s dumb, every problem we’ve done has been
      difficult. When we say “difficult” in this context, we mean that no one
      has solved this problem in polynomial time. When it comes to these
      problems, your basic brute force intuition that leads to your O(2^n) or
      O(n!) answer isn’t dumb. In fact, it’s most likely optimal.
    </p>
    <p>
      The computer science research community has a running list of these
      NP-complete problems. So great, we can’t solve them, what are we doing
      here? Our basic intuition is, given a novel problem that no one has seen
      before, how can we prove to ourselves that the problem is NP-complete? We
      obviously don’t want to spend days and weeks trying to solve a problem
      that can’t even be solved by those at the top of the field. Yeah, not even
      Smallberg. So, do we have an easy way to address this issue?
    </p>
    <p>
      The answer is yes, and it comes in the form of a concept called
      polynomial-time reducibility. Imagine arbitrary problems X and Y. We say
      that Y is polynomial-time reducible to X if we can take the input to
      problem Y, transform it in polynomial time to an input for problem X, then
      take problem X‘s output and transform it into a solution for problem Y in
      polynomial time. Ok, that’s a lot of big words for 1 sentence, so let’s
      try to make things a little easier. First of all, here’s some notation for
      “Y is polynomial-time reducible to X“:
    </p>
    <img src="@/assets/CS180/img120.png" />
    <p>Now, let’s model these problems as follows:</p>
    <img src="@/assets/CS180/img121.png" />
    <p>
      I want to emphasize that we don’t care what the solutions to X and Y
      really are. At least for now. What we’re going to do from here is give
      problem Y some input:
    </p>
    <img src="@/assets/CS180/img122.png" />
    <p>
      From here, we want to do some operation that takes polynomial time to take
      this input and transform it into an input that X can recognize. Once
      again, we don’t care what this transformation actually entails, all that
      matters is that it takes polynomial time:
    </p>
    <img src="@/assets/CS180/img123.png" />
    <p>
      We will then invert those steps to process the output of problem X and
      transform it into the output of problem Y:
    </p>
    <img src="@/assets/CS180/img124.png" />
    <p>
      So, if this process can be completed while guaranteeing polynomial-time
      for the input and output transformations, we can say that Y is
      polynomial-time reducible to X. Kinda intuitive right?
    </p>
    <p>
      Here’s a simple example. Let’s say problem X is sorting a list and problem
      Y is finding the minimum of a list. Well, the input to both problems is a
      list, so the input transformation is trivial. If we pass this list through
      problem X, we’ll output a sorted list. In order to transform this output
      to answer the minimum element problem, all we have to do is take the first
      element of that list, another polynomial time operation. As a result, we
      can say that finding the minimum of a list is polynomial-time reducible to
      the sorting of a list.
    </p>
    <p>
      There are a couple things I want to note about that example. First of all,
      you can very easily apply the same logic in the other direction, and make
      the claim that sorting a list is polynomial-time reducible to finding the
      minimum of a list. That means that this particular example is symmetric,
      however, this is not true for general polynomial-time reducibility. While
      polynomial-time reduction is reflexive (duh) and transitive, it is not
      guaranteed to be symmetric. The other thing I want to note is that, as you
      may be able to tell, using sorting to find the minimum of a list is not
      the only way to solve the minimum element problem. In fact, it’s an awful
      way to solve that problem. The point of this technique is to establish a
      relationship between the two problems, not derive an efficient solution
      for them. So, for the future, just note that using X to solve Y is not the
      only way to solve Y.
    </p>
    <p>
      Ok, with that said, how does that help our NP problem? Well, let’s assume
      Y ≤p X. If X can be solved in polynomial time, then Y must also be able to
      be solved in polynomial time. Why? Well imagine we have some black box
      that contains X, and we know it can be solved in polynomial time. This
      means that solving Y can be done by a couple polynomial-time
      transformations and a polynomial-time access of the black box. Overall,
      this tells us Y is solvable in polynomial time. If you think about it,
      we’ve been using this property implicitly throughout this entire class.
      Whenever we’ve run into a graph theory problem that requires a BFS, bam,
      BFS is X and the overall problem is Y. Same thing applies for every other
      unit. You’ve done it without really thinking about it because it kinda
      just makes sense.
    </p>
    <p>
      What if we change around our parameters a little? Let’s maintain that Y ≤p
      X, but now, we’re given that Y cannot be solved in polynomial time. If
      this is true, then X also cannot be solved in polynomial time. If Y is
      hard, so is X. Well that shouldn’t be that hard to prove. Let’s imagine
      that, by contradiction, X was solvable in polynomial time. If that were
      the case, then our logic from above would take over. After a couple
      polynomial time transformations, which are guaranteed to be available
      since Y ≤p X, we would have a polynomial time solution for Y.
    </p>
    <p>
      Let’s dive a little bit into bigger picture before moving on. The world of
      NP problems is essentially a bunch of similar problems that can be
      transformed to each other. As a result, we know these problems are
      related. What we don’t know is whether or not these problems can be solved
      in polynomial time. At the end of the day, we haven’t been able to solve
      them yet, but we don’t know what’s gonna happen in the future. Did 8 year
      old me think I’d spend hundreds of hours writing guides that no one was
      ever gonna read? No, but here we are anyways.
    </p>
    <p>
      So there we go. The bread and butter for our unit. Using these statements,
      we can prove NP-completeness of a given problem, assuming we have an
      arsenal of NP-complete problems to pull from. Let’s get into some
      examples.
    </p>
    <h3 ref="6.2">Unit 6.2: Max Clique and Max Independent Set</h3>
    <p>
      The goal of this section is going to be to prove that the max independent
      set problem is NP-complete, given the information that the max clique
      problem is NP-complete.
    </p>
    <p>
      Both of these problems are going to take in a graph as input. For example,
      we’ll use this graph:
    </p>
    <img src="@/assets/CS180/img125.png" />
    <p>
      The max clique problem attempts to find the maximally-sized clique present
      in the graph. A clique is a subset of the nodes in the graph such that
      each node in the subset is pairwise connected to each other node in the
      subset. For example, the max clique in this graph is {a, d, b}, since each
      node in the subset is connected to every other node. We cannot include c
      in the clique, since it is only connected to b.
    </p>
    <p>
      The maximum independent set problem is essentially the opposite of the max
      clique problem. Here, we want to find a subset of nodes, such that no
      nodes in the subset are pairwise connected. In the above example, the
      maximum independent set can be formed with either {a, c} or {d, c}, as
      both sets are of size 2 and neither set contains any nodes that are
      pairwise connected.
    </p>
    <p>
      Ok, let’s set up our circle diagram. We know that max clique is an
      NP-complete problem, and we want to prove that max independent set is as
      well. To prove NP-completeness, we need to use the statement that, if Y is
      NP-complete, then X must be as well. As a result, the statement we’re
      trying to prove is that max clique ≤p max independent set, or:
    </p>
    <img src="@/assets/CS180/img126.png" />
    <p>
      Ok, so how do we handle our input and output transformations? Well, in a
      clique, all the nodes are pairwise connected, while, in an independent
      set, none of the nodes are pairwise connected. Sounds promising. With a
      bit more thinking, we realize that, if G is the input to the max clique
      problem, the maximum independent set in the complement of G is the max
      clique of G:
    </p>
    <img src="@/assets/CS180/img127.png" />
    <p>
      As you can see, the max independent set of G-complement is {a, d, b},
      which is exactly the max clique of G. Keep on proving this to yourself if
      you’re not convinced.
    </p>
    <p>
      With this fact under our belt, we can easily say that all we have to do to
      show polynomial-time reducibility is transform the input graph to the max
      clique problem to its complement, run max independent set, then make no
      change to the output. Both of those transformations take polynomial time,
      so we’ve proved that max clique ≤p max independent set. From there, all we
      need to do is remember that if Y ≤p X, and Y is NP-complete, then X is
      also NP-complete. Not too hard of a problem overall right?
    </p>
    <p>
      Well, there’s not much more for me to teach. All these NP-complete
      problems can be fairly different from one another, so do some practice
      problems, get used to the process and mindset, and you’ll do just fine.
    </p>
    <h2 ref="after">Afterword</h2>
    <p>
      Thanks for coming along with me for this journey. Overall, I really
      enjoyed going through this class and I hope you did as well. My only
      complaint is that a lot of the material isn’t super guide-friendly, so I’m
      not sure how helpful I’ve been. I did my best I guess.
    </p>
    <p>
      Hopefully this guide was a little better than some of my past ones, I
      tried to learn from my mistakes before and correct them here. As I write
      this, I’m 2 days away from taking the final of this course, and am sorta
      on track for an A as long as I don’t choke (knock on wood). There were a
      lot of things I could’ve done better, and I know that. I do hope that
      you’ve found success here as well, and wish you the best of luck as you
      move forwards with your CS career.
    </p>
    <p>Thanks for reading!</p>
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