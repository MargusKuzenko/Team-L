<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/Signup">Sign up</router-link>
  </nav>
  <router-view/>
  <footer>
      <p><span>&copy</span> 2024 Team L | All Rights Reserved</p>
  </footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background-color: lightslategray;
}

nav a {
  font-size: large;
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #5842b9;
}

footer {
  padding: 30px;
  background-color: lightslategray;
}
</style>
