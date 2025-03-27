<template>
  <div class="top-card">
    <!-- Left Section (Add Patient Button) -->
    <div class="add-patient">
      <button class="add-patient-btn">
        <i class="fas fa-user-plus"></i> Add Patient
      </button>
    </div>

    <!-- Right Section (Icons & Profile) -->
    <div class="icon-area">
      <i class="far fa-calendar-check"></i>
      <i class="far fa-comment-alt"></i>
      <i class="far fa-bell notification-icon">
        <span class="notification-dot"></span>
      </i>

      <!-- Profile Image with Online Indicator -->
      <div class="profile">
        <img src="https://randomuser.me/api/portraits/women/8.jpg" alt="User" />
        <span class="online-indicator"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopCard",
};
</script>

<style scoped>
.top-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.add-patient-btn {
  background: #6e8aff;
  color: white;
  border: none;
  padding: 10px 12px;
  font-size: 15px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
}

.add-patient-btn i {
  font-size: 18px;
}

.icon-area {
  display: flex;
  align-items: center;
  gap: 15px;
}

.icon-area i {
  font-size: 18px;
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
