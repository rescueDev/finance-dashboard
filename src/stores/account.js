import Vue from "vue";
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
    cards: [
      {
        id: 1,
        number: 50173456778,
        cvc: 123,
        circuit: "Visa",
        balance: 1800689.36,
        selected: true,
      },
      {
        id: 2,
        number: 7354781246,
        cvc: 123,
        circuit: "Mastercard",
        balance: 689.36,
        selected: false,
      },
    ],
    prova: [
      {
        id: 1,
        number: 50173456778,
        cvc: 123,
        circuit: "Visa",
        balance: 1800689.36,
        selected: true,
      },
    ],
  },
  getters: {
    // income: (state) => {
    //   return state.card.transactions.filter((tr) => tr.type === "incoming");
    // },
    // expense: (state) => {
    //   return state.card.transactions.filter((tr) => tr.type === "outcoming");
    // },
  },
  mutations: {
    addCard(state, card) {
      console.log("card in vuex", card);
      return state.cards.push(card);
    },
    changeCard(state, cardId) {
      state.cards.map((el, index) => {
        // card.selected = false;
        Vue.set(el, "selected", false);
      });

      state.cards.find((el) => (el.id === cardId ? (el.selected = true) : ""));

      // state.cards[cardId].selected = true;
      // console.log("in vuex after true selected", state.cards[cardId].selected);
    },
  },
};

export default account;
