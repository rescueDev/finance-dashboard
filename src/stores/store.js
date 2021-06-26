import Vue from "vue";
import Vuex from "vuex";
import navigation from "./navigation.js";
import account from "./account.js";

let store = {
  modules: {
    navigation: navigation,
    account: account,
  },
};
Vue.use(Vuex);
export default new Vuex.Store(store);
