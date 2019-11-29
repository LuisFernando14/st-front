<template>
  <div id="app">
    <Navbar></Navbar>
    <div id="nav">
    </div>
    <!--<Navigation id="menu"/>-->
    <router-view/>
    <!--<Footer />-->
  </div>
</template>

<script>
// import Navigation from './components/MenuBar.vue'
// import Footer from './components/Footer.vue'
import Navbar from './components/Navbar'
export default {
  components: {
    // Navigation
    // Footer
    Navbar
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
