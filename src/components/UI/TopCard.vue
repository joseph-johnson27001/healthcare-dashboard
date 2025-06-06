<template>
  <div class="top-card">
    <!-- Left Section (Icons & Profile) -->
    <div class="icon-area">
      <!-- Profile Image with Online Indicator -->
      <div class="profile">
        <img src="https://randomuser.me/api/portraits/women/8.jpg" alt="User" />
        <span class="online-indicator"></span>
      </div>
      <i class="far fa-bell notification-icon">
        <span class="notification-dot"></span>
      </i>
      <i class="far fa-calendar-check"></i>
      <i class="far fa-comment-alt"></i>
    </div>

    <!-- Right Section (Add Buttons) -->
    <div class="button-container">
      <div class="add-patient">
        <button class="add-patient-btn" @click="showNewPatientModal = true">
          <i class="fas fa-user-plus"></i>
        </button>
      </div>

      <div class="add-appointment">
        <button
          class="add-appointment-btn"
          @click="showNewAppointmentModal = true"
        >
          <i class="fas fa-calendar-plus"></i>
        </button>
      </div>

      <div class="hamburger-menu">
        <button @click="toggleSidebar">
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Menu (Full-page overlay) -->
    <div v-if="isMobileNavVisible" class="mobile-nav-overlay">
      <div class="mobile-nav">
        <button class="close-btn" @click="toggleSidebar">X</button>
        <ul>
          <li v-for="item in menuItems" :key="item.name">
            <router-link :to="item.route" @click="toggleSidebar">
              <i :class="item.icon"></i> {{ item.label }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <!-- New Patient Modal -->
    <NewPatientModal
      v-if="showNewPatientModal"
      @close="showNewPatientModal = false"
    />

    <!-- New Appointment Modal -->
    <NewAppointmentModal
      v-if="showNewAppointmentModal"
      @close="showNewAppointmentModal = false"
    />
  </div>
</template>

<script>
import NewPatientModal from "@/components/Modals/NewPatientModal.vue";
import NewAppointmentModal from "../Modals/NewAppointmentModal.vue";

export default {
  name: "TopCard",
  components: {
    NewPatientModal,
    NewAppointmentModal,
  },
  data() {
    return {
      showNewPatientModal: false,
      showNewAppointmentModal: false,
      isMobileNavVisible: false,
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
          name: "analytics",
          label: "Analytics",
          icon: "fas fa-chart-line",
          route: "/analytics",
        },
        {
          name: "logout",
          label: "Logout",
          icon: "fas fa-sign-out-alt",
          route: "#",
        },
      ],
    };
  },
  methods: {
    toggleSidebar() {
      this.isMobileNavVisible = !this.isMobileNavVisible;
    },
  },
};
</script>

<style scoped>
.top-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 10px 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.button-container {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.add-patient-btn,
.add-appointment-btn {
  background: #6685ff;
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  font-size: 15px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  outline: none;
}

.add-appointment-btn {
  background-color: rgba(50, 180, 120);
}

.add-patient-btn i,
.add-appointment-btn i {
  font-size: 16px;
}

.icon-area {
  display: flex;
  align-items: center;
  gap: 15px;
}

.icon-area i {
  font-size: 20px;
  cursor: pointer;
  color: #333;
  position: relative;
}

.notification-icon {
  position: relative;
}

.notification-dot {
  width: 8px;
  height: 8px;
  background: #ff4c51;
  border-radius: 50%;
  position: absolute;
  top: 0px;
  right: 0px;
}

.profile {
  position: relative;
  width: 40px;
  height: 40px;
  cursor: pointer;
}

.profile img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.online-indicator {
  width: 8px;
  height: 8px;
  background: #28c76f;
  border-radius: 50%;
  position: absolute;
  bottom: 0px;
  right: 0px;
  border: 2px solid white;
}

.hamburger-menu button {
  background: #6685ff;
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
}

.hamburger-menu button:hover {
  background-color: #4f76e1;
}

.hamburger-menu button i {
  font-size: 22px;
}

.mobile-nav-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.mobile-nav {
  background: #fff;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  box-shadow: -4px 0 6px rgba(0, 0, 0, 0.3);
}

.mobile-nav ul {
  list-style: none;
  padding: 0;
  margin-top: 50px;
  padding-left: 20px;
}

.mobile-nav ul li {
  padding: 15px 0;
  border-bottom: 1px solid #f1f1f1;
}

.mobile-nav ul li a {
  text-decoration: none;
  color: #333;
  display: flex;
  align-items: center;
}

.mobile-nav ul li a i {
  margin-right: 10px;
  color: #4f76e1;
  font-size: 20px;
}

.close-btn {
  background: none;
  border: none;
  font-size: 30px;
  color: #333;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
}

@media (min-width: 701px) {
  .hamburger-menu {
    display: none;
  }
}

@media (max-width: 700px) {
  .add-patient-btn,
  .add-appointment-btn {
    display: none;
  }
  .hamburger-menu {
    display: block;
  }
}
</style>
