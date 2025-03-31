<template>
  <div class="appointment-page">
    <!-- Patient Information -->
    <div class="header-container">
      <ContainerCard>
        <div class="patient-info">
          <h1 class="patient-name">{{ appointment.patient }}</h1>
          <p><strong>Age:</strong> {{ appointment.patientAge }}</p>
          <p><strong>Gender:</strong> {{ appointment.patientGender }}</p>
          <p><strong>Blood Type:</strong> {{ appointment.patientBloodType }}</p>
          <p>
            <strong>Medical Record Number:</strong>
            {{ appointment.patientMedicalRecord }}
          </p>
        </div>
      </ContainerCard>

      <!-- Doctor Information -->
      <ContainerCard>
        <div class="doctor-info">
          <h1 class="doctor-name">{{ appointment.doctor }}</h1>
          <p><strong>Specialty:</strong> {{ appointment.doctorSpecialty }}</p>
          <p><strong>Contact:</strong> {{ appointment.doctorContact }}</p>
          <p><strong>Room:</strong> {{ appointment.room }}</p>
        </div>
      </ContainerCard>
    </div>

    <!-- Existing Notes Section -->
    <div class="notes-container">
      <ContainerCard>
        <div class="notes-header">Appointment Notes</div>
        <div class="existing-notes-section">
          <ul>
            <li v-for="(note, index) in appointment.existingNotes" :key="index">
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
            v-model="newNote"
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

<script>
import ContainerCard from "@/components/UI/ContainerCard.vue";

