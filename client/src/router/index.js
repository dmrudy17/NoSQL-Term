import Vue from "vue";
import Router from "vue-router";
import HomePage from "@/components/HomePage";
import PostComponent from "@/components/PostComponent";
import Swipe from "@/components/Swipe";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", component: HomePage },
    { path: "/post", component: PostComponent },
    { path: "/swipe", component: Swipe },
  ],
});
