<template>
  <TableCard>
    <FullPatientTable :patients="patients" />
  </TableCard>
</template>

<script>
import FullPatientTable from "@/components/Tables/FullPatientTable.vue";
import TableCard from "@/components/UI/TableCard.vue";

export default {
  components: {
    FullPatientTable,
    TableCard,
  },
  data() {
    return {
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
