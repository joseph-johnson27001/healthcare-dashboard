<template>
  <div class="patient-profile">
    <!-- Patient Header Section -->
    <div class="patient-header-container">
      <ContainerCard>
        <div class="patient-info">
          <h1 class="patient-name">{{ patient.name }}</h1>
          <p><strong>Age:</strong> {{ patient.age }}</p>
          <p><strong>Gender:</strong> {{ patient.gender }}</p>
          <p><strong>Blood Type:</strong> {{ patient.bloodType }}</p>
          <p>
            <strong>Medical Record Number:</strong> {{ patient.medicalRecord }}
          </p>
        </div>
      </ContainerCard>

      <ContainerCard class="contact-card">
        <div class="contact-credentials">
          <p><strong>Phone:</strong> {{ patient.contact.phone }}</p>
          <p><strong>Email:</strong> {{ patient.contact.email }}</p>
          <p>
            <strong>Emergency Contact:</strong>
            {{ patient.emergencyContact.name }} ({{
              patient.emergencyContact.phone
            }})
          </p>
        </div>
      </ContainerCard>
    </div>

    <!-- Existing Notes Section -->
    <div class="notes-container">
      <ContainerCard>
        <div class="notes-header">Patient's Notes</div>
        <div class="existing-notes-section">
          <ul>
            <li v-for="(note, index) in patient.existingNotes" :key="index">
              - {{ note }}
            </li>
          </ul>
        </div>
      </ContainerCard>
    </div>

    <!-- Notes Section (for adding new notes) -->
    <div class="notes-container">
      <ContainerCard>
        <div class="notes-section">
          <div class="notes-header">Add New Note</div>
          <textarea
            v-model="patient.notes"
            placeholder="Enter any important notes here..."
            rows="6"
            class="notes-textarea"
          ></textarea>
          <div class="button-container">
            <button @click="addNote" class="add-note-button">Add Note</button>
          </div>
        </div>
      </ContainerCard>
    </div>
  </div>
</template>

<style scoped>
.patient-header-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
}

.patient-info,
.contact-credentials {
  display: flex;
  flex-direction: column;
}

.contact-credentials p,
.patient-info p {
  color: #222;
  font-family: "Assistant";
}

.contact-credentials p,
.patient-info p,
.patient-info h1 {
  justify-content: center;
  margin: 4px 0;
}

.contact-card {
  justify-content: center;
}

.patient-info h1 {
  font-size: 1.5rem;
}

.patient-name {
  font-weight: 400;
}

.notes-container {
  margin-bottom: 20px;
  margin-top: 20px;
}

.notes-textarea {
  width: 100%;
  height: 150px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 16px;
  resize: none;
  outline: none;
  font-family: "Assistant", sans-serif;
}

.button-container {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
}

.add-note-button {
  background-color: #345a98;
  color: white;
  border: none;
  padding: 8px 15px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 5px;
}

.add-note-button:hover {
  background-color: #2c4a79;
}

strong {
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #345a98;
  margin-bottom: 10px;
  margin-right: 2px;
}

.notes-header {
  font-family: "Assistant", sans-serif;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  color: #345a98;
  margin-bottom: 10px;
}

.existing-notes-section {
  padding: 10px;
  background-color: #f4f7fc;
  border-radius: 5px;
  border: 1px solid #e0e7ff;
}

li {
  list-style: none;
  margin-left: -30px;
  margin-top: 5px;
}

@media (max-width: 1000px) {
  .patient-header-container {
    grid-template-columns: 1fr;
  }
}
</style>

<script>
import ContainerCard from "@/components/UI/ContainerCard.vue";

export default {
  name: "PatientProfilePage",
  components: {
    ContainerCard,
  },
  data() {
    return {
      patient: {
        name: "Jane Doe",
        age: 35,
        gender: "Female",
        bloodType: "O+",
        medicalRecord: "MRN-456789",
        contact: { phone: "+1 987 654 321", email: "janedoe@example.com" },
        emergencyContact: { name: "John Doe", phone: "+1 123 456 789" },
        existingNotes: [
          "Patient has a history of mild allergies to penicillin.",
          "Regular follow-ups recommended for blood pressure monitoring.",
        ],
        notes: "",
      },
    };
  },
  methods: {
    addNote() {
      if (this.patient.notes.trim() !== "") {
        this.patient.existingNotes.push(this.patient.notes.trim());
        this.patient.notes = "";
      }
    },
  },
};
</script>
