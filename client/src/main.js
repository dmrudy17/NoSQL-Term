import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Footer from "./components/Footer.vue";
import SwipeCard from "./components/SwipeCard.vue";
import NavBar from "./components/NavBar.vue";
import imageSlide from "./components/ImageSlide.vue";
import Swipe from "./components/Swipe.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import Toasted from "vue-toasted";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Toasted);

Vue.component("main-footer", Footer);
Vue.component("swipe-card", SwipeCard);
Vue.component("navbar", NavBar);
Vue.component("image-slide", imageSlide);
Vue.component("swiper-one", Swipe);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
