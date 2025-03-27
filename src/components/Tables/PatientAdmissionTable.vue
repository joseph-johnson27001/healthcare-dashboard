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
        <tr
          v-for="(patient, index) in patients"
          :key="index"
          :class="{ 'hover-row': true }"
        >
          <td>{{ patient.id }}</td>
          <td>{{ patient.name }}</td>
          <td>{{ patient.admissionDate }}</td>
          <td>{{ patient.dischargeDate || "N/A" }}</td>
          <td
            :class="{
              discharged: patient.status === 'Discharged',
              admitted: patient.status === 'Admitted',
            }"
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
.table-container {
  background-color: #ffffff;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
}

th,
td {
  padding: 12px 15px;
  border-left: none;
  border-right: none;
  text-align: left;
  font-size: 14px;
}

th {
  background: rgba(50, 180, 120);
  color: white;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

td {
  color: #444;
}

tr:hover {
  background-color: rgba(39, 148, 97, 0.1);
}

.discharged {
  color: #28a745;
}

.admitted {
  color: #ff4d4d;
}

.hover-row:hover td {
  background-color: #f0f0f1;
}
</style>
