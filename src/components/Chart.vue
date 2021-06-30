<script>
  import { Line, mixins } from "vue-chartjs";
  const { reactiveProp } = mixins;
  export default {
    extends: Line,
    mixins: [reactiveProp],
    props: ["options"],

    mounted() {
      this.renderChart(this.chartData, {
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
      });
    },
  };
</script>

<style lang="sass" scoped>
  canvas
    width: 100% !important
    height: 300px !important
</style>
