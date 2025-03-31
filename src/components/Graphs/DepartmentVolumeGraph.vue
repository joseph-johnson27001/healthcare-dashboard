<template>
  <div class="chart-container">
    <div class="header">
      <h4>Department Volume (%)</h4>
      <select v-model="selectedRange">
        <option value="7d">7 Days</option>
        <option value="12m">12 Months</option>
        <option value="5y">5 Years</option>
      </select>
    </div>
    <apexchart
      type="bar"
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
          categories: [
            "Emergency",
            "Cardiology",
            "Pediatrics",
            "Surgery",
            "Orthopedics",
            "Neurology",
          ],
          capacityUtilization: [85, 70, 65, 80, 55, 50],
        },
        "12m": {
          categories: [
            "Emergency",
            "Cardiology",
            "Pediatrics",
            "Surgery",
            "Orthopedics",
            "Neurology",
          ],
          capacityUtilization: [90, 75, 70, 85, 60, 55],
        },
        "5y": {
          categories: [
            "Emergency",
            "Cardiology",
            "Pediatrics",
            "Surgery",
            "Orthopedics",
            "Neurology",
          ],
          capacityUtilization: [95, 80, 75, 90, 65, 60],
        },
      },
    };
  },
  computed: {
    chartOptions() {
      return {
        chart: {
          id: "department-capacity-bar-chart",
          toolbar: { show: false },
          fontFamily: "Inter, sans-serif",
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
          max: 100,
          labels: {
            style: {
              colors: "rgba(47, 43, 61, 0.9)",
            },
            formatter: (value) => `${value}%`,
          },
        },
        colors: ["#3498DB"],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
            borderRadius: 5,
            borderRadiusApplication: "end",
          },
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
          name: "Capacity Utilization",
          data: selectedData.capacityUtilization,
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
