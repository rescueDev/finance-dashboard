import Vue from "vue";
import Vuex from "vuex";
import navigation from "./navigation.js";
import account from "./account.js";
import tabs from "./tabs.js";
import transactions from "./transactions.js";

let store = {
  modules: {
    account: account,
    transactions: transactions,
    navigation: navigation,
    tabs: tabs,
  },
};
Vue.use(Vuex);
export default new Vuex.Store(store);
