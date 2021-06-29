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
    <p>
      Ok so, we’ve gotten ourselves started with optics now, but we still have
      yet to use one of the rules we established earlier: Snell’s Law. So let’s
      get an example that we can visualize this with. Imagine a coin at the
      bottom of a body of water:
    </p>
    <img src="@/assets/PHYS1C/img319.png" />
    <p>
      So we’re going to treat the coin as our object. The question we’re gonna
      try to answer is where does the image appear relative to the depth of the
      water? Starting with ray tracing, we get:
    </p>
    <img src="@/assets/PHYS1C/img320.png" />
    <p>
      Following the rules we’ve been working with so far, an observer at the top
      of the diagram sees the image where the emerging rays intersect, a
      distance d downwards. If we take care in labelling our angles from Snell’s
      Law:
    </p>
    <img src="@/assets/PHYS1C/img321.png" />
    <p>
      We can see that we’ve really just broken this down into a geometry
      problem. Let’s take the 2 obvious triangles:
    </p>
    <img src="@/assets/PHYS1C/img322.png" />
    <p>
      So, clearly not to scale. We can see that they have a common side length,
      so we can use it to relate the other values:
    </p>
    <img src="@/assets/PHYS1C/img323.png" />
    <p>
      Now, we can take advantage of the fact that in this problem, and many
      other optics problems, we’re dealing with small angles. Therefore:
    </p>
    <img src="@/assets/PHYS1C/img324.png" />
    <p>Then, by Snell’s Law:</p>
    <img src="@/assets/PHYS1C/img325.png" />
    <p>
      Feel free to plug in the known indexes of refraction, I’m not going to
      because that wasn’t the point of this example. We’ve just been introduced
      to refraction, the behavior that light exhibits upon crossing mediums. You
      can bet this is going to be something really capable of adding complexity
      to our optics problems. For instance, think about what would happen if the
      above example had multiple mediums separating the object from the
      observer. How would you solve it then? Or if the indexes had a different
      relationship (n2 &lt; n1). We won’t go through with those, but they might
      be worth thinking about.
    </p>
    <p>
      Moving on, what if we push the above example to its outer limits? Picture
      this:
    </p>
    <img src="@/assets/PHYS1C/img326.png" />
    <p>
      Where does that rightmost ray emerge? Obviously, the ray cannot go any
      farther from the normal while staying in n1. As a result, the emerging ray
      exhibits a phenomenon called total internal reflection:
    </p>
    <img src="@/assets/PHYS1C/img327.png" />
    <p>
      Ok so there a few things to go over now. For one, you can see I traced out
      a blue circle. This represents the area where light from the object
      actually escapes the medium. Any rays beyond that circle are subject to
      total internal reflection, and therefore remain inside the original
      medium. In addition, you can see I labeled the incident angle that
      corresponded to an emerging angle of 90º as the critical angle. This is
      the limit of where rays are able to escape. It can be calculated by:
    </p>
    <img src="@/assets/PHYS1C/img328.png" />
    <p>
      As a thought experiment, it might be helpful to use reversibility of rays
      to imagine what you’d see from the coin’s perspective.
    </p>
    <p>
      Now, if I were to follow the lectures exactly, right now is where I would
      apply this concept to a series of examples regarding fiber optics. At the
      same time, I probably don’t hate whoever’s reading this, so I will not
      subject you to that torment. I trust you can do the level of geometry we
      needed here and have the ability to apply it to whatever’s thrown at you.
    </p>
    <p>
      Ok, I know this section is getting really long, but we’ve still got quite
      a lot to cover, and it really shouldn’t be separated, so sorry.
    </p>
    <p>Let’s shine a light through a section of glass with thickness t:</p>
    <img src="@/assets/PHYS1C/img329.png" />
    <p>
      Due to refraction, the ray will exit at a displacement d from the original
      ray’s path. Our goal is gonna be to find this displacement. Let’s start by
      breaking down the geometry:
    </p>
    <img src="@/assets/PHYS1C/img330.png" />
    <p>
      This example is hurting my soul. As you can (kinda) see, we’ve gotten our
      angles, and outlined some triangles of interest:
    </p>
    <img src="@/assets/PHYS1C/img331.png" />
    <p>
      So a little bit of geometry should get you there. From here, we can do
      some trig to solve for d:
    </p>
    <img src="@/assets/PHYS1C/img332.png" />
    <p>
      There’s a lot of transformations there that I definitely wouldn’t think
      of, but we got there in the end. Now, of course, no one expects you to
      remember this equation. However, you should note that light coming in
      normal to the medium comes out with 0 displacement. We’ll be using that
      fact in the next section.
    </p>
    <p>
      Before we get there though, we have one more thing to go over: spherical
      refractive surfaces. As a starting point, we’re going to re-derive our
      optics equation, starting with the equation from the apparent depth
      example as a baseline:
    </p>
    <img src="@/assets/PHYS1C/img333.png" />
    <p>
      If we correct this to be negative since the image is on the opposite side
      to the emerging light and generalize this so that d is the image distance,
      D is the object distance, n1 is in the medium where light emerges, and n2
      is in the medium from where light is incident, we have:
    </p>
    <img src="@/assets/PHYS1C/img334.png" />
    <p>
      So now we have something that resembles our old optics equation, but we
      still have one more step. The example we derived this from was a planar
      refractive surface, so this equation is missing a focus element. Using the
      definition of a focus, if p goes off to infinity, then the image must be
      created at the focus, therefore we have:
    </p>
    <img src="@/assets/PHYS1C/img335.png" />
    <p>
      This is our final optics equation for spherical refractive surfaces (SRS),
      which are pretty much what the name implies they are. Let’s put up some
      diagrams for a converging and diverging SRS:
    </p>
    <img src="@/assets/PHYS1C/img336.png" />
    <p>
      In terms of our conventions, converging devices have a positive focal
      length and radius of curvature, while diverging devices have negative
      ones. Now we can see why we wanted to avoid associating convex/concave
      with any of that. This is made even clearer when you consider what happens
      if nemg is actually less than ninc. The geometries above would switch, the
      concave SRS would become a converging device and the convex SRS would
      become a diverging device. Since this asymmetry provides a new obstacle
      for us, we’ll fix it in our optics equation with the following:
    </p>
    <img src="@/assets/PHYS1C/img337.png" />
    <p>
      Feel free to check, but this equation will give us the right signs for SRS
      to fit the conventions we set out.
    </p>
    <p>
      One thing to note is that the rightmost fraction in all optics equations
      is what is known as the focusing power of the optics device and is
      measured in diopters. It’s not super relevant, but I thought I’d bring it
      up in case you ran into the term.
    </p>
    <p>
      A new property of SRS that we haven’t run into involves reversibility of
      rays. What happens when light is incident from the right? Well, if you
      think of this situation in terms of the geometries we described above,
      you’d figure out that converging SRS are converging from both sides, and
      diverging SRS are diverging from both sides. As a result, SRS really have
      2 focal points, and, while we could derive this, I’m just gonna give it to
      you:
    </p>
    <img src="@/assets/PHYS1C/img338.png" />
    <p>
      Now with all the facts of SRS down, let’s finally finish off this section
      with an example:
    </p>
    <img src="@/assets/PHYS1C/img339.png" />
    <p>
      Just like mirrors, our next step is going to be ray tracing. The rays
      we’ll be using are, the one that comes in paraxially and intersects the
      far focus, the one that intersects the optical axis and behaves according
      to Snell’s Law, and the one that intersects the near focus and comes out
      paraxially:
    </p>
    <img src="@/assets/PHYS1C/img340.png" />
    <p>
      Cool deal. Now, if we take the triangles formed by the object and image,
      we get:
    </p>
    <img src="@/assets/PHYS1C/img341.png" />
    <p>Using these, let’s look at the magnification of the image:</p>
    <img src="@/assets/PHYS1C/img342.png" />
    <p>
      As we can see, we get something very similar to our original magnification
      equation, but adjusted for the difference in mediums.
    </p>
    <p>
      That finally does it for refraction. I really did let this section go on
      for so damn long. We’re not quite out of the woods yet though, we have one
      more optical device to introduce before we throw everything together for
      the last 2 sections of the unit.
    </p>
    <h3 ref="6.5">Unit 6.5: Thin Lenses</h3>
    <p>
      Time for the last device of this section, and probably the one you’ll see
      most commonly. To start deriving the tools we’ll need for these, let’s
      take a refractive surface:
    </p>
    <img src="@/assets/PHYS1C/img343.png" />
    <p>
      We use dotted lines here to avoid specifying a shape for the refractive
      surfaces. Take note of how we differentiate between the 2 surfaces. If we
      were to write the optics equation for each of the surfaces, we’d have:
    </p>
    <img src="@/assets/PHYS1C/img344.png" />
    <p>If we were to add these equations together, we’d get:</p>
    <img src="@/assets/PHYS1C/img345.png" />
    <p>
      Now, since our focus is on thin lenses, we can take the limit as d goes to
      0:
    </p>
    <img src="@/assets/PHYS1C/img346.png" />
    <p>Now, let’s fully commit to the idea that this is a thin lens:</p>
    <img src="@/assets/PHYS1C/img347.png" />
    <p>
      Since we’re no longer worrying about 2 surfaces, we don’t have to
      differentiate between 1 and 2. In addition, we’ll modify the names of the
      indexes of refraction to get:
    </p>
    <img src="@/assets/PHYS1C/img348.png" />
    <p>From here, we can actually fit this into our basic optics equation:</p>
    <img src="@/assets/PHYS1C/img349.png" />
    <p>If we define 1/f for thin lenses as:</p>
    <img src="@/assets/PHYS1C/img350.png" />
    <p>
      We derive what is known as the Lensmakers’ Equation. Notice that R1 is the
      radius of the first surface that incident light hits and R2 is the radius
      of the second. Our sign conventions will be based on R1. We now have all
      the basic equations we need to start analyzing thin lenses with a little
      more detail. Let’s start with biconvex lenses – lenses that are convex on
      both sides:
    </p>
    <img src="@/assets/PHYS1C/img351.png" />
    <p>
      By our conventions, R1 is positive (to the right of the device) and R2 is
      negative (to the left of the device), so, plugging into the Lensmakers’
      Equation:
    </p>
    <img src="@/assets/PHYS1C/img352.png" />
    <p>
      Assuming nlens > nmed since, most of the time, we’ll be working with
      lenses in air, this tells us our focal length is positive, and biconvex
      lenses are converging devices. This is also what allows us to simplify our
      sign conventions to a left/right system. If we give biconcave lenses the
      same treatment:
    </p>
    <img src="@/assets/PHYS1C/img353.png" />
    <p>
      This always evaluates as negative, so, as you probably expected, biconcave
      lenses are diverging devices.
    </p>
    <p>
      Now, we just have one more type of thin lens to look at, and that is a
      crescent-shaped lens:
    </p>
    <img src="@/assets/PHYS1C/img354.png" />
    <p>
      Obviously, we have 2 regions of interest here. If we plug into our
      Lensmakers’ Equation using light incident from the left and from the right
      we get:
    </p>
    <img src="@/assets/PHYS1C/img355.png" />
    <p>
      Now, we can conclude that all thin lenses have symmetric focal points on
      either side of the lens. From here, I’ll quickly introduce some shorthand
      for drawing lenses. We can draw converging lenses as:
    </p>
    <img src="@/assets/PHYS1C/img356.png" />
    <p>And diverging lenses as:</p>
    <img src="@/assets/PHYS1C/img357.png" />
    <p>
      Now it’s time for some deja vu. Remember how we had a collection of 6
      types of spherical mirror problems that you totally did? Well we’re going
      to do the same thing here. I’m going to walk you through the first 2 and
      leave the remaining 4 to you. We’ll start once again with a converging
      lens and a real object. From that information, we can derive:
    </p>
    <img src="@/assets/PHYS1C/img358.png" />
    <p>
      Just like before, if we analyze the denominators, we see that there are 2
      regions of interest.
    </p>
    <p>
      For our first region, where p > f, q will be positive, so we expect a real
      image. M will be negative, so this image should be inverted. Since p could
      be a lot bigger or a little bigger than f, we can’t say anything about the
      size. Now let’s try to prove that with a ray diagram. We can obviously use
      the 2 rays that will intersect the 2 focal points like we’ve been using
      for a while, but what about the third? Well, if we take the ray going
      through the middle of the lens, the lens is essentially flat at that
      point, and, since it’s a thin lens, there will be no displacement. As a
      result, we can draw:
    </p>
    <img src="@/assets/PHYS1C/img359.png" />
    <p>As we expected, the image is real and inverted.</p>
    <p>
      Now, looking at the situation where p &lt; f, we get a negative q, so the
      image is virtual, a positive M, so the image is upright, and a small
      denominator, so the image is large. Let’s see:
    </p>
    <img src="@/assets/PHYS1C/img360.png" />
    <p>
      There you go. You should now be able to cover the other 3 cases. As a
      reminder, look at converging lenses with virtual objects, and diverging
      lenses with real and virtual objects. One of them should have 2 regions of
      interest. I’m not gonna give you the answers this time, but you should be
      able to confirm whatever answers you get without too much trouble.
    </p>
    <p>
      That’s it! We’ve introduced pretty much all of optics now. The rest of the
      unit is going to be applying what we know to certain types of problems
      you’re going to see.
    </p>
    <h3 ref="6.6">Unit 6.6: Chained Devices</h3>
    <p>
      Ok, so this section really doesn’t have enough material to be a section,
      but I thought it was important enough to go over. What we’re going to do
      is go over one example, and then just move on.
    </p>
    <p>
      Chained devices are generally the only hard part of optics. Everything
      else is more or less the same. Work out the signs, do the geometry, plug
      into the formula. Chained devices require you to be organized and to pay
      attention to exactly what you’re doing, or else you’ll get lost.
    </p>
    <p>
      We’re going to cover the visual explanation of what’s happening, and give
      you some advice about the math afterwards. Let’s set this up. We have an
      object in front of a thin lens and a planar mirror:
    </p>
    <img src="@/assets/PHYS1C/img361.png" />
    <p>
      Now, we start this by working with the closest optical device to the
      incident light first, which would be the converging lens:
    </p>
    <img src="@/assets/PHYS1C/img362.png" />
    <p>
      So now, this real image created by the lens is going to act as an object
      for the mirror. We’re going to clean those rays up, otherwise this is
      going to be a disaster:
    </p>
    <img src="@/assets/PHYS1C/img363.png" />
    <p>
      What do you mean I moved the mirror up to make this drawing not terrible?
      How dare you accuse me of that. Anyways, we can see that we now have a
      virtual image formed on the other side of the mirror. Don’t worry, we’re
      not done just yet. We have one more interaction to deal with: the second
      image back through the lens:
    </p>
    <img src="@/assets/PHYS1C/img364.png" />
    <p>
      Ok the drawing’s still terrible. Didn’t realize how small the final image
      would be. Anyways hopefully, you get the gist of what we’re doing with
      these. Of course, the behavior’s gonna change when you swap out devices
      for each other, but I’d get comfortable doing this kinda stuff.
    </p>
    <p>
      Now, I promised some advice on the math aspect of this. Label everything.
      Seriously. You’ll have to work with multiple object and image distances,
      possibly multiple focal points, etc. Since the signs are going to be a
      nightmare, you need to keep those straight. On that note, break the
      problem up into stages. Taking it slow means you won’t mess up the sign
      conventions because you thought the sign was relative to the mirror, but
      you’re working on the lens or some other nonsense like that.
    </p>
    <p>
      Probably the thing that might trip you up the most is the direction of
      light. Of course, this is important because it dictates sign conventions.
      Notice how when we were working on the third device, the incident light
      switched sides since it reflected off the mirror. Yes that’s how it works.
      No, don’t forget that. If you can keep yourself organized and not get
      caught on those edge cases, you’ll be fine. It’s still more or less just
      plugging into formulas.
    </p>
    <h3 ref="6.7">Unit 6.7: The Eye</h3>
    <p>
      Now we can finally move into the final topic in this section. It’s already
      taken over 15 hours, so I’ll try to make this quick. This is the point in
      this class where I really started to wonder why I had to learn this stuff
      as a CS major. I still haven’t found the answer to that. At least it’s
      easy-ish.
    </p>
    <p>
      There’s a lot that I could introduce here, but since it isn’t directly
      relevant to solving problems, I won’t. Instead I’m going to give you 2
      terms: the near-point and the far-point. As far as I know, if you get
      eye-related problems, it’ll be about these. The near-point is the point
      closest to your eye where you can still see clearly. Shockingly, the
      far-point is the point farthest from your eye where you can still see
      clearly.
    </p>
    <p>
      What these problems will generally deal with is someone with terrible
      eyesight (like yours truly) needing a lens to correct their issues. You’ll
      be given some information about their near/far-point and the desired
      near/far-point, and you’ll be on your way.
    </p>
    <p>
      Now, the eye itself isn’t going to change. What using a lens can do is
      take the object at the desired point and create an image of it at the
      actual point. That image then acts as an object for the eye, and, bish
      bash bosh, eyesight fixed.
    </p>
    <p>
      You’ll get a variety of problems about this possibly, each of them
      excluding varying pieces of information, but none of them should be too
      bad. Since I know that, I’m taking the lazy way out and leaving it at
      that.
    </p>
    <p>
      We made it! I hated writing that. So many diagrams. You can really tell
      that I just gave up at the end there. The next unit’s definitely harder in
      my opinion, but we’re still staying in the algebra-centric part of the
      class.
    </p>
    <h2 ref="7">Unit 7: Interference and Diffraction</h2>
    <p>
      Ok, now it’s time to bring our last few sections together for a new
      concept. Personally, I think this would’ve fit better right after the
      section on electromagnetic waves, but I don’t have a PhD, so what do I
      know? This is the end of the “easy” stretch of this class so enjoy it
      while you can. With that said, this unit can still be pretty challenging
      when it comes to keeping track of all the elements necessary for solving
      these problems. You’ve probably gotten used to hand-waving derivations of
      some of these concepts away by this point. Do not do that here. The
      derivations you see here are going to be pretty important for your ability
      to succeed in this unit, and learning them is the best way to really grasp
      what’s going on here.
    </p>
    <h3 ref="7.1">Unit 7.1: Interference</h3>
    <p>So, back in Physics 1B we looked at a wave equation that looked like:</p>
    <img src="@/assets/PHYS1C/img365.png" />
    <p>
      Where x describes the distance from the source along the path, t describes
      the time of observation, and φ describes the initial phase of the wave.
      Now, let’s imagine we have two sources with light traveling to a point P:
    </p>
    <img src="@/assets/PHYS1C/img366.png" />
    <p>
      Notice how the light has to travel a different distance from each source.
      From here we can write:
    </p>
    <img src="@/assets/PHYS1C/img367.png" />
    <p>Adding these together to find the resultant wave, we get:</p>
    <img src="@/assets/PHYS1C/img368.png" />
    <p>
      Now that’s a big boy. Don’t worry we can break this down. We pretty much
      don’t care about the sine term – all it tells us is that this resultant
      wave oscillates. Duh. So we can focus on the cosine term, which tells us
      our resultant amplitude. This amplitude is essentially a function of the
      overall phase difference between the two waves:
    </p>
    <img src="@/assets/PHYS1C/img369.png" />
    <p>
      As you can see, Δθtot / 2 is the term inside the cosine from our resultant
      wave equation. Let’s break up our Δθtot into a new formula:
    </p>
    <img src="@/assets/PHYS1C/img370.png" />
    <p>
      This tells us that our total phase difference is a result of the sum of
      the difference due to the path the waves travel and the initial conditions
      of the waves. Taking this, we can get another formula we’ll need:
    </p>
    <img src="@/assets/PHYS1C/img371.png" />
    <p>
      Notice that we write this as the change in kL, not k times the change in L
      like our equation for Δθtot implies. This’ll be important when we start
      dealing with waves of different wavelengths, but it’s not a big deal for
      now.
    </p>
    <p>
      So now that we’ve got a baseline down, we can start really looking at
      interference. Interference is essentially the result of superposition. Two
      special cases of interference are constructive and destructive
      interference, which is what we’ll focus on here. From our derivations
      above, we know that:
    </p>
    <img src="@/assets/PHYS1C/img372.png" />
    <p>
      Putting this in the context of constructive interference, where Arp must
      be maximized, we can write:
    </p>
    <img src="@/assets/PHYS1C/img373.png" />
    <p>
      In English, this means that the total phase difference must be an even
      number of πs. In other words, for constructive interference to occur,
      these waves must come in exactly in phase. Makes sense, we’re doing good
      so far. How about destructive interference where Arp must be minimized:
    </p>
    <img src="@/assets/PHYS1C/img374.png" />
    <p>
      This implies that the waves must have a phase difference of an odd number
      of πs. Therefore, for destructive interference to occur, the waves must
      arrive exactly out of phase. Ok we probably didn’t need to use math to
      arrive at these conclusions, but now we have formulas. From here, we can
      start moving on to solving stuff. Hooray.
    </p>
    <h3 ref="7.2">Unit 7.2: Young's Two-Slit Experiment</h3>
    <p>
      This section is definitely more history than you’re probably used to
      seeing in a physics class, but it sets up the majority of the problems
      you’ll be seeing related to the first half of this section so, here we go.
      Let’s come in with the background that Newton had proven conclusively that
      light was a particle. Young went forward and set up an experiment that
      looked like:
    </p>
    <img src="@/assets/PHYS1C/img375.png" />
    <p>
      Obviously, I really should’ve majored in graphic design, but here we are.
      Essentially, there are two slits a distance d from each other, a screen a
      distance D from the slits, and coherent light moving towards the slits.
      Coherent light simply means that the wavelengths of the light are
      well-defined, and, in this case, will hit the slits in phase. This will
      create a spectrum of bright and dark fringes on the screen, and tells us
      that light exhibits wave-like behavior. Ok, history lesson over, physics
      time. Let’s imagine a point that’s a distance y from the central axis:
    </p>
    <img src="@/assets/PHYS1C/img376.png" />
    <p>
      As we can see above, when looking at that specific point, the light
      travels a different distance from each slit. Let’s start breaking this
      problem down more. Since the two light beams travel a different distance,
      we know that we’ll have to analyze their phase. We can start with:
    </p>
    <img src="@/assets/PHYS1C/img377.png" />
    <p>
      When the waves hit the slits, since they are from the same source of
      coherent light, they must be in phase. The path difference is where all
      the phase differences come from, but it’s gonna be a little harder to
      calculate. We could solve for it with a Taylor Series, but we won’t,
      because Taylor Series are evil. Instead we’ll make a series of
      approximations:
    </p>
    <img src="@/assets/PHYS1C/img378.png" />
    <p>
      Didn’t think this drawing could get worse did ya. Stay with me here. What
      we did here was we swept L1 downwards over to L2 along the red line. This
      allowed us to visualize the path difference ΔL. Then, we take a line from
      the central axis to the point we’re analyzing and call that angle θ. Under
      the assumption that this angle is small, the red line is essentially
      perpendicular to L1, L2, and the blue line. As a result, using some
      geometry and trig, we can say that:
    </p>
    <img src="@/assets/PHYS1C/img379.png" />
    <p>
      Now, let’s start solving for some more formulas. What if we want to look
      at constructive interference at this point? With what we know, we can
      write:
    </p>
    <img src="@/assets/PHYS1C/img380.png" />
    <p>
      Looking at this in the context of the experiment, this makes perfect
      sense. As we said, constructive interference occurs when the wavelengths
      arrive exactly in phase. Since there are an integer number of wavelengths
      in the path difference, this means the waves will still be in phase. What
      else can we get out of this? What if we wanted to know where these maximas
      occurred? Well we could rearrange and use the small-angle approximation to
      say:
    </p>
    <img src="@/assets/PHYS1C/img381.png" />
    <p>
      Once again looking at the experiment, this means we would have a central
      maximum, and then regularly spaced maximas (bright fringes) on either side
      of the central axis. Of course, this was derived using the small-angle
      approximation, so this even spacing won’t hold for the edges of the screen
      (large angles), but for the scope of this class, the evenly spaced maximas
      model works just fine.
    </p>
    <p>
      Let’s look closer at the dimensions that go into this formula. It tells us
      that closer slits (smaller d) will make the maximas appear farther apart
      and a smaller wavelength will result in closer maximas. Ok that wasn’t
      important but it was in my notes so it’s here too.
    </p>
    <p>
      Let’s repeat the same analysis for minimas to analyze destructive
      interference:
    </p>
    <img src="@/assets/PHYS1C/img382.png" />
    <p>
      Once again, it makes sense that our path difference is equal to an odd
      number of half-wavelengths, as this will result in the second wave coming
      in exactly out of phase with the first. Continuing on:
    </p>
    <img src="@/assets/PHYS1C/img383.png" />
    <p>
      This implies that the minimas (dark fringes) occur halfway between the
      maximas, which seems to make sense. One thing to note is that there is no
      central minima, so the n of the minima is a little offset (n = 0 can be
      above or below the central axis). Thankfully, the n you assign to each
      minima or maxima is pretty much arbitrary, so just be careful with that.
    </p>
    <p>
      Well, now that we’ve gotten through all of that, we just need to add one
      more piece to our interference model.
    </p>
    <h3 ref="7.3">Unit 7.3: Reflection</h3>
    <p>
      Think back to waves in 1B, where waves would flip when reflecting off of a
      denser medium. The same concept applies to light. Time for more refraction
      indexes, yay. So let’s modify the definition of our phase difference from
      before:
    </p>
    <img src="@/assets/PHYS1C/img384.png" />
    <p>
      As you can see, we now need to add a term to describe the effects of
      reflection. Thankfully, this is mostly a physical analysis rather than a
      mathematical one. Remember that a wave flipping is the same as adding π to
      the phase. This means that our Δθref term must be π when one wave flips.
      Keep in mind Δθtot is the difference between two waves, so if neither or
      both of them flip, there is no phase difference due to reflection, so
      Δθref is 0.
    </p>
    <p>
      So let’s say we have this wave traveling through a medium with index of
      refraction n. As we know from 1B, the wavelength changes based on the
      medium, and, by extension, the wave number changes. From this, we have
      these equations:
    </p>
    <img src="@/assets/PHYS1C/img385.png" />
    <p>
      One important thing to note about notation is that when mentioning
      “wavelength”, unless specified otherwise, it is referring to wavelength in
      a vacuum.
    </p>
    <p>
      As a side note, there is a section in the book on intensity that I’ve
      elected to skip since it’s not covered in lecture, but I’ll leave you with
      this formula that gives the amplitude (intensity) of waves at a given
      point:
    </p>
    <img src="@/assets/PHYS1C/img386.png" />
    <p>
      Now that we’ve got the foundations down, we can get into the worst section
      in this unit, but, don’t worry, it’s still not that bad.
    </p>
    <h3 ref="7.4">Unit 7.4: Thin Films</h3>
    <p>
      Ok, for these next diagrams we’re going to be exaggerating everything to
      make it possible for me to visualize this for you. Let’s say we have a
      thin film with index of refraction n2 and thickness t, and we shine a
      light on it:
    </p>
    <img src="@/assets/PHYS1C/img387.png" />
    <p>
      Some of that light will reflect off of the film, while the rest will
      penetrate the film, reflect off the bottom, and come out displaced, at the
      same angle as the other ray. This, of course, creates a path difference
      that we have to contend with when analyzing the two emerging rays. Tracing
      out this difference, we see:
    </p>
    <img src="@/assets/PHYS1C/img388.png" />
    <p>
      Ignoring the section where both rays traveled the same path, one ray
      traveled a distance L1 in n1 and the other traveled L2 in n2. A little
      trig later, and we arrive at:
    </p>
    <img src="@/assets/PHYS1C/img389.png" />
    <p>
      Now, analyzing the path difference, we finally see the importance of using
      Δ(kL):
    </p>
    <img src="@/assets/PHYS1C/img390.png" />
    <p>
      Yeesh, long derivation with a lot of math. Don’t worry, that’s basically
      there to scare you. In the context of this class, we can really just say
      that the angles θ1 and θ2 are very small. What this implies is that L1 is
      approximately 0, and therefore, all the path difference comes from L2. As
      a result, we get:
    </p>
    <img src="@/assets/PHYS1C/img391.png" />
    <p>
      And that looks a lot better. Going through the long derivation is a good
      way to get a grip on what is going on inside the film, which is knowledge
      you will need to solve the problems related to this topic, but the math is
      more or less blah blah blah.
    </p>
    <p>
      Time for an example. Refer back to the diagrams if you need to. Let’s
      imagine we needed to make a thin film that was anti-reflective. So, first
      of all, what does that even mean? Well, if the film was anti-reflective,
      then an observer wouldn’t see reflected light. In other words, they must
      see minimas of the reflected light:
    </p>
    <img src="@/assets/PHYS1C/img392.png" />
    <p>
      Now, thinking about how thin film problems work, we know that Δθic is 0,
      since the two rays split at a common point. We also know how to get Δθpath
      for a thin film, so we can write:
    </p>
    <img src="@/assets/PHYS1C/img393.png" />
    <p>
      So now all we need is the Δθref term. Well, remember that the wave only
      picks up a phase shift if it reflects off of a material with higher
      refractive index. Therefore, only the first wave picks up this phase shift
      and we can plug in and solve:
    </p>
    <img src="@/assets/PHYS1C/img394.png" />
    <p>
      Be careful not to confuse your n’s. I think the convention is to use m for
      the order number, but I’m too lazy to go back and re-LaTeX everything, so
      deal with it.
    </p>
    <p>
      As we can see from this result, we’ll get destructive interference if we
      have an integer number of half-wavelengths inside the medium n2. Just like
      before, this physically makes sense, so looks like we’re good here. Not so
      bad right? The most important thing to watch out for is making sure you’re
      careful when determining how many phase shifts actually occur due to
      reflection.
    </p>
    <p>
      One example you can use to test yourself is to analyze what an observer on
      the bottom of this anti-reflective film would see. Doing this will test
      your understanding of ray tracing and reflection, so definitely not a bad
      idea. If done correctly, you should see an inverse relationship between
      the top observer and the bottom observer. This relationship may be useful
      for solving problems related to this topic.
    </p>
    <p>
      An important physical distinction to make is that we’ve been analyzing
      this problem from a normal incidence, saying the rays are practically
      vertical. However, the wavelengths that are reflected by this thin film
      change based on the incidence angle of the observer. If you don’t
      understand why, go back to the diagrams and prove this to yourself before
      moving on.
    </p>
    <p>
      So let’s move on to our final example of this section. This deals with
      something known as interferometry, and is an application of these concepts
      we’ve been dealing with. Imagine we have two anti-reflective glass slides
      separated by a hair with diameter d:
    </p>
    <img src="@/assets/PHYS1C/img395.png" />
    <p>
      Our goal is to find this diameter d. Since the slides are anti-reflective,
      we can ignore the light that would reflect off the top of the top slide
      and the bottom of the bottom slide. Also note that the thin film we’re
      analyzing here is the air between the slides, not the slides themselves.
      Now, let’s look for the dark fringes that appear. Noting that the bottom
      reflection contributes a phase shift of π:
    </p>
    <img src="@/assets/PHYS1C/img396.png" />
    <p>
      So, we know we have a dark fringe every half-wavelength starting from n =
      0. Let’s say m represents the number of dark fringes. Since n starts at 0,
      we have:
    </p>
    <img src="@/assets/PHYS1C/img397.png" />
    <p>
      Now, based on the geometry of the problem, we should assume that the hair
      won’t fall perfectly on a dark fringe, so what we can say is:
    </p>
    <img src="@/assets/PHYS1C/img398.png" />
    <p>
      From this, we can say that we know the diameter of the hair with an error
      of ±λ/4. Bam, application covered.
    </p>
    <p>
      That just about covers it for interference. Hopefully my garbage diagrams
      didn’t confuse you too badly. The rest of this section is pretty easy, so
      don’t get too stressed just yet.
    </p>
    <h3 ref="7.5">Unit 7.5: Diffraction</h3>
    <p>
      Ok, now we’re onto something that isn’t really interference, but is more
      or less conceptually the same so I’m putting it in the same unit. Let’s
      take Young’s two-slit experiment and modify it a little:
    </p>
    <img src="@/assets/PHYS1C/img399.png" />
    <p>
      Instead of two slits a distance d apart, now there’s only one slit of
      width d. Now let’s imagine we want to make a minimum at a point P:
    </p>
    <img src="@/assets/PHYS1C/img400.png" />
    <p>
      Now, if you’re thinking with the two-slit mindset, you might believe you
      could accomplish this by making the waves from the top and bottom of the
      slit arrive out of phase. However, this wouldn’t really be a new topic if
      that were true so let’s try again. This method doesn’t work because you
      must account for all the waves that travel from the middle of the slit,
      which would be varying in phase. Keep up, this diagram’s about to look
      trash:
    </p>
    <img src="@/assets/PHYS1C/img401.png" />
    <p>
      Gross ok. First, we establish that the screen is far away (D is large).
      Next, we draw these rays coming from the top and middle of the slit. We
      know that the phase difference between the green rays is the same as the
      phase difference between the red and blue rays. This applies for any rays
      you draw that are an equal distance away from the green rays, all the way
      down the slit. Knowing this, we can see that in order to get destructive
      interference, we must make the two green rays arrive exactly out of phase,
      and every other ray will follow. Terrible explanation, I know, but
      hopefully you understand. Moving into calculations:
    </p>
    <img src="@/assets/PHYS1C/img402.png" />
    <p>
      Where θ is the angle between the upper ray and central axis. Ok cool, but
      now we gotta expand a little further. As you saw in the diagram above, we
      split the slit into halves. This allowed us to use symmetry to say all the
      waves arrived out of phase. By the same logic, we could split it into
      quarters, right? I’m not drawing that, it’ll just look too awful, even for
      me. Restarting the calculations, we see:
    </p>
    <img src="@/assets/PHYS1C/img403.png" />
    <p>
      As you can see, we start filling in more and more numbers. Continuing to
      divide this slit into even sections, we’ll eventually fill in every
      integer for m, except 0. This means that for a single-slit experiment,
      minimas occur when:
    </p>
    <img src="@/assets/PHYS1C/img404.png" />
    <p>
      Just like in the two-slit experiment, the maximas occur halfway-ish
      between the minimas (halfway for this class). However, notice that the
      lack of m = 0 for the minimas means that the central maximum is
      effectively twice as large as the other maximas. Following the pattern we
      laid out when looking at two-slit, we can keep breaking this formula down
      to get:
    </p>
    <img src="@/assets/PHYS1C/img405.png" />
    <h3 ref="7.6">Unit 7.6: Rayleigh's Criterion</h3>
    <p>
      This is a fairly minor topic that for some reason got like a full lecture
      dedicated to it, so we’re probably going to spend way more time here than
      necessary.
    </p>
    <p>
      Essentially, this criterion deals with something called resolvability.
      This is our ability to distinguish between two distinct objects.
      Obviously, the further you get from two objects, the closer together they
      appear, and eventually, you won’t be able to tell them apart. Why is this
      in a physics class? No clue.
    </p>
    <p>
      Rayleigh’s Criterion states that two objects are barely resolvable when
      the central maximum of one overlaps the first order minimum of the other.
      This is generally used in relation to objects of the same color (same
      wavelength).
    </p>
    <p>
      There’s a derivation for what follows, but I really don’t care, and you
      probably don’t either. You certainly won’t need it for this class, so here
      are the formulas:
    </p>
    <img src="@/assets/PHYS1C/img406.png" />
    <p>
      The top formula applies to rectangular apertures, while the bottom one
      applies to circular apertures. Remember how I said we’re going to spend
      too much time on this? Well I lied. We’re done. There really isn’t much
      (or any) complexity to this section, so have fun plugging and chugging for
      the homework.
    </p>
    <h2 ref="8">Unit 8: Special Relativity</h2>
    <p>
      Now, this section was horribly confusing for me. Everything we’re about to
      learn pretty much goes against all intuition, but, in my opinion, this was
      the most interesting unit in any physics class I’ve taken. On the surface,
      it looks horrible. Past the surface, it still looks horrible. There’s a
      lot of weird math that we’ve never looked at before, so get ready to pick
      up some new concepts at light speed. I should honestly pursue stand-up.
    </p>
    <p>
      The depth to which you get into this material is going to be pretty
      dependent on your professor, so there honestly might only be a few useful
      sections here. They’ll still be hard sections, so buckle up and try not to
      get lost too badly.
    </p>
    <h3 ref="8.1">Unit 8.1: Geometric Transformation</h3>
    <p>
      Ok, getting into this, I’ve actually skipped a lot of the historical
      background and a few examples. I personally find them pretty
      straightforward and useless, so they aren’t gonna be here. Search up
      “luminiferous ether” if you care. We’re just gonna get straight into the
      math.
    </p>
    <p>
      The beginning of this section is generally going to be mathematical
      background for the physics that’s coming up, but it’s nice to get the
      review. Let’s imagine two coordinate systems:
    </p>
    <img src="@/assets/PHYS1C/img407.png" />
    <p>
      Now, let’s say we want to take a coordinate from one system and transform
      it into the coordinate of the other. Welcome back to linear algebra. It’s
      matrix time. In general, we can write:
    </p>
    <img src="@/assets/PHYS1C/img408.png" />
    <p>
      Where M is the matrix responsible for the transformation. Hopefully this
      sounds at least a little familiar so far. Fitting this to our example, we
      have:
    </p>
    <img src="@/assets/PHYS1C/img409.png" />
    <p>
      Writing that in LaTeX is tedious yeesh. Anyways, there are 2 ways to go
      about solving this system. One way is to analyze the geometry of the
      problem, which would be fairly easy here, but not so much for the concepts
      we’re trying to set up, so let’s avoid that method. The other way is to
      constrain the problem based on what we know. Let’s start by multiplying
      these matrices out:
    </p>
    <img src="@/assets/PHYS1C/img410.png" />
    <p>
      Now, let’s figure out our constraints. First of all, we know that the
      magnitude of the resultant vector must be the same as the magnitude of the
      original vector, so:
    </p>
    <img src="@/assets/PHYS1C/img411.png" />
    <p>
      Next, we know that if the coordinate systems are rotated at an angle of
      0º, the coordinates must remain the same, so:
    </p>
    <img src="@/assets/PHYS1C/img412.png" />
    <p>
      Finally, we know that if the coordinate systems are rotated at an angle of
      90º, geometrically, the transformation must be:
    </p>
    <img src="@/assets/PHYS1C/img413.png" />
    <p>
      Verify these constraints if you want, but I’m going to move forward here.
      Taking our first constraint, we see that:
    </p>
    <img src="@/assets/PHYS1C/img414.png" />
    <p>
      Try to reproduce that if you want. Or don’t. I know I wouldn’t. From this
      equation, we get that:
    </p>
    <img src="@/assets/PHYS1C/img415.png" />
    <p>Now, if we rearrange these equations like a madman, we get:</p>
    <img src="@/assets/PHYS1C/img416.png" />
    <p>And if you mesh these all together, you’ll see that:</p>
    <img src="@/assets/PHYS1C/img417.png" />
    <p>Now, we can write the matrix as:</p>
    <img src="@/assets/PHYS1C/img418.png" />
    <p>
      If we take a quick look at the second and third constraints, we can
      resolve the plus-minus symbols and arrive at:
    </p>
    <img src="@/assets/PHYS1C/img419.png" />
    <p>
      Look at all that progress. All that’s left is to solve for A and B. Taking
      a numerical analysis of the second and third constraints, we see that:
    </p>
    <img src="@/assets/PHYS1C/img420.png" />
    <p>And from this, we can finally infer that our matrix is:</p>
    <img src="@/assets/PHYS1C/img421.png" />
    <p>
      Now, if you remember rotations from linear algebra, you might remember
      that the signs on the sine terms were opposite of what was shown above.
      That’s because in linear algebra, we were shifting the coordinate itself,
      while, here, we’re shifting the entire coordinate system. This brings into
      focus the idea of frames of reference, which we’ll be dealing with a lot
      in this section.
    </p>
    <p>
      Ok so don’t bother memorizing any of what we just did above, there’s no
      point. You just need to become familiar with this concept in an example
      that you can easily visualize. From here, we’re going to actually dive
      into the physics.
    </p>
    <h3 ref="8.2">Unit 8.2: Galilean Transformation</h3>
    <p>
      To start this off, we’re going to introduce something that we’ll be
      discussing for a while: space-time events. Essentially this is something
      that happens somewhere and somewhen. We’ll represent it with the
      following:
    </p>
    <img src="@/assets/PHYS1C/img422.png" />
    <p>
      There’s a couple things we should clarify here. One, the underline under
      the r simply indicates this is a 4-dimensional value. The other is the ct
      you see there. Since this is a vector, we need all the components to be
      related by units. Since we want to be able to look at time in this
      context, we can use the speed of light, which is constant in all inertial
      frames of reference, as a way to convert time to distance. Now that we’ve
      introduced that, let’s introduce a diagram that we’ll see a lot:
    </p>
    <img src="@/assets/PHYS1C/img423.png" />
    <p>
      Oh I’m framing that one. Anyways, this is a visualization of the
      rocket-frame (S’) and the lab-frame (S) – our two frames of reference.
      Essentially, we’re pretending that a rocket is flying through a lab at
      high speeds. The axes are really overlapping so that O = O’ in the
      beginning, but that would be impossible to draw, so just use your
      imagination. For future sanity checks, it’s important to note that β is a
      unitless quantity that is less than 1 (nothing’s faster than c).
    </p>
    <p>
      Now, let’s incorporate what we learned in the previous section. Knowing we
      want to be able to convert between the lab-frame and the rocket-frame, we
      can write:
    </p>
    <img src="@/assets/PHYS1C/img424.png" />
    <p>
      Awesome. I hate it. Don’t worry, we won’t have to deal with it much.
      Imagine the situation we described where the rocket flies through the lab.
      Assuming we can orient the lab in the direction of the rocket’s path, the
      y and z components of the lab should be identical to the y’ and z’ of the
      rocket. This then simplifies down to:
    </p>
    <img src="@/assets/PHYS1C/img425.png" />
    <p>
      Now, we really only need to focus on the top-left four elements. Let’s
      write it that way so it looks less scary:
    </p>
    <img src="@/assets/PHYS1C/img426.png" />
    <p>
      Much like the geometric transformation from earlier, we’re going to need 3
      constraints to solve this.
    </p>
    <p>
      The first constraint is that time is the same in both frames, or t = t’.
      The second is, initially, distance is the same in both frames, or at t =
      t’ = 0, x = x’. And finally, we have that velocity is well-defined, or O’
      moves in S with velocity v. Don’t overthink these, they mean what you
      think they do. Now, multiplying the matrix out, we have:
    </p>
    <img src="@/assets/PHYS1C/img427.png" />
    <p>Following the first constraint in the first equation tells us that:</p>
    <img src="@/assets/PHYS1C/img428.png" />
    <p>Next, taking the second constraint with the second equation, we have:</p>
    <img src="@/assets/PHYS1C/img429.png" />
    <p>
      So far, this transformation looks a lot like an identity matrix. However,
      if it were, then there’d be no transformation happening and I would’ve
      written this section for nothing. To find this last value, let’s take a
      look at the rocket-frame’s origin in the context of our transformation:
    </p>
    <img src="@/assets/PHYS1C/img430.png" />
    <p>
      Essentially, at some time t = t’, the origin of the rocket-frame is at,
      well, the origin in the rocket-frame, which is where the 0 comes from.
      Duh. In the lab-frame, the rocket has moved vt along the x axis assuming a
      constant speed. Should also be duh. Multiplying this out, we get:
    </p>
    <img src="@/assets/PHYS1C/img431.png" />
    <p>
      The first equation shows us that we’re still satisfying our first
      constraint which is great. Solving the system, we arrive at:
    </p>
    <img src="@/assets/PHYS1C/img432.png" />
    <p>And finally, putting this all together, we get:</p>
    <img src="@/assets/PHYS1C/img433.png" />
    <p>
      This is the Galilean Transformation, named because the constraints used to
      solve for it were created by Galileo. Fun history lesson mid-topic, that’s
      right. The subscript 2 is there to denote that this is the 2-dimensional
      form of the transformation.
    </p>
    <p>
      Now that we have that, let’s start putting random stuff into the rocket.
      Let’s say a [insert your favorite animal here] was running through the
      rocket at velocity u:
    </p>
    <img src="@/assets/PHYS1C/img434.png" />
    <p>
      At this point, you should be able to fill out the space-time events and
      multiply without explanation from me. Just take a given frame and get the
      time component and spatial component relative to that frame:
    </p>
    <img src="@/assets/PHYS1C/img435.png" />
    <p>
      Do I know why I switched the t’s for Δt’s? Of course not! Just go with it.
      Well once again, the first equation tells us nothing new. In the second
      equation, you can cancel out all the Δt’s due to our first constraint and
      replace βc with v. This leaves us with:
    </p>
    <img src="@/assets/PHYS1C/img436.png" />
    <p>
      This tells us that the speed of the animal with respect to the lab is
      equal to the sum of the speed of the rocket with respect to the lab and
      the speed of the animal with respect to the rocket. Maybe you remember
      that from mechanics. I sure don’t, but it’s somewhat common sense.
    </p>
    <p>
      Now, let’s stop abusing this animal and shoot a photon down the rocket
      instead:
    </p>
    <img src="@/assets/PHYS1C/img437.png" />
    <p>
      I don’t know why this image’s quality gets worse every time, but whatever.
      If you’ve made it this far, you know by now that quality is not my
      specialty. Anyways, if we follow Galileo’s conventions, we arrive at the
      conclusion that:
    </p>
    <img src="@/assets/PHYS1C/img438.png" />
    <p>
      Well then. Something’s obviously wrong here. Turns out that Galileo’s
      constraints are wrong. So basically, this section was a complete waste.
      Not really, but we do need to fix this discrepancy.
    </p>
    <h3 ref="8.3">Unit 8.3: Lorentz Boost</h3>
    <p>
      The culprit of this contradiction is Einstein’s postulate that states the
      speed of light must be the same in all inertial frames of reference. This
      is clearly in disagreement with Galilean physics. Let’s delve into
      Einsteinian physics instead.
    </p>
    <p>
      We’ll start by rewriting Galileo’s 3 constraints. We need to keep the 3rd
      constraint, otherwise we lose the definition of velocity and we can’t have
      that. Other than that, we remove the first 2 constraints and add
      Einstein’s postulates. The first of which is that the speed of light is
      the same in all inertial frames of reference. The second is that the laws
      of physics are upheld in all inertial frames of reference. If you are
      paying attention, you’ll notice that we lost the constraints that time is
      the same in both frames and distance is the same in both frames. Those
      will come up soon.
    </p>
    <p>
      Let’s imagine we launch a photon down the rocket. We can write our
      space-time events as:
    </p>
    <img src="@/assets/PHYS1C/img439.png" />
    <p>
      If you’re confused about why both terms in each event are the same,
      remember that the speed of the photon is c and distance is speed times
      time. Let’s see where we get with this:
    </p>
    <img src="@/assets/PHYS1C/img440.png" />
    <p>
      Hopefully you get what we did there, it shouldn’t be anything new at this
      point. Now that we have one equation to work with, let’s try to get
      another. Let’s reverse the direction of the photon, leaving us with:
    </p>
    <img src="@/assets/PHYS1C/img441.png" />
    <p>
      Now with our second equation, we can add the two together and see that:
    </p>
    <img src="@/assets/PHYS1C/img442.png" />
    <p>
      Now, let’s repeat what we did for the Galilean Transformation with the
      third constraint to get:
    </p>
    <img src="@/assets/PHYS1C/img443.png" />
    <p>
      Unlike before, we can’t say that the Δt’s are equal, so let’s divide the
      equations instead to get:
    </p>
    <img src="@/assets/PHYS1C/img444.png" />
    <p>This means we can actually write our transformation as:</p>
    <img src="@/assets/PHYS1C/img445.png" />
    <p>
      We denote this with an L because this is called the Lorentz Boost since it
      was actually Lorentz who came up with this transformation, but it was
      Einstein who justified it. I’m sure you totally care.
    </p>
    <p>
      Anyways, now we need to work with our final constraint: the laws of
      physics apply in all frames of reference. What this means in our context
      is that if the Lorentz Boost can transform from the lab-frame into the
      rocket-frame, it must also be able to transform from the rocket-frame into
      the lab-frame. We can therefore write:
    </p>
    <img src="@/assets/PHYS1C/img446.png" />
    <p>
      The first equation says that the rocket is moving through the lab with a
      velocity β. The second says that the lab is moving through the rocket at a
      velocity –β. Sure ok. We can substitute for r and get:
    </p>
    <img src="@/assets/PHYS1C/img447.png" />
    <p>
      As we can see, the matrix we end up with is perfectly in the form of the
      identity matrix. All that’s left is to solve for L00(β). Instead of
      walking through that math, we’re just going to say:
    </p>
    <img src="@/assets/PHYS1C/img448.png" />
    <p>
      This quantity is given the symbol γ, and is known as the Lorentz Factor.
      Putting together everything we’ve derived from these constraints so far,
      we see:
    </p>
    <img src="@/assets/PHYS1C/img449.png" />
    <p>
      Now, you may be wondering why we derived G2 if it’s just wrong. Well, it
      isn’t exactly wrong, it just only applies to non-relativistic (low)
      speeds. Imagine our rocket was moving at a low speed:
    </p>
    <img src="@/assets/PHYS1C/img450.png" />
    <p>Note that if β &lt;&lt; 1, then γ = 1. Therefore, we can write:</p>
    <img src="@/assets/PHYS1C/img451.png" />
    <p>
      You probably noticed that we dropped the β term from the first equation,
      but not from the second. Notice that the second equation multiplies β by
      c. Even if β is really small, c is very large, so the term isn’t
      negligible. Now, if we take the Galilean Transformation:
    </p>
    <img src="@/assets/PHYS1C/img452.png" />
    <p>
      We notice that our equations are the same, and we’ve proved the Galilean
      Transformation agrees with the Lorentz Boost at β &lt;&lt; 1. There we go.
      That’s all the intensive math done for now. Hopefully you’ve understood at
      least 50% of what we’ve done to get here. We can finally get into the
      reality-shattering, interesting stuff in the next section.
    </p>
    <h3 ref="8.4">Unit 8.4: Time Dilation</h3>
    <p>
      Now, if you take a look at the L2 we previously derived, we can see that
      the β’s are responsible for mixing space into time and vice versa. This
      means that what we view as space in one frame of reference may be both
      space and time in another. This is going to make it possible for us to
      treat c as a constant, regardless of the frame of reference.
    </p>
    <p>
      Let’s try to get to some of the consequences of this space-time mixture.
      Imagine we attach a light that flashes every Δt’ seconds onto the rocket:
    </p>
    <img src="@/assets/PHYS1C/img453.png" />
    <p>Breaking this down into events, we get:</p>
    <img src="@/assets/PHYS1C/img454.png" />
    <p>
      Take the time to make sure you know how we got here please. Let’s put
      these events into the Lorentz Boost:
    </p>
    <img src="@/assets/PHYS1C/img455.png" />
    <p>
      Now, let’s start breaking down these equations to see what they tell us.
      From the first one, we get:
    </p>
    <img src="@/assets/PHYS1C/img456.png" />
    <p>
      This tells us that for every second in the rocket, γ seconds pass in the
      lab. Imagine γ was 60, and we have a pair of twins. We put one twin in the
      rocket and send them off. If they move forward for a year at the given
      speed, the twin in the lab will have aged 60 years. Wild.
    </p>
    <p>
      Now, here’s where your intuition might start to break. Remember that the
      laws of physics apply to all frames of reference. That means that the
      opposite of this must also be true, since, from the rocket’s perspective,
      it’s the lab that’s moving. So, for every year in the lab, 60 years has
      also passed in the rocket. That really just doesn’t make sense, but it’s
      true. The meaning of time has completely changed here. You may wonder,
      then, what happens if the rocket twin turns around and comes back to the
      lab twin? Well, by doing that, the rocket breaks the foundation we’ve
      built up to get here since they’ve accelerated, so let’s not worry about
      that.
    </p>
    <p>
      This concept, called time dilation, is summarized as “moving clocks run
      slow”. If the temporal interval between two events in the frame in which
      they are co-located, which is called the rest frame, is Δt’, the temporal
      interval in which that rest frame moves with β is γΔt’. To provide some
      clarification, the frame in which events are co-located is the frame in
      which the event is not moving.
    </p>
    <p>
      One very important thing to remember is that this only works when the
      event that is occurring occurs at the same position within the rest frame.
      If the event moves within the rest frame, then the spatial components mix
      in with the temporal components and everything gets more confusing
      somehow.
    </p>
    <h3 ref="8.5">Unit 8.5: Length Contraction</h3>
    <p>
      Now, let’s take the opposite-ish of that. Instead of an event that is
      constant in space, we’ll take two events that are simultaneous, or
      constant in time:
    </p>
    <img src="@/assets/PHYS1C/img457.png" />
    <p>Writing these as events once again, we have:</p>
    <img src="@/assets/PHYS1C/img458.png" />
    <p>
      Now we’re going to something we totally haven’t done ever before and apply
      the Lorentz Boost:
    </p>
    <img src="@/assets/PHYS1C/img459.png" />
    <p>
      You can see that, despite the events being simultaneous in the
      rocket-frame, cΔt is non-zero in the lab-frame. Wild Part 2: Electric
      Boogaloo. Some of the space in the rocket-frame has translated to time in
      the lab-frame. Simultaneity is relative.
    </p>
    <p>
      Now, you should also see that the distance has a scaling factor attached
      to it. Let’s think about this. When you make a length measurement, you are
      performing 2 simultaneous events: finding the front of the object, and
      finding the back of the object. Now that we know simultaneity is relative,
      we know that relativistic motion is going to mess with this measurement.
      When we take a measurement in the lab-frame, we are performing 2
      simultaneous events in the lab-frame:
    </p>
    <img src="@/assets/PHYS1C/img460.png" />
    <p>
      Ok, so we did a couple steps there without explanation, but we’ve done it
      all before, so hopefully you can follow what we’re doing. Let’s take the
      last 2 equations and solve:
    </p>
    <img src="@/assets/PHYS1C/img461.png" />
    <p>
      In English, we can say that “moving sticks are shortened along the
      direction of motion”. If you think about this physically, you should be
      able to prove to yourself that this is true. This is called length
      contraction. Remember that this only works for simultaneous events.
    </p>
    <p>
      Let’s try to put what we’ve learned so far into an example. Imagine a
      really fast runner carrying a 20 ft. pole and a 5 ft. long hallway with
      doors on either end:
    </p>
    <img src="@/assets/PHYS1C/img462.png" />
    <p>
      Now that drawing is what we in the industry call “terrible” and “not to
      scale”, but you get the idea. We’ll interpret this as the runner in the
      rocket-frame and the hallway in the lab-frame. The question is, if the
      runner is running at a speed such that their γ is 10, is it possible to
      close both doors of the hallway at the same time while they’re running
      through it?
    </p>
    <p>
      Now, taking this with basic length contraction analysis from the hallway’s
      perspective, you’ll find that the length of the pole is essentially 2 ft.
      to the hallway, so the answer is yes. However, taking it from the runner’s
      perspective, we find that the length of the hallway is essentially ½ ft.
      to the runner, so the answer is no.
    </p>
    <p>
      Well that can’t be right. Remember that we are constrained by the doors
      closing simultaneously in the lab-frame. However, the doors do not close
      simultaneously in the rocket-frame. As a result, the answer is in fact
      yes. Although it is true that the pole cannot fit in a ½ ft. space, it
      doesn’t have to. The doors do not close at the same time for the runner.
    </p>
    <p>Relativity is wack.</p>
    <h3 ref="8.6">Unit 8.6: Relativistic Velocity</h3>
    <p>
      Ok, let’s break velocity. Going back to our trusty image, let’s fire a
      photon in the rocket-frame:
    </p>
    <img src="@/assets/PHYS1C/img463.png" />
    <p>
      Now, just like always, we’ll write out space-time intervals for this
      photon and Lorentz Boost them, except we’re going to have to use the
      4-vector version this time:
    </p>
    <img src="@/assets/PHYS1C/img464.png" />
    <p>
      Now, I want to point something out that we’ll deal with later. The
      4-vectors you see above are not legitimate 4-vectors. By definition, a
      4-vector must transform correctly under the Lorentz Boost. However, due to
      the Δt scalars, these don’t. This tells us that we can’t really model our
      classical definition of velocity as a 4-velocity. We’ll cover some of that
      in the next section though. For now, let’s just continue on:
    </p>
    <img src="@/assets/PHYS1C/img465.png" />
    <p>
      That doesn’t exactly look fun. We can actually get straight to our final
      formulas from here by dividing by the temporal component of our velocity.
      We’ll end up with 2 formulas – one for the component parallel to the
      direction of v (x-direction), and one for the components perpendicular (y
      and z-direction):
    </p>
    <img src="@/assets/PHYS1C/img466.png" />
    <p>
      I don’t know about you, but I wouldn’t exactly call these formulas
      user-friendly, so let’s do a problem to get ourselves familiar with them.
      We’ll take 2 rockets flying away from the Earth:
    </p>
    <img src="@/assets/PHYS1C/img467.png" />
    <p>
      Make sure you make note of what the given speeds are relative to. Now,
      this example is exactly why we needed to have this discussion on velocity.
      If we were to take a non-relativistic approach and use Galileo’s
      intuition, we might say rocket B is moving at 1.4 times the speed of
      light, which is just clearly wrong.
    </p>
    <p>
      To do this the right way, let’s look at what we’ve got. First thing to
      notice is that the velocities are all in the x-direction, so we can ignore
      the perpendicular formula. Now, we just need to figure out what’s what.
      Since rocket B is relative to rocket A, which is also moving, rocket B is
      going to be the object moving in the rocket-frame. That makes rocket A the
      rocket-frame and the Earth the lab-frame. Plugging our values into the
      formula, we get:
    </p>
    <img src="@/assets/PHYS1C/img468.png" />
    <p>
      So, as you can see, once you know how to set up the components for these
      formulas, it really isn’t too hard to solve these types of problems. It’s
      all about defining your frames and figuring out what velocity is what.
    </p>
    <p>
      Congratulations! You’ve finished all the material for 1C! We’ve now capped
      off relativistic kinematics with our discussion on velocity and that means
      there’s no more material you need to know. But wait, then why are there 3
      more sections? Because Corbin is cruel that’s why. I have to cover those
      for my final, so I’m writing them up as well. If you also have to cover
      them, misery loves company, so please join me on the last leg of our
      journey.
    </p>
    <p>
      If you don’t have to learn them, well, good on ya. I wish you the best of
      luck in life and thank you for using this guide, skip ahead to the
      practice problems and read the afterword if you either have a heart, love
      puppies, or don’t want to die alone. Otherwise, well, we see your true
      colors now.
    </p>
    <h3 ref="8.7">Unit 8.7: 4-Momentum</h3>
    <p>
      Now, before we start our dive into this new section, we have to go back to
      an issue we ran across in the previous section: validity of 4-vectors. In
      reality, this is probably going to just be an introduction into what a
      4-vector really is.
    </p>
    <p>
      You may be wondering why I didn’t just make this a separate section. Well,
      since there are now probably 0 of you reading this since we’re in optional
      material now, I get to care less about what makes sense. Not that I really
      cared in the first place judging from 90% of this guide’s content.
    </p>
    <p>
      Ok back to physics. The big thing we’re going to be using to judge
      4-vectors is the fact that all vectors’ inner-products are invariant,
      regardless of frame. What this means is:
    </p>
    <img src="@/assets/PHYS1C/img469.png" />
    <p>
      This property must hold if u and v are valid 4-vectors. Now, you may be
      wondering what the inner-product of a 4-vector is. For reasons we won’t
      derive here, it is:
    </p>
    <img src="@/assets/PHYS1C/img470.png" />
    <p>
      Now, we’ve been talking a lot about how space mixes with time depending on
      your frame of reference. I think, instinctually, we view this as a classic
      coordinate axis. However, this inner-product tells us that it can’t be a
      flat axis like we’re used to, otherwise the inner-product would simply be
      Euclidian. This product tells us that the space-time fabric is actually a
      curved structure.
    </p>
    <p>
      So with this foundation, let’s start working our way into dynamics. Since
      the inner-product of 4-vectors is the same, the inner-product of our
      space-time 4-vector is gonna be important, let’s start there:
    </p>
    <img src="@/assets/PHYS1C/img471.png" />
    <p>Since this quantity is so important, we give it a formal definition:</p>
    <img src="@/assets/PHYS1C/img472.png" />
    <p>
      Here, the τ is called the proper time. Proper time defines the time
      between events in the frame in which they are co-located. Remember that
      there is only one frame in which a given set of events is co-located. Due
      to yet another derivation I’m going to skip, we can write this simply as:
    </p>
    <img src="@/assets/PHYS1C/img473.png" />
    <p>Where γu represents the γ of an object moving through the lab.</p>
    <p>
      Ok what does this help us with? Well, to do dynamics, we have to be able
      to talk about 4-velocity. We noted that we can’t define velocity like we
      normally would, because that resulted in an invalid 4-vector. Since proper
      time is simply a scaling factor and space-time is a valid 4-vector, let’s
      redefine it as follows:
    </p>
    <img src="@/assets/PHYS1C/img474.png" />
    <p>
      Now, this adds another dimension of complexity, as we now have to find the
      proper time whenever we want to define velocity. But what if we didn’t?
      Using chain rule, we can rewrite this as:
    </p>
    <img src="@/assets/PHYS1C/img475.png" />
    <p>
      We can prove this is in fact a valid representation of 4-velocity.
      However, we will not, because we are lazy. We will instead point out that
      the 4-velocity of any particle with mass is c, and the 4-velocity of any
      massless particle is 0.
    </p>
    <p>
      Now, we’re one step closer to dynamics. Knowing mass is a scalar and
      constant in all frames of reference, we can define 4-momentum as follows:
    </p>
    <img src="@/assets/PHYS1C/img476.png" />
    <p>
      Notice the shorthand version of the 4-velocity. Make sure that, if you use
      this shorthand, you don’t confuse it for a 2-D vector, the u still has 3
      components. If we multiply this out, the spatial component ends up being:
    </p>
    <img src="@/assets/PHYS1C/img477.png" />
    <p>
      You may recognize this as one of the formulas I pulled out of thin air
      when we were discussing light pressure. As we now know, relativistic
      topics generally require a lot of correction of classical mechanics, this
      just happens to be one of them. Looking at the temporal component, we can
      write:
    </p>
    <img src="@/assets/PHYS1C/img478.png" />
    <p>
      Part of that probably looks familiar to you. It’ll look even more familiar
      when we Taylor Expand (EWWWWWW) the denominator:
    </p>
    <img src="@/assets/PHYS1C/img479.png" />
    <p>
      Very familiar indeed. In fact, the temporal component of momentum is E/c.
      We can now rewrite the 4-momentum:
    </p>
    <img src="@/assets/PHYS1C/img480.png" />
    <p>If the given particle was at rest, we can say:</p>
    <img src="@/assets/PHYS1C/img481.png" />
    <p>
      From here, we can use the fact that the inner-product must be invariant to
      write:
    </p>
    <img src="@/assets/PHYS1C/img482.png" />
    <p>
      Regardless of the speed of a given particle, the 4-momentum of that
      particle is m2c2. This is an incredibly important relationship that we’ll
      be working with a lot in the remainder of the unit. For now though, we’ll
      close out this section by looking at this equation for photons (massless
      particles):
    </p>
    <img src="@/assets/PHYS1C/img483.png" />
    <p>
      And now, we’ve derived both the equations we made up for light pressure.
      Don’t worry, hard stuff coming up.
    </p>
    <h3 ref="8.8">Unit 8.8: Relativistic Dynamics</h3>
    <p>
      The goal of this section is to start applying the very abstract foundation
      we created in the last one. Let’s imagine an elastic collision between 2
      particles:
    </p>
    <img src="@/assets/PHYS1C/img484.png" />
    <p>
      That’s kinda like a before and after type of deal right there. We want to
      find m3. Now, we’d expect the masses to just add up. We should also know
      by now that nothing’s gonna be that easy. Let’s take a deep dive, starting
      with 4-momentum being conserved:
    </p>
    <img src="@/assets/PHYS1C/img485.png" />
    <p>
      For a lot of these examples, the hardest part is figuring out the first
      step. In this case, we’re going to take the inner-product of both sides
      (square both sides):
    </p>
    <img src="@/assets/PHYS1C/img486.png" />
    <p>
      So far, just a little algebra. Now, we can use the relationship we
      described from the last section to substitute:
    </p>
    <img src="@/assets/PHYS1C/img487.png" />
    <p>
      Now, we’re going to need to get a little more information out of this
      problem to solve from here. Since m2 is at rest, we know its energy is
      equal to its rest energy, and it has no 3-momentum:
    </p>
    <img src="@/assets/PHYS1C/img488.png" />
    <p>We can use a little more of what we know to get rid of the E1 term:</p>
    <img src="@/assets/PHYS1C/img489.png" />
    <p>
      So as we can see, some of the kinetic energy of the original particle
      becomes mass. Energy and mass are intertwined. This idea that we just
      derived is part of the purpose of particle accelerators.
    </p>
    <p>
      Now let’s move on to another problem. Let’s take 2 photons and make them
      collide. In theory we should get a particle out of this. Let’s see:
    </p>
    <img src="@/assets/PHYS1C/img490.png" />
    <p>
      So, I skipped a step there, but you should be fine, same setup as last
      time. Now, the difference here is that the original particles have no mass
      since they’re photons. Therefore:
    </p>
    <img src="@/assets/PHYS1C/img491.png" />
    <p>
      From there, we can apply our Physics 1A knowledge to simplify a little
      further:
    </p>
    <img src="@/assets/PHYS1C/img492.png" />
    <p>So how do we find the magnitude of these momentums? Well, recall:</p>
    <img src="@/assets/PHYS1C/img493.png" />
    <p>So, for a massless particle, we have:</p>
    <img src="@/assets/PHYS1C/img494.png" />
    <p>
      There we go. Mathematically, we’ve proven that we can make mass out of 2
      photons smashing into each other. Now, let’s take a look at something a
      little different. Let’s say a particle at rest decays, resulting in 2
      particles in motion:
    </p>
    <img src="@/assets/PHYS1C/img495.png" />
    <p>
      Now, we don’t know exact information on the directions of the resultant
      particles, but we know they are opposite by conservation of momentum.
      Let’s say our goal is to find the energy of particle 2. Setting up, we
      have:
    </p>
    <img src="@/assets/PHYS1C/img496.png" />
    <p>
      Now, for problems like this where there are 2 particles in the instant
      you’re analyzing, it’s often helpful to solve for the particle you aren’t
      interested in:
    </p>
    <img src="@/assets/PHYS1C/img497.png" />
    <p>
      As you can see, solving for the other particle allows that particle to
      only appear once in the equation, resulting in:
    </p>
    <img src="@/assets/PHYS1C/img498.png" />
    <p>
      Taking advantage of the fact that the original particle is at rest, we
      have:
    </p>
    <img src="@/assets/PHYS1C/img499.png" />
    <p>
      There we go. Hopefully, by now you’re seeing that this looks complicated,
      but it really isn’t too hard. For the most part, it’s remembering your
      conditions and being careful with your algebra. Let’s take a look at what
      is probably the most complex thing you’ll see:
    </p>
    <img src="@/assets/PHYS1C/img500.png" />
    <p>
      Essentially, 2 particles are going to collide and a third is going to be
      formed without changing the mass of the other 2. We want to find the
      minimum energy of particle 1 that makes this possible. Starting off:
    </p>
    <img src="@/assets/PHYS1C/img501.png" />
    <p>
      Now, here’s where things get iffy. Neither of the starting methods we’ve
      done so far will work here. In cases like this, what we want to do is find
      a way to work in the simplest possible frame available. Recall from
      Physics 1A:
    </p>
    <img src="@/assets/PHYS1C/img502.png" />
    <p>
      As you can see from that, the simplest frame possible would be the frame
      of the center of mass, since the velocity of the center of mass in the
      center of mass frame is 0, leading net 3-momentum to be 0. We can
      manipulate the inner-product to allow us to shift frames since the
      inner-product is invariant between frames:
    </p>
    <img src="@/assets/PHYS1C/img503.png" />
    <p>
      Now, remember we’re looking for the minimum energy requirement. As a
      result, the final particles should all be stationary, as motion requires
      energy that we don’t need to account for. If we cancel some things out and
      use the fact that the particles are all at rest in the center of mass
      frame, we get:
    </p>
    <img src="@/assets/PHYS1C/img504.png" />
    <p>
      And that brings us to the end of general cases of relativistic dynamics. A
      lot of stuff to keep track of, but nothing too insanely hard here.
    </p>
    <p>
      Well done, we’re in the endgame now. Only one more section. Are you hyped?
      I’m hyped.
    </p>
    <h3 ref="8.9">Unit 8.9: Compton Scattering</h3>
    <p>
      Compton Scattering is a phenomenon with a very similar setup to our other
      dynamics examples:
    </p>
    <img src="@/assets/PHYS1C/img505.png" />
    <p>
      We have a photon colliding with an electron initially at rest. The thing
      that makes this problem interesting is that the wavelength of the photon
      changes upon collision. This gives us an extra element to analyze while
      we’re working with this problem. Let’s start as usual:
    </p>
    <img src="@/assets/PHYS1C/img506.png" />
    <p>
      As we said before, we want to solve for the particle we’re not interested
      in. Since the photon is the one exhibiting interesting behavior, we’ll
      solve for the electron:
    </p>
    <img src="@/assets/PHYS1C/img507.png" />
    <p>Taking the inner-product of both sides:</p>
    <img src="@/assets/PHYS1C/img508.png" />
    <p>
      I’m willing to bet you didn’t keep up with that simplification in that
      last step. I wouldn’t concern yourself too much with the details, you’ve
      got the derivation right here right? Anyways, if we remember that the
      3-momentum of a massless particle is E/c, we can simplify even further:
    </p>
    <img src="@/assets/PHYS1C/img509.png" />
    <p>
      Now, with what we’ve covered so far, nothing here can really tell us
      anything about the wavelength. So let’s pull in a relationship you
      probably learned in high school:
    </p>
    <img src="@/assets/PHYS1C/img510.png" />
    <p>
      If you’re wondering what the new Greek letter is, that’s the same thing as
      frequency. Anyways, this relationship discovered by Planck describes the
      energy of electromagnetic waves, not mechanical waves. Plugging this into
      our previous equation, we can get to our final relationship:
    </p>
    <img src="@/assets/PHYS1C/img511.png" />
    <p>
      Of course, if you haven’t picked up on it yet, the mass here is referring
      to the mass of an electron, considering it’s the only particle with mass
      in this system.
    </p>
    <p>
      Now, if your professor is on the same schedule Corbin was on, you’ll have
      approximately 15 minutes from here to discuss the relativistic form of
      Doppler Effect. Since this 15 minute discussion really wasn’t very
      informative, I don’t have anything to say about it. I’m pretty confident
      in saying that the most helpful thing I can do for you regarding that is
      leave you with the equation:
    </p>
    <img src="@/assets/PHYS1C/img512.png" />
    <p>
      And that’s that. It’s been one hell of a journey, thanks for sticking
      around. Now, there’s just one more page to read (pls read it).
    </p>
    <h2 ref="after">Afterword</h2>
    <p>
      Hi, if you’re reading this you’re already one of my favorite people. I’m
      proud of you for making it through this. Hopefully you didn’t just rely on
      me for your grade because I’m really not too optimistic about my
      college-level physics tutoring skills, especially on a writeup like this.
    </p>
    <p>
      If you’re anything like me, you’re in the middle of celebrating never
      having to take another physics class again. I’m writing this as I pray for
      a B in my 1C class (I got an A!), I can only hope that you’ve done better.
      All things considered, I feel like I did a decent job of putting the
      entirety of the course material into this writeup. I do hope I was able to
      help you in some way, but I’m not expecting this to have been a perfect
      experience by any means.
    </p>
    <p>
      Speaking of, I’m sure there’s a lot of things I could’ve done better
      throughout this guide, this was the first one I completed, so a lot of
      troubleshooting happened in the middle of writing it. If you have
      feedback/errors to report, I’d love to hear about it.
    </p>
    <p>
      I wish you good luck on whatever you’re headed to next, and if you happen
      to run into one of my guides again, well, you’ll know what to expect.
    </p>
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