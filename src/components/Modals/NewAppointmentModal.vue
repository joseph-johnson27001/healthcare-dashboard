<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content">
      <div class="modal-header">
        <div class="icon-container">
          <i class="fas fa-calendar-plus"></i>
        </div>
        <h2>New Appointment</h2>
      </div>

      <form @submit.prevent="saveAppointment">
        <!-- Patient & Date Row -->
        <div class="form-row">
          <div class="form-group patient-group">
            <label for="patient">Patient Name</label>
            <input
              type="text"
              id="patient"
              v-model="appointment.patient"
              placeholder="Enter patient name"
              required
            />
          </div>

          <div class="form-group date-group">
            <label for="date">Appointment Date</label>
            <input type="date" id="date" v-model="appointment.date" required />
          </div>
        </div>

        <!-- Time of Appointment -->
        <div class="form-group">
          <label for="time">Appointment Time</label>
          <input type="time" id="time" v-model="appointment.time" required />
        </div>

        <!-- Department Selection -->
        <div class="form-group">
          <label for="department">Department</label>
          <select id="department" v-model="appointment.department" required>
            <option value="" disabled>Select Department</option>
            <option value="General Medicine">General Medicine</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Pediatrics">Pediatrics</option>
            <option value="Orthopedics">Orthopedics</option>
            <option value="Neurology">Neurology</option>
          </select>
        </div>

        <!-- Doctor Selection -->
        <div class="form-group">
          <label for="doctor">Doctor</label>
          <select id="doctor" v-model="appointment.doctor" required>
            <option value="" disabled>Select Doctor</option>
            <option value="Dr. Smith">Dr. Smith</option>
            <option value="Dr. Johnson">Dr. Johnson</option>
            <option value="Dr. Lee">Dr. Lee</option>
            <option value="Dr. Davis">Dr. Davis</option>
          </select>
        </div>

        <!-- Reason for Visit -->
        <div class="form-group">
          <label for="reason">Reason for Visit</label>
          <input
            type="text"
            id="reason"
            v-model="appointment.reason"
            placeholder="Enter reason for visit"
            required
          />
        </div>

        <!-- Notes Section -->
        <div class="form-group">
          <label for="notes">Appointment Notes</label>
          <textarea
            id="notes"
            v-model="appointment.notes"
            placeholder="Enter additional notes"
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
  name: "NewAppointmentModal",
  data() {
    return {
      appointment: {
        patient: "",
        date: "",
        time: "",
        department: "",
        doctor: "",
        reason: "",
        notes: "",
      },
    };
  },
  methods: {
    saveAppointment() {
      console.log("Saving appointment:", this.appointment);
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
  font-family: "Assistant", sans-serif;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  color: #345a98;
  flex-shrink: 0;
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
.form-group textarea {
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

.patient-group {
  flex: 2;
}

.date-group {
  flex: 1;
}

.date-group input {
  width: 100%;
}

.form-row .form-group {
  width: 100%;
}

textarea {
  height: 150px;
  resize: none;
}

#reason {
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

/* Mobile adjustments */
@media (max-width: 768px) {
  .form-row {
    flex-direction: column;
    gap: 0px;
  }

  .patient-group,
  .date-group,
  .department-group,
  .doctor-group,
  .reason-group {
    width: 100%;
  }

  .date-group input,
  #doctor,
  #department,
  #reason {
    width: 100%;
  }
}
</style>
