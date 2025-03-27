<template>
  <div class="card">
    <div class="card-header">
      <div
        class="icon-container"
        :style="{ backgroundColor: iconContainerColor }"
      >
        <i :class="iconClass" :style="{ color: iconColor }"></i>
      </div>
      <span class="kpi-name">{{ kpiName }}</span>
    </div>
    <div class="value">{{ value }}</div>
  </div>
</template>

<script>
export default {
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    kpiName: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    iconColor: {
      type: String,
      default: "#28c76f",
    },
    iconContainerColor: {
      type: String,
      default: "rgba(39, 148, 97, 0.1)",
    },
  },
};
</script>

<style scoped>
.card {
  background: white;
  padding: 15px;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.card:hover {
  background-color: #fafafa;
}

.card-header {
  font-family: "Roboto";
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  margin-right: 10px;
}

.icon-container i {
  font-size: 20px;
}

.kpi-name {
  font-size: 15px;
  font-weight: 400;
  color: #274472;
}

.value {
  font-size: 18px;
  font-weight: 500;
  color: #222;
}
</style>
