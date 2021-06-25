<template>
  <div class="csm51a">
    <h1>Surviving CS M51A</h1>
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
      Unit 1: Data Representations
    </h3>
    <h4
      class="link"
      @click="() => $refs['1.1'].scrollIntoView({ behavior: 'smooth' })"
    >
      1.1: Systems
    </h4>
    <h4
      class="link"
      @click="() => $refs['1.2'].scrollIntoView({ behavior: 'smooth' })"
    >
      1.2: Boolean Algebra
    </h4>
    <h4
      class="link"
      @click="() => $refs['1.3'].scrollIntoView({ behavior: 'smooth' })"
    >
      1.3: Logic Gates
    </h4>
    <h4
      class="link"
      @click="() => $refs['1.4'].scrollIntoView({ behavior: 'smooth' })"
    >
      1.4: Minterms and Maxterms
    </h4>
    <h3
      class="link"
      @click="() => $refs['2'].scrollIntoView({ behavior: 'smooth' })"
    >
      Unit 2: Combinational Systems
    </h3>
    <h4
      class="link"
      @click="() => $refs['2.1'].scrollIntoView({ behavior: 'smooth' })"
    >
      2.1: CMOS Transistors
    </h4>
    <h4
      class="link"
      @click="() => $refs['2.2'].scrollIntoView({ behavior: 'smooth' })"
    >
      2.2: Transmission Gates
    </h4>
    <h4
      class="link"
      @click="() => $refs['2.3'].scrollIntoView({ behavior: 'smooth' })"
    >
      2.3: Timing Analysis
    </h4>
    <h4
      class="link"
      @click="() => $refs['2.4'].scrollIntoView({ behavior: 'smooth' })"
    >
      2.4: Karnaugh Maps
    </h4>
    <h3
      class="link"
      @click="() => $refs['3'].scrollIntoView({ behavior: 'smooth' })"
    >
      Unit 3: Sequential Systems
    </h3>
    <h4
      class="link"
      @click="() => $refs['3.1'].scrollIntoView({ behavior: 'smooth' })"
    >
      3.1: States
    </h4>
    <h4
      class="link"
      @click="() => $refs['3.2'].scrollIntoView({ behavior: 'smooth' })"
    >
      3.2: State Reduction
    </h4>
    <h4
      class="link"
      @click="() => $refs['3.3'].scrollIntoView({ behavior: 'smooth' })"
    >
      3.3: D Flip-Flops
    </h4>
    <h4
      class="link"
      @click="() => $refs['3.4'].scrollIntoView({ behavior: 'smooth' })"
    >
      3.4: Timing Parameters
    </h4>
    <h4
      class="link"
      @click="() => $refs['3.5'].scrollIntoView({ behavior: 'smooth' })"
    >
      3.5: Analysis
    </h4>
    <h4
      class="link"
      @click="() => $refs['3.6'].scrollIntoView({ behavior: 'smooth' })"
    >
      3.6: Design
    </h4>
    <h3
      class="link"
      @click="() => $refs['4'].scrollIntoView({ behavior: 'smooth' })"
    >
      Unit 4: Components
    </h3>
    <h4
      class="link"
      @click="() => $refs['4.1'].scrollIntoView({ behavior: 'smooth' })"
    >
      4.1: Decoders and Encoders
    </h4>
    <h4
      class="link"
      @click="() => $refs['4.2'].scrollIntoView({ behavior: 'smooth' })"
    >
      4.2: Multiplexers and Demultiplexers
    </h4>
    <h4
      class="link"
      @click="() => $refs['4.3'].scrollIntoView({ behavior: 'smooth' })"
    >
      4.3: Adders
    </h4>
    <h4
      class="link"
      @click="() => $refs['4.4'].scrollIntoView({ behavior: 'smooth' })"
    >
      4.4: Comparators
    </h4>
    <h4
      class="link"
      @click="() => $refs['4.5'].scrollIntoView({ behavior: 'smooth' })"
    >
      4.5: Shift Registers
    </h4>
    <h4
      class="link"
      @click="() => $refs['4.6'].scrollIntoView({ behavior: 'smooth' })"
    >
      4.6: Modulo Counters
    </h4>
    <h3
      class="link"
      @click="() => $refs['after'].scrollIntoView({ behavior: 'smooth' })"
    >
      Afterword
    </h3>
    <h2 ref="intro">Introduction</h2>
    <p>Welcome to yet another low-level course. Sigh.</p>
    <p>
      Right off the bat, I want to say that this guide will not be good. I hate
      low-level content, and I’m simply not going to make the effort to learn
      everything there is to know about digital systems. Furthermore, I’m taking
      this course with Professor Abari during COVID. What that means is that I
      don’t have exams. I have 10 homework assignments, and that’s it. Clearly,
      I’m not taking as rigorous a course as the majority of M51As out there.
      Even now, I’m aware of a different professor that has taken ample time to
      dive into Verilog, which doesn’t show up in this guide since Abari never
      touched on it.
    </p>
    <p>
      With all these factors in mind, I want to tell you not to expect much. I’m
      willing to do whatever I can within the context I’ve given you, but I’m
      not going above and beyond here.
    </p>
    <p>
      Ok, I’m supposed to actually put some course-relevant information here or
      something. This course is going to take a very low-level view of how
      computers work. If you’ve taken CS 33, think even lower-level than that.
      In general, concepts here are going to be simple. At the same time,
      they’re going to build off of each other pretty fast. If you keep up,
      you’ll have no problem securing an A here. If you fall behind, well,
      don’t.
    </p>
    <h2 ref="1">Unit 1: Data Representations</h2>
    <p>
      Before we get into anything too technical, we’re going to be setting up
      our foundations. Nothing hard in this unit, so don’t stress about it. In
      fact, there’s a good chance you’ve already learned a significant amount of
      the material here.
    </p>
    <p>
      All I ask of you is that you make sure you’re comfortable with this stuff
      before moving on. No one’s gonna blame you for skimming this stuff. I know
      I’d do the same. Just be responsible for yourself and use whatever
      resources you have available to succeed :).
    </p>
    <h3 ref="1.1">Unit 1.1: Systems</h3>
    <p>
      Ok, computer science brain aside for one second. What is a system? From a
      very high-level perspective, a system is composed of an input, an output,
      and a function that bridges the two. Pointless graphic coming up:
    </p>
    <img src="@/assets/CSM51A/img1.png" />
    <p>
      Now, let’s bring this into the context of computer science. For our
      purposes, there are 2 main types of systems: analog and digital.
    </p>
    <p>
      An analog system has a continuous stream of input and output. Analog
      systems dominate the real world (yuck), modelling everything from the
      sounds you hear to the temperature of the air around you. Think about it,
      when you hear a sound or see a light, there isn’t a numerical value
      attached to what you’re hearing/seeing. Everything we process is just a
      continuous stream of stimuli that we internalize and then respond to when
      necessary.
    </p>
    <p>
      On the other hand, digital systems function off of discrete values. While
      our world really behaves like an analog system, we like to view it through
      a digital lens. Is that video playing too quietly? Crank the volume up to
      100. Screen too dim? Put the brightness up to max. Of course, all these
      values are arbitrary, but they make sense to us. It’s much more meaningful
      to say that it’s 70 degrees outside rather than trying to say that it’s
      just the right temperature for a picnic at Sunset Rec.
    </p>
    <p>
      That’s one of many reasons we tend to be drawn towards digital
      representations rather than analog. Digital representations allow us to
      process numerical and non-numerical information on general-purpose
      systems, represent data simply using binary, reduce noise in data,
      increase precision, capitalize on advancements in microelectronics
      technologies, and balance a trade-off of speed and cost, among other
      things.
    </p>
    <p>
      Sounds pretty useful right? Well, how do we wanna represent them so we can
      actually use it? We’ll generally write out our inputs, outputs, and
      function specification using set notation, which you may be familiar with
      if you’ve taken Math 61. I won’t bother explaining it here, but if you
      want a refresher, check out that guide. Since that can sometimes be
      overkill for some functions, we also typically use tables or logical
      expressions.
    </p>
    <p>
      To cap off this discussion, we have to get a little more specific when it
      comes to digital systems. There are 2 types of digital systems:
      combinational and sequential. A combinational system’s output doesn’t
      depend on previous inputs. An easy way to think about this is that
      combinational systems don’t have memory:
    </p>
    <img src="@/assets/CSM51A/img2.png" />
    <p>
      On the other hand, a sequential system does depend on prior inputs; they
      maintain memory:
    </p>
    <img src="@/assets/CSM51A/img3.png" />
    <p>
      To help with your understanding, let’s say I asked what the temperature
      was right now. That question would be solved with a combinational system.
      However, if we want to know what the average daily temperature was over
      the past week, we’d be a little more hard-pressed to find a combinational
      solution. Realistically, we’d use a sequential solution, where we track
      the daily temperature of the last set of days and then calculate the
      average from there.
    </p>
    <p>
      To properly close off our first chapter, we need to discuss binary
      arithmetic and principles of overflow. However, I’ve already written that
      topic up for CS 33, so I’ll just redirect you over there real quick
      (Chapters 1.1-1.3). See you on the next page!
    </p>
    <h3 ref="1.2">Unit 1.2: Boolean Algebra</h3>
    <p>
      More easy stuff ahead, yay. This topic is more or less what it sounds
      like. Booleans have 1 of 2 values: true or false. Boolean algebra uses
      certain operators to manipulate these values. Nothing mind blowing here.
    </p>
    <p>
      We’ll start by introducing our operators: +, ·, and '. In English, these
      represent or, and, and complement, respectively. I’m going to assume you
      understand the fundamentals of those operations, and I’ll leave you with
      the tabular representation here:
    </p>
    <img src="@/assets/CSM51A/img4.png" />
    <p>
      From these operators, we can now construct expressions that look like:
    </p>
    <img src="@/assets/CSM51A/img5.png" />
    <p>
      Just like regular algebra, we can solve this expression step-by-step when
      given an input:
    </p>
    <img src="@/assets/CSM51A/img6.png" />
    <p>
      Since these expressions have a very limited number of inputs and outputs
      due to their boolean nature, we can compile input and output matchings in
      a truth table:
    </p>
    <img src="@/assets/CSM51A/img7.png" />
    <p>
      To be honest, there isn’t much more to this. It’s hard to make math
      complicated when it’s made up of 1s and 0s. I’ll leave you with a table
      that shows some of the properties of boolean algebra that’s going to take
      me so long to make, despite the fact that you will look at it for ~2
      seconds total:
    </p>
    <img src="@/assets/CSM51A/img8.png" />
    <p>
      Could I spend time proving each and every one of these to you? Yes. Will
      I? Absolutely not. It’s more or less just common sense, ok? Let’s just
      move on with our lives.
    </p>
    <h3 ref="1.3">Unit 1.3: Logic Gates</h3>
    <p>
      Obviously the data representations we’ve covered so far communicate
      everything we really need to know. However, they can get pretty messy
      pretty quickly, so let’s briefly touch on a more visual representation. If
      we want to use logic gates to represent our systems, we’re going to need
      to familiarize ourselves with some core symbols:
    </p>
    <img src="@/assets/CSM51A/img9.png" />
    <p>
      You know what? Those aren’t perfect, but they’re a lot better than I
      expected. Go me.
    </p>
    <p>
      So, in each of the symbols above, we’ll have some n inputs that would be
      written on the left side, leading to a single output on the right side.
      There’s really not much more to it than that. We’ll finish off the short
      section with an example, and then we can move on.
    </p>
    <p>
      Let’s say we want to draw the logic gate design for the following
      expression:
    </p>
    <img src="@/assets/CSM51A/img10.png" />
    <p>
      We’ll start by getting the correct logic gate notation for each term. For
      our first term, we simply have to complement the input x:
    </p>
    <img src="@/assets/CSM51A/img11.png" />
    <p>
      Our next term is going to require the representation of 2 inputs as we AND
      them together:
    </p>
    <img src="@/assets/CSM51A/img12.png" />
    <p>
      Finally, a slight modification of our last step brings us to our final
      component:
    </p>
    <img src="@/assets/CSM51A/img13.png" />
    <p>
      With all of that done, we can simply link all our individual components
      together using an OR gate and we’ll be all set:
    </p>
    <img src="@/assets/CSM51A/img14.png" />
    <p>
      Now, since we didn’t do an example using the boolean properties we
      introduced last section, we’ll take the opportunity to do one here. Let’s
      look back at our original expression:
    </p>
    <img src="@/assets/CSM51A/img15.png" />
    <p>
      We have a couple ways we can simplify this. Let’s start out with the most
      obvious. Recall the property of absorption:
    </p>
    <img src="@/assets/CSM51A/img16.png" />
    <p>We can use this property to simplify the rightmost terms as follows:</p>
    <img src="@/assets/CSM51A/img17.png" />
    <p>Now, our expression looks something like:</p>
    <img src="@/assets/CSM51A/img18.png" />
    <p>This happens to perfectly match the property of simplification:</p>
    <img src="@/assets/CSM51A/img19.png" />
    <p>
      And now, we can very easily represent our simplified expression using
      logic gates:
    </p>
    <img src="@/assets/CSM51A/img20.png" />
    <p>
      With all of that under our belt, we can spend the last section tying up a
      lot of what we learned under a single concept, which should give you a
      nice opportunity to make sure you’re clear on everything so far.
    </p>
    <h3 ref="1.4">Unit 1.4: Minterms and Maxterms</h3>
    <p>
      Alright, I promise there’s nothing too complicated here. I want to be
      finished with this unit, so let’s just get right into the things.
    </p>
    <p>
      When we’re discussing minterms and maxterms, we’re trying to create a
      standard for representing systems. Since we want everything to be as
      standardized as possible, we’re always going to be concerned with
      representing every single input available to us.
    </p>
    <p>
      When it comes to minterms, this means that we will be AND-ing each of the
      inputs together. Each minterm will take the form of:
    </p>
    <img src="@/assets/CSM51A/img21.png" />
    <p>
      Obviously, this is assuming that the system this minterm belongs to has n
      inputs. Ok, so what the hell does this notation even mean? In essence,
      we’re trying to represent a possible combination of inputs that will cause
      our system to return 1. We’ll get a better idea of what this means in a
      second when we do an example, but for now, let’s get a little bit more of
      our notation out of the way.
    </p>
    <p>
      Given an input bit string that results in a 1 being returned from our
      system, we need to pay attention to where the 1s and 0s occur to write our
      minterm. Whenever a 0 occurs in our input, the corresponding digit in our
      minterm must be complemented. So, given a successful input of:
    </p>
    <img src="@/assets/CSM51A/img22.png" />
    <p>We’d write the corresponding minterm as:</p>
    <img src="@/assets/CSM51A/img23.png" />
    <p>
      Since the 2nd and 3rd digits of the input were 0s. As a result, we must
      complement the 2nd and 3rd digits of our minterm. Well that seems horribly
      arbitrary and almost like I’m making this all up on the spot. Well, I
      invite you to use a couple of those CS brain cells that have been hiding
      away for the entirety of this guide. Like I said, the point of a minterm
      is to represent some way to have our system return 1. With that in mind,
      try plugging in the original input to the expression above. All the 1s
      stay 1s and all the 0s are complemented so that they become 1s. This
      allows the term above to evaluate to a 1. In fact, this input is unique,
      in that any other input would return 0 from our derived expression.
      That’ll become handy in a second.
    </p>
    <p>
      In an effort to clear up some possible confusion, we could’ve just as
      easily written the above minterm as:
    </p>
    <img src="@/assets/CSM51A/img24.png" />
    <p>
      The choice of symbol isn’t part of minterm notation, it’s part of our
      input representation. To standardize everything, minterm notation has us
      write this as:
    </p>
    <img src="@/assets/CSM51A/img25.png" />
    <p>
      We use 9 as the subscript because, if we interpret the input as a binary
      value, 9 is the decimal equivalent.
    </p>
    <p>
      Ok, so now we know how to get the minterm of a single input. We also know
      that a given minterm is an expression that evaluates to 1 for a unique
      input. But how does that translate to an entire system? Well, as promised,
      we’ll work with an example. Let’s say we’re given the following truth
      table:
    </p>
    <img src="@/assets/CSM51A/img26.png" />
    <p>
      When using minterms in the context of a system, we’re attempting to create
      an expression that represents all possible inputs that result in a 1. We
      know a single minterm represents a unique input that results in a 1, so
      why don’t we just or all of those unique inputs together? Easy enough
      right? All we have to do is take each of the rows above that satisfy F =
      1. That means j = 2, 3, 5. We’ll then write them as minterms:
    </p>
    <img src="@/assets/CSM51A/img27.png" />
    <p>
      Now that we have each individual minterm, we can combine them using OR‘s
      to create an expression called a sum of minterms:
    </p>
    <img src="@/assets/CSM51A/img28.png" />
    <p>
      Both of those expressions are equivalent, and the last bit of minterm
      notation will help us simplify things a little bit:
    </p>
    <img src="@/assets/CSM51A/img29.png" />
    <p>
      Take some time and think that entire process over. There’s absolutely no
      need to memorize anything when it comes to this section. If you understand
      the reasoning behind each step we’ve taken, you should be able to recreate
      each step from scratch, for any given system. We’ll get into 1 more
      example before we shake things up a little bit.
    </p>
    <p>
      What if, instead of a truth table, we were given the following expression:
    </p>
    <img src="@/assets/CSM51A/img30.png" />
    <p>
      Obviously, we could convert this expression into a truth table and then
      convert that truth table into a sum of minterms. If you’re ok with doing
      that, I’m not gonna yuck your yum.
    </p>
    <p>
      On the other hand, if you have hopes and dreams and don’t want to spend
      the best years of your life doing that, there’s another way to solve this.
      We’re going to leverage boolean algebra to eliminate that intermediate
      step. Remember, at the end of the day, a sum of minterms is still an
      expression, we just have to follow some guidelines to get there. First of
      all, each term in a sum of minterms represents every input to the system.
      Our expression doesn’t.
    </p>
    <p>
      We can take advantage of the complement property of boolean algebra to add
      those missing inputs back in:
    </p>
    <img src="@/assets/CSM51A/img31.png" />
    <p>
      As you can see, expanding the expression like this won’t change the
      outcome of our system, as everything in the parentheses will evaluate to
      1. Now, we can distribute:
    </p>
    <img src="@/assets/CSM51A/img32.png" />
    <p>
      That looks pretty close to a sum of minterms to me. All that’s left to do
      is get rid of any duplicate terms we’ve created and then get everything in
      minterm notation:
    </p>
    <img src="@/assets/CSM51A/img33.png" />
    <p>
      Ok whew, that was a lot. We’re almost done here. We’ve covered minterms,
      so how about maxterms? Maxterms have the same purpose as minterms, but
      have a slightly different approach. While each minterm is a product, each
      maxterm is a sum. This means that maxterms will take the format of:
    </p>
    <img src="@/assets/CSM51A/img34.png" />
    <p>
      In addition, remember that, for minterms, we complemented all digits in
      the minterm that corresponded to a 0 in the input. We’re going to reverse
      that here. We want to complement all digits in the maxterm that correspond
      to a 1 in the input. Therefore, for the input 1001, we would write:
    </p>
    <img src="@/assets/CSM51A/img35.png" />
    <p>
      If you couldn’t tell already, working with minterms and maxterms alongside
      each other can get a little confusing.
    </p>
    <p>
      Just like minterms, maxterms also have a special notation for each term:
    </p>
    <img src="@/assets/CSM51A/img36.png" />
    <p>
      Each minterm represents a unique input that results in an output of 1,
      whereas each maxterm represents a unique input that returns a 0. You can
      probably guess how we’re going to transform this into a system. Take the
      truth table we used for the minterm example:
    </p>
    <img src="@/assets/CSM51A/img37.png" />
    <p>
      Instead of focusing on the rows that result in a 1, we’ll focus on the
      rows that result in a 0. We’ve already done this before, so we’re going to
      pick up the pace a little here. Instead of summing up our maxterms like we
      did with our minterms, we’re actually going to take the product of all of
      them. This means that the resulting expression from this truth table will
      be a product of maxterms:
    </p>
    <img src="@/assets/CSM51A/img38.png" />
    <p>
      We can write this using the maxterm-equivalent of the shorthand we used
      for minterms:
    </p>
    <img src="@/assets/CSM51A/img39.png" />
    <p>
      Just like our discussion on minterms, we’re going to finish things off
      with an example where we have to convert an expression to a product of
      maxterms:
    </p>
    <img src="@/assets/CSM51A/img40.png" />
    <p>
      We’ll start by using the distributive property to transform this into an
      easier format to work with:
    </p>
    <img src="@/assets/CSM51A/img41.png" />
    <p>
      Now, just like in our minterm example, we’ll use the complement property
      to introduce the missing inputs into our expression:
    </p>
    <img src="@/assets/CSM51A/img42.png" />
    <p>
      We skipped a few steps there because we’re big kids now and know what
      we’re doing. We’ll finish off by rewriting everything in maxterm notation:
    </p>
    <img src="@/assets/CSM51A/img43.png" />
    <p>
      Ok, that was a lot of writing, but, hopefully, you can see that everything
      so far has been pretty simple. We’re just working on fundamentals here, so
      don’t get stressed out, take a couple minutes to make sure you’ve got a
      solid grip on everything so far, and let’s move on.
    </p>
    <h2 ref="2">Unit 2: Combinational Systems</h2>
    <p>
      Now that we’ve covered a lot of the introductory material, we can start
      diving into some more detail. In this unit, we’re going to be performing a
      lower level analysis on the concepts we covered in the last unit. It’s all
      well and good to know how to perform computations with logic gates and
      boolean algebra, but how do they do they actually work?
    </p>
    <p>
      Now, just because we’re getting a little bit deeper into the course
      content doesn’t mean this class will suddenly have a sharp increase in
      difficulty. For the most part, everything here is still going to be pretty
      easy and intuitive, so just stay on pace.
    </p>
    <h3 ref="2.1">Unit 2.1: CMOS Transistors</h3>
    <p>
      At this point in our discussion, we’ve represented our inputs and outputs
      as 1s and 0s, which we can then translate to whatever format we want
      through binary conversions and conventions. Obviously, there aren’t just
      trillions of 1s and 0s floating around in the universe waiting to be
      processed, so what gives? How do we get these 1s and 0s?
    </p>
    <p>
      The answer is through electrical signals. This could mean currents,
      charges, or, most commonly, voltages. In a very high-level view, higher
      signals will translate to a 1, while lower signals translate to a 0. In an
      ideal world, we would simply map a single signal value to 1 and a
      different signal value to 0. However, our world isn’t perfect, and our
      systems aren’t going to have the precision to consistently communicate an
      exact signal every time. Typically, this noise is accounted for by mapping
      a defined range of signals to each logical value. The exact values of that
      range will depend on the hardware implementation being used to facilitate
      this mapping.
    </p>
    <p>
      For the purposes of this section, we’re going to focus on a specific type
      of technology: complementary metal oxide semiconductors, or CMOS, systems.
      These are systems of complementary (we’ll get to this in a second)
      transistors that allow us to translate given voltages into the desired
      mappings.
    </p>
    <p>
      Each transistor in the system can be thought of as a switch in a circuit.
      When the switch is closed, there is very low resistance to current flowing
      through the transistor. When the switch is open, there is very high
      resistance to current flowing through the transistor. Physics 1B
      flashbacks who? Don’t worry, it’s very possible to get through this
      material without any of that knowledge.
    </p>
    <p>
      So what does complementary mean in this situation? In a CMOS system, there
      are n-type and p-type transistors. We’ll call them NMOS and PMOS for
      short, and they look like this:
    </p>
    <img src="@/assets/CSM51A/img44.png" />
    <p>
      I could spend a lot of time going into electricity basics here to figure
      out how these work physically, but that sounds painful. You can easily get
      by without that information, so I’ll spare both of us the headache.
    </p>
    <p>
      Each of these gates’ behavior is determined by their input voltage, which
      comes in from the left of the symbol. In an NMOS gate, high voltage closes
      the switch while low voltage opens the switch. The opposite is true of the
      PMOS gate – high voltage opens the switch while low voltage closes it. I
      personally remember this by correlating high voltage with high resistance
      and vice versa in a PMOS gate, and then remembering that NMOS is the
      opposite of PMOS. Of course, I do have substantial amounts of brain
      damage, so I’m sure there are better ways to make this differentiation. Do
      whatever floats your boat.
    </p>
    <p>
      In addition to these gates, CMOS systems also have a source and a ground.
      Handwaving the electricity side once again, we’ll just think of the source
      as high voltage and the ground as low voltage. If you’ve taken any classes
      on electricity, then yes, my descriptions are not technically correct. I’m
      not an EE major, give me a break here.
    </p>
    <p>
      To get an actual idea of how these work, let’s look at our first example:
    </p>
    <img src="@/assets/CSM51A/img45.png" />
    <p>
      Let’s start by making sure we understand what everything is in this
      diagram. The VDD at the top and the 3 lines on the bottom represent our
      source and ground, respectively. This is just a convention we’ll be using
      for this course. The x and the z are our input and output voltages.
      Finally, we have a PMOS gate on top and an NMOS gate on the bottom. In
      good system designs, we’ll always see these used together, which is why
      our overall system is described as complementary.
    </p>
    <p>
      Ok, with our problem laid out, let’s begin figuring out how our input
      affects this system. Let’s start by passing a 1 into x, or, more
      accurately, high voltage through x. Well, we know that high voltage causes
      a PMOS gate to open, while the NMOS gate will close. Up until now, we
      don’t really know what that means, but hopefully, it’ll become clear here.
      See, when a switch is closed, voltage can pass through it. Therefore, in
      the situation we’ve described thus far, we can redraw our diagram above
      as:
    </p>
    <img src="@/assets/CSM51A/img46.png" />
    <p>
      Since the top gate is a PMOS gate, there’s essentially an open switch
      between VDD and z. On the other hand, the bottom gate is an NMOS gate, so
      there’s a direct path between the ground and z. This tells us that z takes
      on the low voltage of ground, which, at a high level, means that z is
      equal to 0 when x is 1. If we perform the same analysis for a low voltage
      value of x, we’ll arrive at the following configuration:
    </p>
    <img src="@/assets/CSM51A/img47.png" />
    <p>
      Here, the path between VDD and z means that z takes on the high voltage of
      VDD. In other words, when x is 0, z is 1. As you can probably tell, we’ve
      just designed a NOT gate using transistors! Hopefully, you have a basic
      grasp on how these systems work by this point, as well as why we care
      about them.
    </p>
    <p>
      If you’re the curious type, you might be wondering what would happen if we
      had a system configuration that resulted in one of the following outcomes:
    </p>
    <img src="@/assets/CSM51A/img48.png" />
    <p>
      These are a huge no-no when it comes to CMOS design. The configuration on
      the left is called a short, and occurs when both ground and source are
      connected to the output. The configuration on the right is called a float,
      and occurs when neither ground nor source are connected to the output.
      Both are a result of bad design. Avoid them, they don’t make sense in our
      system.
    </p>
    <p>
      I’m gonna close with a more complicated example. This time around, we’re
      going to try to take a more systematic approach to help make things easy
      on us. Here’s the monstrosity:
    </p>
    <img src="@/assets/CSM51A/img49.png" />
    <p>
      This time around, our first step is going to be to construct one of those
      tables that we love so much:
    </p>
    <img src="@/assets/CSM51A/img50.png" />
    <p>
      In this table, we have the input bits, the resistances of each gate, and
      the output bit. Let’s start filling this shit out. We can see from the
      diagram that Q1 and Q2 are both PMOS gates, and are connected to A and B,
      respectively. We know that PMOS gates’ resistances match the voltage of
      the input, so high voltages will result in high resistances, and vice
      versa. Let’s start by filling that out:
    </p>
    <img src="@/assets/CSM51A/img51.png" />
    <p>
      As a quick summary, any row where A is 0, Q1 has a low resistance. Any row
      where A is 1, Q1 has a high resistance. The same can be said for B and Q2.
      Now, if we take a look at Q3 and Q4, we see that they are NMOS gates.
      There are plenty of ways you could go about getting these values. I find
      that the easiest way is to remember that Q1 and Q3 are opposites and Q2
      and Q4 are opposites. Whatever method you go with, you should arrive at:
    </p>
    <img src="@/assets/CSM51A/img52.png" />
    <p>
      Now that we have all the necessary information filled out, we can evaluate
      each of the rows for their result. I won’t redraw all the open and closed
      gates because that’s tedious and I don’t love you that much.
    </p>
    <p>
      For the first row, we can see that Q1 and Q2 are both closed. Referencing
      the diagram, we see that this connects Z with VDD. In the second row, we
      see that Q1 and Q4 are closed, connecting Z with VDD. In the third row, Q2
      and Q3 are closed, connecting Z with VDD. Finally, in the last row, Q3 and
      Q4 are closed, connecting Z with ground. Translating these results into
      bits for the table, we arrive at:
    </p>
    <img src="@/assets/CSM51A/img53.png" />
    <p>
      If we callback to our knowledge of last unit (or common sense), we see
      that we’ve just designed a NAND gate. Fun times.
    </p>
    <p>
      One last note about the design of CMOS circuits. Because life just has to
      be hard, we do have to abide by the rule that PMOS gates must connect to
      VDD, while NMOS gates must connect to ground. If you look back up at the
      examples above, you’ll see that we follow that rule in both. The reason
      for this has to do with the hardware design of the transistor itself, but
      you don’t care about that. I don’t care about that. Glad we’re on the same
      page.
    </p>
    <p>
      To be honest, all you really need is a few practice problems with this
      stuff. I recommend using a table to keep everything straight in your head,
      but even that’s not really necessary. I’m going to go sleep now. Have fun.
    </p>
    <h3 ref="2.2">Unit 2.2: Transmission Gates</h3>
    <p>
      Now that we’ve introduced ourselves to CMOS circuits and their components,
      we can take a look at another type of design: transmission gates:
    </p>
    <img src="@/assets/CSM51A/img54.png" />
    <p>
      So, what are looking at here? Essentially, we have a PMOS stacked on top
      of an NMOS. Unlike CMOS circuits, where C/C' were our only inputs, we’ll
      actually have inputs of x, C, and C' to work with. Now, let’s figure out
      how this thing works.
    </p>
    <p>
      The main thing to focus on first is C and C'. Imagine we pass in a logic
      signal of 0 as C. What happens? Well, 0 as an input to an NMOS translates
      to high resistance. The same can be said of using 1 as an input to a PMOS.
      As a result, the transmission gate overall has high resistance. We call
      this a high impedance state. Those who have taken Physics 1C just got
      PTSD-level flashbacks. Now what if we pass a 1 in as C? Using the same
      analysis we just went through, the NMOS and PMOS will both have low
      resistance, resulting in the signal carried by x to reach z. In summary:
    </p>
    <img src="@/assets/CSM51A/img55.png" />
    <p>
      In essence, our transmission gates can be either on or off. When C is 0,
      the gate is off and no signal passes through. When C is 1, the signal is
      allowed through. So what’s with the NMOS and PMOS both being used? Well,
      remember back to how we said that NMOS gates must be connected to ground
      and that PMOS gates must be connected to VDD. If we rework that rule a
      little bit, we can say that NMOS are only functional when using low
      voltage as a source, while PMOS are only functional when using high
      voltage as a source. By that logic, we have to use both types of gates,
      because, in this gate configuration, x is the source. Since x is an input
      and can be either high or low voltage, both PMOS and NMOS are required to
      transmit signal properly.
    </p>
    <p>
      Just like we did with CMOS circuits, let’s get into some design analysis.
      Here’s an XOR gate designed using transmission gates and inverters:
    </p>
    <img src="@/assets/CSM51A/img56.png" />
    <p>
      Let’s break down how this thing works. Since y is controlling the gates,
      we’ll use its signal as our reference point. When y is 0, the top gate is
      on and the bottom gate is off. Obviously, it’s the exact opposite when y
      is 1. This tells us that, when y is 0, the signal of x' goes through the
      top gate, while the signal of x goes through the bottom gate when y is 1.
      Keeping the inverter at the end in mind, we can make a table of this
      relationship as follows:
    </p>
    <img src="@/assets/CSM51A/img57.png" />
    <p>
      If you follow the logic to the end, we see that this is exactly an XOR
      relationship between x and y.
    </p>
    <p>
      I’d like to point out how we once again see this complementary design
      pattern between the top gate and the bottom gate. They work in tandem:
      when one of them is on, the other is off. This design ensures that a
      signal always reaches z. Similar to CMOS circuits, if all routes to z are
      left in a high impedance state, the entire circuit is busted. For this
      reason, you should always be designing transmission gate circuits with
      this in mind.
    </p>
    <p>
      Now, designing one of these from scratch seems awful. Where do we even
      start? Thankfully, we have a way to simplify things a little bit. In a
      given problem where we have 2 inputs x and y, and are allowed to use
      either the inputs, the complement of the inputs, or raw logic values as
      inputs, we can construct a template that looks like the following:
    </p>
    <img src="@/assets/CSM51A/img58.png" />
    <p>
      Now, let’s say we want to make an AND gate using this template. In that
      case, we can just fill it in as follows:
    </p>
    <img src="@/assets/CSM51A/img59.png" />
    <p>
      Let’s walk through this. If x is passed in as 0, then x' is 1 (duh). This
      means that the bottom gate will be off and the top gate will be on. As a
      result, the logic value 0 will automatically be passed into F. That makes
      sense, since x and y must both be 1 for F to evaluate as 1. If we take the
      other case where x is 1, then the bottom gate will be on and the top gate
      will be off. This means that the value of y will be passed into F. This
      also makes sense, since x is 1, therefore the only thing left to check if
      if y is 1. If it is, then F is 1. If it isn’t, then F is 0. In other
      words, if x is 1, then F = y.
    </p>
    <p>
      Go ahead, try and implement this for whatever gate you want to do for
      practice. I promise, it won’t be hard.
    </p>
    <p>
      Bumping up the complexity a little bit, let’s say we have the same
      constraints as in the problem above, but we add another input. What now?
      New template time:
    </p>
    <img src="@/assets/CSM51A/img60.png" />
    <p>
      In this template, we have 2 distinct sections. The top section clearly
      shows an AND relationship. Both of the gates must be on for the top signal
      to reach F. On the other hand, the bottom section shows an OR
      relationship. Only one of the gates has to be on for the bottom signal to
      reach F. This template allows us to leverage the De Morgan’s relationship
      between AND and OR, alongside the complementary nature of transmission
      gate circuits, to create more complex logical relationships. For instance,
      let’s fill this out to represent a 3-input OR gate:
    </p>
    <img src="@/assets/CSM51A/img61.png" />
    <p>
      Personally, I believe in your ability to break down this logic yourself,
      but I’ll still provide a brief overview, just because I’m nice like that.
    </p>
    <p>
      If we first take a look at the OR section, we see that the gates in this
      section are on if x or y are 1. Since this is an OR gate, this makes
      sense, as only 1 input needs to be 1 for F to evaluate to 1. In addition
      to this, if either of the gates in the OR section are on, then the
      corresponding gate in the AND section is off. This relationship is
      important, as it prevents any conflicting signals being passed to F.
    </p>
    <p>
      Now for the AND section. As you can see, the AND section only allows
      signal to pass through if both x and y are 0. If this is the case, the
      value of z will be passed to F instead of 1. This works off of the same
      logic as in our 2-input example. You’ll notice that, regardless of the
      combination of x and y inputs, either z or 1 will always be passed to F,
      preventing any float behavior.
    </p>
    <p>
      Cool cool, done done. Since we laid out most of the foundation in the
      previous section, this one shouldn’t be any trouble for you. Like with
      CMOS circuits, it’s in your best interest to just sit down and do some
      practice problems yourself so you understand the ins and outs of the
      process. Good luck!
    </p>
    <h3 ref="2.3">Unit 2.3: Timing Analysis</h3>
    <p>
      In this section, we’re switching things up a little bit. Instead of
      looking over even more low-level representations, we’re going to be
      introducing a new analysis method. I’m going to skip over the technical
      explanation because, in all honesty, I don’t care enough to understand it.
    </p>
    <p>
      From a high-level view, our goal here is essentially going to be timing
      the flow of a signal through a given gate design. These timing
      measurements are going to be represented by tpLH (low to high) and tpHL
      (high to low).
    </p>
    <p>
      When we’re analyzing a gate design, there are 4 factors that are going to
      affect timing: gate type, fan-in, load, and signal. The first of these
      should be more or less self-explanatory. AND gates are going to have
      different timings than OR gates. Fan-in refers to the number of input
      signals in a given gate. Load refers to the number of signals output from
      the given gate. Finally, signal refers to the state of the signal being
      passed into/out of the gate (low or high). All of that undoubtedly means
      very little to you right now, so we’re going to work our way through an
      example to drive this home. This drawing is going to take forever:
    </p>
    <img src="@/assets/CSM51A/img62.png" />
    <p>
      Obviously, this gate design by itself doesn’t tell us much. What we really
      need is a table of information that’ll give us the propagation delays we
      need for this example. Now where are we going to find something like that?
      Hmmm:
    </p>
    <img src="@/assets/CSM51A/img63.png" />
    <p>
      Tables aren’t useful unless you can read them, so let’s make sure we
      understand the information we’re given here. The left 2 columns are for
      identifying the type of gate we’re looking to analyze. For simplicity’s
      sake, this table only lists gates that are actually present in this
      example. The right 2 columns list the propagation delay through the given
      gate. This time represents how long it takes for the signal to pass
      through this gate. The propagation delay of a given gate design is the
      time it takes to get from a given input to the output.
    </p>
    <p>
      With all the pieces we need above us, all that’s left is the question
      itself. To start, let’s find the tpLH from d to z. If we look at the first
      gate that the signal d runs into, we see that it’s an OR gate. We also see
      that it has a fan-in of 2, as there are 2 signals flowing into it.
      Finally, we see that it has a load of 2, as it outputs to an AND gate and
      a NOR gate. From this information, we can reference the bottom row of the
      table to write:
    </p>
    <img src="@/assets/CSM51A/img64.png" />
    <p>
      From here, we run into a small problem. The path forks. Which way do we
      go? Well, the bottom way looks shorter, so let’s just go that way for now.
      Here, we run into a NOR gate with a fan-in of 2 and a load of 1. If we
      follow the same logic as above, we’d write:
    </p>
    <img src="@/assets/CSM51A/img65.png" />
    <p>
      Surprise! This is wrong. The problems come from the fact that this gate
      inverts the signal. Do I know what that means? No. All I got for you is
      that NOR gates, NAND gates, NOT gates, etc. require a slight modification
      to our methodology. Up until now, we’ve kept the state of our signal
      constant, at low to high. Since we’re inverting the signal, we need to
      invert our state to high to low. As a result, the correct term to add to
      our calculation is actually:
    </p>
    <img src="@/assets/CSM51A/img66.png" />
    <p>
      Finally, we have our last gate, a NOR gate with fan-in 2 and load 1.
      Remembering that we have to invert our signal, we can write:
    </p>
    <img src="@/assets/CSM51A/img67.png" />
    <p>
      Are we dandy yet? Not quite. One thing that we have to watch out for is
      that we are given no indication of what happens to z. For all we know, z
      could feed into a million gates right after it exits the portion of the
      gate design we’re analyzing. For this reason, the problem statement I’ve
      given you doesn’t actually have a definite answer because we don’t know
      the load of the last gate. For completion’s sake, let’s say that the last
      NOR gate has a load of 4, allowing us to properly write the expression as
      follows:
    </p>
    <img src="@/assets/CSM51A/img68.png" />
    <p>
      Ok, now we have to be done right? Still no. Remember when we forked our
      signal earlier? Let’s take a look at what happens if we were to take the
      other path. Instead of running into a NOR gate directly after the OR gate,
      we actually have to pass through an AND gate first. Filling in this extra
      information we have:
    </p>
    <img src="@/assets/CSM51A/img69.png" />
    <p>
      Now what? It seems like we have 2 different expressions for tpLH(d, z), so
      what gives? When we have multiple paths like this, we actually have to
      take the path that gives the maximum propagation delay. In our example,
      our paths are identical, except for the fact that the second one has an
      extra AND gate thrown into the mix. This similarity makes our lives easier
      since we know that the second path is guaranteed to be the longest one.
      Plugging in values and calculating, we should arrive at a final answer of:
    </p>
    <img src="@/assets/CSM51A/img70.png" />
    <p>
      Keep in mind that it just so happened that the path with more gates was
      also the path of greatest propagation delay here. This won’t always
      necessarily be true, so don’t think those 2 measurements are the same.
    </p>
    <p>
      At the end of the day, this type of problem is not hard. Keep your work
      organized and remember your inversions and you’ll get through it just
      fine. If you’re looking for a bit of extra practice, solve this same
      example for tpHL(b, z). If done correctly, you should arrive at:
    </p>
    <img src="@/assets/CSM51A/img71.png" />
    <h3 ref="2.4">Unit 2.4: Karnaugh Maps</h3>
    <p>
      This section’s a little weird. Technically, we’re introducing yet another
      low-level design of a logic circuit. However, you’re already familiar with
      this “new” design. It revolves around a very common structure that we ran
      into when we talked about minterms and maxterms: a two-level system. From
      what we’ve seen, two-level systems can take the form of AND–OR networks:
    </p>
    <img src="@/assets/CSM51A/img72.png" />
    <p>and OR–AND networks:</p>
    <img src="@/assets/CSM51A/img73.png" />
    <p>
      The thing with two-level systems is that we’re generally focused on
      designing minimal two-level systems. Minimal means we need to use as small
      of an amount of gates and inputs as possible. If you remember from our
      time designing these systems from minterms and maxterms, we typically had
      a lot of gates, which resulted in a lot of tedious work. The goal for this
      section is simplifying these networks so they’re easier to draw and
      cheaper to make.
    </p>
    <p>
      Well that sounds boring. We’re back to sum of products, product of sums,
      and boolean algebra? Lame. Boring. Awful.
    </p>
    <p>
      Instead of putting you on the fast track to suicide by making you simplify
      every expression manually until you were maybe a little bit sure that it
      couldn’t be simplified further, we’re introducing a new method for solving
      these: Karnaugh maps.
    </p>
    <p>
      First things first, I’m lazy, so we’ll be using the conventional
      abbreviation for this concept: k-maps.
    </p>
    <p>
      Let’s get into it. K-maps are essentially visualizations of switching
      functions that let us make simplifying expressions a little more
      methodical than the random trial and error we’re used to.
    </p>
    <p>
      As painful as it’s going to seem at the beginning, we’re going to build
      this concept from the ground up. Bear with me here. A k-map of 1 input is
      going to look like this:
    </p>
    <img src="@/assets/CSM51A/img74.png" />
    <p>
      Within the boxes of the k-map, we’d write the outputs of the switching
      function. In terms of the labelling, the box with A next to it represents
      the output when A = 1 and the other box represents the output when A = 0.
      We can then extend this visualization to a function with 2 inputs:
    </p>
    <img src="@/assets/CSM51A/img75.png" />
    <p>
      While still trivial, we’re going to start to see some of the properties of
      k-maps emerge. In this diagram, we’re still representing every possible
      input into this function. The column headed by A represents outputs when A
      = 1, while the row headed by B represents outputs when B = 1. When we up
      the stakes to 3 inputs, we’re going to start getting some actual use out
      of these:
    </p>
    <img src="@/assets/CSM51A/img76.png" />
    <p>Finally, we can add our fourth and last input to create:</p>
    <img src="@/assets/CSM51A/img77.png" />
    <p>
      To help you visualize what each of these inputs represent, here’s a k-map
      where each output is labelled by it’s input in decimal form:
    </p>
    <img src="@/assets/CSM51A/img78.png" />
    <p>
      Of course, there are functions that have more than 4 inputs. However, for
      any such functions, we won’t expand the table anymore. Instead we’ll just
      duplicate the existing table to represent the next input. So if we added a
      fifth input, we’d simply draw something like:
    </p>
    <img src="@/assets/CSM51A/img79.png" />
    <p>
      For our purposes, we’ll be sticking with 4-input k-maps because anything
      beyond that is just tedious and uninteresting.
    </p>
    <p>
      Ok, so why go through all this convoluted setup? What makes a k-map any
      different than a truth table? To answer that question we have to walk
      through an example. Let’s say we’re given the following minterm
      expression:
    </p>
    <img src="@/assets/CSM51A/img80.png" />
    <p>
      How can we fill out our k-map to represent this expression. Well, it’s
      pretty simple actually. Since we’re dealing with a minterm expression, we
      know that using the binary translation of the decimal values above as
      input will result in an output of F = 1. We can then reference the above
      indexing of the 4-input k-map to find where these 1s belong:
    </p>
    <img src="@/assets/CSM51A/img81.png" />
    <p>
      Adding on to this, we know that all other inputs will result in F = 0, so
      we can fill in the rest of the k-map so it doesn’t feel left out:
    </p>
    <img src="@/assets/CSM51A/img82.png" />
    <p>
      Of course, not all expressions will be given to you in this format, but it
      shouldn’t be that huge of a leap to figure out how to arrive at the same
      results.
    </p>
    <p>
      Ok, so what now? Here’s where the beauty of k-maps comes in. Once we’ve
      represented our expression as a k-map, we can simplify our expression
      visually rather than through boolean algebra. How?
    </p>
    <p>
      Let’s start with writing a simplified sum of products. Just like normal
      SOPs, we’re going to focus on the 1s above. When we filled out the table
      above, we essentially took each minterm (something in the format of ABCD)
      and wrote it directly in the cell it corresponds to. However, keep in mind
      that, unlike minterms, SOP expressions do not require each input to be
      present in each term. Something like ABC is a perfectly valid SOP term.
    </p>
    <p>
      That concept is what k-maps capitalize on. They do this through adjacency.
      Think all those weird Candy Crush-style mobile games. When we have 2 1s
      next to each other like in the bottom right of the k-map above, it let’s
      us simplify things. Why? Well, take a look at the inputs. Both 1s fall in
      the range where B = 0, C = 0, and D = 1. The only input that actually
      changes is A. As a result, both of these inputs are covered by the term
      BC'D. The value of A doesn’t matter, the output will be 1 either way.
    </p>
    <p>
      Let’s really take advantage of this. This property that holds for 2
      adjacent 1s also holds for 4 adjacent 1s and 8 adjacent 1s. Of course
      there are some restrictions. After all, the reason these work in the first
      place is because we can group our outputs under common inputs. Regardless
      of whether you’re grouping 2, 4, or 8 inputs, you have to constrain this
      grouping into a rectangle. These rectangles can cross from the left
      boundary to the right boundary, as well as from the top boundary to bottom
      boundary, Pac-Man style. The more outputs you group in 1 rectangle, the
      simpler your expression becomes. You’ll know when you’re done solving the
      k-map when there are no more 1s to group. Take the above k-map for
      example. We can group the left and right columns together as follows:
    </p>
    <img src="@/assets/CSM51A/img83.png" />
    <p>
      We can then address the 2 1s in the top half of the third column. But
      wait, before you group them as a grouping of 2, you should know that
      you’re allowed to use 1s that have already been grouped together. Remember
      that the goal should always to be to use as big of a rectangle as
      possible. Keeping these in mind, we can address these 1s with this
      grouping:
    </p>
    <img src="@/assets/CSM51A/img84.png" />
    <p>
      Finally, we have the last 1 in the third column. Once again, don’t fall
      for the easy grouping option and remember that we can wrap around:
    </p>
    <img src="@/assets/CSM51A/img85.png" />
    <p>
      Now what? We can take these grouping and translate them into terms based
      on the variable headers surrounding the k-map. Reference the example above
      if you need help with this. If done correctly, you’ll see that our new,
      simplified expression is:
    </p>
    <img src="@/assets/CSM51A/img86.png" />
    <p>
      There we go. Starting from a function with like a million (11) terms,
      we’ve used a k-map to create an equivalent expression using just 3 terms.
    </p>
    <p>
      As a quick overview of the process we just went through, we filled out our
      k-map using our original expression, we grouped all 1s together in
      rectangles of size 1, 2, 4, or 8, we translated these groupings into terms
      by analyzing what inputs remained constant throughout the entire grouping,
      and we wrote down the final, simplified expression. Honestly, not too bad
      right?
    </p>
    <p>
      We can take a very similar approach for a product of sums expression. Much
      like minterms and maxterms, all we have to do is flip everything on its
      head. Instead of grouping 1s, we group 0s. Instead of complementing
      outputs that are not within the given input’s section, we complement
      outputs that are. So, if we perform this process correctly on the example
      above, the expression we’d end up with is:
    </p>
    <img src="@/assets/CSM51A/img87.png" />
    <p>
      Now, remember that the whole point of k-maps is to find the minimal
      two-level system of a given function. Since the 2 expressions we just
      wrote are accurate results of the k-map process, which do we pick? Well
      the POS expression has 1 less term, which means 1 less gate. Based on that
      reasoning, a two-level system built on the POS expression will be better
      than one built on the SOP expression. Fun fun.
    </p>
    <p>
      We’re not quite done here. I want to cover 2 other things that you might
      see in problems down the road. First of all, what if we’re given a
      function that takes in 4 inputs, but has invalid outputs? For instance,
      let’s say we have a function that takes in an input of a decimal number
      from 0–9 and outputs 1 if the input is greater than 5. Translating this
      into a k-map, we have:
    </p>
    <img src="@/assets/CSM51A/img88.png" />
    <p>
      Any outputs for entries greater than 9 are undefined, so how do we deal
      with them in the k-map? The answer is, we don’t care about them. Any
      undefined outputs can be treated as either a 0 or a 1, and they can be
      grouped as such.
    </p>
    <p>
      The final thing I want to address is actually going to be bringing us back
      to a high-level view of the topic as a whole. I introduced two-level
      systems as AND–OR or OR–AND networks, but that’s not quite accurate. Those
      networks are more of an abstraction to help you learn than they are
      practical. Why? Because, based on De Morgan’s law, it’s trivial to convert
      either of these networks into a NAND–NAND network (go ahead, try it). So
      what? Why do we care? Well, as you probably learned doing some transistor
      design, NAND gates are cheaper to make (in terms of number of transistors)
      than AND and OR gates. As a result, if we really want to minimize the cost
      of a two-level system, we’re going to use NAND–NAND networks.
    </p>
    <p>
      Ok, that was a long-ass section. Sorry for the journey, but we finally
      made it. We’re heading out of low-level design into something new. Yay?
    </p>
    <h2 ref="3">Unit 3: Sequential Systems</h2>
    <p>
      Now, if you’ve been paying attention, you’ll notice that everything we’ve
      dealt with thus far has been in relation to combinational systems. Input
      goes in, output comes out. However, way back in Unit 1, we stated that
      there were 2 distinct types of systems. With the foundation of combination
      systems laid out, it’s time we dive into sequential systems.
    </p>
    <p>
      Now, sequential systems are pretty much just combinational systems with
      some added complexity. We’re going to have to analyze some new structures
      here that allow us to vary our output based on previous inputs. Some of
      this stuff looks a little scary at first, but just remember, this is M51A.
      Nothing’s going to be that hard.
    </p>
    <h3 ref="3.1">Unit 3.1: States</h3>
    <p>
      The most fundamental change from combinational systems to sequential
      systems is the notion of states. To motivate the introduction of yet
      another concept that you don’t want to learn, let’s look at an example.
      Let’s say we’re given the following specification for a sequential system:
    </p>
    <img src="@/assets/CSM51A/img89.png" />
    <p>
      In English, we’re saying our system takes in inputs of a or b and outputs
      a 0 or 1. The thing that makes this sequential is that the output is
      reliant on all inputs that have occurred so far. If there have been an
      even number of b‘s input so far, then the output is 1. Otherwise, the
      output is 0.
    </p>
    <p>
      The question now is, how do we represent this function in terms that we
      can understand? Simple truth tables or gate designs won’t work; those have
      no concept of time whatsoever. The answer is we use states. Take the
      example above, for instance. What does the output depend on? If you’re
      reading at a 1st grade level, first of all congratulations, but secondly,
      you notice that the output changes based on the parity of b‘s in the prior
      inputs. In other words, our system has 2 distinct states: even and odd.
    </p>
    <p>
      How does this differentiation help us? Well, it gives us a way to write
      our function in a combinational manner. Let’s restrict things to the even
      state. If we receive an a as input, then the number of b‘s in the input is
      still even. As a result, we would output 1. If we receive a b as input,
      then the number of b‘s in the input is odd, so we would now output a 0.
      Similar logic can be applied to the odd state. Therefore, returning to a
      tabular format, we have:
    </p>
    <img src="@/assets/CSM51A/img90.png" />
    <p>
      Here, PS stands for present state. Why do we have to clarify that it’s the
      present state? Well, if you think about it, it doesn’t exactly make sense
      to have our system in the even state, input another b so that there are an
      odd number of b‘s, and then leave it in the even state. That would
      compromise the entire point of states in the first place. Instead, we need
      to have some idea of what our NS, or next state is. Adding this to the
      table, we arrive at:
    </p>
    <img src="@/assets/CSM51A/img91.png" />
    <p>
      So now, we have a complete description of our system, which we call a
      transition table. Given any input and the current state, we can determine
      what the system will output and the next state that the system will go to.
    </p>
    <p>
      In the case of sequential systems, there’s an important distinction we
      should make right now. The output of a sequential system can either depend
      on the state and input, or on the state alone. The former describes a
      Mealy machine, while the latter describes a Moore machine. If you look at
      the example above, you’ll see that the input to each state definitely has
      an impact on what gets output by our system, so it must be a Mealy
      machine.
    </p>
    <p>
      With that out of the way, we can move onto a new type of diagram. Because
      we all know how much I love making these in Google Drawings. State
      diagrams are essentially a visualization of the table presented above. In
      these diagrams, we represent states as follows:
    </p>
    <img src="@/assets/CSM51A/img92.png" />
    <p>
      Now, we must represent the transition between states and their outputs as
      follows:
    </p>
    <img src="@/assets/CSM51A/img93.png" />
    <p>
      Each of these arrows has a label of the format input/output. So, the top
      arrow essentially says that, when in Seven, an input of b will create an
      output of 0, while transitioning the state to Sodd. Makes sense right?
    </p>
    <p>
      Let’s give this next example a shot. Take the following transition table:
    </p>
    <img src="@/assets/CSM51A/img94.png" />
    <p>
      If we look closely, we see that this is actually a Moore machine.
      Regardless of the input, any output from S1 will be 1, while any output
      from S2 will be 0. When it comes to Moore machines, we typically draw our
      state diagrams like this:
    </p>
    <img src="@/assets/CSM51A/img95.png" />
    <p>
      Since the output is solely dependent on the state, we associate the output
      with the states rather than the inputs.
    </p>
    <p>
      Let’s close things out with an example. Say we want to create a system
      that acts as a pattern detector for the bit string 1101. In more formal
      terms:
    </p>
    <img src="@/assets/CSM51A/img96.png" />
    <p>
      So how do we do this? Well, let’s leverage states to keep track of
      subpatterns in the input. We’ll make use of 4 states: Si, S1, S11, and
      S110. Si represents the state where we haven’t detected any subpatterns
      yet. S1 represents the state where the first symbol of the desired pattern
      has been found. The rest should be pretty self explanatory.
    </p>
    <p>Let’s draw the state diagram for this, starting off with our states:</p>
    <img src="@/assets/CSM51A/img97.png" />
    <p>
      Now, let’s fill this thing out incrementally. Starting from Si, we can
      either receive a 0 or a 1. If we receive a 0, we don’t contribute to the
      pattern, so we want to stay at Si. On the other hand, receiving a 1 would
      complete the next step in our pattern, so we would want to advance to the
      state representing that a subpattern of 1 was detected. Either way, the
      full pattern has not been found so the output is 0. All together, this
      gives us:
    </p>
    <img src="@/assets/CSM51A/img98.png" />
    <p>We can use similar logic to handle inputs to S1:</p>
    <img src="@/assets/CSM51A/img99.png" />
    <p>
      Take note of how an input of 0 actually sends us back to Si because that
      represents the subpattern 10, which would reset our pattern detector.
    </p>
    <p>
      Now for S11, we have to be a little careful. For one, we now need a 0 to
      advance to the next state, not a 1. However, notice that an input of 1
      wouldn’t reset our pattern detector. An input of 1 would tell us that we
      have the subpattern 111. If we’re strictly searching for 1101, the
      subpattern 11 is still present. As a result, we have:
    </p>
    <img src="@/assets/CSM51A/img100.png" />
    <p>
      Finally, we have the state S110. From here, if we input a 1, we will have
      arrived at the desired pattern so we should output a 1. Notice that the
      pattern begins with a 1 and ends with a 1. As a result, it could be
      possible that the ending 1 of a 1101 is actually the beginning 1 of
      another 1101. For this reason, we actually want to return to S1. If we
      input a 0, we create the subpattern 1100, which simply doesn’t fit into
      our pattern detector, so we return to Si, outputting a 0 in the process:
    </p>
    <img src="@/assets/CSM51A/img101.png" />
    <p>
      Anddddd, now we’re done. Kinda. Although the above state diagram is
      complete for the purposes of this class, we should point out that anything
      that isn’t a 1 or a 0 is simply just an abstraction. At the end of the
      day, everything should be represented in binary. As a result, we’d simply
      encode these states as something along the lines of:
    </p>
    <img src="@/assets/CSM51A/img102.png" />
    <p>
      As you can probably already tell from the above example, this stuff can
      become a pain in the ass real fast. Imagine you were given a transition
      table with 10 states. Yikes. In the next section, we’re going to cover a
      method that we can use to simplify situations like this to make our lives
      just a little bit better.
    </p>
    <h3 ref="3.2">Unit 3.2: State Reduction</h3>
    <p>Imagine you were handed the following table:</p>
    <img src="@/assets/CSM51A/img103.png" />
    <p>
      That doesn’t look very fun to convert to a diagram right? Well, if you
      look closely, you may actually see that some of these states are fairly
      similar to each other. That’s what we’ll be targeting in this section in
      order to simplify our analysis process.
    </p>
    <p>
      First things first: terminology. We call 2 states 1-equivalent if, for any
      input, both states have the same output. For instance, A and C in the
      table above have the exact same outputs, regardless of input. As a result,
      we can say that states A and C are 1-equivalent. On the other hand, if 2
      states do not fall within the definition of 1-equivalent, like states A
      and B above, we say they are 1-distinguishable.
    </p>
    <p>
      If we look a little deeper, we can also see that, given any 2 inputs, a
      system starting in state A will have the exact same outputs as a system
      starting in state C. As a result, these states are also 2-equivalent. An
      easy way to check for this is to see if the NS of an input in 1 state is
      1-equivalent with the NS of an input in the other state. In the example
      above, we’d see that an input of a sends both A and C to E, an input of b
      sends A to D and C to B, while an input of c sends A to B and C to D. If
      we take a look at B and D, we see they are 1-equivalent. As a result, we
      know A and C must be 2-equivalent.
    </p>
    <p>
      Ok, now for the actual simplification method. We going to take advantage
      of equivalency to combine states that share the same behavior. If 2 states
      are infinitely equivalent, then why have 2 states in the first place?
      Obviously, checking for this equivalency for every combination of states
      is most definitely un-poggers, so we need some other way.
    </p>
    <p>
      The method we’ll use in this class is the partition method. We’ll start by
      partitioning all our states into groups, such that they are 1-equivalent
      to every other state in their group:
    </p>
    <img src="@/assets/CSM51A/img104.png" />
    <p>
      From here, we can place these into a table, numbered by their partition:
    </p>
    <img src="@/assets/CSM51A/img105.png" />
    <p>
      Now, we need to look at the NS values of each of the states in each
      partition. Instead of writing the NS for each state-input pair, we’ll
      instead write the partition that the NS falls into. For instance, an input
      of a into state A has an NS of E. E is in partition 1, so we’d write a 1.
      Filling this out, we get:
    </p>
    <img src="@/assets/CSM51A/img106.png" />
    <p>
      From here, we focus on columns that are distinguishable from the rest in
      their partition. In this case, the column for F is different from the
      columns for B and D. We must now re-partition, separating F from B and D:
    </p>
    <img src="@/assets/CSM51A/img107.png" />
    <p>
      With our new partitions, we must once again throw everything into a table:
    </p>
    <img src="@/assets/CSM51A/img108.png" />
    <p>
      Notice how we don’t care about F‘s NS‘s. This is because it’s in a
      partition by itself, so it will always match all other columns in its own
      partition.
    </p>
    <p>
      In this table, we see that E now has a different column than A and C, so
      let’s repeat this again:
    </p>
    <img src="@/assets/CSM51A/img109.png" />
    <p>
      As you can see if you have, you know, eyes, all the columns within each
      partition are now the same. This means that we’re done with this process.
      So what now?
    </p>
    <p>
      This table essentially tells us that states A and C are exactly the same
      and states B and D are exactly the same. We can now rewrite our transition
      table to reflect this, replacing all instances of A and C with AC and all
      occurrences of B and D with BD:
    </p>
    <img src="@/assets/CSM51A/img110.png" />
    <p>
      Overall, this process isn’t bad. Tedious? Absolutely. But hard? Nahh. Once
      you’ve done a couple examples, you’ll be fine.
    </p>
    <p>
      Now that we have some fundamental of sequential systems down, it’s time to
      dive into the real meat of the unit in the next section.
    </p>
    <h3 ref="3.3">Unit 3.3: D Flip-Flops</h3>
    <p>
      Alright, so now we’ve gone over some introductory analysis for sequential
      systems, but we still don’t know how they’re implemented in the first
      place.
    </p>
    <p>
      Let’s look at what we do know. Sequential systems are just combinational
      systems that depend on previous inputs. This dependence on previous inputs
      means that sequential systems must have some form of memory to keep track
      of what state the system is in. From a high level, sequential systems can
      be implemented like:
    </p>
    <img src="@/assets/CSM51A/img111.png" />
    <p>
      Generally, we’ll have some combinational logic to process inputs and
      produce an output, while state is stored in a mechanism called the state
      register. This state register provides the current state of the system to
      the combinational logic and takes in the upcoming state. This state
      register is where we’re going to need to implement our memory. We do this
      through a structure called a latch.
    </p>
    <p>
      For the purposes of this introduction, we’re going to be focusing on D
      latches, which are a specific type of latch. D latches look something
      like:
    </p>
    <img src="@/assets/CSM51A/img112.png" />
    <p>
      I invite you to follow the logic through this network, but I won’t walk
      you through it here. What matters for our discussion here is the result of
      various inputs:
    </p>
    <img src="@/assets/CSM51A/img113.png" />
    <p>
      So let’s talk about what we’re actually looking at here. The output of the
      latch is Q, which represents the state of the overall system. The input C
      is an input representing the clock, which we’ll get into in a bit.
      Finally, D is the main input into the D latch.
    </p>
    <p>
      For this section, we’re going to be looking at the behavior of D latches
      from a more visual perspective. Let’s take the following signals:
    </p>
    <img src="@/assets/CSM51A/img114.png" />
    <p>
      How can we figure out Q from these? Well, first of all, we’re going to
      assume Q starts at 0. For the rest of the signal, we’re going to focus on
      the relationship between the state and the clock. When C is 0, the state
      doesn’t change at all. when C is 1, Q is the same as D. As a result, we
      can single out the segments where C is 1 as follows:
    </p>
    <img src="@/assets/CSM51A/img115.png" />
    <p>
      We can then easily fill out the rest of the signal by using the fact that
      Q cannot change when C is 0:
    </p>
    <img src="@/assets/CSM51A/img116.png" />
    <p>
      Now, the goal of the state register is to be able to store and change
      states at discrete time values. As you can see by the waveforms above, we
      haven’t quite accomplished this yet. While C is 1, Q is still subject to
      any changes by D. So how do we fix this?
    </p>
    <p>
      We can take our D latch, and put another D latch behind it, in series.
      This structure forms what we call a D flip-flop:
    </p>
    <img src="@/assets/CSM51A/img117.png" />
    <p>
      As you can see, the second D latch in the D flip-flop takes in the Q of
      the first D latch as input and C' as the clock. What this does is it
      restricts any changes in QE to distinct points in the clock cycle. More
      specifically, the D flip-flop above restricts changes in state to falling
      edges in the clock:
    </p>
    <img src="@/assets/CSM51A/img118.png" />
    <p>
      As you can see, the final signal is cleaned up, and only changes on the
      falling edges of the clock, or when the clock goes from 1 to 0. Of course,
      we derived this waveform the same way we derived the waveform for QI, this
      time using C' as the clock and QI as the input.
    </p>
    <p>
      This 2 latch structure is called a master-slave system, where the first
      latch is the master cell and the second latch is the slave cell. In the
      example above, we used this structure to create a D flip-flop that is
      sensitive to falling edges. If we simply move the inverter in the
      block-level design, we can create a D flip-flop that is sensitive to
      rising edges:
    </p>
    <img src="@/assets/CSM51A/img119.png" />
    <p>
      Of course, it would be beneficial for me to run through an example of how
      this works. However, the waveform diagrams are a massive pain in my ass to
      make, so that won’t be happening. So instead, I’m going to tell you to run
      through an example of a rising edge-sensitive D flip-flop, under the
      pretense that it’s “good practice” and “for your own good”. Ha, sucker.
    </p>
    <p>
      As a final note, a D flip-flop can also be represented as a single block
      as follows:
    </p>
    <img src="@/assets/CSM51A/img120.png" />
    <h3 ref="3.4">Unit 3.4: Timing Parameters</h3>
    <p>
      If I wanted to actually follow the lectures, I’d probably spend a section
      talking about some different types of flip-flops, SR flip-flops,
      T-flip-flops, JK flip-flops, etc.
    </p>
    <p>
      However, I’m not going to do that. Honestly, that topic would just end up
      with me rehashing what we spent the last few sections going over, and I’m
      writing this in my free time, so, no thanks. I’ll provide a quick summary
      in the next section.
    </p>
    <p>
      Instead, we’re going to bring our analysis back to timing. When we talked
      about combinational logic, we discussed timing as it related to the flow
      of a signal through a gate network. When it comes to sequential logic,
      there are a few more pieces we need to fill in.
    </p>
    <p>
      In the analysis we presented in the previous section, we tracked 3
      different signals: the clock, the input, and the state. In that analysis,
      we implicitly assumed that the flip-flop was capable of instantaneous
      communication. In reality, this of course isn’t true. As a result, we have
      to account for the sequential version of propagation delay:
    </p>
    <img src="@/assets/CSM51A/img121.png" />
    <p>
      As you can see, even when the clock is 1, the state doesn’t update to
      match the input immediately. Instead, the state lags a little behind due
      to the propagation delay of the gates that make up the mechanism of the
      flip-flop.
    </p>
    <p>
      With that in mind, let’s consider a full network, with all the
      combinational and sequential logic you could ever hope for. We know that
      the both the combinational system and sequential system have some
      propagation delay that we need to be aware of. Let’s imagine the following
      clock and input pairing in a falling-edge triggered flip-flop:
    </p>
    <img src="@/assets/CSM51A/img122.png" />
    <p>
      Here, the input is 1 as the clock reaches a falling edge. Before we knew
      about propagation delays, this would be fine. But now, we’re smarter.
      We’re better. We know that this is going to end up going wrong.
    </p>
    <p>
      Why? Well let’s give our system the benefit of the doubt and say that our
      sequential system has no propagation delay. Now, all we have to account
      for is the propagation delay of our combinational system. Remember, this
      propagation delay is going to affect when our input actually occurs.
      Letting tp represent the propagation delay of the combinational network,
      disaster strikes when we have:
    </p>
    <img src="@/assets/CSM51A/img123.png" />
    <p>
      Even though we thought the state should’ve changed, it doesn’t. The
      propagation delay of the combinational network offset the input from the
      clock tick, resulting in the state never changing. This is obviously a
      problem, but it can be fixed pretty easily. Instead of passing the input
      in for exactly the same amount of time as the clock tick, we can simply
      hold the signal for a little bit longer:
    </p>
    <img src="@/assets/CSM51A/img124.png" />
    <p>
      This extra time, represented by tsu, is called the set-up time, and
      reflects the extra time that we must hold the input in order to account
      for the propagation delay of the combinational network.
    </p>
    <p>Great, so we’re all set now right? Ummm:</p>
    <img src="@/assets/CSM51A/img125.png" />
    <p>
      If we account for the propagation delay of the sequential network, we run
      into problems again. Since the propagation delay prevents the state from
      updating exactly as the falling edge occurs, there’s a chance that, when
      the state actually updates, the signal from the input is not longer
      correct. In this case tp, the propagation delay of the sequential network,
      is long enough that the input is 0 once the state is actually allowed to
      update.
    </p>
    <p>
      Similarly to how we dealt with our previous problem, we can simply hold
      the input for more time:
    </p>
    <img src="@/assets/CSM51A/img126.png" />
    <p>
      Now, with the introduction of the hold time th, our system finally updates
      the state correctly. All of these timing parameters can be seen in the
      diagram above.
    </p>
    <p>
      There we go, we’re done with the basics of sequential networks. Now, we
      can bring everything together to close this section off.
    </p>
    <h3 ref="3.5">Unit 3.5: Analysis</h3>
    <p>
      Alright, here we go. Time to apply everything that we’ve been going over
      so far.
    </p>
    <p>
      Before we start, I need to fill in the gap I left when I decided to skip
      over a whole lecture. Here are some of the relevant characteristic
      equations and excitation tables we’ll need at our disposal:
    </p>
    <img src="@/assets/CSM51A/img127.png" />
    <p>Feel free to take a moment to get acquainted with those.</p>
    <p>
      The actual goal of this unit is going to be to understand how we can go
      from a gate-level design of a sequential system all the way to a state
      diagram. Essentially we want to be able to bring ourselves from a
      high-level view of our system to a low-level one.
    </p>
    <p>Here’s the design we’ll be analyzing:</p>
    <img src="@/assets/CSM51A/img128.png" />
    <p>
      The first step for analysis is to find out what the input to each of the
      system’s flip-flops are. Noting that the top flip-flop is A and the bottom
      is B, we can write:
    </p>
    <img src="@/assets/CSM51A/img129.png" />
    <p>
      Sorry for the random font change, I just realized having everything
      written in Roboto might not be the move.
    </p>
    <p>
      At this point, deciphering these combinational networks should be second
      nature to you. From here, we have to use our characteristic equations to
      translate these inputs into our next states and outputs. Starting with the
      A flip-flop, we have:
    </p>
    <img src="@/assets/CSM51A/img130.png" />
    <p>
      As you can see, nothing too hard for the A flip-flop, just plugging into
      the characteristic equation. We can now repeat the same process for the B
      flip-flop:
    </p>
    <img src="@/assets/CSM51A/img131.png" />
    <p>
      Finally, we need to write an expression for the output. All we need to
      note for this is that z is found using an OR gate that operates on the
      complement of the current state A and the current state B. In other words,
      the output is:
    </p>
    <img src="@/assets/CSM51A/img132.png" />
    <p>
      Now, although this step is optional, we’re going to simplify our
      expressions to make our lives a little easier for the upcoming step:
    </p>
    <img src="@/assets/CSM51A/img133.png" />
    <p>
      We can now use these expressions to create a transition table for the
      system. As you may have noticed, we have 2 flip-flops, which means our
      states are 2 bits long. As a result, we can encode them as follows:
    </p>
    <img src="@/assets/CSM51A/img134.png" />
    <p>
      Of course, all you had to do there was use the expressions we derived in
      the last step to calculate each of the next states. Nothing we haven’t
      seen before.
    </p>
    <p>
      Finally, noting that this is clearly a Moore machine, we can use our brand
      spanking new transition table to create a state diagram:
    </p>
    <img src="@/assets/CSM51A/img135.png" />
    <p>
      There we go! From gate design to system just like that. Look back at all
      the things we’ve learned about sequential systems. Breathe it in. Be proud
      of yourself. Good, now let’s get right into going the other way.
    </p>
    <h3 ref="3.6">Unit 3.6: Design</h3>
    <p>
      So, in the last section, we learned how to take a sequential system all
      the way from gate design back to state diagram. In this section, we’re
      pretty much going to do the opposite. We want to find out how we can go
      from a system specification all the way to gate design. Ready? Let’s jump
      right in.
    </p>
    <p>
      Just like the last section, we’re going to teach by example. Here’s our
      specification:
    </p>
    <img src="@/assets/CSM51A/img136.png" />
    <p>
      In simpler terms, we want to make a pattern detector to detect 3 1s in a
      row. For this example, we’ll use D flip-flops to do so. We’ll start with
      where we finished last section, with a state diagram:
    </p>
    <img src="@/assets/CSM51A/img137.png" />
    <p>
      That shouldn’t be anything new to you. Likewise, it shouldn’t surprise you
      that we’re going to head straight into a transition table from here:
    </p>
    <img src="@/assets/CSM51A/img138.png" />
    <p>
      Here’s where we’re going to have to stray from the algorithm we used in
      the last section. If we remember back, the next step should be to convert
      this transition table into some expressions for our next states. However,
      that’s going to cause us a lot more trouble than it’s worth once we get to
      the gate design part. As a result, we’re going to revisit our old friend:
      the k-map.
    </p>
    <p>
      The one thing standing in our way is that transition tables aren’t exactly
      k-map friendly. As a result, we have to take an intermediate step to
      flatten it out:
    </p>
    <img src="@/assets/CSM51A/img139.png" />
    <p>
      I know, that’s a lot to process. Essentially, what we did is we gave
      inputs their own separate column, duplicating the rows for each state. We
      then used the characteristic equation for D flip-flops to calculate the
      inputs to each flip-flop. DA is the input to flip-flop A, and DB is the
      input to flip-flop B. When you’re calculating these, remember that DA
      corresponds to A(t) and A(t + 1) and DB to B(t) and B(t + 1). Since our
      states are represented by 2 bits, we know we need 2 flip-flops.
    </p>
    <p>
      Now using this flattened transition table, we can finally write our k-maps
      for our system.
    </p>
    <p>
      The first question we need to answer is, how do we label our k-maps? Well,
      keep in mind that these k-maps are going to be for DA, DB, and z, which
      are derived from the inputs A(t), B(t), and x. As a result, we’re going to
      use a 3-input k-map, treating A(t) as the MSB, and x as the LSB:
    </p>
    <img src="@/assets/CSM51A/img140.png" />
    <p>
      By writing our k-maps like this, it allows us to essentially read the
      values straight off of the flattened transition table, from top to bottom.
      Neat right?
    </p>
    <p>
      Now that we’ve finally filled our our k-maps, we can write our simplified
      expressions:
    </p>
    <img src="@/assets/CSM51A/img141.png" />
    <p>
      You’re not going to believe this, but now we get to finally draw our gate
      designs! Let’s start with the combinational logic for DA and DB:
    </p>
    <img src="@/assets/CSM51A/img142.png" />
    <p>
      Now, because of the work we did with the transition tables, we know that
      these inputs will implement what the specification asks for, so we can
      pipe these directly into a pair of D flip-flops:
    </p>
    <img src="@/assets/CSM51A/img143.png" />
    <p>
      Finally, we’ll use the outputs of the D flip-flops to satisfy our output
      expression, with the Qs representing A and B and Q‘s representing A' and
      B':
    </p>
    <img src="@/assets/CSM51A/img144.png" />
    <p>
      Bang bang, we’re done! Now we know how to analyze and design sequential
      systems. Look at us go.
    </p>
    <p>
      Now, we’re headed into Week 9 and Week 10 territory, which means we’re
      approaching the end of the class. Thankfully, that doesn’t mean it’s going
      to get harder. it just means we’re closer to the finish line. We got this!
    </p>
    <h2 ref="4">Unit 4: Components</h2>
    <p>
      We’re finally done with our discussions on combinational and sequential
      systems. Now we can do our gate designs all good. We’re going to get a
      little more high-level in this unit, taking a look at some components that
      are built off of the combinational and sequential logic we’ve just
      finished discussing.
    </p>
    <p>
      Our goals here are going to be to understand how each of these components
      work, and what they do. Like I said earlier, we’re closing in on the end
      of the course, so just hang in there!
    </p>
    <h3 ref="4.1">Unit 4.1: Decoders and Encoders</h3>
    <p>
      The first component we’ll touch on here is the binary decoder, which looks
      something like this:
    </p>
    <img src="@/assets/CSM51A/img145.png" />
    <p>
      This decoder depicted above is an n-input binary decoder. Decoders
      essentially take in n input signals and then map those signals to a single
      output out of 2n outputs. How does this mapping occur? Well, let’s imagine
      the input signal is in the format x2x1x0. Decoders will take this signal
      as if it were in minterm notation, then output the corresponding minterm.
      For instance, given an input x2x1'x0 (101), the decoder will output a 1 at
      y5, while outputting 0 everywhere else. Kinda cool right? No? Yeah, I
      didn’t think so.
    </p>
    <p>
      The main point is that you should probably think of decoders as “decoding”
      minterms. Since they need an output for each possible minterm combination
      of the inputs, you’ll see decoders designed to be 2:4 decoders, 3:8
      decoders, 4:16 decoders, etc. Since only 1 minterm exists for any given
      binary input, only one of the outputs can be 1 at any given time.
    </p>
    <p>
      Ok, that’s cool and all, but what’s that E doing there? That E stands for
      enable, and essentially acts as an on/off switch. If E is 1, the decoder
      will work as specified above. If E is 0, the output of each pin will be 0,
      regardless of inputs.
    </p>
    <p>
      Now, with the information I’ve given you, you could probably design a
      decoder at the gate level by yourself. However, for once in my life, I’ll
      be nice and give you a gate design of a 2:4 decoder. Yeah, I love you that
      much.
    </p>
    <p>
      We can start by realizing that outputs are only dependent on current
      inputs, which means that we don’t need to use any sequential logic. From
      there, we can write out exactly what expressions we need to satisfy for
      our decoder to work:
    </p>
    <img src="@/assets/CSM51A/img146.png" />
    <p>Although it’s a little messy, the gate design is pretty trivial:</p>
    <img src="@/assets/CSM51A/img147.png" />
    <p>
      On the other hand, we have a component called an encoder, which
      essentially acts as the inverse to a decoder:
    </p>
    <img src="@/assets/CSM51A/img148.png" />
    <p>
      Instead of translating a minterm into a human-readable number, an encoder
      takes some human-readable number and outputs the minterm representation of
      that number. Due to this, encoders are typically 2:1, 4:2, 8:3, etc.
      Continuing the trend of flipping everything on its head, this means that
      only 1 input is allowed to be 1 in an encoder. Kinda.
    </p>
    <p>
      Unlike decoders, where 1 input maps perfectly to 1 output, it’s
      theoretically possible to have more than 1 input as 1. That’s more or less
      an arbitrary constraint we put on the component in order to deal with
      undefined behavior. We can toss this constraint away when we talk about a
      special type of encoder, called a priority encoder.
    </p>
    <p>
      Priority encoders behave exactly like normal encoders, except we allow
      them to take in multiple 1 inputs. When such a situation occurs, the
      higher priority input is treated as the only significant input; all other
      inputs are ignored. When we say highest priority, we essentially mean
      highest binary value. For instance:
    </p>
    <img src="@/assets/CSM51A/img149.png" />
    <p>
      This priority encoder will evaluate the input and produce an output where
      x = 1 and y = 1. This is because the input representing the value 3 is the
      highest available input, so the priority encoder prioritizes it over the
      0, 1, or 2.
    </p>
    <p>
      Ok, there we go. Sections in this unit are going to go by quick. There
      isn’t much complexity to each topic, it’s almost like a victory lap. Enjoy
      it.
    </p>
    <h3 ref="4.2">Unit 4.2: Multiplexers and Demultiplexers</h3>
    <p>
      The next type of component we’ll be looking at is the multiplexer, or MUX:
    </p>
    <img src="@/assets/CSM51A/img150.png" />
    <p>
      A MUX essentially takes in some number of inputs, then proceeds to
      transmit exactly 1 of those inputs to the output. The MUX decides which of
      these inputs to transmit using the select bits (s0 and s1). These select
      bits, when interpreted as a decimal value, map to certain inputs. For
      instance, in the 4:1 MUX above, select bits of 00 would allow x0 to
      transmit, select bits of 01 would allow x1 to transmit, etc.
    </p>
    <p>
      As you can tell, unlike a decoder/encoder, the number of inputs into a MUX
      doesn’t impact the number of outputs. A MUX will always have a single
      output.
    </p>
    <p>
      Could I give you truth tables and gate designs for a MUX? Yes. Will I? No.
      It’s finals week as I’m writing this. I want to sleep.
    </p>
    <p>
      Instead, we’ll take a look at some ways we can use a MUX. Let’s say we’re
      told to implement the following expression:
    </p>
    <img src="@/assets/CSM51A/img151.png" />
    <p>
      We could very easily implement this with a simple 2-level design. We’ve
      known how to do that. We can actually do this even more easily with a MUX:
    </p>
    <img src="@/assets/CSM51A/img152.png" />
    <p>
      Here, notice how our inputs directly affect which signals are allowed to
      pass through. This allows us to use the MUX to implicitly translate our
      minterm expression into a block-level implementation. All we need to do is
      fill out the inputs to the MUX appropriately, and we’re off to the races.
    </p>
    <p>
      Much like decoders, MUXes have an inverse component, as well. These
      components, creatively called DEMUXes, look something like this:
    </p>
    <img src="@/assets/CSM51A/img153.png" />
    <p>
      As you may expect, DEMUXes essentially take a single input, then uses the
      select bits to decide which output to transmit it to. Any output that
      isn’t selected defaults to a 0 signal. I’m not going to go into detail
      here, I want to keep these sections short and sweet. See you in the next
      one!
    </p>
    <h3 ref="4.3">Unit 4.3: Adders</h3>
    <p>
      Now, it’s time for probably the most complex component we’ll be looking at
      in this class: the adder. We’ll start with the half adder:
    </p>
    <img src="@/assets/CSM51A/img154.png" />
    <p>
      This component essentially takes 2 bits and adds them together. In
      addition to this, it also keeps track of any carry-outs that that addition
      generates. Here’s the truth table for this module:
    </p>
    <img src="@/assets/CSM51A/img155.png" />
    <p>
      Hope that all makes sense to you. As you’ve probably noticed, we’re
      missing something pretty important here: the carry-in. This missing value
      is why we call these components half adders. In order to create a full
      adder, we need to combine 2 half adders as follows:
    </p>
    <img src="@/assets/CSM51A/img156.png" />
    <p>
      In this block design, we take one half adder and use it to add x and y. We
      then pipe the sum from that half adder into another half adder, where we
      can then sum it with some carry-in, cin. Throughout this process, we keep
      track of a carry-out, cout, which we can then treat as another output.
    </p>
    <p>
      As we stated earlier, this component is called a full adder, and can be
      represented in a block diagram as:
    </p>
    <img src="@/assets/CSM51A/img157.png" />
    <p>
      Now, how often are we really going to find ourselves trying to add just a
      single bit at a time? Not very. So how can we make this component more
      useful? As it turns out, due to the way we’ve constructed this component,
      it’s fairly easy to expand this process to multiple bits. All we have to
      do is place some full adders in series:
    </p>
    <img src="@/assets/CSM51A/img158.png" />
    <p>
      This above system allows us to add 4-bit values together. We do this by
      piping the carry-out of 1 full adder into the carry-in of the next.
      Meanwhile, we’re outputting the sum bits of each full adder, which will
      then make up our final sum. Sicko mode.
    </p>
    <h3 ref="4.4">Unit 4.4: Comparators</h3>
    <p>Welcome to Minecraft.</p>
    <p>
      As natural as it is to want to add values, we may also want to compare
      values. Shockingly, that’s exactly what a comparator does:
    </p>
    <img src="@/assets/CSM51A/img159.png" />
    <p>
      This component takes in 2 bits and outputs x‘s relation to y. Truth table
      time:
    </p>
    <img src="@/assets/CSM51A/img160.png" />
    <p>
      Ok, what the hell is going on here? Well, when we compare 2 bits, there
      are 3 possible results: greater than (G), equal (E), and less than (L).
      Common sense tells us that the result of a comparison can only be one of
      these at any given time. This is why, out of G, E, and L, there can only
      be a single 1.
    </p>
    <p>
      So, what’s with the Gin, Ein, and Lin? Surely, we don’t need these to
      compare 2 bits right? Well, just like adding 1-bit values is more or less
      useless, comparing 1-bit values won’t exactly save the world either. These
      inputs allow us to expand our comparison to multi-bit values:
    </p>
    <img src="@/assets/CSM51A/img161.png" />
    <p>
      Let’s think about how we’d compare binary values by hand, assuming they’re
      the same length. Obviously, we’d start with the MSB, right? If the MSBs of
      the 2 values are different, then we instantly know which value is greater,
      the remaining values don’t matter. If the MSBs are equal, then we need to
      move to the next bit. This is why inputs where Ein = 1 are the only inputs
      that matter. In this case, we need to continue making comparisons. If Gin
      or Lin are 1, we already know which value is greater than the other, so we
      can just pass that information along.
    </p>
    <p>We are flying along now, aren’t we?</p>
    <h3 ref="4.5">Unit 4.5: Shift Registers</h3>
    <p>
      Our next component is the shift register. These are essentially storage
      units that make use of flip-flops to store values for later use. Will I
      show you how? Hell no!
    </p>
    <p>
      The special thing about shift registers is that, in addition to storing
      the values themselves, we can also shift the stored values left and right:
    </p>
    <img src="@/assets/CSM51A/img162.png" />
    <p>
      The component we’ve represented above is a parallel-in/parallel-out shift
      register. This means we can load in multiple bits at once and output
      multiple bits at once. Whatever operation is occurring is determined by
      the CTRL input, which allows you to pick between loading, shifting left,
      shifting right, or clearing.
    </p>
    <p>More relevant to us, is the serial-in/parallel-out shift register:</p>
    <img src="@/assets/CSM51A/img163.png" />
    <p>
      Shift registers such as these are only capable of shifting left or right,
      they cannot perform any parallel loading. The direction of the shift is
      once again controlled by the CTRL input.
    </p>
    <p>
      One use of these shift registers is going to require us to return to a
      common problem from last unit: pattern detection. Using serial-in/parallel
      out shift registers, pattern detection becomes trivial:
    </p>
    <img src="@/assets/CSM51A/img164.png" />
    <p>
      Here, we’re detecting the pattern 11110. Given a shift register that
      shifts left, we can simply read the inputs to the AND gate from left to
      right, treating any inverted signals as 0s, and everything else as 1s. If
      we wanted to implement the same thing using a shift register that shifted
      right, we’d simply go from right to left instead, with x being input from
      the left instead of the right. Easy stuff.
    </p>
    <h3 ref="4.6">Unit 4.6: Modulo Counters</h3>
    <p>
      We’re so close to the finish line now, here we go. A modulo counter looks
      like:
    </p>
    <img src="@/assets/CSM51A/img165.png" />
    <p>I’m sure you’re tired of me at this point, so I’ll keep this short.</p>
    <p>
      The outputs labeled by S are the binary output of the counter. The inputs
      labeled by l represent the values to be loaded into the counter. The
      output TC tells us when we want to set the counter to the value loaded
      into l. The input CLEAR tells us when to set the counter to 0. Finally,
      the value CNT increments the counter.
    </p>
    <p>
      Functionally, the counter above counts from 0 to 15, then loops back to 0.
      Fun stuff.
    </p>
    <p>
      So how can we mess with these counters? Let’s say instead of counting from
      0 to 15, we wanted to count from 4 to 12. We’d do something like this:
    </p>
    <img src="@/assets/CSM51A/img166.png" />
    <p>
      Here, the binary value for our lowest value, 4, is placed into the load
      inputs. This means that anytime our count resets, it will be reset to 4
      rather than 0. We can then set our upper bound by connecting an AND gate
      to our TC, which will force our counter to reset when the AND gate
      evaluates to 1. We can make this happen when our counter is 12 by
      expressing that value in minterm notation. We then have to AND this
      minterm with the count, x, since we only want our counter to reset when we
      attempt to count past 12.
    </p>
    <p>
      Ok, I’ve reached the end of my script and I’m done rambling. Thank god.
    </p>
    <h2 ref="after">Afterword</h2>
    <p>
      Well, that’s finally over. This class was interesting. For me, it was
      tedious, but graciously easy. I know I didn’t do the best job in
      communicating some (or all) of this information to you, and I’m sorry
      about that. I wish I could make myself take a deep dive into the material
      here, but I just couldn’t. Low-level stuff isn’t what I’m interested in,
      so surface-level overview it is.
    </p>
    <p>
      With that said, I hope some of the examples and breakdowns I went over
      here were of some use to you. As always, these guides are really for the
      reader more than for me, so ship in your feedback if you’d like. I’ve more
      or less secured my A at the time that I’m writing this, so take that as
      you will. See you in the next one!
    </p>
  </div>
</template>

<script>
export default {
  name: "CSM51A",
};
</script>

<style lang="scss" scoped>
.csm51a {
  // Spacing
  padding: 0 calc(clamp(4rem, 2.4rem + 6.4vw, 8rem));
  padding-bottom: 2rem;
  // Sizing
  width: 100%;
}
</style>