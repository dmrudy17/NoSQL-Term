import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Footer from "./components/Footer.vue";
import SwipeCard from "./components/SwipeCard.vue";
import NavBar from "./components/NavBar.vue";
import imageSlide from "./components/ImageSlide.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import Toasted from "vue-toasted";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./styles/app.scss";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Toasted);

Vue.component("main-footer", Footer);
Vue.component("swipe-card", SwipeCard);
Vue.component("navbar", NavBar);
Vue.component("image-slide", imageSlide);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

let getQueueLength = function() {
  return Math.round(12 * Math.random());
};

setInterval(function() {
  let queueLength = getQueueLength();

  console.log(`The queue at the McDonalds drive through is now ${queueLength} cars long.`);
},3000);