<template>
  <div class="home">
    <h1>CZhangy's Survival Guides</h1>
    <hr />
    <p>Hi there, and welcome to my survival guides!</p>
    <p>
      To be honest, I'm not really sure why I did all this — finals + quarantine
      stress, I guess. My idea was to make an outline for all of the major
      related classes I would take. I figured it would be nice to get some
      advice from another student’s perspective. I did this for 3 quarters
      before I crashed, but the fruits of my (short-term) labors are here for
      you to use. Before you click on anything though, I wanted to give you a
      little insight as to what you're getting yourself into.
    </p>
    <p>
      As to how credible I am, I’m really not. I’m just an average student that
      happens to get a kick out of writing stuff like this. My final grade will
      be in each guide so you know what level of competence you’ll be looking at
      (hint: not much). Talking through major assignments and topics like this
      really helps me out, so maybe it could help others too. Teaching really is
      the best way to learn. Hopefully you learn from my many mistakes. If
      reading my stuff gives you just one more point, I’ll consider this a
      success.
    </p>
    <p>
      Do keep in mind that I wrote these as I’m taking these classes, and, even
      now, I have by no means mastered the material. Definitely don’t use this
      as a substitute for lectures, taking notes, etc. unless you want your
      grade to be in the hands of some random nerd that doesn’t have nearly
      enough time or IQ to justify doing this. I’m not even going to bother
      trying to hide that, yes, these guides have a low ceiling. I wrote them,
      what did you expect? They won’t carry you through the class no matter what
      you do with them. However, you can still try to get something out of them.
      Skimming them will be just fine if you get the concepts already and need a
      small reminder. Otherwise, you should pay attention to what I write, some
      of it has to be important right?
    </p>
    <p>
      Keep in mind, as I was writing these, I was pretty tired. There are a lot
      of pages, and I’m sure that comes with a lot of grammar/formatting
      mistakes too. Help me out by reporting some of those to me if you can.
      More importantly, give me feedback! Stuff that makes sense to me isn’t
      always gonna make sense to you and I need to work on that. Help me help
      you.
    </p>
    <p>
      As a final note, please feel free to check out my
      <a href="https://czhangy.io" target="_blank">personal website</a> to learn
      more about yours truly, and see what else I'm up to.
    </p>
    <p>Also I have a really dumb sense of humor so. There’s that.</p>
    <div>
      <router-link to="/CS33">
        <div class="nav-button">
          <i class="fa fa-desktop" aria-hidden="true"></i>CS 33: Intro to
          Computer Organization
        </div>
      </router-link>
      <router-link to="/CSM51A">
        <div class="nav-button">
          <i class="fas fa-microchip"></i>CS M51A: Logic Design of Digital
          Systems
        </div>
      </router-link>
      <router-link to="/CS131">
        <div class="nav-button">
          <i class="fab fa-python"></i>CS 131: Programming Languages
        </div>
      </router-link>
      <router-link to="/CS180">
        <div class="nav-button">
          <i class="fas fa-cog"></i>CS 180: Intro to Algorithms and Complexity
        </div>
      </router-link>
      <router-link to="/MATH61">
        <div class="nav-button">
          <i class="fas fa-divide"></i>MATH 61: Intro to Discrete Structures
        </div>
      </router-link>
      <router-link to="/PHYS1C">
        <div class="nav-button">
          <i class="fas fa-atom"></i>PHYS 1C: Electrodynamics, Optics, and
          Special Relativity
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
.home {
  // Spacing
  padding: 0 calc(clamp(4rem, 2.4rem + 6.4vw, 8rem));
  // Sizing
  width: 100%;

  div {
    // Flexbox for layout
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    // Spacing
    margin: 3rem 0;
    padding-bottom: 4rem;

    a {
      // Remove default styling
      text-decoration: none;
    }

    .nav-button {
      // Button styling
      background: #2774ae;
      border-radius: 100px;
      // Typography
      font-size: calc(clamp(1rem, 0.6rem + 1.6vw, 2rem));
      color: #ffd100;
      font-weight: 700;
      // Flexbox for layout
      display: flex;
      justify-content: center;
      align-items: center;
      // Spacing
      padding: 0.5rem;
      padding-right: 2rem;
      margin: 2rem;

      i {
        // Circle styling
        background: #003b5c;
        border-radius: 50%;
        // Spacing
        padding: 1.5rem;
        margin-right: 1rem;
        // Sizing
        font-size: 3rem;
      }
    }
  }
}

// Media queries
// Remove sticky hover
@media (hover: hover) {
  .home {
    p {
      a {
        &:hover {
          color: #ffb81c;
        }
      }
    }
    div {
      a {
        .nav-button {
          transition: transform 0.2s ease;
        }
        &:hover .nav-button {
          box-shadow: 0 0 20px #333;
          transform: scale(1.05);

          i {
            // Invert
            background: #ffd100;
            color: #003b5c;
            // Animate
            transition: transform 0.7s ease;
            transform: rotate(360deg);
          }
        }
      }
    }
  }
}

// Mobile layout
@media screen and (max-width: 1200px) {
  .home {
    div {
      a {
        .nav-button {
          padding: 2rem;

          i {
            display: none;
          }
        }
      }
    }
  }
}
</style>
