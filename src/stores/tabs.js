let tabs = {
  namespaced: true,
  state: {
    items: [
      {
        label: "Income",
        selected: true,
        type: "income",
      },
      {
        label: "Expense",
        selected: false,
        type: "expense",
      },
    ],
  },
  mutations: {
    switch(state, index) {
      state.items.map((el, index) => {
        el.selected = false;
      });
      state.items[index].selected = true;
    },
  },
  getters: {
    current(state) {
      return state.items.filter((tab) => tab.selected);
    },
  },
};

export default tabs;
