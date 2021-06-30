let transactions = {
  namespaced: true,
  state: {
    items: [
      {
        id: 1,
        card_id: 1,
        service: "Netflix",
        date: "12 Mar, 2021",
        amount: 104,
        icon: require("@/assets/img/netflix.png"),
        type: "income",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae atque amet quo consequuntur distinctio sunt consectetur, libero ea dolorum quas, dolorem eos quos debitis aperiam velit maxime corrupti consequatur repellendus.",
      },
      {
        id: 2,
        card_id: 1,
        service: "Paypal",
        date: "15 Mar, 2021",
        amount: 189,
        icon: require("@/assets/img/paypal.png"),
        type: "expense",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae atque amet quo consequuntur distinctio sunt consectetur, libero ea dolorum quas, dolorem eos quos debitis aperiam velit maxime corrupti consequatur repellendus.",
      },
      {
        id: 3,
        card_id: 1,
        service: "Apple",
        date: "16 Apr, 2021",
        amount: 80,
        icon: require("@/assets/img/apple.png"),
        type: "income",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae atque amet quo consequuntur distinctio sunt consectetur, libero ea dolorum quas, dolorem eos quos debitis aperiam velit maxime corrupti consequatur repellendus.",
      },
      {
        id: 4,
        card_id: 1,
        service: "Spotify",
        date: "12 Mar, 2021",
        amount: 10,
        icon: require("@/assets/img/spotify.png"),
        type: "expense",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae atque amet quo consequuntur distinctio sunt consectetur, libero ea dolorum quas, dolorem eos quos debitis aperiam velit maxime corrupti consequatur repellendus.",
      },
      {
        id: 5,
        card_id: 1,
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
        card_id: 1,
        service: "Youtube",
        date: "22 Apr, 2021",
        amount: 30,
        icon: require("@/assets/img/netflix.png"),
        type: "expense",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae atque amet quo consequuntur distinctio sunt consectetur, libero ea dolorum quas, dolorem eos quos debitis aperiam velit maxime corrupti consequatur repellendus.",
      },
      {
        id: 7,
        card_id: 1,
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

        card_id: 1,
        service: "Amazon",
        date: "14 May, 2021",
        amount: 39,
        icon: require("@/assets/img/netflix.png"),
        type: "income",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae atque amet quo consequuntur distinctio sunt consectetur, libero ea dolorum quas, dolorem eos quos debitis aperiam velit maxime corrupti consequatur repellendus.",
      },
      {
        id: 9,
        card_id: 1,
        service: "Burger King",
        date: "14 May, 2021",
        amount: 12.5,
        icon: require("@/assets/img/netflix.png"),
        type: "expense",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae atque amet quo consequuntur distinctio sunt consectetur, libero ea dolorum quas, dolorem eos quos debitis aperiam velit maxime corrupti consequatur repellendus.",
      },
      {
        id: 10,
        card_id: 1,
        service: "Slack",
        date: "14 May, 2021",
        amount: 9.99,
        icon: require("@/assets/img/netflix.png"),
        type: "income",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae atque amet quo consequuntur distinctio sunt consectetur, libero ea dolorum quas, dolorem eos quos debitis aperiam velit maxime corrupti consequatur repellendus.",
      },
      {
        id: 11,
        card_id: 1,
        service: "Amazon",
        date: "14 May, 2021",
        amount: 18.9,
        icon: require("@/assets/img/netflix.png"),
        type: "expense",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae atque amet quo consequuntur distinctio sunt consectetur, libero ea dolorum quas, dolorem eos quos debitis aperiam velit maxime corrupti consequatur repellendus.",
      },
      {
        id: 12,
        card_id: 1,
        service: "Ebay",
        date: "14 May, 2021",
        amount: 52.3,
        icon: require("@/assets/img/netflix.png"),
        type: "expense",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae atque amet quo consequuntur distinctio sunt consectetur, libero ea dolorum quas, dolorem eos quos debitis aperiam velit maxime corrupti consequatur repellendus.",
      },
      {
        id: 13,
        card_id: 1,
        service: "Netflix",
        date: "12 Mar, 2021",
        amount: 104,
        icon: require("@/assets/img/netflix.png"),
        type: "income",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae atque amet quo consequuntur distinctio sunt consectetur, libero ea dolorum quas, dolorem eos quos debitis aperiam velit maxime corrupti consequatur repellendus.",
      },
      {
        id: 14,
        card_id: 1,
        service: "Paypal",
        date: "15 Mar, 2021",
        amount: 189,
        icon: require("@/assets/img/paypal.png"),
        type: "expense",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae atque amet quo consequuntur distinctio sunt consectetur, libero ea dolorum quas, dolorem eos quos debitis aperiam velit maxime corrupti consequatur repellendus.",
      },
      {
        id: 15,
        card_id: 2,
        service: "Apple",
        date: "16 Apr, 2021",
        amount: 80,
        icon: require("@/assets/img/apple.png"),
        type: "income",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae atque amet quo consequuntur distinctio sunt consectetur, libero ea dolorum quas, dolorem eos quos debitis aperiam velit maxime corrupti consequatur repellendus.",
      },
      {
        id: 16,
        card_id: 2,
        service: "Spotify",
        date: "12 Mar, 2021",
        amount: 10,
        icon: require("@/assets/img/spotify.png"),
        type: "expense",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae atque amet quo consequuntur distinctio sunt consectetur, libero ea dolorum quas, dolorem eos quos debitis aperiam velit maxime corrupti consequatur repellendus.",
      },
      {
        id: 17,
        card_id: 2,
        service: "McDonalds",
        date: "12 Mar, 2021",
        amount: 20,
        icon: require("@/assets/img/netflix.png"),
        type: "income",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae atque amet quo consequuntur distinctio sunt consectetur, libero ea dolorum quas, dolorem eos quos debitis aperiam velit maxime corrupti consequatur repellendus.",
      },
      {
        id: 18,
        card_id: 2,
        service: "Youtube",
        date: "22 Apr, 2021",
        amount: 30,
        icon: require("@/assets/img/netflix.png"),
        type: "expense",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae atque amet quo consequuntur distinctio sunt consectetur, libero ea dolorum quas, dolorem eos quos debitis aperiam velit maxime corrupti consequatur repellendus.",
      },
    ],
  },
  getters: {
    // income(state) {
    //   return state.items.filter((el) => el.type === "income");
    // },
    // expense(state) {
    //   return state.items.filter((el) => el.type === "expense");
    // },
    // all(state) {
    //   return state.items;
    // },
  },
};

export default transactions;
