<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content">
      <h2>Add New Patient</h2>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Enter patient name" />

        <label>Age:</label>
        <input type="number" placeholder="Enter patient age" />

        <label>Contact:</label>
        <input type="text" placeholder="Enter contact details" />

        <button type="submit">Save</button>
        <button type="button" @click="$emit('close')">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewPatientModal",
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

button {
  margin-top: 10px;
  padding: 10px;
  cursor: pointer;
}
</style>
