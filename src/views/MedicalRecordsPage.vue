<template>
  <div class="medical-records-container">
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
        <MedicalRecordsTable :records="medicalRecords" />
      </ContainerCard>
    </div>
  </div>
</template>

<script>
import KPICard from "@/components/UI/KPICard.vue";
import ContainerCard from "@/components/UI/ContainerCard.vue";
import MedicalRecordsTable from "@/components/Tables/MedicalRecordsTable.vue";

export default {
  name: "MedicalRecordsPage",
  components: {
    KPICard,
    ContainerCard,
    MedicalRecordsTable,
  },
  data() {
    return {
      // KPI Data
      kpis: [
        {
          icon: "fas fa-stethoscope",
          name: "Total Medical Records",
          value: "34,567",
        },
        {
          icon: "fas fa-user-injured",
          name: "Most Common Diagnosis",
          value: "Hypertension",
          iconColor: "#ff9800",
          iconContainerColor: "rgba(255, 152, 0, 0.1)",
        },
        {
          icon: "fas fa-exclamation-triangle",
          name: "Flagged Records",
          value: "45",
          iconColor: "#ff4d4d",
          iconContainerColor: "rgba(255, 77, 77, 0.1)",
        },
        {
          icon: "fas fa-check-circle",
          name: "Treatment Compliance",
          value: "90%",
          iconColor: "#28c76f",
          iconContainerColor: "rgba(39, 148, 97, 0.1)",
        },
        {
          icon: "fas fa-clock",
          name: "Pending Diagnoses",
          value: "120",
          iconColor: "#ffc107",
          iconContainerColor: "rgba(255, 193, 7, 0.1)",
        },
        {
          icon: "fas fa-user-md",
          name: "Top Diagnosing Doctor",
          value: "Dr. Emily Watson",
          iconColor: "#007bff",
          iconContainerColor: "rgba(0, 123, 255, 0.1)",
        },
      ],

      // Medical Records Data
      medicalRecords: [
        {
          id: "MR001",
          patient: "Alice Johnson",
          doctor: "Dr. John Doe",
          diagnosis: "Hypertension",
          date: "March 25, 2025",
          status: "Completed",
        },
        {
          id: "MR002",
          patient: "Bob Matthews",
          doctor: "Dr. Sarah Johnson",
          diagnosis: "Asthma",
          date: "March 26, 2025",
          status: "Pending",
        },
        {
          id: "MR003",
          patient: "Michael Harris",
          doctor: "Dr. Emily White",
          diagnosis: "Diabetes",
          date: "March 23, 2025",
          status: "In Progress",
        },
        {
          id: "MR004",
          patient: "Elizabeth Harris",
          doctor: "Dr. William Lee",
          diagnosis: "Hypertension",
          date: "March 17, 2025",
          status: "Completed",
        },
        {
          id: "MR005",
          patient: "James Wilson",
          doctor: "Dr. Robert Adams",
          diagnosis: "High Cholesterol",
          date: "March 20, 2025",
          status: "Pending",
        },
      ],
    };
  },
};
</script>

<style scoped>
.kpi-section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
