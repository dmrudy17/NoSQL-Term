import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Footer from "./components/Footer.vue";
import HomePageCard from "./components/HomePageCard.vue";
import { MdButton, MdCard } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

import { BootstrapVue } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

Vue.use("md-button", MdButton);
Vue.use("md-card", MdCard);

Vue.component("main-footer", Footer);
Vue.component("main-card", HomePageCard);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
