let navigation = {
  namespaced: true,
  state: {
    navigation: [
      {
        label: "Dashboard",
        icon: "fas fa-home",
      },
      {
        label: "Wallet",
        icon: "fas fa-wallet",
      },
      {
        label: "Statistic",
        icon: "fas fa-chart-bar",
      },
      {
        label: "Profile",
        icon: "far fa-user-circle",
      },
    ],
    tabs: [
      {
        label: "Income",
      },
      {
        label: "Expence",
      },
    ],
    tabSelected: "Income",
  },
  mutations: {
    switch(state, value) {
      state.tabSelected = value;
    },
  },
};

export default navigation;
