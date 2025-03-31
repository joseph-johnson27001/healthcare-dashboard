<template>
  <div class="chart-container">
    <div class="header">
      <h4>Patient Admissions / Discharges</h4>
      <!-- Dropdown for selecting time range -->
      <select v-model="selectedRange">
        <option value="7d">7 Days</option>
        <option value="12m">12 Months</option>
        <option value="5y">5 Years</option>
      </select>
    </div>
    <apexchart
      type="line"
      height="350"
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
          admissionsData: [50, 62, 55, 74, 72, 67, 75],
          dischargesData: [32, 36, 34, 42, 43, 40, 42],
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
          admissionsData: [
            1000, 1250, 1450, 1350, 1850, 1980, 2250, 2150, 2400, 2650, 2750,
            3100,
          ],
          dischargesData: [
            810, 880, 920, 960, 1010, 1130, 1220, 1180, 1300, 1350, 1450, 1550,
          ],
        },
        "5y": {
          categories: ["2021", "2022", "2023", "2024", "2025"],
          admissionsData: [4850, 5900, 7250, 8250, 9500],
          dischargesData: [3600, 4050, 4600, 5300, 5850],
        },
      },
    };
  },
  computed: {
    chartOptions() {
      return {
        chart: {
          id: "admissions-discharges-line-chart",
          toolbar: { show: false },
          zoom: {
            enabled: false,
          },
          fontFamily: "Inter, sans-serif",
          animations: {
            enabled: true,
            easing: "easeinout",
            speed: 400,
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
          },
        },
        colors: ["#2ECC71", "#E74C3C"],
        stroke: {
          show: true,
          width: 4,
        },
        grid: {
          borderColor: "#e0e0e0",
          strokeDashArray: 0,
          xaxis: {
            lines: { show: true },
          },
          yaxis: {
            lines: { show: true },
          },
        },
      };
    },
    series() {
      const selectedData = this.dataSets[this.selectedRange];
      return [
        {
          name: "Admissions",
          data: selectedData.admissionsData,
        },
        {
          name: "Discharges",
          data: selectedData.dischargesData,
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
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  color: #345a98;
  margin: 0;
}
</style>
