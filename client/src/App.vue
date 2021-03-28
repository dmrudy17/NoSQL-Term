<template>
  <div id="app">
    <div id="nav-color">
      <md-button class="md-icon-button1 md-raised md-plain">
        <router-link to="/" class="App-home-link">Home</router-link>
      </md-button>
      <md-button class="md-icon-button2 md-raised md-plain">
        <router-link to="/post" class="App-post-link">Posts</router-link>
      </md-button>
      
    </div>
    <hr />
    <router-view />
  <div id="nav-color">
    <main-footer></main-footer>
  </div>



  </div>
</template>

<script>
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import Vue from "vue";

Vue.use(VueMaterial);
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: larger;
  height: 60px;
  background-color: #d3f7f6;
}
.App-home-link {
  color: red;
  position: relative;
}
.md-icon-button1 {
  width: 70px;
  min-width: 40px;
  height: 40px;
  position: relative;
  left: -45%;
  bottom: 1.5%;
}
.md-icon-button2 {
  width: 70px;
  min-width: 40px;
  height: 40px;
  position: relative;
  right: -45%;
  bottom: 1.5%;
}
.nav-color {
  background: red;
}
</style>
