<template>
  <div class="nav-container">
    <router-link to="/">
      <i class="fas fa-home"></i>
    </router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap");

#app {
  font-family: Overpass, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffd100;
  background: #003b5c;
}

.nav-container {
  // Layout
  text-align: right;
  // Sizing
  width: 100%;
  // Spacing
  padding: 1rem;

  .fa-home {
    // Positioning
    position: realtive;
    top: 3rem;
    right: 3rem;
    // Styling
    color: #ffd100;
    font-size: 3rem;
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}

html {
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}

h1 {
  // Typography
  font-size: calc(clamp(2rem, 1.2rem + 3.2vw, 4rem));
  font-weight: 700;
}

h2 {
  // Typography
  font-size: calc(clamp(1.5rem, 0.9rem + 2.4vw, 3rem));
  text-decoration: underline;
  // Spacing
  margin-bottom: 1rem;
}

h3 {
  // Typography
  font-size: calc(clamp(1.5rem, 0.9rem + 2.4vw, 3rem));
  text-align: left;
  text-decoration: underline;
  // Spacing
  margin-bottom: 1rem;
}

hr {
  // Sizing
  height: 1px;
  width: 70%;
  // Color
  border: 1px solid #ffd100;
  // Spacing + centering
  margin: calc(clamp(1.5rem, 0.9rem + 2.4vw, 3rem)) auto;
}

p {
  // Alignment
  text-align: left;
  // Typography
  font-size: calc(clamp(1rem, 0.6rem + 1.6vw, 2rem));
  // Spacing
  margin-bottom: calc(clamp(1.5rem, 0.9rem + 2.4vw, 3rem));
  line-height: 1.7;

  a {
    // Remove default styling
    color: #ffd100;
  }
}

img {
  // Spacing
  margin-bottom: calc(clamp(1.5rem, 0.9rem + 2.4vw, 3rem));
  // Sizing for responsiveness
  max-width: 80%;
}
</style>