export default {
  components: {
    ContainerCard,
  },
  data() {
    return {
      appointments: [
        {
          id: "1",
          patient: "Alice Johnson",
          patientAge: "30",
          patientGender: "Female",
          patientBloodType: "O+",
          patientMedicalRecord: "AJ-2025-001",
          doctor: "Dr. John Doe",
          doctorSpecialty: "General Practitioner",
          doctorContact: "john.doe@hospital.com",
          date: "2025-04-01",
          time: "10:00 AM",
          status: "Scheduled",
          room: "101",
          existingNotes: [
            "Routine check-up scheduled.",
            "Patient reported mild headache last visit.",
          ],
        },
        {
          id: "2",
          patient: "Bob Matthews",
          patientAge: "45",
          patientGender: "Male",
          patientBloodType: "A-",
          patientMedicalRecord: "BM-2025-002",
          doctor: "Dr. Emily White",
          doctorSpecialty: "Cardiologist",
          doctorContact: "emily.white@hospital.com",
          date: "2025-04-03",
          time: "2:00 PM",
          status: "Scheduled",
          room: "202",
          existingNotes: [
            "Follow-up appointment for blood pressure monitoring.",
          ],
        },
        {
          id: "3",
          patient: "Sarah Turner",
          patientAge: "60",
          patientGender: "Female",
          patientBloodType: "B+",
          patientMedicalRecord: "ST-2025-003",
          doctor: "Dr. Michael Brown",
          doctorSpecialty: "Neurologist",
          doctorContact: "michael.brown@hospital.com",
          date: "2025-04-05",
          time: "11:00 AM",
          status: "Finished",
          room: "305",
          existingNotes: ["Patient reported dizziness and fatigue."],
        },
        {
          id: "4",
          patient: "David Moore",
          patientAge: "50",
          patientGender: "Male",
          patientBloodType: "O-",
          patientMedicalRecord: "DM-2025-004",
          doctor: "Dr. Sarah Johnson",
          doctorSpecialty: "Orthopedic Surgeon",
          doctorContact: "sarah.johnson@hospital.com",
          date: "2025-04-06",
          time: "9:00 AM",
          status: "Scheduled",
          room: "107",
          existingNotes: ["Pre-surgical consultation for knee replacement."],
        },
        {
          id: "5",
          patient: "Linda Green",
          patientAge: "40",
          patientGender: "Female",
          patientBloodType: "AB+",
          patientMedicalRecord: "LG-2025-005",
          doctor: "Dr. Robert Adams",
          doctorSpecialty: "Endocrinologist",
          doctorContact: "robert.adams@hospital.com",
          date: "2025-04-07",
          time: "1:30 PM",
          status: "Scheduled",
          room: "203",
          existingNotes: ["Routine follow-up for diabetes management."],
        },
        {
          id: "6",
          patient: "James Carter",
          patientAge: "35",
          patientGender: "Male",
          patientBloodType: "A+",
          patientMedicalRecord: "JC-2025-006",
          doctor: "Dr. William Harris",
          doctorSpecialty: "Gastroenterologist",
          doctorContact: "william.harris@hospital.com",
          date: "2025-04-08",
          time: "3:00 PM",
          status: "Finished",
          room: "404",
          existingNotes: ["Patient reported chronic stomach pain."],
        },
        {
          id: "7",
          patient: "Daniel Brown",
          patientAge: "28",
          patientGender: "Male",
          patientBloodType: "O-",
          patientMedicalRecord: "DB-2025-007",
          doctor: "Dr. John Doe",
          doctorSpecialty: "General Practitioner",
          doctorContact: "john.doe@hospital.com",
          date: "2025-04-10",
          time: "10:30 AM",
          status: "Scheduled",
          room: "105",
          existingNotes: ["Annual physical exam scheduled."],
        },
        {
          id: "8",
          patient: "Emily White",
          patientAge: "32",
          patientGender: "Female",
          patientBloodType: "B-",
          patientMedicalRecord: "EW-2025-008",
          doctor: "Dr. Jessica Green",
          doctorSpecialty: "Dermatologist",
          doctorContact: "jessica.green@hospital.com",
          date: "2025-04-11",
          time: "11:45 AM",
          status: "Scheduled",
          room: "301",
          existingNotes: ["Follow-up appointment for skin rash."],
        },
        {
          id: "9",
          patient: "Michael Smith",
          patientAge: "29",
          patientGender: "Male",
          patientBloodType: "A+",
          patientMedicalRecord: "MS-2025-009",
          doctor: "Dr. David Lee",
          doctorSpecialty: "Pulmonologist",
          doctorContact: "david.lee@hospital.com",
          date: "2025-04-12",
          time: "9:15 AM",
          status: "Finished",
          room: "506",
          existingNotes: ["Patient recovering from pneumonia."],
        },
        {
          id: "10",
          patient: "Olivia Davis",
          patientAge: "27",
          patientGender: "Female",
          patientBloodType: "AB-",
          patientMedicalRecord: "OD-2025-010",
          doctor: "Dr. Jane Smith",
          doctorSpecialty: "Pediatrician",
          doctorContact: "jane.smith@hospital.com",
          date: "2025-04-13",
          time: "2:30 PM",
          status: "Scheduled",
          room: "208",
          existingNotes: ["Routine check-up scheduled."],
        },
        {
          id: "11",
          patient: "Sophia Taylor",
          patientAge: "34",
          patientGender: "Female",
          patientBloodType: "O+",
          patientMedicalRecord: "ST-2025-011",
          doctor: "Dr. Robert Adams",
          doctorSpecialty: "Endocrinologist",
          doctorContact: "robert.adams@hospital.com",
          date: "2025-04-14",
          time: "10:00 AM",
          status: "Scheduled",
          room: "109",
          existingNotes: ["Follow-up for thyroid management."],
        },
        {
          id: "12",
          patient: "Mason Clark",
          patientAge: "40",
          patientGender: "Male",
          patientBloodType: "B+",
          patientMedicalRecord: "MC-2025-012",
          doctor: "Dr. Emily White",
          doctorSpecialty: "Cardiologist",
          doctorContact: "emily.white@hospital.com",
          date: "2025-04-16",
          time: "4:00 PM",
          status: "Finished",
          room: "310",
          existingNotes: ["Patient underwent heart check-up."],
        },
        {
          id: "13",
          patient: "Isabella Wilson",
          patientAge: "23",
          patientGender: "Female",
          patientBloodType: "A-",
          patientMedicalRecord: "IW-2025-013",
          doctor: "Dr. Sarah Johnson",
          doctorSpecialty: "Orthopedic Surgeon",
          doctorContact: "sarah.johnson@hospital.com",
          date: "2025-04-18",
          time: "1:00 PM",
          status: "Scheduled",
          room: "112",
          existingNotes: ["Pre-surgical consultation for ankle injury."],
        },
        {
          id: "14",
          patient: "Jackson Lee",
          patientAge: "36",
          patientGender: "Male",
          patientBloodType: "AB+",
          patientMedicalRecord: "JL-2025-014",
          doctor: "Dr. Michael Brown",
          doctorSpecialty: "Neurologist",
          doctorContact: "michael.brown@hospital.com",
          date: "2025-04-19",
          time: "10:00 AM",
          status: "Scheduled",
          room: "403",
          existingNotes: ["Patient reporting frequent headaches."],
        },
        {
          id: "15",
          patient: "Henry Harris",
          patientAge: "50",
          patientGender: "Male",
          patientBloodType: "O-",
          patientMedicalRecord: "HH-2025-015",
          doctor: "Dr. William Harris",
          doctorSpecialty: "Gastroenterologist",
          doctorContact: "william.harris@hospital.com",
          date: "2025-04-20",
          time: "2:15 PM",
          status: "Scheduled",
          room: "306",
          existingNotes: ["Routine consultation for digestive issues."],
        },
        {
          id: "16",
          patient: "Charlotte Anderson",
          patientAge: "42",
          patientGender: "Female",
          patientBloodType: "B+",
          patientMedicalRecord: "CA-2025-016",
          doctor: "Dr. Jessica Green",
          doctorSpecialty: "Dermatologist",
          doctorContact: "jessica.green@hospital.com",
          date: "2025-04-21",
          time: "3:45 PM",
          status: "Finished",
          room: "501",
          existingNotes: ["Follow-up on eczema treatment."],
        },
        {
          id: "17",
          patient: "Lucas Hall",
          patientAge: "28",
          patientGender: "Male",
          patientBloodType: "A+",
          patientMedicalRecord: "LH-2025-017",
          doctor: "Dr. David Lee",
          doctorSpecialty: "Pulmonologist",
          doctorContact: "david.lee@hospital.com",
          date: "2025-04-22",
          time: "9:30 AM",
          status: "Scheduled",
          room: "504",
          existingNotes: ["Check-up for asthma management."],
        },
        {
          id: "18",
          patient: "Amelia Young",
          patientAge: "27",
          patientGender: "Female",
          patientBloodType: "AB+",
          patientMedicalRecord: "AY-2025-018",
          doctor: "Dr. Jane Smith",
          doctorSpecialty: "Pediatrician",
          doctorContact: "jane.smith@hospital.com",
          date: "2025-04-24",
          time: "2:00 PM",
          status: "Finished",
          room: "105",
          existingNotes: ["Routine pediatric check-up."],
        },
        {
          id: "19",
          patient: "Elijah Martinez",
          patientAge: "31",
          patientGender: "Male",
          patientBloodType: "O+",
          patientMedicalRecord: "EM-2025-019",
          doctor: "Dr. Sarah Johnson",
          doctorSpecialty: "Orthopedic Surgeon",
          doctorContact: "sarah.johnson@hospital.com",
          date: "2025-04-26",
          time: "11:00 AM",
          status: "Scheduled",
          room: "109",
          existingNotes: ["Post-injury orthopedic evaluation."],
        },
        {
          id: "20",
          patient: "Benjamin Robinson",
          patientAge: "38",
          patientGender: "Male",
          patientBloodType: "B+",
          patientMedicalRecord: "BR-2025-020",
          doctor: "Dr. Robert Adams",
          doctorSpecialty: "Endocrinologist",
          doctorContact: "robert.adams@hospital.com",
          date: "2025-04-27",
          time: "1:00 PM",
          status: "Scheduled",
          room: "202",
          existingNotes: ["Follow-up for diabetes check."],
        },
      ],
      newNote: "",
    };
  },
  methods: {
    addNote() {
      if (this.newNote.trim() !== "") {
        this.appointment.existingNotes.push(this.newNote);
        this.newNote = "";
      }
    },
  },
  created() {
    const appointmentId = this.$route.params.id;
    this.appointment = this.appointments.find((a) => a.id === appointmentId);
  },
};
</script>

<style scoped>
.header-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.patient-info p,
.doctor-info p {
  color: #222;
  font-family: "Assistant", sans-serif;
  justify-content: center;
  margin: 4px 0;
}

.patient-name,
.doctor-name {
  margin: 4px 0;
  font-size: 1.5rem;
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
  font-size: 16px;
  resize: none;
  font-family: "Assistant", sans-serif;
}

.button-container {
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

.notes-header {
  font-family: "Assistant", sans-serif;
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

strong {
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #345a98;
  margin-bottom: 10px;
  margin-right: 2px;
}

li {
  list-style: none;
  margin-left: -30px;
  margin-top: 5px;
}
</style>
