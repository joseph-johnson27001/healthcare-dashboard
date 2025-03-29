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
        <button class="add-appointment-btn">
          <i class="fas fa-calendar-plus"></i>
        </button>
      </div>
    </div>
    <!-- New Patient Modal -->
    <NewPatientModal
      v-if="showNewPatientModal"
      @close="showNewPatientModal = false"
    />
  </div>
</template>

<script>
import NewPatientModal from "@/components/Modals/NewPatientModal.vue";

export default {
  name: "TopCard",
  components: {
    NewPatientModal,
  },
  data() {
    return {
      showNewPatientModal: false,
    };
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

@media (max-width: 699px) {
  .add-patient-btn {
    font-size: 14px;
    padding: 8px 12px;
  }
}
</style>
