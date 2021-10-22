<script>
import { Line } from "vue-chartjs";

const options = {};
export default {
  extends: Line,
  mounted() {},
  computed: {
    getChartLables() {
      return this.chartData.map((data) =>
        new Date(data.x * 1000).toDateString()
      );
    },
    getChartValues() {
      return this.chartData.map((data) => data.y.toLocaleString());
    },
  },
  props: ["chartData"],
  watch: {
    chartData: function () {
      if (!this.chartData) return;
      this.renderChart(
        {
          labels: this.getChartLables,
          datasets: [
            {
              label: "$",
              data: this.chartData,
              backgroundColor: "transparent",
              borderColor: "rgba(1, 116, 188, 0.50)",
              pointBackgroundColor: "rgba(171, 71, 188, 1)",
            },
          ],
        },
        {
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: true,
            text: "My Data",
          },
        }
      );
    },
  },
};
</script>
