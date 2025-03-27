<template>
  <div :class="['sidebar', { collapsed }]">
    <div class="sidebar-title">
      <h1 v-if="!collapsed">HealthCare</h1>
      <i class="fas fa-bars" @click="toggleCollapse"></i>
    </div>
    <ul>
      <li
        v-for="(item, index) in menuItems"
        :key="index"
        :class="{
          active: activeItem === item.name,
          'logout-item': item.name === 'logout',
        }"
        @click="setActive(item.name)"
      >
        <i :class="item.icon"></i>
        <span v-if="!collapsed">{{ item.label }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      activeItem: "dashboard",
      collapsed: false,
      menuItems: [
        { name: "dashboard", label: "Dashboard", icon: "fas fa-home" },
        {
          name: "appointments",
          label: "Appointments",
          icon: "far fa-calendar-check",
        },
        { name: "patients", label: "Patients", icon: "fas fa-user-injured" },
        { name: "doctors", label: "Doctors", icon: "fas fa-user-doctor" },
        {
          name: "medical-records",
          label: "Medical Records",
          icon: "fas fa-file-medical",
        },
        { name: "prescriptions", label: "Prescriptions", icon: "fas fa-pills" },
        {
          name: "billing",
          label: "Billing & Payments",
          icon: "fas fa-file-invoice-dollar",
        },
        {
          name: "reports",
          label: "Reports & Analytics",
          icon: "fas fa-chart-line",
        },
        { name: "settings", label: "Settings", icon: "fas fa-cog" },
        { name: "logout", label: "Logout", icon: "fas fa-sign-out-alt" },
      ],
    };
  },
  methods: {
    setActive(item) {
      this.activeItem = item;
    },
    toggleCollapse() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>

<style scoped>
.sidebar {
  width: 250px;
  color: rgba(47, 43, 61);
  min-height: 100vh;
  padding-top: 20px;
  position: relative;
  z-index: 10;
  font-size: 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: width 0.3s ease;
  overflow-y: scroll;
  flex-shrink: 0;
}

.sidebar.collapsed {
  width: 80px;
}

.sidebar-title {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sidebar-title h1 {
  font-family: "Unica One", sans-serif;
  font-weight: 400;
  margin: 0;
  color: rgb(39, 148, 97);
}

.sidebar-title i {
  cursor: pointer;
  font-size: 22px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.sidebar ul li {
  padding: 15px 10px;
  cursor: pointer;
  border-radius: 5px;
  margin: 4px 7px;
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease;
  white-space: nowrap;
  color: rgba(47, 43, 61, 0.9);
}

.sidebar ul li.logout-item {
  margin-top: auto;
  transition: color 0.3s ease;
}

.sidebar ul li:hover {
  background-color: #f0f0f1;
}

.sidebar ul li.logout-item:hover i {
  color: #ff4d4f;
}

.sidebar ul li.active {
  background: linear-gradient(
    270deg,
    rgba(50, 180, 120, 0.7),
    rgb(50, 180, 120)
  );
  color: white;
}

.sidebar ul li i {
  margin-right: 10px;
  margin-left: 5px;
  font-size: 16px;
}

.sidebar ul li.active i {
  color: white;
}

.sidebar.collapsed ul li,
.sidebar.collapsed .sidebar-title {
  justify-content: center;
}

.sidebar.collapsed ul li i {
  margin: 0;
  padding: 10px;
  font-size: 18px;
}

@media (max-width: 700px) {
  .sidebar,
  .sidebar.collapsed {
    display: none;
  }
}
</style>
