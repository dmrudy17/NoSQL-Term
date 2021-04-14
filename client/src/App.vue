<template>
  <div id="app">
    <div id="content-wrap">
      <div id="nav-color">
        <navbar/>
      </div>
      <router-view />
      <main-footer></main-footer>
    </div>
  </div>
</template>

<script>
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import Vue from "vue";
import PostService from "./PostService";

Vue.use(VueMaterial);
export default {
  name: "App",
  data() {
    return {
      posts: []
    };
  },
  async created() {
    this.posts = await PostService.getPosts();
    
    setInterval(() => {
      let today = new Date();

      for (let i = this.posts.length - 1; i >=0; i--)
      {
        if (today.getDate() - this.posts[i].createdAt.getDate() >= 4)
        {
          console.log(`${this.posts[i].petname} will be deleted from the database`);
        }
        else if (this.posts[i].createdAt.getDate() > today.getDate())
        {
          if (this.posts[i].createdAt.getDate() - today.getDate() <= 24)
          {
            console.log(`${this.posts[i].petname} will be deleted from the database`);
          }
        }
      }
    }, 86400000);
  },
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

  position: relative;
  min-height: 100vh;
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
#nav-color {
  background-color: #d3f7f6;
}
#content-wrap {
  padding-bottom: 150px;
}
</style>
