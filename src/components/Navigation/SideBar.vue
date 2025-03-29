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
          active: isActive(item),
          'logout-item': item.name === 'logout',
        }"
        @click="navigateTo(item)"
      >
        <router-link :to="item.route" class="sidebar-link" exact>
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
    navigateTo(item) {
      this.$router.push(item.route);
    },
    toggleCollapse() {
      this.collapsed = !this.collapsed;
    },
    isActive(item) {
      return this.$route.path === item.route;
    },
  },
};
</script>

<style scoped>
.sidebar {
  width: 250px;
  color: rgba(47, 43, 61);
  min-height: 100vh;
  padding: 10px 0px;
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
  padding: 15px 10px;
  font-weight: 600;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-top: 0;
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

.sidebar ul li.active {
  background: #6685ff;
  color: white;
}

.icon-container {
  margin-right: 10px;
  margin-left: 5px;
}

.sidebar ul li i {
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
  display: flex;
  justify-content: center;
  align-items: center;
}

.sidebar.collapsed {
  margin-left: 0px;
  margin-right: 0px;
}

.sidebar-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
}

@media (max-width: 700px) {
  .sidebar,
  .sidebar.collapsed {
    display: none;
  }
}
</style>
