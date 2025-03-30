<template>
  <div class="dashboard">
    <!-- KPI Cards Section -->
    <div class="kpi-section">
      <KPICard
        v-for="(kpi, index) in kpis"
        :key="index"
        :iconClass="kpi.icon"
        :kpiName="kpi.name"
        :value="kpi.value"
        :iconColor="kpi.iconColor"
        :iconContainerColor="kpi.iconContainerColor"
      />
    </div>

    <!-- Tables Section -->
    <div class="tables-section">
      <ContainerCard>
        <PatientAdmissionTable :patients="patients" />
      </ContainerCard>

      <ContainerCard>
        <DoctorLocationTable :doctors="doctors" />
      </ContainerCard>
    </div>
  </div>
</template>

<script>
import KPICard from "@/components/UI/KPICard.vue";
import ContainerCard from "@/components/UI/ContainerCard.vue";
import PatientAdmissionTable from "@/components/Tables/PatientAdmissionTable.vue";
import DoctorLocationTable from "@/components/Tables/DoctorLocationTable.vue";

export default {
  name: "DashboardPage",
  components: {
    KPICard,
    ContainerCard,
    PatientAdmissionTable,
    DoctorLocationTable,
  },
  data() {
    return {
      kpis: [
        {
          icon: "fas fa-procedures",
          name: "Current Patients",
          value: "120",
        },
        {
          icon: "fas fa-stethoscope",
          name: "Doctors on Duty",
          value: "8",
          iconColor: "#007bff",
          iconContainerColor: "rgba(0, 123, 255, 0.1)",
        },
        {
          icon: "fas fa-bed",
          name: "Available Beds",
          value: "18",
        },
        {
          icon: "fas fa-flask",
          name: "Pending Lab Results",
          value: "12",
          iconColor: "#ffc107",
          iconContainerColor: "rgba(255, 193, 7, 0.1)",
        },
        {
          icon: "fas fa-heartbeat",
          name: "Critical Patients",
          value: "5",
          iconColor: "#ff4d4d",
          iconContainerColor: "rgba(255, 77, 77, 0.1)",
        },
        {
          icon: "fas fa-user-injured",
          name: "Emergency Cases",
          value: "2",
          iconColor: "#dc3545",
          iconContainerColor: "rgba(220, 53, 69, 0.1)",
        },
        {
          icon: "fas fa-clock",
          name: "Waiting Time",
          value: "45 mins",
          iconColor: "#ffc107",
          iconContainerColor: "rgba(255, 193, 7, 0.1)",
        },
        {
          icon: "fas fa-users",
          name: "Patients in Queue",
          value: "15",
          iconColor: "#007bff",
          iconContainerColor: "rgba(0, 123, 255, 0.1)",
        },
      ],
      patients: [
        {
          id: "001",
          name: "Alice Johnson",
          admissionDate: "March 25, 2025",
          dischargeDate: "",
          status: "Admitted",
        },
        {
          id: "002",
          name: "Bob Matthews",
          admissionDate: "March 26, 2025",
          dischargeDate: "March 27, 2025",
          status: "Discharged",
        },
        {
          id: "003",
          name: "Sarah Turner",
          admissionDate: "March 24, 2025",
          dischargeDate: "",
          status: "Admitted",
        },
        {
          id: "004",
          name: "Michael Harris",
          admissionDate: "March 23, 2025",
          dischargeDate: "March 26, 2025",
          status: "Discharged",
        },
        {
          id: "005",
          name: "John Doe",
          admissionDate: "March 22, 2025",
          dischargeDate: "",
          status: "Admitted",
        },
        {
          id: "006",
          name: "Mary Smith",
          admissionDate: "March 21, 2025",
          dischargeDate: "March 23, 2025",
          status: "Discharged",
        },
        {
          id: "007",
          name: "James Wilson",
          admissionDate: "March 20, 2025",
          dischargeDate: "",
          status: "Admitted",
        },
        {
          id: "008",
          name: "Emily Brown",
          admissionDate: "March 19, 2025",
          dischargeDate: "",
          status: "Admitted",
        },
        {
          id: "009",
          name: "William Lee",
          admissionDate: "March 18, 2025",
          dischargeDate: "",
          status: "Admitted",
        },
        {
          id: "010",
          name: "Elizabeth Harris",
          admissionDate: "March 17, 2025",
          dischargeDate: "",
          status: "Admitted",
        },
        {
          id: "011",
          name: "David Martinez",
          admissionDate: "March 16, 2025",
          dischargeDate: "March 18, 2025",
          status: "Discharged",
        },
        {
          id: "012",
          name: "Sophia Clark",
          admissionDate: "March 15, 2025",
          dischargeDate: "March 16, 2025",
          status: "Discharged",
        },
        {
          id: "013",
          name: "Lucas Robinson",
          admissionDate: "March 14, 2025",
          dischargeDate: "March 15, 2025",
          status: "Discharged",
        },
        {
          id: "014",
          name: "Chloe Walker",
          admissionDate: "March 13, 2025",
          dischargeDate: "",
          status: "Admitted",
        },
        {
          id: "015",
          name: "Ethan Scott",
          admissionDate: "March 12, 2025",
          dischargeDate: "",
          status: "Admitted",
        },
        {
          id: "016",
          name: "Olivia Johnson",
          admissionDate: "March 11, 2025",
          dischargeDate: "March 14, 2025",
          status: "Discharged",
        },
        {
          id: "017",
          name: "Daniel White",
          admissionDate: "March 10, 2025",
          dischargeDate: "",
          status: "Admitted",
        },
        {
          id: "018",
          name: "Ava Martinez",
          admissionDate: "March 9, 2025",
          dischargeDate: "",
          status: "Admitted",
        },
        {
          id: "019",
          name: "Mason Lewis",
          admissionDate: "March 8, 2025",
          dischargeDate: "March 10, 2025",
          status: "Discharged",
        },
        {
          id: "020",
          name: "Harper Nelson",
          admissionDate: "March 7, 2025",
          dischargeDate: "March 9, 2025",
          status: "Discharged",
        },
        {
          id: "021",
          name: "Benjamin Carter",
          admissionDate: "March 6, 2025",
          dischargeDate: "",
          status: "Admitted",
        },
        {
          id: "022",
          name: "Ella Davis",
          admissionDate: "March 5, 2025",
          dischargeDate: "March 6, 2025",
          status: "Discharged",
        },
        {
          id: "023",
          name: "Henry Adams",
          admissionDate: "March 4, 2025",
          dischargeDate: "",
          status: "Admitted",
        },
        {
          id: "024",
          name: "Lily Parker",
          admissionDate: "March 3, 2025",
          dischargeDate: "",
          status: "Admitted",
        },
        {
          id: "025",
          name: "Jack Thomas",
          admissionDate: "March 2, 2025",
          dischargeDate: "March 3, 2025",
          status: "Discharged",
        },
        {
          id: "026",
          name: "Charlotte Baker",
          admissionDate: "March 1, 2025",
          dischargeDate: "",
          status: "Admitted",
        },
        {
          id: "027",
          name: "Samuel Green",
          admissionDate: "February 28, 2025",
          dischargeDate: "",
          status: "Admitted",
        },
        {
          id: "028",
          name: "Mia Wright",
          admissionDate: "February 27, 2025",
          dischargeDate: "February 28, 2025",
          status: "Discharged",
        },
        {
          id: "029",
          name: "Logan Hall",
          admissionDate: "February 26, 2025",
          dischargeDate: "",
          status: "Admitted",
        },
        {
          id: "030",
          name: "Zoe King",
          admissionDate: "February 25, 2025",
          dischargeDate: "",
          status: "Admitted",
        },
      ],
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
    };
  },
};
</script>

<style scoped>
.kpi-section {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 20px;
}

.tables-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
}

@media (max-width: 1100px) {
  .kpi-section {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 600px) {
  .kpi-section {
    grid-template-columns: 1fr;
  }
}
</style>
