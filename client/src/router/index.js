import Vue from "vue";
import Router from "vue-router";
import HomePage from "@/components/HomePage";
import PostComponent from "@/components/PostComponent";
<<<<<<< HEAD
import AddPage from "@/components/AddPage";
=======
import Swipe from "@/components/Swipe";
>>>>>>> Swiping added

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", component: HomePage },
    { path: "/post", component: PostComponent },
<<<<<<< HEAD
    { path: "/add", component: AddPage },
=======
    { path: "/swipe", component: Swipe },
>>>>>>> Swiping added
  ],
});
