import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Footer from "./components/Footer.vue";
import imageSlide from "./components/ImageSlide.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
// register the plugin on vue
import Toasted from "vue-toasted";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(Toasted);
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.component("main-footer", Footer);
Vue.component("image-slide", imageSlide);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
