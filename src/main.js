import Vue from "vue";
import App from "./App.vue";
import "@/globalComponents";
import store from "@/stores/store.js";

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
