<template>
  <div id="app">
    <div id="nav-color">
      <navbar/>
    </div>
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

<style lang="scss">
@import './assets/styles/custom.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';
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
</style>
