import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './assets/css/reset.css';
import './assets/css/font.css';
import './assets/scss/style.scss';
import VScrollLock from 'v-scroll-lock/dist/v-scroll-lock-no-dep.esm'
import { enableBodyScroll, disableBodyScroll } from 'body-scroll-lock'

Vue.use(VScrollLock, {
  enableBodyScroll,
  disableBodyScroll,
})


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
