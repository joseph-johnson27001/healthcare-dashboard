<template>
  <div class="doctor-profile">
    <ContainerCard>
      <div v-if="doctor" class="doctor-card">
        <h1 class="doctor-name">{{ doctor.name }}</h1>
        <p class="specialty">
          <strong>Specialty:</strong> {{ doctor.specialty }}
        </p>
        <p class="location">
          <strong>Current Location:</strong> {{ doctor.currentLocation }}
        </p>
        <p
          class="status"
          :class="{
            available: doctor.status === 'Available',
            unavailable: doctor.status === 'Unavailable',
          }"
        >
          <strong>Status:</strong> {{ doctor.status }}
        </p>
      </div>

      <div v-else class="error-message">
        <p>Doctor not found.</p>
      </div>
    </ContainerCard>
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
      doctors: [
        {
          id: "D001",
          name: "Dr. John Doe",
          specialty: "Cardiology",
          currentLocation: "Cardiology Department, City Hospital",
          status: "Available",
        },
        {
          id: "D002",
          name: "Dr. Jane Smith",
          specialty: "Neurology",
          currentLocation: "Neurology Clinic, Downtown Health Center",
          status: "Unavailable",
        },
        {
          id: "D003",
          name: "Dr. Emily White",
          specialty: "Orthopedics",
          currentLocation: "Orthopedic Ward, City Medical Center",
          status: "Available",
        },
        {
          id: "D004",
          name: "Dr. Michael Brown",
          specialty: "Pediatrics",
          currentLocation: "Pediatric Unit, Children's Hospital",
          status: "Unavailable",
        },
        {
          id: "D005",
          name: "Dr. Sarah Johnson",
          specialty: "Dermatology",
          currentLocation: "Dermatology Clinic, Westside Medical",
          status: "Available",
        },
        {
          id: "D006",
          name: "Dr. David Lee",
          specialty: "General Surgery",
          currentLocation: "Surgical Unit, Regional Hospital",
          status: "Unavailable",
        },
        {
          id: "D007",
          name: "Dr. Jessica Green",
          specialty: "Obstetrics & Gynecology",
          currentLocation: "OB/GYN Department, City Medical Center",
          status: "Available",
        },
        {
          id: "D008",
          name: "Dr. Robert Adams",
          specialty: "Psychiatry",
          currentLocation: "Psychiatric Ward, State Mental Health Center",
          status: "Available",
        },
        {
          id: "D009",
          name: "Dr. Lisa Thompson",
          specialty: "Endocrinology",
          currentLocation: "Endocrinology Clinic, Northside Hospital",
          status: "Unavailable",
        },
        {
          id: "D010",
          name: "Dr. William Harris",
          specialty: "Gastroenterology",
          currentLocation: "Gastroenterology Department, Downtown Hospital",
          status: "Available",
        },
        {
          id: "D011",
          name: "Dr. Anna Clark",
          specialty: "Rheumatology",
          currentLocation: "Rheumatology Clinic, Central Health Center",
          status: "Unavailable",
        },
        {
          id: "D012",
          name: "Dr. George King",
          specialty: "Hematology",
          currentLocation: "Hematology Department, City Hospital",
          status: "Available",
        },
        {
          id: "D013",
          name: "Dr. Charlotte Adams",
          specialty: "Oncology",
          currentLocation: "Cancer Unit, State Medical Center",
          status: "Available",
        },
        {
          id: "D014",
          name: "Dr. Peter Walker",
          specialty: "Nephrology",
          currentLocation: "Kidney Clinic, Downtown Hospital",
          status: "Unavailable",
        },
        {
          id: "D015",
          name: "Dr. Olivia Martin",
          specialty: "Pediatric Surgery",
          currentLocation: "Surgical Unit, Children's Hospital",
          status: "Available",
        },
        {
          id: "D016",
          name: "Dr. Thomas Harris",
          specialty: "Pulmonology",
          currentLocation: "Lung Care Unit, City Medical Center",
          status: "Unavailable",
        },
        {
          id: "D017",
          name: "Dr. Laura Lee",
          specialty: "Infectious Diseases",
          currentLocation: "Infectious Disease Department, State Hospital",
          status: "Available",
        },
        {
          id: "D018",
          name: "Dr. Kevin Wright",
          specialty: "Emergency Medicine",
          currentLocation: "Emergency Room, Downtown Hospital",
          status: "Available",
        },
        {
          id: "D019",
          name: "Dr. Grace Evans",
          specialty: "Plastic Surgery",
          currentLocation: "Plastic Surgery Clinic, Westside Hospital",
          status: "Unavailable",
        },
        {
          id: "D020",
          name: "Dr. James Young",
          specialty: "Urology",
          currentLocation: "Urology Department, Central Hospital",
          status: "Available",
        },
        {
          id: "D021",
          name: "Dr. Megan Turner",
          specialty: "Geriatrics",
          currentLocation: "Geriatric Care Unit, Eastside Medical Center",
          status: "Available",
        },
        {
          id: "D022",
          name: "Dr. Frank Baker",
          specialty: "Vascular Surgery",
          currentLocation: "Vascular Surgery Clinic, City Medical Center",
          status: "Unavailable",
        },
        {
          id: "D023",
          name: "Dr. Nancy Moore",
          specialty: "Radiology",
          currentLocation: "Radiology Department, North Hospital",
          status: "Available",
        },
        {
          id: "D024",
          name: "Dr. Daniel Carter",
          specialty: "Ophthalmology",
          currentLocation: "Eye Care Center, Downtown Medical Center",
          status: "Unavailable",
        },
        {
          id: "D025",
          name: "Dr. Susan Lee",
          specialty: "Anesthesiology",
          currentLocation: "Surgical Anesthesia Unit, Regional Hospital",
          status: "Available",
        },
        {
          id: "D026",
          name: "Dr. Jacob Harris",
          specialty: "Orthopedic Surgery",
          currentLocation: "Orthopedic Department, City Hospital",
          status: "Unavailable",
        },
        {
          id: "D027",
          name: "Dr. Emily King",
          specialty: "Neurological Surgery",
          currentLocation: "Neuro Surgery Department, State Hospital",
          status: "Available",
        },
        {
          id: "D028",
          name: "Dr. Mark Hall",
          specialty: "General Medicine",
          currentLocation: "General Medicine Clinic, Central Hospital",
          status: "Unavailable",
        },
        {
          id: "D029",
          name: "Dr. Lily Evans",
          specialty: "Gynecology",
          currentLocation: "Women's Health Center, City Medical Center",
          status: "Available",
        },
        {
          id: "D030",
          name: "Dr. Harry Nelson",
          specialty: "Pediatric Neurology",
          currentLocation: "Neurology Department, Children's Hospital",
          status: "Available",
        },
      ],
      doctor: null,
    };
  },
  created() {
    const doctorId = this.$route.params.id;
    this.doctor = this.doctors.find((doc) => doc.id === doctorId);
  },
};
</script>

<style scoped>
.back-button {
  background-color: #6685ff;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 5px;
}

.back-button:hover {
  background-color: #5673d1;
}

.doctor-card {
  margin-top: 15px;
}

.doctor-name {
  font-size: 24px;
  font-weight: bold;
  color: #345a98;
}

.specialty,
.location,
.status {
  font-size: 16px;
  margin-top: 8px;
}

.status.available {
  color: #28a745;
  font-weight: bold;
}

.status.unavailable {
  color: #dc3545;
  font-weight: bold;
}

.error-message {
  color: red;
  text-align: center;
  font-size: 18px;
}
</style>
