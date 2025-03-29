<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content">
      <div class="modal-header">
        <div class="icon-container">
          <i class="fas fa-user-plus"></i>
        </div>
        <h2>New Patient</h2>
      </div>

      <form @submit.prevent="savePatient">
        <!-- Name & Gender Row -->
        <div class="form-row">
          <div class="form-group name-group">
            <label for="name">Full Name</label>
            <input
              type="text"
              id="name"
              v-model="patient.name"
              placeholder="Enter patient name"
              required
            />
          </div>

          <div class="form-group gender-group">
            <label for="gender">Gender</label>
            <select id="gender" v-model="patient.gender" required>
              <option value="" disabled>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <!-- Date of Birth -->
        <div class="form-group">
          <label for="dob">Date of Birth</label>
          <input type="date" id="dob" v-model="patient.dob" required />
        </div>

        <!-- Contact Number -->
        <div class="form-group">
          <label for="contact">Contact Number</label>
          <input
            type="text"
            id="contact"
            v-model="patient.contact"
            placeholder="Enter contact details"
            required
          />
        </div>

        <!-- Address -->
        <div class="form-group">
          <label for="address">Address</label>
          <input
            type="text"
            id="address"
            v-model="patient.address"
            placeholder="Enter patient address"
          />
        </div>

        <!-- Emergency Contact Row -->
        <div class="form-row">
          <div class="form-group emergency-contact-name">
            <label for="emergency-contact">Emergency Contact</label>
            <input
              type="text"
              id="emergency-contact"
              v-model="patient.emergencyContact"
              placeholder="Enter emergency contact name"
            />
          </div>
          <div class="form-group emergency-contact-phone">
            <label for="emergency-phone">Emergency Phone</label>
            <input
              type="text"
              id="emergency-phone"
              v-model="patient.emergencyPhone"
              placeholder="Enter emergency contact phone"
            />
          </div>
        </div>

        <!-- Department Selection -->
        <div class="form-group">
          <label for="department">Department</label>
          <select id="department" v-model="patient.department" required>
            <option value="" disabled>Select Department</option>
            <option value="General Medicine">General Medicine</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Pediatrics">Pediatrics</option>
            <option value="Orthopedics">Orthopedics</option>
            <option value="Neurology">Neurology</option>
          </select>
        </div>

        <!-- Notes Section -->
        <div class="form-group">
          <label for="notes">Additional Notes</label>
          <textarea
            id="notes"
            v-model="patient.notes"
            placeholder="Enter any additional details"
          ></textarea>
        </div>

        <!-- Form Actions -->
        <div class="form-actions">
          <button type="button" class="cancel-btn" @click="$emit('close')">
            Cancel
          </button>
          <button type="submit" class="save-btn">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewPatientModal",
  data() {
    return {
      patient: {
        name: "",
        dob: "",
        gender: "",
        contact: "",
        address: "",
        emergencyContact: "",
        emergencyPhone: "",
        department: "",
        notes: "",
      },
    };
  },
  methods: {
    savePatient() {
      console.log("Saving patient:", this.patient);
      this.$emit("close");
    },
  },
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
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  height: 90%;
  margin: 20px;
  max-width: 1200px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 4px 8px -2px,
    rgba(0, 0, 0, 0.3) 0px 2px 4px -2px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  font-family: "Assistant", sans-serif;
}

.modal-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
}

.modal-header h2 {
  font-size: 20px;
  color: #345a98;
  font-weight: 400;
}

.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: rgba(39, 148, 97, 0.1);
  border-radius: 4px;
}

.icon-container i {
  font-size: 20px;
  color: #28c76f;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  color: #345a98;
  margin-bottom: 5px;
}

.form-group input,
.form-group select,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
  box-sizing: border-box;
  font-family: "Assistant", sans-serif;
  outline: none;
}

::placeholder {
  font-family: "Assistant", sans-serif;
}

.form-row {
  display: flex;
  gap: 15px;
}
.name-group {
  flex: 2;
}
.gender-group {
  flex: 1;
}

.gender-group select {
  width: 100%;
}

.emergency-contact-name,
.emergency-contact-phone {
  flex: 1;
}

.form-row .form-group {
  width: 100%;
}

.emergency-contact-name input,
.emergency-contact-phone input {
  width: 100%;
}

textarea {
  height: 150px;
  resize: none;
}

#emergency-contact {
  margin-bottom: 10px;
}

.gender-options {
  display: flex;
  gap: 15px;
}

.form-actions {
  display: flex;
  justify-content: space-between;
}

.save-btn {
  background: #6685ff;
  color: white;
  border: none;
  padding: 10px 12px;
  font-size: 15px;
  border-radius: 5px;
  cursor: pointer;
}

.cancel-btn {
  background: #ddd;
  color: #333;
  border: none;
  padding: 10px 12px;
  font-size: 15px;
  border-radius: 5px;
  cursor: pointer;
}

.save-btn:hover {
  background: #4f6edc;
}

.cancel-btn:hover {
  background: #ccc;
}
</style>
