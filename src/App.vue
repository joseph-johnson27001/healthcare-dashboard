<template>
  <div id="app">
    <SideBar />
    <div class="main-content">
      <TopCard />
      <div class="kpi-section">
        <KPICard
          v-for="(kpi, index) in kpis"
          :key="index"
          :iconClass="kpi.icon"
          :kpiName="kpi.name"
          :value="kpi.value"
          :iconColor="kpi.iconColor"
          :iconContainerColor="kpi.iconContainerColor"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "./components/Navigation/SideBar.vue";
import TopCard from "./components/UI/TopCard.vue";
import KPICard from "./components/UI/KPICard.vue";

export default {
  name: "App",
  components: {
    SideBar,
    TopCard,
    KPICard,
  },
  data() {
    return {
      kpis: [
        {
          icon: "fas fa-procedures",
          name: "Current Patients",
          value: "120",
        },
        {
          icon: "fas fa-stethoscope",
          name: "Doctors on Duty",
          value: "8",
          iconColor: "#007bff",
          iconContainerColor: "rgba(0, 123, 255, 0.1)",
        },
        {
          icon: "fas fa-bed",
          name: "Available Beds",
          value: "18",
        },
        {
          icon: "fas fa-flask",
          name: "Pending Lab Results",
          value: "12",
        },

        {
          icon: "fas fa-heartbeat",
          name: "Critical Patients",
          value: "5",
          iconColor: "#ff4d4d",
          iconContainerColor: "rgba(255, 77, 77, 0.1)",
        },
        {
          icon: "fas fa-user-injured",
          name: "Emergency Cases",
          value: "2",
          iconColor: "#dc3545",
          iconContainerColor: "rgba(220, 53, 69, 0.1)",
        },
        {
          icon: "fas fa-clock",
          name: "Waiting Time",
          value: "45 mins",
          iconColor: "#ffc107",
          iconContainerColor: "rgba(255, 193, 7, 0.1)",
        },
        {
          icon: "fas fa-users",
          name: "Patients in Queue",
          value: "15",
          iconColor: "#28a745",
          iconContainerColor: "rgba(40, 167, 69, 0.1)",
        },
      ],
    };
  },
};
</script>

<style>
body {
  margin: 0px !important;
  scrollbar-width: none;
  font-family: "Inter", sans-serif;
  overflow-y: hidden;
}

::-webkit-scrollbar {
  display: none;
}

#app {
  display: flex;
  min-height: 100vh;
  width: 100%;
}

.main-content {
  flex-grow: 1;
  background-color: #f6f5f8;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  padding: 20px;
}

.kpi-section {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 20px;
}
</style>
