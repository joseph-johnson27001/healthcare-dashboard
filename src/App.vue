<template>
  <div id="app">
    <SideBar />
    <div class="main-content">
      <TopCard />
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
      <!-- Patient Admission Table Card -->
      <TableCard title="Patient Admissions" :iconClass="'fas fa-hospital'">
        <PatientAdmissionTable :patients="patients" />
      </TableCard>

      <!-- Doctor Availability Table Card -->
      <TableCard title="Doctor Availability" :iconClass="'fas fa-stethoscope'">
        <DoctorAvailabilityTable />
      </TableCard>
    </div>
  </div>
</template>

<script>
import SideBar from "./components/Navigation/SideBar.vue";
import TopCard from "./components/UI/TopCard.vue";
import KPICard from "./components/UI/KPICard.vue";
import TableCard from "./components/UI/TableCard.vue";
import PatientAdmissionTable from "./components/Tables/PatientAdmissionTable.vue";
import DoctorAvailabilityTable from "./components/Tables/DoctorAvailabilityTable.vue";

export default {
  name: "App",
  components: {
    SideBar,
    TopCard,
    KPICard,
    TableCard,
    PatientAdmissionTable,
    DoctorAvailabilityTable,
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
    };
  },
};
</script>

<style>
body {
  margin: 0px !important;
  scrollbar-width: none;
  font-family: "Inter", sans-serif;
  overflow-y: hidden;
}

::-webkit-scrollbar {
  display: none;
}

#app {
  display: flex;
  min-height: 100vh;
  width: 100%;
}

.main-content {
  flex-grow: 1;
  background-color: #f6f5f8;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  padding: 20px;
}

.kpi-section {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 20px;
}

/* Styling for tables */
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 30px;
}

th,
td {
  text-align: left;
  padding: 8px;
}

th {
  background-color: #f1f1f1;
  font-weight: bold;
}

td {
  background-color: #ffffff;
}

tr:nth-child(even) td {
  background-color: #f9f9f9;
}

table th,
table td {
  border: 1px solid #ddd;
  text-align: center;
}

table th {
  background-color: #f1f1f1;
  font-weight: bold;
}

table td {
  font-size: 14px;
}
</style>
