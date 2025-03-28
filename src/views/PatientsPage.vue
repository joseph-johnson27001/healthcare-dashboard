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
    };
  },
};
</script>
