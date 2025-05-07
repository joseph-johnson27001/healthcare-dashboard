<template>
  <div id="app">
    <SideBar />
    <div class="main-content">
      <TopCard />
      <router-view />
    </div>
    <DashboardButton />
  </div>
</template>

<script>
import SideBar from "./components/Navigation/SideBar.vue";
import TopCard from "./components/UI/TopCard.vue";
import DashboardButton from "./components/UI/DashboardButton.vue";

export default {
  name: "App",
  components: {
    SideBar,
    TopCard,
    DashboardButton,
  },
};
</script>

<style>
body {
  margin: 0px;
  scrollbar-width: none;
  font-family: "Inter", sans-serif;
  overflow-y: hidden;
}

::-webkit-scrollbar {
  display: none;
}

#app {
  display: flex;
  height: 100vh;
  width: 100%;
}

.main-content {
  flex-grow: 1;
  background-color: #f0eff2;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  overflow-y: scroll;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 30px;
}

th,
td {
  text-align: left;
  padding: 8px;
}

th {
  background-color: #f1f1f1;
  font-weight: bold;
}

td {
  background-color: #ffffff;
}

tr {
  cursor: pointer;
}

th {
  cursor: auto;
}

tr:nth-child(even) td {
  background-color: #f9f9f9;
}

table th,
table td {
  border: 1px solid #ddd;
  text-align: center;
}

table th {
  background-color: #f1f1f1;
  font-weight: bold;
}

table td {
  font-size: 14px;
}
</style>
