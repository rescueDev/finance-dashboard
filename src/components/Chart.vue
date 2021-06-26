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
        datasets: [],
        chartdata: {
          labels: this.transactions.map((el) => el.date),
          datasets: [
            {
              label: "Transactions",
              backgroundColor: "#F8DBCA",
              borderColor: "#ec6813",
              data: this.transactions.map((el) => el.amount),
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          legend: {
            display: false,
          },
          tooltips: {
            callbacks: {
              label: function(tooltipItem) {
                return tooltipItem.yLabel;
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
        },
      };
    },
    mounted() {
      this.renderChart(this.chartdata, this.options);
    },
    computed: {
      values() {
        return this.transactions.map((el) => el.amount);
      },
      labels() {
        let datasets = [];
        datasets.map((el) => {
          datasets.push(el.amount);
        });
        return datasets;
      },
    },
  };
</script>
