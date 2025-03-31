<template>
  <div class="chart-container">
    <div class="header">
      <h4>Emergency Room Wait Time (Minutes)</h4>
      <select v-model="selectedRange">
        <option value="7d">7 Days</option>
        <option value="12m">12 Months</option>
        <option value="5y">5 Years</option>
      </select>
    </div>
    <apexchart
      type="line"
      height="325"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      selectedRange: "12m",
      dataSets: {
        "7d": {
          categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          waitTimes: [30, 45, 50, 40, 35, 55, 60],
        },
        "12m": {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          waitTimes: [50, 60, 55, 70, 65, 72, 80, 85, 75, 68, 62, 55],
        },
        "5y": {
          categories: ["2021", "2022", "2023", "2024", "2025"],
          waitTimes: [60, 62, 65, 70, 75],
        },
      },
    };
  },
  computed: {
    chartOptions() {
      return {
        chart: {
          id: "er-wait-time-line-chart",
          toolbar: { show: false },
          fontFamily: "Inter, sans-serif",
          zoom: { enabled: false },
          scrollable: false,
          events: {
            beforeZoom: (chartContext, options) => {
              return { xaxis: options };
            },
          },
        },
        xaxis: {
          categories: this.dataSets[this.selectedRange].categories,
          labels: {
            style: {
              colors: "rgba(47, 43, 61, 0.9)",
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: "rgba(47, 43, 61, 0.9)",
            },
            formatter: (value) => `${value} min`,
          },
        },
        colors: ["#E74C3C"],
        stroke: {
          show: true,
          width: 4,
        },
        grid: {
          borderColor: "#e0e0e0",
          strokeDashArray: 0,
        },
      };
    },
    series() {
      const selectedData = this.dataSets[this.selectedRange];
      return [
        {
          name: "Wait Time",
          data: selectedData.waitTimes,
        },
      ];
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: -15px;
}

h4 {
  font-family: "Assistant", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #345a98;
  margin: 0;
}
</style>
