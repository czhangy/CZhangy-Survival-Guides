<template>
  <div class="phys1c">
    <h1>Surviving PHYS 1C</h1>
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
      Unit 1: Magnetic Fields
    </h3>
    <h4
      class="link"
      @click="() => $refs['1.1'].scrollIntoView({ behavior: 'smooth' })"
    >
      1.1: Point Charges
    </h4>
    <h4
      class="link"
      @click="() => $refs['1.2'].scrollIntoView({ behavior: 'smooth' })"
    >
      1.2: Helical Motion
    </h4>
    <h4
      class="link"
      @click="() => $refs['1.3'].scrollIntoView({ behavior: 'smooth' })"
    >
      1.3: Hall Effect
    </h4>
    <h4
      class="link"
      @click="() => $refs['1.4'].scrollIntoView({ behavior: 'smooth' })"
    >
      1.4: Charge Segments
    </h4>
    <h4
      class="link"
      @click="() => $refs['1.5'].scrollIntoView({ behavior: 'smooth' })"
    >
      1.5: Magnetic Dipole Moments
    </h4>
    <h4
      class="link"
      @click="() => $refs['1.6'].scrollIntoView({ behavior: 'smooth' })"
    >
      1.6: Normalization
    </h4>
    <h4
      class="link"
      @click="() => $refs['1.7'].scrollIntoView({ behavior: 'smooth' })"
    >
      1.7: Gyromagnetic Ratio
    </h4>
    <h3
      class="link"
      @click="() => $refs['2'].scrollIntoView({ behavior: 'smooth' })"
    >
      Unit 2: Sources of Magnetic Field
    </h3>
    <h4
      class="link"
      @click="() => $refs['2.1'].scrollIntoView({ behavior: 'smooth' })"
    >
      2.1: Ampere's Law
    </h4>
    <h4
      class="link"
      @click="() => $refs['2.2'].scrollIntoView({ behavior: 'smooth' })"
    >
      2.2: Current Sheets
    </h4>
    <h4
      class="link"
      @click="() => $refs['2.3'].scrollIntoView({ behavior: 'smooth' })"
    >
      2.3: Solenoids
    </h4>
    <h4
      class="link"
      @click="() => $refs['2.4'].scrollIntoView({ behavior: 'smooth' })"
    >
      2.4: Biot-Savart
    </h4>
    <h4
      class="link"
      @click="() => $refs['2.5'].scrollIntoView({ behavior: 'smooth' })"
    >
      2.5: Circular Loops
    </h4>
    <h3
      class="link"
      @click="() => $refs['3'].scrollIntoView({ behavior: 'smooth' })"
    >
      Unit 3: Inductance
    </h3>
    <h4
      class="link"
      @click="() => $refs['3.1'].scrollIntoView({ behavior: 'smooth' })"
    >
      3.1: Faraday's Law
    </h4>
    <h4
      class="link"
      @click="() => $refs['3.2'].scrollIntoView({ behavior: 'smooth' })"
    >
      3.2: Rigid Bodies
    </h4>
    <h4
      class="link"
      @click="() => $refs['3.3'].scrollIntoView({ behavior: 'smooth' })"
    >
      3.3: Generators
    </h4>
    <h4
      class="link"
      @click="() => $refs['3.4'].scrollIntoView({ behavior: 'smooth' })"
    >
      3.4: Faraday's Law II
    </h4>
    <h4
      class="link"
      @click="() => $refs['3.5'].scrollIntoView({ behavior: 'smooth' })"
    >
      3.5: Inductors
    </h4>
    <h3
      class="link"
      @click="() => $refs['4'].scrollIntoView({ behavior: 'smooth' })"
    >
      Unit 4: RLC Circuits
    </h3>
    <h4
      class="link"
      @click="() => $refs['4.1'].scrollIntoView({ behavior: 'smooth' })"
    >
      4.1: Averages
    </h4>
    <h4
      class="link"
      @click="() => $refs['4.2'].scrollIntoView({ behavior: 'smooth' })"
    >
      4.2: Root-Mean-Square Values
    </h4>
    <h4
      class="link"
      @click="() => $refs['4.3'].scrollIntoView({ behavior: 'smooth' })"
    >
      4.3: DC Circuits
    </h4>
    <h4
      class="link"
      @click="() => $refs['4.4'].scrollIntoView({ behavior: 'smooth' })"
    >
      4.4: Mechanical Analysis
    </h4>
    <h4
      class="link"
      @click="() => $refs['4.5'].scrollIntoView({ behavior: 'smooth' })"
    >
      4.5: Impedance
    </h4>
    <h4
      class="link"
      @click="() => $refs['4.6'].scrollIntoView({ behavior: 'smooth' })"
    >
      4.6: Component Analysis
    </h4>
    <h4
      class="link"
      @click="() => $refs['4.7'].scrollIntoView({ behavior: 'smooth' })"
    >
      4.7: Phasors
    </h4>
    <h4
      class="link"
      @click="() => $refs['4.8'].scrollIntoView({ behavior: 'smooth' })"
    >
      4.8: Complex Analysis
    </h4>
    <h4
      class="link"
      @click="() => $refs['4.9'].scrollIntoView({ behavior: 'smooth' })"
    >
      4.9: Power Factor
    </h4>
    <h4
      class="link"
      @click="() => $refs['4.10'].scrollIntoView({ behavior: 'smooth' })"
    >
      4.10: Resonance
    </h4>
    <h4
      class="link"
      @click="() => $refs['4.11'].scrollIntoView({ behavior: 'smooth' })"
    >
      4.11: Parallel AC Circuits
    </h4>
    <h3
      class="link"
      @click="() => $refs['5'].scrollIntoView({ behavior: 'smooth' })"
    >
      Unit 5: Electromagnetic Waves
    </h3>
    <h4
      class="link"
      @click="() => $refs['5.1'].scrollIntoView({ behavior: 'smooth' })"
    >
      5.1: Ampere's Law II
    </h4>
    <h4
      class="link"
      @click="() => $refs['5.2'].scrollIntoView({ behavior: 'smooth' })"
    >
      5.2: Maxwell's Equations
    </h4>
    <h4
      class="link"
      @click="() => $refs['5.3'].scrollIntoView({ behavior: 'smooth' })"
    >
      5.3: Free-Space
    </h4>
    <h4
      class="link"
      @click="() => $refs['5.4'].scrollIntoView({ behavior: 'smooth' })"
    >
      5.4: EM Waves
    </h4>
    <h4
      class="link"
      @click="() => $refs['5.5'].scrollIntoView({ behavior: 'smooth' })"
    >
      5.5: Poynting Vector
    </h4>
    <h4
      class="link"
      @click="() => $refs['5.6'].scrollIntoView({ behavior: 'smooth' })"
    >
      5.6: Light Pressure
    </h4>
    <h3
      class="link"
      @click="() => $refs['6'].scrollIntoView({ behavior: 'smooth' })"
    >
      Unit 6: Optics
    </h3>
    <h4
      class="link"
      @click="() => $refs['6.1'].scrollIntoView({ behavior: 'smooth' })"
    >
      6.1: Empirical Rules
    </h4>
    <h4
      class="link"
      @click="() => $refs['6.2'].scrollIntoView({ behavior: 'smooth' })"
    >
      6.2: Conventions
    </h4>
    <h4
      class="link"
      @click="() => $refs['6.3'].scrollIntoView({ behavior: 'smooth' })"
    >
      6.3: Mirrors
    </h4>
    <h4
      class="link"
      @click="() => $refs['6.4'].scrollIntoView({ behavior: 'smooth' })"
    >
      6.4: Refraction
    </h4>
    <h4
      class="link"
      @click="() => $refs['6.5'].scrollIntoView({ behavior: 'smooth' })"
    >
      6.5: Thin Lenses
    </h4>
    <h4
      class="link"
      @click="() => $refs['6.6'].scrollIntoView({ behavior: 'smooth' })"
    >
      6.6: Chained Devices
    </h4>
    <h4
      class="link"
      @click="() => $refs['6.7'].scrollIntoView({ behavior: 'smooth' })"
    >
      6.7: The Eye
    </h4>
    <h3
      class="link"
      @click="() => $refs['7'].scrollIntoView({ behavior: 'smooth' })"
    >
      Unit 7: Interference and Diffraction
    </h3>
    <h4
      class="link"
      @click="() => $refs['7.1'].scrollIntoView({ behavior: 'smooth' })"
    >
      7.1: Interference
    </h4>
    <h4
      class="link"
      @click="() => $refs['7.2'].scrollIntoView({ behavior: 'smooth' })"
    >
      7.2: Young's Two-Slit Experiment
    </h4>
    <h4
      class="link"
      @click="() => $refs['7.3'].scrollIntoView({ behavior: 'smooth' })"
    >
      7.3: Reflection
    </h4>
    <h4
      class="link"
      @click="() => $refs['7.4'].scrollIntoView({ behavior: 'smooth' })"
    >
      7.4: Thin Films
    </h4>
    <h4
      class="link"
      @click="() => $refs['7.5'].scrollIntoView({ behavior: 'smooth' })"
    >
      7.5: Diffraction
    </h4>
    <h4
      class="link"
      @click="() => $refs['7.6'].scrollIntoView({ behavior: 'smooth' })"
    >
      7.6: Rayleigh's Criterion
    </h4>
    <h3
      class="link"
      @click="() => $refs['8'].scrollIntoView({ behavior: 'smooth' })"
    >
      Unit 8: Special Relativity
    </h3>
    <h4
      class="link"
      @click="() => $refs['8.1'].scrollIntoView({ behavior: 'smooth' })"
    >
      8.1: Geometric Transformation
    </h4>
    <h4
      class="link"
      @click="() => $refs['8.2'].scrollIntoView({ behavior: 'smooth' })"
    >
      8.2: Galilean Transformation
    </h4>
    <h4
      class="link"
      @click="() => $refs['8.3'].scrollIntoView({ behavior: 'smooth' })"
    >
      8.3: Lorentz Boost
    </h4>
    <h4
      class="link"
      @click="() => $refs['8.4'].scrollIntoView({ behavior: 'smooth' })"
    >
      8.4: Time Dilation
    </h4>
    <h4
      class="link"
      @click="() => $refs['8.5'].scrollIntoView({ behavior: 'smooth' })"
    >
      8.5: Length Contraction
    </h4>
    <h4
      class="link"
      @click="() => $refs['8.6'].scrollIntoView({ behavior: 'smooth' })"
    >
      8.6: Relativistic Velocity
    </h4>
    <h4
      class="link"
      @click="() => $refs['8.7'].scrollIntoView({ behavior: 'smooth' })"
    >
      8.7: 4-Momentum
    </h4>
    <h4
      class="link"
      @click="() => $refs['8.8'].scrollIntoView({ behavior: 'smooth' })"
    >
      8.8: Relativisitic Dynamics
    </h4>
    <h4
      class="link"
      @click="() => $refs['8.9'].scrollIntoView({ behavior: 'smooth' })"
    >
      8.9: Compton Scattering
    </h4>
    <h3
      class="link"
      @click="() => $refs['after'].scrollIntoView({ behavior: 'smooth' })"
    >
      Afterword
    </h3>
    <h2 ref="intro">Introduction</h2>
    <p>
      Well hello there. It seems that you’ve stumbled across my personal hell.
      I’m not gonna lie, this class was rough for me. With that said, it is very
      much worth noting that I took this class with the one and only Brent
      Corbin, so the amount of material I’ve covered is probably 5x what you
      actually need to know, and I did still manage to secure an A (with a ~62%
      raw score in the class). If you too are going to be taking Corbin, may God
      have mercy on your soul.
    </p>
    <p>
      Once I was able to look past the insane math and unintuitive concepts,
      this physics class was by far the most interesting I’ve taken, so I hope
      you can at least enjoy a little of what’s coming.
    </p>
    <p>
      Throughout the guide, I include example problems with given answers, but
      no explanation. In general, they are harder than those I’ve derived for
      you, but they are worth doing. Choose to prove to yourself that you get
      the material before you’re forced to prove it to someone that controls
      your grade. The only way to truly be prepared for this class is to do
      every permutation of every problem under the sun and then pray that Corbin
      has mercy on you.
    </p>
    <p>
      Now for the part where I warn you of the rest of my inadequacies. First of
      all, Google Drawings is trash, but we need visuals for this material.
      There will be diagrams. They will be bad. Sorry. Second, this was a
      disaster to port over from Google Docs, so there are a lot of weird
      graphics that I’m too lazy to correct. Finally, there are a lot of
      derivations here and it might be hard to figure out which formulas you
      need. I have an organized formula sheet for that which you can find
      somewhere. Best of luck; go get that A!
    </p>
    <h2 ref="1">Unit 1: Magnetic Fields</h2>
    <p>
      Not gonna lie, there is no easing into this stuff. We’re hitting the
      ground running, so get ready. While the material here is relatively easy,
      it’s a really good sneak peak into what the rest of the class is going to
      be like. There’s a whole lot of calculus, vector math, electricity, and
      everything else that came out of the deepest pits of hell. You need to
      promise me right here and now that you won’t let yourself fall behind
      here, because if you do, I promise you’ll drown later.
    </p>
    <p>
      Either that, or you just don’t have Corbin, in which case, good on you for
      making good life decisions.
    </p>
    <h3 ref="1.1">Unit 1.1: Point Charges</h3>
    <p>
      Recall that Physics 1B was mostly centered in the discussion of
      electricity. This meant electric charge, electric field, blah blah blah.
      When talking about magnetism, however, it’s important to note that there
      is no such thing as a magnetic charge. While electric charges could be
      positive or negative, there is no such thing as a naturally occurring
      magnetic monopole. North always comes with south. As a result, while
      electricity and magnetism definitely come hand in hand, we can’t draw
      perfect parallels between the two.
    </p>
    <p>
      So out of the fields we know, gravitational fields act on gravitational
      “charge” (mass), electric fields on electric charge, what about magnetic
      fields? Well as it turns out, magnetic fields act on electric charge. This
      interaction brings us to our first formula of many:
    </p>
    <img src="@/assets/PHYS1C/img1.png" />
    <p>
      There are a couple things that this formula tells us. Firstly, not only
      does magnetic force act on electric charge, but also it only acts on that
      charge if it is moving in an appropriate direction. This also tells us
      that magnetic force is always perpendicular to the direction of the
      particle’s motion and the magnetic field. Right about now is the time to
      review cross-products and right hand rule if you aren’t super familiar
      with both, you’re going to need to be for a lot of the upcoming material.
    </p>
    <h3 ref="1.2">Unit 1.2: Helical Motion</h3>
    <p>
      Now that we’ve got that basic structure down, let’s move straight into an
      example. Spoiler alert: it’s wack. So let’s say we have some uniform
      magnetic field B with a charge q of mass m moving through it at velocity
      v:
    </p>
    <img src="@/assets/PHYS1C/img2.png" />
    <p>Now taking Newton’s 2nd law into account, we have:</p>
    <img src="@/assets/PHYS1C/img3.png" />
    <p>And taking this and breaking down into components results in:</p>
    <img src="@/assets/PHYS1C/img4.png" />
    <p>
      In order to decouple the differential equations involving the x and y
      components, we must take a second time derivative of both:
    </p>
    <img src="@/assets/PHYS1C/img5.png" />
    <p>Plugging in and rearranging terms, we get:</p>
    <img src="@/assets/PHYS1C/img6.png" />
    <p>
      Now if you’re a mega-genius (unlike me), you will recognize these as
      simple harmonic oscillator equations:
    </p>
    <img src="@/assets/PHYS1C/img7.png" />
    <p>
      Taking a little step back (without traveling of course), we can see that
      our particle’s velocity oscillates in the x and y-direction, and is
      constant in the z-direction. In addition, since we know the magnetic force
      is perpendicular to the velocity, the work done by the magnetic field is
      0, kinetic energy is constant, and therefore the speed of the particle is
      constant. Using what we know from Physics 1B (haha not really), we find
      the solutions:
    </p>
    <img src="@/assets/PHYS1C/img8.png" />
    <p>
      That last equation is a form of something called the cyclotron frequency.
      Keep it in mind, it’ll come back later. Putting all of this together, we
      can now conclude that charged particles traversing a region of uniform
      magnetic field will execute helical motion around a longitudinal axis
      aligned with that field.
    </p>
    <p>
      Wow ok. There were way too many big boy words there. Essentially, this
      particle will spiral circularly upwards along the magnetic field since the
      z-component of the velocity is constant and the x and y-components perform
      simple harmonic motion. Yikes. Hopefully you haven’t given up quite yet.
      There’s still more material to cover from the first lecture. Double yikes.
    </p>
    <h3 ref="1.3">Unit 1.3: Hall Effect</h3>
    <p>
      I hope you have a solid foundation from Physics 1B. I didn’t. This topic
      is an early sign that you really need to know your electricity to get by.
      Let’s get into it. Let’s say we have conductors carrying a current I to
      the right:
    </p>
    <img src="@/assets/PHYS1C/img9.png" />
    <p>
      An important thing to note is that this rightward current can mean
      positive charges are moving to the right, or that negative charges are
      moving to the left. As we go through this problem, we will model both
      cases, one in each conductor. Now let’s imagine our system is immersed in
      a uniform magnetic field B pointing out of the page:
    </p>
    <img src="@/assets/PHYS1C/img10.png" />
    <p>
      Keeping in mind that we have negative charge carriers in the right
      conductor, we can use right hand rule to find the magnetic force FB acting
      on these charge carriers:
    </p>
    <img src="@/assets/PHYS1C/img11.png" />
    <p>
      This magnetic force will in turn push the charge carriers towards the
      bottom of the conductor, pulling charges off the top of the conductor:
    </p>
    <img src="@/assets/PHYS1C/img12.png" />
    <p>
      So two things come out of that development. First, since the two
      conductors behave in different ways, we know that we could find the sign
      of the charge carrier if we knew the voltage difference between the top
      and bottom. That’s more trivia than anything else. However, more
      importantly, this polarization of charge results in the generation of an
      electric field E within the conductor, which, in turn, generates an
      electric force FE on the charge carriers:
    </p>
    <img src="@/assets/PHYS1C/img13.png" />
    <p>
      That green is really awful and the vectors are by no means to scale, but
      hopefully, you get the point. Looking at the equilibrium of this system,
      we can see that:
    </p>
    <img src="@/assets/PHYS1C/img14.png" />
    <p>
      Hooray, we finished that monstrosity. That final equation we derived
      describes what is known as the Hall Effect. Be careful in determining what
      the V’s represent. Now, notice our analysis so far has been related
      specifically to individual charges. Unfortunately, that’s gonna have to
      change.
    </p>
    <h3 ref="1.4">Unit 1.4: Charge Segments</h3>
    <p>
      So as we stated before, magnetic fields act on electric charges in motion.
      Based on that interpretation, it’s reasonable to say that electric current
      may be more fundamental to magnetism than electric charges. As a result,
      we want to find a way to discuss magnetic fields in relation to current
      rather than charge. Imagine a current-carrying wire immersed in a uniform
      magnetic field, and let’s analyze a segment of that wire:
    </p>
    <img src="@/assets/PHYS1C/img15.png" />
    <p>
      Assuming there are n charge carriers in the given segment, the net
      magnetic force on the segment is:
    </p>
    <img src="@/assets/PHYS1C/img16.png" />
    <p>
      Since nq is the total charge in the segment, and recalling that current is
      charge over time, we can equivalently say that:
    </p>
    <img src="@/assets/PHYS1C/img17.png" />
    <p>
      Messing around with kinematics allows us to substitute for time, and we’re
      left with:
    </p>
    <img src="@/assets/PHYS1C/img18.png" />
    <p>
      Make note of the vector association with the length of the segment. Take
      the time to prove to yourself that this substitution is correct and note
      that current is a flux of current density, and therefore cannot be a
      vector – it is a scalar. This final equation is the formula for the
      magnetic force on a current. We’ll be seeing it a lot in the upcoming
      sections.
    </p>
    <p>
      This next example is going to suck, at least for me. Hopefully this goes
      well. Let’s imagine we have a rectangular loop carrying current I, with
      side lengths a and b, making an angle θ with a uniform magnetic field B:
    </p>
    <img src="@/assets/PHYS1C/img19.png" />
    <p>
      Make note of how this loop is not perpendicular to the magnetic field, it
      is displayed in perspective. Also make note that the direction of the
      normal vector n is determined using right hand rule with the direction of
      the current flow. Now let’s use what we know about magnetic force to get
      the direction of forces acting on this loop:
    </p>
    <img src="@/assets/PHYS1C/img20.png" />
    <p>
      To break this down further, we need to analyze each segment of charge
      individually. Starting from a top-down view of the loop, we can see:
    </p>
    <img src="@/assets/PHYS1C/img21.png" />
    <p>
      Obviously the magnetic force isn’t actually acting on something to the
      left of the loop, but I want my diagrams to be a little readable ok.
      Taking the formula for force on a charge segment, we can see that:
    </p>
    <img src="@/assets/PHYS1C/img22.png" />
    <p>
      Use geometry to prove to yourself that the angle between b and B is 90º –
      θ, not θ, and note that we’re looking at magnitudes here; we already know
      the direction of FT. Simplifying just a little bit with trig identities,
      we can see:
    </p>
    <img src="@/assets/PHYS1C/img23.png" />
    <p>If we perform the same analysis on the bottom segment, we see that:</p>
    <img src="@/assets/PHYS1C/img24.png" />
    <p>
      This of course tells us that the magnetic force acting on the top and
      bottom of the loop are equal and opposite. Let’s repeat this analysis with
      the left and right sides of the loop, which I will not make a diagram for
      because they take way too long to make. Don’t worry, it’s the same logic
      with easier numbers since the right and left currents are perpendicular to
      the magnetic field. You should arrive at the conclusion:
    </p>
    <img src="@/assets/PHYS1C/img25.png" />
    <p>
      So the left and right forces are also equal and opposite, and, therefore,
      the net force on this loop is 0. Knowing that, we can also say that the
      acceleration of the center of mass of this loop is 0. Bam, done.
    </p>
    <p>
      Just kidding. You may be able to see that the left and right forces act in
      the same rotational direction. Yup, torque analysis time. These forces
      actually act to align n with the direction of the magnetic field. Looking
      at this from a torque perspective, we see:
    </p>
    <img src="@/assets/PHYS1C/img26.png" />
    <p>
      Keep in mind that when analyzing net torque, we can choose our pivot
      point, so let’s make this easier and choose one of the ends of the loop:
    </p>
    <img src="@/assets/PHYS1C/img27.png" />
    <p>From here we can plug into some basic mechanics formulas and get:</p>
    <img src="@/assets/PHYS1C/img28.png" />
    <p>
      Now, noting that ab is equal to the area of the loop, A, we can rewrite
      this as:
    </p>
    <img src="@/assets/PHYS1C/img29.png" />
    <p>
      We can actually simplify this even further by remembering that A can be
      written as a vector in the direction of the normal unit vector n, bringing
      us to our final equation:
    </p>
    <img src="@/assets/PHYS1C/img30.png" />
    <p>
      Where the N represents the number of turns of wire. This concept won’t be
      too relevant in this unit, but the formula isn’t completely correct
      without it. Just know that in most of the problems we’ll deal with for
      now, N = 1. Now, recall that we learned the formula for an electric dipole
      in 1B:
    </p>
    <img src="@/assets/PHYS1C/img31.png" />
    <p>
      This suggests to us that we can form a similar equation in magnetism by
      defining:
    </p>
    <img src="@/assets/PHYS1C/img32.png" />
    <p>
      Just like p represents the electric dipole moment, μ represents the
      magnetic dipole moment. Notice how this dipole moment points in the same
      direction as the area as long as charge is positive, which means we can
      use right hand rule with the current to determine its direction as well.
      Now that that has finally been derived, we can move on the next topic.
    </p>
    <h3 ref="1.5">Unit 1.5: Magnetic Dipole Moments</h3>
    <p>
      This section is probably going to be the first real taste of what this
      class is gonna be like. Your calculus knowledge better be ready because
      we’re going to need a lot of it.
    </p>
    <p>
      Let’s try to determine the magnetic dipole moment of a uniform disk
      containing charge Q, of radius R, and moving at angular frequency ω:
    </p>
    <img src="@/assets/PHYS1C/img33.png" />
    <p>
      Since this disk is spinning and contains charge, we can imagine the disk
      is composed of infinitesimal current loops dI with radius r:
    </p>
    <img src="@/assets/PHYS1C/img34.png" />
    <p>
      Breaking this analysis up into these infinitesimal current loops and
      plugging in, we have:
    </p>
    <img src="@/assets/PHYS1C/img35.png" />
    <p>
      Of course now, we need to fill in this formula based on what we’re given.
      As we mentioned, N = 1, as there is only one turn of current (again don’t
      worry too much about this). We also know from 1B that:
    </p>
    <img src="@/assets/PHYS1C/img36.png" />
    <p>
      So now we must figure out what dq is. Of course, using more 1B knowledge,
      we know:
    </p>
    <img src="@/assets/PHYS1C/img37.png" />
    <p>
      That’s a little jump, so let’s do a quick rundown of how we got there. We
      know the charge is equal to the charge density times area. Note that this
      charge density being uniform is very significant; non-uniform densities
      require an extra step that we will definitely see later (ugh). This
      uniformity allows us to say that the charge density is simply the total
      charge Q over the area of the disk. Remember that the charge density is a
      characteristic of the disk as a whole, not just the current loop we’re
      analyzing, so we use R to calculate the area. Then, we multiply by the
      infinitesimal area, which can be found by picturing the current loop laid
      out in a straight line:
    </p>
    <img src="@/assets/PHYS1C/img38.png" />
    <p>
      You need to understand how we got to this equation. The logic behind its
      derivation is going to come up time and time again so make sure you get it
      before moving on.
    </p>
    <p>Plugging our newfound dq back into dI and simplifying, we get:</p>
    <img src="@/assets/PHYS1C/img39.png" />
    <p>
      And now that we’ve got dI in terms of what we know, we can move it back
      into dμ:
    </p>
    <img src="@/assets/PHYS1C/img40.png" />
    <p>
      Take great care in substituting for the area here, remember that dμ is for
      the infinitesimal current loop, not the whole disk, which is why r is used
      instead of R. And of course, we need to retain the direction given to us
      by A by adding the normal unit vector into our equation. Now, we can take
      this equation and integrate over the range 0 to R and get:
    </p>
    <img src="@/assets/PHYS1C/img41.png" />
    <p>
      Congrats, you’ve found the magnetic dipole moment of a uniform spinning
      disk. There are so many ways this gets harder, but take a second and
      absorb all that you did there. Understanding these fundamental methods is
      the only way to make life easier as we get into harder problems.
    </p>
    <p>
      I’d highly recommend taking this magnetic dipole moment of a disk we just
      derived and using it to find the magnetic dipole moment of a spinning
      sphere with similar given values. We’ll be tackling a harder variation of
      that problem later, but doing it yourself is a good way to prove that you
      really do understand what we just did. Don’t worry, I’ll wait for you.
    </p>
    <h3 ref="1.6">Unit 1.6: Normalization</h3>
    <p>
      Did you do the sphere problem? If not, that’s totally fine, friendship
      isn’t for everybody, I get it. Anyways, now we’re ready to tackle the
      first scary problem of the class. Don’t worry, it won’t be the last one.
      Let’s take the same disk example we used in the previous topic with one
      slight alteration:
    </p>
    <img src="@/assets/PHYS1C/img42.png" />
    <p>
      Remember when I said we’d run into non-uniform distributions soon? Well
      soon is now. Instead of being a uniform disk, the charge density is now
      proportional to r2. Let’s see how this changes the problem. The first few
      steps are still the same:
    </p>
    <img src="@/assets/PHYS1C/img43.png" />
    <p>
      We start running into new problems when we try to substitute for charge
      density. Since it’s proportional to r2, we can write:
    </p>
    <img src="@/assets/PHYS1C/img44.png" />
    <p>
      Where C is a constant of proportionality. Our next step is then to
      determine this constant in terms of the constraints of the problem. In
      this case, we know the total charge contained in the disk is Q, so we can
      write:
    </p>
    <img src="@/assets/PHYS1C/img45.png" />
    <p>
      The variables we plugged in follow the same logic as the original disk
      problem, so if you don’t get it, go back. From here, we simply integrate
      and solve for C:
    </p>
    <img src="@/assets/PHYS1C/img46.png" />
    <p>
      This process is called normalization. Now we can take C and plug it back
      into the equation for dq. From there, the problem can be solved in the
      same way as the uniform disk problem, so I’ll let you take it from here.
      If done right, you should get:
    </p>
    <img src="@/assets/PHYS1C/img47.png" />
    <p>
      A harder version of this problem was on my first quiz in this class. I got
      a 13/30 on that quiz. I didn’t practice normalization. Don’t be me.
    </p>
    <p>
      Once again, I’ll leave you with a problem you really, really should do.
      Everyone that’s cool will. I won’t lie, it’s definitely harder than the
      disk, but that’s how you make sure you understand what you’re doing.
    </p>
    <p>
      Imagine a sphere has charge Q, radius R, and its charge density is
      proportional to rn, normalize the charge density. If done correctly,
      you’ll end up with:
    </p>
    <img src="@/assets/PHYS1C/img48.png" />
    <h3 ref="1.7">Unit 1.7: Gyromagnetic Ratio</h3>
    <p>
      Before we really get stuck in and start losing our minds, let’s introduce
      a new, easy concept: the gyromagnetic ratio. This ratio is defined by:
    </p>
    <img src="@/assets/PHYS1C/img49.png" />
    <p>
      The L here represents angular momentum. At this point, since we’ve
      discussed torques and, now, angular momentum, I should warn you that it
      will be expected for you to have some fundamental inertias memorized
      (disk, rod, sphere, spherical shell, etc.), so do it now while the
      material is still relatively easy.
    </p>
    <p>
      There’s history here as to why we care about the gyromagnetic ratio, and
      it will be important in upper-division classes, but I’m not a physics
      major so I don’t really care. Sorry.
    </p>
    <p>
      So now, let’s tie this new concept into something we briefly mentioned
      earlier. Let’s take a uniform disk spinning at angular frequency ω, with
      magnetic dipole moment μ, immersed in a uniform magnetic field B:
    </p>
    <img src="@/assets/PHYS1C/img50.png" />
    <p>
      Since the magnetic dipole moment isn’t aligned with the magnetic field,
      the disk will experience a magnetic torque:
    </p>
    <img src="@/assets/PHYS1C/img51.png" />
    <p>Taking the gyromagnetic ratio equation and rearranging it, we get:</p>
    <img src="@/assets/PHYS1C/img52.png" />
    <p>
      Oh joy. A vector differential equation. We sure do love those. Don’t
      panic. This differential equation is actually reminiscent of the
      differential equation we solved back in the helical motion section.
      Mirroring what we did there, we get:
    </p>
    <img src="@/assets/PHYS1C/img53.png" />
    <p>And, much like the helical motion solutions, we have:</p>
    <img src="@/assets/PHYS1C/img54.png" />
    <p>
      That last equation is another form of the cyclotron frequency. That’s
      probably the most important thing to remember from this derivation. Yay I
      guess.
    </p>
    <p>
      These solutions say that physically, the disk spins like a top in the
      magnetic field. Apparently this is related to nuclear magnetic resonance.
      I don’t know what that is. If you do, then good on ya.
    </p>
    <p>
      Congratulations, we’re done with the first unit of this guide. I don’t
      know about you, but I’m celebrating. This material is all still foundation
      for what’s to come. We’ve been discussing properties of the magnetic field
      so far. In the next section, we’ll be analyzing sources of magnetic field
      using two very important laws. You can bet 5 pesos that the material we’ve
      covered will be showing up so don’t fall behind. See you in the next unit!
    </p>
    <h2 ref="2">Unit 2: Sources of Magnetic Field</h2>
    <p>
      So now that we’ve set up our foundation, we can get a little more into the
      nature of magnetic fields. Don’t get me wrong, there’s still a lot of
      math, but it’s a little more formulaic this time around, so as long as
      you’ve got the intuition from last unit, you’ll do just fine here. Even
      still, we’re going to be setting up a couple things for later on, so don’t
      think that you’re allowed to slack off.
    </p>
    <p>
      Also, because we clearly haven’t touched on enough aspects of math yet,
      we’re going to be throwing geometry into the mix. Yay fun.
    </p>
    <h3 ref="2.1">Unit 2.1: Ampere's Law</h3>
    <p>
      So let’s continue with our discussion of magnetic fields. As we said
      earlier, gravitational fields act on mass, electric fields on charge, and
      magnetic fields on current. If we think about it for a second,
      gravitational fields are generated by mass and electric fields by charge.
      Keeping the symmetry alive, on a very basic level, magnetic fields are
      generated by current. Let’s imagine a simple current loop and look at the
      magnetic field generated by it:
    </p>
    <img src="@/assets/PHYS1C/img55.png" />
    <p>
      Ok, yes, I know that looks horrible. Google Docs really doesn’t have that
      many tools available for drawing ok. Stop judging me.
    </p>
    <p>
      Anyways, there are two big takeaways from this. First, the magnetic field
      and current are related by right hand rule. If your thumb is in line with
      the current, your other fingers curl in the direction of the magnetic
      field. Using that, we have a way to predict direction. The other takeaway
      is that the magnetic field lines form closed loops. Think back to how
      electric field lines start from positive charges and end at negative
      charges. Since there’s no equivalent to positive and negative in the world
      of magnetism, the lines cannot start or end, so loops it is.
    </p>
    <p>
      Now that we’ve got a conceptual basis for magnetic fields, let’s start
      looking at ways to calculate them. Taking the most simplistic example we
      can, let’s imagine a section of a long, straight current:
    </p>
    <img src="@/assets/PHYS1C/img56.png" />
    <p>
      To find a starting point for this calculation, we’re going to use a
      technique Brent calls a “symmetry inventory”. This is gonna be a long
      explanation. Seeing that the problem seems to have cylindrical symmetry
      (told you you would need that calculus knowledge), we can write:
    </p>
    <img src="@/assets/PHYS1C/img57.png" />
    <p>
      Looks wack and is wack. This is basically a way to determine what
      dimensions the magnetic field is affected by. Starting with the radial
      distance from the wire, r, we can see that it’s possible to see how far
      away from the wire we are, so r is relevant. In the azimuthal direction,
      φ, since the wire is the same at all angles, we cannot tell where we are
      in the azimuth, so the magnetic field cannot depend on φ. For the
      longitudinal direction, z, we are looking at this current as a long
      current, which basically means infinite in this context. As a result, we
      can’t get a longitudinal bearing, so z is irrelevant. Great, we know
      magnetic field magnitudes only have a radial component, but now we need to
      analyze direction.
    </p>
    <p>
      Let’s pretend we’re looking straight down this wire so the magnetic field
      is in the plane of the page:
    </p>
    <img src="@/assets/PHYS1C/img58.png" />
    <p>
      Now, knowing what we know about the magnitudes, we can begin to analyze
      what unit vectors may be relevant. Let’s imagine r was relevant, that
      would mean that at some point in the loop above, the field lines would get
      closer or farther from the current. However, that would mean something in
      the azimuth would tell us the magnetic field was getting weaker, so r
      cannot be relevant. The same reasoning applies for z dependency. As a
      result, we can conclude that:
    </p>
    <img src="@/assets/PHYS1C/img59.png" />
    <p>
      Or, in English, the magnetic field’s magnitude has a radial component and
      the magnetic field’s direction has an azimuthal component. This
      composition tells us that not only does the wire’s magnetic field form
      closed loops, but these loops are also circular. Now, although there is
      some logic to how we come to this next formula, it’s also mixed in with
      some guesswork, so we’re going to skip the logic and arrive at:
    </p>
    <img src="@/assets/PHYS1C/img60.png" />
    <p>
      So there’s the magnetic field of a wire. Ok, a few things we need to
      address. First of all, we see a new symbol in there: μ0. That’s just the
      magnetic constant (4π x 10-7), magnetism’s equivalent of electricity’s k.
      Other than that, it really just seems like we pulled this out of nowhere,
      and we kinda did. Just go with it, I promise it’s right. Moving things
      around a bit, we can get:
    </p>
    <img src="@/assets/PHYS1C/img61.png" />
    <p>
      Notice we modified the I so that it’s now Iencl. We can do this since I is
      essentially the current enclosed by an imaginary loop where our magnetic
      field is:
    </p>
    <img src="@/assets/PHYS1C/img62.png" />
    <p>
      This probably sounds familiar. Continuing on, based on the geometry of
      this loop, we can take the 2πr from our equation and rewrite it as:
    </p>
    <img src="@/assets/PHYS1C/img63.png" />
    <p>
      Whoa, big jump there. Well, you can imagine that the loop above has radius
      r, which means the path around it (path integral of ds) is equal to the
      circumference of the loop (2πr). Turns out, this is what is known as
      Ampere’s Law, and is magnetism’s analog of Gauss’ Law. Work backwards and
      confirm that this formula will lead you to the formula we derived earlier
      for the magnetic field of a wire. All practice is good practice.
    </p>
    <p>
      Just like Gauss’ Law had specific shapes that it worked on, Ampere’s Law
      does too. Amperian loops should mimic the symmetry of the current’s
      cross-section. For instance, the current above had a circular symmetry,
      and our loop was circular. They should also be directed in relation to
      right hand rule to simplify the integral by making sure B and ds point in
      the same direction.
    </p>
    <p>
      The example I’ll leave you with will help you derive a useful shortcut for
      the magnetic field of wires. Instead of the skinny wire we analyzed above,
      imagine we’re looking at a thick wire:
    </p>
    <img src="@/assets/PHYS1C/img64.png" />
    <p>
      There are two Amperian loops I want you to analyze. If done correctly, the
      fact that the current is uniform, and therefore proportional to the radius
      squared, should be very useful. You should end up with:
    </p>
    <img src="@/assets/PHYS1C/img65.png" />
    <p>In addition, you should’ve run into the shortcut for wires:</p>
    <img src="@/assets/PHYS1C/img66.png" />
    <p>
      If you want even more of a challenge, let’s say that this thick wire
      didn’t carry a uniform current, but instead carried a current with a
      current density proportional to the radius squared. More normalization
      practice right there. If you’re as smart as I know you are, you’ll get:
    </p>
    <img src="@/assets/PHYS1C/img67.png" />
    <p>Good luck doing these problems that you definitely won’t skip!</p>
    <h3 ref="2.2">Unit 2.2: Current Sheets</h3>
    <p>
      Now that we’ve taken care of the most basic example, let’s move on to some
      other geometries that we’ll see. Let’s start with a cross-section of a
      current sheet with height h, width W, carrying a uniform current I:
    </p>
    <img src="@/assets/PHYS1C/img68.png" />
    <p>
      We’re also gonna assume this is a thin sheet so W >> h. Using the same
      symmetry inventory tactic from before, we can get:
    </p>
    <img src="@/assets/PHYS1C/img69.png" />
    <p>
      This means we know what to expect as we’re getting into this derivation.
      Now, let’s imagine this current sheet as infinitely many wires placed
      together in a continuum. A small section of this sheet will look like:
    </p>
    <img src="@/assets/PHYS1C/img70.png" />
    <p>
      We notice here that the net magnetic field is directed left at the top,
      right at the bottom, and cancels out everywhere else. Let’s draw this into
      our diagram:
    </p>
    <img src="@/assets/PHYS1C/img71.png" />
    <p>
      Putting y = 0 in the middle of the sheet lets us use symmetry to assume:
    </p>
    <img src="@/assets/PHYS1C/img72.png" />
    <p>
      Now it’s time for our Amperian loop. Remembering that Amperian loops
      should mimic the symmetry of the current distribution, we’ll draw:
    </p>
    <img src="@/assets/PHYS1C/img73.png" />
    <p>
      Where the top of the loop is at some y and the bottom is at some –y. Now,
      let’s start evaluating Ampere’s Law:
    </p>
    <img src="@/assets/PHYS1C/img74.png" />
    <p>
      Now, since the loop has different magnetic fields acting on each side of
      the loop, we’re going to have the break up the left turn into a piecewise
      expression:
    </p>
    <img src="@/assets/PHYS1C/img75.png" />
    <p>
      Looks bad, but we can simplify it pretty fast. Notice that the magnetic
      field on the left and right sides of the loop is always perpendicular to
      the loop, and therefore cancel out in the dot product. Filling in the rest
      of the terms and solving, we see:
    </p>
    <img src="@/assets/PHYS1C/img76.png" />
    <p>
      Now, we can continue to simplify this by looking back to the symmetry
      argument we made and concluding that:
    </p>
    <img src="@/assets/PHYS1C/img77.png" />
    <p>
      Now, all we’re left with is finding how much current is enclosed. Remember
      that the current is uniform, and therefore, current is proportional to
      area:
    </p>
    <img src="@/assets/PHYS1C/img78.png" />
    <p>
      A lot of steps in one there, but hopefully you followed most of it. The
      most confusing one is the last one where we added the vector information
      into the equation. Note the relationship between y and the direction of
      the magnetic field and prove to yourself that that’s correct.
    </p>
    <p>
      Now that we’ve derived the magnetic field inside the current sheet, try
      deriving the magnetic field outside of it. Assuming you did it right,
      you’ll arrive at:
    </p>
    <img src="@/assets/PHYS1C/img79.png" />
    <p>
      The term inside the parentheses is just a way of determining direction
      based on the y position without modifying the magnitude of the field.
    </p>
    <p>
      Now, let’s do a much easier example with a lot less math. Let’s take 2
      current sheets parallel to each other:
    </p>
    <img src="@/assets/PHYS1C/img80.png" />
    <p>
      Assuming both sheets carry the same current I, we can write in their
      magnetic fields:
    </p>
    <img src="@/assets/PHYS1C/img81.png" />
    <p>
      Noting that the magnitude of the magnetic field outside the sheet doesn’t
      depend on the distance from the sheet (which you should’ve derived above),
      we can draw this as:
    </p>
    <img src="@/assets/PHYS1C/img82.png" />
    <p>
      Effectively, all the current is contained in between the sheets. Now,
      let’s try to apply Ampere’s Law to find the magnetic field:
    </p>
    <img src="@/assets/PHYS1C/img83.png" />
    <p>
      Looking at this derivation, you may be tempted to say that we ignored the
      effects of the second sheet, however, you’ll notice that we actually did
      take it into consideration by accounting for a lack of magnetic field on
      the top of the loop. Take a second to convince yourself of that before we
      check out the next geometry.
    </p>
    <h3 ref="2.3">Unit 2.3: Solenoids</h3>
    <p>
      Before we start with the physics, let’s just make sure we know what a
      solenoid is:
    </p>
    <img src="@/assets/PHYS1C/img84.png" />
    <p>
      Ok so not exactly that. My boundless artistic vision is limited by the
      tools I’m working with. Pretend those disconnected loops in the middle are
      more like a compressed spring, and then you’ve got the picture. A solenoid
      is basically a coil of wire. Let’s pretend it’s carrying a current:
    </p>
    <img src="@/assets/PHYS1C/img85.png" />
    <p>
      For the same reasons as the current sheets, all the magnetic field
      generated is contained within the solenoid. Following the same process as
      that last problem, let’s set up our Amperian loop:
    </p>
    <img src="@/assets/PHYS1C/img86.png" />
    <p>
      Now, the big question is how much current is enclosed? Well, that depends
      on how many turns of wire are enclosed by the loop, since each turn
      carries the current I. We finally see the meaning of that word and why it
      really didn’t matter before. Using Nx as the number of turns enclosed, we
      can write:
    </p>
    <img src="@/assets/PHYS1C/img87.png" />
    <p>
      That new variable, n, that we added simply represents turns per unit
      length, and is really there for convenience. Feel free to add the vector
      component if you want, but we didn’t define coordinates there so I won’t
      add it here.
    </p>
    <p>
      If there’s any part of that derivation that you don’t understand, it’s a
      sign that you should go back and make sure you’re fully caught up to where
      we are. Nothing should’ve been too surprising there. At this point we’re
      done with the basics of Ampere’s Law, although we will revisit this later.
      Time to move on.
    </p>
    <h3 ref="2.4">Unit 2.4: Biot-Savart</h3>
    <p>
      So as we were covering Ampere’s Law, you may have noticed that a large
      portion of setting up involved identifying symmetry and using it to create
      Amperian loops. Of course, not everything in the real world has a nice
      symmetry to it, so we need another tool to deal with these uglier
      distributions. For instance:
    </p>
    <img src="@/assets/PHYS1C/img88.png" />
    <p>
      Imagine this curved wire with a point P to the right. According to
      Biot-Savart, using the infinitesimal elements we defined above, we can
      write:
    </p>
    <img src="@/assets/PHYS1C/img89.png" />
    <p>
      So, let’s get some application out of this. Imagine we have a current
      segment and want to find the magnetic field at some point x:
    </p>
    <img src="@/assets/PHYS1C/img90.png" />
    <p>
      You may be tempted to use Ampere’s Law here, but, spoilers, you’ll get the
      wrong answer. Ampere’s Law doesn’t take into account the fact that this is
      a finite segment. Well, hard way it is. Let’s identify everything we need
      to apply Biot-Savart:
    </p>
    <img src="@/assets/PHYS1C/img91.png" />
    <p>
      Sorry about the weird looking drawings, I’m working some kinks out,
      hopefully that’ll be resolved soon.
    </p>
    <p>
      Anyways, One thing we added that might confuse you is the direction for
      dB. Notice that using right hand rule with either the current segment or
      the numerator of Biot-Savart gives the same direction. We’re looking
      consistent with our intuition so far.
    </p>
    <p>Now, let’s start to plug in what we know:</p>
    <img src="@/assets/PHYS1C/img92.png" />
    <p>
      A lot of rearranging, but nothing too awful. I’d guess the most confusing
      part is determining the angle between the vectors, but just draw your
      angles onto the diagram and you should be fine. Now, evaluating this
      integral is going to be a little trickier. If you think about it, as you
      change your y, your θ and r are also going to be changing, so we need to
      get everything in terms of the same variable. Looking at the right
      triangle made above, we have:
    </p>
    <img src="@/assets/PHYS1C/img93.png" />
    <p>From here, we can use trig to write:</p>
    <img src="@/assets/PHYS1C/img94.png" />
    <p>
      Now, plugging these values back in for dy and r and modifying the limits
      of integration, we get:
    </p>
    <img src="@/assets/PHYS1C/img95.png" />
    <p>
      And reading the values of the sine terms off of the triangle from above,
      we get:
    </p>
    <img src="@/assets/PHYS1C/img96.png" />
    <p>
      So, definitely not the prettiest thing we’ve seen, but still not too
      terrible. Overall, you should be able to follow that derivation all the
      way through, don’t worry if it takes a couple rereads. You may want to
      play around a little with the limits of this (a = -b, b -> ∞, etc.) and
      see if the field behaves how you would expect it to. Doubt you will
      though.
    </p>
    <p>
      Clearly, Ampere’s Law was a lot easier to set up and solve, but that’s why
      this law is generally used as a backfill for distributions we can’t use
      Ampere’s Law for. In general, Biot-Savart will always work. Whether or not
      you’re capable of doing the math required to solve certain distributions,
      however, is less of a certainty.
    </p>
    <h3 ref="2.5">Unit 2.5: Circular Loops</h3>
    <p>
      Just like we did for Ampere’s Law, we’re going to take Biot-Savart and
      start working with some other distributions. Please follow me on this
      magical journey.
    </p>
    <p>
      Let’s take a circular current loop and fill in our Biot-Savart
      information:
    </p>
    <img src="@/assets/PHYS1C/img97.png" />
    <p>
      Ok, that last step was a bit of a jump so let’s take a look at what
      happened on that right side. Since dL is just a segment of the path, we
      can rewrite that as ds, a segment of the arc of the circle. Also, just
      like in the last example, the magnitude of r is 1 since it’s a unit
      vector. Finally, the angle between ds and r is simply 90º, so the sine
      that comes from the cross-product is just 1, leaving us with a very
      trivial term under the integral. Noting that the integral of ds is just
      the circumference of the circle, we end up with:
    </p>
    <img src="@/assets/PHYS1C/img98.png" />
    <p>
      Nice and easy. Let’s complicate things a little. Instead of looking at a
      point in the plane of the current loop, let’s extend it outwards:
    </p>
    <img src="@/assets/PHYS1C/img99.png" />
    <p>
      Ok, I’ve gotten things mostly figured out with these drawings, slightly
      higher quality from here on.
    </p>
    <p>
      Anyways, we notice a problem with dB. It points off-axis. However, if we
      take a careful look at the problem, we see this behavior:
    </p>
    <img src="@/assets/PHYS1C/img100.png" />
    <p>
      As you move around the current loop, the resultant dB vector traces out a
      circle. As a result, all the transverse components of dB cancel, which
      means:
    </p>
    <img src="@/assets/PHYS1C/img101.png" />
    <p>
      Knowing that we only need to focus on the z-component, we can work through
      Biot-Savart:
    </p>
    <img src="@/assets/PHYS1C/img102.png" />
    <p>
      Nothing super new in that derivation, maybe a little more geometry and
      trig logic, but I’m sure you’re able to figure it out.
    </p>
    <p>
      I’ll leave you with an example you should try. If you can solve it, then
      I’m confident you understand everything we’ve done up to this point. Let’s
      take our last example and modify it so instead of a current loop, we have
      a spinning disk of uniform charge density:
    </p>
    <img src="@/assets/PHYS1C/img103.png" />
    <p>
      Find the magnetic field created at a point along the axis of symmetry. If
      you’re doing it right, you’ll make use of the equation for loops we just
      derived and get:
    </p>
    <img src="@/assets/PHYS1C/img104.png" />
    <p>
      I guess that’s going to be it for this unit. A lot of math, but you’ll get
      used to it. The next unit’s relatively easy and short, but it’s going to
      be really important, so stay focused. You got this.
    </p>
    <h2 ref="3">Unit 3: Inductance</h2>
    <p>
      So we’ve been talking about magnetic fields generated by currents and
      charges and blah blah blah for a while now. Skipping the history lesson,
      we’re going to flip it around and talk about how currents can be generated
      by magnetic fields. That means a lot more conceptual overlap with
      electricity, which I totally learned from 1B. Don’t get too bogged down by
      the math and start ignoring the fundamentals of what you’re learning,
      that’ll just make things worse. Like always, the material here is going to
      be pretty important for your success in some upcoming units, so make sure
      you pay attention.
    </p>
    <p>Buckle up. A lot of terrible drawings inbound.</p>
    <h3 ref="3.1">Unit 3.1: Faraday's Law</h3>
    <p>
      Since we skipped the history, we can dive right into the main equation
      we’ll be dealing with for the beginning of this section:
    </p>
    <img src="@/assets/PHYS1C/img105.png" />
    <p>
      This equation is known as Faraday’s Law, and it tells us that the induced
      electromotive force is proportional to the rate of change of magnetic flux
      through a surface. If you ever see the term “Lenz’s Law” associated with
      this topic, that’s the name given to the negative sign in the above
      equation. Don’t worry about why it’s called that, you probably won’t care
      anyways.
    </p>
    <p>
      Let’s put this into an example right away. Let’s take a wire loop with
      radius a and resistance R, and immerse it in a uniform magnetic field that
      varies with time:
    </p>
    <img src="@/assets/PHYS1C/img106.png" />
    <p>
      Notice that when we define a normal vector for this loop, we implicitly
      define the positive azimuthal direction using right hand rule. So let’s
      begin evaluating Faraday’s Law. Since the normal vector is parallel to the
      magnetic field, the math is trivial and we can write:
    </p>
    <img src="@/assets/PHYS1C/img107.png" />
    <p>
      Without looking too much at the math here, we see that our induced EMF is
      in the positive azimuthal direction. One important distinction to make
      right now is, unlike the EMF that results from potential difference (think
      battery) in Physics 1B, this EMF is non-conservative, and therefore, path
      dependent. Now, plugging what we know into Ohm’s Law, we see:
    </p>
    <img src="@/assets/PHYS1C/img108.png" />
    <p>
      As you can see, current flows in the same direction as the induced EMF,
      and this is true for all problems of this nature. Now, let’s take a look
      at what’s going on here:
    </p>
    <img src="@/assets/PHYS1C/img109.png" />
    <p>
      So the EMF and current are acting in a positive azimuthal direction. So
      what? Well, remember that current generates magnetic fields in a
      right-handed sense. Notice how the magnetic field in the example decreases
      over time. The current’s direction shows that the magnetic field generated
      by the current is fighting the changing magnetic field. Remembering that
      the induced EMF creates this current, and, by extension, the induced
      magnetic field, we can see the effect of Lenz’s Law. Induced EMF will
      generate a current to counteract the changes that create it. This
      current’s magnetic field, in general, will not cancel the magnetic field
      that creates it.
    </p>
    <p>
      Imagine if the magnetic field was increasing instead of decreasing. If
      Lenz’s Law didn’t exist, then the induced EMF would create a current that
      would increase the magnetic field that would induce an EMF that would
      increase the magnetic field that would – you get the point. Lenz’s Law
      must exist.
    </p>
    <p>
      Let’s take a look at a more qualitative example to make sure we understand
      the fundamentals of what’s going on. Take an area of uniform magnetic
      field with a wire loop moving through it:
    </p>
    <img src="@/assets/PHYS1C/img110.png" />
    <p>
      Pretend like that square is filled in with vectors. It wouldn’t be
      readable if I drew it like that. Now, your job is to figure out how the
      current behaves at each of the 5 positions above. Try to do this on your
      own before moving on.
    </p>
    <p>Adding in the current, we have:</p>
    <img src="@/assets/PHYS1C/img111.png" />
    <p>
      Looking at the positions where there is no induced current, you can see
      that there is no change in flux over time. I emphasize change because
      there is a flux at position 3, but the field is uniform so it isn’t
      changing, therefore there is no induced EMF/current. As the loop enters
      the field, the magnetic field is increasing, so a current is induced to
      create a magnetic field in the opposite direction. As it exits, the
      magnetic flux decreases, so a current is induced to create a magnetic flux
      in the same direction.
    </p>
    <p>
      Make sure this example makes sense to you before continuing. If you
      understand it, you fundamentally understand Faraday’s Law and Lenz’s Law.
    </p>
    <h3 ref="3.2">Unit 3.2: Rigid Bodies</h3>
    <p>
      This next example is strange. Let’s take a solid copper rod and have it
      move through a uniform magnetic field:
    </p>
    <img src="@/assets/PHYS1C/img112.png" />
    <p>
      We want to find the induced current inside this rod. The strange part
      comes in identifying the surface that we’re analyzing the flux through.
      Notice that as the rod moves, it sweeps out an area behind it:
    </p>
    <img src="@/assets/PHYS1C/img113.png" />
    <p>
      You can probably tell where we’re going here. Let’s fill in Faraday’s Law:
    </p>
    <img src="@/assets/PHYS1C/img114.png" />
    <p>
      Kinda weird, but trust me, that’s how it works. Anyways, what effects does
      this have on the rod? Well let’s look at the direction the current is
      induced in. By using ΦB = BA, we implicitly defined the normal vector to
      be pointing the same direction as B. If you imagine the loop is the box
      traced out, we can identify the direction of current through the rod,
      resulting in:
    </p>
    <img src="@/assets/PHYS1C/img115.png" />
    <p>
      The current points down the rod, pushing positive charges to the bottom
      and leaving an excess of negative charges at the top. Now, let’s prove
      that our conclusion from this imaginary box method is actually correct.
      We’re going to take the same problem and look at it a different way:
    </p>
    <img src="@/assets/PHYS1C/img116.png" />
    <p>
      Let’s say our rod is made up of positive charge carriers moving at
      velocity v. If we use the first formula we learned, we can find the
      direction of FB:
    </p>
    <img src="@/assets/PHYS1C/img117.png" />
    <p>
      This tells us the positive charges experience a magnetic force downward,
      leading to a pile-up of positive charge at the bottom of the rod, and
      negative charge at the top. Sounds like we’re on the right track. Now,
      remembering back to our discussion on Hall Effect, this will lead to:
    </p>
    <img src="@/assets/PHYS1C/img118.png" />
    <p>
      So an electric force is opposing the magnetic force on each charge
      carrier. Now, remember that the rod only has a velocity in the
      x-direction, so the rod must be in equilibrium, resulting in:
    </p>
    <img src="@/assets/PHYS1C/img119.png" />
    <p>
      Bam, absolutely magical. This proves to us that Faraday’s Law doesn’t
      require a loop, surface, etc., it requires a rate of change of flux. One
      thing worth noting is that the B we used in both derivations was
      perpendicular to the direction of motion. Due to the methods used in these
      derivations, this perpendicular component is the only component that
      contributes to the induced EMF.
    </p>
    <h3 ref="3.3">Unit 3.3: Generators</h3>
    <p>
      Now that we have an idea of how Faraday’s Law works, let’s take a closer
      look at its consequences. Expanding Faraday’s Law, we get:
    </p>
    <img src="@/assets/PHYS1C/img120.png" />
    <p>
      From here, we can distribute the derivative throughout the integral (I
      wouldn’t worry much about the math here):
    </p>
    <img src="@/assets/PHYS1C/img121.png" />
    <p>
      From this equation, we can tell there are 3 ways to generate an EMF:
      varying the magnetic field, varying the area, and varying the orientation.
      We’ve dealt with a varying magnetic field and varying area in the previous
      2 sections, so let’s look at an example of the third option.
    </p>
    <p>Let’s take a conducting loop connected to a crank:</p>
    <img src="@/assets/PHYS1C/img122.png" />
    <p>If we fill in Faraday’s Law, we get:</p>
    <img src="@/assets/PHYS1C/img123.png" />
    <p>
      The most important thing to notice here is the sine term. This tells us an
      important fact: when you generate an EMF using mechanical methods, it will
      (pretty much) always be an alternating EMF, which results in an
      alternating current. That’ll be the focus of our next section, but we’ve
      still got a bit more to do here. Now that we have this expression, let’s
      find out how much power we’re delivering to a load resistor R:
    </p>
    <img src="@/assets/PHYS1C/img124.png" />
    <p>
      Cool cool cool. Nothing too complex here, the most important thing to
      understand is the concept.
    </p>
    <h3 ref="3.4">Unit 3.4: Faraday's Law II</h3>
    <p>
      From here, let’s take a look at a consequence of something we mentioned
      earlier. Remember that the EMF we’ve been looking at in this section is
      non-conservative. We can write an equation for work done by an electric
      field as follows:
    </p>
    <img src="@/assets/PHYS1C/img125.png" />
    <p>
      Where WC represents work done by conservative EMF and WNC represents work
      done by non-conservative EMF. Breaking this down, we have:
    </p>
    <img src="@/assets/PHYS1C/img126.png" />
    <p>
      Ok, that’s not super helpful, but we can take advantage of the nature of
      conservative EMF. Knowing that conservative EMF is path independent, we
      can integrate over a closed loop, cancelling out the conservative term to
      get:
    </p>
    <img src="@/assets/PHYS1C/img127.png" />
    <p>
      That right there is the second form of Faraday’s Law. It tells us that
      changing magnetic flux creates a non-conservative electric field. And of
      course, this wouldn’t be complete without an example, so let’s take a long
      solenoid of radius a, carrying a current that varies with time:
    </p>
    <img src="@/assets/PHYS1C/img128.png" />
    <p>
      Remember that we derived the formula for a magnetic field in a solenoid in
      the previous section. Keep it in mind because we’ll be seeing it a lot
      coming up. Knowing we need to make a closed loop to evaluate Faraday’s Law
      here, let’s take a look at the cross-section of this solenoid:
    </p>
    <img src="@/assets/PHYS1C/img129.png" />
    <p>
      I didn’t draw in the magnetic field vectors for readability, but pretend I
      did. So now we have a closed loop for our Faraday loop, but what about the
      electric field? Well, for symmetry reasons (that’s the best explanation I
      got), we can draw:
    </p>
    <img src="@/assets/PHYS1C/img130.png" />
    <p>
      Whatever the actual reason for that, it makes our integral fairly easy to
      evaluate:
    </p>
    <img src="@/assets/PHYS1C/img131.png" />
    <p>And filling in the vector component, we have:</p>
    <img src="@/assets/PHYS1C/img132.png" />
    <p>
      What about outside the solenoid? Well we know from our introduction to
      solenoids in the last section that all the magnetic field is located
      within the solenoid. However, this version of Faraday’s Law simply relates
      electric field to the magnetic flux within the loop, so there’s nothing
      stopping us from saying there’s an electric field outside the solenoid.
      Take a stab at deriving that one yourself. You’ll get:
    </p>
    <img src="@/assets/PHYS1C/img133.png" />
    <p>
      A big takeaway from this is that we’re starting to see the overlap of
      electricity and magnetism here. These solenoids contain magnetic fields,
      and the changing of those magnetic fields generate electric fields. Later,
      we’ll see there’s a certain symmetry to that behavior, but for now, we’ll
      stay rooted in magnetism.
    </p>
    <h3 ref="3.5">Unit 3.5: Inductors</h3>
    <p>
      Look at that, we’ve finally reached the topic this unit was named after.
    </p>
    <p>
      Inductors are to magnetism as capacitors are to electricity. They are also
      the reason we’ve had to introduce solenoids, as solenoids are the
      prototypical inductor, and the only ones we’ll really be working with.
      Let’s start by getting some visuals in here:
    </p>
    <img src="@/assets/PHYS1C/img134.png" />
    <p>
      Let’s also write down what we know about solenoids from past discussion:
    </p>
    <img src="@/assets/PHYS1C/img135.png" />
    <p>
      That last statement is simply the first version of Faraday’s Law applied
      to the solenoid for a single loop. If we want the EMF for the entire
      solenoid, we write:
    </p>
    <img src="@/assets/PHYS1C/img136.png" />
    <p>
      Now is a better time than any to define inductance (measured in H or
      Henrys):
    </p>
    <img src="@/assets/PHYS1C/img137.png" />
    <p>And from there, we can find the inductance of a solenoid:</p>
    <img src="@/assets/PHYS1C/img138.png" />
    <p>
      That’s the framework laid out in record time. Not gonna lie, this topic is
      mainly setup for the next unit, so we’re not going to take a super deep
      dive, we’ll just introduce the ideas we’re going to need.
    </p>
    <p>
      Knowing that, you might be able to guess we’re going to be looking at
      inductors in the context of circuits, so it might be helpful to relate it
      to Kirckhoff’s rules. Based on our definition of inductance, we can get:
    </p>
    <img src="@/assets/PHYS1C/img139.png" />
    <p>
      The sign here depends on the direction you’re going in, and follows the
      same conventions as a resistor (negative if with current, positive if
      against).
    </p>
    <p>
      There’s one last, semi-random, thing to introduce. The inductance we
      defined is a property of a single coil. However, if we analyze the
      inductance of multiple coils, we call it “mutual inductance”. Although
      this could probably benefit from a diagram/example, it’s a minor topic and
      my head hurts, so you’re getting left with the formula:
    </p>
    <img src="@/assets/PHYS1C/img140.png" />
    <p>
      Notice that the mutual inductance is symmetric, so you don’t need to worry
      about which inductor is 1 or 2. It’s defined as the EMF generated on one
      inductor divided by the rate of change of current passing through the
      other. Fun fun.
    </p>
    <p>
      A consequence of this is, yet another thing I will choose to not derive
      for you, the transformer equation:
    </p>
    <img src="@/assets/PHYS1C/img141.png" />
    <p>By energy conservation, we know that:</p>
    <img src="@/assets/PHYS1C/img142.png" />
    <p>
      Well, I said this section would be short, and it took ~1 hour less to
      write than the last 2, so I guess I was kind of right. The next one’s
      gonna be long. And confusing. And painful.
    </p>
    <h2 ref="4">Unit 4: RLC Circuits</h2>
    <p>
      Have you ever thought to yourself, “Man, I really hate how little time we
      spent on analyzing circuits in Physics 1B”? Well worry no more. There’s a
      whole lotta that ahead. And it’s so much more complicated this time
      around. This unit is actually unbelievably long with how much new stuff
      we’re introducing. I’d say this stuff is arguably the hardest part of the
      class, just because of how much you have to keep in mind while solving
      some of these problems. There’s also a lot of textbook stuff that wasn’t
      really touched on in class, but could still be helpful to learn. I put the
      parts that I thought were helpful here, but you’re a strong independent
      student, you know what’s best for you.
    </p>
    <h3 ref="4.1">Unit 4.1: Averages</h3>
    <p>
      Ok, if you’re excited about diving right into circuits, you’re going to
      have to wait just a little longer. Some of the discussion ahead is going
      to require a few building blocks rooted in calculus to fully understand.
      If you’re proficient in average values of trig functions, feel free to
      jump to the next section. Otherwise, I’m sorry, you’re gonna have to read
      just that much more of my awful prose.
    </p>
    <p>
      Let’s start off with the definition of an average that we learned in
      calculus. If we have the integral of a function over some interval, we can
      theoretically replace that function with a constant that would produce the
      same value. This is written as:
    </p>
    <img src="@/assets/PHYS1C/img143.png" />
    <p>Or perhaps you’re more familiar with the form:</p>
    <img src="@/assets/PHYS1C/img144.png" />
    <p>
      Being honest, you don’t even need that knowledge, but who knows, maybe
      it’s helpful. Maybe you’re just ecstatic to absorb all the information I
      have for you. This is a judgement-free writeup.
    </p>
    <p>
      The knowledge you do need, however, is more or less memorization of a few
      trig functions’ averages:
    </p>
    <img src="@/assets/PHYS1C/img145.png" />
    <p>
      Some of these can come from pretty simple analyses, others may require a
      little more thinking. All we care about is that we know them and we can
      use them moving forward.
    </p>
    <h3 ref="4.2">Unit 4.2: Root-Mean-Square Values</h3>
    <p>
      In case you had the knowledge to skip that last section, we’re going to
      have another easy concept to ease you into this stuff. Let’s take a
      mathematical model for alternating current:
    </p>
    <img src="@/assets/PHYS1C/img146.png" />
    <p>
      You better get comfortable working with this, we’ll be seeing it a lot
      coming up. Now, let’s say we wanted to find the average current:
    </p>
    <img src="@/assets/PHYS1C/img147.png" />
    <p>
      Well, that’s amazingly unhelpful and uninteresting. Instead, how about we
      find another model to talk about averages in. This is where
      root-mean-square values, or RMS values, come in:
    </p>
    <img src="@/assets/PHYS1C/img148.png" />
    <p>
      Alright that looks a little more helpful. We’ll be using that model a lot
      when talking about circuits, so keep it in mind.
    </p>
    <p>
      Ok, I’ve been dreading this since starting this writeup because I have no
      idea how I’m going to draw circuits with Google Drawings. Here’s hoping it
      all works out. Let’s take a simple circuit with an alternating current
      running into a resistor:
    </p>
    <img src="@/assets/PHYS1C/img149.png" />
    <p>
      Now that’s a thing of beauty. Thank god for random web apps online. Now,
      let’s take a look at the power through this circuit:
    </p>
    <img src="@/assets/PHYS1C/img150.png" />
    <p>
      So this tells you the amount of power being dissipated by the resistor at
      any given moment. Well, after a few seconds of really not caring about
      that, you’ll probably guess we’re more interested in looking at the
      average power:
    </p>
    <img src="@/assets/PHYS1C/img151.png" />
    <p>
      Cool cool. We’ll have to modify that later, because nothing in this class
      can be that easy. Speaking of, that’s all the easy stuff out of the way.
      Get ready to start looking at some immense equations.
    </p>
    <h3 ref="4.3">Unit 4.3: DC Circuits</h3>
    <p>
      In general, most of this class’ discussion on circuits will be on
      alternating current. However, there are a few DC components that may prove
      useful to you, so I’m going to spend a second deriving them out for you
      here.
    </p>
    <p>
      Our focus in this topic is going to be on modeling current growth in a DC
      circuit. The setup we’ll be looking at is the R-L circuit, a circuit with
      a resistor and inductor. Assuming we have a basic series circuit with an
      open switch that is closed at t = 0, we can use Kirckhoff’s Loop Rule to
      write:
    </p>
    <img src="@/assets/PHYS1C/img152.png" />
    <p>
      From here, we can treat this as a differential equation and rearrange:
    </p>
    <img src="@/assets/PHYS1C/img153.png" />
    <p>
      From here, we can discover a little bit about the behavior of this
      circuit. A basic property of inductors is that they slow current growth in
      the circuit. In simple circuits from Physics 1B, you may recall that we
      treated the current as either on or off. That won’t be the case here. At
      the instant the switch is closed, I = 0, so the rate of change of current
      is at its maximum. As the rate of change decreases, it’ll eventually reach
      0, and we end up with our classic Ohm’s Law statement. So far so good.
      Finishing off our differential equation, we have:
    </p>
    <img src="@/assets/PHYS1C/img154.png" />
    <p>
      This final equation models the growth of current in an R-L circuit. Due to
      the effect of the exponent on the behavior of this current growth, it’s
      given a special name – the time constant:
    </p>
    <img src="@/assets/PHYS1C/img155.png" />
    <p>
      The big takeaway here is gaining the ability to use Loop Rule to break
      down a circuit and analyze its behavior. This may mean either physically
      or mathematically. These problems may also include varying combinations of
      the 3 circuit components we’ve discussed. Ok, with that out of the way,
      now it’s on to the fun stuff.
    </p>
    <h3 ref="4.4">Unit 4.4: Mechanical Analysis</h3>
    <p>
      As we said, the majority of this class’ time with circuits is spent with
      alternating current. What alternating current entails, at least in the
      scope of this class, is that the voltage source doesn’t provide a constant
      amount of voltage to the circuit. Instead, the voltage it provides varies
      sinusoidally, causing the current in the circuit to follow a similar
      pattern.
    </p>
    <p>
      There really is no more explanation I can give, so let’s get stuck in and
      picture our first RLC circuit:
    </p>
    <img src="@/assets/PHYS1C/img156.png" />
    <p>
      Sorry for the weird coloring issues, bad things happen when you don’t plan
      ahead. Don’t judge me.
    </p>
    <p>
      The first thing we can note is that the current is flowing clockwise,
      which means there are positive charges piling up on the top capacitor
      plate, allowing us to say:
    </p>
    <img src="@/assets/PHYS1C/img157.png" />
    <p>
      Now, combining what we’ve learned from 1B and inductance into Loop Rule,
      we get:
    </p>
    <img src="@/assets/PHYS1C/img158.png" />
    <p>
      We can use the equation for current from above and divide each term by L
      to rewrite the differential equation:
    </p>
    <img src="@/assets/PHYS1C/img159.png" />
    <p>
      You may be able to recognize this equation from 1B as the equation for
      damped oscillations:
    </p>
    <img src="@/assets/PHYS1C/img160.png" />
    <p>
      There’s a whole lot of relationships we can write from this, relating
      these 2 equations together:
    </p>
    <img src="@/assets/PHYS1C/img161.png" />
    <p>
      Let’s try to understand these quantities physically. Resistance being
      similar to damping makes sense considering both quantities represent an
      extraction of energy from the system. Inductance being similar to
      mass/inertia makes sense because both oppose change in the
      charge/position. The capacitance being similar to the inverse of the
      spring constant essentially tells us that pushing charge onto a plate is
      like compressing a spring. And finally, the EMF being similar to force
      makes sense because both push the charge/particle along the given path.
      Whole lotta relationships there, unlike in my love life.
    </p>
    <p>
      Now, let’s take these relations and translate them into some familiar
      equations. Starting with the equation for spring potential energy:
    </p>
    <img src="@/assets/PHYS1C/img162.png" />
    <p>
      We actually manage to re-derive the equation for energy stored in a
      capacitor. No new information, but our relations are being confirmed.
      Let’s try kinetic energy now:
    </p>
    <img src="@/assets/PHYS1C/img163.png" />
    <p>
      Ok, new equation alert. Let’s see if we can find a way to prove that we’re
      still on the right track. Using energy relationships, we have:
    </p>
    <img src="@/assets/PHYS1C/img164.png" />
    <p>
      Voila. We’ve confirmed it. Differentiating between K and U isn’t
      important, they both represent energy stored in the inductor. We’re
      amazing aren’t we? Anyways, we can now take this equation and modify it:
    </p>
    <img src="@/assets/PHYS1C/img165.png" />
    <p>
      A whole lot of substitutions and stuff, but we arrive at energy density.
      This equation tells us that just having a magnetic field implies you have
      energy stored. If you have an insane memory, you’ll also see the symmetry
      with the electric energy density:
    </p>
    <img src="@/assets/PHYS1C/img166.png" />
    <p>
      Although this isn’t a major topic, it does provide a useful tool for
      relating energy with inductance if the need arises. Just remember that:
    </p>
    <img src="@/assets/PHYS1C/img167.png" />
    <p>
      Ok, as much as we’ve been trying to avoid it, we do need to go back to the
      circuit. We left off with the callback to damped oscillations. Recall that
      the steady-state solution for that differential equation was the ugliest
      equation ever:
    </p>
    <img src="@/assets/PHYS1C/img168.png" />
    <p>
      In the words of Corbin, “Of course you remember that from 1B”. Well I
      didn’t, so here we are staring at that monstrosity on this page. All
      because I didn’t remember that simple formula from 1B. Well don’t worry,
      if you haven’t guessed yet, we’re using our relations to write the circuit
      version of this. 5 lines of tedious LaTeX later, we have:
    </p>
    <img src="@/assets/PHYS1C/img169.png" />
    <p>
      Due to the nature of series circuits, we know that current is a very
      important quantity to know. Meanwhile charge is relatively useless. That’s
      right, time derivative coming up. Obviously the derivative itself is
      trivial, but writing that all again isn’t. I’m going to take the
      opportunity to rearrange some of these variables for later purposes:
    </p>
    <img src="@/assets/PHYS1C/img170.png" />
    <p>
      You’ve probably noticed the 1/ωC and ωL terms showing up again and again.
      We’ll address those in a second. Since our voltage varies as a cosine
      function, it’d probably be helpful to write the current in terms of cosine
      as well. Sigh:
    </p>
    <img src="@/assets/PHYS1C/img171.png" />
    <p>
      A lot of weird moving parts, but don’t worry too much about the trig
      shenanigans. We just want these equations in a convenient form for our
      upcoming section.
    </p>
    <p>
      One very, very, very important thing to note is the phase shift of φ. This
      tells us that in the circuit, our current lags our voltage. What does that
      mean? Well, the voltage will reach its maximum at some point throughout
      the circuit. Afterwards, the current will reach its maximum as the voltage
      decreases. Definitely a shift from DC circuits, and a characteristic that
      we’ll go into much detail on later.
    </p>
    <h3 ref="4.5">Unit 4.5: Impendance</h3>
    <p>
      So, let’s take what we have so far and look at the maximum value of I:
    </p>
    <img src="@/assets/PHYS1C/img172.png" />
    <p>And let’s compare that equation to our basic definition of Ohm’s Law:</p>
    <img src="@/assets/PHYS1C/img173.png" />
    <p>
      We notice the similarities in the denominator. Our new equation has
      something resistance-like, but with capacitor and inductor-related
      components. We characterize this as impedance – the opposition to the flow
      of alternating current – and define it as follows for a series circuit:
    </p>
    <img src="@/assets/PHYS1C/img174.png" />
    <p>From here, we can also rewrite Ohm’s Law for AC circuits as:</p>
    <img src="@/assets/PHYS1C/img175.png" />
    <p>
      So now we have the equations that are going to make up the heart and soul
      of this section, as ugly as they are. Setting up a little bit for the
      future, we can add some more related definitions:
    </p>
    <img src="@/assets/PHYS1C/img176.png" />
    <p>
      These are known as reactances, and we’ll be working with them later in the
      section. For now, just notice that we can find them in the impedance
      formula.
    </p>
    <h3 ref="4.6">Unit 4.6: Component Analysis</h3>
    <p>
      This next topic is kinda like a branch between the purely mathematical
      analysis we’ve done so far, and the “that-makes-no-sense” theoretical
      analysis we’re about to get ourselves into.
    </p>
    <p>
      What we’re gonna do here is analyze each component of our circuit
      individually. Starting with the resistors, we see:
    </p>
    <img src="@/assets/PHYS1C/img177.png" />
    <p>Here, we can guarantee path independence:</p>
    <img src="@/assets/PHYS1C/img178.png" />
    <p>And therefore, looking at both sides of the circuit, we can write:</p>
    <img src="@/assets/PHYS1C/img179.png" />
    <p>
      There are 2 big takeaways here. Firstly, the amplitude of Imax fits into
      Ohm’s Law. Secondly, we see that the current across the resistor is in
      phase with the voltage, as there is no phase shift from the ωt.
    </p>
    <p>Moving along, we’ll look at the capacitor next:</p>
    <img src="@/assets/PHYS1C/img180.png" />
    <p>Once again taking advantage of path independence, we can write:</p>
    <img src="@/assets/PHYS1C/img181.png" />
    <p>
      In line with our observations on the resistor, we see that the current
      amplitude is given by something similar to Ohm’s Law, but with χC instead
      of R. We also see that the current through the capacitor leads the voltage
      by 90º.
    </p>
    <p>Let’s quickly finish up with, you guessed it, the inductor:</p>
    <img src="@/assets/PHYS1C/img182.png" />
    <p>You know the drill by now:</p>
    <img src="@/assets/PHYS1C/img183.png" />
    <p>
      Notice the Ohm’s Law-esque relation again, as well as the fact that the
      current through the inductor lags the voltage by 90º.
    </p>
    <p>
      I will say now that these phases are very important, especially for what
      we’re moving into. To help you remember these without having to derive it
      each time, the common mnemonic is ELI ICE. ELI says that voltage (E) comes
      before current (I) in an inductor (L). ICE says that current comes before
      voltage in a capacitor (C). So read from left to write to figure out the
      order of the current/voltage situation, and the letter in the middle is
      the device. And then, of course, current through resistors is just in
      phase with voltage.
    </p>
    <p>
      Taking these equations for current that we’ve just derived, we can attempt
      to find the average power dissipated by each component. If done correctly,
      you’ll see that the resistor is the only component that dissipates power
      on average. Capacitors and inductors essentially store energy, only to put
      them back into the circuit, resulting in them being conservative devices.
    </p>
    <p>
      With that done, we just need to patch up one more piece of foundation
      before we move on with the circuit analysis.
    </p>
    <h3 ref="4.7">Unit 4.7: Phasors</h3>
    <p>
      Depending on the math classes you’ve taken up to this point, you may or
      may not have run into Euler’s Equation:
    </p>
    <img src="@/assets/PHYS1C/img184.png" />
    <p>
      If we were to attempt to graph this equation on a real-imaginary plane, we
      would get:
    </p>
    <img src="@/assets/PHYS1C/img185.png" />
    <p>
      Although this resembles a unit vector, that’s not quite what it is. Having
      an imaginary component means this cannot be a vector. As a result, we just
      rebrand e^iθ as a unit phasor. Assuming we have some phasor z, we can
      write:
    </p>
    <img src="@/assets/PHYS1C/img186.png" />
    <p>As a way to rewrite any phasor in terms of the unit phasor.</p>
    <p>Another tool that may help is the conjugate of the phasor z:</p>
    <img src="@/assets/PHYS1C/img187.png" />
    <p>
      And from here, we can use the properties of the complex conjugate to say
      that:
    </p>
    <img src="@/assets/PHYS1C/img188.png" />
    <p>Finally, we can introduce the theorem that states that:</p>
    <img src="@/assets/PHYS1C/img189.png" />
    <p>
      What this does for us, is it tells us that we can rewrite cosine as the
      real part of e^iθ, complete our calculations using complex exponentials,
      and then project our result back into the real plane to get an answer.
      What does that mean? Absolutely nothing to you probably.
    </p>
    <p>
      This set of tools will be used in following derivations, but you do not
      need to understand how they’re being used to succeed with this material.
      Don’t stress about all this if you don’t want to.
    </p>
    <p>
      With this under our belt, we can move into the last part of our circuit
      analysis.
    </p>
    <h3 ref="4.8">Unit 4.8: Complex Analysis</h3>
    <p>Let’s take ourselves back to our series RLC circuit:</p>
    <img src="@/assets/PHYS1C/img190.png" />
    <p>
      Since the current is the same throughout the circuit, we’ll use the
      current for the baseline of our phase:
    </p>
    <img src="@/assets/PHYS1C/img191.png" />
    <p>Using ELI ICE, we can then write:</p>
    <img src="@/assets/PHYS1C/img192.png" />
    <p>
      Now, just for fun, we can write all of these equations in terms of complex
      exponentials:
    </p>
    <img src="@/assets/PHYS1C/img193.png" />
    <p>
      I bet you’re excited now. We can take these equations and plot them in the
      complex plane:
    </p>
    <img src="@/assets/PHYS1C/img194.png" />
    <p>
      Essentially, these phasors will all rotate with each other around the
      plane. If you were to project them down onto the real plane, you would see
      a sinusoidally varying function, as we’d expect from our real equations.
      Now, let’s make this a little more useful by aligning our axis with Imax:
    </p>
    <img src="@/assets/PHYS1C/img195.png" />
    <p>
      And finally, if we move some phasors around so we can actually see them,
      we can see:
    </p>
    <img src="@/assets/PHYS1C/img196.png" />
    <p>
      Now, taking advantage of path independence, we know that the voltage
      dissipated by these components must be equal to the voltage of the source,
      so we can add these phasors to get:
    </p>
    <img src="@/assets/PHYS1C/img197.png" />
    <p>
      There we go. Using complex exponentials, we now have a way to get the
      voltage of the source, as well as the angle between the voltage and
      current without having to go through the math we did in the mechanical
      analysis.
    </p>
    <p>
      One thing I want to note about the diagram is the difference between the
      inductor component and the capacitor component. That difference decides
      what angle the voltage will make with the current. Depending on which
      component is larger in magnitude, the voltage may lead or lag the current
      (change the lengths of the vertical phasors to see what I mean). The
      overall voltage will correspond to the stronger component when looking at
      the circuit in terms of ELI ICE (if the inductor is stronger, voltage will
      lead current, etc.).
    </p>
    <p>
      If we wanted to simplify things a little, we can make use of the fact that
      each of those phasors has an Imax component due to Ohm’s Law. Rescaling by
      a factor of 1/Imax:
    </p>
    <img src="@/assets/PHYS1C/img198.png" />
    <p>And now, we can use basic trig to get:</p>
    <img src="@/assets/PHYS1C/img199.png" />
    <p>
      Just like that, we got the same solutions as we did from the mechanical
      analysis, without the ugly differential equations. So while complex
      exponentials seem like Satan, they really do make our lives easier here.
      You don’t necessarily have to understand why this works, but you can at
      least appreciate that it did.
    </p>
    <h3 ref="4.9">Unit 4.9: Power Factor</h3>
    <p>
      Ok all the hard stuff in the section is out of the way, now it’s just time
      to fill in a few more gaps before moving on. So let’s take an equation we
      all know and love:
    </p>
    <img src="@/assets/PHYS1C/img200.png" />
    <p>
      And let’s say we want to find the average power. Using I as our reference
      again, we have:
    </p>
    <img src="@/assets/PHYS1C/img201.png" />
    <p>
      With the equation written like this, we can’t actually take the average
      power since the average of the cosines will change based on the phase
      shift. Using trig identities, however, we can rewrite the equation:
    </p>
    <img src="@/assets/PHYS1C/img202.png" />
    <p>
      And now, with a little more manipulation of the equation, we can say that:
    </p>
    <img src="@/assets/PHYS1C/img203.png" />
    <p>
      The cosine term there is called the power factor. Now, why is it there?
      Well let’s take this equation a little further:
    </p>
    <img src="@/assets/PHYS1C/img204.png" />
    <p>
      And now, thinking back to our impedance phasor diagram, we can simplify
      this down to:
    </p>
    <img src="@/assets/PHYS1C/img205.png" />
    <p>
      And there we go, we’ve re-established a statement we made earlier. Power
      is only dissipated by the resistor. That’s why we need the power factor,
      to isolate the resistance from the impedance. You can actually visually
      see this by looking at the phasor diagram.
    </p>
    <p>
      This power factor also tells us that we get our maximum power when the
      voltage and current are in phase. Translated to the phasor diagram, this
      means maximum power transmission occurs when the load is purely resistive.
      Whether or not this means there is only a resistor or the reactances
      cancel each other out is irrelevant.
    </p>
    <p>
      Well that’s that, short section, but pretty important stuff. The same can
      be said about the next section, so keep focused just a little longer.
    </p>
    <h3 ref="4.10">Unit 4.10: Resonance</h3>
    <p>
      So considering we did our original circuit analysis based on the physics
      of damped oscillation, it shouldn’t be too surprising that we’re going to
      have to look at resonance here as well.
    </p>
    <p>
      In this context, resonance is referring to delivering the maximum amount
      of current to the load. In other words, we’re transmitting the maximum
      amount of power to the load. Well, considering the topic we just went
      through, you can probably already guess what that’s going to mean, but
      let’s prove it anyways. We know that the current in RLC circuits is:
    </p>
    <img src="@/assets/PHYS1C/img206.png" />
    <p>
      Well, if we want to maximize the current, then surely we just want the
      denominator to be at a minimum. Since R is just going to be arbitrary, we
      can say that I is maximized when:
    </p>
    <img src="@/assets/PHYS1C/img207.png" />
    <p>
      Or, in other words, the reactances cancel, and the load is purely
      resistive. Hm, sounds familiar.
    </p>
    <p>
      Since reactances aren’t a physical property of the circuit, it’s more
      helpful to write this as:
    </p>
    <img src="@/assets/PHYS1C/img208.png" />
    <p>
      A pretty interesting thing to note, is that it’s actually possible for the
      voltage through the inductor or capacitor to be larger than the voltage
      through the circuit. Imagine if the reactances were equal, but much larger
      than the resistance. They would cancel each other out, but the voltage
      through each individual component is still determined by that component’s
      version of Ohm’s Law. Not super major, but I felt like I should mention it
      in case you run into a problem with it in the future. Don’t panic if you
      do.
    </p>
    <h3 ref="4.11">Unit 4.11: Parallel AC Circuits</h3>
    <p>
      Now, obviously, parallel circuits can be a very large topic like they were
      in 1B. However, I’m not going to go super in-depth here, I’m just going to
      provide you with the tools that you need to begin solving these. Since
      most of the new complexities for circuits came with the introduction of
      phases and new components, there really isn’t that much material here that
      we haven’t already covered earlier in the unit.
    </p>
    <p>
      The biggest change here is that current is no longer the point of
      reference. Since this is a parallel circuit, voltage is constant across
      each parallel component. As a result, we would end up modifying our phasor
      diagram to look like:
    </p>
    <img src="@/assets/PHYS1C/img209.png" />
    <p>
      Just like before, we can rescale this plot, but I’m going to leave that to
      you this time. Once you do rescale it, you can find your solutions using
      trig:
    </p>
    <img src="@/assets/PHYS1C/img210.png" />
    <p>
      So as we see here, just like how we analyzed inverse resistances in
      parallel circuits in 1B, we’re looking at inverse impedances here.
    </p>
    <p>
      So now, we’re going to cap things off with an example that’ll cover most
      of the major stuff we went through here. Take this circuit:
    </p>
    <img src="@/assets/PHYS1C/img211.png" />
    <p>
      As we can see, we have both series and parallel components. Let’s jump
      right into analyzing the phasors of the parallel section:
    </p>
    <img src="@/assets/PHYS1C/img212.png" />
    <p>
      A very important thing to note here is that if you were to scale this
      diagram by the voltage, you would see that the current lags the voltage
      through the parallel section. Keep this in mind as we move forward.
      Reading equations off this diagram, we can see that:
    </p>
    <img src="@/assets/PHYS1C/img213.png" />
    <p>With all of that, we can effectively redraw our circuit as:</p>
    <img src="@/assets/PHYS1C/img214.png" />
    <p>
      So now, all we’ve got is a series circuit. Now for the series phasors:
    </p>
    <img src="@/assets/PHYS1C/img215.png" />
    <p>
      Pay attention to the fact that, as we noted before, the voltage leads the
      current in the parallel section. You may also want to make note of how we
      really can’t say what the voltage through the capacitor looks like without
      more information, so the magnitude of that phasor is really just
      arbitrary. At this point, all that’s left to do is to solve for z and
      voltage and get:
    </p>
    <img src="@/assets/PHYS1C/img216.png" />
    <p>
      Now of course, this isn’t technically simplified, but you get the picture.
      I did also skip some steps before those answers, so see if you can get to
      those yourself.
    </p>
    <p>
      Well there we are. An insanely long section done. I haven’t quite gotten
      there yet, but I’m pretty sure this won’t be the longest one. Take some
      time to absorb all that, I promise it becomes more clear with some
      practice problems. I wish I could say we’re going to slow down a little
      after this, but I can’t. The next section is gonna be another long one,
      and, in my opinion, a more difficult one. Y A Y.
    </p>
    <h2 ref="5">Unit 5: Electromagnetic Waves</h2>
    <p>
      Alright, so, as promised, another long unit coming up. This time, we have
      a lot of setup to do before we can get into the main focus of this unit,
      so bear with me here. If your professor jumps straight into discussion on
      waves, well, you can skip the first 3 sections I guess. Otherwise, you can
      prepare yourself for a lot of derivations that you very likely won’t use
      ever again. Even once you get past that, it’s not like the material is
      easy or anything. If you do need a light on the other side of the tunnel
      to keep you chugging along, I will say that this is the last unit you’re
      going to need calculus for, so we can hallelujah to that one.
    </p>
    <h3 ref="5.1">Unit 5.1: Ampere's Law II</h3>
    <p>
      Now, I mentioned earlier that we’d be returning to Ampere’s Law. As a
      reminder, we derived Ampere’s Law as:
    </p>
    <img src="@/assets/PHYS1C/img217.png" />
    <p>
      When we did that derivation, we interpreted this as taking the path
      integral around a closed loop to give us the current enclosed by that
      loop. If we distance ourselves from the physics perspective of this and
      look at it from a mathematical perspective, we can rephrase that as the
      path integral around the boundary of a surface gives us the current that
      pierces that surface. By that definition, we can use more complex
      structures to model Ampere’s Law as well, and that’s exactly what Thomas
      Maxwell did.
    </p>
    <p>
      Let’s try to see what we can get to with this new definition. Let’s take a
      stretch of wire separated by a capacitor:
    </p>
    <img src="@/assets/PHYS1C/img218.png" />
    <p>So, applying Ampere’s Law as we know it, we can write:</p>
    <img src="@/assets/PHYS1C/img219.png" />
    <p>
      Nothing should be new to you there. Unit 2 stuff. However, what if we
      messed around with our loop, replacing it with a surface that looked like:
    </p>
    <img src="@/assets/PHYS1C/img220.png" />
    <p>
      Keep in mind, this is a surface, not a cylinder. The dotted face is open.
      Now, interpreting this mathematically:
    </p>
    <img src="@/assets/PHYS1C/img221.png" />
    <p>
      So, there’s clearly something wrong. We must be missing something. Both of
      these approaches are mathematically sound, but provide different results.
      Well, knowing that the original approach did provide correct results,
      Maxwell also knew that it’s his new approach that needed to be analyzed
      further. No current pierces our blue surface, but electric field does:
    </p>
    <img src="@/assets/PHYS1C/img222.png" />
    <p>
      After some reasoning, Maxwell came to the conclusion that it was flux that
      was important, leading him to this Physics 1B throwback:
    </p>
    <img src="@/assets/PHYS1C/img223.png" />
    <p>
      Therefore, Maxwell claims that Ampere’s Law should actually be written
      like:
    </p>
    <img src="@/assets/PHYS1C/img224.png" />
    <p>
      Of course, plugging our example back into this gives us consistent results
      for both methods. Cool, but why do we need to know this if we can just
      draw our loops so they fit the physics model? Well how about this. Let’s
      take this example:
    </p>
    <img src="@/assets/PHYS1C/img225.png" />
    <p>
      If we were to use the expanded Ampere’s Law to analyze the inner Amperian
      loop, we’d get:
    </p>
    <img src="@/assets/PHYS1C/img226.png" />
    <p>
      You may recognize this equation as the magnetic field inside a thick wire.
      Similarly, if you calculate the magnetic field of the outer Amperian loop,
      you’d get:
    </p>
    <img src="@/assets/PHYS1C/img227.png" />
    <p>
      Essentially, we can see that a capacitor essentially scales the wire up to
      a radius a in terms of magnetic field calculations. Due to this
      observation, Maxwell calls his extension of Ampere’s Law the “displacement
      current”, defined by:
    </p>
    <img src="@/assets/PHYS1C/img228.png" />
    <p>As a result, the correct version of Ampere’s Law can be written:</p>
    <img src="@/assets/PHYS1C/img229.png" />
    <p>
      We’ll generally be deferring to the longer version without the shorthand
      for reasons we’ll see in a second, but go with whatever works for you.
    </p>
    <h3 ref="5.2">Unit 5.2: Maxwell's Equations</h3>
    <p>
      With that taken care of, we can start working towards waves. Sorta. A lot
      of calculus ahead, you’ve been warned.
    </p>
    <p>
      So let’s do a quick recap of some of the basic laws we know relating to
      electromagnetism:
    </p>
    <img src="@/assets/PHYS1C/img230.png" />
    <p>
      While these individual equations are all attributed to varying physicists,
      Maxwell was the first to note how they all belonged together, leading
      these to be referred to as Maxwell’s Equations. He argued that these
      equations would be perfectly symmetric if magnetic monopoles existed. You
      can feel free to prove to yourself that he’s right, but I won’t do it here
      because it’s really not important.
    </p>
    <p>
      In order to see why this grouping is important, we’re gonna have to dive a
      little into the del operator. This is a calculus operator that we’re going
      to go over the basics of, so if you know about it, feel free to skip ahead
      a little. Del is defined as:
    </p>
    <img src="@/assets/PHYS1C/img231.png" />
    <p>
      Looking at this now, I could’ve made a separate topic for this, but
      whatever. With this definition, we can define 2 theorems that are going to
      help us out here. The first is Divergence Theorem, which states that the
      flux of some field G is equal to del dotted with that field, evaluated
      over the volume of the surface:
    </p>
    <img src="@/assets/PHYS1C/img232.png" />
    <p>Using this theorem, we can rewrite both forms of Gauss’ Law:</p>
    <img src="@/assets/PHYS1C/img233.png" />
    <p>From here, we transition to Stokes’ Theorem:</p>
    <img src="@/assets/PHYS1C/img234.png" />
    <p>Using this, we can similarly rewrite Faraday’s Law and Ampere’s Law:</p>
    <img src="@/assets/PHYS1C/img235.png" />
    <p>So, in summary, Maxwell’s Equations can be written as:</p>
    <img src="@/assets/PHYS1C/img236.png" />
    <p>
      Now, these equations tell us how E and B will behave in relation to
      sources, sinks, and currents. There is a way to visually derive that
      relationship if you know the characteristics of curl and divergence,
      however, it’s not directly relevant, so I’ll just give you the conclusion
      and leave it at that.
    </p>
    <h3 ref="5.3">Unit 5.3: Free-Space</h3>
    <p>
      Now, we need to take these equations and strap on some specific conditions
      to analyze them in.
    </p>
    <p>
      When we say free-space, we mean there are no charges or current to alter
      the fields’ behavior. In the context of Maxwell’s Equations, this means
      that:
    </p>
    <img src="@/assets/PHYS1C/img237.png" />
    <p>
      Taking these conditions into account, we can simplify Maxwell’s Equations
      to:
    </p>
    <img src="@/assets/PHYS1C/img238.png" />
    <p>
      Now, if you look at the non-trivial equations we have here, you see that a
      changing magnetic field creates an electric field and a changing electric
      field creates a magnetic field. This tells us that in free-space, magnetic
      fields and electric fields exhibit a self-perpetuating phenomenon that
      keep each other in existence. Now, if you’re sadistic, you’ll see that
      these equations form a set of coupled differential equations that we can
      solve as follows:
    </p>
    <img src="@/assets/PHYS1C/img239.png" />
    <p>
      If we perform the same process with the equation for magnetic field, we
      get:
    </p>
    <img src="@/assets/PHYS1C/img240.png" />
    <p>
      So now, the big question is, what do all those del cross-products
      represent? Well to begin breaking that down, we need to introduce the
      BAC-CAB identity:
    </p>
    <img src="@/assets/PHYS1C/img241.png" />
    <p>Applying this identity, we can write:</p>
    <img src="@/assets/PHYS1C/img242.png" />
    <p>And once again, applying it to the magnetic field equation:</p>
    <img src="@/assets/PHYS1C/img243.png" />
    <p>
      Ok last step, I promise. Now that we’ve broken it down this far, we can
      use the definition of del to write:
    </p>
    <img src="@/assets/PHYS1C/img244.png" />
    <p>
      And of course, the magnetic field version is similar. Well that looks
      kinda terrible, so let’s do ourselves a favor by simplifying our
      discussion and looking at this in 1-D:
    </p>
    <img src="@/assets/PHYS1C/img245.png" />
    <p>
      Don’t concern yourself with the shift to partial derivatives on the right
      side, it doesn’t matter. You may recognize these as the traveling wave
      equation from Physics 1B:
    </p>
    <img src="@/assets/PHYS1C/img246.png" />
    <p>
      And there we have it. After all of that math, we can conclude that
      electric and magnetic fields will travel as waves in free-space. One last
      thing to fill in there is the non-differential term in the above
      equations. If we were to equate them, we’d find:
    </p>
    <img src="@/assets/PHYS1C/img247.png" />
    <p>
      Bam, this told us that light is an electromagnetic wave. Magical. Now it’s
      time to actually get into the content of this section.
    </p>
    <h3 ref="5.4">Unit 5.4: EM Waves</h3>
    <p>To start off here, we’re going to build off of this equation from 1B:</p>
    <img src="@/assets/PHYS1C/img248.png" />
    <p>
      Taking this template and adjusting it for our electromagnetic waves, we
      have:
    </p>
    <img src="@/assets/PHYS1C/img249.png" />
    <p>
      You should notice that one key difference between these equations is that
      our new ones are vector equations. What does this mean for the wave? Well
      the wave ends up looking something like this:
    </p>
    <img src="@/assets/PHYS1C/img250.png" />
    <p>
      You should also note the similarities between the waves. In fact, I’ll
      just do a little dump of all the equations we know from our time in 1B:
    </p>
    <img src="@/assets/PHYS1C/img251.png" />
    <p>
      So those are all the important things we can see right off the bat. Well,
      we all know at this point that no analysis is complete without calculus,
      so let’s give that a go. If we find the time and space derivative of our
      wave equations, we get:
    </p>
    <img src="@/assets/PHYS1C/img252.png" />
    <p>
      The magnetic field equations can essentially be read right off of the
      electric field ones if you replace a few variables, but, because copy
      paste is a thing, I’ll just dump those out too:
    </p>
    <img src="@/assets/PHYS1C/img253.png" />
    <p>
      I promise I’m not just trying to extend the page length to make this guide
      look more impressive. Pinky swear. Well, from this point out, I’m going to
      be working in terms of the general field equations, and then bring
      everything back together at the end. Using Maxwell’s Equations, we can
      push this a little further:
    </p>
    <img src="@/assets/PHYS1C/img254.png" />
    <p>
      Ok, well, if k or the cosine term were 0, this just wouldn’t be a wave, so
      the G term must be 0. Therefore, we now know that electromagnetic waves
      have no component in the direction of propagation, and are therefore
      transverse waves.
    </p>
    <p>
      Now that we’ve used the dot-product equations, it’s a pretty safe bet
      we’re going to need to use the cross-product ones:
    </p>
    <img src="@/assets/PHYS1C/img255.png" />
    <p>
      I can’t wait until this unit is done so I can never type that out again.
      Anyways, we can simplify this a lot before plugging in since we know that
      our waves don’t have a y or z dependence, leaving us with:
    </p>
    <img src="@/assets/PHYS1C/img256.png" />
    <p>
      Well from here, we do need to start specifying the field since they’re
      going to provide slightly different results, so starting with electric
      field:
    </p>
    <img src="@/assets/PHYS1C/img257.png" />
    <p>
      Don’t worry too much if you couldn’t follow that substitution, we really
      just care about what we can pull out of this. The first thing is that, in
      order for this equation to always be true:
    </p>
    <img src="@/assets/PHYS1C/img258.png" />
    <p>
      This means that the electric and magnetic waves are in phase. Knowing
      that, we can then cancel out the cosine terms and say:
    </p>
    <img src="@/assets/PHYS1C/img259.png" />
    <p>
      Using some of the equations we pointed out earlier, we can rewrite these
      as:
    </p>
    <img src="@/assets/PHYS1C/img260.png" />
    <p>
      If you were to attempt the same process using Ampere’s Law, you would
      arrive at the same conclusions. So, in summary, we know that E and B are
      transverse waves, are in phase, and have amplitudes corresponding to the
      relationship above. Now it’s time to visualize an electromagnetic wave. Of
      course, since I just don’t have the tools to do this, I’m gonna be
      stealing a picture from Google. Shh, don’t tell anyone:
    </p>
    <img src="@/assets/PHYS1C/img261.png" />
    <p>
      Wow! Would you look at that. A visual made by someone that knows what
      they’re doing. Astonishing. Anyways, the big takeaways from the
      derivations and diagram are as follows:
    </p>
    <img src="@/assets/PHYS1C/img262.png" />
    <p>
      Now, the last thing we want to talk about in regards to waves is the
      energy associated with them. Starting with the electric energy density:
    </p>
    <img src="@/assets/PHYS1C/img263.png" />
    <p>
      Not gonna lie, that’s kinda cool. Now we know that in an electromagnetic
      wave, energy is split evenly amongst the electric and magnetic components.
      Here’s where it gets a little ugly. Let’s take an electromagnetic wave and
      a box:
    </p>
    <img src="@/assets/PHYS1C/img264.png" />
    <p>
      How much energy is contained inside this box? By the definition of energy
      density, we can say:
    </p>
    <img src="@/assets/PHYS1C/img265.png" />
    <p>
      Since we now know that the energy densities are symmetric, we can write:
    </p>
    <img src="@/assets/PHYS1C/img266.png" />
    <p>
      Now, the issue with how we’re representing it here is that it gives the
      impression that all the energy is in the electric field, when we know half
      of it is in the magnetic field too. Fixing this, we get:
    </p>
    <img src="@/assets/PHYS1C/img267.png" />
    <p>
      Now we can go a little further, but I’m going to leave that for the next
      topic, because this one’s getting a little long. So go; take a break, get
      a snack, go to a party, whatever you do to unwind because we’re past the
      worst of it now.
    </p>
    <h3 ref="5.5">Unit 5.5: Poynting Vector</h3>
    <p>
      This topic is going to mostly be example-based, we’ll finish the new
      material fairly quick, so it’s up to you how much of this you want to read
      through.
    </p>
    <p>
      Ok, let’s continue on with the concept we finished the last topic with.
      Reimagining the diagram from earlier:
    </p>
    <img src="@/assets/PHYS1C/img268.png" />
    <p>
      Notice that now, we’re saying that the back of the box moves at the speed
      of the wave along the direction of it’s propagation. What this allows us
      to do is differentiate our energy equation with respect to time and get:
    </p>
    <img src="@/assets/PHYS1C/img269.png" />
    <p>
      We got power. Now here comes the wack part. We can technically rewrite
      this:
    </p>
    <img src="@/assets/PHYS1C/img270.png" />
    <p>Or, in case the surface we’re analyzing isn’t actually a planar area:</p>
    <img src="@/assets/PHYS1C/img271.png" />
    <p>
      Why would we want to do this? I wish I could answer that question. All I
      know is that we have to, because the quantity in the integral is called
      the Poynting Vector:
    </p>
    <img src="@/assets/PHYS1C/img272.png" />
    <p>
      There are a couple nice things that the Poynting Vector tells us. For one,
      by virtue of its definition, it always points in the direction that energy
      travels in. In addition, the magnitude of this vector is equivalent to the
      intensity of this wave. And finally, as you might have already noticed
      above:
    </p>
    <img src="@/assets/PHYS1C/img273.png" />
    <p>
      So that’s it. That’s all the info you need to solve Poynting Vector
      problems. The rest of this topic is going to be doing a few basic ones,
      starting with a capacitor:
    </p>
    <img src="@/assets/PHYS1C/img274.png" />
    <p>Using what we know about capacitors, we can write:</p>
    <img src="@/assets/PHYS1C/img275.png" />
    <p>
      Using our amazing ability to use right hand rule, we can cross E and B to
      figure out:
    </p>
    <img src="@/assets/PHYS1C/img276.png" />
    <p>
      Based on our knowledge of the Poynting Vector, we know that energy is
      flowing into the region between the capacitor plates. If we want to
      actually get the power, we can do:
    </p>
    <img src="@/assets/PHYS1C/img277.png" />
    <p>
      There are a few things I want to make note of from this derivation.
      Firstly, you can see we get the same power as we got through mechanical
      methods in Unit 4. This tells us that the Poynting Vector provides another
      way to model energy that allows us to abandon the mechanical model. The
      second thing is, as usual, when we calculate power, we generally sweep
      signs under the rug, which is why the integral/dot-product simplifies very
      quickly. Finally, notice that we only substitute the area that the
      Poynting Vectors actually intersect with for dA (in this case, the long
      side of the cylinder). Ok so we worked a few kinks out with that first
      example, let’s move on to a solenoid:
    </p>
    <img src="@/assets/PHYS1C/img278.png" />
    <p>
      Oh wow. Just when I thought I was getting the hang of these drawings.
      Hopefully you can see what that’s supposed to be. Since the electric field
      of a solenoid is a little less well known, we’ll derive it out again here:
    </p>
    <img src="@/assets/PHYS1C/img279.png" />
    <p>Once again, we can cross E and B to get:</p>
    <img src="@/assets/PHYS1C/img280.png" />
    <p>
      Like the capacitor, energy flows into the solenoid, and we can calculate
      the power with:
    </p>
    <img src="@/assets/PHYS1C/img281.png" />
    <p>
      Ok, another really long derivation, but nothing surprising there. As we
      see once again, the Poynting Vector led us to the same conclusion our
      mechanical analysis did for the energy in a solenoid.
    </p>
    <p>
      Well now we’ve done a capacitor and an inductor, so obviously we gotta
      complete the set and do a resistor. We haven’t really worked too closely
      with these, but let’s give it a shot:
    </p>
    <img src="@/assets/PHYS1C/img282.png" />
    <p>
      So obviously you can get the magnetic field with right hand rule, but as
      you’re drawing this you might be wondering what on earth the electric
      field of a resistor looks like. Well let’s look at it mathematically
      first:
    </p>
    <img src="@/assets/PHYS1C/img283.png" />
    <p>
      From this, we can tell that the electric field works to push the charges
      through the resistor, so we can cross E and B and redraw:
    </p>
    <img src="@/assets/PHYS1C/img284.png" />
    <p>
      Knowing that we can essentially treat this as a thick wire, we can follow
      the same steps from the other examples:
    </p>
    <img src="@/assets/PHYS1C/img285.png" />
    <p>
      Now, already you can recognize that as power over area, which is exactly
      what we’d expect from this example, and we really don’t have to move
      further.
    </p>
    <p>
      So, that just about wraps it up for this material. There’s one more
      section in the unit, but it’s really only there because it doesn’t fit
      anywhere else. It’s really easy so I know you’ve got this.
    </p>
    <h3 ref="5.6">Unit 5.6: Light Pressure</h3>
    <p>
      Alright so this is a weird topic. It has elements of special relativity in
      it, which we won’t cover until the last unit, but let’s get into it here
      anyways.
    </p>
    <p>
      So this section is all about how shining light on something exerts a
      pressure on it. Obviously, this pressure is small considering you probably
      didn’t know this even existed. To start our discussion, we’re going to
      lead with a formula:
    </p>
    <img src="@/assets/PHYS1C/img286.png" />
    <p>
      For now, we’re just going to leave it at that. Once we start relativity,
      we’ll pick up the tools we need to derive this, but since that’s a while
      away, let’s just pretend we know this works. Looking at the formula, you
      may wonder how we’re talking about light and momentum when momentum is
      mass-dependent. Well, that brings us to another formula we’re pulling out
      of thin air:
    </p>
    <img src="@/assets/PHYS1C/img287.png" />
    <p>
      Obviously the mass term is still there, but while we’re talking about
      photons, this formula evaluates to 0/0, so we know there must be a
      different way to get the momentum of a photon. We’ll get there much later.
      Anyways, we’re just gonna move on and pretend we knew all of that. If we
      divide both sides of the energy equation by a time interval, we get:
    </p>
    <img src="@/assets/PHYS1C/img288.png" />
    <p>
      Alright, so now, we use our newfound Poynting Vector knowledge to write:
    </p>
    <img src="@/assets/PHYS1C/img289.png" />
    <p>
      Easy math, annoying number of P’s. There’s not much advice I can give you
      for that one, hopefully context covers all the uses in this guide. This
      formula is specifically for situations in which the light is perfectly
      absorbed. The other condition we’re going to look at is when light is
      perfectly reflected:
    </p>
    <img src="@/assets/PHYS1C/img290.png" />
    <p>
      If you think about it, this makes sense considering reflecting a particle
      means taking in the incident momentum, and then redirecting the momentum
      outward. So a scaling factor of 2 is a no-brainer.
    </p>
    <p>
      As I said, this was an easy section, these are the only 2 equations we’ll
      be using. Since there’s really no complexity here, we’ll just do an
      example to cap off the unit. So let’s imagine an object flying through
      space with a perfectly reflecting sail behind it:
    </p>
    <img src="@/assets/PHYS1C/img291.png" />
    <p>
      The principle behind this problem is using light pressure on the sail to
      counteract the force of gravity from the Sun. Yes that yellow ball is the
      Sun. My true artistry shines through here. Let’s get right into it with
      Newton’s 2nd Law:
    </p>
    <img src="@/assets/PHYS1C/img292.png" />
    <p>
      Now, here’s the one part I’d expect you to get tripped up on. We know
      that:
    </p>
    <img src="@/assets/PHYS1C/img293.png" />
    <p>
      What do we plug in for A? Well, in the Poynting Vector topic, we would
      plug in the entire area that the power flowed into/out of. Now, we do have
      to think a little about what this area should be here. Obviously, it’s
      going to be some form of sphere since it’s coming from the Sun. If we
      think about it, let’s make an imaginary shell around the Sun. The total
      amount of power that flows through that shell must be equal to the amount
      of power that flows through another shell with a different radius.
      Conservation of energy – the power has to go somewhere right? Knowing
      this, we must use the surface area of a sphere with radius equal to the
      distance between the Sun and our object:
    </p>
    <img src="@/assets/PHYS1C/img294.png" />
    <p>
      So, now we got our equation. Let’s say we want this object to accelerate
      out of the solar system. For that to happen, the term inside the
      parentheses must be greater than 0. Let’s make it happen:
    </p>
    <img src="@/assets/PHYS1C/img295.png" />
    <p>
      At this point, the final answer would depend on the mass of the object, so
      I’m going to cut this example off there and say we’re done.
    </p>
    <p>
      Yikes, that unit took almost 15 hours to write. Well, don’t worry, the
      longest two units are still ahead of us. As a point of reference we have
      covered the first 5 weeks of material. The last 5 weeks are all going to
      be crammed into three units, so brace yourself.
    </p>
    <p>
      If you actually want something that might make you feel better, we’re
      going to be taking a much needed break from this hard stuff for a couple
      units. The next two units are going to be void of calculus, and are
      generally not too bad. My quiz 4 and 5 scores say otherwise, but trust me,
      not too bad.
    </p>
    <h2 ref="6">Unit 6: Optics</h2>
    <p>
      Alright so, this unit is definitely different from what we’ve been talking
      about so far. Generally, the first 5 units were all fairly interconnected
      with each other in terms of material. With the first half of the class
      done, we can say that we’re finally done with electromagnetism. This unit
      is the biggest one we’ll be covering, but it’s also one of the easiest, so
      just don’t fall too far behind and you’ll do fine. Like I said at the
      beginning of the last unit, we’re done with the calculus-based parts of
      the class, so it’s all algebra from here on out. Keep yourself organized,
      and the math shouldn’t be an issue for a genius like yourself.
    </p>
    <p>
      Optics is generally about the discussion of how visible light propagates
      in relation to varying optical devices and mediums. Although our
      discussion will be hinged in the visible light spectrum (~400-700 nm),
      it’s worth noting that all of what we’re going to cover applies for any
      type of electromagnetic wave.
    </p>
    <h3 ref="6.1">Unit 6.1: Empirical Rules</h3>
    <p>
      Like always, we have to start off with some basics that we can use to tie
      later concepts together. As the name of the section suggests, these
      properties of light were derived from observation, and will be important
      in building the foundations of our analysis.
    </p>
    <p>
      The first rule is that, given a uniform medium, light will always travel
      through it in a straight line. This allows us to model light rays in
      diagrams and gives rise to one of the major analytical tools for this
      section: ray tracing.
    </p>
    <p>
      The next rule is that, when reflecting from a medium, the angle of
      incidence is equal to the angle of reflection. This is a little sneak peak
      for the massive amounts of geometry we’re going to have to work with
      throughout this section. Hopefully you’ve still got your notes from 9th
      grade geometry class. One thing I want to note here is that, these angles
      are measured with respect to the normal of the surface:
    </p>
    <img src="@/assets/PHYS1C/img296.png" />
    <p>
      This convention carries over into the rest of optics as well, so make sure
      you keep it in mind.
    </p>
    <p>
      The third rule is that, when light passes from one medium to another, it
      obeys Snell’s Law:
    </p>
    <img src="@/assets/PHYS1C/img297.png" />
    <p>Here, n is the index of refraction, which is defined by:</p>
    <img src="@/assets/PHYS1C/img298.png" />
    <p>
      Some common values of n that you’ll be working with are n = 1 in vacuum
      and air and n = 1.333 in water. By its definition, there are no indexes of
      refraction that are less than 1, as that would imply a medium where waves
      traveled faster than c.
    </p>
    <p>From Snell’s Law, we can derive:</p>
    <img src="@/assets/PHYS1C/img299.png" />
    <p>
      This can be further modified by the small-angle approximation, but we can
      summarize this by saying that when traveling into mediums with larger
      indexes of refraction, light tends to bend towards the normal:
    </p>
    <img src="@/assets/PHYS1C/img300.png" />
    <p>
      The last rule is that light rays are reversible, meaning a ray that works
      in one direction also works in the other. We will use this implicitly a
      lot when it comes to ray tracing, so you’ll become comfortable with it in
      due time.
    </p>
    <p>
      Now, I could spend the rest of this section proving these rules with
      actual math instead of just giving them to you, but I don’t think either
      of us would like that. So instead, we’re just going to cut this section
      off here and work our way into new material.
    </p>
    <h3 ref="6.2">Unit 6.2: Conventions</h3>
    <p>
      I know you’re super excited to get into the math and stuff, but we’re
      going to have to set a little more foundation before we can. There are a
      lot of new terms that we’re going to be working with, so I figure I’m just
      going to dump them on you here, and hopefully, as we begin working through
      the material, you’ll better understand them.
    </p>
    <p>
      The first distinction we have to make is object vs. image. If you were to
      stand in front of a mirror, the you that is you is the object, and the you
      in the mirror is the image. To give this a formal definition (which will
      really help later), rays that are incident on an optical device will
      intersect at the object, and rays that are emerging from the optical
      device will intersect at the image. If you haven’t worked with optics
      before, you probably have no idea what that means, so here’s a visual:
    </p>
    <img src="@/assets/PHYS1C/img301.png" />
    <p>
      I think there’s a non-zero chance that drawing makes things more
      confusing. Light rays are coming in from the left. The green rays are
      incident rays and the red are emerging rays. I’ll do my best to keep those
      conventions for this guide. As you can see, we used most of the empirical
      rules for this diagram. This process is called ray tracing, and you should
      really get used to doing it.
    </p>
    <p>
      One thing you probably notice is that the emerging rays themselves don’t
      intersect. However, if you trace them back across the mirror (dotted red
      lines) you see that they appear to intersect, and our eyes do this
      automatically, creating an image across the mirror.
    </p>
    <p>
      I’m sure that you totally got that information and I didn’t just
      completely confuse you. Don’t worry, we’re adding another piece to the
      puzzle.
    </p>
    <p>
      With that distinction out of the way, let’s look at real vs. virtual.
      These are the 2 classifications for images and objects, and are determined
      by the side of the optical device the object/image is on relative to the
      ray that created them. Before I say this definition, let’s establish that
      objects are related to incident rays and images are related to emerging
      rays. Now, if the object/image is on the same side of the optical device
      as the rays that created it, it is real. If the object/image is on the
      opposite side, it is virtual. I never realized how hard it is to put this
      into words until now. Let’s take the ray diagram above for example. Try to
      figure out what type of object and image is present. I’ll give you time.
      If it makes you feel better I won’t watch.
    </p>
    <p>
      If you came up with real object and virtual image, you’re a genius. If you
      didn’t, well, you’re just a genius who might need a reread of those last
      few paragraphs.
    </p>
    <p>
      Now, we have one last distinction to talk about, and that is converging
      vs. diverging. Before we can start that discussion, we need to become
      familiar with one term: paraxial rays. Paraxial rays are essentially light
      rays from a distant source. What this means for us, is that paraxial rays
      will enter our frame of analysis parallel to the optical axis (the axis
      the optical device is aligned with). For instance, the ray from the
      example above that was perpendicular to the mirror and reflected in the
      same direction it came in was a paraxial ray.
    </p>
    <p>
      Now that that’s all defined, we can define optical devices by what they do
      to paraxial rays. For instance, this mirror is converging:
    </p>
    <img src="@/assets/PHYS1C/img302.png" />
    <p>
      Since all the paraxial rays converge on a location. The shape of this
      mirror makes it a convex mirror. Although all convex mirrors are
      converging, it’s not a good idea to associate those terms together because
      not all convex devices are converging. Anyways a diverging mirror looks
      like:
    </p>
    <img src="@/assets/PHYS1C/img303.png" />
    <p>
      Since all the paraxial rays diverge from a location. The shape of this
      mirror makes it a concave mirror. [Repeat warning about not associating
      those together]. I found the best way to remember the mirror types was to
      ask if they are concave or convex to incident light.
    </p>
    <p>
      With all those out of the way, we can now introduce the terms we’ll be
      using for our calculations throughout the unit. One thing to mention
      before we jump in is that managing signs are probably the hardest part
      about this material. As a result, we’re going to try to prevent any
      confusion by using a lot of absolute values to set up problems and make
      sure we remember that we have to deal with signs as we solve. You’ll see
      what I mean.
    </p>
    <p>
      The first term we’re going to be using is object distance (p), the
      distance from the object to the optical device along the optical axis.
      Similarly, image distance (q) is the distance from the image to the
      optical device along the optical axis. The sign convention we use for
      these distances is positive if the object/image is real and negative if
      the object/image is virtual.
    </p>
    <p>
      The next term is focal length (f), which is the distance from the focal
      point, the point where paraxial rays converge on or diverge from, of the
      optical device along the optical axis. This value is positive for all
      converging devices and negative for all diverging devices.
    </p>
    <p>
      The last term we’ll have to deal with is magnification (M), defined by:
    </p>
    <img src="@/assets/PHYS1C/img304.png" />
    <p>
      Where hi is the height of the image and ho is the height of the object.
      From this, we can see that magnification is positive when the image and
      object have the same orientation and negative if they have opposite
      orientations. It’s also relevant to note that if an object/image’s height
      is positive, it is upright, and if it’s negative it is inverted.
    </p>
    <p>
      Ok, I doubt you really absorbed all of that, but don’t worry. This is one
      of those things that becomes really easy once you do enough practice for
      it, and we’ll have plenty of problems coming your way. However, not all of
      these problems will be derived out for you, I’m going to leave a decent
      chunk for you to do, so it’s going to be up to you how well versed you are
      with some of this stuff. Let’s get into it.
    </p>
    <h3 ref="6.3">Unit 6.3: Mirrors</h3>
    <p>Boom, example straight out of the gate:</p>
    <img src="@/assets/PHYS1C/img305.png" />
    <p>
      Ok, so we already did a little bit of analysis with this one. We know that
      we’re looking at a real object and a virtual image. In addition, using our
      empirical rules and geometry, we can say that the height of the object and
      height of the image are the same. As a result, we end up with:
    </p>
    <img src="@/assets/PHYS1C/img306.png" />
    <p>
      Get used to doing this kind of analysis really quickly, it’s how we’ll be
      starting off just about every problem. One thing to note is that for
      mirrors, and later thin lenses, the equation for magnification can also be
      given by:
    </p>
    <img src="@/assets/PHYS1C/img307.png" />
    <p>
      Through this, we can (but won’t here because I’m lazy) also derive the
      optics equation:
    </p>
    <img src="@/assets/PHYS1C/img308.png" />
    <p>
      We’ll have to make slight modifications to this later, but, for the most
      part, this structure holds for all geometries that we’ll be dealing with.
    </p>
    <p>
      Now, we’ve dealt with the very easy planar mirror. The only other type of
      mirror we’ll be dealing with is the spherical one. Before we start, I’m
      going to give you the equation for the focus of a spherical mirror:
    </p>
    <img src="@/assets/PHYS1C/img309.png" />
    <p>
      Like always, this was derived in class, but I’m just not about to type out
      a page and a half of geometry to do it here. Give it a shot if you want,
      it doesn’t matter either way. When you use this equation, please remember
      that you have to deal with the sign afterwards based on the type of
      spherical mirror. You can also use this to derive a sign convention for
      the radius of curvature R, but we’ll mostly ignore that here. It may be
      helpful for you.
    </p>
    <p>
      Now, we’re going to walk through a quick example and show you how to
      derive some of the very basic equations for spherical mirrors, using a
      converging mirror:
    </p>
    <img src="@/assets/PHYS1C/img310.png" />
    <p>
      So this is the information you normally start with for these kinds of
      problems. From here, we start off with a ray tracing to locate the image.
      It’s worth noting that there are very specific rays you want to use to
      make your life easier. For one, the paraxial ray always reflects towards
      the focus. In the planar mirror example, it reflected off towards
      infinity, which is technically the focus of the planar mirror (it’s a
      spherical mirror with infinite radius of curvature). Another easy one is
      the ray through the optical axis, which reflects off symmetrically about
      the axis. Putting this all together:
    </p>
    <img src="@/assets/PHYS1C/img311.png" />
    <p>
      As you can see, these get ugly fast, but we’ll go with it. Obviously, the
      emerging rays intersect on the same side of the mirror as they appear, so
      we have a real image. Now, let me direct your focus to the triangles we
      create:
    </p>
    <img src="@/assets/PHYS1C/img312.png" />
    <p>
      Remembering that the angles are equal due to symmetry, if we take our
      definition of magnification, we get:
    </p>
    <img src="@/assets/PHYS1C/img313.png" />
    <p>
      The same kind of proof could’ve been done for diverging mirrors, but
      they’re harder to draw. Combining everything we know, we can write out all
      the equations we’ll need for spherical mirrors:
    </p>
    <img src="@/assets/PHYS1C/img314.png" />
    <p>Nice and straightforward algebra. Now it’s time for real examples.</p>
    <p>
      In terms of spherical mirrors, there are really 4 situations that can be
      analyzed (technically 6, but we’ll get into it). I’ll be taking care of 1
      here, and then leaving you to do the rest. So, these situations come from
      mixing the type of spherical mirror and the type of object. I’ll be
      walking you through the concave mirror + real object combo.
    </p>
    <p>
      Before we draw our diagram, let’s evaluate this problem mathematically:
    </p>
    <img src="@/assets/PHYS1C/img315.png" />
    <p>
      If you look closely at the equations we have for q and M, you’ll see we
      actually have 2 sub-problems in this one example. q and M change signs
      depending on if p > f or if f > p.
    </p>
    <p>
      We’ll start by looking at the p > f case. Continuing mathematically, q is
      positive and M is negative. This tells us we should expect to get a real,
      inverted image. Since p could be a little bigger than f or a lot bigger,
      we can’t say anything about the size of the image.
    </p>
    <p>
      Now that we’ve gotten our expectations, let’s see if we can confirm them
      visually. p > f translates to the object being farther away than the
      focus:
    </p>
    <img src="@/assets/PHYS1C/img316.png" />
    <p>
      Now it’s time for ray tracing. I want to note that so far, we haven’t been
      doing real ray tracing. We’ve been working with 2 rays per problem. If you
      think about it, 2 rays will intersect no matter what, even if you did the
      tracing wrong. What we’re going to do is add another ray, because if 3
      intersect, we’re probably on the right track. This last ray is going to
      take advantage of reversibility of rays by saying a ray going in through
      the focus will come out paraxially:
    </p>
    <img src="@/assets/PHYS1C/img317.png" />
    <p>
      Didn’t turn out pretty, but it meets all our expectations. The image is
      real and inverted. Now for the f > p case. In this case, q is negative and
      M is positive. From our diagram, we should expect a virtual, upright
      image. In addition, the denominator of the magnification formula will
      always be less than the numerator, so the object will be large. This is
      going to look awful:
    </p>
    <img src="@/assets/PHYS1C/img318.png" />
    <p>
      Just as we predicted, the image is virtual, upright, and large. So, now
      that we’ve covered the first 2 cases, I want you to do the remaining 4.
      This includes all the cases associated with concave mirror + virtual
      object, convex mirror + real object, and convex mirror + virtual object.
    </p>
    <p>
      If you do these right, you’ll find cases with a real + upright + large
      image, real + upright + small image, virtual + upright + small image, and
      a virtual + inverted image. I really do recommend these because they’re
      pretty easy, get you familiar with ray tracing, and make sure there are no
      more variations of spherical mirror problems that you haven’t done. Good
      luck!
    </p>
    <h3 ref="6.4">Unit 6.4: Refraction</h3>
    <h3 ref="6.5">Unit 6.5: Thin Lenses</h3>
    <h3 ref="6.6">Unit 6.6: Chained Devices</h3>
    <h3 ref="6.7">Unit 6.7: The Eye</h3>
    <h2 ref="7">Unit 7: Interference and Diffraction</h2>
    <h3 ref="7.1">Unit 7.1: Interference</h3>
    <h3 ref="7.2">Unit 7.2: Young's Two-Slit Experiment</h3>
    <h3 ref="7.3">Unit 7.3: Reflection</h3>
    <h3 ref="7.4">Unit 7.4: Thin Films</h3>
    <h3 ref="7.5">Unit 7.5: Diffraction</h3>
    <h3 ref="7.6">Unit 7.6: Rayleigh's Criterion</h3>
    <h2 ref="8">Unit 8: Special Relativity</h2>
    <h3 ref="8.1">Unit 8.1: Geometric Transformation</h3>
    <h3 ref="8.2">Unit 8.2: Galilean Transformation</h3>
    <h3 ref="8.3">Unit 8.3: Lorentz Boost</h3>
    <h3 ref="8.4">Unit 8.4: Time Dilation</h3>
    <h3 ref="8.5">Unit 8.5: Length Contraction</h3>
    <h3 ref="8.6">Unit 8.6: Relativistic Velocity</h3>
    <h3 ref="8.7">Unit 8.7: 4-Momentum</h3>
    <h3 ref="8.8">Unit 8.8: Relativistic Dynamics</h3>
    <h3 ref="8.9">Unit 8.9: Compton Scattering</h3>
    <h2 ref="after">Afterword</h2>
  </div>
</template>

<script>
export default {
  name: "PHYS1C",
};
</script>

<style lang="scss" scoped>
.phys1c {
  // Spacing
  padding: 0 calc(clamp(4rem, 2.4rem + 6.4vw, 8rem));
  padding-bottom: 2rem;
  // Sizing
  width: 100%;
}
</style>