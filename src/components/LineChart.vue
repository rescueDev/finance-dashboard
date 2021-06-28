<template>
  <div class="hello">
    <Chart :chart-data="datasetsfull" />
  </div>
</template>

<script>
  import Chart from "./Chart.vue";
  import { mapGetters, mapActions } from "vuex";
  export default {
    components: { Chart },
    computed: {
      datasetsfull() {
        if (this.$store.state.navigation.tabSelected === "Income") {
          return {
            labels: this.$store.getters["account/income"].map((el) => el.date),
            datasets: [
              {
                label: "Data One",
                backgroundColor: "#F8DBCA",
                borderColor: "#ec6813",
                data: this.$store.getters["account/income"].map(
                  (el) => el.amount
                ),
              },
            ],
          };
        } else {
          return {
            labels: this.$store.getters["account/expense"].map((el) => el.date),
            datasets: [
              {
                label: "Data One",
                backgroundColor: "#F8DBCA",
                borderColor: "#ec6813",
                data: this.$store.getters["account/expense"].map(
                  (el) => el.amount
                ),
              },
            ],
          };
        }
      },
      ...mapGetters({ income: "account/income", expense: "account/expense" }),
    },
    methods: mapActions(["addData"]),
    mounted() {},
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  canvas
    width: 100%
    height: 300px
  // h1,
  // h2 {
  //   font-weight: normal;
  // }

  // ul {
  //   list-style-type: none;
  //   padding: 0;
  // }

  // li {
  //   display: inline-block;
  //   margin: 0 10px;
  // }

  // a {
  //   color: #42b983;
  // }
</style>
