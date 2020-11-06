<template>
  <div id="app">

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <router-link tag="li" class="nav-item" to="/">
              <a class="nav-link">Home</a>
          </router-link>
          <router-link tag="li" class="nav-item" to="/contact">
              <a class="nav-link">Contact</a>
          </router-link>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- <Posts/> -->
    <router-view ></router-view>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Posts from './components/Posts'
import Contact from './components/Contact'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Posts,
    Contact
  }
}
</script>

<style>
  @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
</style>
