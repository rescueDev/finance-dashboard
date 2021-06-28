let account = {
  namespaced: true,
  state: {
    profile: {
      first_name: "Tom",
      last_name: "Shelby",
      gender: "Male",
      age: "22",
      email: "tom@shelby.com",
      password: "tomtom",
      avatar:
        "https://i.pinimg.com/originals/04/06/21/0406219752900443d6e8bed68198b71b.png",
    },
    card: {
      id: 12345,
      number: 50173456778,
      cvc: 123,
      circuit: "Visa",
      balance: 1800689.36,
    },
  },
  getters: {
    income: (state) => {
      return state.card.transactions.filter((tr) => tr.type === "incoming");
    },
    expense: (state) => {
      return state.card.transactions.filter((tr) => tr.type === "outcoming");
    },
  },
  mutations: {
    collapse(state) {
      // mutate state
      state.card.collapse = !state.card.collapse;
    },
  },
};

export default account;
