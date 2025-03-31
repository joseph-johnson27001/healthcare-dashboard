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
      patients: [
        {
          id: "001",
          name: "Alice Johnson",
          age: 35,
          gender: "Female",
          bloodType: "O+",
          medicalRecord: "MRN-001",
          contact: {
            phone: "+1 987 654 321",
            email: "alicejohnson@example.com",
          },
          emergencyContact: { name: "John Doe", phone: "+1 123 456 789" },
          existingNotes: [
            "Patient has a history of mild allergies to penicillin.",
            "Regular follow-ups recommended for blood pressure monitoring.",
          ],
          notes: "",
        },
        {
          id: "002",
          name: "Bob Matthews",
          age: 42,
          gender: "Male",
          bloodType: "A-",
          medicalRecord: "MRN-002",
          contact: {
            phone: "+1 555 234 567",
            email: "bobmatthews@example.com",
          },
          emergencyContact: { name: "Sara Matthews", phone: "+1 555 987 654" },
          existingNotes: [
            "Recently discharged after minor surgery.",
            "No complications reported.",
            "Follow-up in two weeks.",
          ],
          notes: "",
        },
        {
          id: "003",
          name: "Sarah Turner",
          age: 29,
          gender: "Female",
          bloodType: "B+",
          medicalRecord: "MRN-003",
          contact: {
            phone: "+1 666 321 890",
            email: "sarahturner@example.com",
          },
          emergencyContact: { name: "James Turner", phone: "+1 666 999 123" },
          existingNotes: [
            "Undergoing treatment for asthma.",
            "Prescribed new inhaler.",
          ],
          notes: "",
        },
        {
          id: "004",
          name: "Michael Harris",
          age: 50,
          gender: "Male",
          bloodType: "O-",
          medicalRecord: "MRN-004",
          contact: {
            phone: "+1 777 222 333",
            email: "michaelharris@example.com",
          },
          emergencyContact: { name: "Laura Harris", phone: "+1 777 444 555" },
          existingNotes: [
            "Discharged after routine check-up.",
            "No further action required.",
          ],
          notes: "",
        },
        {
          id: "005",
          name: "John Doe",
          age: 60,
          gender: "Male",
          bloodType: "AB+",
          medicalRecord: "MRN-005",
          contact: { phone: "+1 888 777 666", email: "johndoe@example.com" },
          emergencyContact: { name: "Jane Doe", phone: "+1 888 555 444" },
          existingNotes: [
            "Patient admitted for cardiac monitoring.",
            "Awaiting test results.",
          ],
          notes: "",
        },
        {
          id: "006",
          name: "Mary Smith",
          age: 47,
          gender: "Female",
          bloodType: "A+",
          medicalRecord: "MRN-006",
          contact: { phone: "+1 999 888 777", email: "marysmith@example.com" },
          emergencyContact: { name: "Tom Smith", phone: "+1 999 777 666" },
          existingNotes: [
            "Discharged after successful knee surgery.",
            "Physical therapy recommended for recovery.",
          ],
          notes: "",
        },
        {
          id: "007",
          name: "James Wilson",
          age: 55,
          gender: "Male",
          bloodType: "B-",
          medicalRecord: "MRN-007",
          contact: {
            phone: "+1 123 456 789",
            email: "jameswilson@example.com",
          },
          emergencyContact: { name: "Emma Wilson", phone: "+1 123 654 987" },
          existingNotes: [
            "Patient diagnosed with type 2 diabetes.",
            "Started on insulin therapy.",
          ],
          notes: "",
        },
        {
          id: "008",
          name: "Emily Brown",
          age: 33,
          gender: "Female",
          bloodType: "O+",
          medicalRecord: "MRN-008",
          contact: { phone: "+1 321 654 987", email: "emilybrown@example.com" },
          emergencyContact: { name: "Luke Brown", phone: "+1 321 789 654" },
          existingNotes: [
            "Experiencing frequent migraines.",
            "Neurology consultation scheduled.",
          ],
          notes: "",
        },
        {
          id: "009",
          name: "William Lee",
          age: 40,
          gender: "Male",
          bloodType: "AB-",
          medicalRecord: "MRN-009",
          contact: { phone: "+1 444 555 666", email: "williamlee@example.com" },
          emergencyContact: { name: "Sophia Lee", phone: "+1 444 777 888" },
          existingNotes: [
            "Recovering from a minor back injury.",
            "Prescribed pain management medication.",
          ],
          notes: "",
        },
        {
          id: "010",
          name: "Elizabeth Harris",
          age: 38,
          gender: "Female",
          bloodType: "B+",
          medicalRecord: "MRN-010",
          contact: {
            phone: "+1 555 666 777",
            email: "elizabethharris@example.com",
          },
          emergencyContact: { name: "Michael Harris", phone: "+1 555 999 000" },
          existingNotes: [
            "Underwent appendectomy last week.",
            "Post-surgery check-up in three days.",
          ],
          notes: "",
        },
        {
          id: "011",
          name: "David Martinez",
          age: 46,
          gender: "Male",
          bloodType: "O-",
          medicalRecord: "MRN-011",
          contact: {
            phone: "+1 666 777 888",
            email: "davidmartinez@example.com",
          },
          emergencyContact: {
            name: "Olivia Martinez",
            phone: "+1 666 999 111",
          },
          existingNotes: [
            "Admitted for pneumonia treatment.",
            "Currently on IV antibiotics.",
          ],
          notes: "",
        },
        {
          id: "012",
          name: "Sophia Clark",
          age: 31,
          gender: "Female",
          bloodType: "A-",
          medicalRecord: "MRN-012",
          contact: {
            phone: "+1 777 888 999",
            email: "sophiaclark@example.com",
          },
          emergencyContact: { name: "Henry Clark", phone: "+1 777 111 222" },
          existingNotes: [
            "Routine pregnancy check-up completed.",
            "Baby's growth is normal.",
          ],
          notes: "",
        },
        {
          id: "013",
          name: "Lucas Robinson",
          age: 28,
          gender: "Male",
          bloodType: "B+",
          medicalRecord: "MRN-013",
          contact: {
            phone: "+1 888 999 000",
            email: "lucasrobinson@example.com",
          },
          emergencyContact: { name: "Emma Robinson", phone: "+1 888 222 333" },
          existingNotes: [
            "Mild concussion after sports injury.",
            "Advised rest and follow-up in one week.",
          ],
          notes: "",
        },
        {
          id: "014",
          name: "Chloe Walker",
          age: 26,
          gender: "Female",
          bloodType: "AB+",
          medicalRecord: "MRN-014",
          contact: {
            phone: "+1 999 000 111",
            email: "chloewalker@example.com",
          },
          emergencyContact: { name: "Jack Walker", phone: "+1 999 333 444" },
          existingNotes: [
            "Recovering from food poisoning.",
            "Dietary restrictions advised.",
          ],
          notes: "",
        },
        {
          id: "015",
          name: "Ethan Scott",
          age: 52,
          gender: "Male",
          bloodType: "O+",
          medicalRecord: "MRN-015",
          contact: { phone: "+1 000 111 222", email: "ethanscott@example.com" },
          emergencyContact: { name: "Ella Scott", phone: "+1 000 333 444" },
          existingNotes: [
            "Patient is undergoing chemotherapy treatment.",
            "Next session scheduled for next week.",
          ],
          notes: "",
        },
        {
          id: "016",
          name: "Olivia Johnson",
          age: 45,
          gender: "Female",
          bloodType: "A+",
          medicalRecord: "MRN-016",
          contact: {
            phone: "+1 111 222 333",
            email: "oliviajohnson@example.com",
          },
          emergencyContact: { name: "Daniel Johnson", phone: "+1 111 444 555" },
          existingNotes: [
            "Recently discharged after observation for chest pain.",
            "No abnormalities detected.",
          ],
          notes: "",
        },
        {
          id: "017",
          name: "Daniel White",
          age: 39,
          gender: "Male",
          bloodType: "B-",
          medicalRecord: "MRN-017",
          contact: {
            phone: "+1 222 333 444",
            email: "danielwhite@example.com",
          },
          emergencyContact: { name: "Emma White", phone: "+1 222 555 666" },
          existingNotes: [
            "Admitted with pneumonia symptoms.",
            "Receiving antibiotics and oxygen therapy.",
          ],
          notes: "",
        },
        {
          id: "018",
          name: "Ava Martinez",
          age: 29,
          gender: "Female",
          bloodType: "O+",
          medicalRecord: "MRN-018",
          contact: {
            phone: "+1 333 444 555",
            email: "avamartinez@example.com",
          },
          emergencyContact: { name: "Jack Martinez", phone: "+1 333 666 777" },
          existingNotes: [
            "Under observation for severe allergic reaction.",
            "Responding well to treatment.",
          ],
          notes: "",
        },
        {
          id: "019",
          name: "Mason Lewis",
          age: 53,
          gender: "Male",
          bloodType: "AB+",
          medicalRecord: "MRN-019",
          contact: { phone: "+1 444 555 666", email: "masonlewis@example.com" },
          emergencyContact: { name: "Sophia Lewis", phone: "+1 444 777 888" },
          existingNotes: [
            "Discharged after successful gallbladder surgery.",
            "Advised to follow a low-fat diet.",
          ],
          notes: "",
        },
        {
          id: "020",
          name: "Harper Nelson",
          age: 34,
          gender: "Female",
          bloodType: "B+",
          medicalRecord: "MRN-020",
          contact: {
            phone: "+1 555 666 777",
            email: "harpernelson@example.com",
          },
          emergencyContact: { name: "David Nelson", phone: "+1 555 888 999" },
          existingNotes: [
            "Discharged after monitoring for dehydration.",
            "Advised to maintain fluid intake.",
          ],
          notes: "",
        },
        {
          id: "021",
          name: "Benjamin Carter",
          age: 48,
          gender: "Male",
          bloodType: "A-",
          medicalRecord: "MRN-021",
          contact: {
            phone: "+1 666 777 888",
            email: "benjamincarter@example.com",
          },
          emergencyContact: { name: "Jessica Carter", phone: "+1 666 999 000" },
          existingNotes: [
            "Admitted with high blood sugar levels.",
            "Diabetes management plan adjusted.",
          ],
          notes: "",
        },
        {
          id: "022",
          name: "Ella Davis",
          age: 41,
          gender: "Female",
          bloodType: "O-",
          medicalRecord: "MRN-022",
          contact: { phone: "+1 777 888 999", email: "elladavis@example.com" },
          emergencyContact: { name: "Liam Davis", phone: "+1 777 000 111" },
          existingNotes: [
            "Discharged after treatment for a minor head injury.",
            "No neurological issues detected.",
          ],
          notes: "",
        },
        {
          id: "023",
          name: "Henry Adams",
          age: 37,
          gender: "Male",
          bloodType: "AB-",
          medicalRecord: "MRN-023",
          contact: { phone: "+1 888 999 000", email: "henryadams@example.com" },
          emergencyContact: { name: "Olivia Adams", phone: "+1 888 222 333" },
          existingNotes: [
            "Admitted with persistent dizziness.",
            "Further tests ongoing.",
          ],
          notes: "",
        },
        {
          id: "024",
          name: "Lily Parker",
          age: 32,
          gender: "Female",
          bloodType: "B+",
          medicalRecord: "MRN-024",
          contact: { phone: "+1 999 000 111", email: "lilyparker@example.com" },
          emergencyContact: { name: "Ethan Parker", phone: "+1 999 333 444" },
          existingNotes: [
            "Admitted for appendicitis treatment.",
            "Surgery scheduled for tomorrow.",
          ],
          notes: "",
        },
        {
          id: "025",
          name: "Jack Thomas",
          age: 50,
          gender: "Male",
          bloodType: "A+",
          medicalRecord: "MRN-025",
          contact: { phone: "+1 000 111 222", email: "jackthomas@example.com" },
          emergencyContact: { name: "Grace Thomas", phone: "+1 000 333 444" },
          existingNotes: [
            "Discharged after routine colonoscopy.",
            "No abnormalities found.",
          ],
          notes: "",
        },
        {
          id: "026",
          name: "Charlotte Baker",
          age: 27,
          gender: "Female",
          bloodType: "O+",
          medicalRecord: "MRN-026",
          contact: {
            phone: "+1 111 222 333",
            email: "charlottebaker@example.com",
          },
          emergencyContact: { name: "James Baker", phone: "+1 111 444 555" },
          existingNotes: [
            "Admitted for complications related to asthma.",
            "Undergoing treatment with nebulizers.",
          ],
          notes: "",
        },
        {
          id: "027",
          name: "Samuel Green",
          age: 31,
          gender: "Male",
          bloodType: "B-",
          medicalRecord: "MRN-027",
          contact: {
            phone: "+1 222 333 444",
            email: "samuelgreen@example.com",
          },
          emergencyContact: { name: "Emma Green", phone: "+1 222 555 666" },
          existingNotes: [
            "Admitted for unexplained abdominal pain.",
            "Awaiting ultrasound results.",
          ],
          notes: "",
        },
        {
          id: "028",
          name: "Mia Wright",
          age: 44,
          gender: "Female",
          bloodType: "AB+",
          medicalRecord: "MRN-028",
          contact: { phone: "+1 333 444 555", email: "miawright@example.com" },
          emergencyContact: { name: "Henry Wright", phone: "+1 333 666 777" },
          existingNotes: [
            "Discharged after treating severe dehydration.",
            "Follow-up in one week.",
          ],
          notes: "",
        },
        {
          id: "029",
          name: "Logan Hall",
          age: 35,
          gender: "Male",
          bloodType: "O-",
          medicalRecord: "MRN-029",
          contact: { phone: "+1 444 555 666", email: "loganhall@example.com" },
          emergencyContact: { name: "Sophia Hall", phone: "+1 444 777 888" },
          existingNotes: [
            "Admitted for evaluation of persistent headaches.",
            "MRI scan scheduled.",
          ],
          notes: "",
        },
        {
          id: "030",
          name: "Zoe King",
          age: 40,
          gender: "Female",
          bloodType: "A-",
          medicalRecord: "MRN-030",
          contact: { phone: "+1 555 666 777", email: "zoeking@example.com" },
          emergencyContact: { name: "David King", phone: "+1 555 888 999" },
          existingNotes: [
            "Admitted for suspected kidney infection.",
            "Awaiting lab results.",
          ],
          notes: "",
        },
      ],
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
  created() {
    const patientId = this.$route.params.id;
    this.patient = this.patients.find((p) => p.id === patientId);
  },
};
</script>
