let account = {
  namespaced: true,
  state: {
    account: {
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
        collapse: false,
        transactions: [
          {
            id: 1,
            service: "Netflix",
            date: "12 Mar, 2021",
            amount: 100,
            icon: require("@/assets/img/netflix.png"),
            type: "incoming",
            description:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae atque amet quo consequuntur distinctio sunt consectetur, libero ea dolorum quas, dolorem eos quos debitis aperiam velit maxime corrupti consequatur repellendus.",
          },
          {
            id: 2,
            service: "Paypal",
            date: "15 Mar, 2021",
            amount: 189,
            icon: require("@/assets/img/paypal.png"),
            type: "outcoming",
            description:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae atque amet quo consequuntur distinctio sunt consectetur, libero ea dolorum quas, dolorem eos quos debitis aperiam velit maxime corrupti consequatur repellendus.",
          },
          {
            id: 3,
            service: "Apple",
            date: "16 Apr, 2021",
            amount: 100,
            icon: require("@/assets/img/apple.png"),
            type: "incoming",
            description:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae atque amet quo consequuntur distinctio sunt consectetur, libero ea dolorum quas, dolorem eos quos debitis aperiam velit maxime corrupti consequatur repellendus.",
          },
          {
            id: 4,
            service: "Spotify",
            date: "12 Mar, 2021",
            amount: 10,
            icon: require("@/assets/img/spotify.png"),
            type: "outcoming",
            description:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae atque amet quo consequuntur distinctio sunt consectetur, libero ea dolorum quas, dolorem eos quos debitis aperiam velit maxime corrupti consequatur repellendus.",
          },
          {
            id: 5,
            service: "McDonalds",
            date: "12 Mar, 2021",
            amount: 20,
            icon: require("@/assets/img/netflix.png"),
            type: "",
            description:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae atque amet quo consequuntur distinctio sunt consectetur, libero ea dolorum quas, dolorem eos quos debitis aperiam velit maxime corrupti consequatur repellendus.",
          },
          {
            id: 6,
            service: "Youtube",
            date: "22 Apr, 2021",
            amount: 30,
            icon: require("@/assets/img/netflix.png"),
            type: "outcoming",
            description:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae atque amet quo consequuntur distinctio sunt consectetur, libero ea dolorum quas, dolorem eos quos debitis aperiam velit maxime corrupti consequatur repellendus.",
          },
          {
            id: 7,
            service: "Ebay",
            date: "13 May, 2021",
            amount: 560,
            icon: require("@/assets/img/netflix.png"),
            type: "",
            description:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae atque amet quo consequuntur distinctio sunt consectetur, libero ea dolorum quas, dolorem eos quos debitis aperiam velit maxime corrupti consequatur repellendus.",
          },
          {
            id: 8,
            service: "Amazon",
            date: "14 May, 2021",
            amount: 39,
            icon: require("@/assets/img/netflix.png"),
            type: "incoming",
            description:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae atque amet quo consequuntur distinctio sunt consectetur, libero ea dolorum quas, dolorem eos quos debitis aperiam velit maxime corrupti consequatur repellendus.",
          },
        ],
      },
    },
  },
  mutations: {
    collapse(state) {
      // mutate state
      state.account.card.collapse = !state.account.card.collapse;
    },
  },
};

export default account;
