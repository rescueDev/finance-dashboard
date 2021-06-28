<script>
  import { Line } from "vue-chartjs";
  export default {
    extends: Line,
    props: {
      transactions: {
        type: Array,
        default: function() {
          return [];
        },
      },
    },
    data: function() {
      return {
        data: [],
        labels: [],
      };
    },
    methods: {
      fillValues() {
        //if tab selected are...
        if (this.$store.state.navigation.tabSelected == "Income") {
          console.log("Im in income");
          this.transactions
            .filter((el) => el.type === "incoming")
            .map((ft) => {
              this.data.push(ft.amount);
              this.labels.push(ft.date);
            });
        } else if (this.$store.state.navigation.tabSelected == "Expence") {
          console.log("Im in expence");

          this.transactions
            .filter((el) => el.type === "outcoming")
            .map((ft) => {
              this.data.push(ft.amount);
              this.labels.push(ft.date);
            });
        }
      },
      lineChart() {
        this.renderChart(
          //dataChart
          {
            labels: this.labels,
            datasets: [
              {
                label: "Transactions",
                backgroundColor: "#F8DBCA",
                borderColor: "#ec6813",
                data: this.data,
              },
            ],
          },
          //chart Options
          {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              display: false,
            },
            tooltips: {
              custom: function(tooltip) {
                if (!tooltip) return;
                tooltip.displayColors = false;
              },
              bodyAlign: "center",
              backgroundColor: "#ec6813",
              titleColor: "#FAFAFA",

              callbacks: {
                label: function(tooltipItem) {
                  return "$ " + tooltipItem.yLabel;
                },
                title: function() {
                  return;
                },
              },
            },
            scales: {
              xAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                },
              ],
              yAxes: [
                {
                  ticks: {
                    display: false,
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
          }
        );
      },
    },
    mounted() {
      console.log(this.dataChart);
      this.fillValues();
      this.lineChart();
    },
    watch: {
      data() {
        chart.update();
      },
    },
    // watch: {
    //   labels: function() {
    //     console.log("changed data");
    //     this.$data._chart.update();
    //   },
    //   data: function() {
    //     console.log("changed data");
    //     this.$data._chart.update();
    //   },
    // },
  };
</script>

<style lang="sass" scoped>
  canvas
     width: 100% !important
     height: 300px !important
</style>
