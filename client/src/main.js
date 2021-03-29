import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Header from "./components/Header.vue"
import FileInput from "./components/FileInput.vue"
import imageUpload from './components/imageUpload.vue'

Vue.component('main-header', Header);
Vue.component('file-input', FileInput);
Vue.component('image-upload',imageUpload);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
