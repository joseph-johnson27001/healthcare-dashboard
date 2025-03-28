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
      <TableCard>
        <DoctorLocationTable :doctors="doctors" />
      </TableCard>

      <TableCard>
        <PatientAdmissionTable :patients="patients" />
      </TableCard>
    </div>
  </div>
</template>

<script>
import KPICard from "@/components/UI/KPICard.vue";
import TableCard from "@/components/UI/TableCard.vue";
import PatientAdmissionTable from "@/components/Tables/PatientAdmissionTable.vue";
import DoctorLocationTable from "@/components/Tables/DoctorLocationTable.vue";

export default {
  name: "DashboardPage",
  components: {
    KPICard,
    TableCard,
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
          iconColor: "#28a745",
          iconContainerColor: "rgba(40, 167, 69, 0.1)",
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
