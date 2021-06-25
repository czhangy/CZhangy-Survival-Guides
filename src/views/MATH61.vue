<template>
  <div class="math61">
    <h1>Surviving MATH 61</h1>
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
      Unit 1: Basics
    </h3>
    <h4
      class="link"
      @click="() => $refs['1.1'].scrollIntoView({ behavior: 'smooth' })"
    >
      1.1: Mathematical Induction
    </h4>
    <h4
      class="link"
      @click="() => $refs['1.2'].scrollIntoView({ behavior: 'smooth' })"
    >
      1.2: Sets
    </h4>
    <h4
      class="link"
      @click="() => $refs['1.3'].scrollIntoView({ behavior: 'smooth' })"
    >
      1.3: Functions
    </h4>
    <h4
      class="link"
      @click="() => $refs['1.4'].scrollIntoView({ behavior: 'smooth' })"
    >
      1.4: Operators
    </h4>
    <h3
      class="link"
      @click="() => $refs['2'].scrollIntoView({ behavior: 'smooth' })"
    >
      Unit 2: Relations
    </h3>
    <h4
      class="link"
      @click="() => $refs['2.1'].scrollIntoView({ behavior: 'smooth' })"
    >
      2.1: Types of Relations
    </h4>
    <h4
      class="link"
      @click="() => $refs['2.2'].scrollIntoView({ behavior: 'smooth' })"
    >
      2.2: Equivalence Relations
    </h4>
    <h4
      class="link"
      @click="() => $refs['2.3'].scrollIntoView({ behavior: 'smooth' })"
    >
      2.3: Matrices of Relations
    </h4>
    <h3
      class="link"
      @click="() => $refs['3'].scrollIntoView({ behavior: 'smooth' })"
    >
      Unit 3: Counting Principles
    </h3>
    <h4
      class="link"
      @click="() => $refs['3.1'].scrollIntoView({ behavior: 'smooth' })"
    >
      3.1: Multiplication Principle
    </h4>
    <h4
      class="link"
      @click="() => $refs['3.2'].scrollIntoView({ behavior: 'smooth' })"
    >
      3.2: Addition Principle
    </h4>
    <h4
      class="link"
      @click="() => $refs['3.3'].scrollIntoView({ behavior: 'smooth' })"
    >
      3.3: Inclusion-Exclusion
    </h4>
    <h4
      class="link"
      @click="() => $refs['3.4'].scrollIntoView({ behavior: 'smooth' })"
    >
      3.4: Permutations and Combinations
    </h4>
    <h4
      class="link"
      @click="() => $refs['3.5'].scrollIntoView({ behavior: 'smooth' })"
    >
      3.5: Pigeonhole Principle
    </h4>
    <h4
      class="link"
      @click="() => $refs['3.6'].scrollIntoView({ behavior: 'smooth' })"
    >
      3.6: Recurrence Relations
    </h4>
    <h3
      class="link"
      @click="() => $refs['4'].scrollIntoView({ behavior: 'smooth' })"
    >
      Unit 4: Graph Theory
    </h3>
    <h4
      class="link"
      @click="() => $refs['4.1'].scrollIntoView({ behavior: 'smooth' })"
    >
      4.1: Graph Definitions
    </h4>
    <h4
      class="link"
      @click="() => $refs['4.2'].scrollIntoView({ behavior: 'smooth' })"
    >
      4.2: Special Graphs
    </h4>
    <h4
      class="link"
      @click="() => $refs['4.3'].scrollIntoView({ behavior: 'smooth' })"
    >
      4.3: Paths and Cycles
    </h4>
    <h4
      class="link"
      @click="() => $refs['4.4'].scrollIntoView({ behavior: 'smooth' })"
    >
      4.4: Euler Cycles
    </h4>
    <h4
      class="link"
      @click="() => $refs['4.5'].scrollIntoView({ behavior: 'smooth' })"
    >
      4.5: Hamiltonian Cycles
    </h4>
    <h4
      class="link"
      @click="() => $refs['4.6'].scrollIntoView({ behavior: 'smooth' })"
    >
      4.6: Dijkstra's Algorithm
    </h4>
    <h4
      class="link"
      @click="() => $refs['4.6'].scrollIntoView({ behavior: 'smooth' })"
    >
      4.7: Matrix Representations
    </h4>
    <h4
      class="link"
      @click="() => $refs['4.6'].scrollIntoView({ behavior: 'smooth' })"
    >
      4.8: Isomorphisms and Planarity
    </h4>
    <h3
      class="link"
      @click="() => $refs['after'].scrollIntoView({ behavior: 'smooth' })"
    >
      Afterword
    </h3>
    <h2 ref="intro">Introduction</h2>
    <p>
      Hello, hello and welcome to my guide for Math 61. I really don’t have much
      to say about this one. This was, in my opinion, the easiest math class
      I’ve taken in years. The difficulty was honestly comparable to my 9th
      grade math class. I ended up learning pretty much all of the material
      during the midterms/finals. I did, admittedly, below the average on every
      single exam, but I still ended with a 95% in the class, so take from that
      what you will.
    </p>
    <p>
      One of the things you’ll have to get used to in this class is how many
      different topics you’ll cover. For the most part, topics don’t really
      build off of each other and application of the material was mostly ignored
      (by my professor). If you’re anything like me, that’ll annoy you and make
      you not wanna have anything to do with the class. I wish I could tell you
      that you need to stay focused and work hard in order to succeed, but I
      can’t. I definitely didn’t do that and I ended up just fine. From my
      experience, 90% of the time in this class is learning the absolute basics
      of the content, so I wouldn’t be expecting anything interesting coming in.
      Just do what you think is best for you, and you’ll most likely be fine.
    </p>
    <p>
      I took this class with Professor Salazar, who, despite being one of the
      nicest human beings to ever exist, was just not a fantastic professor.
      This is one of the only classes I’ve ever taken where I truly feel like I
      learned nothing new or important. I will cover everything I needed to
      succeed in this class, but I can’t provide anything that will be of use
      beyond it. I can’t promise that will be everything you need to succeed,
      depending on your professor, but hopefully you’ll Be Alright (by Dean
      Lewis).
    </p>
    <h2 ref="1">Unit 1: Basics</h2>
    <p>
      This unit is pretty much just me shoving all the stuff from the first 2
      weeks into the same place. They aren’t related for the most part, but are
      all way too short to have their own unit. This’ll be a good introduction
      to how seemingly disorganized this course’s material is.
    </p>
    <p>
      While, from my experience, this material is extremely easy, I’ve seen a
      lot of ways to make it more complicated. Since I wasn’t taught how to deal
      with those complex variations, I can’t teach them. That’ll be another
      thing that you can learn quickly; if you don’t think my writing helps,
      don’t use this guide. Like I’ve already said, my professor was abnormally
      easy. I won’t be offended if you dip out. Ok maybe a little.
    </p>
    <h3 ref="1.1">Unit 1.1: Mathematical Induction</h3>
    <p>
      This is probably gonna be the hardest thing in the class for a while, and,
      considering I learned this in 9th/10th grade, that should say a lot.
    </p>
    <p>
      Induction is simply a way of proving a statement P(n) true for a given
      range of natural numbers. Examples of the kinds of statements we’ll be
      working with include:
    </p>
    <img src="@/assets/MATH61/img1.png" />
    <p>
      The basic idea of induction is that we prove these statements true for a
      specific case, and use that to prove it true for all possible cases. This
      structure therefore has 2 pieces: the base case and the inductive step.
    </p>
    <p>
      The base case is pretty self-explanatory. We simply prove that the
      statement is true for the first possible case through manual methods.
      Let’s take the first example above:
    </p>
    <img src="@/assets/MATH61/img2.png" />
    <p>We’re going to bound this statement by the condition:</p>
    <img src="@/assets/MATH61/img3.png" />
    <p>This means that for our base case, we’re going to test n = 1:</p>
    <img src="@/assets/MATH61/img4.png" />
    <p>
      There we go, we proved the statement for the base case. Obviously, it’d be
      a little tedious to repeat that process for every number from 2 to
      infinity, so that’s where the inductive step comes in.
    </p>
    <p>
      The essence of the inductive step is that if we assume P(n) is true, then
      we must prove P(n + 1) is also true. A common visualization of this
      process is a staircase:
    </p>
    <img src="@/assets/MATH61/img5.png" />
    <p>
      The idea is that the base case proves that we can get onto the staircase,
      while the inductive step proves that once we’re on a stair, we can get to
      the next one. If we can prove both of these things, we’ve proved we can
      get to any step on the staircase. In terms of the statement, if we prove
      that the first case works and that if one case works then the next case
      works, we’ve proved that all cases beyond the first case work.
    </p>
    <p>Going back to the inductive step of the example, we have:</p>
    <img src="@/assets/MATH61/img6.png" />
    <p>From there, we can then write:</p>
    <img src="@/assets/MATH61/img7.png" />
    <p>
      Now, since we have given ourselves an assumption to work with, we can
      substitute for the first term on the right side:
    </p>
    <img src="@/assets/MATH61/img8.png" />
    <p>
      If you compare this with the statement we set out to prove, we can see
      that we’ve completed our proof by induction.
    </p>
    <p>
      There really isn’t much more to this topic, but we’re going to go over a
      few more examples and try to get a little more in-depth with some advice.
    </p>
    <p>Let’s try proving that:</p>
    <img src="@/assets/MATH61/img9.png" />
    <p>
      In English for non-CS majors, this just means that 15n - 1 is a multiple
      of 7. For those unfamiliar with the operator, the mod is called the
      modulus operator (mod for short) and outputs the remainder of the division
      between the 2 operands (i.e. 8 mod 6 = 2, 15 mod 4 = 3, etc.).
    </p>
    <p>Starting with the base case we have:</p>
    <img src="@/assets/MATH61/img10.png" />
    <p>
      Yes, that space in front of mod is supposed to be there. Yes, I absolutely
      hate it.
    </p>
    <p>
      Now that we’ve proven our base case, we can move into the inductive step.
      Although it’s unnecessary, I like starting by writing our initial
      statements down to keep track of everything later:
    </p>
    <img src="@/assets/MATH61/img11.png" />
    <p>
      From here, the first step in solving the induction is always going to be
      trying to get our assumption to fit into the statement we’re trying to
      prove. To get this done, we’re going to have to rewrite our assumption:
    </p>
    <img src="@/assets/MATH61/img12.png" />
    <p>
      If x is some integer, it shouldn’t take long to see that this statement is
      the same as the old one.
    </p>
    <p>Adapting our statement to fit this assumption:</p>
    <img src="@/assets/MATH61/img13.png" />
    <p>
      As you can see, sometimes you need to get a little creative with how you
      work the assumption into the induction. At this point, we’ve basically
      arrived at our proof:
    </p>
    <img src="@/assets/MATH61/img14.png" />
    <p>
      Since x is established as an integer, this is essentially saying that 7
      times an integer is a multiple of 7. By definition, this is true, so we
      have completed our induction.
    </p>
    <p>
      Since there’s still a few more things I wanna drive home, we’re gonna end
      with a third example. You’re welcome:
    </p>
    <img src="@/assets/MATH61/img15.png" />
    <p>Let’s start with the same base case method we’ve been doing:</p>
    <img src="@/assets/MATH61/img16.png" />
    <p>
      Base case seems complete. Spoilers, it’s not, we’ll get back to that in a
      second.
    </p>
    <p>Moving into the inductive step, we have:</p>
    <img src="@/assets/MATH61/img17.png" />
    <p>The first step here should be pretty obvious:</p>
    <img src="@/assets/MATH61/img18.png" />
    <p>
      Notice how we carried the inequality down. When your induction has an
      inequality, you should always end up doing this when you’re substituting.
      It shouldn’t take you long to prove that this statement still holds true.
    </p>
    <p>
      Here’s where the induction gets a little more complicated. Our target is
      (n + 1)3, and our current statement is nowhere near that. Well let’s be
      creative and expand both out:
    </p>
    <img src="@/assets/MATH61/img19.png" />
    <p>
      If we can prove that 4n3 is always greater than (n + 1)3 for the desired
      range, we can make a substitution into the inequality and complete our
      induction. However, if you plug in numbers, you actually see that for n =
      1, (n + 1)3 > 4n3. So we’re screwed. We give up. Just kidding of course.
      Don’t be a quitter.
    </p>
    <p>
      Remember that we’re trying to prove this within a desired range. So what
      if we could just modify our desired range? Our range is defined by what
      our inductive step needs to prove. So let’s take the case of n = 1 out of
      the inductive step and put it into our base case:
    </p>
    <img src="@/assets/MATH61/img20.png" />
    <p>
      Now, our base case has proved cases n = 0 and n = 1, and our inductive
      step only needs to prove the cases from n = 2 onwards. Since we know that
      4n3 > (n + 1)3 for that range, we can say:
    </p>
    <img src="@/assets/MATH61/img21.png" />
    <p>And we did our induction!</p>
    <p>
      Now, I definitely have not covered all the types of induction problems
      you’ll be seeing, but hopefully, I gave you a starting point for your
      thinking process. Just make sure you’re being careful as you progress
      through your inductions, and you’ll be fine. As with any proof, just keep
      in mind you can’t use what you’re trying to prove to prove it. So if your
      induction hinges on the P(n+1) statement being true, you done messed up.
    </p>
    <h3 ref="1.2">Unit 1.2: Sets</h3>
    <p>
      Moving along, our next topic is sets. This is really just a hodge-podge of
      terms and concepts loosely related to each other so try to stay with me.
      We’re gonna be taking a very surface level look here.
    </p>
    <p>
      Very roughly speaking, a set is simply a collection of objects. In this
      collection, there are no duplicates and order doesn’t matter:
    </p>
    <img src="@/assets/MATH61/img22.png" />
    <p>
      Sets can be described by listing the elements of the set as shown above.
      They can also be described by a given property:
    </p>
    <img src="@/assets/MATH61/img23.png" />
    <p>
      Here’s where we see our first instance of logical notation. Not a fan, but
      it’ll probably be necessary to learn. In the statement above, | means
      “such that”. From here we can define some important sets that we’ll be
      seeing:
    </p>
    <img src="@/assets/MATH61/img24.png" />
    <p>
      Another new logical operator and one you’ll be seeing a lot: ∈ means “in”.
      If you couldn’t tell from the definitions above, N is the set of natural
      numbers, Z is the set of integers, Q is the set of rational numbers, and
      Nx is the set of natural numbers up to x.
    </p>
    <p>
      As an additional note, we’ve been defining sets as collections of numbers,
      but in reality sets can be a collection of anything:
    </p>
    <img src="@/assets/MATH61/img25.png" />
    <p>
      With our basic definition out of the way, we can start looking at some
      properties of sets.
    </p>
    <p>
      The first thing we’ll look at is cardinality: the size of a finite set.
      Emphasis on the requirement that the set is finite. Taking the cardinality
      of an infinite set (such as N) is undefined. Otherwise, cardinality is
      just entirely what you’d think. Taking the same set A that we defined
      above, we can say:
    </p>
    <img src="@/assets/MATH61/img26.png" />
    <p>
      Before we move into our next concept, let’s take some time and define a
      few more things that’ll help us later.
    </p>
    <p>
      The first of these definitions is a notation that we used above. You’ve
      probably seen it before, but we can write that an element x is an element
      of a set A with:
    </p>
    <img src="@/assets/MATH61/img27.png" />
    <p>Likewise, we can say that element y is not in set A with:</p>
    <img src="@/assets/MATH61/img28.png" />
    <p>
      The next thing we want to do is to define the empty set. Like the name
      implies, the empty set is just a set with no elements, denoted with:
    </p>
    <img src="@/assets/MATH61/img29.png" />
    <p>One thing to be careful of is that:</p>
    <img src="@/assets/MATH61/img30.png" />
    <p>
      Is not the empty set. It’s a set containing the empty set, which is
      actually a set with 1 element. Just be careful.
    </p>
    <p>
      The next thing I’m going to say is going to sound stupid because of how
      obvious it is. Honestly, that’s what I felt for a lot of this class, so
      you’re gonna have to get used to it. 2 sets are equal by definition when
      they contain the same elements. In much more complicated, logical
      notation, we write this as:
    </p>
    <img src="@/assets/MATH61/img31.png" />
    <p>
      We have a lot of new logical operators, so a quick rundown: ⇔ means “if
      and only if”, ∀ means “for all”, ⇒ means “implies”, and ^ means “and”.
    </p>
    <p>
      Ok, are you bored yet? I sure am. I really feel like the hours of work I’m
      spending on this aren’t useful because all of this stuff is so easy.
    </p>
    <p>
      Using these new definitions, we can go into our first example that might
      actually require you to use your brain. Lets prove X = {x | x2 + x - 6 =
      0} and Y = {2, -3} are equal. Of course, by the definition of set equality
      that we presented above, we need to prove every element in X is an element
      of Y and vice versa. Let’s start by assuming a given element x is part of
      set X. That would imply:
    </p>
    <img src="@/assets/MATH61/img32.png" />
    <p>Now, if you passed your 6th grade math course, you know:</p>
    <img src="@/assets/MATH61/img33.png" />
    <p>
      The new logical operator, ∨, is simply “or”. This leaves us with 2
      elements in set X, allowing us to write:
    </p>
    <img src="@/assets/MATH61/img34.png" />
    <p>
      So now we’ve proved all elements in X are elements in Y. The last thing to
      prove is the reverse. I’ll leave that to you because it’s easy and tedious
      and my head hurts.
    </p>
    <p>
      These kinds of proofs that have a very obvious conclusion, but a
      convoluted process, are the hallmark of this class and I hated it.
      Unfortunately, we’ll have to deal with it. Moving on to new things, let’s
      introduce the idea of subsets. A subset is defined as follows:
    </p>
    <img src="@/assets/MATH61/img35.png" />
    <p>
      In English, a set X is a subset of a set Y if and only if, for all
      elements x in X, x is also an element of Y. Like everything else so far,
      don’t overthink it, it really is that easy.
    </p>
    <p>
      By definition, this means that any set is a subset of itself. Since this
      seems a little redundant, we can be a little more specific in our
      definition:
    </p>
    <img src="@/assets/MATH61/img36.png" />
    <p>
      This is the definition of a proper subset, and is the same as a subset,
      except it also specifies that if X is a subset of Y, then Y cannot be a
      subset of X. This indirectly means that the sets are not the same.
    </p>
    <p>
      Another property to note here is that based on our definition, the null
      set is a subset of any given set.
    </p>
    <p>
      Next point to discuss is the power set, a set of all subsets of a given
      set. For instance, if we define set X as follows:
    </p>
    <img src="@/assets/MATH61/img37.png" />
    <p>Then X’s power set is:</p>
    <img src="@/assets/MATH61/img38.png" />
    <p>
      These are really tedious and I’m praying for you that you won’t have to
      deal with these often. An interesting (sorta-kinda-not-really-at-all) note
      is that we can actually define a power set’s cardinality as follows:
    </p>
    <img src="@/assets/MATH61/img39.png" />
    <p>
      If you understand the binary system, you can prove this by modeling the
      set X in binary. Alternatively, you can prove that you are in fact a sane
      human being and do no such modeling.
    </p>
    <p>
      From here, we can finish off the topic by rapid-firing some more
      definitions down your throat (woohoo). For the following, assume X and Y
      are sets.
    </p>
    <p>
      The universe (U) encapsulates all elements, assuming that statement makes
      sense in a given context. For instance, the universe may consist of every
      integer, while X contains 1 and Y contains 2. I saw this term used exactly
      0 times, but I thought I’d throw it in just in case.
    </p>
    <p>The complement of X, or all elements not in X is defined by:</p>
    <img src="@/assets/MATH61/img40.png" />
    <p>The union of X and Y, or all elements in either X or Y is defined by:</p>
    <img src="@/assets/MATH61/img41.png" />
    <p>
      The intersection of X and Y, or all elements in both X and Y, is defined
      by:
    </p>
    <img src="@/assets/MATH61/img42.png" />
    <p>
      The set difference of X and Y, or all elements in X that are not in Y, is
      defined by:
    </p>
    <img src="@/assets/MATH61/img43.png" />
    <p>
      From these, we can define a set of laws that CS majors will be familiar
      with, known as De Morgan’s Laws:
    </p>
    <img src="@/assets/MATH61/img44.png" />
    <p>
      These laws help us remember the complements of unions and intersections.
      Like so many things in this class, you will hardly ever see this in any
      other topic we’ll cover. By now, I’m hoping you see why I really just
      didn’t like this class.
    </p>
    <p>
      One last definition (thankfully) before we can end the section. Ok
      technically 2, but as long as you aren’t in the 2nd grade, you’ll have
      seen the first.
    </p>
    <p>
      I’m going to assume you know what an ordered pair is. As the name implies
      order does matter, so unlike a set:
    </p>
    <img src="@/assets/MATH61/img45.png" />
    <p>
      Now, with some very confusing notation, we can define the cartesian
      product by the following:
    </p>
    <img src="@/assets/MATH61/img46.png" />
    <p>
      I promise this isn’t the cross-product, it’s even easier than that. The
      cartesian product of 2 sets A and B is essentially the set of all ordered
      pairs (a,b).
    </p>
    <p>
      We’re done! What you’ll probably see is a lot of combinations of all the
      things we introduced above; proofs, find x, y, and z, blah blah blah.
      Nothing hard yet, you probably could’ve done most of this in middle
      school. Have I told you how much I hate this class yet?
    </p>
    <h3 ref="1.3">Unit 1.3: Functions</h3>
    <p>
      Alright, at this point in the class I was seriously wondering if I had
      stumbled into an elementary school by accident. Let’s talk about
      functions.
    </p>
    <p>A function maps each member of a set X to a member of the set Y:</p>
    <img src="@/assets/MATH61/img47.png" />
    <p>
      As you may have seen in linear algebra, we say that this function
      transforms from set X to set Y:
    </p>
    <img src="@/assets/MATH61/img48.png" />
    <p>
      As we know, set X is called the domain, but contrary to what you might
      have been taught, we call the set Y the co-domain. You may have been
      taught to call it the range of the function, but as you can see above
      that’s an incorrect definition. A more correct way to refer to it is:
    </p>
    <img src="@/assets/MATH61/img49.png" />
    <p>
      In English, the range is the set of elements that are mapped to, while the
      co-domain is the set of elements that can be mapped to. As seen in the
      given example, not all elements of the co-domain are guaranteed to be in
      the range.
    </p>
    <p>
      The way you’re probably more familiar with representing the above diagram
      is in terms of ordered pairs:
    </p>
    <img src="@/assets/MATH61/img50.png" />
    <p>
      Of course, apart from defining functions using explicit sets as we did
      above, we can also define functions using a rule, such as:
    </p>
    <img src="@/assets/MATH61/img51.png" />
    <p>
      Very cool. Much wow. Sorry to pull out old jokes, but it seems appropriate
      given what grade level we’ve gone back to.
    </p>
    <p>
      To give an official definition, we say that if X and Y are sets, a
      function f from X to Y is a subset of the cartesian product X x Y, having
      the property that:
    </p>
    <img src="@/assets/MATH61/img52.png" />
    <p>
      Addressing the new operator, ∃! means “there exists a unique”. So in
      English, the above statement reads for all elements of X, there exists a
      unique element in Y that the function maps to.
    </p>
    <p>
      At this point in the lecture, we stopped to do an example. I shouldn’t
      have to explain to you why I’m not going to do that, I really hope you can
      figure this stuff out without one.
    </p>
    <p>
      Now we can move into some newer material related to classification of
      functions. You’ll usually see these combined with a proof, so we’ll do
      some of those I guess.
    </p>
    <p>
      The first classification we’re working with is a one to one function,
      sometimes called an injection. As the name implies, one to one functions
      specify that each element in the range must be mapped to by only 1 element
      in the domain:
    </p>
    <img src="@/assets/MATH61/img53.png" />
    <p>
      The above expression states that if the function maps 2 values in X to the
      same value in Y, then those 2 values in X must be equal. This can be
      written equivalently as:
    </p>
    <img src="@/assets/MATH61/img54.png" />
    <p>
      An implicit requirement of one to one functions is that the domain must be
      of equal or smaller size to the co-domain.
    </p>
    <p>Let’s go into an example; assume that:</p>
    <img src="@/assets/MATH61/img55.png" />
    <p>
      We’re tasked with proving that this function is one to one. We’ll start by
      applying our first definition and assuming:
    </p>
    <img src="@/assets/MATH61/img56.png" />
    <p>
      If this function is indeed one to one, we need to use this assumption to
      conclude n = m. As expected, this is easily done:
    </p>
    <img src="@/assets/MATH61/img57.png" />
    <p>
      Moving along, the next type of function is called an onto function, or a
      surjection. An onto function maps onto every element in Y:
    </p>
    <img src="@/assets/MATH61/img58.png" />
    <p>
      Recall how we said earlier that there is a distinction between the
      co-domain and the range. In the case of an onto function, that is not
      true. Since each element of the co-domain is mapped to, the range of an
      onto function is the entire co-domain.
    </p>
    <p>
      Converse to the implicit effects of the one to one function, an onto
      function requires Y to be smaller or equal in size to the X.
    </p>
    <p>
      Unlike the one to one section, I’m gonna leave you with an example that
      you can feel free to do (although I’m sure you won’t):
    </p>
    <img src="@/assets/MATH61/img59.png" />
    <p>Try and show that the above function is onto.</p>
    <p>
      You may also notice that the above function is also one to one. If a
      function is both one to one and onto, it’s super special and gets a new
      classification called a bijection. As a result of this definition,
      bijections take on a special property – they are invertible:
    </p>
    <img src="@/assets/MATH61/img60.png" />
    <p>
      This is of course the inverse function of f. From here, it should be
      trivial to prove to yourself that f-1 is not only a function, but also a
      bijection. I’ll leave that proof up to you.
    </p>
    <p>
      Finally, we’re going to end the topic with a short discussion of
      compositions. As you likely know, a composition is defined by the
      following:
    </p>
    <img src="@/assets/MATH61/img61.png" />
    <p>
      Finally, we’re going to end the topic with a short discussion of
      compositions. As you likely know, a composition is defined by the
      following:
    </p>
    <img src="@/assets/MATH61/img62.png" />
    <p>
      That brings us to the end of our intellectual discussion on functions. I
      pray that you understood all that. Guess what? The remaining section in
      this unit is somehow the easiest one.
    </p>
    <h3 ref="1.4">Unit 1.4: Operators</h3>
    <p>
      So let’s stop for a second and think about all the stuff I’ve gone over so
      far. For the most part, me writing all of that was more useless than
      drafting Anthony Bennett, but don’t worry. This upcoming section is the
      most useless section in the entire class. I’m seriously not sure if I ever
      saw any of this stuff outside of one lecture, so I’m gonna keep this short
      and simple. If you’re a CS major or have any experience with CS, just skip
      this section.
    </p>
    <p>
      Earlier, we introduced the mod operator. For review the mod operator
      outputs the remainder of a division operation:
    </p>
    <img src="@/assets/MATH61/img63.png" />
    <p>
      The next operator we’re going to look at is the floor operator, which
      outputs the greatest integer less than or equal to the input:
    </p>
    <img src="@/assets/MATH61/img64.png" />
    <p>
      Similarly, we have the ceiling operator, which returns the smallest
      integer greater than or equal to the input:
    </p>
    <img src="@/assets/MATH61/img65.png" />
    <p>
      The one thing you have to watch out for with these operators (if you ever
      see them) is their behavior with negative numbers:
    </p>
    <img src="@/assets/MATH61/img66.png" />
    <p>
      As long as you strictly follow the definitions I gave above, you’ll be
      fine.
    </p>
    <p>
      The last thing we’re gonna go over is a broader classification of
      operators. The most common type of classification is a binary operator, an
      operator that acts on 2 operands. Examples of such operators include
      addition, subtraction, multiplication, etc.
    </p>
    <p>
      The other, less common classification is a unary operator, an operator
      that only acts on a single operand. The most common example of this is the
      negative sign.
    </p>
    <p>
      Ok, I’m sorry for the terrible writing that you just saw in that section
      (not that my normal writing is much better), but it’s really hard to be
      motivated to write well when the section is just so blegh. I can’t wait
      until we get into something that actually resembles college math material.
    </p>
    <h2 ref="2">Unit 2: Relations</h2>
    <p>
      Ok, I went into this next section paying just as little attention as in
      the first section, and I kinda got a little lost. I’d say the material is
      undoubtedly harder now, but still nowhere near where a college math class
      should be. So no stressing here.
    </p>
    <p>
      The most important thing you can do in this section is pay very careful
      attention to the definitions of each term, because that’s where you’ll get
      tripped up. Unfortunately, there are a lot of random technicalities that
      pop up, and they make life hard.
    </p>
    <h3 ref="2.1">Unit 2.1: Types of Relations</h3>
    <p>
      Let’s start off by defining what a relation is. A relation R from X to Y
      is a subset of the cartesian product of X and Y. This definition may seem
      familiar since it’s basically the same as that of a function, except now,
      elements from X may map to multiple elements of Y:
    </p>
    <img src="@/assets/MATH61/img67.png" />
    <p>
      As you can see, the graph above clearly doesn’t depict a function since y
      and z map to multiple elements, but it is a valid relation. As a result,
      we can say that all functions as relations, but not all relations are
      functions.
    </p>
    <p>We typically write a relation in one of the following forms:</p>
    <img src="@/assets/MATH61/img68.png" />
    <p>As a quick example, let’s imagine X and Y are defined by:</p>
    <img src="@/assets/MATH61/img69.png" />
    <p>
      We’ll say that our relation R contains ordered pairs (x,y) if x divides y
      evenly. Our relation would therefore contain:
    </p>
    <img src="@/assets/MATH61/img70.png" />
    <p>
      Hopefully, everything’s been self-explanatory for the most part so far,
      because I really don’t know how else to introduce this stuff.
    </p>
    <p>
      We can now introduce a specific condition for a relation that we’ll be
      analyzing further. If X = Y, instead of saying we have a relation from X
      to Y, we instead say we have a relation on X.
    </p>
    <p>
      If we have a relation on some set X, we can represent said relation with
      something called a digraph. A digraph is a visual tool that depicts what
      elements are related to what. This is a really random place to introduce
      graphs for the first time, so I won’t get super into it here (we will in
      Unit 4 though). Let’s say we have the following definitions:
    </p>
    <img src="@/assets/MATH61/img71.png" />
    <p>We know that our relation contains:</p>
    <img src="@/assets/MATH61/img72.png" />
    <p>Instead of writing all that out, we can represent it with a digraph:</p>
    <img src="@/assets/MATH61/img73.png" />
    <p>
      As you can see, all we have to do is write out the elements and then draw
      arrows from each element to the elements they’re related to.
    </p>
    <p>
      With that introduced, let’s dive a little deeper into relations on a set.
      The most important thing to get across are the 4 types of relations on a
      set X. It would probably benefit us to introduce some examples here, but
      I’m going to hold off until after all the definitions are out there.
    </p>
    <p>
      A reflexive relation on X is a relation where all elements in X are
      related to themselves:
    </p>
    <img src="@/assets/MATH61/img74.png" />
    <p>
      A symmetric relation on X is a relation where the existence of any element
      x that’s related to y implies that y is also related to x:
    </p>
    <img src="@/assets/MATH61/img75.png" />
    <p>
      An anti-symmetric relation on X is a relation where if elements x and y
      are not equal, they cannot both be related to each other:
    </p>
    <img src="@/assets/MATH61/img76.png" />
    <p>
      Finally, a transitive relation on X is a relation where if x is related to
      y, and y is related to z, then x is related to z:
    </p>
    <img src="@/assets/MATH61/img77.png" />
    <p>
      A couple things to note from these definitions. Firstly, contrary to the
      naming of symmetric and anti-symmetric, it’s possible for a relation to be
      both symmetric and anti-symmetric or neither. Depending on your professor,
      you may also see anti-reflexive relationships. The same general idea
      applies there, but with reflexivity instead of symmetry.
    </p>
    <p>
      The other thing is that, although these definitions are fairly
      straightforward, the big thing that may trip you up is the concept of
      vacuous truth. Vacuous truth is the idea that a statement is automatically
      true if the conditions that are necessary for the statement to be true
      cannot be satisfied. For instance, if X is the empty set, any relation on
      X is automatically reflexive, symmetric, anti-symmetric, and transitive,
      because there are no elements in the relation to violate the conditions
      set out above.
    </p>
    <p>
      As I promised, we’ll go into an example here. Let’s set our definitions:
    </p>
    <img src="@/assets/MATH61/img78.png" />
    <p>
      Making sure we understand this, our set X is the set of all natural
      numbers, and elements of this set are related if x is less than or equal
      to y. Let’s work our way down the list.
    </p>
    <p>
      Starting with reflexivity, can we say that all elements are related to
      each other? Well, since every number is less than or equal to itself, they
      are all related to each other. The relation is reflexive.
    </p>
    <p>
      Next is symmetry: are all existing relations reversible? We can say that 1
      is definitely less than or equal to 2, but 2 is definitely not less or
      equal to than 1. This relation isn’t symmetric.
    </p>
    <p>
      How about anti-symmetry? If a relation is reversible, are the elements
      being related equal? Well, the only way for a relation to be reversible
      under these conditions is for the elements to be equal, so yes, the
      relation is anti-symmetric.
    </p>
    <p>
      Finally, transitivity. If one element is related to a second, and that
      second is related to a third, is the first element related to the third?
      Well, 1 is less than or equal to 2, and 2 is less than or equal to 3. 1 is
      obviously less than or equal to 3 by extension. I really hope I don’t need
      to go on; the relation is transitive.
    </p>
    <p>
      Now, back to more definitions because we haven’t had enough of those,
      please send help. If a relation is reflexive, anti-symmetric, and
      transitive, then we call the relation a partial order. For instance, the
      relation defined by:
    </p>
    <img src="@/assets/MATH61/img79.png" />
    <p>
      Is a partial order. Take the time to prove that to yourself if you don’t
      feel like you have a good grasp on the basic definitions yet. I’ll wait
      for you.
    </p>
    <p>
      Partial orders are important enough that they get their own symbols, but
      not important enough that I actually learned why they’re important in
      lecture. If some ordered pair (x,y) is in a partial order, then we say x
      is comparable to y, or:
    </p>
    <img src="@/assets/MATH61/img80.png" />
    <p>
      We then say that any ordered pair (x,y) that isn’t in the partial order,
      but is in the cartesian product X x X, implies x isn’t comparable to y,
      or:
    </p>
    <img src="@/assets/MATH61/img81.png" />
    <p>
      Now, I’m gonna briefly note that inverse relations and compositions of
      relations work exactly the same as they would in the functions topic. I
      really don’t want to just repeat what we had there, so we’re done. Woohoo.
    </p>
    <h3 ref="2.2">Unit 2.2: Equivalence Relations</h3>
    <p>
      I’m gonna keep this one brief. It got its own lecture, so I’m gonna give
      it its own section, but there isn’t that much material to cover.
    </p>
    <p>
      An equivalence relation is a relation that is reflexive, symmetric, and
      transitive. By these properties, equivalence relations can be visualized
      as follows:
    </p>
    <img src="@/assets/MATH61/img82.png" />
    <p>Assuming X is the parent set, we can say that:</p>
    <img src="@/assets/MATH61/img83.png" />
    <p>
      Essentially, all elements are relegated to subsets, which have no relation
      to one another. If any 2 elements are related, they will fall within the
      same subset. From this, we can write:
    </p>
    <img src="@/assets/MATH61/img84.png" />
    <p>
      Within these equivalence relations, we have what are called equivalence
      classes, Ai which are subsets of a set X that are related to each other by
      an equivalence relation. To clarify, let’s use an example and define our
      set X and relation R:
    </p>
    <img src="@/assets/MATH61/img85.png" />
    <p>
      Although we previously used | for “such that”, in this context it’s
      shorthand for “divides”. I’m going to tell you straight up that this is an
      equivalence relation. Prove it to yourself for practice. If we were to
      write out an equivalence class for the element 1, we would have:
    </p>
    <img src="@/assets/MATH61/img86.png" />
    <p>
      This is simply a set of every element that is related to 1. Let’s continue
      with the next 5 equivalence classes:
    </p>
    <img src="@/assets/MATH61/img87.png" />
    <p>
      As you can see, the equivalence class for 6 is the same as the equivalence
      class for 1 (ordering doesn’t matter). Remember, that by the properties of
      an equivalence relation, any element within a subset is related to all
      other elements in that subset. As a result, this equivalence relation only
      has 5 distinct equivalence classes. If we were to draw a similar diagram
      to the one I had above for this relation, we would see 5 different
      sections, one for each equivalence class, which we call partitions.
    </p>
    <p>
      Like I said, not much material. Hopefully that wasn’t too confusing, but I
      have my doubts there; my writing’s only getting worse.
    </p>
    <h3 ref="2.3">Unit 2.3: Matrices of Relations</h3>
    <p>
      To end off the unit, we’re just gonna introduce one last way to represent
      relations. Let’s say we have some relation R defined as:
    </p>
    <img src="@/assets/MATH61/img88.png" />
    <p>And let’s say that this relation is from set X to set Y:</p>
    <img src="@/assets/MATH61/img89.png" />
    <p>
      Now, paying careful attention to the order of the sets, we can represent
      our relation R as a matrix with |X| rows and |Y| columns:
    </p>
    <img src="@/assets/MATH61/img90.png" />
    <p>
      As you can see, each entry in the matrix is either a 1 to represent a
      relation or a 0 to represent no relation. Contrary to how we normally
      treat sets, our ordering actually does matter here. For instance, if we
      wrote X and Y as:
    </p>
    <img src="@/assets/MATH61/img91.png" />
    <p>Then, our relation matrix would end up being:</p>
    <img src="@/assets/MATH61/img92.png" />
    <p>
      One thing that these matrices are especially useful for is determining
      compositions of relations. As you may have learned before, compositions
      are essentially just matrix multiplication, and that holds for relations
      as well. For instance let’s take relations R1 from a set X to a set Y and
      R2 from a set Y to a set Z:
    </p>
    <img src="@/assets/MATH61/img93.png" />
    <p>
      If we were to track the composition of R1 and R2 ourselves, we’d end up
      with:
    </p>
    <img src="@/assets/MATH61/img94.png" />
    <p>Alternatively, if we were to represent these as matrices, we’d have:</p>
    <img src="@/assets/MATH61/img95.png" />
    <p>
      Since the 2 doesn’t mean anything in this context (it appears since
      there’s 2 routes to take from X to Z), we get the same exact result as we
      would’ve otherwise. Your choice which method you like more.
    </p>
    <p>
      If we focus again on the special case where X = Y, we can pull out some
      more useful properties of these matrices.
    </p>
    <p>
      For one, since there will always be |X| rows and |X| columns, matrices
      representing relations on a set will always be square matrices.
    </p>
    <p>
      Taking a closer look at these matrices under the definitions we analyzed
      at the beginning of the unit, we begin to see some patterns. For one, in a
      reflexive relation, we’ll notice that the main diagonal will always be
      filled with 1’s:
    </p>
    <img src="@/assets/MATH61/img96.png" />
    <p>
      This simply results from the fact that each element is related to each
      other. Obviously there’s no guarantees about other entries in the matrix,
      but I used an identity matrix above because it was easy.
    </p>
    <p>
      For a symmetric relationship, we’ll find that the matrix is always
      symmetric across the main diagonal:
    </p>
    <img src="@/assets/MATH61/img97.png" />
    <p>
      Another way to say this is that the matrix is always equal to its
      transpose:
    </p>
    <img src="@/assets/MATH61/img98.png" />
    <p>
      It shouldn’t take you long to see why this is the case using the
      definition of a symmetric relation.
    </p>
    <p>
      Finally, if we look at transitive relations, we’ll see that their relation
      matrices are always equal to their squares after simplification:
    </p>
    <img src="@/assets/MATH61/img99.png" />
    <p>
      Once again, since 2’s are the same as 1’s in this context, these matrices
      are equal in the context of relations. Again, I’ll leave it to you to
      explain why this is true using the definition of a transitive relation.
    </p>
    <p>
      Ok, looking back on that stuff, it really wasn’t hard. Hopefully you’re
      still with us. I promise the next unit requires 2+ brain cells to get
      through.
    </p>
    <h2 ref="3">Unit 3: Counting Principles</h2>
    <p>
      Ok this unit is undoubtedly the hardest one. With that said, I learned
      most of this material in 9th/10th grade, so “hardest” might not mean what
      you think it does. A lot of this stuff has probably been ingrained into
      you as common sense, but we’re going to waste your time by giving
      everything formal definitions.
    </p>
    <p>
      Other than those topics, we’ll also do a little backtracking into some of
      the material from the first 2 units to patch some things up. Ugh.
      Whatever. Let’s just get through it.
    </p>
    <h3 ref="3.1">Unit 3.1: Multiplication Principle</h3>
    <p>
      The idea behind multiplication principle is that if some activity can be
      broken down into some number t successive steps, where we can say step 1
      can be done n1 ways, step 2 n2 ways, etc., then we say there are:
    </p>
    <img src="@/assets/MATH61/img100.png" />
    <p>
      Ways to perform said activity. Make note of how the steps must be
      performed one after the other. The best way to illustrate this is with
      examples, so let’s get into one.
    </p>
    <p>
      Let’s break down how many ways we can make an ordered pair (x,y) from
      finite sets X and Y. If we were to take the method laid out above, we’ll
      start by breaking this down into steps. Step 1 is to pick an x and step 2
      is to pick a y. All that’s left now is to identify what n1 and n2 are.
      Since the number of ways to perform step 1 is simply how many different
      elements are in X, we can say:
    </p>
    <img src="@/assets/MATH61/img101.png" />
    <p>The same logic applies for picking a y:</p>
    <img src="@/assets/MATH61/img102.png" />
    <p>
      And pulling this all together and applying the multiplication principle,
      we get:
    </p>
    <img src="@/assets/MATH61/img103.png" />
    <p>
      The reality of the situation is that you probably could’ve done that in
      your head without any proper definitions in like 5 seconds, but, hey, it’s
      part of the course material, so I have to introduce it like this.
    </p>
    <p>Let’s finish off with another example. Let’s take the set X:</p>
    <img src="@/assets/MATH61/img104.png" />
    <p>
      How many strings of length 4 can we construct from this set? To solve this
      I’m going to introduce a useful technique that is helpful here, but will
      likely prove more useful later. Obviously the steps here are going to be
      picking a character to fit into each of the 4 slots. We can model this as:
    </p>
    <img src="@/assets/MATH61/img105.png" />
    <p>
      From here, we can simply plug in the number of ways to fill each blank.
      Since there are 5 different elements in the set, we end up with:
    </p>
    <img src="@/assets/MATH61/img106.png" />
    <p>
      What if we change what the problem’s asking for a little? How about the
      number of strings with no repeated characters that start with E? Now we
      have to think a little more about what’s in each blank:
    </p>
    <img src="@/assets/MATH61/img107.png" />
    <p>
      The first blank is easy. The string must start with E, so there’s only 1
      option here:
    </p>
    <img src="@/assets/MATH61/img108.png" />
    <p>
      For the rest of the blanks, we have to remember each character must be
      unique. As a result, each time we select a character, the number of
      remaining characters will decrease. Since we’ve already used E, there are
      only 4 characters remaining for the second slot. Understanding this, we
      can then fill in the rest of the blanks as follows:
    </p>
    <img src="@/assets/MATH61/img109.png" />
    <p>
      Nothing there should’ve been surprising. Really easy stuff if you don’t
      overthink it. Time to move on.
    </p>
    <h3 ref="3.2">Unit 3.2: Addition Principle</h3>
    <p>
      The addition principle states that, given multiple completely distinct
      situations, the number possibilities is given by the sum of ways each
      event can occur:
    </p>
    <img src="@/assets/MATH61/img110.png" />
    <p>
      This concept is definitely gonna benefit from an example. There isn’t
      really a good way to put it into words, but don’t worry, it’s really easy.
    </p>
    <p>
      Let’s say there are 6 people in a committee: A, B, C, D, E, and F. This
      committee is meant to have 3 leadership positions: chairperson, secretary,
      and treasurer. How many ways could C or F be chairperson?
    </p>
    <p>
      In order to use the addition principle, we’re gonna have to find how many
      ways each event can occur. As we went over recently, multiplication
      principle will get us through this. Notice that the only spots that matter
      are the 3 leadership positions. As a result, we have 3 blanks to fill:
    </p>
    <img src="@/assets/MATH61/img111.png" />
    <p>
      Each blank represents a position. Starting with C as the chairperson, we
      can fill in:
    </p>
    <img src="@/assets/MATH61/img112.png" />
    <p>
      Of course, since 1 person can’t hold multiple positions, we can fill in
      the rest easily:
    </p>
    <img src="@/assets/MATH61/img113.png" />
    <p>
      Now we know there are 20 ways to have C as the chairperson. If we perform
      the same analysis with F, we’ll find there are also 20 ways for F to be
      the chairperson. These situations are completely distinct since C and F
      can’t both be the chairperson, so we can use addition principle to answer
      the original question:
    </p>
    <img src="@/assets/MATH61/img114.png" />
    <p>
      Nothing mind-shattering going on there. I’d expect that you probably
      understood these principles on intuition alone, but here they are in their
      full, well-defined glory.
    </p>
    <h3 ref="3.3">Unit 3.3: Inclusion-Exclusion</h3>
    <p>
      So, what if we wanted to do an addition principle problem on sets that
      weren’t distinct? To finish up our discussion on these basic principles,
      we have to talk about inclusion-exclusion. Since this principle applies
      specifically to sets, there’s a good chance you haven’t had to deal with
      it explicitly yet. Even still, the intuition should still be there. It
      states that for 2 finite sets X and Y:
    </p>
    <img src="@/assets/MATH61/img115.png" />
    <p>
      If we think about it, this is just an extension of the same logic we used
      in addition principle. Recall that if X and Y were disjoint sets, then:
    </p>
    <img src="@/assets/MATH61/img116.png" />
    <p>
      So we know inclusion-exclusion tracks with what we know. Proving it
      further should also be easy. Let’s depict our sets in a Venn diagram:
    </p>
    <img src="@/assets/MATH61/img117.png" />
    <p>
      If we were to attempt to calculate the total number of elements in X and Y
      by adding the number of elements in X to the number of elements in Y, you
      would see a problem. The elements in both X and Y (their intersection)
      would be counted twice. This is why we have to subtract the cardinality of
      the intersection once, to account for this error.
    </p>
    <p>
      Of course, we can expand inclusion-exclusion to deal with any number of
      sets, although the formula certainly gets more complicated. In my
      experience, the Venn diagram analysis is the best way to deal with this
      without making errors. If done carefully, you should be able to adjust
      this to however many sets you need.
    </p>
    <p>
      Like always, we’ll finish the section off with an example. Once again,
      we’ll look at the committee of A, B, C, D, E, and F that must assign a
      chairperson, secretary, and treasurer. How many selections are there where
      C or D (or both) have leadership positions?
    </p>
    <p>
      The first thing to do is split our situation into sets. We’ll have X
      represent the set of selections where C has a position, and Y represent
      the selections where D has a position. From here, we notice our sets
      aren’t disjoint: there are situations where both C and D have positions.
      As a result, we must use inclusion-exclusion rather than the simplified
      addition principle:
    </p>
    <img src="@/assets/MATH61/img118.png" />
    <p>
      Now, we just have to use what we know to get each of the cardinalities.
      Using simple multiplication principle, we can get:
    </p>
    <img src="@/assets/MATH61/img119.png" />
    <p>
      From here, we can use a combination of multiplication and addition
      principles to get the intersection. If we lay it out, the leadership
      positions look something like this:
    </p>
    <img src="@/assets/MATH61/img120.png" />
    <p>
      For the intersection, we need to find how many ways both C and D have
      positions. This means that 2 of the blanks will have 1’s and the other
      blank will have a 4 since there are 4 other people to fill the other
      position. If we look at all possible combinations of this, we get:
    </p>
    <img src="@/assets/MATH61/img121.png" />
    <p>
      Before we jump to conclusions, we need to think a little more. Keep in
      mind each of those 1’s essentially represents C or D. Since the position
      that C and D hold matters:
    </p>
    <img src="@/assets/MATH61/img122.png" />
    <p>
      As a result, there are actually 6 combinations that work. In terms of
      addition principle, there are 6 disjoint sets with 4 possibilities in each
      set, leaving us with:
    </p>
    <img src="@/assets/MATH61/img123.png" />
    <p>Now, plugging everything into inclusion-exclusion, we have:</p>
    <img src="@/assets/MATH61/img124.png" />
    <p>
      Et voilà, there you have it. Now we can get into the more confusing stuff.
    </p>
    <h3 ref="3.4">Unit 3.4: Permutations and Combinations</h3>
    <p>
      Alright these probably sound familiar to you. If you’re like me, you hate
      these because they’re just not fun. Whatever, let’s push the pain down and
      just get through this.
    </p>
    <p>
      A permutation of n elements is defined as a distinct ordering of the
      elements. As we proved with the multiplication principle, any set of n
      elements has n! permutations. We’re gonna kick this off with a basic
      example.
    </p>
    <p>
      How many permutations of ABCDEF contain the letters DEF together in that
      order? Well, if DEF are always together in that order, then they’re
      basically just a single element. As a result, we have 4 elements, or 4!
      permutations.
    </p>
    <p>
      Let’s make it a little more complicated. What about if DEF could be in any
      order? We know that there are 4! ways for DEF to be together. From there,
      we just need to know how many ways we could order DEF. In other words, we
      need to find the number of permutations of 3 elements, or 3!. From there,
      we can simply use the multiplication principle to say there are 4! x 3!
      permutations. Whole lotta writing for that example, but you should’ve been
      able to follow that. If you couldn’t I’d go back and review the earlier
      parts of this unit.
    </p>
    <p>
      Let’s move onto a classic example. How many ways can 6 people be seated
      around a circular table if the orientation of the people does not matter?
      To clarify the last part of that statement, simply having everyone move n
      seats over does not count as a new permutation. The easiest way to solve
      this problem is to first solve the problem of how many ways can you put 6
      people in a line? Well, that’s easy, it’s just 6!. Now, we can take that
      line and shape them into a circle. Here’s where the answer changes. Let’s
      imagine the line:
    </p>
    <img src="@/assets/MATH61/img125.png" />
    <p>If we shape this into a circle, we’d get:</p>
    <img src="@/assets/MATH61/img126.png" />
    <p>But now, let’s take the line:</p>
    <img src="@/assets/MATH61/img127.png" />
    <p>
      This is clearly a different permutation of the line. However, if we shape
      it into a circle, we see:
    </p>
    <img src="@/assets/MATH61/img128.png" />
    <p>
      This is actually the same ordering, we just started from B instead of A.
      You could repeat this, starting from each element. If you do this, you see
      that each permutation of the circle can represent 6 permutations of the
      line. As a result the total number of permutations of the circle is:
    </p>
    <img src="@/assets/MATH61/img129.png" />
    <p>
      Before we move on, let’s get a quick introduction to some specific types
      of permutation, starting with an r-permutation.
    </p>
    <p>
      An r-permutation of n distinct elements is an ordering of an r-element
      subset of the original elements. For the purposes of this guide, this is
      denoted nPr.
    </p>
    <p>
      An example of an r-permutation that we’ve dealt with is the 6 person
      committee example. We originally had 6 elements, but had to find an
      ordering of a 3 element subset. From that example, we could derive the
      formula for r-permutations:
    </p>
    <img src="@/assets/MATH61/img130.png" />
    <p>
      The other type of permutation I want to cover is permutations with
      indistinguishable objects. For instance, what if I asked you how many
      permutations existed of the string MISSISSIPPI? Obviously, there’s no
      difference between any of the S’s or I’s or P’s, so we can’t solve this
      with our normal permutation methods. Instead we say that if a sequence has
      n1 identical objects of type 1, n2 of type 2, etc., then the number of
      permutations of that sequence is:
    </p>
    <img src="@/assets/MATH61/img131.png" />
    <p>
      In the example I used above, there are 4 S’s, 4 I’s, 2 P’s and 1 M.
      Therefore there are:
    </p>
    <img src="@/assets/MATH61/img132.png" />
    <p>
      Moving along, let’s talk about the other half of the topic: combinations.
      As you probably know, the main distinguishing factor between permutations
      and combinations is that order doesn’t matter in combinations.
    </p>
    <p>
      Since order doesn’t matter in combinations, we simply don’t distinguish
      between combinations and r-combinations like we would in permutations. How
      many ways are there to pick 8 things out of 8 total things if order
      doesn’t matter? 1? Wowwwww how interesting. Yeah. We don’t care. I’m going
      insane.
    </p>
    <p>
      So let’s use the fact that order doesn’t matter to derive the formula for
      r-combinations from r-permutations. Let’s say we have 5 students and want
      to make a 3 person committee from them. Using our r-permutations formula,
      we know there are:
    </p>
    <img src="@/assets/MATH61/img133.png" />
    <p>
      Ways to form this committee if the order of the committee members
      mattered. Now, how could we look at this as a combination, so that which
      committee member you are makes no difference?
    </p>
    <img src="@/assets/MATH61/img134.png" />
    <p>
      I’m so sorry about that making absolutely no sense. At the end of the day,
      all we care about is we can generalize this example to get:
    </p>
    <img src="@/assets/MATH61/img135.png" />
    <p>
      You will often see this read as “n choose r”, since you’re choosing r
      elements out of n total. Let’s finish this off with an example before I
      actually lose it.
    </p>
    <p>
      How many ways can we select a committee of 2 women and 3 men from a group
      of 5 women and 6 men? As our multiplication principle brains are telling
      us, we should break this into steps. First, we’ll choose the women, and
      then the men. That really just leaves us with:
    </p>
    <img src="@/assets/MATH61/img136.png" />
    <p>If we plug into the formula, we’d find:</p>
    <img src="@/assets/MATH61/img137.png" />
    <p>
      There we go, we’re done with that finally. I really need to take a break
      because I’m losing my mind writing this stuff since it’s material that
      most high schoolers end up learning, but instead it just makes me feel
      like an idiot for spending dozens of hours writing something that no one
      else is ever going to use and it really makes me question [EXISTENTIAL
      CRISIS REDACTED].
    </p>
    <h3 ref="3.5">Unit 3.5: Pigeonhole Principle</h3>
    <p>
      I don’t think this really counts as part of the Counting Principles unit.
      I just don’t have anywhere else to put it. I really hate the structure of
      this class.
    </p>
    <p>
      The pigeonhole principle is essentially a proof method that answers a
      question of the form: “Is there an item having a given property?”. The
      idea is that if n pigeons fly into k pigeonholes, and n > k, then there is
      some pigeonhole that contains more than one pigeon. Congratulations,
      you’ve entered peak college mathematics.
    </p>
    <p>
      I could go and prove this to you, but like, come on. Instead we’ll just do
      a quick example. Let’s say there are 10 people, each with the first name
      Bob, Joe, or John and the last name Smith, Jones, or Scott. Let’s prove
      that at least 2 people have the same full name.
    </p>
    <p>
      In this case, we’ll say each of the 10 people is a pigeon. The pigeonholes
      they must fit into are available name combinations. Using the
      multiplication principle, we find there are 3 x 3 = 9 name combinations.
      As a result, there are 9 pigeonholes. Since there are more pigeons than
      pigeonholes, at least 1 pigeonhole will have more than 1 pigeon. Based on
      the context of our solution, this means at least 1 name combination
      belongs to more than 1 person.
    </p>
    <p>
      We can also state the pigeonhole principle another way. In terms of the
      material we learned from Unit 1, we can say that if f is a function from a
      finite set X to a finite set Y, and |X| > |Y|, then f cannot be
      one-to-one. This implies:
    </p>
    <img src="@/assets/MATH61/img138.png" />
    <p>
      If you think about it, this is really just the same statement as our
      original definition. I always just used the first method, but this one
      probably exists for a reason, so I thought I’d include it. There is
      actually a third form as well, but I’m excluding that one because it’s
      inferior and should feel bad for existing.
    </p>
    <p>
      Let’s finish things off with a slightly more thought-provoking example.
      Show that if we had 151 course numbers from 1 to 300 inclusive, then at
      least 2 courses will be consecutively numbered. Let’s call our course
      numbers:
    </p>
    <img src="@/assets/MATH61/img139.png" />
    <p>
      If we wanted no courses to be consecutively numbered, the most efficient
      way we could order them is something like:
    </p>
    <img src="@/assets/MATH61/img140.png" />
    <p>
      Each + 1 simply represents a gap in numbering we would need for no courses
      to have consecutive numbering. Based on this pattern, we see we would need
      301 numbers. These will be our pigeons. However, there are only 300
      pigeonholes. By pigeonhole principle, blah blah blah, you get the idea.
    </p>
    <p>
      Not a hard proof by any means, but an annoying one for sure. We’re almost
      done with the unit though, so I am overwhelmed with joy.
    </p>
    <h3 ref="3.6">Unit 3.6: Recurrence Relations</h3>
    <p>
      Ok, so there’s actually a solid amount of material to cover here.
      Unfortunately, a lot of it is ridiculously specific to certain examples,
      and is just not worth the dozens of hours it will take for me to cover
      everything I was taught. I will cover the basic principles of recurrence
      relations that you need to succeed, but I’m going to leave some of the
      more specialized logic for you to figure out. Sorry, but I’m not getting
      paid to give you a perfect guide. Actually, I’m not getting paid at all.
      Wait, why am I doing this?
    </p>
    <p>
      At its very core, a recurrence relation is an equation for a given
      sequence that relates each term to its predecessors. These relations will
      build off of initial conditions that are given for a finite number of
      terms in the sequence. The most famous example of such a relation is the
      Fibonacci sequence.
    </p>
    <p>
      As you most likely know, the Fibonacci sequence is built by adding the
      last 2 numbers together to get the next one. Assuming we’re indexing our
      sequence using n, we could write a recurrence relation for the Fibonacci
      sequence as follows:
    </p>
    <img src="@/assets/MATH61/img141.png" />
    <p>
      Of course, when you’re building the Fibonacci sequence, you start with the
      first and second elements given to you:
    </p>
    <img src="@/assets/MATH61/img142.png" />
    <p>
      Clearly, these are our initial conditions. We could then use these in
      combination with our recurrence relation to build the sequence:
    </p>
    <img src="@/assets/MATH61/img143.png" />
    <p>
      So, with that foundation set, let’s tackle a more complex problem. Let Sn
      represent the number of n-bit strings that do not contain the pattern 111.
      Define a recurrence relation and initial conditions for the sequence.
    </p>
    <p>
      Ok this one’s hard to explain, so try to stay with me here. Of course,
      we’re going to be essentially adding another bit to the string as we move
      up the sequence. What we’re going to do is assume we’re adding this bit to
      the end of the string. Since this is binary that we’re working with, this
      new bit must be either a 0 or a 1. Common sense tells us that adding a 0
      to the end of the string simply cannot result in the 111 pattern
      appearing, so that’s simple. Meanwhile, adding a 1 to the end of the
      string could. For reasons that I’ll leave for you to break down, adding a
      1 generates 2 possible cases: 01 and 11.
    </p>
    <p>
      So, the new string could either end with a 0, a 01, or a 11. Take a second
      to understand why these are the specific 3 situations we care about,
      remembering we’re avoiding having a 111 in the string. By definition,
      these strings will be part of disjoint sets (the strings are all different
      from each other). As a result, we can apply the addition principle to say
      that the sum of the number of strings in these sets is equal to the Sn
      we’re looking for. Now, we just need to find the number of strings in each
      set.
    </p>
    <p>
      Looking at the first set, the number of strings that do not contain 111
      that end with a 0, we see that, as long as we add a 0 to the string, it is
      impossible to create a string with 111 if the existing string didn’t
      already contain it. By this logic, the first set simply contains all bit
      strings of length n - 1 that do not contain the 111 pattern with a 0
      appended to the end. As a result, we know there are Sn-1 strings in this
      set.
    </p>
    <p>
      Now looking at the 01 case, we see the same logic as above. We aren’t
      going to create a 111 in the string, but there are 2 bits in this case.
      Therefore, there are as many strings in this set as bit strings of length
      n - 2 that don’t contain 111. So, there are Sn-2 strings in this set.
    </p>
    <p>
      The last set, 11, is a little more complicated. The reason we have to
      consider this as a separate set from 01 is that, if 11 are the last bits
      of the string, it is implied that 011 are the last bits of the string.
      This is because, if the digit preceding the 11 wasn’t a 0, it would be a
      1, and there would be a 111 pattern in the string. Applying the logic from
      the last 2 sets, there are Sn-3 strings in this set. Taking this into
      addition principle, we have:
    </p>
    <img src="@/assets/MATH61/img144.png" />
    <p>
      I really recommend you go back if you didn’t understand any part of that
      derivation. The only thing left is the initial conditions, and those are
      pretty easy. Obviously, we need 3 initial conditions, since each term
      depends on the last 3 terms. Therefore, we need S1, S2, and S3.
    </p>
    <p>
      Since it’s really not possible for a 1 or 2-bit string to contain 111
      (like really not possible), we simply need to find how many 1 or 2-bit
      strings exist:
    </p>
    <img src="@/assets/MATH61/img145.png" />
    <p>
      We have to be a little more careful with S3, since it’s actually possible
      for it to contain 111. There are 8 3-bit strings possible, but one of them
      is 111. As a result:
    </p>
    <img src="@/assets/MATH61/img146.png" />
    <p>
      Now, with our recurrence relation and initial conditions, we’re finally
      done with that problem. Don’t worry, that might actually be the hardest
      problem in this entire guide.
    </p>
    <p>
      The rest of the section is going to be concerned with solving these
      recurrence relations. Obviously, the form we have them in currently isn’t
      super useful. If we want a specific term in a sequence, we have to first
      calculate every term prior to it. Solving a recurrence relation means
      generalizing this, so that we can solve for specific terms. For instance,
      let’s solve the recurrence relation:
    </p>
    <img src="@/assets/MATH61/img147.png" />
    <p>
      There isn’t a set of steps I can walk you through here. It’s really just
      trial and error until something works out. Since I know how to solve this
      since it’s my guide, I can act really cool and smart and pretend I just
      happened to get it right first try.
    </p>
    <p>Let’s take a look at what happens as we move through the sequence:</p>
    <img src="@/assets/MATH61/img148.png" />
    <p>
      Ok, looks like we’re getting somewhere, but let’s take another iteration
      to make sure:
    </p>
    <img src="@/assets/MATH61/img149.png" />
    <p>At this point, it’s pretty safe to say we can just generalize this:</p>
    <img src="@/assets/MATH61/img150.png" />
    <p>
      But now what? Well, we still have to get our initial condition in there
      somehow. If we’re a little creative, we can write:
    </p>
    <img src="@/assets/MATH61/img151.png" />
    <p>
      Now that’s a solved recurrence relation. As you can see, the equation only
      depends on n, so we can find any nth term of the sequence. The last thing
      we have to go over now is a special type of recurrence relation that has a
      special way to solve.
    </p>
    <p>
      This special type is a linear homogeneous recurrence relation with
      constant coefficients. That is a long name. What I’m going to do is break
      down what each part of that name means, teach you how to solve it, and
      then end off with an example. Sound good? I’ll just assume it does.
    </p>
    <p>
      The first requirement for this special relation is being linear. This is
      fairly self-explanatory. Each term in the recurrence relation must take
      the form of:
    </p>
    <img src="@/assets/MATH61/img152.png" />
    <p>
      Where C is a constant and ak is of degree 1. If a term were to look
      something like:
    </p>
    <img src="@/assets/MATH61/img153.png" />
    <p>Then the relation would not be linear, and should therefore feel bad.</p>
    <p>
      The next requirement is for the relation to be homogeneous. For the
      purposes of recurrence relations, we’ll define this as, if all the ak
      terms are put on one side of the equation, the other side must be 0:
    </p>
    <img src="@/assets/MATH61/img154.png" />
    <p>As a result, something like:</p>
    <img src="@/assets/MATH61/img155.png" />
    <p>Would be considered inhomogeneous.</p>
    <p>
      The final requirement is that all coefficients must be constant. Once
      again, very self-explanatory. Let’s say we were to have some relation:
    </p>
    <img src="@/assets/MATH61/img156.png" />
    <p>
      Since the coefficient is dependent on n, this is not a constant
      coefficient.
    </p>
    <p>
      If all of these conditions have been met, we can develop a method to solve
      the given recurrence relation. Given a relation with the form:
    </p>
    <img src="@/assets/MATH61/img157.png" />
    <p>
      We can write this into a quadratic equation (you might recognize this from
      33B):
    </p>
    <img src="@/assets/MATH61/img158.png" />
    <p>
      I want to make it clear that these statements are not related. We’re
      simply taking advantage of the requirements we listed above to find an
      alternate way to solve this.
    </p>
    <p>
      From here, we’ll call the roots of the above quadratic equation r1 and r2.
      Under these definitions, this recurrence relation can then be written as:
    </p>
    <img src="@/assets/MATH61/img159.png" />
    <p>
      Here, b and d are constants. Generally, you will plug in initial
      conditions and then solve for these constants using a system of equations.
    </p>
    <p>One thing to note is that this solution changes if r1 = r2:</p>
    <img src="@/assets/MATH61/img160.png" />
    <p>
      As promised, here’s an example to clear up the confusion that I’m sure I
      left you with. Our recurrence relation will be defined as:
    </p>
    <img src="@/assets/MATH61/img161.png" />
    <p>
      The first thing to do is put this into standard form to verify that it’s a
      linear homogeneous recurrence relation with constant coefficients:
    </p>
    <img src="@/assets/MATH61/img162.png" />
    <p>As expected, we’re good to go. Let’s set up the quadratic:</p>
    <img src="@/assets/MATH61/img163.png" />
    <p>Solving for the roots, we get:</p>
    <img src="@/assets/MATH61/img164.png" />
    <p>
      Since they’re distinct roots, we’ll plug them into the first equation:
    </p>
    <img src="@/assets/MATH61/img165.png" />
    <p>Now, we can use the initial conditions to set up our system:</p>
    <img src="@/assets/MATH61/img166.png" />
    <p>Solving with your method of choice should give you:</p>
    <img src="@/assets/MATH61/img167.png" />
    <p>
      Yay! We’re done with (probably) the longest section in the class.
      Seriously, it took my professor 3 lectures to cover this. Get your crayons
      and artistic talent ready for the next unit, we’re going to be drawing.
      No, I’m not kidding.
    </p>
    <h2 ref="4">Unit 4: Graph Theory</h2>
    <p>
      Ok, so you’re probably thinking something along the lines of like “graph
      this function”. Sorry to break it to you, but these graphs are actually
      easier. No hard calculations or math, just properties and proofs. We do
      love abstract concepts.
    </p>
    <p>
      To be completely honest, I have no idea how anything in this unit is
      useful in any way. Once I finish up here, I’m gonna try my hardest to just
      forget this unit exists. Except not really. Because this is important for
      CS. Ah.
    </p>
    <h3 ref="4.1">Unit 4.1: Graph Definitions</h3>
    <p>
      In the context we’ll be looking at here, a graph G is made up of a set V
      of vertices and a set E of edges, where each edge is associated with a
      pair of vertices. As a shorthand for such a graph, we write:
    </p>
    <img src="@/assets/MATH61/img168.png" />
    <p>Unless told otherwise, always assume:</p>
    <img src="@/assets/MATH61/img169.png" />
    <p>
      To quickly relate back to something we saw before, a digraph is simply a
      graph where each edge is associated with a specific ordering of vertices.
      For instance:
    </p>
    <img src="@/assets/MATH61/img170.png" />
    <p>
      Graph A is just a graph since the edge has no direction. Graph B is a
      digraph since the edge specifies it’s from v1 to v2.
    </p>
    <p>
      When we’re talking about edges and vertices, there is some common language
      that goes with it. If we take either graph above, we would say that e1 is
      incident on v1 and v2. Similarly, we could say v1 and v2 are incident on
      e1. In addition, v1 and v2 are adjacent vertices.
    </p>
    <p>
      Now, to transition into some more definitions, we’ll take a look at the
      graph:
    </p>
    <img src="@/assets/MATH61/img171.png" />
    <p>
      From that graph, we can say that e1 and e2 are parallel edges, as they are
      distinct edges incident on the same vertices. e3 is a loop, as it is
      incident on a single vertex. If a graph were to have no parallel edges or
      loops, it would be called a simple graph. Finally, since v4 is incident on
      no edges, it is called an isolated vertex.
    </p>
    <p>
      We’ll finish the section off by showing another type of graph that will
      lead us to our final few definitions:
    </p>
    <img src="@/assets/MATH61/img172.png" />
    <p>
      As you can see, each edge has a value (or weight) associated with it. For
      instance, the edge incident on v1 and v3 is 2. This kind of graph is
      called a weighted graph, and we’ll be working with them a little later. In
      these types of graphs, we can define the length of a path as the sum of
      the weights of all the edges within a path. For example, a path running
      from v1 to v2 to v4 has a length of 4.
    </p>
    <p>
      Ok, so those are the basics of graphs. In the next section, we’ll get into
      a few special types of graphs that we’ll be seeing throughout the unit.
    </p>
    <h3 ref="4.2">Unit 4.2: Special Graphs</h3>
    <p>
      Over the course of the unit, we’ll run into a few graphs that fall under
      more specific classifications. The first of which is a complete graph,
      which is a simple graph for which there is an edge between every pair of
      distinct vertices. These are denoted Kn, where n is the number of
      vertices. As an example, the graph K4 looks like:
    </p>
    <img src="@/assets/MATH61/img173.png" />
    <p>
      As you can see, there is an edge connecting each vertex to every other
      vertex.
    </p>
    <p>
      The next type of graph is a little more complex. A bipartite graph is a
      graph where the vertices can be split up into 2 sets V1 and V2 such that:
    </p>
    <img src="@/assets/MATH61/img174.png" />
    <p>
      In addition, each edge in the graph must be incident on 1 vertex from each
      set. Hopefully this’ll make more sense with some visuals:
    </p>
    <img src="@/assets/MATH61/img175.png" />
    <p>
      As you can see, we can split this graph into a left side and a right side.
      No edges exist solely between the vertices on either side; all edges go
      from one side to the other.
    </p>
    <p>
      Finally, we’ll end by combining these 2 concepts together. That’s right,
      if you take a complete graph, and combine it with a bipartite graph, you
      get (you’ll never guess this naming) a complete bipartite graph. Kinda. A
      complete bipartite graph is a bipartite graph where each vertex in V1 is
      connected to each vertex in V2. This is denoted by Km,n, where m is the
      number of vertices in V1 and n is the number of vertices in V2.
    </p>
    <p>Leaving us off with a visual, here is the graph K3,3:</p>
    <img src="@/assets/MATH61/img176.png" />
    <h3 ref="4.3">Unit 4.3: Paths and Cycles</h3>
    <p>
      Now that we know what a graph is, let’s get into the main focus of the
      unit. I used the term earlier, but a path is exactly what it sounds like.
      It is a sequence of vertices and/or edges that goes from vertex v to
      vertex w. If a path were to go from vertex v0 to vn, we would write it as:
    </p>
    <img src="@/assets/MATH61/img177.png" />
    <p>
      Alternatively, if there are no parallel edges on the path, we could state
      the edges implicitly and write:
    </p>
    <img src="@/assets/MATH61/img178.png" />
    <p>
      The length of a path is given by the number of edges traveled along the
      path. In the case of the path given above, its length is n.
    </p>
    <p>
      Using paths, we can start talking about another special type of graph.
      Connected graphs are graphs where, for any vertex, there is a path to
      every other vertex. For example:
    </p>
    <img src="@/assets/MATH61/img179.png" />
    <p>This would be a connected graph, but:</p>
    <img src="@/assets/MATH61/img180.png" />
    <p>Would not be.</p>
    <p>
      Now, we’re going to take a quick detour to introduce a new concept. You’ll
      see why we’re doing this here in a second. If G = (V, E), (V’, E’) is a
      subgraph of G if:
    </p>
    <img src="@/assets/MATH61/img181.png" />
    <p>
      And if the final result is still a valid graph. In other words, you can’t
      have an edge in the subgraph unless it is still incident on the same 2
      vertices.
    </p>
    <p>
      We can also define an empty graph as the graph with no vertices or edges.
      As with the material from Unit 1, this empty graph would technically be a
      subgraph to any given graph.
    </p>
    <p>
      Now, here’s where we relate this to paths. The subgraph G’ of G that
      contains the vertex v and all edges and vertices connected to v is called
      a component of G containing v. That definition may be a little confusing,
      so let’s break that down. Reusing the same graph so I don’t have to go
      back to Google Drawings, assume G is:
    </p>
    <img src="@/assets/MATH61/img182.png" />
    <p>The component of G containing v1 is:</p>
    <img src="@/assets/MATH61/img183.png" />
    <p>The component containing v4 is:</p>
    <img src="@/assets/MATH61/img184.png" />
    <p>And the component containing v5 is:</p>
    <img src="@/assets/MATH61/img185.png" />
    <p>
      Ok, glad we got that out of the way. Finishing off paths for now, we have
      one more definition. A simple path from vertex v to w is a path between
      those vertices that never repeats vertices. If you were to trace out a
      simple path on a graph, you would not cross the same vertex twice. Given
      the graph:
    </p>
    <img src="@/assets/MATH61/img186.png" />
    <p>
      We could say that (v1, v2, v5, v3) is a simple path from v1 to v3.
      However, the path (v1, v5, v4, v2, v5, v3) is not, since v5 is visited
      twice.
    </p>
    <p>
      From paths, we can naturally move into cycles. A cycle is a path of
      non-zero length that moves from a given vertex back to itself without
      repeating edges. Seems fairly obvious right? If we continue to draw
      parallels to paths, we can also define a simple cycle as a cycle where no
      vertices are repeated, except for the starting/ending vertex.
    </p>
    <p>
      Nothing here should be surprising or hard to wrap your head around. If
      something is, you’re overthinking. Stop that. We’ll close with some
      examples based on the graph:
    </p>
    <img src="@/assets/MATH61/img187.png" />
    <p>
      Take the path (v6, v5, v2, v4, v3, v2, v1). Is it a simple path? Cycle?
      Simple cycle? Well, v2 is repeated, so we know it can’t be a simple path
      or simple cycle. In fact, the path begins and ends at different vertices,
      so it can’t be a cycle at all. This path is none of the three.
    </p>
    <p>
      Let’s do the same thing for the path (v5, v6, v2, v5). Well, v5 is
      repeated, so it can’t be a simple path. Despite the repetition, v5 is the
      only repeated vertex, and is only repeated at the beginning and end. The
      repetition at beginning and end tells us this is a cycle. This, in
      combination with there being no other repeated vertices tells us this path
      is also a simple cycle.
    </p>
    <p>
      Finally, we’ll do the same for the path (v7). This is kind of a weird
      case. If we look at the definition for a path, we see there is no
      requirement for non-zero length. As a result, this is a valid path, and,
      since there’s only one vertex, it is a simple path. Cycles do have a
      non-zero length requirement, so this is not a cycle or simple cycle.
    </p>
    <p>
      Ok, that should all be very foundational material. The next two sections
      will build off of it, so make sure you have your definitions down.
    </p>
    <h3 ref="4.4">Unit 4.4: Euler Cycles</h3>
    <p>
      There’s actually a lot of depth to this topic, but I didn’t learn any of
      it. I hate going into this knowing I won’t really be able to help you, but
      I’ll do my best.
    </p>
    <p>
      An Euler cycle is a cycle that contains all the edges and vertices of a
      graph. The majority of my knowledge about Euler cycles centers around
      whether or not they exist in a given graph. In order to get into those
      conditions, we’ll have to introduce the idea of a degree. The degree of a
      vertex is defined as the number of edges incident to that vertex. To
      address the special case, a loop contributes 2 to the degree of a vertex.
    </p>
    <p>
      With that knowledge, we can introduce the idea that if a graph G has an
      Euler cycle, then G is connected and every vertex has an even degree. This
      shouldn’t be that hard to prove to yourself. In order for an Euler cycle
      to exist you must be able to get to every point in the graph, so it must
      be connected. You must also be able to get to, and then leave every
      vertex, so it must have an even degree.
    </p>
    <p>
      Now, this next part has a somewhat intensive proof that I didn’t learn. If
      you want more information on it, here’s a link. The bottom line is that
      the above statement works both ways. If a graph G is connected and every
      vertex in G has an even degree, the graph is guaranteed to contain an
      Euler cycle. We can equivalently say that if a graph has m edges and n
      vertices:
    </p>
    <img src="@/assets/MATH61/img188.png" />
    <p>
      Fantastic, we’re done with that material because I learned nothing from
      this class. This is really meant to be a more in-depth concept, and I’m
      really sorry I can’t provide that support. Whatever, to make myself feel
      better I’m throwing in a couple more graph facts that are kinda-not-really
      related.
    </p>
    <p>
      If we think about the properties of an edge, we can arrive at the idea
      that the sum of all degrees of a graph is even. Since each edge is
      incident on two vertices, it is impossible for there to be an odd number
      of odd-degree vertices.
    </p>
    <p>
      Another thing that I can’t prove to you simply because I lack the
      knowledge is that if you are able to find a cycle in a given graph, that
      graph also contains a simple cycle.
    </p>
    <p>Ok I’m done. I hate feeling this useless.</p>
    <h3 ref="4.5">Unit 4.5: Hamiltonian Cycles</h3>
    <p>
      Once again, this topic has a lot more depth than I’m going to be able to
      cover. Self-loathing inbound.
    </p>
    <p>
      A Hamiltonian cycle is a cycle that visits each vertex in a graph exactly
      once, other than the starting/ending vertex. Remember to keep these
      distinct from Euler cycles. The existence of one doesn’t tell you anything
      about the existence of the other.
    </p>
    <p>
      Like with Euler cycles, we’ll be focusing on determining the existence of
      Hamiltonian cycles. Unlike with Euler cycles, there isn’t a theorem we can
      use to do this easily. Instead, we’ll have to give ourselves a methodology
      we can use to break problems down.
    </p>
    <p>
      We’ll call this the eliminate-edges-and-count method. Doesn’t that name
      just roll off the tongue? Let’s take the graph:
    </p>
    <img src="@/assets/MATH61/img189.png" />
    <p>
      As a result of how Hamiltonian cycles are defined, a Hamiltonian cycle
      will contain the same number of edges and distinct vertices. By this, we
      know that there must be at least 5 edges to construct a Hamiltonian cycle
      for this graph.
    </p>
    <p>
      Now, note that any vertex in a Hamiltonian cycle is guaranteed to have a
      degree of 2 in order to maintain the condition that no vertices are
      repeated. This shouldn’t take you long to prove to yourself. As a result,
      for vertices v2 and v4, which have degree 3, we know one edge incident on
      those vertices will not be in the cycle. Therefore, there are only four
      edges in the graph that can possibly be in the Hamiltonian cycle. However,
      we need a minimum of five possible edges, so we have proved there will be
      no Hamiltonian cycle.
    </p>
    <p>
      Now, you have to be careful with this method. Take this graph for
      instance:
    </p>
    <img src="@/assets/MATH61/img190.png" />
    <p>
      You may be tempted to say there are four vertices with degree 3, so you
      remove four edges from the graph. By that logic, there are only four valid
      edges and no Hamiltonian cycle exists. But there definitely is one. So
      what went wrong there? Well let’s take a step by step look. Starting with
      v5, we know we have to cross out two edges. Since the graph is symmetric
      it doesn’t matter which two (red means crossed out):
    </p>
    <img src="@/assets/MATH61/img191.png" />
    <p>
      Now, v1 and v4 both effectively have degree 2, so they’re good to go. All
      we’re left to deal with is v2 and v3. Noting that the edges running to v1,
      v2, and v5 must remain valid, we’re left with one option:
    </p>
    <img src="@/assets/MATH61/img192.png" />
    <p>
      As you can see, getting rid of the edge between v2 and v3 decreases both
      of their degrees to 2. This is where the error in the original intuition
      rises from. Make sure you don’t overcount when you use this method.
    </p>
    <p>
      We’ll end this off by touching on a famous problem involving Hamiltonian
      cycles called the knight’s tour. The problem asks that, given an n x n
      chessboard, could a knight visit each square exactly once and then return
      to its original position? Of course, if each square is a vertex and edges
      represent possible moves, we can model this situation as a graph, denoted
      GKn. In graph-related terms, the question is now asking if GKn contains a
      Hamiltonian cycle.
    </p>
    <p>
      I’m not going to lie, this problem sucks and gets messy really quick.
      Instead of solving it for some value of n, I’m just going to highlight
      some generalities.
    </p>
    <p>
      As you may or may not know, a knight’s available moves will always be to a
      square of the opposite color it’s currently on. For example, if the knight
      is on a black square, any legal move will place it onto a white square. If
      we translate this to our graph, we know that the graph will be bipartite,
      with one set of vertices representing black squares and the other
      representing white squares. In addition, it is also possible to prove that
      if GKn has a Hamiltonian cycle, then n must be even. I will not prove this
      here simply because I can’t. I also really doubt you care.
    </p>
    <p>
      It’s very important to note this statement is not true both ways. Simply
      because n is even doesn’t guarantee there is a Hamiltonian cycle. A simple
      way to prove this doesn’t hold true is to consider GK2. On a 2 x 2
      chessboard, a knight has no valid moves. Therefore, the graph representing
      the board is not connected, and no cycles even exist.
    </p>
    <p>
      Ok, I think (please note I didn’t say promise) the next few sections will
      be a little better in terms of covering everything you need. That’s right,
      get ready to go back to subpar quality instead of blatantly bad quality.
    </p>
    <p>You know, my eloquence even shocks me sometimes.</p>
    <h3 ref="4.6">Unit 4.6: Dijkstra's Algorithm</h3>
    <p>
      Essentially, Dijkstra’s Algorithm is a way to find the shortest path
      between two vertices in a weighted graph. It’s often presented in the form
      of pseudocode, as shown below:
    </p>
    <img src="@/assets/MATH61/img193.png" />
    <p>
      CS majors may have an easier time reading that. Don’t worry too much about
      it, we’re going to do an example that should make this crystal clear. Or
      not. You know my writing style by now.
    </p>
    <p>
      This process is overall really tedious and requires that you be very
      organized. Here we go:
    </p>
    <img src="@/assets/MATH61/img194.png" />
    <p>
      Starting with v1, let’s find the shortest path to each other vertex. I
      personally like drawing a chart for this. It’s very possible to draw
      directly on the graph, but that gets a little too messy for me. Setting up
      our initial labels:
    </p>
    <img src="@/assets/MATH61/img195.png" />
    <p>
      Ok so I couldn’t figure out how to do this in a chart without blowing my
      brains out so we’re stuck with a matrix. Sue me.
    </p>
    <p>
      So the vertex labels on the top tell us which column corresponds to which
      vertex. The vertex labels on the left tell us which vertex we’re analyzing
      right now. The values in the matrix are the shortest path lengths that we
      know of. The subscripts next to the values will represent the second to
      last vertex in the path so that we can recreate the path later. Since
      we’re starting at v1, we can obviously say the shortest path to itself is
      0. We haven’t looked at any other vertex yet, so by default, each value is
      infinity.
    </p>
    <p>
      From here, we’ll fill in the distances to each of v1’s adjacent vertices:
    </p>
    <img src="@/assets/MATH61/img196.png" />
    <p>
      Now, we’re done with our analysis of v1. By the logic of this algorithm,
      we know for a fact that once we finish the analysis for a given vertex,
      the value we have associated with that vertex is the shortest path. This
      means the shortest path from v1 to v1 is 0. Duh.
    </p>
    <p>
      The next step is to select which vertex to analyze next. This is done by
      selecting the vertex with the shortest known path that hasn’t been
      analyzed yet. In this case, that would be v3. If multiple vertices were to
      have the shortest path, it doesn’t matter which one of them you select, as
      long as there are no smaller path lengths you could’ve selected. Looking
      at v3:
    </p>
    <img src="@/assets/MATH61/img197.png" />
    <p>
      As you can see, we initially just drag all the values down. From here, we
      can look at the adjacent vertices to v3:
    </p>
    <img src="@/assets/MATH61/img198.png" />
    <p>
      As we can see, v5 is the only change from our first line. To get the path
      length, we take the value we have to get to v3 and add it to the value
      from v3 to v5. We don’t need to go back to v1 for obvious reasons. As we
      work our way through the algorithm, remember that any vertices which we’ve
      already analyzed don’t need to be updated, the values we have for them are
      already the best values we’ll find. At this point, that means that v1 and
      v3’s shortest paths have been found.
    </p>
    <p>
      Looking at what we have to pick from, v2 and v5 are both the lowest path
      length, so we can pick either. I’ll pick v2:
    </p>
    <img src="@/assets/MATH61/img199.png" />
    <p>
      I went ahead and combined some steps here. As you can see, we can now
      update v4, once again taking the value of v2 and adding it to the value
      from v2 to v4. v5 is also adjacent to v2, but the total path length going
      to v5 from v2 would be 3. Since the total path length from v3 was 2, we
      keep the 2 in the matrix since we’re looking for the shortest path length
      possible. We now have the shortest paths to v1, v2, and v3. Our next
      selection must be v5:
    </p>
    <img src="@/assets/MATH61/img200.png" />
    <p>
      The only new vertex we’re interested in here was v6. At this point in our
      algorithm, we’ve found the final values for everything except v4 and v6.
      Moving on and looking at v6, we have:
    </p>
    <img src="@/assets/MATH61/img201.png" />
    <p>
      As you can see, there was nothing to update. The total path length if you
      went from v6 to v4 would’ve been 6, so there was no point in updating.
      There’s also no point in doing the last row, because there will be nothing
      to update since every other vertex is already finalized. With that said,
      we now have the shortest path to every vertex from v1.
    </p>
    <p>
      If you were confused about what I meant about the subscripts, I don’t
      blame you. I blame my writing. Hopefully this’ll help a little. Notice
      that our final result has 4v5 as the path for v6. Obviously the 4 is the
      total path length. v5 is the previous vertex. Knowing this, we can
      reconstruct our path. We know the last vertex is v6, then v5, then v3,
      then v1. Our shortest path from v1 to v6 is:
    </p>
    <img src="@/assets/MATH61/img202.png" />
    <p>
      I really hope that clears things up a little. I’d recommend just doing a
      practice problem, this stuff really isn’t that hard, it just looks a lot
      more complicated than it is.
    </p>
    <h3 ref="4.7">Unit 4.7: Matrix Representations</h3>
    <p>
      This section will be a little throwback to matrices of relations. We have
      two types of matrices to look at here so let’s get started.
    </p>
    <p>
      The first type of matrix is an adjacency matrix. Given a specific ordering
      of vertices in a graph, the entry in row i and column j is the number of
      edges incident on i and j. If i is equal to j, then the entry represents 2
      times the number of loops present on that vertex. Given the graph:
    </p>
    <img src="@/assets/MATH61/img203.png" />
    <p>We could write an adjacency matrix as follows:</p>
    <img src="@/assets/MATH61/img204.png" />
    <p>
      Just like with our relation matrices, we can extract more information out
      of these matrices if we square them. I won’t actually square this because
      matrix multiplication is boring and evil, but we can discuss what it tells
      us. Assuming our adjacency matrix is A, the ijth entry of An is equal to
      the number of paths of length n from vertex i to j. Super fun trivia am I
      right?
    </p>
    <p>
      Now, we’ll just quickly touch on the other type of matrix. An incidence
      matrix describes the relation between edges and vertices. The rows
      represent vertices and the columns represent edges. A given entry will be
      a 0 if the vertex is not incident on the edge or a 1 if it is:
    </p>
    <img src="@/assets/MATH61/img205.png" />
    <p>
      Nice and simple. One thing you should note is that, by the definition of
      an edge, there will be exactly two 1’s per column, since each edge is
      incident on exactly two vertices.
    </p>
    <p>
      Oh my god, last section coming up. I’m so happy to almost be done with
      this. I’m sure you are as well, but I’m selfish and only care about my
      feelings.
    </p>
    <h3 ref="4.8">Unit 4.8: Isomorphisms and Planarity</h3>
    <p>
      Ok so, remember when I said we were going back to subpar quality? I lied.
      I forgot this section even existed. This is about to be bad.
    </p>
    <p>
      So let’s say you’re given the instructions to draw five vertices and
      connect v1 to v2, v2 to v3, v3 to v4, v4 to v5, and v5 to v1. How would
      you do it? What about something like this:
    </p>
    <img src="@/assets/MATH61/img206.png" />
    <p>But what makes that any more valid than this:</p>
    <img src="@/assets/MATH61/img207.png" />
    <p>
      This idea is essentially what we’re talking about when we say isomorphism.
      However, since everything needs a formal definition in this world, let’s
      do that. We say that graphs G1 and G2 are isomorphic if there exists a
      bijection f from V1 to V2 and a bijection g from E1 to E2 so that if any
      edge e is incident on v and w in G1, then the edge g(e) is incident on
      f(v) and f(w) in G2. These bijections are called isomorphisms. I’m sure
      you absorbed absolutely all of that.
    </p>
    <p>
      In essence, in order for two graphs to be isomorphic, both graphs must
      maintain the same relationships between vertices and edges. Well that
      sounds kinda familiar doesn’t it. Sounds kinda like something we learned
      in the last section. In fact, there’s a theorem that states graphs G1 and
      G2 are isomorphic if and only if, for some ordering of their vertices,
      their adjacency matrices are equal. That was a masterful segue, I don’t
      care what you say.
    </p>
    <p>
      Now, the thing about isomorphic graphs is that the isomorphisms inherently
      maintain certain properties between graphs. We call these unchanging
      properties invariants. For instance, by virtue of an isomorphism being a
      bijection, the number of vertices and edges in both graphs must be equal.
      As we go through some examples, we’ll take a look at some other
      invariants.
    </p>
    <p>Here’s a simple one. Prove these graphs aren’t isomorphic:</p>
    <img src="@/assets/MATH61/img208.png" />
    <p>
      Just a quick look, and you should notice we’ve violated an invariant. The
      left graph has six edges, but the right graph has seven. Since the number
      of edges are different, it’s impossible for a bijection of the edges to
      exist, and no isomorphism can exist.
    </p>
    <p>Let’s start looking at new invariants with these graphs:</p>
    <img src="@/assets/MATH61/img209.png" />
    <p>
      If you were to count the vertices and edges, you’d see there are six
      vertices and ten edges in each graph. So, to prove they aren’t
      isomorphisms, we’ll have to come up with a new invariant. How about, we
      use the idea that edges incident on certain vertices in G1 must be
      incident on the result of the bijection of those vertices in G2. With a
      little creative thinking, you’ll realize this means that we must preserve
      degrees between isomorphic graphs. If there are two vertices of degree 3
      in one graph, the other must also have two vertices of degree 3.
    </p>
    <p>
      In this case, looking at the left graph, you can see that the top and
      bottom vertices both have degree 2. However, if you look at the right
      graph, there is only one vertex with degree 2. Since degrees aren’t
      preserved, the invariant is violated and these graphs cannot be
      isomorphic.
    </p>
    <p>Let’s do a final example for a more complicated invariant:</p>
    <img src="@/assets/MATH61/img210.png" />
    <p>
      Did you think my drawings could get worse? I sure didn’t, but here we are.
    </p>
    <p>
      Now, if we take our definition of isomorphisms, we can extrapolate that we
      need to be able to maintain path lengths between vertices. From that, we
      know we need to maintain cycle lengths as well. Now, in the right graph,
      we can clearly see multiple cycles of length 3 in the triangles within the
      graph. However, on the left graph, no cycles of length 3 exist.
    </p>
    <p>Invariant? Violated. Isomorphism? Disproved. My will to live? Gone.</p>
    <p>
      We’re gonna end this off with a short discussion of planarity. A graph is
      considered planar if it can be drawn in the 2D plane without any edges
      crossing.
    </p>
    <p>
      Now, when we discuss planarity, we define a new term: faces. A face is
      essentially a surface bounded by the edges of the graph. More importantly,
      a face is defined by Euler’s formula for graphs:
    </p>
    <img src="@/assets/MATH61/img211.png" />
    <p>
      Where f is the number of faces, e is the number of edges, and v is the
      number of vertices. This formula holds true when the graph is planar and
      connected.
    </p>
    <p>
      Obviously, drawing planarity isn’t exactly challenging, so I’m not gonna
      go over that. The big thing we want to do is prove whether or not a given
      graph is planar.
    </p>
    <p>
      Before we start our example, we need to establish a fact that we’ll be
      using for all graphs. Based on our definition of a face, we know that each
      edge bounds two faces at most (one on each side of the edge). As a result
      we can say for certain that:
    </p>
    <img src="@/assets/MATH61/img212.png" />
    <p>
      Let’s just keep that in mind as we move into an example. Show that K5 is
      not planar:
    </p>
    <img src="@/assets/MATH61/img213.png" />
    <p>
      Now, the way we prove whether or not this is planar centers around Euler’s
      formula. Knowing this, we know we need to somehow take our inequality from
      before and place an f into it somewhere.
    </p>
    <p>
      Well, if we inspect the graph, we know that the shortest cycle uses three
      edges. Since cycles bound faces, we know that, in this graph:
    </p>
    <img src="@/assets/MATH61/img214.png" />
    <p>Now, we can use the transitivity of inequalities and write:</p>
    <img src="@/assets/MATH61/img215.png" />
    <p>If we plug in Euler’s formula, this equals:</p>
    <img src="@/assets/MATH61/img216.png" />
    <p>Now, plugging in values from the graph, we get:</p>
    <img src="@/assets/MATH61/img217.png" />
    <p>We’ve created a contradiction, and therefore disprove planarity.</p>
    <p>
      Thank god I’m finally done. I can just tell from the number of pages how
      useless this guide is. So glad I spent like fifty hours writing it
      hahahahhhaHHAAHAHAHAAAA.
    </p>
    <h2 ref="after">Afterword</h2>
    <p>
      Ok I really didn’t enjoy writing that. If this class was the first one I
      did, I would’ve given up, this was just UGH. I really wish I could’ve
      helped you better, but Salazar just didn’t really teach super well. I
      wrote down as much as I know, which isn’t much. I’m sure some of my
      explanations were absolutely terrible, definitely wasn’t feeling this
      guide. Probably doesn’t help that this was written during the summer
      either. I hope you learned at least one thing from this (although I’d be
      kinda surprised), and wish you the best of luck with your class!
    </p>
    <p>
      If you have any feedback for me, please feel free to let me know. I’m sure
      there’ll be a lot of criticism for this guide, but let’s try to keep it
      constructive ok? If the problem you have is that I didn’t cover something
      that your professor did, I’m going to tell you right now that I’m not
      coming back to add another section in. I already spent far too many hours
      working on a guide for a class I’ve already taken, I really don’t wanna
      spend more learning a topic I’ll never need to know. I’m sorry, I’m a
      masochist, not suicidal. It wouldn’t help you anyways. I’m dummy dumb.
    </p>
  </div>
</template>

<script>
export default {
  name: "MATH61",
};
</script>

<style lang="scss" scoped>
.math61 {
  // Spacing
  padding: 0 calc(clamp(4rem, 2.4rem + 6.4vw, 8rem));
  padding-bottom: 2rem;
  // Sizing
  width: 100%;
}
</style>