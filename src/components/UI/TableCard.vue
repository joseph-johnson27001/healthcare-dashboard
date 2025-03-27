<template>
  <div class="card">
    <div class="card-header">
      <span class="card-title">{{ title }}</span>
    </div>
    <div class="card-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 20px;
}

.card-header {
  font-family: "Assistant", sans-serif;
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 500;
  color: #274472;
}
</style>
