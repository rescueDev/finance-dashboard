<template> </template>

<script>
  import Chart from "./Chart.vue";
  export default {
    components: { Chart },
    props: {
      data: {
        type: Array,
        default: function() {
          return [];
        },
      },
    },
    computed: {
      // datasetsfull() {
      //   if (this.$store.state.tabs.selected === "Income") {
      //     return {
      //       labels: this.$store.getters["account/income"].map((el) => el.date),
      //       datasets: [
      //         {
      //           label: "Data One",
      //           backgroundColor: "#F8DBCA",
      //           borderColor: "#ec6813",
      //           data: this.$store.getters["account/income"].map(
      //             (el) => el.amount
      //           ),
      //         },
      //       ],
      //     };
      //   } else {
      //     return {
      //       labels: this.$store.getters["account/expense"].map((el) => el.date),
      //       datasets: [
      //         {
      //           label: "Data One",
      //           backgroundColor: "#F8DBCA",
      //           borderColor: "#ec6813",
      //           data: this.$store.getters["account/expense"].map(
      //             (el) => el.amount
      //           ),
      //         },
      //       ],
      //     };
      //   }
      // },
      // ...mapGetters({ income: "account/income", expense: "account/expense" }),
    },

    mounted() {},
  };
</script>
