<template>
  <div class="prescriptions-container">
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
        <PrescriptionsTable :prescriptions="prescriptions" />
      </ContainerCard>
    </div>
  </div>
</template>

<script>
import KPICard from "@/components/UI/KPICard.vue";
import ContainerCard from "@/components/UI/ContainerCard.vue";
import PrescriptionsTable from "@/components/Tables/PrescriptionsTable.vue";

export default {
  name: "PrescriptionsPage",
  components: {
    KPICard,
    ContainerCard,
    PrescriptionsTable,
  },
  data() {
    return {
      kpis: [
        {
          icon: "fas fa-file-prescription",
          name: "Total Prescriptions",
          value: "12,450",
        },
        {
          icon: "fas fa-pills",
          name: "Most Prescribed Drug",
          value: "Paracetamol",
          iconColor: "#ff9800",
          iconContainerColor: "rgba(255, 152, 0, 0.1)",
        },
        {
          icon: "fas fa-exclamation-triangle",
          name: "Flagged Prescriptions",
          value: "25",
          iconColor: "#ff4d4d",
          iconContainerColor: "rgba(255, 77, 77, 0.1)",
        },
        {
          icon: "fas fa-check-circle",
          name: "Pharmacy Fulfillment Rate",
          value: "94%",
          iconColor: "#28c76f",
          iconContainerColor: "rgba(39, 148, 97, 0.1)",
        },
        {
          icon: "fas fa-clock",
          name: "Pending Approvals",
          value: "130",
          iconColor: "#ffc107",
          iconContainerColor: "rgba(255, 193, 7, 0.1)",
        },
        {
          icon: "fas fa-user-md",
          name: "Top Prescribing Doctor",
          value: "Dr. John Smith",
          iconColor: "#007bff",
          iconContainerColor: "rgba(0, 123, 255, 0.1)",
        },
      ],
      prescriptions: [
        {
          id: "RX001",
          doctor: "Dr. John Doe",
          patient: "Alice Johnson",
          medication: "Ibuprofen 200mg",
          dateIssued: "March 25, 2025",
          status: "Fulfilled",
        },
        {
          id: "RX002",
          doctor: "Dr. Sarah Johnson",
          patient: "Bob Matthews",
          medication: "Paracetamol 500mg",
          dateIssued: "March 26, 2025",
          status: "Pending",
        },
        {
          id: "RX003",
          doctor: "Dr. Emily White",
          patient: "Michael Harris",
          medication: "Amoxicillin 250mg",
          dateIssued: "March 23, 2025",
          status: "Rejected",
        },
        {
          id: "RX004",
          doctor: "Dr. William Lee",
          patient: "Elizabeth Harris",
          medication: "Metformin 500mg",
          dateIssued: "March 17, 2025",
          status: "Fulfilled",
        },
        {
          id: "RX005",
          doctor: "Dr. Robert Adams",
          patient: "James Wilson",
          medication: "Losartan 50mg",
          dateIssued: "March 20, 2025",
          status: "Pending",
        },
        {
          id: "RX006",
          doctor: "Dr. John Doe",
          patient: "Linda Smith",
          medication: "Amlodipine 5mg",
          dateIssued: "March 18, 2025",
          status: "Fulfilled",
        },
        {
          id: "RX007",
          doctor: "Dr. Emily White",
          patient: "David Brown",
          medication: "Salbutamol 100mcg",
          dateIssued: "March 21, 2025",
          status: "Pending",
        },
        {
          id: "RX008",
          doctor: "Dr. Sarah Johnson",
          patient: "Sophia Lee",
          medication: "Levothyroxine 75mcg",
          dateIssued: "March 22, 2025",
          status: "Fulfilled",
        },
        {
          id: "RX009",
          doctor: "Dr. Robert Adams",
          patient: "Daniel Walker",
          medication: "Atorvastatin 20mg",
          dateIssued: "March 19, 2025",
          status: "Rejected",
        },
        {
          id: "RX010",
          doctor: "Dr. William Lee",
          patient: "Nancy Green",
          medication: "Prednisone 10mg",
          dateIssued: "March 24, 2025",
          status: "Pending",
        },
        {
          id: "RX011",
          doctor: "Dr. John Doe",
          patient: "Richard Scott",
          medication: "Omeprazole 20mg",
          dateIssued: "March 27, 2025",
          status: "Fulfilled",
        },
        {
          id: "RX012",
          doctor: "Dr. Emily White",
          patient: "Eva Mitchell",
          medication: "Ibuprofen 400mg",
          dateIssued: "March 28, 2025",
          status: "Pending",
        },
        {
          id: "RX013",
          doctor: "Dr. Sarah Johnson",
          patient: "Jacob Wilson",
          medication: "Hydrochlorothiazide 12.5mg",
          dateIssued: "March 29, 2025",
          status: "Rejected",
        },
        {
          id: "RX014",
          doctor: "Dr. Robert Adams",
          patient: "Olivia Carter",
          medication: "Lisinopril 10mg",
          dateIssued: "March 30, 2025",
          status: "Fulfilled",
        },
        {
          id: "RX015",
          doctor: "Dr. William Lee",
          patient: "Benjamin Clark",
          medication: "Furosemide 20mg",
          dateIssued: "March 31, 2025",
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
