import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Footer from "./components/Footer.vue";
import HomeCard from "./components/HomeCard.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.component("main-footer", Footer);
Vue.component("home-card", HomeCard);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
