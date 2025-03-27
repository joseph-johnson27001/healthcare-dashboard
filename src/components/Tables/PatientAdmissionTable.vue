<template>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>Patient ID</th>
          <th>Patient Name</th>
          <th>Admission Date</th>
          <th>Discharge Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(patient, index) in patients" :key="index">
          <td>{{ patient.id }}</td>
          <td>{{ patient.name }}</td>
          <td>{{ patient.admissionDate }}</td>
          <td>{{ patient.dischargeDate || "N/A" }}</td>
          <td
            :class="patient.status === 'Discharged' ? 'discharged' : 'admitted'"
          >
            {{ patient.status }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    patients: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

th,
td {
  text-align: left;
  border: 1px solid #ddd;
}

th {
  background-color: #f1f1f1;
}

td {
  font-size: 14px;
}

.discharged {
  color: green;
}

.admitted {
  color: red;
}
</style>
