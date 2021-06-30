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
    <p>
      Welcome to one of the deeper pits of hell. Although it’s probably not the
      deepest, don’t get things twisted; this class is hard. Assuming you’re
      taking this with Eggert, you probably already know that. All the usual
      rules apply: go to lecture, fiend off of discussion, start every
      assignment as early as you can, blah blah blah. If you do all of that
      perfectly, then I have full faith that you’ll get a solid 65%+. But you
      know what? That’s ok. Paraphrasing the wise words of a Bruinwalk review,
      it’s ok to fail as long as you don’t fail harder than your classmates.
    </p>
    <p>
      So, what’s this class all about? Well, the title of the class should be
      pretty self-explanatory. Up until this point in our CS careers, we’ve
      worked with a fairly popular subset of languages. In this class, we’ll be
      branching out a little more into some more niche languages. Why? Well, the
      point of this class isn’t to give you a hundred different ways to write
      the same code. This class is going to focus on what’s going on in the
      background of each of these languages. This means taking deep dives into
      the design decisions they make and the general philosophy that motivates
      how they’re structured.
    </p>
    <p>
      As with any Eggert class, the assignments are a major b-word. They will
      take hours, maybe even days of thinking, depending on the smoothness of
      your brain. As always, I will recommend that you do your best to avoid the
      temptation of GitHub, as familiarizing yourself with the languages at hand
      and the thought processes needed to write code in them is going to be more
      important than ever for your success.
    </p>
    <p>I wish you the best of luck, and hope you survive.</p>
    <h2 ref="1">Unit 1: Language Fundamentals</h2>
    <p>
      Since we love computer science theory so so much, we’re going to start off
      with a short look into why we’re learning what we’re learning. Beyond
      that, we’re also going to bring out our inner North Campus and learn some
      general basics of language as a whole, so buckle up.
    </p>
    <p>
      Like any Eggert class, everything’s going to hit you fast. There’s going
      to be so much material thrown at you that you won’t be able to help but
      drown. But, that’s ok. Just drown slower than your classmates. Let’s get
      going.
    </p>
    <h3 ref="1.1">Unit 1.1: Design Philopsophy</h3>
    <p>
      At this point in our UCLA career, we’ve gotten into a small subset of
      languages. If your path has been anything like mine, you’ve been
      introduced to C++, C, Python, JavaScript, and a couple others here and
      there. To really get into the core of this class, we’re going to be
      spending time diving into the languages of OCaml, Java, Prolog, Scheme,
      and Python.
    </p>
    <p>
      Unlike your introduction to languages from before, however, we’re going to
      be taking a much more in-depth look at how these languages work
      fundamentally. We’ve already done the whole “learn the same programming
      constructs with a different syntax” thing, we don’t need an entire course
      to do it again.
    </p>
    <p>
      Let’s start by talking about how languages themselves are designed.
      Whenever a language is being written, the designer must be thinking about
      a large variety of factors.
    </p>
    <p>
      The first of these factors is orthogonality. Think of this from a
      mathematical perspective. When you have a set of axes, any changes you
      make in one dimension don’t affect the status of the other dimensions. In
      the same way, good orthogonality in a programming language allows you to
      implement features in the language that won’t affect other features. A
      great example of bad orthogonality is the tendency for arrays to decay
      into pointers in C and C++. For technical reasons that we won’t get into
      here, the designers of the language decided to prevent programmers from
      returning arrays from functions due to this design decision. One feature
      prevents the existence of another. Bad orthogonality.
    </p>
    <p>
      The next important factor is efficiency. As we know from our time in CS
      33/35L/97, there’s a lot more to efficiency than how fast our programs can
      run. Even runtime efficiency can be based on real time, CPU time, memory
      efficiency, power consumption, etc. Designers also need to think about how
      long the software itself takes to build, or compile-time efficiency.
      Equally important is how long the code actually takes to write, or
      development-time efficiency. As I’m sure you know from your programming
      projects, we typically need to be consciously aware of our coding style
      for readability/debugging. If we’re too verbose with our code, it’ll be
      unreadable. If we’re too concise with our code, it’ll be unreadable.
      Language designers need to strike the same balance to make their
      developers’ lives easier. We make these trade-offs when we decide which
      language we want to use, but it’s the designers of the language that give
      us that option in the first place.
    </p>
    <p>
      Continuing to pull from topics introduced in 35L/97, designers need to
      think about the safety of a language. What would happen if programmers
      violated the rules set up by the designer? Languages like C and C++ opt to
      focus their attention on static checking. This type of checking occurs
      during compile-time and checks for things like proper declaration of
      identifiers, matching types, etc. As I’m sure you know from your time in
      CS 31/32, this leaves your program vulnerable to errors that occur during
      runtime, resulting in a lot of potential for undefined behavior. Runtime
      errors like dereferencing a null pointer, subscript errors, or stack
      overflow are better handled by languages that prioritize dynamic checking.
      Once again, this design decision is left to the designer to balance.
    </p>
    <p>
      The final factor I want to touch on is mutability, or how easy it is to
      change the language. Any language that has ever succeeded in the
      programming world must evolve throughout its lifespan, or it will die off.
      Here’s an example of poor mutability. When C was first written, memory
      accesses were much faster than computation. The designers of C chose to
      reflect this in their syntax, which is why memory accesses like *ptr are
      much shorter expressions than a computation like a + b. We know from CS 33
      that, in modern machines, memory accesses are actually considerably slower
      than basic computations, which results in a need for parallelism and
      caching to maximize efficiency. Since it’s impossible to change the syntax
      of the entire language for many reasons, this syntax design will remain as
      a visual reminder of how old C is. On the other hand, some languages like
      Prolog allow the programmer to define their own operators. This is an
      example of good mutability, as it allows the language to be extended as
      needed. Choices like these can be harder to implement, but, and I’m
      repeating myself here, that decision is up to the designer.
    </p>
    <p>
      With some of the factors that guide language creation in mind, we’ll end
      the first section off by talking about the 4 main types of languages we’ll
      be focusing on in this course.
    </p>
    <p>
      The first type is what we’re most familiar with: imperative languages.
      This category includes languages like C and, to some degree, C++ and
      Python. Imperative languages are known for their tendency to solve
      programs through iteration and assignment. While these techniques likely
      seem very natural to you as a programmer, that’s probably due to your
      extended exposure to imperative languages. As you get more experience with
      other types of languages, you’ll get a better idea of how language design
      can impact you as a programmer.
    </p>
    <p>
      The next type of language, and the first we’ll be diving into in this
      course, are functional languages. Functional languages contain languages
      like ML and Lisp. Where imperative languages use iteration and variable
      assignment, functional languages tend towards recursion and single-value
      variables. We’ll get a better picture of what that means in the second
      unit, so don’t get scared off by that cursed r-word just yet.
    </p>
    <p>
      Next up, we have perhaps the most unnatural language type: logical
      languages. Logical languages, like Prolog, operate on rules of logical
      inference. Since they’re so drastically different from the programming
      languages we’ve seen thus far, I’m going to save discussion on them until
      we address Prolog later in the course.
    </p>
    <p>
      The final language type is another one we’re already familiar with:
      object-oriented languages. This is actually the most correct
      classification for C++ (which extended off of C to add object-oriented
      capabilities), and we’ll be viewing object-oriented concepts through the
      lens of Java in this course. These languages build upon imperative
      languages using objects, which are essentially just groups of data that
      perform operations on themselves.
    </p>
    <p>
      With the vast number of languages out there, not all of them will fit
      nicely into 1 of these 4 categories. Some languages are so unique that
      they’d have their own separate category entirely. Others will blur the
      lines between these distinctions and pull upon attributes of multiple
      categories. At the end of the day, the point I’m trying to get across is
      that any given language comes with a preferred methodology for problem
      solving. Are programmers restricted to the designers’ methodology of
      choice? Our time spent writing recursive functions in C++ says no.
      However, when we go against the grain and fight the designers’ methodology
      with our own, we’re forcing ourselves to work against the natural design
      of the language. In reality, we should be allowing the language’s natural
      tendencies to guide ourselves toward particular styles. Programmers
      working in an imperative language should search for iterative solutions.
      Likewise, programmers in functional languages should be breaking their
      program into many small, recursive functions.
    </p>
    <p>
      Well, that was a lot of words. I thought I was CS so I could avoid writing
      essays. Sadly for all of us, we’re going to be getting real North Campus
      vibes from the next section, so here we go.
    </p>
    <h3 ref="1.2">Unit 1.2: Phrase Structure</h3>
    <p>
      Welcome to Ling 1: Introduction to the Study of Language. All jokes aside,
      this stuff is important, so don’t fall asleep on me like you’re on week 8
      of a GE.
    </p>
    <p>
      In the context of what we’ll be focusing on, the syntax of a language
      defines how a language will look, independent of the language’s behavior
      and meaning (semantics). The syntax of a language will answer questions
      like: “What does an expression look like?” or “Do we need a semicolon?”.
    </p>
    <p>
      Before we get technical with our analysis, let’s take a high-level look at
      syntax of languages as a whole. What should the syntax of a language be?
      Well, for one, it should reflect what people are used to. When a language
      designer finds that they need an operator to represent addition, choosing
      anything but the + character will doom their language because people
      aren’t used to anything else. The syntax should be readable, writable, and
      concise. I promise you that there are exactly 0 programmers that want to
      read/write code that looks like &lt;[[>+&lt;-]>>+>] (yes, that’s an actual
      language). Finally, we want our syntax to be unambiguous. That one should
      be self-explanatory. If we write code to detect a medical emergency, we
      don’t want our program to sometimes work and sometimes go boom because the
      code is ambiguous.
    </p>
    <p>
      Now it’s time to get technical. For the purposes of this guide, we’re
      going to be following the conventions of the textbook and expressing our
      syntax rules in Backus-Naur Form, or BNF. This means our rules will look
      something like:
    </p>
    <img src="@/assets/CS131/img1.png" />
    <p>
      Don’t concern yourself with figuring out what the hell that means just
      yet. We need to spend some time breaking down each of these elements
      first.
    </p>
    <p>
      Any grammar has 4 distinct parts. The simplest part is a set of tokens or
      terminal symbols. These are the characters from above like ‘+’ and ‘*’,
      and typically represent the smallest units of syntax in our language, as
      they cannot be broken up into smaller parts. This means that things like
      keywords or operators are classified as tokens. The next part is a set of
      non-terminal symbols, like the &lt;exp> in the rule above. These are
      symbols that can be broken up into smaller parts and correspond to
      different language constructs. This classification encompasses things like
      statements and expressions. We can combine these parts together to form a
      production. Productions consist of a left-hand side, the ::= separator,
      and a right-hand side. The left-hand side is required to be a non-terminal
      symbol, while the right-hand side is a sequence of 1 or more things, where
      each thing is a terminal or non-terminal symbol. Productions can be
      abbreviated by combining them together with the ‘|’ symbol in BNF, as seen
      above. Our final part of our grammar is a start symbol. This is a special
      non-terminal symbol that denotes the root of the overall ruleset.
    </p>
    <p>
      I’m sure that was confusing, so let’s try to give you a more concrete
      analogy. Let’s say we’re writing an sentence (ew). We’ll say that our
      sentence is made up of a series of words, which are made up of a series of
      characters. Since our sentence is the overarching structure of our whole
      analogy, we say that our start symbol is our sentence. Next up, we know
      that we can break our sentences into words and our words into characters.
      Since each of these symbols can be broken into smaller pieces, we say they
      are all non-terminal symbols. Finally, we know that characters cannot be
      broken into smaller pieces, so characters are our tokens. A production is
      simply the written rule that would state that our sentence is made up of
      words, and our words out of characters.
    </p>
    <p>
      If that analogy didn’t make this whole thing clear to you, let’s try a
      more computer-science-y approach. We’re going to imagine that our ruleset
      is a tree. Every terminal symbol is a leaf node. Every non-terminal symbol
      is a node with children. The start symbol is located at the root of the
      tree. A production is simply a formatted way to write a parent-child
      relationship. So, using the framework we laid out for a sentence above, we
      could say something like:
    </p>
    <img src="@/assets/CS131/img2.png" />
    <p>
      Obviously, we’re not being quite general enough to correctly model the
      scenario above. Sentences can have more than 2 words and words can be more
      or less than 2 characters long, but the point should still be the same.
      The sentence is our start symbol, sentence and word are our non-terminal
      symbols, and character is our token. If we wanted to model a production,
      we could visualize this as something like:
    </p>
    <img src="@/assets/CS131/img3.png" />
    <p>
      Sadly, I can’t spend the rest of my life trying to find analogies to make
      this concept more clear, so we have to move on. Now that we (hopefully)
      understand the structure of the grammar of a programming language, we need
      to figure out how we write a grammar for a language. We’ll go for the
      learn-by-doing approach, so let’s try to write the rule for a simple
      variable declaration in C++. Let’s start with a high-level perspective.
      Variable declarations consist of a type name followed by 1 or more
      variables being declared. Let’s write our first production:
    </p>
    <img src="@/assets/CS131/img4.png" />
    <p>
      Now, we need to figure out a production for type names. For full
      functionality, we’d need to include functionality for class names, array
      types, pointer types, etc., but we’re going to ignore those to preserve
      the simplicity of this example. Instead, we’ll just base our rule on the
      primitive types:
    </p>
    <img src="@/assets/CS131/img5.png" />
    <p>
      These type names are all tokens, so we don’t need to worry about any
      further definition of type names. Moving on to the declarator list, we see
      we have a little more complexity. When we declare a variable, we can
      declare a single variable or multiple variables separated by commas. We’d
      write this as:
    </p>
    <img src="@/assets/CS131/img6.png" />
    <p>
      As you can see, we can define this rule recursively, where we have a base
      case of a single declarator, and a recursive case of a declarator,
      followed by a comma, followed by a declarator list. Finally, keeping in
      mind we can choose to declare a variable with or without assigning it a
      value, we’ll write a production for declarator:
    </p>
    <img src="@/assets/CS131/img7.png" />
    <p>
      Obviously, there are still non-terminal symbols to resolve here, but I
      won’t go down that rabbit hole. The idea would be the same. Get a
      high-level perspective on what you need to define, break up that
      definition into workable parts, write the production, repeat.
    </p>
    <p>
      There we have it, a structure to use tokens to generate a grammar for our
      programming language. But wait, something seems off. What we’ve done is a
      given a high-level description of a parser, which takes a finite sequence
      of tokens as an input, and interprets it as instructions using a
      context-free grammar (CFG). However, we have no way to split text into
      tokens in the first place. Ugh, another section it is.
    </p>
    <h3 ref="1.3">Unit 1.3: Lexical Structure</h3>
    <p>
      So, we spent the last section detailing phrase structure and the process
      of parsing. We need to complete our discussion on syntax by talking about
      the low-level equivalent of last section: lexical structure and
      tokenization.
    </p>
    <p>
      Now as a whole, this discussion is going to be much more abstract than the
      last section’s. We don’t need to discuss how an ‘i’ and an ‘f’ next to
      each other form the keyword if; that’s just not important for us. The
      mechanics of the tokenization process are simple, it’s the intangible
      stuff that we want to discuss.
    </p>
    <p>
      The first thing we want to address is why we separate parsing and
      tokenization in the first place. Couldn’t we theoretically just break
      expressions down into tokens, where each token is a single character? The
      answer is, yes, technically we can. However, this approach is very rarely
      seen due to it bloating the syntax definition and making it unreadable. As
      a result, modern languages prefer defining their phrase structure and
      lexical structure independently; their phrase structures down to the token
      level and their lexical structures down to the character level.
    </p>
    <p>
      The next thing to address is efficiency. Obviously, we need our
      tokenization to be fast, so how can we implement it tor fulfill our needs.
      The most important thing we’ll touch on is that tokenizers are greedy.
      This means that they’ll take the longest sequence of characters that would
      be a valid token and continue on with execution. Take the following C++
      expressions for instance:
    </p>
    <img src="@/assets/CS131/img8.png" />
    <p>
      As you can see, these expressions could be ambiguous. We could be adding a
      to b and incrementing a by 1, or we could be adding a to b and
      incrementing b by 1. Uh oh, ambiguity is bad. No need to worry though; due
      to the greedy nature of tokenizers, this will always be interpreted as the
      former. This is because, as the tokenizer parses the string, it sees that
      there are 2 ‘+’ characters following the a. It recognizes that this is a
      valid token in C++, so it interprets it as an increment of a.
    </p>
    <p>
      Next up, we need to talk about the loss of information through
      tokenization. When a tokenizer creates tokens, it doesn’t assign special
      values to each identifier. Remember that syntactic operations are not
      concerned with the meaning of what they’re processing. This means that,
      alongside things like whitespace and comments, tokenizers will throw away
      variable names, function names, etc. All the tokenizer outputs is that
      certain things are variables, functions, etc. So, how do we deal with this
      loss of information? It turns out that we have 2 categories of data:
      tokens and lexemes. Tokens simply identify the syntactic category for use
      by the parser. Lexemes contains the token as well as any extra information
      needed for semantics. Together, our program can get a full picture of what
      we write.
    </p>
    <p>
      Finally, we have the issue of differentiating between keywords and
      identifiers. If we try to name a variable “int”, how does the tokenizer
      differentiate between the keyword “int” that declares a type and the
      identifier? There are a couple ways to address this concern. Languages
      like C simply create a list of reserved words. They prevent programmers
      from using these words as identifiers, so that the tokenizer can simply
      assume the word will always be a keyword. The biggest downside to this
      approach is that it makes the language harder to extend. The more reserved
      words you add to the language, the more likely it is that old code will
      break due to the new tokenization rules. While int class = 0 is perfectly
      valid in C, C++ turns “class” into a reserved word, so code with that
      expression would break. It’s also possible to simply create more complex
      rules for tokenization, like in PL/I. This makes extending the language
      easier, but makes the development of tokenization much harder. Like with
      many things in this class, this is ultimately a design decision with its
      own pros and cons.
    </p>
    <p>
      Thankfully, that’s all we need to address about tokenization, so we can
      move on from the land of North Campus and finally get into some coding.
      See you in the next unit!
    </p>
    <h2 ref="2">Unit 2: OCaml</h2>
    <p>
      We finally have some programming ahead of us. Unfortunately, it’s not
      going to be the classic C++/Python/etc. programming that we’re familiar
      with. As we addressed in the last unit, we’ve primarily been dealing with
      object-oriented languages in an imperative environment. In this unit,
      we’re going to be getting a formal introduction to functional programming
      through the lens of OCaml.
    </p>
    <p>
      While plenty of programming principles are going to remain the same, be
      prepared to be flexible. There will be plenty of new concepts we need to
      adapt to and motivate using our knowledge of programming languages.
    </p>
    <h3 ref="2.1">Unit 2.1: Functional Programming</h3>
    <p>
      Before we dive into OCaml, I promised that this class wouldn’t just be
      learning a bunch of new programming languages. Let’s take a section to
      take a high-level view of what we’re getting ourselves into.
    </p>
    <p>
      So, why use functional programming in the first place? We’re already so
      used to the iterate and assign nature of imperative programming, it seems
      like a pretty awful idea to shake up that foundation. Well, there are 2
      major reasons.
    </p>
    <p>
      The first motivation we have is clarity. If we step out of our CS shell
      for a moment and think about it, expressions like these:
    </p>
    <img src="@/assets/CS131/img9.png" />
    <p>
      Make absolutely no sense. How can n be equal to itself minus 1? From a CS
      perspective, we can read this exactly how we would read a mathematical
      expression, but why does that divide exist in the first place. After all,
      mathematics has been around for millennia, while CS is like the quirky,
      Gen Z brother that just has to be different and ~not like the other
      sciences~. Functional programming languages defer to mathematical
      notation, in part by eliminating assignment altogether. So, when you
      initialize a variable, that variable will hold that value for the entirety
      of its existence in your program. Admittedly, this may not be more clear
      to all programmers, but that’s probably just your imperative biases
      speaking.
    </p>
    <p>
      The other major motivation is performance. As you learned from CS 33,
      parallelization is a valuable source of optimization. However, like we
      said last unit, when we write in imperative languages, we’re typically
      being guided towards iterative solutions. For a variety of technical
      reasons that I’ll leave back in my CS 33 guide, compilers have a lot of
      barriers to parallelizing sequential code. Functional languages aim to
      subvert these problems by avoiding side effects in their code. Side
      effects are simply results of altering the machine state because of
      executed code, and are massive obstacles to parallelization. Avoiding side
      effects allows us to give our code better modularity and, by extension,
      more parallelization potential.
    </p>
    <p>
      With all that said, functional programming is typically favored by those
      involved with scientific programming, and both of the motivations we
      described above should give ample reasoning as to why. Obviously, anybody
      working in a field other than computer science is going to prefer classic
      mathematical notation as opposed to the quirky CS math we know and love.
      In this way, scientists can better take advantage of the clarity provided
      by functional languages. In addition, scientific programming more often
      than not requires the processing of absolutely monumental amounts of data.
      This means that parallelization becomes a necessity to solve problems in
      reasonable amounts of time, and the added modularity of functional
      programming becomes a vital feature to their work.
    </p>
    <p>
      Ok, so that’s a lot of the more abstract stuff out of the way. In the next
      section, we’ll start familiarizing ourselves with some of the core
      features of OCaml and get you on your way to solving your first
      assignment.
    </p>
    <h3 ref="2.2">Unit 2.2: OCaml Core</h3>
    <p>
      Now that we’ve got some of the basics of functional programming down, we
      can take a quick dive into our case study of OCaml. If the Eggman hasn’t
      changed up his assignments yet, your first 2 assignments are going to be
      written in OCaml, and they are truly painful. Let’s start with some of the
      core principles of the language.
    </p>
    <p>
      The first thing you’ll notice about the language is that the runtime
      environment operates on an REPL, a read-eval-print loop. If you actually
      have a life and don’t remember what that means from CS 35L/97, OCaml will
      essentially wait for you to give it some input, read that input, evaluate
      it, print the result, then repeat. Some other features of OCaml (although
      they’re admittedly more trivia than anything else for us) are that it
      maintains a garbage collector, meaning we don’t have to worry about any
      manual memory management, and that all OCaml data that we’re working with
      is immutable.
    </p>
    <p>
      It’s pretty reasonable to claim that the most prominent aspect of OCaml,
      at least for now, is its emphasis on type inferencing. What does that
      mean? Well, languages typically focus their attention on either static or
      dynamic type checking. We’ve grown used to the static type checking of
      C++, where every variable is required to have a type associated with it at
      compile time. OCaml has its own spin on static checking. Instead of having
      the programmer define the type of an expression, the language actually
      uses context clues to assign types itself:
    </p>
    <img src="@/assets/CS131/img10.png" />
    <p>
      As you can see, OCaml can detect the type of the expressions above without
      us having to manually guide it. Obviously, this doesn’t do much for us
      with these simple expressions, but we’ll get into why this is significant
      as we get deeper into the language.
    </p>
    <p>
      For the subset of OCaml we’re going to be dealing with in this course, we
      have to get really familiar with 2 structures: lists and tuples. These
      shouldn’t be all too alien to us as veteran programming athletes, so let’s
      just add some OCaml context to what we know. OCaml lists are homogeneous,
      meaning that lists can only contain data of a single type. On the other
      hand, tuples are allowed to be heterogeneous, containing elements of as
      many types as you want:
    </p>
    <img src="@/assets/CS131/img11.png" />
    <p>
      Make note of how OCaml lists the type of the list as an “int list”, while
      the tuple is listed as an “int * string * float”. This is a small hint
      into another crucial difference between tuples and lists: lists are
      flexible in length. No matter how many elements we add to list a, it will
      always be an int list. This allows us to add and remove elements from
      lists without compromising the functionality of our code. It’s worth
      looking over the documentation for OCaml lists to familiarize yourself
      with the tools available to you. However, we don’t have the same
      flexibility when it comes to tuples. If we were to add another element to
      the tuple, the entire type of the tuple would change to accommodate the
      new addition. This means we can’t mess with the lengths of tuples without
      worrying about breaking our code.
    </p>
    <p>
      The next things we want to address are functions. There’s a lot more
      complexity to this topic than we’re going to get into here, but it’s good
      to set up a little foundation right now. While the language itself is
      going to change how you think about functions, their overall structure is
      very similar to the languages you’re familiar with. The biggest change is
      that OCaml functions only accept 1 parameter. That seems horrible for the
      language doesn’t it? There are a couple ways around this. One of them is
      very important to OCaml development as a whole, so we’re going to save
      that for a little later. The other solution is to pass in a tuple as the
      parameter, giving the function access to a multitude of values. Within
      OCaml’s REPL loop, functions look like this:
    </p>
    <img src="@/assets/CS131/img12.png" />
    <p>
      Huh. What’s that weird ‘a thing you ask? I answer. This is OCaml’s way of
      dealing with type inferencing. Obviously, not every line of code you write
      is going to have an unambiguous type. In the case above, x could be
      literally anything. Instead of just guessing and confusing everybody
      involved, OCaml assigns the expression a type variable, ‘a. These work
      just like normal variables, you plug in a type to the type expression and
      you’re on your way. We can see this versatility by calling the print
      function on a few different values:
    </p>
    <img src="@/assets/CS131/img13.png" />
    <p>
      As you can see, OCaml allows us to call this function on a value of any
      type. Pretty cool right? Just wait until our code gets more complicated.
      Then it won’t be cool. It won’t be cool at all.
    </p>
    <p>
      Ok, with some of that out of the way, let’s talk about what features of
      OCaml stem from its classification as a functional language. Most
      importantly, OCaml has a lot of support for recursion and higher-order
      functions. We’ll get to the latter in a few sections, but the former is
      important to remember as we tackle the assignments. It’s not going to feel
      natural to formulate recursive solutions, but that’s what the language
      wants you to do.
    </p>
    <p>
      Another neat feature that OCaml has are anonymous functions. You may have
      had the pleasure of working with lambda or inline functions in the past.
      That concept of unnamed functions originates from the world of functional
      programming. Anonymous functions make the language more orthogonal, while
      also serving as a useful tool to the programmer. We can localize simple
      functions to make code more readable and easier to write:
    </p>
    <img src="@/assets/CS131/img14.png" />
    <p>
      Obviously, the anonymous functions serve very little purpose in this
      trivial example, but what can I say. I’m not smart enough to come up with
      a solid example right now. Unfortunately for me, examples are exactly what
      we’re going to need moving forward to address some newer concepts that
      deserve their own sections. Ai ya.
    </p>
    <h3 ref="2.3">Unit 2.3: Pattern Matching</h3>
    <p>
      In the last section, we covered some of the basics of OCaml to get
      ourselves acquainted with the language, but now, we need to take a closer
      look at some of the features that make OCaml powerful. The first thing
      we’ll touch on is pattern matching.
    </p>
    <p>
      Pattern matching is a form of conditional found frequently in the OCaml
      code we’ll be dealing with. Their closest analog in the languages we have
      experience with are switch statements, although they’re much more useful.
      An example of a pattern matching statement is as follows:
    </p>
    <img src="@/assets/CS131/img15.png" />
    <p>
      So, we have a function example that takes in a parameter x. We then
      initiate the pattern matching with the match keyword. This keyword takes
      in some value and then matches it with one of the following rules. In this
      case, we’re trivially matching the value x with a constant int, and then
      returning the string interpretation of that int. If x isn’t an int,
      OCaml’s type inferencing is going to catch that and spit out an error at
      compile-time. The same thing will happen if the return values don’t have
      matching types, as OCaml requires that they do for its type inferencing to
      be effective. We can see that the function works as expected:
    </p>
    <img src="@/assets/CS131/img16.png" />
    <p>
      Now, one thing you should be asking yourself is, what happens when we
      input a value that isn’t 1, 2, or 3? Let’s find out:
    </p>
    <img src="@/assets/CS131/img17.png" />
    <p>Hm. Bad things. Bad things happen.</p>
    <p>
      As it turns out, our pattern matching structure was very poorly designed.
      The example I gave above was an example of a non-exhaustive pattern
      matching. This means that, within the set of valid inputs, or ints in this
      case, there exists some subset of inputs that will not be matched by our
      match statement. In this case, anything other than 1, 2, or 3 will result
      in this match failure exception. So how can we remedy this? What about
      adding a variable:
    </p>
    <img src="@/assets/CS131/img18.png" />
    <p>
      Unlike the constants 1, 2, and 3, any int can be matched with the variable
      x. When attempting to match a pattern, OCaml will start from the topmost
      rule and move downwards. Therefore, this pattern will attempt to match 1,
      then 2, then 3, then x. You can think of this x rule like the default case
      in a switch statement. So now, our function should be free of match
      failures:
    </p>
    <img src="@/assets/CS131/img19.png" />
    <p>
      Now, it may seem daunting that you have to manually watch out for these
      non-exhaustive matches every time you write a match statement. Thankfully,
      OCaml does support static checking to ensure that all your patterns are
      exhaustive. If you attempt to write a non-exhaustive pattern, you’ll get
      hit with the following wall of text:
    </p>
    <img src="@/assets/CS131/img20.png" />
    <p>
      Now, if you look above in our better_example, you’ll notice that we don’t
      actually use the value that we match in our default case; anything that it
      matches outputs the same result. Usually, when we perform pattern matching
      with a variable like this, we’ll end up using it in the output:
    </p>
    <img src="@/assets/CS131/img21.png" />
    <p>So how do we make our code better? Make way for best_example:</p>
    <img src="@/assets/CS131/img22.png" />
    <p>
      Instead of initializing a whole new variable for the default case, we
      instead use the ‘_’ character. Instead of matching any value and then
      binding it to a variable like before, we’ll now match any value and then
      discard it immediately. While better_example and best_example are
      functionally equivalent, it’s better practice to use the tools in
      best_example.
    </p>
    <p>
      Those are the basics of pattern matching covered. We’re going to take a
      second here to cover some other useful patterns to know before moving on.
      Before we start that, I want to touch on another keyword that’s available
      to us in OCaml.
    </p>
    <p>
      As you can see in the above examples, we’ve been taking in a variable x
      and then immediately attempting to match it with a pattern. OCaml gives us
      a shorthand for doing this:
    </p>
    <img src="@/assets/CS131/img23.png" />
    <p>
      The function keyword tells OCaml to take in the first parameter that this
      function is called on, and then begin matching it with the rules that
      follow it. Ok, let’s get into some patterns.
    </p>
    <p>
      As I stated in the previous section, we’re going to be messing around with
      lists and tuples a lot as we work with OCaml. If that’s the case, it’d be
      pretty nice to know how to match them right?
    </p>
    <p>
      Let’s start with the easier one. Matching tuples is pretty
      self-explanatory:
    </p>
    <img src="@/assets/CS131/img24.png" />
    <p>
      As we’ve gone over before, tuples of varying lengths are different types.
      As a result, we can’t use pattern matching to generate rules for tuples of
      different lengths. For this reason, OCaml’s type inferencing is able to
      detect that this function can only take in tuples of int * int, which
      means we don’t actually need a default case here.
    </p>
    <p>
      There’s a little more information when it comes to lists, but nothing too
      complicated. Here’s everything we need to know:
    </p>
    <img src="@/assets/CS131/img25.png" />
    <p>
      So, we have 3 patterns we need to worry about. The first is obvious, “[]”
      matches the empty list. Next, we have “[p;q;r]” which will match any list
      of 3 elements. It should go without saying that we can generalize this to
      however many elements you want. By far the most commonly used pattern,
      however, is the last one, “head::tail”. This pattern matches any non-empty
      list while assigning the first element of the list to head and the rest to
      tail. Since we’re focusing on creating recursive solutions to our
      problems, this pattern is going to be heavily used when working with
      lists. For example, I’m going to leave you with this function that
      searches for an element x in a list using pattern matching. Try and walk
      through it to make sure you’ve got everything we’ve covered down:
    </p>
    <img src="@/assets/CS131/img26.png" />
    <h3 ref="2.4">Unit 2.4: Higher-Order Functions</h3>
    <p>
      Now, it’s time to move on to the most confusing thing we’ll find here.
      Higher order functions are functions that take other functions as
      parameters. OCaml’s support for higher order functions gives the
      programmer the ability to add a lot of complexity into their program by
      Frankensteining a bunch of functions together.
    </p>
    <p>
      I’m sure there are plenty of other uses of higher order functions, but the
      one we’re going to focus on in this section is currying. Currying is the
      process of having a function return another function to be used later.
      Sounds wack right? Well it turns out that you may have already done this
      on accident if you’ve messed around with OCaml at all. We mentioned
      earlier that OCaml functions can only take in 1 parameter. In that
      section, we also said that we can get around this by passing a tuple as
      that parameter. However, none of that explains why a function like this is
      valid:
    </p>
    <img src="@/assets/CS131/img27.png" />
    <p>
      Well, that sure as hell looks like a function with 2 parameters to me. I’m
      probably just an idiot then right? Well, yes, but that function really
      does only have 1 parameter.
    </p>
    <p>
      You can actually see evidence of this in the type assigned to this
      function by OCaml. If read properly, the type says that this function is a
      function from a function from int to int to int. Written like that, it
      looks like I just had a stroke. In less stroke-like words, this function
      takes in a function from int to int, and then outputs an int. So, what
      gives?
    </p>
    <p>
      OCaml allows this to happen for the programmer’s convenience. Currying is
      the secret here. If we wanted to write this function properly, we’d have
      to write something along the lines of:
    </p>
    <img src="@/assets/CS131/img28.png" />
    <p>
      So, what’s really going on here is that OCaml handles these parameters by
      currying anonymous functions. this_should_work takes in a single parameter
      x. It then returns an anonymous function that takes in a parameter y, and
      then returns the result of adding it to x.
    </p>
    <p>
      Ok, big whoop, we can use currying to do something that like every other
      language on the face of the earth let’s you do. Well, there’s a little
      more to it than that. Let’s say we have the following function:
    </p>
    <img src="@/assets/CS131/img29.png" />
    <p>Now, let’s say that we execute this expression in OCaml:</p>
    <img src="@/assets/CS131/img30.png" />
    <p>
      Well that’s weird. Why were we allowed to do that? add_nums has 2
      parameters right? How could we possibly get away with calling it with 1?
      That’s what makes currying so powerful. Since the function itself doesn’t
      actually take in both parameters, we can extract intermediate functions
      like this. Essentially, we’ve just created a function that behaves exactly
      like add_nums, except it uses the value 5 instead of x. See here:
    </p>
    <img src="@/assets/CS131/img31.png" />
    <p>
      Now, obviously this isn’t useful for us here. We’ve used a powerful too
      for a trivial purpose, but that doesn’t make this any less powerful.
      Currying is a tool that allows us to build more and more complicated
      functions from smaller, simpler functions. Once again, we see how
      functional programming’s influence shines through here.
    </p>
    <p>
      Ok, great. We just have one more topic to cover before we leave the realm
      of OCaml, and it’s an easy one. Time to close out.
    </p>
    <h3 ref="2.5">Unit 2.5: Type Constructors</h3>
    <p>
      With all of OCaml’s emphasis on type inferencing, it should come as no
      surprise to you that the language allows us to define our own types. We’re
      going to see this a lot in our assignments, so make sure you get this
      simple concept down.
    </p>
    <p>
      Although there are other variations of type constructors, the ones we’ll
      be focusing on in this class are enumerations. These look something like
      this:
    </p>
    <img src="@/assets/CS131/img32.png" />
    <p>
      So here, we’ve defined a type animal, which has data constructors Cat,
      Dog, and Monkey. We are now free to use this animal type how we would any
      other type:
    </p>
    <img src="@/assets/CS131/img33.png" />
    <p>
      Sounds easy right? Well it is. In fact, it’s far too easy for a class like
      131, so let’s make it just a little harder. Above, we just used plain data
      constructors, but OCaml allows us to initalize data constructors with
      parameters:
    </p>
    <img src="@/assets/CS131/img34.png" />
    <p>
      This type now contains values of Even and Odd. However, unlike our animal
      example, these values will associate themselves with values of type int:
    </p>
    <img src="@/assets/CS131/img35.png" />
    <p>Here’s a more complicated use of this type:</p>
    <img src="@/assets/CS131/img36.png" />
    <p>
      Here, we’re transforming a list of normal ints to a list of our
      user-defined parity_ints. In the resultant list, you can see that each int
      is associated with one of the data constructors defined by parity_int. Not
      useful to us in this example, but will definitely be useful to you in the
      assignments.
    </p>
    <p>
      So, we can associate normal values with custom types. Cool. If you’re
      anything like me, at some point while you’re writing your code, you’ll run
      into something like this:
    </p>
    <img src="@/assets/CS131/img37.png" />
    <p>
      Since we’ve wrapped our int inside of our custom type, we no longer have
      access to the int itself. So how do we get it back out? Unfortunately, the
      answer is pattern matching:
    </p>
    <img src="@/assets/CS131/img38.png" />
    <p>
      We can match the input with a given data constructor in our type
      constructor, and then return the matched value. If you ever need the value
      within a data constructor, you’re going to need to use this small
      workaround.
    </p>
    <p>
      Well that’s about it for OCaml. I do want to warn you that simply
      understanding everything I’ve written isn’t going to get you through the
      assignments. Honestly, it won’t even get you through a single problem. The
      only thing that will is a lot of trial and error, a handful of suffering,
      and a dash of tears. Familiarizing yourself with this stuff is painful.
      Horribly painful. But you’re a CS major, so, if you aren’t used to it yet,
      you better get used to it soon.
    </p>
    <h2 ref="3">Unit 3: Java</h2>
    <p>
      Welcome back to the world of object-oriented programming. Kinda. With our
      detour into functional programming complete, we’re going to be pivoting
      into Java. Unlike our last unit, we’re actually more or less familiar with
      the environment we’re headed into. After all, Java was designed to have a
      C++-like syntax, and Daddy Smallberg made sure we had plenty of experience
      with that.
    </p>
    <p>
      Since there’s no real use spending lectures reteaching principles we
      learned in CS 31/32, we’re actually going to be using Java more as a lens
      into some more principles of programming languages. Sure, we’ll get to
      some of the features of the language down the road, but none of that is
      super important to us right now. Hell, you barely need to know Java to
      complete the one assignment from this unit.
    </p>
    <h3 ref="3.1">Unit 3.1: Translation Environments</h3>
    <p>
      Ok, I lied a little bit. Java really isn’t important for this section, but
      I had nowhere else to throw this material so here we go.
    </p>
    <p>
      As we learned from CS 33, the process of taking our source code from words
      on a screen to an actual, functioning program is quite complex. Part of
      that process is translating from a language that we understand to one that
      the computer can understand. Welcome to translation environments.
    </p>
    <p>
      We’ll start off with something we’re all very familiar with: the compiler.
      We can think of a compiler as translating from source code to machine
      code. We went into plenty of detail on that in CS 33, so I’ll save you the
      time spent worrying about all those lea‘s and jmp‘s and whatnot. We might
      need a basic understanding of the x86 instruction set for later, but later
      sounds pretty far away, doesn’t it?
    </p>
    <p>
      For now, we’re less worried about the result of compilation, and more
      about the internal mechanisms that we’ve pushed aside until now. We know
      from Unit 1 that our original source code has to be put through
      tokenization and parsing to break our code down into fundamental elements
      of the language. That’s more or less what we did for the first 2
      assignments of the class. However, compilers can’t stop there. After
      tokenization and parsing, the compiler takes the resulting parse tree and
      performs some static checking on it. This includes sanity checks for
      things like types, scope, etc., depending on what the language has decided
      to implement. The result of this is a more detailed parse tree. From this
      detailed parse tree, the compiler can now generate something we call an
      intermediate representation.
    </p>
    <p>
      This intermediate representation is machine-independent. Rather than
      focusing on what the machine wants, this intermediate representation is
      controlled by the compiler itself. This representation is put in place for
      the convenience of the compiler. After a little bit of optimization, this
      intermediate representation must be used to generate corresponding
      assembly code. Of course, this means that the rest of the process is
      reliant on the machine, and more in the realm of CS 33. From assembly, we
      generate .o files, which we can then link together using pre-compiled
      libraries into our final executable. Finally, our executable can be shoved
      into RAM, where the instruction pointer can be redirected to it to execute
      our code.
    </p>
    <p>
      This approach that we’ve just outlined is the traditional method for
      bringing our source code into action, and is called the software tools
      approach. A big advantage to this method is the ability to perform
      optimizations on the compiler-side (preprocessing), while also being able
      to appropriate your code for various machines. This approach revolves
      around this idea of pipelining your code through various programs, each of
      which performs a step in the compilation process.
    </p>
    <p>
      However, like with all things in computer science, this isn’t the only way
      to go about things. We also have the IDE approach, where IDE stands for
      Integrated Development Environment. Think VSCode/Xcode/etc. When we wrote
      our garbage programs in CS 31/32, we never had to deal with any of that
      nonsense from above. What we had was a single application that handled it
      all for us. We could write our code and run it in the same place. Instead
      of subjecting ourselves to pipelining our code through a bunch of
      specialized programs, the IDE approach addresses this need for
      modularization through the use of techniques that are analogous to
      object-oriented programming.
    </p>
    <p>
      Nowadays, the majority of development occurs on a foundation built on a
      hybrid of both approaches. The software tools approach is more tailored
      towards lower-level design, like IoT, whereas the IDE approach is used
      more for higher-level design, where application framework is more freely
      available. These hybridizations have given rise to some new advances that
      try to provide the benefits of both approaches to the programmer.
    </p>
    <p>
      The first one we should look at is something that you likely learned about
      in CS 33: dynamic linking. In the software tools approach, linking is
      performed as an individual step in the compilation process. In dynamic
      linking, the executable can bring code into RAM by itself, allowing code
      to modify itself during execution. This self-modification advantage is
      reminiscent of the principles of the IDE approach, in that it merges
      multiple steps of the software tools pipeline into one. At the same time,
      we also preserve the flexibility of the software tools approach through
      earlier parts of the pipeline.
    </p>
    <p>
      The other topic we want to look at is going to require a little bit more
      background. Up until this point in our computer science careers, we’ve
      focused solely on compilation as a translation environment. However,
      there’s an alternative to compilers known as interpreters. While compilers
      translate source code to machine code in order to execute a program,
      interpreters take the source code, and then use the machine code of the
      interpreter to execute the source code. Therefore, instead of translating
      source code to machine code, interpreters work by translating source code
      into byte code. This byte code will be some instruction set defined by the
      interpreter itself, and, as a result, is able to be executed by the
      interpreter. Compared to compilation, interpreting provides an easier
      environment to debug at the cost of worse runtime performance.
    </p>
    <p>
      With that under our belts, we can take a look at a new topic: just-in-time
      compilation. For the sake of justifying the inclusion of this section in
      the Java unit, we’re going to talk about this in the context of Java. When
      we compile a Java program, we get a .class file in return. This .class
      file is actually byte code that needs to be interpreted. The interpreter
      of this byte code is located within the Java executable that the .class
      file will be fed into. Like we said, interpreters tend to slow down
      runtime significantly, but we can be 200IQ gamers here and speed things
      up. Within this interpreter, we’re going to squeeze in a compiler that can
      compile byte codes into machine code. As our program runs, the Java
      executable keeps track of how often certain methods are executed. If the
      executable notices that certain parts of the code are executed often, it
      can then call on the compiler to compile those specific sections into
      machine code. Now, when those segments are executed in the future, the
      explicit machine code can be directly executed rather than having to pass
      the byte code through the interpreter again. Once again, we maintain the
      pipeline structure of the software tools approach while taking on the
      introspection of the IDE approach. Fun huh?
    </p>
    <p>
      Ok, I know that that section was dense, so thanks for sticking through it
      with me. We’re going to be tackling a larger topic in the next section,
      but it should look a lot more familiar to you.
    </p>
    <h3 ref="3.2">Unit 3.2: Types</h3>
    <p>
      If you’re anything like me and coming off of Homeworks 1 and 2, you’ll be
      thinking about how much of a pain in the ass types are in programming. So
      why do we have them?
    </p>
    <p>
      Let’s go back to the beginning. What is a type? Depending on who you ask,
      a type can be a set of values, something that describes how objects are
      represented in memory, a set of objects and operations defined for those
      objects, or a set of objects, operations, and axioms. There isn’t exactly
      a set answer, although the one we seem to be abiding by in our coursework
      is the third one I listed.
    </p>
    <p>
      Most of the languages we work with have a very important distinction
      between primitive types and constructed types. I’m sorry for the
      flashbacks to CS 31, but bear with me here. Primitive types are
      essentially built-in types. All your ints, floats, and chars of the world.
      The idea with these types is that they are so commonly used, that
      languages decide to support them natively for efficiency. Oftentimes, many
      features of the language bank on the fact that these primitive types are
      defined.
    </p>
    <p>
      On the other hand, constructed types are defined by the user. Classes and
      structs should jump to the forefront of your mind here. We won’t be
      jumping into discussion on these just yet, and instead focus on the
      primitive side of things.
    </p>
    <p>
      Well, what is there to talk about? Everyone knows what an int, bool,
      float, double, etc. is. That’s like Week 1 CS31 stuff. As it turns out,
      there’s a lot of complexity here that is kept hidden from you.
    </p>
    <p>
      First of all, primitive types have a lot of portability issues. Sure, many
      of them are defined across a whole host of languages, but that’s where the
      problem comes from. Let’s take an int for instance. What would you say is
      a valid int? The answer is, it depends on the machine. The most common
      implementation of an int, and the one present in x86-64, is a 32-bit, 2s
      complement integer. The problem is, machines exist that define ints as
      having 16 or even 36 bits. Or what about machines that decide to be quirky
      and use 1s complement or signed magnitude interpretations? Obviously, with
      all these implementations, we have to jump through quite a few hurdles to
      write truly portable code, even at the most basic levels.
    </p>
    <p>
      Let’s crank it up to 11. If ints are that complex, how about floats?
      Though I doubt you remember the mechanics, the pain of floating point
      arithmetic is probably still buried somewhere inside of you. A quick
      review of that whole process would probably be beneficial for you here,
      but I’m lazy so I’ll just put this here. For all 100% of you that didn’t
      go back and review floating points, I’ll throw some buzzwords out into the
      world for you. Denormalized. NaN. -0.0. From here, we have a lot of things
      to answer. How do you compare NaNs to numbers? Is it valid to compare
      floats for equality? Do you prioritize exception handling or special value
      (infinity, NaN) handling? I don’t have the answers. I’m not smart.
    </p>
    <p>
      Now that we’ve spent a little bit preaching about the struggles of types,
      let’s give the other side a chance. What are types really good for?
    </p>
    <p>
      One thing that gets overlooked when we work with C++ is types’ inherent
      contribution to annotation. Sure, you may think it’s annoying to have to
      write out what type each variable is, but it also makes everything much
      more readable. Just one glance at the variable declaration, and you know
      what type it is. Not only do you get that information, but the compiler
      gets it too. Languages like C++ that require this strict typing tend to be
      much more efficient because of this. Of course this isn’t constrained to
      C++, languages like Java employ this annotative behavior in their own
      ways.
    </p>
    <p>
      Another benefit of types that we’ve become very familiar with recently is
      inferencing. If you write a program that declares 2 ints and returns their
      sum, the compiler can infer that that program will return an int as well.
      As we discussed in the last unit, OCaml makes use of this constantly. In a
      way, inferencing works in opposition to annotation, as annotation
      encourages the programmer to explicitly write types down, while
      inferencing promotes the compiler’s ability to figure it out on its own.
    </p>
    <p>
      The last benefit we’re going to touch on here is type checking. Of course,
      we know by now that there are 2 forms of this: static and dynamic. What we
      haven’t really discussed is that type checking is better described as a
      spectrum, with static on one end and dynamic on the other. Typically,
      languages tend to lean towards one side of this spectrum pretty heavily,
      but the important part is that both types of checking are typically used.
      For instance, C++ and Java are primarily based in static checking, but
      have elements of dynamic checking as well. A special subset of languages
      take on the property of being “strongly typed”, which means that every
      operation is type checked. While a language like C gets close, it doesn’t
      type check every operation. For instance, you can cast pointers, which can
      lead to undefined behavior. It should go without saying that the big draw
      of strongly typed languages is that they are super reliable because of
      their intensive static checking.
    </p>
    <p>
      With all of that said, I want to close on a slightly different topic: type
      equivalence. The big idea here is, given the 2 types T and U, how do we
      figure out if T equals U? Well, there are 2 ways to answer that question.
    </p>
    <p>
      The first answer is based around name equivalence. Here, we’ll say the 2
      types are equal if they have the same name. Essentially, once we have a
      type, it’s a brand new type that isn’t equal to any other type.
    </p>
    <p>
      The other answer is less specific, and is based on structural equivalence.
      This means that 2 types are the same if they behave the same, as far as
      their internal representations go.
    </p>
    <p>
      Obviously, the fact that both of these answers exist means that neither of
      them is wrong. They both make sense in their own respective contexts,
      resulting in languages having to pick and choose between them.
    </p>
    <p>
      Now, I know that there is a little bit of understanding to be gained from
      an example here, so let’s take a look. C takes these definitions and pulls
      on both in different contexts. If we want to find an example of name
      equivalence in C, we could define the following:
    </p>
    <img src="@/assets/CS131/img39.png" />
    <p>
      Sure, s and t are exactly the same. Put s in any context and you could
      replace it with t just as easily. However, any operation in C that would
      check type equivalence would say that s does not equal t. They don’t have
      the same name, so they aren’t the same type. That isn’t always true,
      though. Take the typedef keyword:
    </p>
    <img src="@/assets/CS131/img40.png" />
    <p>
      Here, C would actually treat s and t as the same type. This is because
      they are both aliases for the int type, so they are functionally
      equivalent. Structural equivalence says hi.
    </p>
    <p>
      Since I just wrote up a literal wall of text, I’m going to cut things off
      here. We’re going to continue our discussion on types with some more
      complicated concepts in the next section, so see you there!
    </p>
    <h3 ref="3.3">Unit 3.3: Subtypes and Polymorphism</h3>
    <p>
      Let’s revisit the question we asked about type equivalence in a slightly
      different context. If we have 2 types T and U, how do we know if T is a
      subtype of U?
    </p>
    <p>
      Well, I skipped something kinda important there. What even is a subtype?
      Why do we need them? The idea of a subtype is that we have some specific
      value (of some subtype) that we want to pass as an argument to a more
      general function (that accepts some supertype). We want this to work
      regardless of name equivalence or structural equivalence to allow us to
      write these general-purpose functions in the first place, so subtypes are
      born. One example of this that we’ve seen earlier on in our studies is the
      class-subclass relationship that we dove into in CS 32.
    </p>
    <p>
      So now, let’s answer that question. In general, if type T is a subtype of
      U, then T must contain a superset of operations relative to U. Here’s an
      example. Take the C types int and const int. Which one is a subtype of the
      other. I don’t know about you, but my intuition tells me that int is the
      supertype and const int is the subtype. However, that’s not the case, int
      is actually a subtype of const int. Think about it, the const keyword
      tells us that we cannot modify the value of the int. This means that the
      const int has less valid operations than the int. In fact, any operation
      you can do on a const int, you can also do on an int. However, any
      operation that modifies the value of the int cannot be performed on the
      const int. These operations that modify value make up additional elements
      found in the int type’s superset of operations. Starting to get it yet?
    </p>
    <p>
      Well worry not, that’s just foundation for the big topic of the section:
      polymorphism. The idea behind polymorphism is that a piece of your program
      has many types, all at once. This could manifest in something like the ‘+’
      operator, which may be an operator that takes in 2 ints and returns an
      int, but could also be an operator that takes in 2 floats and returns a
      float. Due to the flexibility that this provides, the vast majority of
      languages are polymorphic in this sense.
    </p>
    <p>
      Let’s break things down a little further. There are 2 major forms of
      polymorphism that surface in conventional languages.
    </p>
    <p>
      The first of these forms is overloading. An example of overloading is
      actually the use of the ‘+’ operator from above. Essentially, this is the
      process of identifying what code to execute by analyzing the types of the
      arguments passed into it. As you’ve probably guessed, the most common use
      of overloading is in the implementation of basic operators in languages
      like Java, C, etc. On a lower level, overloading works by having several
      different functions at the machine level to handle the various types,
      which all condense down into a single function at the source code level.
      Languages like C++ even give the programmer the ability to define their
      own overloaded functions, but this is the Java unit, so let’s not get into
      that here.
    </p>
    <p>
      The other form is coercion. Coercion is the process of implicit type
      conversion, and is much more subtle than overloading. Taking an expression
      like double d = 0, we can see coercion at work. 0 is obviously of type
      int, but it’s being assigned to a value of type double, so some type
      conversion needs to happen under the hood. Coercion stacks on top of
      overloading when it comes to the basic operators we discussed earlier, and
      we can see this in the example double d = 1.5 + 1. Since people that
      design languages actually have intelligence, they don’t define a version
      of each operator for every possible combination of valid types. It doesn’t
      take a mathematician to see how that would get out of hand real fast.
      Instead, coercion is used to convert the 1 into a double, and then the
      double variety of ‘+’ is used. This is very convenient for programmers,
      but it does introduce some potential problems into our lives. Say we have
      the following overloaded functions:
    </p>
    <img src="@/assets/CS131/img41.png" />
    <p>
      Suddenly, a simple call like f(1, 0) becomes ambiguous. Which parameter
      should be coerced to fit with the corresponding overloaded function? The
      answer is there’s no answer. Doing something like this is poor programming
      practice at best, and just not allowed by the language at worst.
    </p>
    <p>
      Ok, so all of that is nice and dandy, but there are some weaknesses here.
      Most importantly, coercion and overloading work fine with primitive types,
      but fall apart rather quickly for constructed types. For that reason, we
      turn to a related concept: parametric polymorphism. The idea behind
      parametric polymorphism is to provide a little bit more structure to
      traditional polymorphism, which, for the most part, operates exclusively
      under the hood and out of sight. Parametric polymorphism is present
      whenever a function’s type contains one or more type variables. Let’s see
      this in action with some Java code. Let’s write a method that goes through
      a collection of strings and removes all the strings of length 1:
    </p>
    <img src="@/assets/CS131/img42.png" />
    <p>
      Ok, code seems simple enough right? Well, the problem is, this code won’t
      compile. In Java, the String object is built on top of the Object object.
      In other words, String is a subtype of Object. The compilation issue we
      run into here stems from the fact that the call i.next() will return an
      Object since we never specified what kinds of values are in this
      Collection. As a result, we’re attempting to call the .length() method on
      an Object, not a String, so our code explodes. Now, as a programmer, we
      may be able to guarantee that any Collection passed into this method will
      be a Collection of Strings, but the code doesn’t. As a result, we need to
      add a little more information into the mix:
    </p>
    <img src="@/assets/CS131/img43.png" />
    <p>
      This code now works, but at a cost. Since Java is a strongly-typed
      language, simply telling the program that i.next() will be a String isn’t
      enough. Java will automatically put in a runtime check for that
      conditional to ensure that i.next() is actually a String. Well that sucks.
    </p>
    <p>
      Now, everything we’ve done so far regarding this method has been out of
      the realm of parametric polymorphism. Well, what happens when we add some
      of that in:
    </p>
    <img src="@/assets/CS131/img44.png" />
    <p>
      Here, we’ve used the principles of parametric polymorphism to tell our
      method that it doesn’t take in just any Collection, but a Collection of
      Strings. As a result, we can now iterate over it with a String Iterator,
      changing the type of i.next() from Object to String. Since i.next() is
      already a String, there is no need to implement the runtime check that was
      present before, and everything is once again good in the world.
    </p>
    <p>
      With our motivation down, let’s get into just a little bit of detail on
      how we implement parametric polymorphism into our lives. There are 2 ways
      to do this: templates and generics.
    </p>
    <p>
      We briefly touched on templates in CS 32, so we won’t be discussing them
      much here. As a basic overview, templates represent code that doesn’t
      exist yet, but will come into existence once they are instantiated. Once
      you call a template function and provide the types required, the compiler
      can then finish the job of compiling the code to represent the function
      call you want. This results in a potential need for multiple copies of
      machine code for functions of various types. Templates are typically used
      in older languages.
    </p>
    <p>
      The other, more relevant method is the use of generics. Using generics,
      the code is compiled a single time, and only generates a single copy of
      machine code. Although we’re going to skip a lot of the technical aspect
      of generics, we’ll mention that we can make them work because the
      languages they appear in have a single implementation for all of their
      types. In the case of Java, all objects are represented by a pointer, so
      we can get away with just doing everything one time.
    </p>
    <p>
      Now, we’re going to hold off on our deep-dive into generics until next
      section. Sorry again for all of these walls of text, but there’s a lot of
      information to cover. More pictures next section, I promise.
    </p>
    <h3 ref="3.4">Unit 3.4: Generics</h3>
    <p>
      Alright, time to get a little more specific with Java. Like we said in the
      last section, we’re going to dive a little deeper into the context of
      generics, using Java as a point of reference.
    </p>
    <p>
      Last time, we walked through an example that shows why generics are
      important. We’re going to get ourselves into a little more trouble here.
      Let’s start by combining the concept of generics with another one we
      touched on last time: subtypes. Take the following code:
    </p>
    <img src="@/assets/CS131/img45.png" />
    <p>
      So, we’re initializing some list of Strings, initializing a list of
      objects to that list, adding a Thread to our list of objects, and then
      getting the first element out of the list of Strings. Now, unlike C++,
      assignments in Java always pass by reference rather than by value. This
      means that the list of Strings and the list of Objects are actually the
      same list. lo aliases ls. Well that doesn’t make any sense, does it? How
      are we adding a Thread to a list of Strings? While we’re at it, since the
      .get() method returns the Thread, how are assigning a Thread to a String
      variable? This whole thing just seems wrong.
    </p>
    <p>
      Where does the error come from then? Let’s break it down line by line. In
      the first line, we declare a list of Strings. Ok, nothing sketchy there.
      In the second line, we assign a list of Strings to a list of Objects. Ok…
      well, we said last section that all objects are subtypes of Object, so
      this seems ok for now. In the third line, we’re adding a Thread to a list
      of Objects. Once again, Thread is a subtype of Object, so nothing too bad
      here. In the final line, we assign a String from a list of Strings to a
      String variable. We said String too many times there for anything to be
      wrong. So, where’d we go wrong.
    </p>
    <p>
      The answer is in the second line. Yes, it’s true that a String is a
      subtype of Object. However, this does not mean that List&lt;String> is a
      subtype of List&lt;Object>. Why? For exactly the reasons you see above.
      Remember, if a type is a subtype of another, that type must strictly have
      a superset of operations when compared to the supertype. However, in this
      example, we see an operation that is allowed for List&lt;Object>s, but not
      for List&lt;String>s: adding non-String Objects.
    </p>
    <p>
      Now, let’s say we wanted to do something like what we did above. Except
      this time, it actually, you know, works. Let’s say we want to print every
      Object in a Collection. Naively, we might implement this like:
    </p>
    <img src="@/assets/CS131/img46.png" />
    <p>
      Of course, only someone that didn’t understand what I said in the first
      example would do it like this. So, honestly, wouldn’t be that surprised if
      you thought this was ok. Think about it like this, what happens if we use
      our new method like this:
    </p>
    <img src="@/assets/CS131/img47.png" />
    <p>
      Just like in our earlier example, this call will fail. We cannot convert a
      Collection of Strings to a Collection of Objects because
      Collection&lt;String> is not a subtype of Collection&lt;Object>. Well
      fooey. What do we do then?
    </p>
    <p>Enter stage-left: wildcards:</p>
    <img src="@/assets/CS131/img48.png" />
    <p>
      A wildcard is essentially a nameless type variable. Think ‘a from OCaml.
      By writing our method like this, we’re basically telling it to take in a
      Collection of anything. Since the contents of the Collection must all be
      some object derived from Object, we can iterate through this Collection
      with i just fine. Bam, problem solved, just like that.
    </p>
    <p>
      You know what, I’m feeling high on wildcards right now, so let’s do
      another example! Let’s make a function that takes in an array and a
      Collection, and adds all elements of the array to the Collection:
    </p>
    <img src="@/assets/CS131/img49.png" />
    <p>
      Damn, look at us go, we’re just knocking down LeetCode easy-esque
      questions left and right. Man, wildcards are so grea-. This doesn’t work.
      Sorry to hype you up like that.
    </p>
    <p>
      This implementation actually breaks on the .add() method call. Why? Well,
      the compiler doesn’t know whether or not it’s legal to add something of
      type Object to a Collection of type whatever. We need some way to tell the
      compiler that the elements of a are of the same type as the elements of b.
      Thankfully, this is an easy fix, let’s just do exactly that:
    </p>
    <img src="@/assets/CS131/img50.png" />
    <p>
      Instead of using a nameless type variable, let’s just use a named one.
      Here, we declare some generic type T, and we can use it throughout the
      method as we see fit.
    </p>
    <p>
      Now, our basic cases work just like they should. Pass it an array of
      Strings and a Collection&lt;String>, and our method can handle it no
      problem. But what if we pass it something like an array of Strings and a
      Collection&lt;Object>? Since String and Object aren’t the same type, our
      method will refuse to take those parameters. However, with our genius
      minds and extensive knowledge of subtypes, we know that it’s perfectly
      legal to insert a String into a Collection of Objects. So now what?
      Bounded wildcards, that’s what:
    </p>
    <img src="@/assets/CS131/img51.png" />
    <p>
      Now, Collection is once again of a nameless type variable, but, this time,
      we include the restriction that it must be a supertype of T. All our
      problems are now solved. For the curious of mind, we can do something
      similar if we want the unknown type to be a subtype of T:
    </p>
    <img src="@/assets/CS131/img52.png" />
    <p>
      Ok, just because I promised you at the beginning of this guide that we
      won’t just be going over a bunch of new languages and their features, I’ll
      get a little into how generics are implemented. Sadge.
    </p>
    <p>
      Honestly, I forget if I mentioned this part in the last section and I’m
      too lazy to go back. Generics work by compiling the source code a single
      time and generating bytecodes that work for any type that the type
      variables are allowed to be instantiated with. This means that, in the
      source code, we end up with less specific instructions, because we lose
      the type-checking protections present in the raw source code. We’re
      allowed to shed these extra details since they would’ve already been
      checked for during compile-time due to Java’s static type-checking. This
      loss of information is called erasure, as the runtime ends up having less
      information than the compile-time. For various reasons, this results some
      added runtime checks to make sure the program does actually work.
    </p>
    <p>
      Now that I’ve fulfilled my promise, we’re done with generics! Now, up next
      could be some background on the history of Java, as well as some of its
      basic features, but that requires work that I don’t want to do and you
      don’t need to read. Instead, we’re going to speedrun our way to the end of
      the unit by addressing some of the more distinct features of Java. You’re
      welcome/sorry, depending on the type of student you are.
    </p>
    <h3 ref="3.5">Unit 3.5: Interfaces</h3>
    <p>
      Ok, time to finally pivot away from types and dive into something just a
      little bit uglier. We’ll start off easy though.
    </p>
    <p>
      One key feature of Java is that it’s single inheritance when it comes to
      classes. This is different from C++, which does have multiple inheritance,
      even if we haven’t had to use it at this point in the curriculum.
    </p>
    <p>
      So, what problems does this cause? Well, let’s imagine Java’s class
      structure as a graph. Since Java is multiple inheritance, we could say
      that every node has a single parent node, telling us that this graph is
      actually a tree structure. This means that every class has to live in its
      own subtree, despite the fact that it may share many common features with
      other subtrees. In less CS-ish terms, a class may want to pull from
      multiple parent classes.
    </p>
    <p>
      Generally, this issue would be solved through the implementation of
      multiple inheritance in the language as an added degree of compatibility.
      Java replaces multiple inheritance with the concept of interfaces, which
      provides no implementations for its methods:
    </p>
    <img src="@/assets/CS131/img53.png" />
    <p>
      From here, any class is allowed to implement the interface, taking on its
      type:
    </p>
    <img src="@/assets/CS131/img54.png" />
    <p>
      As a requirement for implementing an interface, this class must provide
      implementations for all the methods declared in the interface. This check
      is built into the Java compiler. Since the interface itself has no
      implementations for the methods it defines, we can’t construct an object
      directly from an interface. That should more or less be a no-brainer.
    </p>
    <p>
      In many ways, interfaces are very similar to classes. Structurally, both
      are built on a hierarchy where classes are built on top of other classes
      and interfaces. However, the interface hierarchy is a little different
      than the class hierarchy. When a class extends another class, that class
      is inheriting wealth from the base class. It takes on the base class’
      code, and can use it for itself. On the other hand, when a class
      implements another interface, it inherits an obligation to that interface.
      This entails implementing the methods passed down from that interface,
      either through defining its own methods that satisfy the interface’s API,
      or through using the wealth from a base class to do the same.
    </p>
    <p>
      So in essence, we replace the functionality of multiple inheritance with
      the ability to inherit from multiple interfaces. While this seems like a
      syntactic difference at best on the surface, the real benefit comes from
      not having to inherit multiple implementations of functions, which adds
      complexity in figuring out what code to execute.
    </p>
    <p>
      As you might expect, the use of interfaces is extremely common throughout
      Java programming. It’s so common that many programs end up having a
      structure where an interface and a class are practically bound together as
      they move through the hierarchy. As a result, we can implement abstract
      classes – a class that supplies both wealth and obligations on its child
      classes:
    </p>
    <img src="@/assets/CS131/img55.png" />
    <p>
      So here, we provide an implementation for the push() method, but an
      obligation for child classes to implement the pop() method. As you may
      have guessed, just like interfaces, objects of abstract classes cannot be
      constructed. Callbacks to virtual/pure virtual functions in C++ galore.
    </p>
    <p>
      Now, before we move into the real ugly stuff, we’re going to take a quick
      look at the root of Java’s class hierarchy. Surprise, surprise, it’s the
      Object class. Regardless of how you make your class declaration, the
      Object class will act as a base class. What this tells us is that the
      methods defined by the Object class are so important to Java’s
      functionality, that the language requires that every object ever
      constructed has the ability to execute them. While I could spend the next
      year going into detail on all of these methods, I won’t, because I’m not a
      masochist. I’ll just let you know that these methods include things like
      equals(), hashCode(), clone(), toString(), etc. Go look at the Java
      documentation if you care.
    </p>
    <h3 ref="3.6">Unit 3.6: Threading and Synchronization</h3>
    <p>
      Are you getting traumatic flashbacks from this section’s title? I know I
      am.
    </p>
    <p>
      As with most of the concepts in this unit, we’ll be looking at threading
      and synchronization through the lens of Java. Why is that relevant you
      ask? Well unlike in C/C++, multithreading capabilities are actually built
      into Java. This means that we’ll be getting into a little more detail in
      this section than we did in CS 33. Isn’t that fun?
    </p>
    <p>
      Let’s start off by making sure we’re on the same page with some basics.
      More specifically, terminology. When we talk about threading, we need to
      be able to differentiate between processors, processes, and threads. A
      processor is a CPU or CPU core with an instruction pointer. Processors are
      capable of running programs in parallel, one for each processor. A process
      is a program that’s being run by a processor, each with it’s own separate
      memory. This separation of memory means that different processes cannot
      affect each other directly. Finally, a thread is a program being run by a
      a processor that shares memory with all other threads in its process. This
      shared memory allows for fast communication between threads at the cost of
      an added risk of race conditions.
    </p>
    <p>
      Whew, that was a lot of surface level information. Let’s begin our deep
      dive.
    </p>
    <p>
      Like we said earlier, multithreading was built into Java from the very
      start. Because of this, our understanding of Java is going to benefit from
      a closer look at how threads actually behave. Or something like that. I
      don’t know, this was in lecture, it’s going to be here too.
    </p>
    <p>
      Java programs begin with a master thread, a thread that executes the
      program from the very start. New threads can be created using the new
      keyword. Upon creation, this new thread will have a thread state of NEW:
    </p>
    <img src="@/assets/CS131/img56.png" />
    <p>
      Once this thread is created, we can proceed to start it up. This means
      that we allocate OS resources and a virtual processor to the thread,
      gifting it an instruction pointer to execute code with. As you might
      expect, this thread now has a thread state of RUNNABLE:
    </p>
    <img src="@/assets/CS131/img57.png" />
    <p>
      This RUNNABLE state and virtual processor allow us to account for the fact
      that we might have 100 RUNNABLE threads, but our machine might only have,
      say, 8 cores. Since each core can only use 1 thread at a time, the
      remaining threads have to have some state to show that they can be run,
      but the machine might not have the resources to run them at that instant.
      The virtual processor allows them to maintain an instruction pointer,
      despite the fact that they may not be actively executing any instructions.
    </p>
    <p>
      Once a thread becomes RUNNABLE, there are plenty of things it can do.
      Perhaps most obviously, the thread can run. Shocker, I know. If the thread
      continues to execute code, it will continue to have a RUNNABLE state.
    </p>
    <p>
      The thread can also choose to help out the thread scheduler by telling it
      that other threads should run if they need to:
    </p>
    <img src="@/assets/CS131/img58.png" />
    <p>
      This method call simply makes way for other threads to run; the current
      thread is still RUNNABLE.
    </p>
    <p>
      The thread can also go to sleep for some defined amount of time. Even
      computers get tired, you know:
    </p>
    <img src="@/assets/CS131/img59.png" />
    <p>
      This method let’s us pause a thread’s execution by assigning it a
      TIMED_WAITING state. In this state, the thread will wait for some internal
      clock to expire before becoming RUNNABLE again.
    </p>
    <p>
      Somewhat similar to sleeping, threads can also wait for other objects:
    </p>
    <img src="@/assets/CS131/img60.png" />
    <p>
      Unlike the sleep() method, wait() stops the thread from executing code by
      forcing it to wait for some signal sent by another object. This
      distinction is made by assigning it the WAITING state, which, like the
      TIMED_WAITING state, will revert back to RUNNABLE when the thread is
      allowed to continue.
    </p>
    <p>
      I could keep going on about low-level views on threads for ages, but I
      won’t. Contrary to what you might think, I’m not trying to torture you
      here.
    </p>
    <p>
      Instead, let’s move on and take a higher level look at what threads help
      us accomplish. I shouldn’t have to remind you that, ideally, more threads
      = faster execution. Duh. At the same time, it should be equally obvious
      that multithreading comes with its own fair share of risks that could very
      well compromise your program.
    </p>
    <p>
      For those of you that slept through CS 33, like yours truly, let me try
      and remind you of what we’re talking about here. 2 words. 14 letters. Say
      them, and I’ll cry. Race conditions.
    </p>
    <p>
      Race conditions occur when 2 threads re competing for the same location in
      memory. If one writes while the other is attempting to access that
      location, well, you guess is as good as mine. Program could explode,
      program could not explode. That’s the big fear with race conditions, they
      don’t always rear their ugly-ass head, but they just might.
    </p>
    <p>
      Since multithreading is built into Java, you can bet that the language
      also comes with a few ways to make sure your parallel programs are safe
      and sound. The simplest of these protections are synchronized methods:
    </p>
    <img src="@/assets/CS131/img61.png" />
    <p>
      This keyword creates internal spin-locks on each object within the method,
      giving threads exclusive access to these objects. The mechanism itself
      isn’t super important for us right now (although you will learn more about
      it in Homework 3), what we care about is the inefficiency of the method.
      All the overhead of initializing locks and locking/unlocking makes
      synchronized sections of code slow. We don’t like it when our code is
      slow.
    </p>
    <p>
      Now, there are more sophisticated ways of synchronization: CountDownLatch,
      Exchanger, CyclicBarrier, etc. We’re not going to get into them because,
      at the end of the day, they’re all still too slow. This is where Java’s
      built-in optimization comes in.
    </p>
    <p>
      The type of optimization we’re going to focus on is as-if optimization.
      As-if optimization works exactly how it sounds like it would work: it
      allows the compiler or hardware to generate or execute any code that it
      wants, as long as that code behaves “as-if” it were never changed. When we
      attempt to apply as-if optimization more aggressively, this means our
      compilers and hardware can reorder your code if it makes things more
      efficient.
    </p>
    <p>
      This works just fine for sequential programs, but what about for
      multithreaded ones? As it turns out, fulfilling the as-if rule within each
      thread’s execution does not guarantee that the as-if rule if fulfilled
      within the entire program’s execution. Well that sucks. Even worse, this
      issue becomes very hard to fix when you consider that threads have no easy
      way of communicating with one another. If we start reordering the code
      like crazy in the interest of optimization, then our threads lose any
      reliable information about each other, and we’re practically inviting race
      conditions into our program.
    </p>
    <p>
      So what gives? Making an effort to avoid race conditions makes our code
      too slow for practical use. Usually the answer would be to optimize, but
      full optimization simply reintroduces race conditions back into the
      program. As dumb as it sounds, the answer is to optimize as much as you
      can without making race conditions possible. To do this, we need some
      guidelines on what kinds of optimizations are allowed, and what kinds
      aren’t. That’s what the next section’s going to take on.
    </p>
    <h3 ref="3.7">Unit 3.7: The Java Memory Model</h3>
    <p>
      Let’s imagine some abstract machine with multiple threads. Each individual
      thread has its own instruction pointer and has semantics that are
      sequential. These semantics consist of loads/stores into memory,
      entering/exiting synchronized areas (or monitors), and basic computations.
      These semantics allow for the reordering of loads and stores and entering
      and exiting monitors as long as the as-if rule is being obeyed for that
      thread.
    </p>
    <p>
      Now, like we said in the previous section, the specifications we gave
      above aren’t strict enough. Our program is still fully capable of
      exploding, even if we follow the rules defined above. This means that, in
      order to optimize safely, we have to give place some extra restrictions on
      reordering optimizations. That’s exactly what the Java Memory Model, or
      JMM, does.
    </p>
    <p>
      As a simple tool to represent the JMM, allow me to introduce what Egg
      calls the “can-reorder table”. This table describes 3 classes of
      instructions. A stands for normal loads and normal stores. These are, of
      course, the most common instructions you’ll see in a given Java program. B
      stands for enter monitor and volatile loads. Both of these types of
      instructions generally involve grabbing a lock. Finally, C stands for exit
      monitor and volatile store. As you may have guessed, these instructions
      involve releasing a lock.
    </p>
    <p>
      Now, this table analyzes 2 instructions, the first on the left, and the
      second on the right. Each entry in the table is essentially the answer for
      the question: assuming we follow the as-if rule for individual threads,
      can we reorder these instructions? Without further ado, here we go:
    </p>
    <img src="@/assets/CS131/img62.png" />
    <p>Ok, let’s try to break this thing down, row-by-row.</p>
    <p>
      The first entry asks if we are allowed to reorder normal loads and normal
      stores. Knowing that we follow the as-if rule for sequential execution,
      the answer is of course! If we couldn’t do this, then as-if optimization
      wouldn’t exist in the first place.
    </p>
    <p>
      The second entry asks if we can reorder a normal load or store preceding
      an enter monitor or volatile load. Once again, the answer is yes. Remember
      that instructions of type B are just grabbing a lock. If we reorder our
      instructions so that we simply grab this lock before some basic stores and
      loads, there’s nothing wrong with that. We’re essentially just expanding
      our critical section. Now, can this reordering be bad for performance?
      Yes, but that’s not the point of this table. All we care about here is if
      it’s safe to reorder these instructions, and it is.
    </p>
    <p>
      The last entry in the first row asks if we can swap a normal load or store
      preceding an exit monitor or volatile store. No, we can’t. If you think
      about it, this is essentially taking code that should be within a critical
      section and moving it out. That’s no good. The programmer wrote that
      critical section to protect the objects inside of it, it doesn’t make
      sense to let the compiler compromise that structure. In fact, we can use
      this same argument to say that the entirety of the C column should be made
      up of No’s. If code was written to be executed in a single-threaded
      fashion, we can’t move it to a place where it could be subject to
      multithreading.
    </p>
    <p>
      The same logic that invalidates the C column can also be applied to the B
      row. Anything in this row would take code within a critical section and
      place it before the critical section. Once again, big no-no.
    </p>
    <p>
      That means that the only interesting entries left are in the C row. Well,
      the first entry there asks if we can reorder an exit monitor or volatile
      store preceding a normal load or normal store. Looking back at the logic
      for the second entry, we can see that the answer should be yes. This swap
      essentially just releases a lock later than the code is written. Once
      again, we’re just expanding our critical section, so no harm can be done
      there. The last entry involves reordering an exit monitor/volatile store
      preceding an enter monitor/volatile load. We can’t allow this optimization
      because it is allowing us to grab locks before we should be able to and
      release locks later than we should be able to. Once again from the
      programmer’s perspective, that’s just undoing all their hard work.
    </p>
    <p>
      There’s definitely more complexity to the JMM, but that’s all we’re going
      to cover here. As you can see, the JMM is simply a balancing act between
      performance and safety. In the bigger picture, this balance leans too
      heavily towards safety. The JMM is too complex for users to pick up easily
      and gives away too much performance for developers to be satisfied.
      However, it’s the best we have for now, so I guess we can all just go cry
      more.
    </p>
    <h2 ref="4">Unit 4: Prolog</h2>
    <p>
      Out with the old and in with the new; welcome to to the world of logic
      programming. This is going to be real different from the languages we’ve
      touched on so far. If I’m being honest, Prolog is very simple
      syntactically, but you have to be ready to completely change how you think
      about coding.
    </p>
    <p>
      With that said, once you get past the learning curve, it’s relatively
      smooth sailing from there. The assignment for the unit isn’t bad, and the
      book’s chapters are actually pretty helpful here. Bottom text.
    </p>
    <h3 ref="4.1">Unit 4.1: Logic Programming</h3>
    <p>
      Logic programming as a whole is a much smaller subset of languages than
      those that we’ve covered so far. To be honest, Prolog is just about the
      only relevant logic programming language, so this section may as well be
      concerning the philosophy behind Prolog.
    </p>
    <p>
      When it comes to programming languages, there are 2 major ways of thinking
      about code: declarative and imperative. In declarative thinking, the
      programmer says what they want the code to do, and it’ll do it. Procedural
      thinking has the programmer say how they want the code to do what they
      want it to. Let’s take a look at what that means from the lens of the
      language types we’ve looked at so far.
    </p>
    <p>
      Imperative languages like C++ and Java are probably what we’re most
      familiar with. These languages lean heavily on procedural thinking. All
      those data structures and algorithms are used to guide a program’s
      behavior into accomplishing some bigger goal. On the other hand,
      functional languages like OCaml have a fair bit of both procedural and
      declarative thinking. When it comes to logic languages, we tend to hit on
      the other end of the spectrum and focus on declarative thinking. This
      means that the main focus of code written in a logic language is
      communicating what the programmer wants to happen; how it actually happens
      takes a backseat.
    </p>
    <p>
      At the core of logic programming is the idea that an algorithm can be
      broken up into 2 parts: the logic and the control. The logic is
      essentially a specification of what you want the code to do in logical
      terms. The control tells the computer how the logic should be executed to
      make it efficient. This division of problems into 2 parts is meant to
      simplify things greatly for the programmer, even if a perfect separation
      isn’t always successful. For the purposes of this guide, we’re going to be
      focusing mainly on the logic, but we’ll touch on a bit of control later.
    </p>
    <p>
      Now, like I said at the beginning, Prolog may as well be logic
      programming. For that reason, we’re going to cut things short here as we
      dive into Prolog in the next section.
    </p>
    <h3 ref="4.2">Unit 4.2: Prolog Logic</h3>
    <p>
      With some of the philosophy out of the way, it’s time to dive a little
      into the actual behavior of Prolog itself.
    </p>
    <p>
      At its core, Prolog programs are simply a series of clauses in which you,
      the programmer, tells the program what’s true and what’s false. Any such
      clause is terminated by a ‘.’ and made up of Prolog terms. By the nature
      of Prolog, we tend to avoid using arithmetic, and instead lean towards the
      use of predicates: expressions which evaluate as either true or false.
    </p>
    <p>
      A Prolog term is either an atom, number, variable, or structure. An atom
      is essentially what we would call strings in other programming languages,
      and are only equivalent to themselves. Atoms may or may not be enclosed by
      quotes, although unquoted atoms are required to begin with a lowercase
      letter. Numbers are, well, numbers, and are also only equivalent to
      themselves. Variables are just like variables in any other programming
      language, other than the fact that they must start with an uppercase
      letter or underscore. Finally, structures are Prolog’s version of function
      calls, although, internally, they’re quite different.
    </p>
    <p>A Prolog structure may look something like:</p>
    <img src="@/assets/CS131/img63.png" />
    <p>
      In the above example, do_something is what we call the functor, an atom
      that denotes the structure. We say that this structure has an arity of 3,
      which means that it has 3 arguments. As a result, we would could use the
      notation functor/arity to describe this structure as do_something/3.
    </p>
    <p>
      Now, despite what your basic intuition is telling you, this isn’t a
      function call. Prolog doesn’t have those. Instead, this is just another
      representation of data. It is assumed that somewhere in our Prolog
      program, we have a clause that defines do_something, which contains its
      own clauses. The above structure is simply a tree that points to these
      clauses, allowing us to imitate the behavior of “function calls”. This
      might become more clear with an example.
    </p>
    <p>
      Let’s say we want to write a Prolog program that sorts a list. Making note
      of Prolog’s preference for a divide and conquer approach, we can start
      things off with something along the lines of:
    </p>
    <img src="@/assets/CS131/img64.png" />
    <p>
      Here, we define a structure sort/2. Noting that, in Prolog, ‘:-‘ means
      “if” and ‘,’ means “and”, this clause essentially states that for every L
      and P, P is the sorted version of L if P is a permutation of L and P is
      sorted.
    </p>
    <p>
      How does it say that? Well it doesn’t. Not yet anyways. So far all we’ve
      done is laid out the foundation for our program. We have yet to actually
      lay out the logic for either permute/2 or sorted/1, which are the goals of
      the clause.
    </p>
    <p>
      So, let’s get on that, shall we? Starting with the significantly easier
      sorted/1, we have something like:
    </p>
    <img src="@/assets/CS131/img65.png" />
    <p>
      Here, we can see traces of OCaml’s pattern matching. This isn’t quite the
      same though. In Prolog, each of these lines is a distinct clause. Let’s go
      through them.
    </p>
    <p>
      Starting from the top, we can say that the empty list is sorted. As a
      result, when the P “passed” (we’ll get into this in the next section” into
      sort/2 is the empty list, Prolog will find the first clause written above,
      and conclude that P is sorted. More specifically, this clause is what we
      call a fact, as it has no body.
    </p>
    <p>
      Next, we can also say that any singleton list must be sorted. To capture
      this generalization, we use the _ variable, which has the same meaning as
      it did in OCaml. Once again, if a singleton list is “passed” into sort/2,
      this rule will be used to conclude that the list is sorted.
    </p>
    <p>
      Finally, we have the only non-trivial case. In a list of 2 or more
      elements, we have to do a little bit more work to determine whether the
      list is sorted. In this implementation, we break the list into 3 parts: X,
      Y, and Z. Here, X represents the first element in the list, Y represents
      the second element, and Z represents the rest of the elements. We do this
      using ‘,’ to separate X and Y, and then ‘|’ to take the tail of the list.
      Once this is done, X and Y are then compared using the ‘=&lt;‘ operator.
      If this is found to be true, then sorted/1 is recursively called using the
      tail of the list. Eventually, repeated use of this clause will reach one
      of the simpler cases, allowing us to conclude that the list is sorted.
      Since this clause has a body, we call it a rule.
    </p>
    <p>
      So, when we say structures are really just trees, this is what we mean.
      The sorted/1 from the sort/2 predicate may branch down to any of these 3
      clauses. Satisfying any of these clauses will result in the success of the
      sorted/1 structure.
    </p>
    <p>
      As you can see, thinking in terms of predicates, that is, expressions that
      return true or false, may be a little tricky at first. It gets better with
      practice. A little bit at least.
    </p>
    <p>With sorted/1 defined, let’s see what we can do about permute/2:</p>
    <img src="@/assets/CS131/img66.png" />
    <p>
      The base case here should be obvious. The empty list is a permutation of
      the empty list.
    </p>
    <p>
      The common case is where this gets a lot trickier. This is where we see
      the real power of Prolog. While we’re not going to finish the example or
      really detail the logic, we’re essentially using Prolog to generate every
      possible permutation of a list. Why? Well, let’s look back at the sort/2
      predicate.
    </p>
    <p>
      sort/2 is supposed to be a way to sort a list. Instead of doing this
      algorithmically like we would in other languages, we do this through brute
      force. Rather than modifying the original list L, we start by generating a
      permutation of L. Once this is done, we then check if that permutation is
      sorted. If it isn’t, we go back and generate another permutation.
      Eventually, we’ll find a permutation that’s sorted, which is then assigned
      to the variable P.
    </p>
    <p>
      The process we’ve just described is a good example of how Prolog’s
      interpreter functions. It will look at each goal in the program,
      attempting to match it with a clause. If the goal is matched with a fact,
      then the goal succeeds. If the goal is matched with a rule, then the body
      of that rule establishes a replacement goal, whereby the new goal is to
      satisfy the body of that rule. This is where recursion occurs. If at some
      point in this process a goal fails, then Prolog will attempt to backtrack
      to find other ways to satisfy the original goal. We saw this when we said
      that, if Prolog found that a list was not sorted, it would attempt to find
      a different permutation to check. Overall, this process is called
      backwards chaining, and is heavily reliant on an aspect of Prolog that
      we’ll cover in the next section.
    </p>
    <h3 ref="4.3">Unit 4.3: Unification</h3>
    <p>
      Unification is Prolog’s substitute for assignment. It’s essentially the
      process by which 2 similar Prolog terms become identical. Let’s remind
      ourselves of the example we used in the last section:
    </p>
    <img src="@/assets/CS131/img67.png" />
    <p>
      We stated that this clause takes a list L, finds permutations for the
      list, and then proceeds to check if that list is sorted. Upon finding a
      sorted permutation of that list, it will be placed into P. However, that
      isn’t the full story.
    </p>
    <p>
      Take a look at how permute/2 and sorted/1 interact. Clearly, it’s through
      the variable P, right? What’s actually happening here is, when permute/2
      finds a permutation of L, it unifies that value with P. In other words,
      the permutation is placed into P. Since P is a variable at this point,
      this is totally fine. By the time it gets passed into sorted/1, P is a
      list, representing some permutation of L. sorted/1 can then use this list
      as its parameter and operate accordingly. If it succeeds, then that list
      is unified with sort/2’s P, and the end result is just like we previously
      said. However, if the sorted/1 fails, then what happens? Like we said in
      the last section, the Prolog interpreter will backtrack back to permute/2.
      Here, another permutation of L will be calculated, and P will be unified
      with that value instead.
    </p>
    <p>
      So there you go, a more accurate picture of what’s going on here.
      Unification is essentially how Prolog handles the passing of arguments,
      which is why saying that values are “passed” to predicates isn’t exactly
      accurate. Unification is an extremely powerful tool that makes Prolog
      different from any other language we’ve come across so far. Take the
      predicate append/3 for example. This is a predefined predicate that
      succeeds if Z is the result of appending the list Y onto the list X. In a
      traditional sense, we could use it as follows:
    </p>
    <img src="@/assets/CS131/img68.png" />
    <p>
      As you might expect, this clause will append the list [3, 4] to the list
      [1, 2] and unify the result with Z. However, we can actually use this in a
      more creative way:
    </p>
    <img src="@/assets/CS131/img69.png" />
    <p>
      What the hell does that do? Well, if we take a look at the definition of
      append/3 that I gave earlier, this will essentially search for possible
      lists that [3, 4] can be appended onto to form [1, 2, 3, 4]. Well, that’s
      cool. If we want to take things even further, we could also write:
    </p>
    <img src="@/assets/CS131/img70.png" />
    <p>
      Now, we’re looking for any combination of lists that could be unified with
      X and Y to form [1, 2, 3, 4]. Hopefully, you’re starting to see the power
      of Prolog by now. By using unification, Prolog develops this ability to
      search problem spaces better than any language we’ve come across thus far.
      Not only can we use predicates to get at the results of a calculation, but
      we can also use them to determine intermediate steps that lead to a known
      result. Of course, this power comes at a cost.
    </p>
    <p>
      Unification, by its very nature, may be ambiguous. There can be multiple
      different ways to unify values to arrive at a proper result. Sometimes,
      these unifiers pick a solution that isn’t generic enough. In this
      situation, Prolog chooses to behave conservatively, always picking the
      most general unifier possible. The mechanics of this process aren’t
      relevant to us right now, but just keep that in mind. Even with this
      qualifier, many unifiers may still exist. For instance, there isn’t a
      unique solution for the query above. In this case, Prolog will simply
      output unifiers 1 by 1, allowing the user to accept or reject them.
    </p>
    <p>
      Another side effect of unification is the possibility of circular code.
      Take the following predicate definition and query, for example:
    </p>
    <img src="@/assets/CS131/img71.png" />
    <p>
      In order for this goal to succeed, Y must unify with f(Y). Unification
      doesn’t think there’s anything wrong with this. However, let’s imagine
      that were true, and Y = f(Y). Well, we now have ourselves an infinite
      loop, since Y is essentially equal to f(f(f(f(f(…))))). This behavior is
      capable of breaking programs, and should always be kept in mind when using
      Prolog.
    </p>
    <h3 ref="4.4">Unit 4.4: Prolog Control</h3>
    <p>
      At this point, we’ve covered 90% of the class-relevant information when it
      comes to Prolog. Prolog control is more or less an aside that gives us a
      window into some more of the mechanics of the interpreter.
    </p>
    <p>
      As we clarified when we introduced the language, Prolog programs are
      essentially massive trees of logic. We call these trees proof trees, and
      the interpreter must navigate them using backwards chaining until it
      succeeds or fails.
    </p>
    <p>
      One of the ways the programmer can affect this backwards chaining is
      through the use of the cut predicate: ‘!’. This predicate always succeeds,
      but it has a catch. If you pass the cut, then fail later, causing the
      interpreter to backtrack to the cut, the caller immediately fails. This
      essentially forces the interpreter to only explore a single branch of the
      proof tree that the cut is a part of. In the appropriate situations, this
      can create massive performance improvements.
    </p>
    <p>To hopefully make things more clear, imagine this:</p>
    <img src="@/assets/CS131/img72.png" />
    <p>
      In this predicate, we solve some conditions A, B, and C before reaching
      the cut and then solving condition D. If we make it all the way to
      condition D and it fails, then p will immediately fail as well. If the cut
      wasn’t present, then the interpreter would return back to C, B, and A to
      check for alternate unifications. In a situation where we know that if any
      of the unifications for A, B, and C fail on D, then all of the
      unifications will fail, the cut saves us from doing any redundant
      computations.
    </p>
    <p>
      Ok, short section, but we’ve covered what we needed to. Time for another
      language!
    </p>
    <h2 ref="5">Unit 5: Scheme</h2>
    <p>
      We’re coming back to the world of functional programming here. What that
      means for us is that we’re not going to be diving into too much philosophy
      here, we’re just adding another language to our repertoire. Why? Well,
      Scheme has a special feature that we’re interested in investigating, and
      we can use that feature to further some of our discussion on how
      programming languages behave as a whole.
    </p>
    <p>
      With regards to the language, well, it shouldn’t be 100% alien to you. In
      CS 35L/97, we took a look at Scheme’s base language: Lisp. That should’ve
      given you a little time to familiarize yourself with the wonky prefix
      notation that we’ll be working with in this unit.
    </p>
    <h3 ref="5.1">Unit 5.1: Introduction and Conventions</h3>
    <p>
      Since this section is going to be absent of the more abstract discussion
      we’re used to at the beginning of the unit, it might be worth taking some
      time to understand the language we’re taking on here.
    </p>
    <p>
      For one, the first thing that’ll jump out at you is the ugly-ass prefix
      notation that we’ll be working with. As absolutely horrible as it is to
      develop and read, this design choice plays into Scheme’s main goal: keep
      things simple.
    </p>
    <p>
      Scheme is a general purpose language that handles both traditional data,
      like numbers and other primitives, as well as structured data, like
      strings and vectors. It is generally considered a higher-level language
      due to various runtime checks that may lead to inefficiency when compared
      to low-level languages like C. Like many other higher-level languages,
      Scheme employs a garbage collector to deal with any dynamically-allocated
      data. In the context of Scheme, this means that any objects are handled by
      the garbage collector, while primitives are handled as immediates, and do
      not incur any allocation or deallocation costs. Within Scheme, all objects
      are first-class data values, meaning they are all free to be passed as
      arguments, returned from procedures, and combined into new objects.
    </p>
    <p>
      At its core, Scheme is made up of a small collection of various
      structures, known as syntactic forms. These core syntactic forms can then
      be structured together to create more complex syntactic forms, which are
      then used to populate the language. This allows for compilers to be small
      and compact, as the language can be built from a relatively small subset
      of primitives. While it may be valuable to take the time to follow the
      progression of the language from core to syntactic sugar, I won’t be doing
      so in this guide due to pure laziness.
    </p>
    <p>
      Finally, as with any functional language, Scheme provides heavy support
      for recursion, so have fun with that.
    </p>
    <p>
      Now, before we start looking at any pieces of the actual language, let’s
      nail down some syntax and conventions. In Scheme, keywords, variables, and
      symbols are called identifiers. On the other hand, more complex
      structures, such as lists and procedure calls, are called structured
      forms, and are enclosed in parentheses.
    </p>
    <p>
      On the subject of procedure calls, certain procedures return either a true
      or false value, denoted by #t and #f, respectively. As we know from our
      adventures in Prolog, these procedures are called predicates.
      Conventionally, any predicates should end in a ?, including the predicates
      defined by the programmer. Scheme comes with built-in predicates; most
      notably, a subset of predicates that check if a given value is of a
      certain type, including char?, int?, etc. In addition, Scheme also sets
      aside a naming convention for procedures that may take on any side-effects
      during execution, ending these procedures with !
    </p>
    <p>
      Alright, with all of that spelled out for us, it’s time to take on some of
      the language itself.
    </p>
    <h3 ref="5.2">Unit 5.2: Scheme Basics</h3>
    <p>
      Now, at this point in the course, you should have little trouble picking
      up the basics of a language. For that reason, I’m not going to spend time
      introducing every feature you’re going to need to succeed. By now, you
      should be able to handle that yourself, whether that means using lecture,
      the textbook, or, god forbid, the documentation. Instead, I’ll touch on
      some of the key elements of the language, and leave you to figure out the
      rest as you tackle the assignment. Get ready for the crash course.
    </p>
    <p>
      Let’s start us off easy. Here’s what a Scheme procedure call looks like:
    </p>
    <img src="@/assets/CS131/img73.png" />
    <p>
      This code essentially tells us to call the procedure f on arguments a, b,
      and c. Internally, Scheme will first evaluate f, a, b, and c, and then
      perform the procedure call.
    </p>
    <p>Similarly, here’s what a syntactic form looks like:</p>
    <img src="@/assets/CS131/img74.png" />
    <p>
      Although syntactically similar to a procedure call, syntactic forms are
      quite different semantically. The above form is Scheme’s version of an if
      statement, and works as follows. a will be evaluated. If the result of
      that evaluation is not #f (anything other than #f is treated as #t), then
      b will be evaluated and its value returned. If a evaluates as #f, then c
      will be evaluated and its value returned.
    </p>
    <p>
      With that distinction made, let’s move on to some more syntactic forms we
      should be aware of.
    </p>
    <p>The first of these forms is lambda:</p>
    <img src="@/assets/CS131/img75.png" />
    <p>
      This form acts like the keyword fun in OCaml in that it constructs an
      anonymous procedure. It will be the source of a lot of pain in the Scheme
      assignment, so make sure you understand how it works.
    </p>
    <p>The next form we’ll look at is define:</p>
    <img src="@/assets/CS131/img76.png" />
    <p>
      As you may expect, this allows us to define global variables and
      procedures. Pretty important stuff.
    </p>
    <p>The last form we’ll cover is cond:</p>
    <img src="@/assets/CS131/img77.png" />
    <p>
      cond acts like Scheme’s version of an if-then-else statement. You may have
      noticed that when we looked at the if form earlier, we only had room for 1
      then and 1 else clause. While it’s possible to construct an if ladder with
      that form, it’s much easier to do so with cond. If E1 doesn’t evaluate to
      #f, then evaluate F1 and return its value. Otherwise, move down the list.
    </p>
    <p>
      Now, no coding section would be complete without an example, right? Let’s
      go back to old faithful: the reverse-a-list example:
    </p>
    <img src="@/assets/CS131/img78.png" />
    <p>
      Now, I didn’t go over every form in this example, but everything else
      should be more or less self-explanatory. As with our OCaml version, we
      start by implementing a base case where we check if x is the empty list,
      allowing us to terminate our recursion. We then implement the recursive
      case, where we append the head of the list (which has been cast to a list
      of its own using list) to the reverse of the tail of the list.
    </p>
    <p>
      Just like in our OCaml implementation, we’ve implemented this
      inefficiently, as append works in O(N) time. We can fix this by adding an
      accumulator to our implementation:
    </p>
    <img src="@/assets/CS131/img79.png" />
    <p>
      Finally, just like we did in OCaml, we can simplify things using let
      bindings:
    </p>
    <img src="@/assets/CS131/img80.png" />
    <p>
      As you can see, a lot of the principles we learned studying OCaml can
      apply to our work here as well. Even though these languages may come with
      a bit of a learning curve at first, we can flatten that curve a little bit
      with our knowledge of the varying paradigms of programming languages.
    </p>
    <p>
      Ok, like I promised, short section. The rest of the unit is going to be
      dedicated to a deep dive into the feature that makes Scheme special:
      continuations.
    </p>
    <h3 ref="5.3">Unit 5.3: Continuations</h3>
    <p>
      Welcome to the essence of Scheme. Continuations are a low-level control
      mechanism that may serve as a foundation for many higher-level features.
      Now, continuations aren’t unique to Scheme. In fact, they can be
      implemented in C, OCaml, and plenty of other languages we’ve come across.
      Scheme is special in that continuations are exposed to the programmer, and
      the language offers built-ins that allow the programmer to mess with them
      directly.
    </p>
    <p>
      So what is a continuation? Well, the basic idea is that a continuation
      saves the state of your program’s execution. As we know from CS 33,
      programs operate using an instruction pointer that tells the hardware what
      operations to execute next. Alone, this isn’t enough to implement
      continuations. Sure, we can control what expressions to evaluate next, but
      how can we control what to do with the value returned from that
      evaluation? Enter stage right: the environment pointer. The environment
      pointer tells your program what to do with an expression’s value after
      evaluation.
    </p>
    <p>
      A continuation is basically a pair constructed of an instruction pointer
      and an environment pointer, (ip, ep). Scheme allows us to take advantage
      of this pairing by creating an object that acts as a continuation directly
      in our code. The central procedure for this is:
    </p>
    <img src="@/assets/CS131/img81.png" />
    <p>
      This procedure call creates a continuation and passes it as an argument to
      the procedure p. For obvious reasons, p must be able to take a
      continuation as an argument.
    </p>
    <p>
      Once created, continuations can be used by calling them like a procedure
      call:
    </p>
    <img src="@/assets/CS131/img82.png" />
    <p>
      The above call sets the instruction pointer to the ip represented by the
      continuation k and the environment pointer to the ep represented by k. It
      also places the value its called with (1) into the register that acts as
      the “return value register” for the machine (%rax in x86).
    </p>
    <p>
      Let’s go ahead and take a look at a simple application of continuations.
      Let’s say we want to multiply every element in a list together. For the
      purposes of this example, we’ll say that there are many elements in the
      list and that the list is very likely to contain a 0. Any nonzero elements
      in this list are assumed to be massive numbers. So, what does this tell us
      outside of the context of this specification? Well for one, every nonzero
      multiplication calculated will be relatively expensive due to the large
      size of the numbers. This cost is further compounded by the fact that the
      list may be very long as well. In addition, any 0 we run across will
      immediately make our product 0, which means many of these expensive
      computations may be wasted. So what can we do?
    </p>
    <p>
      Sure, we could go through the list and check that it doesn’t contain a 0,
      but that’s boring and may be slow due to the size of the list. What we’ll
      do instead is solve it using a continuation:
    </p>
    <img src="@/assets/CS131/img83.png" />
    <p>
      First off, note the call to call/cc. This procedure is just shorthand for
      the call-with-current-continuation procedure we touched on earlier. For
      the argument to call/cc, we use a lambda function that accepts the
      continuation created by call/cc as an argument. We then place the logic
      required to multiply the elements of a list within a cond block. Base
      case? Check. General recursive case? Check. Weird zero? case? Uh, check.
    </p>
    <p>
      As it turns out, this weird zero? case is where we put our continuations
      to work. As you can see, if the current element is 0, we call the current
      continuation with the value of 0 set to the return register. What this
      essentially does is it forces prod to instantly return 0 upon finding a 0.
      That’s just as if we had performed our brute force check to see if a 0
      existed in the list, but this way, we didn’t need an extra pass through
      the list to do it.
    </p>
    <p>
      Ok, that’s great and all, but who cares. Aren’t we still incurring the
      cost of wasted operations since we only break from the recursion when we
      find a 0? Well, no. Take a closer look at the general case. We’re calling
      the * procedure using the head of the current list and the result of
      calling prod on the tail of the list. What this means is that we avoid
      performing a single multiplication operation until that recursive call
      reaches a base case! In other words, if we hit a 0 and have to break the
      recursion, we can simply return 0 all the way back up the recursive stack.
      Both of our problems, solved just like that.
    </p>
    <p>
      So, what are the downsides of using continuations in your code? Well
      obviously, every time you create a continuation, you incur the overhead of
      that initialization. Spoilers: that isn’t very much overhead. The real
      danger of continuations is that they are not tail-recursive. Tail
      recursion is something you likely ran across in your study of OCaml.
      Essentially, if a function calls on another function and is guaranteed to
      return the value that the called function returns, the caller knows that
      the callee is allowed to overwrite its stack space. In the case of
      recursion, this allows us to avoid overflowing the stack, as each
      recursive call replaces the last on the stack. Procedures utilizing
      continuations don’t have this luxury, and, as a result, they can be quite
      memory-intensive if you’re not careful.
    </p>
    <p>
      On a more general level, this idea of continuations can be used to
      implement many higher-level features that we may be more familiar with.
      After all, we did say that continuations are present in other languages
      we’ve used. Some examples of these features include exception handling,
      coroutines, green threads (multithreading on a single CPU), etc.
    </p>
    <p>
      To close out, we’re going to discuss the CPS: the Child Protection Servi-
      wait wrong script. CPS stands for the Continuation Passing Style: a way to
      take advantage of continuations without directly calling call/cc.
      Essentially, CPS revolves around passing an extra argument with each
      function call. For instance, if we were to write the above prod procedure
      in CPS, we’d write something like:
    </p>
    <img src="@/assets/CS131/img84.png" />
    <p>
      Instead of calling any built-in function to handle the continuation, we
      simply build it and pass it ourselves through a lambda expression. Go
      ahead. Break that example down. Test yourself for your own good, because
      you better bet this is showing up on your final.
    </p>
    <p>
      Breaking away from Scheme to close out our discussion, CPS can actually be
      implemented in other languages as well. If you think about it, all you
      need to be able to do is pass function calls. In fact, CPS is exactly how
      C++ supports an object-oriented programming style – it passes a self
      parameter to each function that points to the object the function should
      be executed on.
    </p>
    <h2 ref="6">Unit 6: Language Principles</h2>
    <p>
      There we go, we’re done with the core languages for this class. All that
      lies ahead of us is a short dive into some general principles of
      programming languages that we should be aware of. In other words,
      relatively smooth sailing up ahead. Just get ready for lots of abstract
      thinking and cost-benefit analysis.
    </p>
    <p>
      Now, due to the nature of not having a base language to reference back to,
      these sections are going to be messy. We’re going to be jumping from topic
      to topic like we’re on crack, with relatively few connections between
      sections. Just think of it as a last little sprint to the finish line.
      Because normal Eggert curriculum isn’t chaotic or fast-paced enough right?
    </p>
    <h3 ref="6.1">Unit 6.1: Garbage Collection</h3>
    <p>
      Throughout this course, we’ve brought up garbage collection a handful of
      times when we’ve been introducing languages. Now it’s time to look at how
      they work.
    </p>
    <p>
      Garbage collectors are used as a way to manage the heap. Languages that
      implement garbage collectors generally do their best to take memory
      allocation out of the hands of the programmer and assign that
      responsibility to the garbage collector. This helps with the program’s
      reliability, but not without a cost to performance.
    </p>
    <p>
      Before we can really talk about the garbage collectors themselves, we need
      to look at the structure they operate on: the heap. Unlike stacks, heaps
      aren’t LIFO. They aren’t even FIFO. In fact, memory in the heap is more or
      less randomly assigned. This obviously makes managing them challenging.
    </p>
    <p>
      The first issue that needs to be addressed when we look at managing the
      heap is how to deal with roots. Roots are pointers located outside of the
      heap that point into the heap. Roots give us a gateway into the heap,
      allowing us to keep track of objects that are otherwise allocated at
      random. Managing their locations is pivotal to the allocation/deallocation
      problem. In CS 31/32 we saw that C/C++ handled this question by forcing
      the programmer to manually keep track of these roots themselves. We did
      this through new and delete expressions, and, as you may fondly remember,
      this left us vulnerable to memory leaks. The garbage collector approach
      handles this issue using a heap manager to keep track of roots, which can
      then be freed by the garbage collector automatically. This removes the
      possibility of the programmer making dumb mistakes in memory allocation
      and bloating their program.
    </p>
    <p>
      Now that we can locate the data that is present in the heap, how can we
      locate the places where data isn’t present? This is the big problem when
      it comes to garbage collection. The easiest solution is to simply maintain
      a “free list” – a list of heap addresses that are free. This free list is
      then stored in the free sections of the heap themselves for space
      efficiency. The problem with this method is that, as our program continues
      executing, our free space becomes more and more fragmented. If we simply
      keep track of our free areas and assign data as we find space, we’re going
      to segment our data inefficiently. To relieve our systems of some of this
      inefficiency, we coalesce adjacent free blocks together to create a more
      accurate depiction of the heap.
    </p>
    <p>
      The traditional solution for garbage collection is the MARK + SWEEP
      algorithm. This algorithm follows roots to the data they point at and
      marks those segments of data in a depth-first search fashion. This phase
      of the algorithm has a cost of O(# of objects in use + # of roots). It’s
      then followed by the sweep phase, which walks through the objects in the
      heap, freeing any unmarked objects. In a traditional garbage collector,
      this occurs whenever storage is running low. The downside of this is that
      runtimes can start getting unpredictable as storage gets full, since MARK
      + SWEEP has substantial overhead and can be triggered by small
      allocations.
    </p>
    <p>
      Another approach to garbage collection involves reference counts. These
      are essentially counters on each object that keep track of how many
      pointers reference that object. When this count reaches 0, the garbage
      collector knows that object is safe to free, and it immediately does so.
      Although pointer assignment is slowed down by this overhead, its generally
      ignored as Python isn’t meant to be all that efficient anyways. The bigger
      concern when using reference counts is that it completely breaks on
      circular data structures. These aren’t all that common anyways, so
      reference counts are looking pretty nice.
    </p>
    <p>
      The final approach we’re going to look at is the most involved:
      generation-based garbage collection. This method splits the heap into
      segments called generations. Data located in older generations is assumed
      to be more stable and less likely to be deallocated because it’s been
      there for so long. Meanwhile, data in newer generations is treated as
      unstable and more likely to be deallocated. This is especially true of the
      newest generation, called the nursery. Since the majority of garbage is
      going to be located here, the garbage collector is allowed to focus on
      this area. This allows the hardware to make better use of caching. When
      storage begins to run out, we can clean out the nursery by copying all of
      the elements in it into a new nursery, coalescing all free space to the
      front of the nursery.
    </p>
    <p>Whew. Wall of text over. On to the next topic!</p>
    <h3 ref="6.2">Unit 6.2: Parameter Passing</h3>
    <p>
      Another thing we must consider when building a language is how we want to
      pass our parameters.
    </p>
    <p>
      The most common method is what we see in C/C++: call by value. In a call
      by value system, the caller evaluates the argument, gets a value, then
      passes a copy of that value to the callee. This localizes any changes to
      the value made by the callee. This convention provides good isolation
      between caller and callee, but bears the cost of copying the original
      value. If that original object is large enough, this copy can elicit
      substantial performance issues.
    </p>
    <p>
      The next method is another one we’ve seen in C++: call by reference. In a
      call by reference system, the caller evaluates the argument to get its
      address, then passes the address to the callee. This allows the callee to
      modify the caller’s objects, which can simplify the API at the cost of
      aliasing. This passing convention allows us to pass large objects easily,
      as we don’t need to copy them to pass them.
    </p>
    <p>
      Now, onto newer territory. The language Ada has a calling convention known
      as call by result. In call by result systems, the caller doesn’t evaluate
      the argument, it just says where the argument is. The callee will then
      proceed to initialize the corresponding parameter, then copy that
      parameter back to the caller upon returning. Essentially, the caller
      provides a location for a value and the callee initializes and copies into
      that value.
    </p>
    <p>
      Yet another convention found in Ada is call by value-result. In this
      convention, the caller passes a copy of the value to the callee, which can
      then modify a local version of that value. Upon returning, this local copy
      is then passed back to the caller.
    </p>
    <p>
      Another passing convention is the call by name. In a call by name system,
      the caller doesn’t evaluate its argument. Instead, the caller builds a
      structure known as a thunk using the argument. This thunk is a
      parameter-less procedure that can be called by the callee to return the
      value of the argument. This allows the callee to avoid doing unnecessary
      work when an argument isn’t used during its execution. The obvious
      downsides to this method are that you acquire an overhead from building
      thunks in the first place, and you also sustain performance implications
      of calling a function every time you access a parameter.
    </p>
    <p>
      The final convention we’ll touch on is the call by need. Call by need
      systems take the idea of call by name and make it more
      optimization-friendly. Like call by name, call by need systems pass thunks
      rather than parameters. However, if the callee calls the thunk, the return
      value is cached, allowing the callee to access that parameter without a
      function call in the future.
    </p>
    <p>
      Beyond these parameter passing conventions, we may also see more
      specialized examples of parameter passing. Unification in Prolog is a good
      example of this. So are macro calls in C/C++/Scheme. The point is, passing
      parameters, which seems so simple on the surface, actually has a lot of
      depth and ramifications for a language.
    </p>
    <h3 ref="6.3">Unit 6.3: Object-Oriented Models</h3>
    <p>
      Alright, as much as we’ve talked about some object-oriented languages like
      C++, Java, and OCaml, we haven’t actually done much in the way of
      object-oriented programming. That’s not going to change in this section.
      Here, we’ll be learning about some of the components of an object-oriented
      language.
    </p>
    <p>
      We should start off by saying that the term “object-oriented programming”
      can’t just be boiled down to writing a program in an object-oriented
      language. We written programs in OCaml, Java, C++ etc. Did they seem that
      object-oriented to you? On the flipside, it’s also possible to apply
      object-oriented programming to non-object-oriented languages, like C. At
      the end of the day, object-oriented languages just make it easier to write
      code in an object-oriented style, nothing more.
    </p>
    <p>
      Adding to the confusion, the computer science world hasn’t formally
      defined what it means to be an object-oriented language. There are simply
      too many approaches to existing object-oriented languages to fit within a
      single definition. For instance, should object-oriented languages be
      statically or dynamically checked? C++ says statically, but JavaScript
      says dynamically. Should object-oriented languages employ single
      inheritance like Java or multiple inheritance like Python? Can subclasses
      omit parent methods? What should classes be able to inherit? Can classes
      delegate implementations of methods to the method of another object?
      Depending on who you ask, the answer to these questions will vary.
    </p>
    <p>
      Perhaps the most important divide in object-oriented languages is the
      divide between class-based languages and prototype-based languages.
      Classes bundle together fields and methods, offer namespace control, are
      instantiable and inheritable, and are types. On the other hand, prototypes
      are objects that have been initialized a specific way with instance
      variables and methods. A class-based approach tends to be more common when
      it comes to programming languages for a few reasons. For one, the
      class-based approach was used first, so inertia keeps it on top. In
      addition, the prototype-based approach typically falls back on dynamic
      checking, which means that the static checking of the class-based approach
      adds a welcome performance increase. Finally, the static checking of the
      class-based approach offers freedom from certain subsets of bugs, giving
      languages that use it a sense of reliability absent from prototype-based
      languages.
    </p>
    <p>Woo. Done.</p>
    <h3 ref="6.4">Unit 6.4: Exception Handling</h3>
    <p>
      When it comes to exception handling, we want to clarify a few terms. An
      error is some issue that occurs in the programmer’s head. A fault is some
      latent bug in the program that can be detected by reading the source code.
      A failure is when the behavior of the program is busted, and the broken
      behavior is visible to the user.
    </p>
    <p>
      In this section, we’ll be focusing on faults and failures and how to
      address them.
    </p>
    <p>
      The technique we’re most familiar with is static checking. We’ve probably
      gone over it a hundred times by now, but we’ll do it again. Static
      checking is arguably the most reliable technique we’re going to cover
      here. If static checking finds something wrong, then the program will not
      run. As a result, we know that if we pass static checking, then the
      program is free of any of the failures that were statically checked. The
      issue with this method is that it isn’t very flexible. By nature, static
      checkers have to be conservative, so it’s possible they may set off false
      alarms. This may lead to a need to find workarounds for otherwise valid
      code – not fun. Static checkers are also limited in what they can protect
      against. For instance, it’s extremely hard to provide any sort of static
      checking that protects against subscript errors. As a result, we need some
      other techniques to fall back on.
    </p>
    <p>
      The next attempt at addressing faults and failures are preconditions.
      These are logical expressions that can be associated with a function. When
      a caller calls said function, it takes on a responsibility to make that
      logical expression hold true. This allows the callee to assume that the
      expression will hold true during its execution. These are implemented with
      a mixture of runtime and compile-time checks and give the programmer a
      little bit more flexibility in protecting their code.
    </p>
    <p>
      Another method is total definition: the definition of all behavior that
      may result in failures. A great example of this is value initialization.
      As you’re likely aware, C/C++ doesn’t initialize primitives upon
      instantiation. The use of an uninitialized value is classified as
      undefined behavior, which is a failure. Java fixes this using total
      definition by initializing every variable when its instantiated.
      Sacrificing some efficiency and readability, Java eliminates the
      possibility of a failure due to uninitialized values.
    </p>
    <p>
      It’s also worth mentioning the fatal handling of failures. This method is
      simple: when a program fails, crash it. The benefit of using this method
      is that your program can crash reliably. A big part of debugging is
      stabilizing your failures so that you can actually figure out what’s going
      wrong. Fatal handling is a simple way of doing so.
    </p>
    <p>
      Finally, the big cheese: exception handling. By now, you’ve probably made
      use of a handful of try-catch-finally blocks, but we’ve never considered
      how they’re implemented. Without going into too much detail, we can say
      that catch clauses act as checkpoints. When your program hits an
      exception, it walks back through the stack, popping any frames and
      executing any finally clauses. It only stops this backtrace when it
      reaches a catch clause. This structure makes points of failure very clear
      and adds a degree of readability not present in the other methods. On the
      other hand, it forces the developer to be hyperaware of the control flow
      of the program, while also stopping certain optimizations made by the
      compiler.
    </p>
    <p>Nobody’s perfect. Pick and choose what’s best for you.</p>
    <h3 ref="6.5">Unit 6.5: Semantics</h3>
    <p>
      At the beginning of the course, we spent a considerable amount of time
      talking about the syntax of a programming language. It seems fitting that
      we close out the course by talking (briefly) about semantics.
    </p>
    <p>
      Semantics is, more or less, everything in a language that isn’t considered
      part of the syntax. Due to the scope of that classification, we divide
      semantics into 2 parts: static semantics and dynamic semantics. Static
      semantics can be identified easily before a program’s execution. This
      includes things such as scope checking and type checking. Dynamic
      semantics require the program to be run ton be identified.
    </p>
    <p>
      Let’s start with the easier subcategory: static semantics. These are
      handled in a similar way to syntax – using a grammar. In the case of
      static semantics, we call this grammar an attribute grammar. These
      grammars add information to each grammar rule, allowing us to track static
      semantics alongside verifying syntax validity.
    </p>
    <p>
      Now for the other half of the section: dynamic semantics. There are 3 ways
      to tackle dynamic semantics – operational semantics, axiomatic semantics,
      and denotational semantics.
    </p>
    <p>
      In operational semantics, you say what a program does in terms of the
      operations it performs. You can think of this through the lens of
      imperative programming. In axiomatic semantics, you give axioms and rules
      of inference to allow you to reason about how a program will behave. This
      should be thought about through the lens of logic programming. Finally
      denotational semantics represent programs as a function from program to
      meaning, which, in turn, is another function from input to output. As
      you’ve probably already guessed, this means that denotational semantics
      should be thought of along the same lines as functional programming.
    </p>
    <h2 ref="after">Afterword</h2>
    <p>
      We’ve made it out alive. We may have been egged a few times along the way,
      but things could be worse. Personally, I enjoyed the class. I have no idea
      what I’m going to get in the class considering grades come out slower than
      my mile time, but I’m optimistic. By now, you’ve probably got a good idea
      about how right CS is for you, and if you’ve made it this far, well, you
      can make it the rest of the way.
    </p>
    <p>
      Now, I’m no Paul Eggert, so I’m sure my teaching of this material was
      subpar at best. I did what I could to give a concise, simplified view on
      some fairly challenging material, so don’t ask me to do more. Somehow, I’m
      still writing these guides after 3 quarters even though I’m pretty sure
      I’m just typing into the void. If I helped you, well, great! Let me know
      how I can help you better.
    </p>
    <p>Thanks for reading!</p>
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