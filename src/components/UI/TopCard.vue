<template>
  <div class="top-card">
    <!-- Left Section (Search) -->
    <div class="search-area">
      <i class="fas fa-search"></i>
      <i class="fas fa-bars" @click="openMobileNav"></i>
      <input type="text" placeholder="Search..." />
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
  methods: {
    openMobileNav() {
      this.$emit("toggle-mobile-nav");
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
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.search-area {
  display: flex;
  align-items: center;
  flex-grow: 1;
}

.search-area i {
  margin-right: 5px;
  color: #007bff;
}

.search-area input {
  flex-grow: 1;
  border: none;
  outline: none;
  font-size: 17px;
  background: none;
  font-family: "Assistant", sans-serif;
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

.fa-bars {
  display: none;
  cursor: pointer;
  font-size: 18px;
}

@media (max-width: 699px) {
  input {
    display: none;
  }
  .fa-search {
    display: none;
  }
  .fa-bars {
    display: block;
  }
}
</style>
