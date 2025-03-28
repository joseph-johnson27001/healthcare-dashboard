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
        :class="{ 'logout-item': item.name === 'logout' }"
      >
        <router-link :to="item.route" class="nav-link" active-class="active">
          <div class="icon-container">
            <i :class="item.icon"></i>
          </div>
          <span v-if="!collapsed">{{ item.label }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      collapsed: false,
      menuItems: [
        {
          name: "dashboard",
          label: "Dashboard",
          icon: "fas fa-home",
          route: "/",
        },
        {
          name: "appointments",
          label: "Appointments",
          icon: "far fa-calendar-check",
          route: "/appointments",
        },
        {
          name: "patients",
          label: "Patients",
          icon: "fas fa-user-injured",
          route: "/patients",
        },
        {
          name: "doctors",
          label: "Doctors",
          icon: "fas fa-user-doctor",
          route: "/doctors",
        },
        {
          name: "medical-records",
          label: "Medical Records",
          icon: "fas fa-file-medical",
          route: "/medical-records",
        },
        {
          name: "prescriptions",
          label: "Prescriptions",
          icon: "fas fa-pills",
          route: "/prescriptions",
        },
        {
          name: "billing",
          label: "Billing & Payments",
          icon: "fas fa-file-invoice-dollar",
          route: "/billing",
        },
        {
          name: "reports",
          label: "Reports & Analytics",
          icon: "fas fa-chart-line",
          route: "/reports",
        },
        {
          name: "settings",
          label: "Settings",
          icon: "fas fa-cog",
          route: "/settings",
        },
        {
          name: "logout",
          label: "Logout",
          icon: "fas fa-sign-out-alt",
          route: "/logout",
        },
      ],
    };
  },
  methods: {
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
  padding: 20px 0px;
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
  color: #6685ff;
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

.nav-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  padding: 15px 10px;
  border-radius: 5px;
  margin: 4px 7px;
  transition: background-color 0.3s ease, color 0.3s ease;
  white-space: nowrap;
}

.nav-link:hover {
  background-color: #f0f0f1;
}

.nav-link.active {
  background: #6685ff;
  color: white;
}

.icon-container {
  margin-right: 10px;
  margin-left: 5px;
}

.nav-link i {
  font-size: 16px;
}

.sidebar.collapsed ul {
  justify-content: center;
}

.sidebar.collapsed .nav-link {
  justify-content: center;
}

.sidebar.collapsed .nav-link span {
  display: none;
}

.sidebar.collapsed .nav-link i {
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
