<template>
  <div class="table-container">
    <div class="table-header">
      <span class="table-title">Patient Admissions</span>
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search..."
        class="search-bar"
      />
    </div>

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
          v-for="(patient, index) in filteredPatients"
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

    <!-- Pagination Controls -->
    <div class="pagination">
      <div class="page-numbers">
        <button
          v-for="pageNumber in totalPages"
          :key="pageNumber"
          :class="{ 'active-page': currentPage === pageNumber }"
          @click="goToPage(pageNumber)"
          class="pagination-button"
        >
          {{ pageNumber }}
        </button>
      </div>
    </div>
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
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 10,
      searchQuery: "",
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.filteredPatients.length / this.itemsPerPage);
    },
    filteredPatients() {
      return this.patients.filter((patient) => {
        const searchTerm = this.searchQuery.toLowerCase();
        return (
          patient.id.toLowerCase().includes(searchTerm) ||
          patient.name.toLowerCase().includes(searchTerm) ||
          patient.admissionDate.toLowerCase().includes(searchTerm) ||
          (patient.dischargeDate &&
            patient.dischargeDate.toLowerCase().includes(searchTerm)) ||
          patient.status.toLowerCase().includes(searchTerm)
        );
      });
    },
    paginatedPatients() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredPatients.slice(start, end);
    },
  },
  methods: {
    goToPage(pageNumber) {
      if (pageNumber >= 1 && pageNumber <= this.totalPages) {
        this.currentPage = pageNumber;
      }
    },
  },
};
</script>

<style scoped>
.table-container {
  background-color: #ffffff;
}

.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.table-title {
  font-family: "Assistant", sans-serif;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  color: #345a98;
}

.search-bar {
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  width: 300px;
  outline: none;
  font-size: 15px;
  background: none;
  font-family: "Assistant", sans-serif;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
}

th,
td {
  padding: 15px;
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

.pagination {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
}

.pagination-button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
}

.pagination-button:disabled {
  background-color: #ddd;
  cursor: not-allowed;
}

.page-numbers {
  display: flex;
  gap: 8px;
}

.page-numbers button {
  background-color: #f1f1f1;
  color: #444;
  border: none;
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
}

.page-numbers button.active-page {
  background-color: #28a745;
  color: white;
}
</style>
