<template>
  <nav>
    <router-link to="/">Home</router-link>
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
  color: #2c3e50;
}

nav {
  background-color: #a2ccea;
  display: flex;
  min-height: 80px;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 10px;
}

nav a {
  margin-left: 10px;
  padding: 10px 15px;
  text-transform: uppercase;
  text-align: center;
  color: #34495e;
  font-size: .99em;
}

nav a:hover {
    background-color: #7ebeb6;
    color: #092747;
}

nav a.router-link-exact-active {
  color: #5842b9;
}

nav {
  list-style-type: none;
}

footer {
  background-color: #a2ccea;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin-top: 10px;
}
</style>
