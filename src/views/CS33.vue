<template>
  <div class="cs33">
    <h1>CS 33: Introduction to Computer Organization</h1>
    <hr />
    <h2>Introduction</h2>
    <p>
      Not going to lie, I’ve fallen asleep in pretty much every lecture in the
      class, but that’s why this is called “Surviving CS 33”. I’m going to be
      dumping the few brain cells I have left on these pages, and I’ve secured
      an A+, so here’s hoping you can pull through with a good grade too. With
      that said, please do all the normal stuff – pay attention in lecture, do
      the labs, etc, etc.
    </p>
    <p>
      Ok now onto more important things. Assuming you’re coming in from the rest
      of the CS 30 series, you’ll have been working with C++ for a few quarters
      now, and should be semi-familiar-ish with basic programming principles.
      Well this class just ain’t that. To be honest, there really isn’t that
      much programming in this class. However, there is a buttload of new
      material and that’s why this class is 5 units. So make sure you don’t fall
      behind, the class moves fast, so you have to as well.
    </p>
    <p>
      Now, full disclaimer, I took this class with Prof. Reinman, who is a great
      professor, and grades really generously, so the structure of your class
      may be different, but the material shouldn’t vary too much. When I took
      the class, we had 5 labs – 1 every 2 weeks – which were generally
      accompanied by a homework assignment. Other than that, there wasn’t any
      other work. From my experience, this class isn’t too difficult if you keep
      up with the material and DON’T SEARCH UP THE LABS. They are your best tool
      you have, and can honestly be a perfect substitute for studying if you
      spend the time to work them out by yourself.
    </p>
    <p>
      Whoever you’re taking this class with, you’ve got this, don’t let me down.
    </p>
    <h2>Unit 1: Bit Manipulation</h2>
    <p>
      Bit manipulations and representations are the first thing you’ll run into
      in this class. Although your understanding of the rest of the class
      material doesn’t really depend on your understanding of this concept, your
      midterm and final grades probably will, so just learn it.
    </p>
    <p>
      On a very low-level, bit manipulation is how computers work, and that’s
      why we need to have at least a basic understanding of it. It’s pretty
      tedious work, and a lot of the math behind it is pretty unintuitive. If I
      had to choose, I’d say this is the least interesting unit in the whole
      class, but thankfully it’s still pretty easy.
    </p>
    <p>
      To close the unit, you’ll have a lab called the Data Lab that’ll help you
      get more than enough practice with the coding side of the unit. It’s
      pretty likely that you’ll be tested on some of the conceptual stuff that
      the lab doesn’t cover, so just do your best to get a grasp on that.
    </p>
    <h3>Unit 1.1: The Binary System</h3>
    <p>
      We’ll start off by taking a look at the binary system. You’ll need to
      become at least a little comfortable with this, but it’s not too bad, you
      got this, confidence is 50%. The numbers we use in our daily lives are
      based in the decimal system – as in we write numbers based on the digits
      0-9. The binary system, however, uses 0 and 1 exclusively. Here’s the
      breakdown:
    </p>
    <img src="@/assets/CS33/img1.png" />
    <p>
      This is a wack way to look at a number, but bear with me. Each digit
      represents a power of 10, which is why we call decimal a base-10 system.
      We could calculate this number by doing:
    </p>
    <img src="@/assets/CS33/img2.png" />
    <p>
      Ok, yes, I know you’re not a first grader, but setting up this foundation
      can be really helpful in understanding binary, and eventually, hexadecimal
      (ooh fancy word). So let’s get to that. Binary is a base-2 system. Meaning
      the same number now looks like:
    </p>

    <img src="@/assets/CS33/img3.png" />
    <p>
      Bam, we finally hit new material after like 3 paragraphs of blah blah blah
      that you probably didn’t read anyways. But, as you can see, that wack way
      of looking at numbers can be pretty helpful when you’re learning these new
      systems. To finish off the analogy, we have:
    </p>
    <img src="@/assets/CS33/img4.png" />
    <p>
      So, there you go. A very, very rough way to read binary. There are other
      ways to look at it, this just happens to be the one I like and this is my
      writeup so hA. Now, like I said before, you don’t have to be amazing at
      reading or writing binary, that’s why we have computers, but you do have
      to at least be able to translate to and from binary on occasion. For
      reference, some common properties of binary are: 8-digit binary numbers (a
      byte) range from 0-255, 4-digit binary numbers range from 0-15, and all
      odd numbers end in a 1. We’ll expand this system later on in this unit as
      well as in a later unit, so don’t wait to get the basics down.
    </p>
    <h3>Unit 1.2: Bit-Level Manipulations</h3>
    <p>
      So, we’ve finally made it to our first real section. Bit-level
      manipulations are the backbone of your first real lab. They’re pretty easy
      in concept, but combining them with the next section can make them a
      little frustrating.
    </p>
    <p>
      Let’s start by looking at the bitwise operators we’re going to be dealing
      with:
    </p>
    <img src="@/assets/CS33/img5.png" />
    <p>
      Despite these being keys you’ve probably never touched on your keyboard
      before, all of these are more or less common sense, and shouldn’t be too
      hard to understand fundamentally.
    </p>
    <p>
      The Bitwise And compares 2 bits (digits of a binary number) and returns a
      1 if both bits are 1, or a 0 otherwise. This behavior can then be extended
      to bit strings (effectively another word for binary number), allowing us
      to do things such as:
    </p>
    <img src="@/assets/CS33/img6.png" />
    <p>
      Keep in mind that, just like normal numbers (I may say this instead of
      decimal number, so sorry if you’re a robot reading this and prefer binary,
      but please don’t kill me when y’all take over thanks), you can append 0s
      to the beginning of binary numbers without changing their value, so you
      can use these operators on bit strings of “uneven” lengths.
    </p>
    <p>
      Now that we’ve established some basic facts, the rest of these should go
      by pretty fast. The Bitwise Or behaves much like the And, except it
      returns 0 if both bits are 1 or a 0 otherwise:
    </p>
    <img src="@/assets/CS33/img7.png" />
    <p>
      The Exclusive-Or operator will return a 1 if exactly one of the bits is a
      1:
    </p>
    <img src="@/assets/CS33/img8.png" />
    <p>
      Finally, the Complement operator simply takes each bit and flips it – 0s
      to 1s and 1s to 0s:
    </p>
    <img src="@/assets/CS33/img9.png" />
    <p>
      That does it for our bitwise operators. We have to make sure we make a
      distinction between the operators introduced here and the logical
      operators (&& and ||) that we’re used to seeing in C++. As you just saw
      above, these new operators return bit strings, whereas the logical
      operators return a 0 or 1 to represent true and false. Ok enough of that
      trivial nonsense, let’s move on to the last part of this section.
    </p>
    <p>
      These last 2 operators are shifts, and there’s a little more complexity
      packed into these. There are 2 types of shifts: a left shift (&lt;&lt;)
      and a right shift (>>). Shifts behave how you’d guess, they take the bit
      string and shift it in the specified direction. Any bit that is shifted
      past the bit string’s ends is simply thrown away. Now the matter of what
      if filled in on the other side requires a little more discussion.
    </p>
    <p>
      There are another 2 ways to describe shifts: logical and arithmetic.
      Logical implies that the shift always fills in 0s for the empty space
      created by a shift. Arithmetic implies that the shift fills in the empty
      space with the most significant bit (bit strings are interpreted with the
      most significant bit on the left and least significant on the right).
      While all left shifts are logical, right shifts may be either logical or
      arithmetic and we’ll see why in a second. This may seem trivial now, but
      shifts are very important to bit manipulation so make sure you understand
      these distinctions before moving on. Here’s a chart to help you out:
    </p>
    <img src="@/assets/CS33/img10.png" />
    <p>
      There’s a couple important things to note here. First, you can visually
      see that there’s no difference between a logical and arithmetic left
      shift. That’s because left shifts are always logical. The second is that
      shifting by a negative number or by a larger number than the word size
      (bit string length) is undefined behavior, and we don’t like undefined
      behavior, so don’t do it.
    </p>
    <p>
      So why is moving bits around important? Well, let’s look back at how
      binary works. As you move to the left, digit by digit, the value of the
      digit increases by a factor of 2. As a result, shifting a number 1 digit
      to the left has the same exact effect as multiplying that same number by
      2. To the same effect, shifting to the right is the same as dividing by 2.
      Therefore a shift to the left/right by a number n is the same as a
      multiplication/division of 2n. We’ll come to realize that shifting instead
      of multiplying or dividing is much more efficient, so, whenever possible,
      we’ll see shifts replacing those operations.
    </p>
    <p>
      Now, you may be thinking, “WeLl ThEn WhAt Is ThE pOiNt Of ArItHmEtIc
      ShIftS” or “WhY wOuLd I dO tHaT wHeN i CoUlD jUsT mUlTiPly AnD dIvIdE”.
      Both of those are good questions that we’ll address eventually, along with
      what happens to numbers that get truncated by the bounds of a bit string.
      However, it is currently 12:22 a.m. and I am way too tired to be writing
      anything of value (not that this has been of value anyways) so I’m going
      to cut this off here and address some of those concerns in the next
      section.
    </p>
    <h3>Unit 1.3: Integers</h3>
    <p>
      You’re probably thinking that you know what an integer is, right? Well, I
      hate to break it to you, but compared to what you learned in the 3rd
      grade, there’s a lot more to this kind of integer.
    </p>
    <p>
      First of all, we should make a clarification. All data is represented by
      bits. The specific data type that is being represented is decided by the
      program, not by the bit structure. So the bit string 010010010 yadda yadda
      yadda could be an int, a char, a double, or whatever your heart desires.
      This specific characteristic of bit strings got asked about way too many
      times during lecture so please make me proud and remember it.
    </p>
    <p>
      Now that that’s out of the way, we can get into one of the more confusing
      topics this class has to offer. Integers are typically 4 bytes (32 bits)
      in the framework we’ll be concerning ourselves with. There are 2 basic
      types of integers: 2s complement and unsigned. 2s complement integers
      reserve the most significant bit to dictate whether the value is positive
      (0) or negative (1). Unsigned integers simply must be positive. This
      distinction and the tools used to implement it are where a lot of the
      complexity of this topic comes from, so be prepared for a deep dive.
    </p>
    <p>
      Let’s start off by trying to fully understand how these types work. As
      we’ve noted before, 2s complement integers reserve the most significant
      bit as an indication of if the value is positive or negative, but how
      exactly does this work? We’re gonna pretend for a moment that integers are
      4 bits because 32 is just too much typing for me. The binary value of 1000
      is 8 (if you don’t understand this, go back to the binary section and get
      this down), which is also the equivalent of the unsigned integer
      interpretation of that value. However, the 2s complement interpretation of
      this value is -8. So essentially, the most significant bit retains its
      normal value, but as a negative number. The rest of the bits behave
      exactly the same way, whether the bits are interpreted as 2s complement or
      unsigned. Mathematically, we can write this as:
    </p>
    <img src="@/assets/CS33/img11.png" />
    <p>
      Where X is the bit string, w is the number of bits in the string, and i is
      the index. Don’t worry too much about understanding this formula, it’s
      more important that you understand the overall concept.
    </p>
    <p>
      This behavior results in a lot of icky behavior when working with these
      types. First of all, let’s address the bounds of each integer type.
      Continuing under the assumption that integers are 4 bits, we can see the
      maximum value of an unsigned integer (Umax) is 15 (1111). However, the
      same bit pattern interpreted as 2s complement is -1 (-8 + 7). Keep this
      property in mind and try to prove to yourself that 111...1 in 2s
      complement is -1 for any length. As a result, the maximum value in 2s
      complement (Tmax) is 7 (0111). This property:
    </p>
    <img src="@/assets/CS33/img12.png" />
    <p>
      Actually also holds for bit strings of any length, and you should also be
      able to prove this to yourself. The final important boundary is the
      minimum value of a 2s complement integer (Umin): -8 (1000). Once again,
      prove this to yourself. You may have noticed that 2s complement integers
      have an asymmetric range, or:
    </p>
    <img src="@/assets/CS33/img13.png" />
    <p>
      Remember this. It’ll be important and annoying soon. Shown below is a nice
      graphic that may help you visualize these bounds:
    </p>
    <img src="@/assets/CS33/img14.png" />
    <p>
      Ok so not too bad so far. The next aspect of integers we have to cover is
      casting. At a very basic level, casting is going to involve a simple
      reinterpretation of the bit string. This means that the bits do not
      change, but their translation into a decimal value does. There are 2 types
      of casting: explicit and implicit. Explicit casting is when you declare
      the integer’s type while writing the code, such as in a variable
      declaration (int x) or a cast (y = (unsigned) x). On the other hand,
      implicit casting can occur in assignments (y = x, y is unsigned, x is
      signed), or expressions. Another important thing to note is that constants
      are 2s complement by default, and can be declared as unsigned by writing a
      U after them (0 vs. 0U).
    </p>
    <p>
      Now, the big thing to remember for integer casting is that 2s complement
      is implicitly cast to unsigned when both types of integers are present in
      an expression. So what does that mean? Let’s say you have an expression
      [Unsigned] > [2s complement]. Instead of doing what you would expect and
      comparing these at face value, the 2s complement value is interpreted as
      an unsigned integer.
    </p>
    <p>
      Why is this important? Well as we saw before, if a 2s complement value is
      negative, it is actually significantly positive when interpreted as an
      unsigned integer. This results in a lot of really annoying behavior such
      as -1 > 0U. It’s good for you to sit down and practice looking at these
      types of problems, because you really do have to train yourself to fight
      your intuition here. Don’t worry, it’ll get a little better in a bit (haha
      im so funny).
    </p>
    <p>
      This next thing can be pretty confusing, because, at least for me, it just
      doesn’t really feel right, but don’t overthink it. Let’s say we have some
      integer, and we want to fit it into a larger data type – think int to long
      – how do we do that? This is a process called sign extension, and it
      finally gives arithmetic shifts a reason to exist. The way to perform a
      sign extension is to perform an arithmetic right shift by however many
      bits you need to extend by. Transforming 1100 from 4 bits to 8, we get
      1111 1100. If you check this, you’ll see that both values are -4; proving
      this really works for all cases is up to you. So, to answer the question
      we posed before, if your integer is signed, perform a sign extension,
      otherwise, just throw however many 0s you need at the front (this should
      be obvious). In whatever case you may think of, this method will provide
      you with the correct value.
    </p>
    <p>
      The same cannot be said for the opposite operation: a truncation. Imagine
      trying to fit an int into a short. This obviously won’t work all the time
      – if it did, we wouldn’t need separate data types, conservation of energy
      would be contradicted, the economy would crash, and the universe would
      plunge into heat death. Ok maybe not all of that, but it really doesn’t
      always work. We won’t go into the same amount of depth that we did for
      expanding a bit string because, in reality, you really shouldn’t ever need
      to truncate a bit string enough to cause an error, but you essentially
      perform a modulus operation, and, if the number is small enough to fit in
      the final word size, you’ll be fine.
    </p>
    <p>
      Ok we’ve finally hit the last part of this topic. Mathematical operations
      really shouldn’t be this hard, but, because of what we’ve discussed so
      far, they are. The buzzword of the next couple paragraphs is overflow. So
      what does this mean? Imagine we have 2 unsigned integers 1111 and 0001.
      What happens if we try to add them together? We get 10000. Hm. That’s a
      problem. If we try to fit that back into an int, we get 0000. So according
      to this calculation 15 + 1 = 0. Fantastic. Let’s get into the details of
      this.
    </p>
    <p>
      The effects of overflow impact addition and multiplication of values (at
      least that’s what we’ll be discussing here). The way it impacts these
      operations depends on the type of integer we’re looking at. Take the
      unsigned example from above. We see that making the value overflow sends
      the result back down to 0. If we were to make it overflow by more than 1,
      1111 + 0110 for instance, it would continue increasing linearly from 0
      (0101).
    </p>
    <p>
      On the other hand, if you were to overflow a 2s complement number, instead
      of returning to 0, the number would become very negative. Imagine adding 1
      to Tmax (0111 + 0001). We would get the bit string 1000, or -8. Not only
      do you have to worry about this, but you also have to consider that since
      2s complement numbers can be negative, you can also overflow the number in
      the other direction. For instance, imagine adding -1 to Tmin (1000 +
      1111). We would get the bit string 0111, or Tmax. So overflowing in the
      negative direction results in a very positive number. Neither of these is
      the expected behavior. Moral of the story: watch out for overflow, it’s
      bad.
    </p>
    <p>
      Yay, we’re finally done with that. There is technically one more important
      thing that we have to address regarding integers called masking, but you
      should get more than enough practice with that during the Warmup/Data
      Labs. All of the issues we addressed above are going to contribute to
      making these labs so annoying to complete, but as long as you start early,
      you’ll be just fine.
    </p>
    <p>
      The last topic of this section is really short and straightforward, so
      let’s just get into it.
    </p>
    <h3>Unit 1.4: Memory Organization</h3>
    <p>
      We haven’t really gotten into any memory discussion yet, but this
      shouldn’t be too hard to understand anyways. Really, this topic is just
      going to set up some foundation for later.
    </p>
    <p>
      Let’s start with one of the most confusing terms of the section: word
      size. Now, the term isn’t confusing because it’s conceptually hard to
      understand, it just happens to be used for like 67.3 different meanings.
      Don’t ask me why. Earlier we said it referred to the length of a bit
      string. In this context, word size refers to the length of an address in a
      given system. An address is simply the name for a location that data lives
      in. Don’t worry too much about this right now, this is just prepping you
      for the next unit. The architecture that we’ll be dealing with for the
      majority of this class, x86-64, has a 64-bit word length.
    </p>
    <p>
      The next thing we want to introduce is the hexadecimal system. Become
      familiar with this, we’ll be seeing a lot of it. Just like decimal is a
      base-10 system and binary is base-2, hexadecimal is base 16. 10 is mapped
      to A, 11 to B, 12 to C, 13 to D, 14 to E, and 15 to F. Hex numbers are
      denoted by a 0x in front of the number. Just like we did with binary, we
      can show that:
    </p>
    <img src="@/assets/CS33/img15.png" />
    <p>results in:</p>
    <img src="@/assets/CS33/img16.png" />
    <p>
      Hopefully that should come fairly easy to you. Now you may be wondering,
      “Why base-16? My favorite number is 7.” Well, take a look at this. You may
      have noticed the maximum value of a hex digit is 15, the same as the
      maximum value for 4 bits. As a result, the maximum value of 2 hex digits –
      255 – is the same as the maximum value for 8 bits, or a byte! That means
      that any byte can be represented by 2 hex digits, and 2 digits is a lot
      easier to write than 8, so we’ll see this become useful shortly.
    </p>
    <p>
      The only other part of this section deals with byte ordering. Let’s
      imagine we have some memory:
    </p>
    <img src="@/assets/CS33/img17.png" />
    <p>
      This is not an array, it just happens to be an easy way to visualize this.
      Now let’s say we want to place the hex value 0x12345678 into memory, and
      each cell can hold a byte. How does it look afterwards? The answer to that
      depends on the convention that the system uses.
    </p>
    <p>
      One option is called big endian. Big endianness implies that the least
      significant byte occupies the highest address. Since the addresses
      increase from left to right, a big endian system would place the value
      like this:
    </p>
    <img src="@/assets/CS33/img18.png" />
    <p>
      That’s all nice and readable. However, the x86-64 architecture that this
      class focuses on uses the other convention: little endian. Little
      endianness implies that the most significant byte occupies the highest
      address:
    </p>
    <img src="@/assets/CS33/img19.png" />
    <p>
      Apart from these definitions, there are a couple very important things to
      note here. One, you can see that the pieces of the hex value contained
      inside the cells don’t switch order (12 stays in that order). This is
      because the endianness only affects the order that individual bytes get
      stored in memory, and a byte is 2 hex digits. The bits within individual
      bytes themselves do not get altered.
    </p>
    <p>
      The other important thing to note, and the cause of a lot of confusion
      later on, is that endianness only applies to integral types. This means
      that arrays, structs, etc. are stored in the same order you would expect –
      first element in the first address). The most confusing repercussion of
      this is that endianness has no effect on strings, as strings in C are
      simply arrays of chars. So, the string “Hello” would simply look like:
    </p>
    <img src="@/assets/CS33/img20.png" />
    <p>
      Regardless of endianness. You should also note the null byte at the end,
      they’re actually important now.
    </p>
    <p>
      There we have it! We’re done with the first unit of this class. Hopefully
      that wasn’t too bad. If your class is progressing anything like mine did,
      you’ll have seen a decent amount of interaction with the shell and work in
      GDB to demonstrate some of these concepts. Don’t be scared off by that, it
      looks confusing now, but you’ll be able to break that stuff down in no
      time. For now, it’s time to move on and crush that Data Lab, so set up
      your Linux servers and text editors and get coding. You got this!
    </p>
    <h2>Unit 2: Assembly</h2>
    <p>
      Ok so, let’s remember back to when we did programming in C/C++. Remember
      how nice and readable it was? Well those are both languages meant to be
      used for humans. Assembly isn’t nice or readable, it’s a low level
      language meant for computers. It’s not the worst thing in the world, but
      it definitely looks like it at first. I personally think it’s a lot of fun
      once you get the hang of it, but there are a lot of confusing hurdles to
      jump through at the beginning.
    </p>
    <p>
      There’s a hell of a lot to cover here, we’re basically learning the syntax
      for an entire programming language. A lot of it does build on itself, but
      it’s also fairly straight forward stuff, so I wouldn’t stress about it too
      much. This unit is home to the Bomb Lab, which is a really fun puzzle lab
      that should give you enough practice to get by.
    </p>
    <p>
      Whatever the case, there’s one thing that I can say for sure. This unit’s
      gonna be massive.
    </p>
    <h3>Unit 2.1: Basics of Architecture</h3>
    <p>
      While we’re gonna get a little more into it in a second, it’s nice to know
      why we want to look at the monstrosity from the previous page. Assembly is
      essentially a text form of the binary commands that a computer is reading.
    </p>
    <p>
      Whatever programming language you write your human-readable code in will
      get broken down and optimized into assembly by the compiler. This file
      will then be run through the assembler into an object file, which will
      then run through a linker to form an executable. Don’t concern yourself
      too much with this process, but it’s useful to have a basic overview here.
      There are some more steps in there, but we’ll fill in the gaps as we go.
    </p>
    <p>
      For this section of the class, we’ll be focusing on assembly in an x86-64
      architecture. This architecture uses a CISC (Complex Instruction Set
      Computer) design. This entails a wide variety of commands and formats,
      which is just wonderful for us. Towards the end of the class, we’ll go
      over an architecture with a RISC (Reduced Instruction Set Computer)
      design, but don’t worry about that for now.
    </p>
    <p>
      Now that you know a little bit about what we’re talking about, let’s look
      at a few definitions to get us started.
    </p>
    <p>
      The first thing we want to define is our instruction set architecture or
      ISA. For our purposes, these are the parts of a processor’s design that
      we’ll need to understand in order to write assembly code. An example of
      this that we’ll run into early on are registers.
    </p>
    <p>
      Next, is microarchitecture: the way our architecture is implemented. For
      instance, an older iteration of x86-64, called IA-32, had 32-bit
      registers, while we currently use 64-bit registers. The concept of
      registers themselves are still the same, but their implementation has
      varied with time.
    </p>
    <p>
      Finally, we want to make sure we distinguish between the 2 types of code
      we’re going to be talking about in this section: machine code and assembly
      code. Machine code is the byte-level programs that a processor executes.
      As we stated earlier, assembly code is a text representation of this
      machine code.
    </p>
    <p>
      With those out of the way, let’s take a real basic look at the pieces of a
      computer that we’re going to be working with:
    </p>
    <img src="@/assets/CS33/img21.png" />
    <p>
      Lots of new words here. You’ve probably heard most of them, but let’s make
      sure we’re on the same page before we get too deep.
    </p>
    <p>
      We have 2 major blocks here: the CPU (Central Processing Unit) and the
      memory. The CPU is where the execution of commands occurs, and uses the
      smaller blocks inside to perform tasks. Let’s take a closer look at those.
    </p>
    <p>
      The PC is the program counter, which holds the address of the next
      instruction to be executed. These instructions are stored in memory, and
      they are marked by addresses. While PC is a general name for it, this is
      called the %rip (instruction pointer) in x86-64, so moving forwards, just
      know they are synonymous.
    </p>
    <p>
      Next up are registers. These are really important, so pay attention here.
      Registers hold very commonly accessed data. Their purpose is to enhance
      program performance, as the registers are much faster to access than
      memory. This efficiency of access is going to be a major theme in this
      class, so get ready for that. When we say commonly accessed, we’re
      referring to things like parameters for a function, the current
      instruction we’re executing (%rip is a register), etc. The registers are
      constantly being managed by instructions, which move data in and out of
      the register file. These files are denoted by %[register name], and, in
      x86-64, can hold 64 bits.
    </p>
    <p>
      The last part of the CPU that we’ll look at for now are condition codes.
      Condition codes are specialized registers that store information about the
      most recently executed arithmetic or logical operation. For the most part,
      we’re going to use these with regards to conditional branching (think
      if-statements, while loops, etc.).
    </p>
    <p>
      Now, switching our focus to the memory side, let’s set up the way we’re
      going to view memory here. Remember from the previous section that we
      looked at it as an array. The easiest way to think about memory is as an
      array of bytes, with each element denoted by an address. Without going too
      in-depth right now, we’ll mention that the memory contains a code section
      and a data section, both of which we’ll break down in this unit.
    </p>
    <p>
      I’m pretty sure you understood little to none of what I just said. Don’t
      worry, I’m just building a little foundation before we move on. The real
      learning will come in the next few sections.
    </p>
    <h3>Unit 2.2: Registers</h3>
    <p>
      Like I said, registers are massively important when it comes to assembly.
      Although I expect most of your understanding of this stuff to come from
      messing around inside object dumps and GDB, I’ll do my best to introduce
      you to some stuff here.
    </p>
    <p>
      First of all, let’s look at an overview of the integer registers in
      x86-64:
    </p>
    <img src="@/assets/CS33/img22.png" />
    <p>
      One of the more confusing aspects of registers are the light gray boxes
      you see above. These are a remnant of older architectures that x86-64 was
      built off of. Since older architectures could only support 32, 16, or 8
      bytes, they had smaller registers. However, in an effort to support
      backwards compatibility, our modern registers still contain these old
      registers. We’ll call these registers lower-order registers, and there’s
      some specific behaviors regarding them that we’ll get into later.
    </p>
    <p>
      The way these lower-order registers work is our modern register holds 64
      bits. The lower-order 32 bits of our modern registers will act as the
      lower-order register. So essentially, these registers overlap with each
      other, and we can choose to access the lower-order registers if we don’t
      need to use the full 64 bits of the modern registers. However, it would be
      impossible to store 2 different things in say, %rax and %eax, since they
      overlap and will overwrite each other.
    </p>
    <p>
      Taking an even closer look at some of the registers, we can see even more
      lower-order registers:
    </p>
    <img src="@/assets/CS33/img23.png" />
    <p>
      The registers like %dx or %di are 16-bit registers, which can then be
      broken up into high and low registers (%dh and %dl), which are 8-bit
      registers. Like before, all of these are a remnant of old architectures
      that can still be accessed in modern systems.
    </p>
    <p>
      Another thing worth noting is that %rsp is a special register responsible
      for storing information regarding the stack in memory. We’ll look at this
      later on in the unit, but for now, just remember it’s a special boy.
    </p>
    <p>
      The final thing I want to bring up here is that, by convention, %rax holds
      the return value of a function at the end of a function call. This does
      not mean %rax is unused while the function is being executed, it just
      means the final value will end up in %rax. Definitely keep this in mind as
      we move on and start to look at assembly code.
    </p>
    <p>
      We’ll probably need to expand on a few things later, but this is a good
      enough foundation to start getting into assembly for realsies.
    </p>
    <h3>Unit 2.3: Arithmetic and Logic</h3>
    <p>
      Now, let’s finally get to work on some instructions. The most basic
      instruction that we’ll start off with is the mov instruction. mov copies
      data from the source to a destination with the format:
    </p>
    <img src="@/assets/CS33/img24.png" />
    <p>
      Src and Dest are operands for this operation, and most instructions within
      x86-64 will follow this formatting. There are 3 types of operands here:
      immediates, registers, and memory. An immediate is just a constant, and is
      denoted with a $ preceding the number. For example, $0x400 or $-400 could
      be passed in as the source operand to move a constant into a location.
      Registers are just what you’d think. You can use an integer register like
      %rax as an operand and move data into and out of the register. Finally,
      memory would be an address that you’re trying to move data into and out
      of. There are a variety of syntaxes you could use to represent memory
      called memory addressing modes, but the simplest would be something like
      (%rax). We’ll get into what that means in a second.
    </p>
    <p>
      Looking at these operands, it’s worth noting what you can and can’t use
      them for. In terms of a mov instruction, you cannot use an immediate as a
      destination. That should make sense. What does it mean to move the value 5
      into the value 400? Absolutely nothing that’s what. You also cannot use
      memory as both a source and a destination. In other words, you cannot move
      from memory into another location in memory with a single mov instruction.
      Other than these, any combination of source and destination is valid. So,
      in summary:
    </p>
    <img src="@/assets/CS33/img25.png" />
    <p>Let’s look at a breakdown of some code:</p>
    <img src="@/assets/CS33/img26.png" />
    <p>
      So, within some imaginary program, these lines of code all mean the same
      thing. The first line is just like code you would see in C. The second
      line is assembly code, and the third line is machine code. From the C
      code, we can see that what this code does is it takes the data of t and
      copies it into the location pointed to by dest.
    </p>
    <p>
      As you see above, this mov is followed by a q. Some instructions in x86-64
      may have suffixes. In this case q means quadword, which tells us that the
      mov is copying an 8 byte value. Some other suffixes you’ll see are b for
      byte (1 byte), w for word (2 bytes), and l for long (4 bytes). Be careful
      when looking at these suffixes because the naming might be confusing. For
      instance, a long in suffix terms is 32 bits, but a long data type can
      store 64 bits.
    </p>
    <p>
      Looking more specifically at the above example, we see that the value in
      %rax is being copied into (%rbx). Based on our interpretation of the C
      code, we can safely assume that the value of our variable t is being
      stored in %rax. What about the (%rbx)? Well, when we have parentheses
      around a register like this in a mov instruction, it means we are
      dereferencing a pointer. As we mentioned earlier, this is the simplest
      memory addressing mode we will be dealing with. What that means is that we
      take the data in %rbx, and use it as an address. We will then visit that
      address and use the data stored there. As a result, we know that %rbx must
      be the variable dest, and, therefore, (%rbx) is the data pointed to by
      dest.
    </p>
    <p>
      Hopefully that made sense to you. In summary, we are taking the value at
      %rax and copying it to the location pointed to by %rbx. If you need to,
      take time to go back and fully understand what’s going on here, this
      material constantly builds on itself so if you get lost early, it’s gonna
      be no bueno for you.
    </p>
    <p>
      Finally, we can look at the machine code. The hex of 48 89 03 encodes this
      specific mov instruction. As we said in the previous topic, instructions
      are stored in memory. The hex address of 0x40059e is where this
      instruction’s encoding is located. Although we won’t be too worried with
      machine code right now, it’ll become useful later in the unit.
    </p>
    <p>
      Moving along, we can now expand our view on memory addressing modes. As
      mentioned above, parens around a register is the most basic memory
      addressing mode, however, the more general mode looks like this:
    </p>
    <img src="@/assets/CS33/img27.png" />
    <p>
      Whole lot to go over here. The most basic component is Rb, which is the
      base register. This could be any of the 16 integer registers. The address
      in this base register is where our memory address will start. From there,
      we then look at Ri, which is an index register. This could be any integer
      register other than %rsp. This is multiplied by the scale, S, which is
      either 1, 2, 4, or 8. These conditions are designed to create an offset
      from the base register based on the index register. Finally, we have D,
      the displacement. This is a constant value of 1, 2, or 4 that represents a
      number of bytes to add to the rest of the memory address.
    </p>
    <p>
      Let’s look at some quick examples of this. Assuming we have the initial
      conditions of:
    </p>
    <img src="@/assets/CS33/img28.png" />
    <p>Here are some possible memory computations:</p>
    <img src="@/assets/CS33/img29.png" />
    <p>
      We’ll likely be seeing a lot of this memory addressing mode in the future,
      so get familiar with it. It may not seem very intuitive now, but you’ll
      understand its ins and outs soon enough.
    </p>
    <p>
      With that done, we’ll look at 1 final example for mov. Take the C code
      below:
    </p>
    <img src="@/assets/CS33/img30.png" />
    <p>When translated to assembly, we’ll get something along the lines of:</p>
    <img src="@/assets/CS33/img31.png" />
    <p>
      Assuming %rax is t0, %rdx is t1, %rdi is xp, and %rsi is yp, our initial
      setup looks something like:
    </p>
    <img src="@/assets/CS33/img32.png" />
    <p>
      With registers on the left and memory on the right. Our first instruction
      tells us to move the value pointed to by %rdi into %rax. We’ll do this by
      dereferencing the 0x120 in %rdi, and then copying that value into %rax:
    </p>
    <img src="@/assets/CS33/img33.png" />
    <p>Next, we’ll do the same process with %rsi and %rdx:</p>
    <img src="@/assets/CS33/img34.png" />
    <p>
      Now, we’ll start moving the values from the registers into memory for the
      next 2 mov commands:
    </p>
    <img src="@/assets/CS33/img35.png" />
    <p>And now, our swap is complete.</p>
    <p>
      Now we can move on to the second instruction I want to introduce in this
      part: lea. This instruction tends to cause a lot of confusion, so try to
      stay with me here. Much like a mov, lea has the format:
    </p>
    <img src="@/assets/CS33/img36.png" />
    <p>
      An lea is very similar to a mov with 1 key difference: lea doesn’t
      dereference addresses. This characteristic makes lea useful for a couple
      things. For instance, the C code:
    </p>
    <img src="@/assets/CS33/img37.png" />
    <p>
      Requires us to get the address of x[i], not the contents of the address,
      so lea would be used here. We can also leverage the general memory
      addressing mode and lea to perform arithmetic operations like 50 + 2(6) in
      a single operation (look back at the memory addressing mode paragraph if
      you don’t understand why).
    </p>
    <p>
      Since we’ve covered most of the basics of the formatting, let’s jump right
      into an example. Taking the C code:
    </p>
    <img src="@/assets/CS33/img38.png" />
    <p>
      Assuming x was stored in %rdi, we could translate this into assembly as:
    </p>
    <img src="@/assets/CS33/img39.png" />
    <p>
      Since that first instruction has the complex memory addressing mode, what
      we’re doing is taking the contents of %rdi, and then adding it to the
      contents of %rdi multiplied by a scale of 2. Since this is an leaq, we
      don’t dereference this value, we move it straight into %rax. If this were
      a mov, we would take that value from the address computation and use it as
      a memory address.
    </p>
    <p>
      So now, the value equivalent to 3x is located in %rax. The next
      instruction is salq, which stands for shift arithmetic left. The
      instruction is telling us to left shift the value in %rax by 2, which is
      equivalent to a multiplication by 4 (go back to shifts if you don’t
      understand why). As a result, the value of 12x is now in %rax, and we can
      return.
    </p>
    <p>
      Segueing off of that last instruction, there are many arithmetic
      instructions we’re going to be dealing with. For the most part, they’re
      pretty self-explanatory, but the ones that aren’t will come to you with
      practice:
    </p>
    <img src="@/assets/CS33/img40.png" />
    <p>
      All of these instructions have the same format as mov and lea
      instructions, and dereference addresses.
    </p>
    <p>
      We’re going to cap this section off with an example that uses a lot of
      what we’ve gone over so far. Here’s more C code:
    </p>
    <img src="@/assets/CS33/img41.png" />
    <p>If x is stored in %rdi, y in %rsi, and z in %rdx, this leads to:</p>
    <img src="@/assets/CS33/img42.png" />
    <p>
      Now this probably doesn’t look anything like the C code to you. When I
      first introduced assembly, I noted that the compiler makes optimizations
      that make the assembly code less taxing on the system. This is a great
      example of that.
    </p>
    <p>
      So the first line is probably what you’d expect to happen. We take %rdi
      (x) and add it to %rsi (y). Once again, since we use leaq, no
      dereferencing occurs, and our result is stored in %rax. That operation is
      what we’d recognize from our C code as the computation of t1. The next
      line is also kinda what we’d expect. We take the value in %rdx (z), and
      add it to %rax, which was our previously calculated value. Notice that we
      overwrite the value of t1 to create t2. More on this in a second.
    </p>
    <p>
      Now here’s where we get a little wonky. The next line adds %rsi to 2 times
      %rsi (y + 2y = 3y) and moves it into %rdx. That definitely isn’t in the C
      code. The next line then shifts that result to the left by 4 bits. Well,
      being the smarticle particles that we are, we know this represents an
      efficient multiplication by 16. %rdx therefore is holding the value of
      48y. Ok, that is actually in our C code. That’s how we calculate t4, but
      what about the t3 calculation? Well, moving on, we see we are adding 4 to
      the sum of %rdi (x) and %rdx (48y). Weird. If we look back at the C code,
      you’ll see this is how t5 is calculated.
    </p>
    <p>
      As you can see, the compiler is smart enough to make these kinds of
      optimizations. It knows that t3 and t4’s sole purpose in life is to make
      t5 (how sad), so it condenses the operations that make up that summation
      into as few instructions as possible. This is the same reason we overwrite
      t1, since all t1 does is calculate t2. We then finish off with a simple
      multiplication of the 2 values we still have stored and then return. Note
      here that we cannot make the multiplication more efficient using shifts
      because both operands of the multiplication are variables, so we don’t
      know how much we’re multiplying by at compile time.
    </p>
    <p>
      Ok that section was a lot denser than I expected it to be, but hopefully
      you came out of it with at least a little understanding of what we’re
      getting into. This stuff is really hard to explain through this medium,
      but I’m giving it my best shot. You better be too.
    </p>
    <h3>Unit 2.4: Condition Codes</h3>
    <p>
      Before we can really move on to our next set of instructions, we have to
      take a deeper dive into condition codes. As mentioned earlier, these are
      special registers that store information about the last arithmetic or
      logical operation. There are 4 condition codes, which are each a single
      bit register: the carry flag (CF), zero flag (ZF), sign flag (SF), and the
      overflow flag (OF). Since these flags are just a single bit, they only
      have 2 states: 1 for set and 0 for unset.
    </p>
    <p>
      These flags can be implicitly set by arithmetic operations (not lea). If
      the operation generates unsigned overflow, the carry flag is set. If the
      result of the operation is equal to 0, the zero flag is set. If the result
      is negative, the sign flag is set. If signed overflow occurs, then the
      overflow flag is set. These flags can then be used for the next operation,
      and if they aren’t, they’re simply thrown away next time the flags are
      set. In addition to this implicit setting, we can also set these flags
      explicitly. This is done through a small set of instructions such as:
    </p>
    <img src="@/assets/CS33/img43.png" />
    <p>
      These instructions don’t do anything other than modify the condition
      codes. In the cmp instruction used above, this modification is done by
      subtracting Src2 from Src1, and using the result to set flags. However,
      notice that both operands for the instruction are sources. This is because
      the result of these instructions is not stored. Their sole purpose is to
      set condition codes. Another such instruction is:
    </p>
    <img src="@/assets/CS33/img44.png" />
    <p>
      Instead of subtracting the operands to set flags, this test instruction
      computes an And operation. This command is especially useful when you’re
      trying to mask a number, a concept that I should’ve talked about in the
      bit manipulation section, but didn’t because I’m lazy and I believe in
      your ability to succeed without me.
    </p>
    <p>
      As I mentioned earlier, these condition codes are constantly getting
      overwritten as a program runs. So what if we wanted to save a condition
      code for later use? Well I’ve got just the instruction(s) for you:
    </p>
    <img src="@/assets/CS33/img45.png" />
    <p>
      Based on the conditions in the right column, these set instructions will
      set the lowest order byte of a destination to 0 or 1. The remaining 7
      bytes of the destination aren’t altered. This is where those lower-order
      registers come into play:
    </p>
    <img src="@/assets/CS33/img46.png" />
    <p>
      Now, pay attention to how only these lower-order registers are modified by
      the set instructions. In order to actually make use of these, we need to
      zero out the rest of the register. This is done through the command:
    </p>
    <img src="@/assets/CS33/img47.png" />
    <p>
      movz is essentially a mov command that zeroes out the remaining bits in
      the register. One thing that we didn’t touch on when we originally covered
      the mov command is that we can actually specify 2 sizes when using the
      command. Take this C/assembly code for instance:
    </p>
    <img src="@/assets/CS33/img48.png" />
    <p>
      As we can see, the result of the comparison of x and y is written into
      %al. Afterwards the rest of the register is zeroed. The suffix of the movz
      here is bl, which tells us we’re moving from a b/byte (1 byte) to a l/long
      (4 bytes). An important thing to note is that when we perform instructions
      on 4 byte registers, such as %eax, the upper 4 bytes of the register are
      automatically zeroed. The result here will be that %rax contains the value
      1 if x > y and 0 otherwise.
    </p>
    <p>
      With that material covered, we can finally get into the more interesting
      instructions.
    </p>
    <h3>Unit 2.5: Control Flow</h3>
    <p>
      So here’s where assembly starts getting kinda fun. That might sound like
      sarcasm, but yes, I did actually enjoy this part of the class. No that
      doesn’t mean you can bully me.
    </p>
    <p>
      The heart of control flow in assembly is the collection of jump
      instructions:
    </p>
    <img src="@/assets/CS33/img49.png" />
    <p>
      These j instructions will jump to a different part of the code based on
      the state of the condition codes by manipulating the instruction pointer,
      %rip. You may notice our suffixes are the same as the set instructions,
      with an additional entry for an unconditional jump (jmp). Don’t worry
      about using brute force memorization to get these down. For the most part,
      you can use common sense to figure out what these mean when you come
      across them. Let’s take a look at an example:
    </p>
    <img src="@/assets/CS33/img50.png" />
    <p>
      If we place x in %rdi and y in %rsi, then we’ll write this in assembly as:
    </p>
    <img src="@/assets/CS33/img51.png" />
    <p>
      As we can see, we have a cmpq that compares x and y. Remember that this
      effectively sets conditional codes by subtracting y from x. If x is less
      than or equal to y, the jle will jump the %rip to the label .L4. You can
      follow through the rest of the assembly yourself.
    </p>
    <p>
      Before moving on, I really, really, really (that’s a lot of reallys) think
      you should be comfortable reading the above example at this point. If you
      aren’t, I’d recommend going back in your notes/this guide/whatever to
      review because you need a strong foundation if you’re gonna succeed here.
      Don’t worry, I’ll wait for you.
    </p>
    <p>
      In addition to these conditional jumps, we also have conditional moves.
      Now, the reasoning behind this instruction is going to require information
      about computer architecture that we’ll be covering much later in the
      class, so I won’t get into it now. Just know that the option to have a
      conditional move is beneficial to performance. Let’s take a look at the
      same C code from before:
    </p>
    <img src="@/assets/CS33/img52.png" />
    <p>
      Under the same assumptions, we can translate this into assembly with a
      different structure:
    </p>
    <img src="@/assets/CS33/img53.png" />
    <p>
      In essence, what we’re doing here is we’re calculating the result from
      both branches first. This means that we’re storing the value of x - y and
      the value of y - x in registers. We then perform the cmpq, and, if x is
      less than or equal to y, we perform the conditional move, cmovle. Read and
      reread that example until you fully understand the structure of what’s
      happening here. You’re smart, it won’t take you long.
    </p>
    <p>
      This process may seem less efficient because it uses more space, but it is
      actually more optimized than the first implementation we looked at. Like I
      said, we’ll talk about it more later. Of course, conditional moves can’t
      fully replace conditional jumps. For instance, what if instead of a simple
      subtraction, each branch contained a complex function? At that point, the
      benefit we get from avoiding branching is outweighed by the drawbacks of
      performing a lot more calculation. Or what if the operations in either
      branch have a chance of causing undefined behavior? Take the following
      expression for example:
    </p>
    <img src="@/assets/CS33/img54.png" />
    <p>
      If we use a conditional move here, we’ll be dereferencing p before we’ve
      confirmed that it’s not a null pointer. That’s a big yikes from me dawg.
      Finally, what if our branches had side effects? For instance, both
      branches may modify the same variable. In that case, the variable would be
      subject to both modifications and our program would explode.
    </p>
    <p>
      In summary, we don’t want to use conditional moves for expensive
      computations, risky computations, or computations with side effects. Those
      are all big no-nos.
    </p>
    <h3>Unit 2.6: Loops and Switches</h3>
    <p>
      Naturally, now that we’ve looked at if-statements, our next stop is with
      loops. Generally, we have very similar structures across each type of
      loop, and they aren’t that different from what we’ve been looking at so
      far. We’ll start with the loop you haven’t used since CS 31, the do-while
      loop. Bam, C code:
    </p>
    <img src="@/assets/CS33/img55.png" />
    <p>
      Taking a look at this C code, we can see that this is a program that takes
      an unsigned integer and counts how many 1s are in its bit string. Making
      sure you understand that is a good way to review the first unit. If we
      translate this into assembly with x in %rdi, we have:
    </p>
    <img src="@/assets/CS33/img56.png" />
    <p>
      As we can see as we move down the assembly, we’re performing all the
      actions inside the do-while first. Then, we hit a conditional jump that
      jumps us backwards in the code, modeling a loop structure. If you
      understand the last section, this should seem pretty intuitive for you.
      Instead of jumping to a separate branch, we’re just jumping back to
      previously executed code. Once again, although we have a little more
      complexity this time, you should be comfortable following everything
      that’s happening above. Trust me, Bomb Lab is going to be much harder than
      this.
    </p>
    <p>
      Now, let’s take the example we just walked through and rework it so that
      it’s a simple while loop:
    </p>
    <img src="@/assets/CS33/img57.png" />
    <p>
      Obviously, at a high-level, the main difference here is that while loops
      check the condition before entering the loop. Otherwise, it’s exactly the
      same as a do-while loop. If you want a nice exercise, try translating this
      while loop into assembly. Your result should look fairly similar to the
      example I gave you for the do-while structure.
    </p>
    <p>
      Did you do the example? No, right? That’s fine I guess, some people suck
      more than others, I get it. We’ll just move on to the final type of loop:
      a for loop. As we know, for loops have 3 main parts: an initialization, a
      test, and an update. If we were to rewrite our function as a for loop,
      we’d have something like:
    </p>
    <img src="@/assets/CS33/img58.png" />
    <p>
      It’s likely that you’ve been taught before that a for loop can be
      converted into a while loop. If we really wanted to, we could keep all the
      components from above and rewrite the function as:
    </p>
    <img src="@/assets/CS33/img59.png" />
    <p>
      Hopefully you’re starting to see my point. We treat these loops as
      separate structures when we’re coding at a high level, and for good
      reason. They all have their uses in different situations. However, as we
      translate this into a lower level, we see that these loops are all built
      from the same foundation in assembly. There is very little difference
      between how we implement them at the machine level, so differentiating
      between them when we analyze assembly is just unnecessary.
    </p>
    <p>
      Now, here’s where you can redeem yourself if you didn’t do my practice
      problem before. Write this for loop in assembly. Come on. Don’t disappoint
      me. If I can spend 50 hours writing a guide for you, you can take 5
      minutes to do this. Yes, I’m absolutely guilt tripping you, but it’s for
      your own good.
    </p>
    <p>
      Ok now that we’re done with loops, we need to cover the most confusing
      part of assembly: switch statements. There’s a lot to cover here, so let’s
      walk through an example:
    </p>
    <img src="@/assets/CS33/img60.png" />
    <p>
      When we have a switch statement, we have a lot of different possibilities
      in terms of cases. We have normal cases like 1 and 3, where we perform
      some computation and then break from the statement. We have duplicate
      cases like 5 and 6, where both labels will direct us to the same
      computation. We have fall-through cases like 2, where we perform the
      computation, and then proceed until we hit a break. And finally, we have
      missing cases, like 4, which have no label.
    </p>
    <p>
      Try to stay with me here. switch statements are implemented using
      something known as a jump table. Jump tables are tables of addresses that
      hold the code block located within each individual case. Here’s an attempt
      to visualize what I’m talking about:
    </p>
    <img src="@/assets/CS33/img61.png" />
    <p>
      So, this jump table is essentially an array of pointers to the locations
      for each case statement. Hopefully, the diagram explains this better than
      I do. Let’s take a look at how this all works in assembly. Since there’s a
      lot to cover here, let’s break this into parts. We’ll be using the C code
      above, with x in %rdi, y in %rsi, and z in %rdx. Starting with setup:
    </p>
    <img src="@/assets/CS33/img62.png" />
    <p>
      Ok, so we’re not dealing with the jump table just yet. Ignore the first
      line for now, we’ll come back to it later. You’re probably wondering why
      we’re comparing x to 6 here. Well, the compiler knows our highest case is
      6. If we enter an input that’s greater than 6, we automatically know we’re
      going into the default case (.L8). In addition, since we’re using ja
      instead of jg, we’re implicitly checking for negative values as well,
      since ja uses an unsigned interpretation of the number, and any negative
      number would be interpreted as a large positive value when unsigned.
      Remember, compiler’s are smart bois.
    </p>
    <p>
      Assuming we pass that conditional jump, we know that our value of x is
      between 0 and 6. At this point we’ll hit the unconditional jump that’s
      going to take us into our jump table. You can tell that’s the case, since
      the jump takes us to some label .L4 plus 8 times the value in %rdi. That
      will give us some address in the jump table, which is then dereferenced,
      and that final location is where our %rip will jump to. This type of jump
      that contains a dereference is called an indirect jump. For the purposes
      of this class, an indirect jump will only be used when looking at switch
      statements. Whew, that was a lot. I actually want to take a closer look at
      that last statement before moving on though.
    </p>
    <p>
      Remember that our jump table is an array of pointers. In x86-64, pointers
      are 8 bytes long. As a result, multiplying 8 by the value in %rdi (between
      0 and 6) is effectively indexing an array. If .L4 is the starting address
      of the jump table, adding 8, 16, 24, etc. bytes is how we traverse that
      jump table. Kinda cool. Let’s take a look at what our jump table actually
      looks like:
    </p>
    <img src="@/assets/CS33/img63.png" />
    <p>
      We can ignore a lot of the contents of this object dump for now. The
      important thing to see is how this works as an array, and how the indexing
      works. After the L4 label, each line is effectively 8 bytes. The indirect
      jump sets up which of these indices we’ll end up jumping to.
    </p>
    <p>
      You may have noticed our values for x conveniently match up with indices
      of an array, but what happens if our cases aren’t nice and easy? As long
      as the values are grouped together nicely, the compiler will take care of
      this for you. For instance, if your case numbers are 100–110, the compiler
      will automatically write assembly code to subtract 100 from this value
      before indexing your jump table. If your values aren’t grouped nicely,
      well, let’s not worry about that. If it’s not in the scope of the class,
      it’s not in the scope of my guides.
    </p>
    <p>
      Let’s look at some of the labels in the table. Notice that 0 and 4 both go
      to .L8. This is the same label that was present in the assembly from
      before, and was a jump destination for any negative x values or x values
      greater than 6. This confirms to us that .L8 is the location of the
      default case code, since we have no cases for 0 or 4 either. We can see
      that 1 jumps to L3 and 3 jumps to L9, both of which are unique to those
      specific indices. Once again, this makes sense since those values
      represent normal cases, which contain unique code. We can also see that 5
      and 6 both jump to L7. If we remember back to the C code, 5 and 6 were
      duplicate cases, so it’s expected that they jump to the same code. The
      only thing we can’t directly read off this table is case 2, which jumps to
      .L5. We know from the C code that case 2 falls through into case 3, but we
      can’t see it here. We can assume that the code in .L5 will find its way
      into the code for case 3 due to the nature of fall-through cases, however.
    </p>
    <p>All that’s left to look at are the code blocks that are jumped to:</p>
    <img src="@/assets/CS33/img64.png" />
    <p>
      Feel free to look through this and match it up to the C code for practice.
      I will warn you, there is a notable amount of added complexity for
      optimization here, but if you can work it out, you’re the best.
    </p>
    <p>
      We did it! Sorry for the long section, but there’s just so much to cover
      when it comes to assembly. We’re only halfway done.
    </p>
    <h3>Unit 2.7: Stack Structure</h3>
    <p>
      Before we get into another big boy section, we’re going to need to
      backtrack and cover the stack discipline. The stack is a region of memory
      that contains data relevant to execution of the current program. The stack
      grows and shrinks depending on what the program needs to store. We will
      visualize the stack as follows:
    </p>
    <img src="@/assets/CS33/img65.png" />
    <p>
      Immediately, I want to note that the addresses I wrote in the diagram do
      not accurately represent the addresses in the stack. The stack is only a
      section of memory; it doesn’t take up all the addresses. The point I want
      to get across is that the stack grows towards lower numerical addresses.
      As you can see, the top of the stack is at the lowest address in the
      stack. When new data gets pushed onto the stack, it is pushed in at these
      lower addresses. The bottom is static, its address doesn’t change.
    </p>
    <p>
      In addition, we mentioned earlier that the register %rsp is a special
      register. This diagram shows why. %rsp points to the address of the top
      element of the stack. This pointer is what allows us to grow and shrink
      the stack based on our needs.
    </p>
    <p>The first operation we’ll look at in relation to stacks is:</p>
    <img src="@/assets/CS33/img66.png" />
    <p>
      push gives us the ability to push items onto the stack. As we said, these
      items are pushed onto the top of the stack, growing it. A very important
      thing to remember here is that we are not creating or destroying any
      memory when we modify the stack. All we are doing is telling our system
      that the stack is taking up more or less space in memory. With that in
      mind, the way push works is by decrementing %rsp by 8, and then writing
      the operand passed in by Src into the new address of %rsp. Take this stack
      for example:
    </p>
    <img src="@/assets/CS33/img67.png" />
    <p>
      Pretend that each shaded in box is 8 bytes. If we were to call a push
      instruction on the stack, we’d have:
    </p>
    <img src="@/assets/CS33/img68.png" />
    <p>
      Remember that the stack grows towards lower addresses. So, we decrement
      %rsp in order to make room on the stack for the item we’re pushing in.
      Afterwards, the new item is then pushed into the new space (the blue in
      the diagram).
    </p>
    <p>
      The antithesis (guess who broke out the thesaurus) of the push instruction
      is:
    </p>
    <img src="@/assets/CS33/img69.png" />
    <p>
      pop works with the same concepts as push does. As you probably guessed,
      pop is our way of shrinking the stack by taking the value at %rsp and
      moving it into Dest. This is done by reading the value at %rsp first, and
      then incrementing %rsp by 8, then storing the read value into Dest. If you
      remember from earlier in the section, memory to memory operations are not
      supported by x86-64, so Dest here is required to be a register. Neither of
      these instructions should be too foreign to you, they’re essentially the
      same as the functions you’d call when dealing with the stack data type in
      C++. However, it is important that you understand how they’re implemented,
      along with how the stack behaves.
    </p>
    <p>Alright, now you’re ready for the big leagues kid.</p>
    <h3>Unit 2.8: Procedure Calls</h3>
    <p>
      Procedure calls are a special way to alter the control flow of a program.
      They typically pass data in the form of arguments and return values back
      to the original caller. Obviously, the most familiar form of these calls
      are functions. Based on this description, there are a lot of factors to
      take into account when we’re looking at procedure calls. How do we pass
      the data between procedures? How do we allocate memory for each procedure?
      What does this look like in assembly? All this, and more, on the next
      episode of CS 33.
    </p>
    <p>
      As with everything else in this class, the only way to look at this is
      with an example. So here’s some C code:
    </p>
    <img src="@/assets/CS33/img70.png" />
    <p>
      Take a second to soak in what we’re doing here. It’s not complicated. The
      key part of this example is the call to mult2 inside of multstore. Let’s
      take a look at what this looks like in assembly:
    </p>
    <img src="@/assets/CS33/img71.png" />
    <p>
      Oh yeah, we have to deal with memory addresses in our assembly now. You
      know what that means? It means it takes me 5 times as long to write these
      examples. If you still don’t believe that I want you to succeed, then I
      don’t know how to prove it to you anymore.
    </p>
    <p>
      As we can see here, we have our new pop and push instructions as well as a
      new one. The instruction:
    </p>
    <img src="@/assets/CS33/img72.png" />
    <p>
      Is our mechanism for performing a procedure call. call will push the
      return address onto the stack to access later. The return address in this
      case is the address of the instruction following the call. We’ll explain
      this further in a second. After pushing the return address onto the stack,
      the instruction will then jump to Label, and begin executing instructions
      there. This means that call is effectively a push and a jmp in the same
      instruction.
    </p>
    <p>
      Now, to better understand this, we need to take a closer look at the ret
      instruction. We’ve been seeing it in our assembly since the beginning, and
      taking for granted that it’s just a return. But how does this work in the
      scope of the stack? ret essentially functions as a pop and a jmp. It pops
      the address off the top of the stack, and then jumps to that address. This
      address that is popped is assumed to be the return address of the caller.
      This assumption can be very dangerous, but more on that next unit. In this
      case, the retq in mult2 will jump to the return address provided by
      multstore’s callq. This is why the return address provided by callq is of
      the instruction following the callq. Once mult2 is executed and returns,
      the next instruction that should be executed is what follows the function
      call.
    </p>
    <p>Let’s visualize this to help us out:</p>
    <img src="@/assets/CS33/img73.png" />
    <p>
      If we take a look at the registers, we can get some information about
      where we are in the program. %rsp is pointing to 0x120, so we know that’s
      currently the top of the stack. %rip is pointing to 0x400544, which is the
      address of the callq to mult2, so that’s the next instruction that’s going
      to be executed. Once this callq gets executed, our diagram now looks like:
    </p>
    <img src="@/assets/CS33/img74.png" />
    <p>
      As we can see, the stack has grown and %rsp has been decremented by 8
      bytes (remember, these are hex addresses, not decimal). We also see that
      this new space on the stack has been filled by the address of the
      instruction that follows the callq. Finally, our %rip now contains the
      address 0x400550, which is the starting address of mult2. All of this is
      the expected behavior of a callq instruction, and if you don’t see why, go
      back and review what the callq does.
    </p>
    <p>
      Now, there’s some code that gets executed in the mult2 function that you
      can feel free to look at and trace, but we’re more interested in the new
      material, so let’s fast forward:
    </p>
    <img src="@/assets/CS33/img75.png" />
    <p>
      At this point, we’re ready to execute the retq in mult2, so let’s see what
      happens:
    </p>
    <img src="@/assets/CS33/img76.png" />
    <p>
      The retq pops the return address into %rip, and then increments %rsp to
      shrink the stack. At this point in the program’s execution, it will just
      continue on within multstore.
    </p>
    <p>
      Ok, so that was a very basic example of a procedure call. You shouldn’t
      have too much trouble understanding it if you’ve absorbed everything up to
      this point. Let’s complicate things a little. What if we needed to pass
      data to a procedure call? We need to do this when we call a function with
      parameters. In the above example, we kinda just glanced over it because of
      how simple the example was. Well, by convention, the first 6 parameters
      are stored in registers. In order, they will be placed into %rdi, %rsi,
      %rdx, %rcx, %r8, and %r9. This allows there to be a lot less overhead when
      these procedure calls are trying to access the relevant data. However,
      because we are limited in registers, the 7th parameter and onwards will
      simply be placed on the stack in reverse order (the 7th is on the top).
    </p>
    <p>
      If we do take a look back to the code for mult2, we’ll see that it has 2
      parameters: x and y. In the assembly, you’ll see that the function
      multiplies the contents of %rdi by %rsi, which is what we’d expect based
      on our ordering of data saving. Obviously, all this register saving and
      calling to or returning from procedure calls can get very messy very
      quickly. We manage these into stack frames, which each hold data relevant
      to a single instance of a procedure call. At the bare minimum, a stack
      frame must hold any information needed to return to the caller of the
      procedure call. This includes a return address, saved data (we’ll get to
      this later), etc.
    </p>
    <p>
      Stack frames can also hold any local or temporary storage the procedure
      call needs to execute properly. All of this is managed by code that sets
      up a given stack frame upon entering a procedure call, which generally
      entails decrementing %rsp by some value to allocate space on the stack.
      This is then later cleaned up by finishing code when returning, which will
      increment the %rsp to bring us back to the return address. Once again,
      we’re gonna need an example to get the full picture. Take these functions
      that serve some arbitrary purpose:
    </p>
    <img src="@/assets/CS33/img77.png" />
    <p>
      Let’s imagine that a given execution of yoo results in the following
      calls:
    </p>
    <img src="@/assets/CS33/img78.png" />
    <p>Looking at our stack as yoo is called, we see something like:</p>
    <img src="@/assets/CS33/img79.png" />
    <p>
      Next, we’ll see yoo call who, which requires another stack frame to be
      created:
    </p>
    <img src="@/assets/CS33/img80.png" />
    <p>
      At this point, who would call amI for the first time, which would then
      recurse into itself twice, as shown in the main branch of the arrow
      diagram. This calls for 3 stack frames representing the space required for
      each amI call:
    </p>
    <img src="@/assets/CS33/img81.png" />
    <p>
      As these amI procedures return, their stack frames become deallocated:
    </p>
    <img src="@/assets/CS33/img82.png" />
    <p>Then, the second amI is called, which doesn’t recurse at all:</p>
    <img src="@/assets/CS33/img83.png" />
    <p>
      At this point, the procedures will just continue returning until we’re
      back to the original calling frame:
    </p>
    <img src="@/assets/CS33/img84.png" />
    <p>
      If we were to generalize the structure of this stack frame process, we’d
      see something along the lines of:
    </p>
    <img src="@/assets/CS33/img85.png" />
    <p>
      Here, the white section represents the caller frame, and the blue
      represents the callee frame.
    </p>
    <p>
      The caller frame contains the storing of any extra parameters that
      couldn’t be stored in registers that are needed for the callee function.
      After that, it contains an address that the callee function will return
      to. The callee frame contains any saved registers and local variables
      needed for execution. We’ll get back to the saved registers. In addition,
      if the callee function needed to call another function, the callee frame
      may contain an argument build, where it builds the parameters needed to
      call the next function by storing them on the stack.
    </p>
    <p>
      Wow I just looked back and the last few paragraphs are so boring. I’m
      sorry, I hope you’re still with me. I don’t even know if I’m with me. I’m
      me.
    </p>
    <p>
      There’s still one last aspect that we haven’t addressed yet. What happens
      when a callee function needs to use a register that’s being used by a
      caller? Obviously, we don’t just reserve the register; that would be
      horribly inefficient and pretty much destroy the purpose of creating
      registers in the first place. Instead, we save the values of the registers
      on the stack. Now we have a new question: do we do this in the caller or
      callee frame? Turns out it depends. Some registers are callee-saved, which
      means that the callee function is responsible for saving the value, and
      some are caller-saved, which means that the caller function is responsible
      for saving the value. Clearly, this is going to require a lot of
      coordination. Given the code:
    </p>
    <img src="@/assets/CS33/img86.png" />
    <p>
      There is an implicit assumption that the value of %rdx will be the same
      before and after the call to who. The distinction between caller and
      callee-saved registers allows us to create this coordination between
      frames as long as the standards are followed strictly.
    </p>
    <p>
      By convention, %rax, %rdi, %rsi, %rdx, %rcx, %r8, %r9, %r10, and %r11 are
      caller-saved registers. If we think about it, most of these make a lot of
      sense. %rax holds the return value of a function. If the caller has an
      important value in %rax, it knows that the callee will overwrite that
      value in order to return, so the caller must save it. The same applies for
      %rdi through %r9. These are the registers that contain parameters, so
      they’ll be overwritten when we pass new parameters into the callee
      function unless they’re saved first.
    </p>
    <p>
      The rest of the registers (%rbx, %r12, %r13, %r14, %rbp, and %rsp) are
      callee-saved. Due to the way %rsp works, it doesn’t really fit into either
      of these categories perfectly, but it’s considered callee-saved anyways.
      The callee is responsible for storing the values of these registers and
      then reverting them back to their original values before returning.
    </p>
    <p>
      Whew, that section was massive. Assembly is honestly a pretty fun part of
      this class, and makes you look insane if you’re working on it in front of
      anyone who doesn’t know CS. For the material we covered here, none of it’s
      too too bad, and it just comes naturally with practice. But don’t worry,
      this section is sponsored by Bomb LabTM, which is gonna give you a whole
      lotta that. My biggest piece of advice regarding that is to just keep
      messing around with every register/memory address/etc. possible. Learn as
      much as you can while working on it, and you’ll never have to study
      assembly for the remainder of the class. Good luck!
    </p>
    <h2>Unit 3: Data Management</h2>
    <p>
      Ok so we’re not out of the metaphorical woods yet. We’ve still got quite a
      lot of assembly to cover, but it’s probably better that I split this up
      into multiple units. Here, we’ll be focusing more on data structures
      within assembly rather than the manipulation of data from the last
      section. The material’s definitely more on the conceptual side this time
      around, which means it sucks just a little bit more.
    </p>
    <p>
      We’ll be seeing the material you need for the Attack Lab here, which is
      another really fun assignment. It’s actually where I got my start with
      these writeups, so you can find that at the end of the Buffer Overflow
      section, but I’d honestly recommend giving it a shot on your own so you
      can actually, you know, learn. The rest of the material is honestly pretty
      boring and hard to work with, but I’ll do my best to get through it if you
      do too.
    </p>
    <p>Are you excited? Me neither.</p>
    <h3>Unit 3.1: Arrays</h3>
    <p>
      So let’s back way the hell up and think about what an array is. An array
      is a contiguously allocated chunk of memory. That property is what allows
      us to index through it like we’re used to, and what allows us to say that
      an array is just a pointer to the first element. Once we’re at a certain
      section of the array, all we have to do is get to the next chunk of memory
      to get to the next element.
    </p>
    <p>
      So let’s say we have some array of type T and length L. The amount of
      space such an array would take up would be L times the size of type T.
      This should be pretty easy to break down. If we have an array of 4 ints,
      we need to allocate enough room to hold each int, so that would be 4 times
      4 bytes of space. Easy enough right? Here are some more examples:
    </p>
    <img src="@/assets/CS33/img86.png" />
    <p>
      From here, it’s useful to see how we would access array elements in
      assembly. Take the following C code:
    </p>
    <img src="@/assets/CS33/img88.png" />
    <p>
      As you can see, we’re just taking in an array and an index and returning
      the element at that array index. Taking this into assembly, we’d see this
      executed as:
    </p>
    <img src="@/assets/CS33/img89.png" />
    <p>
      Taking what we now know about registers, we can say that our first
      parameter, the array location, is in %rdi and our second parameter, the
      index, is in %rsi. So what we’re doing here is we’re scaling the index in
      %rsi by 4 to account for the size of each array entry, and then adding
      that to the address of the start of the array. This will give us the
      address of our desired array element, which is then dereferenced and moved
      into %eax to return. Pretty darn cool. Draw this out for yourself if you
      have to, understanding this is important.
    </p>
    <p>Let’s look at another example to really drive this home:</p>
    <img src="@/assets/CS33/img90.png" />
    <p>
      Once again, not a complex piece of code by any means. It does do the job
      of combining some of the stuff from last section with what we’re looking
      at here though:
    </p>
    <img src="@/assets/CS33/img91.png" />
    <p>
      Once again, an analysis of the parameters tells us that our array location
      is in %rdi. A little more reading, and we can also tell that %rax is being
      used to hold the index i. We can easily identify the loop structure when
      we see the combination of cmp and jbe being used, which tests if the index
      is less than 5. Finally, we can recognize our array indexing inside of the
      L4 label, where the first add increments the array element, and the second
      add increments the index. Look at us go. We can read that nonsense now.
    </p>
    <p>
      I can feel your concerns already. “Is it really that easy?” Of course not!
      We’re just getting started. Let’s look at some multi-dimensional arrays.
      As we know, our convention in C is to use row-major ordering to denote
      multi-dimensional arrays. This means that our arrays are written in the
      form:
    </p>
    <img src="@/assets/CS33/img92.png" />
    <p>
      Where T is the type of data in the array, R is the number of rows, and C
      is the number of columns. It shouldn’t take you long to come to the
      conclusion that the amount of space a multi-dimensional array takes up is
      R times C times the size of T. Within memory, this looks something like:
    </p>
    <img src="@/assets/CS33/img93.png" />
    <p>
      As we can see, the first row is allocated contiguously, then is followed
      by the second row, and the third, and so on until the last row. Pretty
      reasonable if you ask me. The easiest way to think about these arrays is
      as a nested array. A multi-dimensional array is just an array of arrays,
      so if you follow that logic, you can work with the outer array first, and
      then move onto the inner array afterwards. With that in mind, let’s take
      some array element A[i][j]. Assume this array contains type T which has a
      size of K bytes. How would we get the address of this element?
    </p>
    <p>
      Let’s start with the outer array. We need to first place our address at
      the correct row number. We know that each row contains K times C bytes (go
      back and reread if you don’t understand why). From there, we can simply
      use i to index the rows, meaning the address of our row is i times C times
      K. Now, we can work with the inner array. Since we’re just trying to get
      to the correct element within that array, all we have to do is multiply j
      by K. This means that our final equation for this address is A + i * (C *
      K) + j * K, or:
    </p>
    <img src="@/assets/CS33/img94.png" />
    <p>
      Now, that’s not fun to memorize and deriving it isn’t hard, so I’d
      recommend just understanding why the formula works rather than trying to
      memorize which letters and signs go where.
    </p>
    <p>
      Now, let’s finish it off with a new type of array called a multi-level
      array. Multi-level arrays can be visualized as follows:
    </p>
    <img src="@/assets/CS33/img95.png" />
    <p>
      The first level of a multi-level array is an array of pointers. These
      pointers then point the arrays that contain the actual elements. What this
      structure does is it has the functionality of a multi-dimensional array,
      except not all of the array is allocated contiguously in memory. The array
      of pointers and each individual array of elements must be allocated
      contiguously, but each row could be anywhere in memory, whereas a
      multi-dimensional array requires that every element be allocated
      contiguously.
    </p>
    <p>
      As you might expect, this structure is going to require a fairly different
      method in assembly to access specific elements. Let’s take the function:
    </p>
    <img src="@/assets/CS33/img96.png" />
    <p>
      Let’s assume the second level arrays are all arrays of ints. We can see
      that the assembly will be:
    </p>
    <img src="@/assets/CS33/img97.png" />
    <p>
      The first line is a simple multiplication of digit by 4 to account for the
      size of each array element. The result is that %rsi will contain the
      column position after this shift. The next line multiplies index by 8,
      adds it to the address of univ and dereferences it. Remember that univ is
      an array of pointers, so this gives us the address of the start of our
      desired row, which is then added to the column information. The address of
      our desired element is now in %rsi, and the final line dereferences this
      address, and moves the contents into %eax for returning. The big takeaway
      from this comparison is that, while we have a large similarity of these
      array types in C, the behind the scenes work going on in assembly is much
      different. This will result in various pros and cons that we can’t really
      get into without information from later in the class.
    </p>
    <p>
      Well what about dynamically allocated arrays? As you were probably taught
      in an earlier CS class, dynamic arrays allow us to specify the size of the
      array at runtime rather than at compile time. This makes some of the
      optimizations made in statically-allocated arrays impossible, such as
      shifting instead of multiplying. The implementation of these in assembly
      isn’t drastically different or anything. For the most part, it’s just made
      more inefficient since more data about the array itself needs to be
      stored, and less information about the operations can be assumed. Dynamic
      arrays aren’t a hugely important topic or anything, but I thought I’d
      touch on them to cover all our bases.
    </p>
    <h3>Unit 3.2: Structs</h3>
    <p>
      You’ve probably worked with structs a little bit in CS 31/32. From my
      experience, they were introduced, and then pushed aside because classes
      classes classes. Well, for the purposes of this class, we’re just gonna be
      dealing with structs. You were probably introduced to these as the
      beginning of object-oriented programming, so there was all this discussion
      about public vs. private, member functions, data members, yadda blah
      yadda. We don’t care about all of that. In this class, structs are simply
      a way of storing multiple types of variables in contiguous memory. You can
      think of it as an array, except we’re not just limited to a single data
      type.
    </p>
    <p>
      In order to fulfill this purpose, structs must at least be big enough to
      hold any variables assigned to it. In addition, structs will be ordered
      based on their declaration in the higher-level code, regardless of
      compactness (more on this later). Take the following struct for example:
    </p>
    <img src="@/assets/CS33/img98.png" />
    <p>
      Here, we need room for a 4 element array of ints, a double, and a pointer.
      This could be visualized as follows:
    </p>
    <img src="@/assets/CS33/img99.png" />
    <p>
      With this laid out, we can say that any assembly access into structs is
      just like accessing an array. We have to take advantage of memory
      addressing modes to create offsets that will allow us to access specific
      elements of the struct.
    </p>
    <p>
      So, where does the new material come in? Well, as we’ll come to discover
      in a later section, memory is moved in and out of locations in large
      chunks. The result of this is that we need to ensure that certain things,
      like structs, do not get broken up between multiple chunks. That would be
      an uh oh whoopsie. In order to counter this, we need to engage with
      something called alignment, which standardizes certain boundaries that
      structs must fall into. Take the following struct:
    </p>
    <img src="@/assets/CS33/img100.png" />
    <p>
      If we were to organize this struct with our basic intuition, we’d have:
    </p>
    <img src="@/assets/CS33/img101.png" />
    <p>
      Now, if we take into account that the entire binary system we’ve been
      working with operates on powers of 2, having our struct as a 17 byte chunk
      of data just doesn’t feel right. If we were to align this struct, it would
      end up something like:
    </p>
    <img src="@/assets/CS33/img102.png" />
    <p>
      What actually happened there? Essentially, alignment makes it so that if a
      primitive data type (int, double, pointer, etc.) requires K bytes to
      store, then the starting address of that data type must be a multiple of
      K. As we can see, the char is unchanged since it only requires 1 byte. The
      next integral data type is an int (only array elements are considered, not
      the full array), so an extra 3 bytes of padding are added behind the char
      so that the int falls on a multiple of 4. After this array, the next
      available address is p + 12, but the next data type is a double. Since
      doubles are 8 bytes, the address must be a multiple of 8, so another 4
      bytes of padding are added.
    </p>
    <p>
      Notice that everything we discussed above rides on the fact that p itself
      is already aligned. The alignment of a struct depends on the largest
      primitive data type within that struct. Since the largest in S1 is a
      double, the struct itself must be aligned on an 8 byte boundary. We can
      see this if we create an array of these structs:
    </p>
    <img src="@/assets/CS33/img103.png" />
    <p>
      Here’s a quick chart summarizing the types we need to worry about for
      alignment:
    </p>
    <img src="@/assets/CS33/img104.png" />
    <p>
      The most important thing to remember when it comes to alignment is that it
      is only integral data types that matter. If the struct contains an array,
      another struct, etc., the overall size of that data structure doesn’t
      affect the alignment. The only thing that matters is the largest integral
      data type. So don’t go around saying “oh, this struct contains a struct
      that’s 128 bytes long, so we need to align everything at multiples of
      128”. No, that’s stupid. Don’t be stupid.
    </p>
    <p>
      Now, this alignment creates an interesting design consideration when we’re
      coding in C. Due to this extra padding that’s created to align elements,
      it is generally most efficient to place data into structs in order of
      decreasing size. This means putting your doubles before your ints and your
      ints before your chars. This decreases the chances that you’ll have to add
      padding to your struct, thereby decreasing the amount of space your struct
      takes up. Now, this doesn’t always work. For instance, in the struct
      above, it doesn’t matter how you order the elements, it’ll always take up
      24 bytes, but it doesn’t hurt to keep in mind.
    </p>
    <h3>Unit 3.3: Memory Layout</h3>
    <p>
      So, for a while now, we’ve been skirting around what memory really looks
      like. We took a close look at stacks in the previous section, but we’ll
      need a bit more for the next topic. So here’s what our basic memory layout
      looks like:
    </p>
    <img src="@/assets/CS33/img105.png" />
    <p>
      This is just a rough representation. Do I actually know what memory looks
      like? Absolutely not, but I do know what it looks like for this class.
    </p>
    <p>
      For this diagram, the memory addresses increase as we move upwards.
      Starting from the top, we have the stack, which we talked about a decent
      amount previously. The stack is responsible for containing local variables
      and stack frames, and grows downwards. One thing we didn’t mention is
      that, in x86-64, the stack will cap out at a size of 8MB. Next up, we have
      shared libraries. We actually won’t get into this here, since we haven’t
      established the foundation for them just yet, but it’s included here
      because we’ll revisit it later. After that we have the heap. As you may
      have learned in a previous CS class, the heap is a space where dynamic
      allocation occurs. Unlike the stack, the heap grows upwards, so some
      balancing of the stack and heap needs to be done, since both can’t occupy
      the same addresses at the same time. The next section is the data section,
      which contains statically allocated data. This refers to things like
      global variables or string constants, such as INT_MAX. Finally, we have
      the text segment, which contains machine instructions. This is where the
      %rip will be pointing to in order to direct program behavior. This section
      is classified as read-only, which means any general program that attempts
      to access it can only read the information it contains, it cannot write to
      it without special permissions.
    </p>
    <p>
      With this understanding, let’s look at something you may have encountered
      before. What does it mean for program behavior to be undefined? Like, just
      define it lol. Well, let’s take this C code:
    </p>
    <img src="@/assets/CS33/img106.png" />
    <p>
      You may notice a problem here. The line in fun that accesses an array
      element of struct_t has no way to check that the index is actually within
      the bounds of the array. This, in combination with the way structs work
      leads to some interesting behavior:
    </p>
    <img src="@/assets/CS33/img107.png" />
    <p>
      Let’s recall how a struct works. It takes each of its elements and places
      them contiguously in memory. For this example, that means we’ll have 8
      bytes dedicated to the array of ints, followed by another 8 bytes for the
      double.
    </p>
    <p>
      As we can see, the inputs 0 and 1 work as intended. Once you start
      accessing out of bounds elements, we start getting the wacky mcwackerson
      behavior. Since we’re attempting to access element 3 of an array with only
      2 elements, we’re really accessing the bytes in memory that follow the
      array. Since this is a struct, this ends up modifying the bits that
      represent the double. As a result, we’re changing the value of the double
      and getting a messed up return value. This applies to any out of bounds
      value, which is why we call this undefined behavior. In general, we have
      no guarantees about what lies beyond our array. So while it may not make
      our program crash, it could still modify data we don’t want to.
    </p>
    <p>
      In other situations, it may end up crashing the program. For example, when
      we input 6, we end up attempting to access memory that we’re simply not
      allowed to, and we get a segmentation fault since execution is halted.
    </p>
    <p>
      Now, this is gonna act as a segue into the next section. That’s right, bet
      you never expected an actual transition from me did you? Don’t get used to
      it. Why am I doing this to myself?
    </p>
    <h3>Unit 3.4: Buffer Overflow</h3>
    <p>
      This issue that we left off with in the last section is known as buffer
      overflow. This is the most common technical cause for security
      vulnerabilities, usually caused by programmer ignorance. You may be
      asking, “Why don’t they just not be ignorant?” You have a good point, but
      not everyone is an S-tier programmer like yourself, so we’ll just have to
      deal with what we’re given. So what’s an example of this? Let’s take this
      function, which takes in a string input:
    </p>
    <img src="@/assets/CS33/img108.png" />
    <p>
      Don’t worry too much about what everything in there means. Focus on how we
      have the same flaw as before, where there just isn’t any limit for
      characters that could be read. Now let’s say we have some function that
      calls gets:
    </p>
    <img src="@/assets/CS33/img109.png" />
    <p>
      Here, we’re creating a C string buf and then using gets to read some
      string into it. Just like we saw in the last section, we could easily
      input a string that is longer than allowed and cause undefined behavior.
      The problem is, there’s a good chance that, for a while, this overflow
      would be undetectable. It may result in correct program behavior well past
      what you’ve actually coded. Regardless of what’s actually visible to you,
      it’s still altering data that shouldn’t be altered, and there are a lot of
      dangerous side effects to this. Let’s look at the function we presented
      above in assembly:
    </p>
    <img src="@/assets/CS33/img110.png" />
    <p>
      So, what do we want to pay attention to here? Well, look at the first 2
      lines. We can see a decrement of the %rsp by 0x18, or 24 bytes. This is
      the allocation of something called the buffer. The buffer is exactly what
      it sounds like, a dedicated space in memory that arrays can overflow into
      without harming useful data. This is why we could input a string into echo
      that is longer than 4 characters without disaster striking. The variable
      buf only needs 4 bytes of space, so the extra 20 bytes is able to catch
      some of the overflow.
    </p>
    <p>
      However, the buffer isn’t unlimited. It can’t be. Memory is limited, stack
      space is limited, I’m limited in my will to live. So, while the compiler
      does attempt to place this precaution, it’s still possible to break this
      program. Let’s visualize what’s going on here:
    </p>
    <img src="@/assets/CS33/img111.png" />
    <p>
      Let’s say we now call gets and input some 23 character string. We’ll also
      throw in a random return address. Our memory now looks like:
    </p>
    <img src="@/assets/CS33/img112.png" />
    <p>
      Remember that C strings need a null byte at the end, so this 23 character
      string takes up 24 bytes. As you can see, we would hit the limit of the
      buffer, but we wouldn’t compromise the program just yet. But now, what if
      we throw in another character:
    </p>
    <img src="@/assets/CS33/img113.png" />
    <p>
      Now, we’ve overflowed the buffer and the extra data has modified the
      return address. This is the big problem with buffer overflow. It’s now
      very likely our program will end up crashing. However, if it doesn’t, that
      may be worse for us. See, if the program doesn’t crash, the %rip will
      instead jump to this new return address and begin executing code there.
      This opens up the gateway for exploiting buffer overflow, in a process
      called stack smashing.
    </p>
    <p>
      Let’s imagine some asshat with malicious intent wanted to blow up your
      program. If they knew the location of a vulnerable function like gets,
      they could force their own code into your program using stack smashing and
      wreak havoc. This sounds like some hackerman fantasy type of stuff, but
      it’s really possible, and is called a code injection attack. In fact,
      you’ll get your fair share of exposure to these attacks through the Attack
      Lab.
    </p>
    <p>
      There are a lot of practices that have been implemented on a system-level
      to try to protect against these attacks. Stacks can be randomly allocated,
      so that the attacker has a harder time figuring out where to insert code.
      Regions of memory can also be marked as read-only, preventing attackers
      from inserting code into those regions, since they won’t be executable
      even if they can redirect the program.
    </p>
    <p>
      The most effective form of protection is called a stack canary, which
      places a special value on the stack beyond the buffer. This value, called
      the canary, is then checked after the function’s execution to ensure that
      no corruption of that data has occurred.
    </p>
    <p>
      Now, despite these measures, there are still ways to get around them.
      Canaries are a little hard to subvert, so we won’t get into that here, but
      the other 2 measures can be bypassed using return-oriented programming.
      Unlike code injection attacks, ROP uses existing code in the program to
      perform malicious acts. Dedicated hackers can take fragments of existing
      code and string them together to perform certain actions. These fragments
      are called gadgets, and would be strung together with return statements.
      It’s like a chain of dominoes. Each gadget is a domino, and the job of the
      hacker is to find a way to topple the first one. These gadgets could
      encode actions like moving data between registers, or modifying the stack,
      or doing anything with the assembly of the program. Let’s look at a basic
      example:
    </p>
    <img src="@/assets/CS33/img114.png" />
    <p>
      This function is intended to perform some arithmetic blah blah blah. But
      remember, each operation in assembly is encoded with machine code. If an
      attacker could find a way to redirect the program to 0x4004d8, they could
      force the program to move %rdi + %rdx into %rax, because that’s what the
      machine code at that address tells it to do. This could also theoretically
      be done by redirecting the program into the middle of a line of machine
      code, creating a whole new operation. For instance:
    </p>
    <img src="@/assets/CS33/img115.png" />
    <p>
      That first line encodes a very specific instruction, but the 48 89 c7
      contained in it encodes movq %rax, %rdi, which could be very useful for an
      attack. The attacker may want to redirect the program into the middle of
      this line to use that gadget. That’s a lot to take in, and the entire
      concept probably seems really esoteric at first glance. However, the whole
      process is fairly easy to understand (at least on the level we’re worrying
      about) with a little practice. And guess what? That’s what the Attack Lab
      is for.
    </p>
    <p>
      This was my favorite lab by far, so much so that it’s actually what I made
      my first writeup on, so you can go and find that if you want. As
      counterintuitive as it seems, I really don’t recommend going to look at it
      because you’ll learn the best by smashing your head into your desk,
      wondering how to place the address of your cookie into the stack. I’m just
      here to inform you of all your options.
    </p>
    <h3>Unit 3.5: Unions</h3>
    <p>This is going to be such a small section it’s ridiculous.</p>
    <p>
      A union is a data structure very similar to a struct. However, instead of
      allocating each element contiguously in memory, unions are a single chunk
      of data that can represent any of its elements. This’ll be easier with an
      example. Let’s take a struct and a union with the same elements:
    </p>
    <img src="@/assets/CS33/img116.png" />
    <p>As we discussed earlier, this struct would look like:</p>
    <img src="@/assets/CS33/img117.png" />
    <p>On the other hand, a union would look like this:</p>
    <img src="@/assets/CS33/img118.png" />
    <p>
      Instead of each element being distinct, unions force each element to have
      the same bit strings. As a result, union size is going to be determined
      based on the largest element. Unlike the rules of alignment, arrays and
      structs would make a difference here, because you can’t just say a 5
      element array of ints could fit in the same space as a single int, we’d
      need the space to fit all 5 elements. The rules of alignment, however,
      remain the same as structs and are dependent on the largest integral type.
    </p>
    <p>
      Do I know what these are useful for? No. They seem really dumb. But you’ll
      likely get asked questions about these, and when they get real complex,
      they can be a real pain.
    </p>
    <h3>Unit 3.6: Floating Point</h3>
    <p>
      To cap off this section, we’re going to take a look at floating point
      representations in binary. Earlier, we set a pretty basic foundation for
      number encoding in binary, but it didn’t cover how we deal with floating
      point numbers like doubles or floats. Unfortunately, the way we have to
      interpret these is pretty convoluted, so we’re in for a long topic, which
      means boring writing.
    </p>
    <p>
      When we talk about normal numbers, we look at floating point values with a
      decimal point. Similarly in binary, we have a binary point:
    </p>
    <img src="@/assets/CS33/img119.png" />
    <p>
      If we think back to how we first introduced binary, we remember that it’s
      a base-2 system, while our everyday numbers are a base-10 system. We can
      extend that logic to these values to the right of the decimal/binary
      point. In decimal, we say we have a tenths place and a hundredths place
      and so forth. For our purposes let’s model it like this:
    </p>
    <img src="@/assets/CS33/img120.png" />
    <p>As you’ve probably guessed, that means that we ready binary as:</p>
    <img src="@/assets/CS33/img121.png" />
    <p>
      Ok, pretty self-explanatory so far. If you don’t understand what that
      means, I’d go back to the binary section and refresh yourself on binary as
      a whole. Just in case, here are some practice conversions from decimal to
      binary:
    </p>
    <img src="@/assets/CS33/img122.png" />
    <p>
      If we integrate this binary point into our old system, we’ll see that our
      rules regarding shifting left and right to multiply and divide still hold.
      In addition, we see that any value of the form 0.11111... is below 1.0. So
      what limits do we run into in this system? Well, based on the way binary
      works, we know we can only represent numbers that are powers of 2. This
      means rational numbers in decimal, like 1/5 or 1/10, will end up with
      infinitely repeating bit representations.
    </p>
    <p>
      Adding on to this, we know we have to store binary digits somewhere. For
      instance, a float is 32 bits. So where do we put the binary point? If we
      put it near the back, then we can represent really large values, but have
      very little precision. If we move it towards the front, we can represent a
      much smaller range of values with more precision. To try and solve these
      issues, a floating point standard was created based on scientific
      notation.
    </p>
    <p>
      Floating points have 3 parts: the sign bit s, mantissa M, and exponent E:
    </p>
    <img src="@/assets/CS33/img123.png" />
    <p>
      Since we’re dealing with binary, the base for our exponent is 2 rather
      than 10. The sign bit tells us if the number is positive or negative, the
      mantissa is some fractional value between 1 and 2, and the exponent
      weights to value by a power of 2.
    </p>
    <p>Within binary, floating points are encoded as follows:</p>
    <img src="@/assets/CS33/img124.png" />
    <p>
      s is the same as the sign bit. However, exp and frac are a little
      different. exp represents an encoding for E, and frac represents an
      encoding for M, but neither can be directly translated over. The
      convoluted part of floating points is the method by which we translate
      this binary into decimal.
    </p>
    <p>
      While that diagram is fresh in our minds, it’s a good time to note that
      there are multiple levels of precision that this encoding method may take
      on. floats use single precision, where the exp field is 8 bits and the
      frac field is 23 bits. doubles use double precision (shocking), where the
      exp field is 11 bits and the frac field is 52 bits. This information will
      be useful as we move forward with the translation process.
    </p>
    <p>
      The first type of value we’re going to look at here are normalized values.
      Normalized values have an exp field that is not all 0s and not all 1s.
      Those situations both seem pretty edge case-y so the naming makes a little
      sense. In these values, the exp field is encoded with a bias:
    </p>
    <img src="@/assets/CS33/img125.png" />
    <p>
      exp is simply the unsigned value of the exp field, and, assuming k is the
      number of bits in the exp field, the bias can be determined by:
    </p>
    <img src="@/assets/CS33/img126.png" />
    <p>
      To give you some common values, the bias of a single precision value is
      127, while the bias of a double precision value is 1023. Mess around with
      the exp field to see what values E could be in these cases.
    </p>
    <p>
      Specifically for normalized values, the mantissa is implied to begin with
      a 1. That means normalized mantissas are of the form 1.[frac]. Using some
      1st grade math, we know that M is at a minimum of 1.0 when the frac field
      is all 0s, and at a maximum of ~2 when the frac field is all 1s. By
      assuming this 1 begins the mantissa, we open up extra bits for us, which
      means extra precision.
    </p>
    <p>
      Let’s run through a quick example. How would we use floating point format
      to encode 15213.0 in a float? Well first, we’d need to put it into binary:
    </p>
    <img src="@/assets/CS33/img127.png" />
    <p>Now, we need to write this into binary scientific notation:</p>
    <img src="@/assets/CS33/img128.png" />
    <p>
      From that, we can grab our frac field, which just consists of the digits
      to the right of the binary point, with added 0s to make it the right size:
    </p>
    <img src="@/assets/CS33/img129.png" />
    <p>
      Since we’re working with single precision, this frac field needed to be 23
      bits, so we added an extra 10 0s to the end, which is just like adding a 0
      to the end of a decimal number. Now, we have to get our exp field. We know
      E = 13, and single precision bias is 127. Filling in the formula, we have:
    </p>
    <img src="@/assets/CS33/img130.png" />
    <p>
      If this exp wasn’t already 8 bits, we would’ve needed to add some 0s to
      make it fit, but this time, we didn’t need to do any extra work. Finally,
      we can get the sign information easily, noting that the value is positive,
      leaving us with:
    </p>
    <img src="@/assets/CS33/img131.png" />
    <p>
      The other type of value we’re worried about are denormalized values. A
      denormalized value has an exp field of all 0s. Denormalized values are
      values that are too small for normalized values to represent at a given
      level of precision. Unlike normalized values, we calculate E with:
    </p>
    <img src="@/assets/CS33/img132.png" />
    <p>
      This bias is calculated the same way as before, but we subtract it from 1
      instead of the exp field (which would just be 0). With regards to the
      mantissa, everything about it is the same, except that instead of assuming
      there’s a leading 1, there’s a leading 0 in denormalized values. This
      means denormalized mantissas are of the form 0.[frac].
    </p>
    <p>
      Denormalized values have 1 special value: 0. If the exp and frac fields
      are both 0, the floating point encoding translates to 0. However, you may
      notice that this happens regardless of the value of the sign bit. This
      tells us that in floating point, there is a distinction between +0 and -0.
    </p>
    <p>
      You may have noticed 1 condition that doesn’t fall into either of the
      categories we’ve introduced, and that’s when exp is all 1s. Under these
      circumstances, there are 2 possible values the floating point represents.
    </p>
    <p>
      If the exp field is all 1s and the frac field is all 0s, the value being
      represented is infinity. This value is used to represent overflowing
      operations. Both positive and negative encodings for infinity exist,
      representing both directions the operation may overflow in.
    </p>
    <p>
      If the exp field is all 1s and the frac field is non-zero, the value is
      representing NaN, or not-a-number. This is a placeholder value for the
      result of operations where no numerical value exists. For instance, if you
      tried taking the square root of a negative number, or multiplying infinity
      by 0, NaN would pop up.
    </p>
    <p>
      I’m not sure how much this helps, but here’s a visualization of this
      entire floating point system we’ve laid out:
    </p>
    <img src="@/assets/CS33/img133.png" />
    <p>
      Ok, I hate myself for what I’m about to do, but I’m going to do it because
      I want you to succeed and I apparently enjoy suffering for little to no
      reason. Let’s take an 8 bit floating point value with a 4 bit exp field
      and a 3 bit frac field. Let’s look at the values we can represent:
    </p>
    <img src="@/assets/CS33/img134.png" />
    <p>
      Everything in yellow is a denormalized value, and the rest are normalized.
      So there you go, some practice problems. I’m not going to take the time to
      explain each calculation because that’s just insanity. If you don’t
      understand a certain line, go back and reread the explanations and retrace
      your steps. Something I do want to point out from the above table is how
      the distribution of representable values becomes much denser around 0. The
      earliest values have a precision of 1/512, and this precision slowly
      decreases as we go higher, to the point where larger values only have a
      precision of 16.
    </p>
    <p>
      When we deal with floating points in relation to other values, we can
      actually come very close to using basic unsigned integer comparisons. Some
      changes we have to make include checking the sign bit first (positive vs.
      negative behavior), equating -0 with 0, and making special adjustments for
      NaN. If NaN is left as is, it would look larger/smaller than any number,
      but it’s not a number, so what we do with it varies based on the
      situation. Other than that, based on the structure of floating points,
      values will behave correctly in comparisons automatically.
    </p>
    <p>
      Beyond comparisons, we also have to use floating points to perform
      arithmetic operations. While overflow is now a non-issue since floating
      point overflows to infinity (hallelujah), space now needs to be taken into
      consideration. The basic idea here is we will compute the exact result of
      an operation, and then force it to fit into a given precision. This may
      entail either overflowing to infinity if the number is too large, or
      rounding the value so that it’s translation can fit into the frac field.
      Now, when we say round, there are 4 general types of rounding:
    </p>
    <img src="@/assets/CS33/img135.png" />
    <p>
      This likely goes against your intuition a little, but you should be able
      to get the gist of this after a little analysis. Our default type of
      rounding is round to the nearest even, which is really not named well.
      This is essentially the rounding that you’ve probably done for most of
      your life, where values before the halfway point (0.5) round down and
      values after it round up. The only difference is that, instead of 0.5
      rounding up, it rounds to the nearest even value.
    </p>
    <p>
      This type of rounding is used for statistics reasons that I’m not going to
      get into because I just simply don’t care. When we take this rounding into
      floating point values, we’re rounding to whatever precision we have
      available to us, and that precision is what determines the halfway point.
      If we want to look at this in the context of binary, we know that even
      numbers are binary numbers where the last digit is 0. We also say that
      “halfway” is when the bits to the right of the rounding position are
      100...
    </p>
    <p>Here’s some examples where we’re rounding to the nearest 1/4:</p>
    <img src="@/assets/CS33/img136.png" />
    <p>
      When we perform multiplication, we’ll be doing something along the lines
      of:
    </p>
    <img src="@/assets/CS33/img137.png" />
    <p>
      Where s = s1 ^ s2, M = M1 * M2, and E = E1 + E2. When we perform these
      operations, we’ll have to fix them up before we can store the result. If M
      is greater than or equal to 2, E is incremented. If E ends up out of
      range, the final value will overflow to infinity. Finally, M will be
      rounded to fit within frac. Generally, the same process applies to
      addition as well. However, adding exponents requires a little more work
      than multiplying, so in this case, we’ll have to align the values on the
      same exponent before we can add. In addition, there’s the added danger of
      M ending up less than 1, so E may be decremented to adjust for this.
    </p>
    <p>
      Finally, to conclude this unbelievably long section, we’ll look at
      floating point to integer conversions. Obviously the varying bit
      representations between these values is going to cause some havoc, but
      we’re more concerned with what happens to the values themselves.
    </p>
    <p>
      When doubles and floats are converted to ints, the fractional part is
      truncated. We know this. In C when we assign a double to an int, we just
      cut off the decimal. This ends up basically being a round towards 0. This
      conversion becomes undefined when we try to convert NaN into an int,
      because we don’t have an analog for that. When we convert an int to a
      double, the result is exactly the same. Generally, doubles are allocated
      enough space to store the exact value that an int can store. However,
      converting an int to a float may be more problematic. floats are the same
      size as an int, but reserve bits to allow for decimal values. Due to this,
      not all ints can be safely stored in a float, so rounding is going to have
      to occur to fit in.
    </p>
    <p>
      Oh my god it’s finally over. We can move on from all this machine-level
      stuff. It’s been a real grind to get through all of this, so make sure to
      smash that like button and go subscribe to the – wait, wrong platform.
    </p>
    <p>Sigh.</p>
    <h2>Unit 4: Optimization</h2>
    <p>
      Ok we’re moving from the land of assembly to the land of theory. I’ll
      leave it up to you to decide which one is worse. Optimization can be a
      really abstract concept with very tangible effects, and some of the stuff
      you’ll learn here will make you a better programmer. It might be a little
      hard to follow along, but we’ll get through it.
    </p>
    <p>
      Here, we’ll be introducing the basics of optimization, which requires us
      to dive a little bit more into the hardware side of things. It’s gonna
      involve looking at some pretty ugly code, so sorry to those of you out
      there that are OCD about that sort of thing. At the end of the day, we’ll
      present a solid amount of useful information that we’re definitely going
      to build on later, so just keep focused. If you need more incentive than
      that, well, you need the material here to succeed in Parallel Lab, so
      there ya go.
    </p>
    <h3>Unit 4.1: Compiler-Level Optimizations</h3>
    <p>
      Up until this point, the only performance analysis that you’ve done is
      through big-O. When we talked about that in CS 32, we did a lot of
      hand-waving to simplify things. In reality, the constant factors that we
      ignored previously do actually matter. O(N) isn’t the same as O(2N) like
      we said. This means we’re going to have to pay attention to optimization
      at all levels of coding: algorithms, data representations, procedures,
      loops, etc. Darn.
    </p>
    <p>
      There is a lot of background information you need about computer
      architecture to fully understand some of the optimizations we’re going to
      cover, so let’s start us off easy. These first few optimizations are ones
      that the compiler may be able to automatically perform. Compilers are very
      good at efficiently mapping programs to the machine. This means they will
      optimize things like register allocation, ordering of code, and
      eliminating dead code and minor inefficiencies. However, compilers will
      usually be unable to improve efficiency at a big-O level for various
      reasons.
    </p>
    <p>
      Compilers must operate under the rule that they cannot change program
      behavior. As a result, compilers must be conservative in the optimizations
      they make. If some instruction could be optimized in a way such that
      program behavior stayed exactly the same, except for one specific case,
      the compiler couldn’t perform that optimization. In addition, compilers
      can only make optimizations based on static information. This means any
      optimizations are made during compile time, and any information input at
      runtime is left for you to optimize manually.
    </p>
    <p>
      With that out of the way, let’s talk about some optimizations that the
      compiler may be able to perform, or that you may be able to implement
      yourself. The first of these is code motion, which is the reduction of
      frequency of computation. Take the code block:
    </p>
    <img src="@/assets/CS33/img138.png" />
    <p>
      Every iteration of this loop requires the computation n * i + j. However,
      multiplication is a relatively expensive operation, and the only variable
      changing between iterations is j; n and i are constant. Therefore,
      calculating n * i every iteration is unnecessary, so we can optimize this
      code using code motion:
    </p>
    <img src="@/assets/CS33/img139.png" />
    <p>
      By moving the computation for n * i into a temporary variable, we prevent
      the loop from constantly multiplying them together, and each index
      computation will now be faster.
    </p>
    <p>
      The next technique we’ll look at is something we’ve seen before. Strength
      reduction is the process of replacing a complex operation with a simpler
      one. The most basic form of this is using left and right shifts instead of
      multiplying or dividing. Here’s another example:
    </p>
    <img src="@/assets/CS33/img140.png" />
    <p>
      Very similar to our previous example, but we have another loop on the
      outside. Our target here is going to be that first multiplication. As
      we’ve noted many times, multiplication is expensive, so how can we break
      that down? Those times tables are rough you know? Well, n is a constant, i
      is the only thing that’s changing. Not only that, but i is just
      incrementing by 1 every iteration. Essentially, this means that ni is just
      incrementing by n every iteration, so we can write:
    </p>
    <img src="@/assets/CS33/img141.png" />
    <p>
      The last optimization for now is with shared common subexpressions, where
      we will take computations that appear multiple times in our code and
      condense them into a single computation. For instance, given the code:
    </p>
    <img src="@/assets/CS33/img142.png" />
    <p>
      With a little algebra and simplifying, we can dig out the subexpression i
      * n + j from each of the array calculations. We can then optimize this
      shared subexpression and write:
    </p>
    <img src="@/assets/CS33/img143.png" />
    <p>
      Seems simple enough. Before we move on to bigger and better things, we
      have to take a quick look at some things that may make our lives a little
      harder.
    </p>
    <h3>Unit 4.2: Optimization Blockers</h3>
    <p>
      As we stated in the last section, compilers must be conservative with the
      optimizations they make. Oftentimes, our code will have specific
      structures that prevent optimization from occurring, and that’s fine. It’s
      unavoidable. But what about the situations where you do have a say?
      Throughout CS 31 and 32, you probably tried your hardest to make your code
      compact and readable. Unfortunately, this isn’t the only measurement of
      how “good” your code is. Take this code:
    </p>
    <img src="@/assets/CS33/img144.png" />
    <p>
      Ok, so that’s pretty nice looking code. Here’s the problem: compilers
      often cannot see inside function calls. We know that procedure calls are
      great. Everyone loves their .size()s and .sqrt()s. They enhance
      readability and reduce code redundancy. However, the fact that compilers
      can’t see into them means they have no idea what’s happening inside of
      them. In the above example, this means that strlen(s) is essentially an
      unknown quantity. Due to this, the compiler has no guarantee that
      strlen(s) is a constant value, and, since it must be conservative, will
      call strlen(s) on every iteration. For reasons you can figure out
      yourself, strlen() is order O(N). Since it is called each iteration, and
      there are n iterations, this function ends up exhibiting O(N2) behavior.
      The thing is, as the programmer, we know that strlen(s) is a constant
      value, so these repeated calls to strlen() are a massive waste. So what if
      we used code motion to do this:
    </p>
    <img src="@/assets/CS33/img145.png" />
    <p>
      Now, strlen() is only called once, and the value is stored in a variable.
      This reduces the program’s behavior to O(N) and that’s just really nice.
      Like we said, the compiler was unable to make this optimization itself
      since procedure calls are just mysteries in the compiler’s eyes. It has no
      idea what the function may do to the program as a whole, which is why we
      end up having to make these optimizations ourselves.
    </p>
    <p>
      Another example of optimization inefficiency is the idea of memory
      aliasing. You ran into this in CS 32, but you were more concerned with how
      it may break your program. Even with correct program behavior, aliasing
      can cause problems with performance. Take this code:
    </p>
    <img src="@/assets/CS33/img146.png" />
    <p>
      Ignoring the obvious code motion opportunity in the inner loop, there
      isn’t anything wrong on the surface. We’re incrementing some array element
      in b by some array elements in a.
    </p>
    <p>
      However, the compiler has no guarantees that a and b are different arrays.
      Notice that within the inner loop, b[i] shouldn’t be changing. The problem
      is that, since aliasing may be happening, the compiler must update the
      value of b[i] on every iteration, despite the fact that it’s not really
      changing. So after each iteration, the program will go back into memory,
      find the value of b[i], and then proceed.
    </p>
    <p>
      That sounded confusing, and I don’t have the writing or teaching skill to
      make it better. I really think me walking through an example will make it
      worse, so I’ll leave you with this:
    </p>
    <img src="@/assets/CS33/img147.png" />
    <p>
      Run through this code to the best of your ability, and see how aliasing
      affects the output. The compiler must assume this result is possible, and
      therefore cannot optimize around it. The reason we care about this is that
      this is a completely unnecessary memory access if we can guarantee no
      aliasing occurs, and memory access is an expensive operation. To remedy
      this, we can make explicit use of a local variable to force the compiler
      to stop reaccessing b[i]:
    </p>
    <img src="@/assets/CS33/img148.png" />
    <p>
      It’s important to note that this modification will produce incorrect
      behavior if there is aliasing. However, our optimization here is based on
      the assumption that we know a and b won’t be referencing overlapping
      arrays.
    </p>
    <p>
      Ok, so that’s the more basic stuff out of the way. Now it’s time to dive a
      little bit more into the hardware-level and see what we can exploit there.
    </p>
    <h3>Unit 4.3: Instruction-Level Parallelism</h3>
    <p>
      Instruction-Level Parallelism or ILP is based on the idea that modern
      processors can execute multiple instructions at the same time. In order to
      take advantage of ILP, we need to locate multiple instructions that share
      no data dependencies with each other. For instance, imagine the
      instructions w = x + y and a = z + w. The result w from the first
      instruction is used in the computation of a in the second instruction. As
      a result, they cannot use ILP, since they can’t both be executed at the
      same time.
    </p>
    <p>
      This is where we’re really going to start getting into the territory of
      performance vs. readability, because some of the optimizations we’re going
      to be covering are going to create code that’s uglier than me. Considering
      I’m a CS major that’s a 4/10 on a good day, that’s really saying
      something.
    </p>
    <p>
      In order to begin analyzing the benefits of ILP, we have to introduce the
      notion of cycles per element or CPE. This is essentially our way of
      measuring how programs scale with an increasing number of elements. For
      obvious reasons, a smaller CPE is more desirable for program performance.
      Using CPE, we have the ability to measure the impacts of some of the
      methods we discussed earlier in the section. Feel free to reference your
      textbook or lectures for examples of this, but it’d be a lot of work for
      me to put an example in here, and I really don’t think you need it, so
      here we are.
    </p>
    <p>
      Our real focus for this topic is to look at some more complex
      optimizations we can perform, and that’s gonna require us going a little
      deeper into modern CPU design. Diagram time:
    </p>
    <img src="@/assets/CS33/img149.png" />
    <p>
      Could I have simply screenshotted the slides for this diagram? Yes. Did I
      go into Google Drawings and spend 25 minutes recreating it? Also yes. If
      you’re upset about that, go cry more. If you’ve made it this far, you
      should already know I’m missing a couple (billion) brain cells.
    </p>
    <p>
      There’s a lot of information there that we’re not going to get super into
      right now, but there’s also a lot of important stuff that we’re going to
      need to understand. Our flow starts with the fetch control, which prompts
      the instruction cache for the next instruction to be executed by accessing
      %rip. From here, instructions are sent to be decoded, which involves
      accessing operands from the register files and then being sent to a
      functional unit for processing. The results of the operation are then sent
      back to the register file, or to the retirement unit if the instruction is
      complete.
    </p>
    <p>
      Ok, that was a very basic overview of that whole process, but the big
      takeaway for now is that we have a large number of functional units, where
      the actual computation is occurring. Relative to the fetching and
      transportation of data, the computation is what takes the largest amount
      of time, so it would be very beneficial if we could make use of multiple
      functional units at once to perform multiple computations at the same
      time. That sounds like ILP to me.
    </p>
    <p>
      Before we get into ILP at its fullest, we can start with ILP in functional
      units themselves. Functional units are pipelined, which means computations
      are divided into stages. For instance, a multiplication operation is
      divided into 3 stages. Once an operation moves onto the next stage, a
      different operation can then replace it in the original stage. I really
      need an example to illustrate this so here we go:
    </p>
    <img src="@/assets/CS33/img150.png" />
    <p>
      We can then visualize how these operations would behave in a functional
      unit as follows:
    </p>
    <img src="@/assets/CS33/img151.png" />
    <p>
      Ok, let’s step through this. Let’s assume each column represents some time
      unit, and each stage of computation takes 1 time unit. As we mentioned
      earlier, each multiplication requires 3 stages, or in this example, 3 time
      units. This function has 3 multiplications, so we’d expect it to take 9
      time units, but we can see it only takes 7. This is because the
      calculations of p1 and p2 are independent of each other. As a result, once
      a * b exits the first stage, a * c can immediately take its spot. So while
      a * b is in stage 2, a * c can already begin its stage 1. This allows us
      to perform both a * b and a * c in 4 time units rather than 6. Since p1 *
      p2 is reliant on the first 2 calculations being finished, we can’t
      pipeline it efficiently, and it must wait until after the first 2
      complete.
    </p>
    <p>
      Remember, this efficiency can arise from just 1 functional unit. We
      haven’t even reached the parallelism that can result from the simultaneous
      use of multiple functional units. That’ll come much later.
    </p>
    <p>
      Like all kinds of parallelism, we generally have to actively work to take
      advantage of pipelining. One such method to doing this is called loop
      unrolling, the process of increasing the number of computations you
      perform per loop iteration. For example, if you were given the loop:
    </p>
    <img src="@/assets/CS33/img152.png" />
    <p>
      We’re performing a single array access and multiplication per iteration,
      and the result of each iteration is dependent on the previous one, so no
      pipelining is possible. However, trading off a little readability for
      efficiency, we can say:
    </p>
    <img src="@/assets/CS33/img153.png" />
    <p>
      This is functionally the same code, but now, we perform d[i] * d[i + 1]
      before multiplying by x. So what? Well now, while that computation is
      performed, we can simultaneously begin computing d[i + 2] * d[i + 3]
      (after the first computation leaves stage 1). There’s no stopping us now.
      This allows us to take advantage of ILP for the memory access of the next
      2 elements and the multiplication between them, both of which are
      relatively expensive operations.
    </p>
    <p>
      If you were to test this in the right environment, you’d see we’d get a
      lot of improvement compared to the other 2 versions of this function, so
      we’re doing good. We’re making our way into the world. We can actually use
      a different form of reassociation to get even better performance on the
      same function:
    </p>
    <img src="@/assets/CS33/img154.png" />
    <p>
      Now, I want to leave this to you to tell me why this is an improvement of
      our previous function. Go ahead, draw it out, code it and debug, whatever
      suits your fancy.
    </p>
    <p>
      Now, no matter how much you optimize your code, you’ll end up hitting
      boundaries somewhere. Whether it’s due to not having enough register space
      to store your operands, or simply maximizing the number of computations
      you can pipeline through a functional unit, ILP isn’t limitless. If it
      were, we’d have solved existence at this point. I don’t know about you,
      but I have no idea why I exist. Is it really to make this god awful guide?
      I sure hope so.
    </p>
    <p>
      One limitation I do want to specify is something I promised I’d come back
      to. When we talked about branching, I said that we value having less
      branching over space usage. With our newfound knowledge, we know that
      programs’ Instruction Control Units are constantly looking ahead of where
      they’re executing in order to maximize ILP. The goal is to pull in enough
      instructions to keep our Execution Units busy. However, what if this
      Instruction Control reaches a point of branching? Since our Execution Unit
      will be busy performing other computations, we have no idea how to branch,
      and ILP is stopped. There just isn’t a reliable way to figure out which
      branch to continue down without performing the computation, so we have to
      find a less-than-optimal way to resolve this.
    </p>
    <p>
      One common way to do this is just by attempting to predict which branch
      will be taken, and begin executing those instructions. ILP will be
      conserved if the prediction was right, but if it was wrong, our program
      would take on a lot of unnecessary overhead in trying to fix itself. There
      isn’t a perfect solution to this as of yet. If you happen to find one,
      well, just remember me when you’re accepting your Nobel (my Insta is
      @c.zhangg, just saying, wouldn’t mind a shoutout).
    </p>
    <p>
      At the end of the day ILP is up to you to work with. Pay attention while
      you write your code, and keep your eye out for opportunities to use the
      boundless knowledge I’ve bestowed upon you in these pages.
    </p>
    <h2>Unit 5: The Memory Hierarchy</h2>
    <p>
      Just like the previous unit, our discussion here is going to be pretty
      short. We’re going to expand a little more into the world of hardware here
      to provide some more context and optimization tools. Throughout the
      course, we’ve been looking a lot more at code, but a system-level overview
      opens up a couple more pathways for optimization. Unfortunately, we’re
      definitely going to get a little abstract here, so the material here is
      some of the hardest we’ll see in the course.
    </p>
    <p>
      On the bright side, we are going to be able to patch up some holes in our
      knowledge of how computers work, and give us some more material to work
      with in Parallel Lab. Would I say this stuff is super important? Not
      really, but I’m going to take the time to write it out for you anyways,
      because I’m just that good of a person. Also, my writing skill is very
      clearly on the decline so I am sorry if you get lost here, it’s probably
      my fault.
    </p>
    <h3>Unit 5.1: Basic Technologies</h3>
    <p>
      Before we dive into the real material, we’re going to give a quick rundown
      of some general terms that it’ll be nice to be aware of.
    </p>
    <p>
      The first technology we’ll be discussing is RAM, or Random Access Memory.
      RAM is made up of cells, and multiple RAM chips combine together to form
      memory. RAM comes in 2 varieties: SRAM (Static RAM) and DRAM (Dynamic
      RAM). SRAM is used in situations where we value speed over capacity, while
      DRAM is the opposite. Later in the section, we’ll touch on caching, which
      is a great example of SRAM’s benefits. On the other hand, the main memory
      model that we’ve been working with thus far is a better example of DRAM’s
      applications.
    </p>
    <p>
      Both SRAM and DRAM are what are called volatile memories, which means they
      lose their information if powered off. Since we may want to retain
      information without power (think USB drives, smartphones, etc.), we must
      also have options for nonvolatile memory, such as ROM, PROM, etc. We won’t
      concern ourselves too deeply with these. The nonvolatile memory we will
      bother dealing with is SSDs, or Solid State Disks. While there is some
      material on the interaction between a system and an external disk, I’m not
      going to get into it here because I don’t personally think it’s important.
      What I do care about is establishing the idea that data gets read to and
      written from disk in the form of pages, which can be anywhere from 4KB to
      512KB. This will come a little bit more into discussion later, but it
      serves as a good tool to highlight the major theme of this unit. We
      transfer data in these large granularities because accessing disk is
      expensive. For the most part, we have to work to balance the trade-off
      between capacity and speed. The methods we use to create this balance will
      be discussed in the upcoming topics.
    </p>
    <p>
      One trend that we want to focus on with regards to this theme is that our
      CPUs have scaled significantly better than our memory has:
    </p>
    <img src="@/assets/CS33/img155.png" />
    <p>
      This means that, even as our CPUs evolve to have lower and lower
      latencies, we’re still bound by the limitations of our memory access. It’s
      worth noting that the y-axis above isn’t linearly spaced, it’s spaced in
      orders of magnitude, so this is really a significant obstacle in
      computation.
    </p>
    <p>
      With that in mind, we know we need to be writing our programs so that we
      can minimize the frequency at which we access these larger latency
      structures, and that’s what we’ll look at in the next topic. Please rate
      that transition, I’m so proud of myself.
    </p>
    <h3>Unit 5.2: Locality</h3>
    <p>
      Locality is the idea that programs tend to use data and instructions with
      addresses near or equal to those they have used recently. Within the
      context of memory, near may mean 1 of 2 things: time or space. As a
      result, we have 2 types of locality: temporal and spatial (s/o to Diamond
      and Pearl players).
    </p>
    <p>
      Temporal locality is the idea that recently referenced addresses will be
      referenced again in the near future. Something like iterating through a
      loop and accessing the same variable each iteration is a good example of
      temporal locality.
    </p>
    <p>
      Spatial locality is the idea that nearby memory addresses will be
      referenced close to each other in time. Iterating through an array is a
      good example of spatial locality, since each element is allocated
      contiguously in memory.
    </p>
    <p>Given the example:</p>
    <img src="@/assets/CS33/img156.png" />
    <p>
      We can witness both types of locality. The consistent access of the memory
      address that holds the value of sum makes use of temporal locality, while
      the iteration through the array, one element at a time makes use of
      spatial locality.
    </p>
    <p>
      On a less obvious note, we also have locality when it comes to the
      instructions that encode this loop. Remember that instructions are also
      stored in memory, and therefore can be important to optimize. Since
      there’s no branching, we can safely assume the instructions will come one
      after another, so there must be spatial locality. In addition, the loop
      makes use of the same instructions over and over again, so we have
      temporal locality as well.
    </p>
    <p>
      Analyzing locality can be a very good skill to develop as a programmer.
      Here’s an interesting question for you. Given a 2-D array, with what you
      know from Unit 3, would you iterate through the array in row-major order
      or column-major order to maximize locality? The answer should be pretty
      easy, you’ll know if you have the right one.
    </p>
    <h3>Unit 5.3: Caches</h3>
    <p>
      We can now move into the main discussion of the section. Based on many
      factors ranging from technology trends to locality, memory is organized
      into the memory hierarchy. Here is an example of this organizational
      approach:
    </p>
    <img src="@/assets/CS33/img157.png" />
    <p>
      The main idea here is that, as we move up the hierarchy, we have devices
      with smaller amounts of storage, but much faster access times. When we’re
      looking for a piece of data, we’ll start at the top of the hierarchy, and
      then proceed to trickle down until we find it. Once we find it, we bring
      it up the hierarchy and place it into the higher levels.
    </p>
    <p>
      You probably notice that a large portion of the hierarchy is taken up by
      caches, which we’re going to touch on in this topic. A cache is a small,
      fast storage device that acts as a staging area for a subset of the data
      in a larger, slower device. By this definition, each level k in the memory
      hierarchy acts as a cache for level k + 1. Why is this useful? Well, as we
      process data throughout the hierarchy, recently accessed data will be
      brought up to the higher levels of the hierarchy. By exploiting locality,
      we can say that these recently accessed pieces of data will be accessed
      more often than data stored at lower levels. This effectively creates a
      system where cheap, slow storage can contain a lot of data necessary for a
      program, while the more expensive, faster storage can be used for the
      majority of the data that’s actually accessed.
    </p>
    <p>
      That was confusing, I’m upset at myself for being such a terrible writer.
      I hate myself. Let’s look deeper into how a cache works. To illustrate
      this, we’re going to represent data as blocks:
    </p>
    <img src="@/assets/CS33/img158.png" />
    <p>
      As we can see, the cache can only hold a small subset of the data present
      in the lower level. Each block contains some amount of data, dependent on
      the structure of the cache. When data is moved from the lower level of
      memory into the cache, an entire block is moved, even if we don’t need all
      of the data within the block. This sets the stage for us to exploit
      spatial locality. Let’s say we wanted to move block 4 into the cache:
    </p>
    <img src="@/assets/CS33/img159.png" />
    <p>
      As we can see, in order to make room for block 4, we had to remove, or
      “evict”, block 8. Determining which block to remove is the cache’s
      eviction policy, and is out of the scope of the class and this guide. For
      now, all we need to know is that, other than in some very specific
      systems, removing blocks from the cache is managed by the hardware, not
      the software.
    </p>
    <p>
      So, why would we need to bring block 4 into the cache? Well, let’s say we
      needed to access the data in block 4. First, we’d check the cache for that
      data. When we didn’t find it, we sustained a “miss”, so we had to search a
      lower level of the hierarchy. We then brought the block into the cache,
      with the hopes that we’ll be accessing it later due to locality. I know
      I’m repeating myself, but I’m trying to brute force how hard it is to
      explain this stuff by just explaining it a lot. On the other hand, if we
      requested data from block 14 from the cache, we’d have sustained a “hit”,
      since the block is already there.
    </p>
    <p>
      All of that was covering the general concept of a cache. Since everything
      has to be confusing in this class, we’re going to focus on what we
      actually care about in this class: the L1-L3 caches. Why is this naming so
      awful? I’ve never wanted to use curse words more in my life. Caches are
      generally organized very similarly to a hash table:
    </p>
    <img src="@/assets/CS33/img160.png" />
    <p>
      Depending on its index, a cache block (line) will be sent to a given grey
      block (set) in the cache. Each cache block is made up of a valid bit,
      which indicates if the cache block is valid, a tag, which differentiates
      cache blocks from each other, and the actual data stored in the cache
      block.
    </p>
    <p>
      Caches are measured by multiple different metrics. Miss rate is the
      fraction of memory references that are not found in the cache. This will
      obviously vary with the size of the cache, but usually stays around 3-10%.
      Hit time is the time that it takes to deliver a block from the cache to
      the processor. This time goes up as we move further down the memory
      hierarchy. Finally, miss penalty is the amount of extra time incurred from
      a miss. Due to the trends we discussed earlier in the section, the miss
      penalty of caches is actually increasing, and currently stands at around
      50-200 cycles.
    </p>
    <p>
      If we combine these metrics, we get a better picture of why caches are so
      important. Consider a cache hit time of 1 cycle, and a miss penalty of 100
      cycles. A 1% miss rate would have an average access time of:
    </p>
    <img src="@/assets/CS33/img161.png" />
    <p>
      If we increase the miss rate by just 2%, we have an average access time
      of:
    </p>
    <img src="@/assets/CS33/img162.png" />
    <p>
      That 2% increase doubled our average access time. This is a callback to
      how lower levels of the memory hierarchy are magnitudes slower than the
      upper levels. This also shows us why miss rate is used more frequently
      than hit rate. You could have equivalently said the above example compared
      a 99% hit rate to a 97% hit rate, but that undersells the impact of the 2%
      decrease.
    </p>
    <p>
      With this knowledge, how can we write our programs to take advantage of
      caching? We can start by looking at the sections of our code that are
      executed frequently, like loops. Of course, our goal is to reduce the
      number of misses, which may involve maximizing use of temporal and spatial
      locality, as discussed in the previous section.
    </p>
    <p>
      I’m actually going to leave this discussion for the next section, which
      will be entirely focused on a very useful example. Sorry again for the
      poor writing, definitely not feeling like myself today. Hopefully I can
      bounce back soon.
    </p>
    <h3>Unit 5.4: Matrix Multiplication</h3>
    <p>
      Let’s imagine we need to write a program that multiplies 2 n x n matrices
      containing doubles. Let’s take a naïve approach to this, ignoring all
      notion of memory hierarchy:
    </p>
    <img src="@/assets/CS33/img163.png" />
    <p>
      Here, a and b are our input matrices, and c is our result. As you can see
      by looking at the code, we’re essentially just creating a variable sum,
      and then using it to store the product of a row of a and a column of b.
      This aggregate value will then be stored in a single element of c. This is
      probably the most basic way to satisfy the requirements of this problem,
      but can we do better?
    </p>
    <p>
      Let’s get into the memory hierarchy stuff. Assume that our system uses a
      block size of 32 bytes, which is large enough to contain 4 doubles. We’ll
      also assume that the dimension of the matrix, n, is very large, so that
      the cache won’t be able to hold multiple rows of the matrix. Now, let’s
      take a look at how our loops are iterating through the matrices:
    </p>
    <img src="@/assets/CS33/img164.png" />
    <p>
      Once again, we’re taking a row i from a, multiplying it by a column j from
      b, and inserting it into element i, j from c. To do this, we use k to
      iterate through each row/column.
    </p>
    <p>
      Recall from Unit 3 that arrays are laid out contiguously in memory in
      row-major order. That’s right, big word season. This means our goal should
      be to traverse these arrays by stepping through them 1 row at a time. By
      doing this, every time we move a block into the cache, we’re moving the
      next 4 elements that we’ll be accessing into the cache, therefore
      exploiting spatial locality. Look at us being geniuses.
    </p>
    <p>
      Alternatively, if we were to step through each array using columns, we’d
      end up with pretty awful behavior. Remember that elements in the same
      column are actually fairly distant from each other in memory, especially
      if we’re assuming these matrices are massive. This means that whenever we
      pull a cache block in, we only use 1 element from that block, and then
      immediately pull another block in. If we think about it, this means our
      miss rate is 100%. That doesn’t sound too good, let’s abandon that idea.
    </p>
    <p>
      So let’s take a closer look at the implementation we already have. We’ll
      call it ijk, since that’s the order of the loops. Remember that we’re
      primarily concerned with the innermost loop, since that’s what’s being
      executed most throughout the program’s runtime. What we’re doing here is
      stepping through a in rows, and stepping through j in columns. So that’s
      not too terrible. We’re taking advantage of spatial locality in a, but
      we’re missing out in b. If we think about the average number of misses per
      iteration of the innermost loop, a misses ¼ iterations since a cache block
      holds 4 doubles, and b misses every iteration since column-wise access is
      inefficient. Let’s try a different ordering, like kij. We could implement
      it as follows:
    </p>
    <img src="@/assets/CS33/img165.png" />
    <p>
      If we do this, we end up fixing a on each iteration of the inner loop, and
      iterating through b and c row by row. This means that both b and c will
      average 0.25 misses per iteration, which seems pretty nice. So while the
      ordering is definitely not as intuitive as ijk, it’s actually much more
      efficient in solving the problem. You may be worried that a is being
      stepped through column-wise, but, since it’s not in the inner loop, we can
      just treat it as static, just like my relationship status. Let’s take a
      look at one last ordering:
    </p>
    <img src="@/assets/CS33/img166.png" />
    <p>
      In the jki ordering, we’re holding b constant in the inner loop, and
      stepping through a and c column by column. At this point, you should
      already know how bad that is. Since we’re not traversing through rows at
      any point, we’re literally using no spatial locality. Every iteration of
      the inner loop, access to a misses and access to c misses. We’re spitting
      in the face of the cache system and the nerds that created it. Do you feel
      the shame? I’m going insane.
    </p>
    <p>
      Feel free to try moving through the remainder of the combinations of ijk
      ordering. None of them should exhibit any new behavior that we haven’t
      looked at yet. I’m going to move on to the pinnacle of efficient code:
    </p>
    <img src="@/assets/CS33/img167.png" />
    <p>
      So apart from being entirely unreadable, what is this code block? This is
      an implementation of tiled matrix multiplication. The idea is that we take
      a giant matrix and split it up into smaller B x B matrices. By doing this,
      we can ensure that our matrix multiplication is consistently taking
      advantage of spatial locality. I don’t want to go too in-depth with this
      because I think it’ll just confuse you more, but I do encourage you to
      take a close look at this code and see why it’s more efficient than simply
      stepping through matrices with ijk. Good luck! I need to go see a
      psychiatrist.
    </p>
    <h2>Unit 6: Parallelism</h2>
    <p>
      So, this unit is going to cover another optimization technique called
      parallelism. We’re actually going be using a little mini-language within C
      called OpenMP to help us put what we learn into practice. Unfortunately,
      that means there’s a lot to cover here, so I’m really just going to be
      introducing the basics, and learning how to apply it is really going to be
      up to you and your experience with the Parallel Lab. Don’t be like me and
      drop a 25/100 on that.
    </p>
    <p>
      A lot of the stuff here actually seems pretty intuitive, but it might not
      be as easy as you might think it is in reality. Using parallelism comes
      hand in hand with opening your code up to a lot more vulnerabilities and
      problems that are a pain in the ass to debug. Honestly, the degree to
      which you actually need to use it for this class is pretty limited, so
      just pay attention and you’ll be a-ok. Let’s-a go.
    </p>
    <h3>Unit 6.1: Parallel Computing</h3>
    <p>
      In the last unit, we discussed multiple ways we can optimize program
      performance given a single processor. Parallel computing attempts to
      optimize program performance by leveraging multiple processors, which
      allows us to perform multiple tasks simultaneously. In order to do this
      efficiently, we’re going to need to learn what code structures provide
      opportunities to apply parallelism and how to design good parallel
      solutions.
    </p>
    <p>
      Now, when we say we’re performing multiple tasks simultaneously, we mean
      that the processors are cooperating to finish a single, larger task. This
      isn’t a discussion on how your computer can be both running CS 32 Project
      3 while also emailing Daddy Smallberg for an extension on CS 32 Project 3.
    </p>
    <p>
      When we talk about parallel programming, we divide our processors into
      “threads”. Each thread has its own %rip, which means it’s capable of
      executing instructions independent of other threads. Up until now, we’ve
      optimized in the scope of a single thread, or a sequential program. The
      goal now is going to be to study this sequential program and look for
      opportunities to parallelize it, and keep all processors doing as much
      work as possible.
    </p>
    <p>
      There are 3 major types of parallel computing that we’ll be covering here:
      domain decomposition, task/functional decomposition, and pipelining.
    </p>
    <p>
      Domain decomposition is a type of parallelism where we’re given a set of
      data, and we attempt to break this data up among multiple processors to
      work on. The first step in domain decomposition is deciding how you want
      to break up these data elements. Afterwards, you decide what kinds of
      tasks you want each processor to perform on their assigned data set.
    </p>
    <p>
      Let’s say we’re given an array of 20 elements and 4 processors, and we’re
      tasked with finding the largest element in the array. Ignoring binary
      search and good programming habits, we could just traverse the array
      linearly and keep track of the largest element so far. If we use domain
      decomposition, we could give a subarray of 5 elements to each processor,
      have each processor find the local maximum in its subarray, and then find
      the overall maximum out of the 4 local maximums:
    </p>
    <img src="@/assets/CS33/img168.png" />
    <p>
      It’s important to note that the tasks of finding each subarray’s local
      maximum are completely independent of each other. This breakdown wouldn’t
      work if, for example, we needed information from CPU 0’s subarray to find
      the local maximum of CPU 1.
    </p>
    <p>
      Task decomposition focuses on dividing up tasks between processors. Rather
      than trying to break the dataset up, we instead attempt to break up a
      possibly heterogeneous set of tasks. The first step in task decomposition
      is dividing the tasks themselves. As we said, these tasks will often be
      different from one another. Afterwards, we must decide which data elements
      are going to be accessed by each processor’s tasks. Let’s say we had a
      function f() that calls a variety of other functions as follows:
    </p>
    <img src="@/assets/CS33/img169.png" />
    <p>
      If we wanted to apply task decomposition, we could split these function
      calls up as follows:
    </p>
    <img src="@/assets/CS33/img170.png" />
    <p>
      Whether or not we’ve spread these tasks out efficiently is dependent on
      how much time each individual task takes. Within each CPU, the tasks
      they’re assigned are executed sequentially, but by using task
      decomposition, we can execute certain function calls in parallel, speeding
      up the overall execution of the program.
    </p>
    <p>
      Lastly, pipelining is a specific type of task decomposition that works
      very similarly to the pipelining we looked at when we discussed functional
      units. Let’s imagine we have a process that runs in 4 distinct steps:
    </p>
    <img src="@/assets/CS33/img171.png" />
    <p>
      Just like with pipelining within an arithmetic operation, if we have 2 of
      these processes, we can assign a CPU to each step:
    </p>
    <img src="@/assets/CS33/img172.png" />
    <p>
      So CPU 0 starts off by completing step 1 for the first process in the
      first time unit (red). While the first process moves onto step 2, which is
      managed by CPU 1, the second process can begin step 1 with CPU 0 during
      the second time unit (orange). This then repeats until both processes are
      done, which takes 5 total time units, rather than the 8 that a sequential
      pass would’ve taken.
    </p>
    <p>
      To take a high-level view of this idea as a whole, we can use the
      fork/join programming model. The idea is that when the program begins
      execution, we have a single thread active, the master thread. This master
      thread will execute sequentially until we have an opportunity for
      parallelism. At this point, we can fork off and create additional threads
      to begin processing the parallel portions of code. At the end, we will
      join back to the master thread and the extra threads will be suspended or
      die.
    </p>
    <p>
      While active, each of these threads have 2 different types of variables:
      private and shared. Private variables are specific to each thread, while
      shared variables are used by all active threads. Private variables require
      more space since they must exist for each individual thread, while shared
      variables allow for communication between threads.
    </p>
    <p>
      The existence of shared variables adds a couple challenges to parallelism.
      If the shared variable is read-only then that’s not a problem, any thread
      can access it and get data just fine. However, adding the ability to write
      data to shared variables is dangerous. Threads execute completely
      independently of each other. This means they have no sense of if the other
      has accessed the shared variable or not. If multiple threads are
      constantly reading and writing to a shared variable, we have no guarantees
      about the behavior of this variable. This situation is called a race
      condition, and we’ll be looking at it in much more detail later.
    </p>
    <p>
      We’re going to be looking at parallelism through the lens of OpenMP, which
      is an easy, introductory library in C. It is very well-suited to use
      domain decompositions, but less so for the other types we discussed
      earlier. Its simplicity also makes it vulnerable to a variety of errors
      that we’ll be analyzing in the following topic. With that long intro out
      of the way, let’s dive right in.
    </p>
    <h3>Unit 6.2: Worksharing</h3>
    <p>
      Learning OpenMP is really just going to be like learning a mini-language.
      I wouldn’t say much of the C/C++ you’ve learned so far is going to be
      super helpful. OpenMP revolves around the use of pragmas, which are
      compiler directives. Pragmas will appear immediately before their relevant
      construct (you’ll see what this means in a sec), and have the syntax:
    </p>
    <img src="@/assets/CS33/img173.png" />
    <p>The most basic pragma to understand is:</p>
    <img src="@/assets/CS33/img174.png" />
    <p>
      This pragma tells the compiler to fork and execute the next for loop in
      parallel. In order to take advantage of this pragma, you must be aware of
      how many iterations the for loop will perform at runtime. This means we
      can’t have an early termination condition like a break or return within
      the loop. A little thinking back to how domain decomposition works should
      tell you why. An example of a valid use of this pragma is as follows:
    </p>
    <img src="@/assets/CS33/img175.png" />
    <p>
      As you can see, while the conditions in the for loop are variables, they
      will still be known during runtime, and the body of the for loop contains
      no early termination code, so we’re safe to use a parallel for.
    </p>
    <p>
      Every time we use a parallel for, we’re initiating a fork and a join. Both
      operations require substantial amounts of overhead, so we want to make
      sure we’re getting the maximum amount of work for each fork/join. This is
      called maximizing grain size. Take the following code for instance:
    </p>
    <img src="@/assets/CS33/img176.png" />
    <p>
      I’m going to tell you right now that we cannot parallelize the outermost
      loop. As a challenge problem, I want you to figure out what’s stopping us
      from doing so. I promise this isn’t me being lazy. Back on topic, we can
      either parallelize the i loop or the j loop. Based on our efforts to
      maximize grain size, we would end up parallelizing the i loop. In general,
      we want to parallelize the outermost for loop that is valid for
      parallelization. Implementing this into our example, we have:
    </p>
    <img src="@/assets/CS33/img177.png" />
    <p>
      Now, let’s take a closer examination of what this pragma does for us.
      However many iterations i goes through will be split among the available
      processors. A great advantage to parallel fors is that they automatically
      privatize the iterator variable. This of course makes sense, since each
      processor should have an independent iterator to work with, considering
      they’re working with different iterations. However, no other assumptions
      are made about privatization. This means every other variable is shared by
      default. Uh oh. That j isn’t looking too good then. This means that every
      thread shares the same value for j, so our innermost loop, which will be
      executed by multiple threads, will blow up. To make this not blow up and
      to prevent us from spiraling into buggy depression, we need to add another
      clause to our pragma:
    </p>
    <img src="@/assets/CS33/img178.png" />
    <p>
      This tells the compiler that j needs to be made private. Now, each thread
      has its own j variable, and the progress through the innermost loop will
      track correctly. Let’s look at another example:
    </p>
    <img src="@/assets/CS33/img179.png" />
    <p>
      Assuming no aliasing is occurring, this loop is very parallelizable.
      Almost. We have a very similar problem to our previous example, so I want
      you to have a go at solving it. You got this.
    </p>
    <p>
      So what’s really happening with private variables? When a variable is
      declared private, each thread gets its own copy of the private variable.
      Once this declaration happens, no thread can access the shared version of
      that variable while executing the for loop. Once the threads join back
      together, the private variables disappear, and the value of the original
      shared variable remains the same:
    </p>
    <img src="@/assets/CS33/img180.png" />
    <p>
      In addition, for optimization reasons (not hand-waving I swear), private
      variables are undefined upon forking and joining, just like how normal
      variables in C are undefined. In order to circumvent this initialization,
      we can use another clause: firstprivate. firstprivate tells private
      variables to retain the value of the shared variable, rather than
      initializing a variable with undefined value. This clause only assigns a
      value once per thread, not once per iteration:
    </p>
    <img src="@/assets/CS33/img181.png" />
    <p>
      Likewise, we also have a lastprivate clause, which assigns the value of
      the private variable after the last sequential iteration to the shared
      variable. This one is much more confusing. In a sequential for loop, we
      have a final iteration. Whatever thread is responsible for this final
      iteration will have its final private variable value assigned to the
      shared variable, regardless of whether or not it’s actually the last
      thread to finish executing:
    </p>
    <img src="@/assets/CS33/img182.png" />
    <p>
      Up until now, we’ve been treating parallel for as a single pragma,
      however, it’s actually 2 pragmas combined. parallel is a pragma by itself
      that tells the compiler that the following block of code is to be executed
      in parallel. for is a pragma that divides a for loop among threads within
      a block of code that has been marked with the parallel pragma. So while we
      started with a specific usage of this combination, general OpenMP use will
      see the use of the parallel pragma in combination with multiple other
      worksharing pragmas in an effort to maximize grain size.
    </p>
    <p>
      Another worksharing construct we may run into is the single pragma. This,
      like the for pragma, is used inside a parallel block of code. single
      demarcates (that really is how you spell it) a section of code that should
      only be executed by a single thread.
    </p>
    <p>
      Now, within parallel sections of code, we do have a common question to ask
      ourselves. Let’s say we have 4 threads being used by a for pragma. When 1
      of those threads completes its task, should it wait for the others to
      finish or keep going? Waiting for the others to complete is the default
      choice, and is a process known as barrier synchronization, which we’ll get
      into later. The nowait clause can be used to tell the compiler that
      barrier synchronization is unnecessary, allowing for the thread to
      continue performing tasks.
    </p>
    <p>
      Here is an example to finish off that uses a lot of the concepts that
      we’ve discussed so far. I recommend walking through it in detail and
      proving to yourself why each pragma was used:
    </p>
    <img src="@/assets/CS33/img183.png" />
    <h3>Unit 6.3: Synchronization</h3>
    <p>
      Like we mentioned earlier, synchronization of threads plays a huge role in
      making parallelization more complex. Let’s take the following code
      snippet:
    </p>
    <img src="@/assets/CS33/img184.png" />
    <p>
      What’s going to happen if we make this for loop parallel? Well, if we do
      things properly, we can make x a private variable for each thread, there’s
      no problem there. However, we can’t exactly do the same thing to area,
      since we need the sum of all area’s for the final computation of pi.
    </p>
    <p>
      The issue is that if we don’t privatize area, we’re subjecting it to a
      race condition. A race condition is non-deterministic behavior caused by
      multiple threads accessing the same shared variable at the same time. The
      danger of race conditions lies in their non-deterministic nature, since
      they may not occur every time the program executes. For instance, if we
      parallelize the above program across 2 threads, we might get behavior like
      this:
    </p>
    <img src="@/assets/CS33/img185.png" />
    <p>
      So area has a value of 11, and is then read by Thread A, incremented by 4,
      and 15 is written back to area. After this write completes, area is then
      accessed by Thread B, incremented by 3, and 18 is written back to area.
      And that’s what should happen. A programmer may run this program and get
      the expected behavior and assume that everything’s all dandy. But it’s not
      dandy. It’s not dandy at all. While the above behavior is one possibility,
      here’s another:
    </p>
    <img src="@/assets/CS33/img186.png" />
    <p>
      Here, we see Thread A read the value of 11 from area, but before it can
      increment it and write it back to area, Thread B also reads the 11. Now,
      Thread A will perform its computation and increment by 4, writing the
      value of 15 back to area. However, as far as Thread B is concerned, the
      value of area is still 11, so it will increment by 3 and write the value
      of 14 to area. We’ve basically just made the +4 useless. Bad program is
      bad.
    </p>
    <p>
      Like we said, there’s no guarantee that you’ll see this problematic
      program behavior when you’re testing your code. This is especially true
      when you’re running your program on smaller datasets with a smaller number
      of threads. The issues tend to arise when the execution time or number of
      threads increases, and this makes debugging race conditions kinda brutal.
      These are actually why I got a 25/100 on my Parallel Lab, so trust me,
      they aren’t fun.
    </p>
    <p>
      In order to solve these race conditions, we’re going to use a type of
      synchronization called mutual exclusion. Mutual exclusion ensures that
      only one thread or process is allowed access to a shared resource at any
      given time. In the above example, this means that, once Thread A reads
      area, Thread B won’t be able to read from area until Thread A writes back
      to it. This is implemented through some form of locking, which actually
      gives rise to dangers of its own, but that’s for later.
    </p>
    <p>
      Locking is an atomic mechanism that allows us to control access to
      resources. In general, we have to check if a resource is locked, and then
      set the lock. When we say this process is atomic, we mean that these 2
      steps cannot be broken up. This ensures that 2 threads won’t both check if
      the resource is locked at the same time, see that it’s unlocked, and then
      both proceed to access the resource. This is a process that we can’t force
      our code to do ourselves, and instead must rely on certain features of
      OpenMP to solve.
    </p>
    <p>
      One approach we can use is marking critical sections in our code using the
      critical pragma. This pragma would precede a statement or block that
      represents a portion of code that threads should execute in a mutually
      exclusive fashion. This is a great mechanism to eliminate race conditions
      within that code block, but these must be identified manually by the
      programmer and critical sections will end up executing sequentially.
      Critical sections create mutual exclusion by locking the code rather than
      locking data. If we were to use this to eliminate the race condition from
      our example, we’d develop a program that looks something like:
    </p>
    <img src="@/assets/CS33/img187.png" />
    <p>
      This isn’t the most simple way to eliminate the race condition using
      critical, but it’s the result of making an effort to limit how many
      critical sections we run through. We end up doing the same computations
      from before, but now, each thread stores their values inside a private
      variable temp. Once the threads are done iterating through the for loop,
      they reach a critical section, where, one-by-one, they increment area with
      their final temp value. This process is such a common application of
      critical sections that OpenMP gives us a tool to simplify this whole
      process. If we use the reduction clause, we arrive at a much simpler
      program:
    </p>
    <img src="@/assets/CS33/img188.png" />
    <p>
      This reduction eliminates the need for us to create our own private
      variable and critical section for accumulation. reduction clauses can be
      used with any associative operation (+ and *), and the operation is
      specified by the +: in the parameter. This is then followed by the
      variable that the reduction is to be performed on.
    </p>
    <p>
      Now, sometimes, we need to do what we did above and lock the code.
      However, in general, it is much more efficient and parallel-friendly to
      lock data. To do this, OpenMP provides us with some primitives to work
      with.
    </p>
    <p>
      Let’s say we’re trying to add elements to a hash table. If we lock the
      code for inserting an element into the table, we’re wasting
      parallelization potential. What if we tried to insert 2 elements into 2
      different buckets? There’s no race condition there, but by locking the
      code, we’re forcing threads to run through this insertion sequentially
      anyways. So instead of being dumb, we can do something like:
    </p>
    <img src="@/assets/CS33/img189.png" />
    <p>
      So, it’s not super important that you understand exactly what’s going on
      above (but you’re super cool if you do). At a basic level, you should
      understand that every time we insert an element into a bucket, we put a
      lock on that bucket to prevent any race conditions. By doing this, we can
      keep ourselves safe while also allowing other threads to operate on the
      other buckets in the hash table. Super fantastic, but this is still
      dangerous. Imagine the following situation:
    </p>
    <img src="@/assets/CS33/img190.png" />
    <p>
      While performing some random arithmetic, these threads attempt to use
      mutual exclusion and lock the variables they’re acting on. Now what
      happens when both threads reach this point at the same time:
    </p>
    <img src="@/assets/CS33/img191.png" />
    <p>
      Thread A starts by locking a and Thread B starts by locking b. After the
      increments, Thread A is now waiting for b to become unlocked and Thread B
      is now waiting for a to become unlocked. However, neither of those will
      ever happen since both threads have essentially reached a stalemate
      comparable to the Western Front in WWI. This situation is called deadlock,
      which is where 2 or more threads that share a resource are blocked from
      proceeding because each thread is waiting for a resource held by another.
    </p>
    <p>
      Deadlock, much like race conditions, are non-deterministic behavior and
      horrible to debug. Adding onto the confusion, we can either have global
      deadlock where every thread is trapped, or local deadlock, where only some
      threads are suffering.
    </p>
    <p>
      In order for deadlock to occur, 4 conditions must be satisfied. There must
      be mutually exclusive access to a resource, threads must hold onto
      resources while waiting for additional resources, resources cannot be
      taken away from threads, and there must be a cycle in the resource
      allocation graph. All of these other than the last one are pretty
      self-explanatory, given your boundless knowledge of parallel computing.
      The last condition is simply a graph that looks something like:
    </p>
    <img src="@/assets/CS33/img192.png" />
    <p>
      Violating any of these conditions prevents deadlock from occurring. For
      instance, we can prevent the above cycle from occurring by ranking
      resources, or forcing threads to acquire resources in a preset order. In
      the a and b example from above, if we make both threads acquire a before
      b, we prevent deadlock:
    </p>
    <img src="@/assets/CS33/img193.png" />
    <p>
      Now, whichever thread gets a will be guaranteed to get b as well, and
      deadlock is prevented.
    </p>
    <p>
      There you have it, optimization is done. It’s time for you to tackle the
      Parallel Lab. Be careful when you’re doing it, and make sure you use
      everything from the last 3 sections to your advantage. Using OpenMP is
      cool and all, but it’s the most risky and can lead to some sneaky side
      effects. Using basic techniques like code motion and pipelining can be
      just as effective at getting some massive speedup. Good luck!
    </p>
    <p>
      The rest of the class is gonna cover a fairly wide array of topics, so get
      your brain ready.
    </p>
    <h2>Unit 7: Architecture</h2>
    <p>
      As promised, we have a wide array of topics ahead of us. For now, I’m just
      classifying them as discussions on the architecture of computers that will
      help tie up some unanswered questions from earlier. There’s a lot of
      detail to cover here, and no lab to help reinforce your learning, which is
      definitely going to make this a little harder to get in your head. As if
      that wasn’t enough, there’s a really limited amount of connection between
      the topics, so be ready to jump from one thing to the next pretty fast.
    </p>
    <p>
      The best advice I can give you here is to dedicate time into learning the
      overall concepts rather than the individual intricacies of every section.
      You’ll see what I mean in a second, but it’s just a little too easy to
      overwhelm yourself here if you’re not careful. Just remember that you’re
      almost there, this is the last real unit before we’re done.
    </p>
    <h3>Unit 7.1: Exceptions</h3>
    <p>
      So up until now, we’ve talked about control flow at a very high level.
      Something we really overlook usually is that a processors’ only job is
      really just to execute instructions based on this control flow. In earlier
      sections, we talked about how things like branching and returns can
      interrupt control flow. These factors are changes in the program state.
      Here, we’re going to take a first look at changes in the system state.
      These changes are things like division by 0, keyboard shortcuts, etc.
      These kinds of changes can’t be managed by the mechanisms we’ve covered so
      far, so let’s look at how we deal with them.
    </p>
    <p>
      Changes like these are called exceptional control flow, and they exist at
      all system levels. At a low level, they exist in the form of exceptions, a
      change in control flow in response to a system event. At higher levels,
      they exist in the form of context switches, signals, or nonlocal jumps.
      These aren’t going to be important to us, but it’s worth including here
      because I feel like it.
    </p>
    <p>
      Instead, we’re going to be focusing on exceptions for this class. In more
      specific terms, an exception is a transfer of control to the OS kernel in
      response to some event, or change in processor state. The kernel is the
      memory-resident part of the operating system that has higher level
      accesses than regular code. Some examples of events are a division by 0,
      arithmetic overflow, page faults, I/O requests, and the Ctrl + C command.
      When such an event occurs, we see program behavior that resembles the
      following:
    </p>
    <img src="@/assets/CS33/img194.png" />
    <p>
      So, at first, we have some user code executing. At some point during
      execution, it hits an event, and throws an exception to the kernel code.
      The kernel code will then execute to process the exception. Once finished,
      it will do one of 3 things: return to the instruction that threw the
      exception, return to the instruction following the source of the
      exception, or abort the program’s execution. This behavior is determined
      by the type of exception that occurs. In order to determine how the kernel
      code should handle a specific exception, we use an exception table. This
      is constructed very similarly to a jump table:
    </p>
    <img src="@/assets/CS33/img195.png" />
    <p>
      We can divide this large number of individual exceptions into 2 distinct
      types. That sentence structure was horrendous, but that’s why I refuse to
      take any more English classes in my lifetime.
    </p>
    <p>
      The first type of exception we’ll look at is an asynchronous exception, or
      an interrupt. Interrupts are exceptions that occur due to events that are
      external to the processor. These types of exceptions allow the current
      instruction in the user code to execute properly, so interrupts will
      return to the next instruction upon completion. An example of an interrupt
      is an I/O interrupt from an external device, such as the use of Ctrl + C,
      the arrival of a packet from a remote server, or the arrival of data from
      disk.
    </p>
    <p>
      The next type of exception is a synchronous exception, which is caused by
      an event that occurred as a result of executing an instruction. Within the
      classification of synchronous exceptions, we can break exceptions down
      into even more specific categorizations.
    </p>
    <p>
      One such categorization is a trap, which is an intentional exception. You
      may use a trap in something like a system call, where you need assistance
      from the OS in order to execute your program (opening a file for example).
      By the nature of this type of synchronous exception, traps will return to
      the next instruction in user code. Another type of synchronous exception
      is a fault, which is an unintentional exception that may be recoverable.
      Some examples of this are a protection fault, where you access a section
      of memory that shouldn’t have been accessed, a floating point exception,
      or a page fault (we’ll dive into these later in the section). None of
      these were designed to happen, but under some circumstances, may be
      recoverable. As a result, faults will either return to the current
      instruction in user code to attempt to re-execute it, or may abort if
      unrecoverable. The final type of synchronous exception is an abort. Aborts
      are unrecoverable and unintentional (duh). These may be caused by illegal
      instructions, parity errors, or hardware failure. As you may expect if you
      have the logical capacity of a toddler, or perhaps a genius-level ostrich,
      aborts will abort the program.
    </p>
    <p>
      Backtracking a little to system calls, each system call in x86-64 has a
      unique ID number to identify the type of system call. By using syscall in
      assembly with a specific ID number in %rax, we can leverage the OS for our
      program. Here are some common ID numbers:
    </p>
    <img src="@/assets/CS33/img196.png" />
    <p>
      That about covers it for exceptions. Like I mentioned, we’ll get back to
      some of the things we introduced here in a later section, but we’re at the
      point in the class where I stopped really paying attention, so I’ll have
      to relearn some stuff to be useful. Save me from this torture.
    </p>
    <h3>Unit 7.2: Linking</h3>
    <p>
      So we have a little background in linking from CS 32. Starting with what
      we know, let’s imagine we have 2 files:
    </p>
    <img src="@/assets/CS33/img197.png" />
    <p>
      Obviously, we need to link these together for our program to work. This
      will be done as follows:
    </p>
    <img src="@/assets/CS33/img198.png" />
    <p>
      As a brief overview, we start with our source files, main.c and sum.c.
      These will be sent through the compilation/assembly process, and will
      become separate relocatable object files, main.o and sum.o. At this point,
      the .o files are linked together to form the final executable, prog.
    </p>
    <p>
      There are many reasons we choose to build our programs like this. The
      first of which is modularity. By allowing our programs to be broken down
      into multiple, smaller files, we have an easier time extracting certain
      sections out or inserting new sections in. It also allows us to build
      libraries of common functions for general use (think iostream, stdlib,
      math, etc.). The next reason is efficiency. Since we compile each
      individual source file separately, if we ever need to make a change to a
      single source file, we’re saved the trouble of recompiling every other
      source file, allowing for incremental development. All we have to do at
      that point is relink. We also get more space efficiency with common
      libraries. If a library is used across multiple programs, we can store it
      in a single place and use it in multiple instances, rather than having to
      store the same code each time it’s used.
    </p>
    <p>
      So how does a linker actually work? Well, the first thing a linker must do
      is symbol resolution. Programs define and reference symbols, like global
      variables and function names. When going through assembly, a program’s
      symbols are gathered and stored in a symbol table. This symbol table is
      just an array of structs, each containing the name, size, and location of
      a symbol. When it comes time for the linker to do its thing, each symbol
      reference is associated with a single symbol definition. Next, the linker
      relocates code. This means it merges the separate code and data sections
      from the .o files into a final location in the resulting executable. At
      this point, all symbol references are updated to represent their final
      locations in memory.
    </p>
    <p>Let’s look at an example. Taking the same program from before:</p>
    <img src="@/assets/CS33/img199.png" />
    <p>
      As we said, the first thing the linker must do is resolve symbols. Within
      main.c, we have the symbol array, which is defined in line 2 and
      referenced in line 4. The program also defines the main() routine on line
      3. Finally, the linker sees that sum() is being referenced in line 4, so
      it will look for the definition of sum(), which is found in line 1 of
      sum.c. Note that the linker doesn’t care about variables like val or i
      since they’re local variables, so the linker knows no other part of the
      program can reference them.
    </p>
    <p>
      In this situation, each of the symbols we discussed above is called a
      global symbol, which is a symbol defined in some module that can be
      referenced in another module. For reference, a module is something like
      main.c or sum.c.
    </p>
    <p>
      The next step for the linker is to relocate text and data. In the
      relocatable object files, we would have storage that looks something like:
    </p>
    <img src="@/assets/CS33/img200.png" />
    <p>
      To fully understand this, recall that the .text segment of memory contains
      instructions, while the .data segment contains global variables or some
      other form of data allocated before program execution. Now, after linking,
      these sections would get relocated into a single section in memory:
    </p>
    <img src="@/assets/CS33/img201.png" />
    <p>
      Obviously, the final executable needs a lot more sections of memory to run
      (headers, other code, stack, blah blah blah), but, unfortunately, drawing
      those in would take time, which I have plenty of, and effort, which I
      clearly ran out of 6 units ago.
    </p>
    <p>
      So, now that we know that, let’s revisit an idea I brought up earlier. How
      do we package functions that manage very common tasks like string
      manipulation, I/O management, or math? Well, in general, we have 2
      approaches. The first is to take all of these functions and mash them
      together in the biggest crossover event in history. This makes
      programmers’ lives much easier, since they only have to link a single file
      to their programs to access whatever library functions they want. However,
      this is horribly space and time inefficient, as the program will link and
      store each of these library functions, even though most will probably
      never get used. The other option is to modularize everything, and place
      each library function in its own source file. Code’s gotta practice social
      distancing during a pandemic too you know. This allows for maximized
      efficiency, as programmers can pick and choose which functions they need
      to use and link them to their program. Of course, this means the
      programming itself is going to be extremely tedious, since each function
      would have to be linked individually.
    </p>
    <p>
      Now, the original solution to this dilemma was to concatenate related
      relocatable object files into a single file called an archive file. Then,
      the linker will search through the archive files for symbols that match
      any unresolved references. Once it finds such a symbol, then that specific
      member of the archive is linked to the rest of the code to form the
      executable. This removes the burden of finding specific functions from the
      programmer, and assigns it to the linker instead. These archive files are
      called static libraries. This seems like a pretty solid solution, but we
      still have some inefficiencies. For one, every executable that contains a
      given library will end up containing a copy of that library, leading to
      duplication of code. In addition, let’s say we found a new, faster way to
      implement a given library. In order to apply this new code, we’d have to
      explicitly relink the library to each application that uses it.
    </p>
    <p>
      This leads us to our more modern solution of using shared libraries. This
      means that, instead of loading code from libraries and linking it into an
      executable, we instead load and link files into an application during
      load-time or runtime. By doing this, we can simply have the file somewhere
      in memory, and, if multiple applications need to access code in the same
      file, they can both link to it, shedding the burden of duplicate code in
      storage. As an added benefit, since we’re linking during load/runtime
      anyways, we have no need to relink the entire program when updating a
      library. Based on this implementation, we can also call these dynamically
      linked libraries, or DLLs.
    </p>
    <p>
      That was kinda dense, I know. Hopefully your professor could fill in/has
      filled in the (many) gaps I left in that explanation. Thankfully, we only
      have a little bit more left to cover, so I’m more excited than ever.
    </p>
    <h3>Unit 6.1: Parallel Computing</h3>
    <h3>Unit 6.1: Parallel Computing</h3>
  </div>
</template>

<script>
export default {
  name: "CS33",
};
</script>

<style lang="scss" scoped>
.cs33 {
  // Spacing
  padding: 0 calc(clamp(4rem, 2.4rem + 6.4vw, 8rem));
  padding-bottom: 2rem;
  // Sizing
  width: 100%;
}
</style>